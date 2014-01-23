// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview URL Parsing shell services
 */
(function () {
    "use strict";
    /*global jQuery, sap */
    jQuery.sap.declare("sap.ushell.services.URLParsing");

    // usage : sap.ushell.Container.getService("URLParsing").parseShellHash etc.

    /**
     * This method MUST be called by the Unified Shell's container only, others MUST call
     * <code>sap.ushell.Container.getService("URLParsing")</code>.
     * Constructs a new instance of the URL parsing service.
     *
     * @class The Unified Shell's internal URL parsing service (platform independent)
     *
     * @constructor
     * @see sap.ushell.services.Container#getService
     * @since 1.15.0
     * @private
     */
    sap.ushell.services.URLParsing = function () {

        /**
         * Extract the Shell hash# part from an URL
         * The application specific route part is removed
         * @see getHash for a function which retains the app specific route
        *
        * Shell services shall shall use this service to extract relevant
        * parts of an URL from an actual URL string (which should be treated as opaque)
        * <p>
        * The URL has to comply with the Fiori-Wave 2 agreed upon format
        *
        * <p>
        * This service shall be used to extract a hash part from an url.
        * The result can be further broken up by parseShellHash
        *
        * examples <p>
        *
        * http://a.b.c?defhij#SemanticObject-Action~Context?PV1=A&PV2=B&/appspecific
        * <br/>
        * returns : "#SemanticObject-Action~Context?PV1=A&PV2=B&/appspecific"
        *
        * Note: the results when passing an illegal url are undefined and subject to change
        * w.o. notice. Notably futher checks may added
        *
        * @param {string} sShellHashString
        *     a valid (Shell) url, e.g. . "http://xx.b.c#Object-name~AFE2==?PV1=PV2&PV4=V5&/display/detail/7?UU=HH
        * @returns {Object}
        *     the parsed result
        *
        *
        * @methodOf sap.ushell.services.URLParser#
        * @name parseShellHash
        * @since 1.15.0
         * @private
        */
        this.getShellHash = function (sURL) {
            /*jslint regexp : true*/
            var re = /[^#]*#(([^&]|&[^\/])*)(&\/.*)?/,
                match = re.exec(sURL);
            if (match) {
                return match[1];
            }
            return undefined;
        };

        /**
         * Extract a hash part from an URL, including an app-specific part
         * @param {String} sURL
         *   any value
         * @returns {String}
         *   <code>extracted string</code> if and only if a hash is present, undefined otherwise
         * @since 1.15.0
         * @private
         */
        this.getHash = function (sURL) {
            /*jslint regexp : true*/
            var re = /[^#]#(.*)/,
                match = re.exec(sURL);
            if (match) {
                return match[1];
            }
            return undefined;
        };

        /**
         * Decompose a shell Hash into the respective parts
         * @param {String} sHash
         *  Hash part of a shell conformant URL
         *  {code}#SO-Action~Context?P1=a&P2=x&/route?RPV=1{code}
         *  the hash part of an URL, e.g. {code}"#Object-name~AFE2==?PV1=PV2&PV4=V5&/display/detail/7?UU=HH{code}
         *
         *  Note that params always has an Array for each parameter value!
         *
         * @returns {object}
         *   <code>undefined </code> if not a parseable hash
         *   <code> { semanticObject : string,
         *            action : string,
         *            contextRaw : string
         *            params :  MapObject<String,Array[String]>,
         *            appSpecificRoute : string
         *          }
         *
         * @methodOf sap.ushell.services.URLParsing#
         * @name parseShellHash
         * @since 1.15.0
         * @private
         */
        this.parseShellHash = function (sHash) {
            /*jslint regexp : true*/
            var re = /([A-Za-z0-9_\/]+)-([A-Za-z0-9_\/\-]+)(~([A-Z0-9a-z=+\/]+))?(([^&]|(&[^\/]))*)(&\/.*)?/,
                sSemanticObject,
                sAction,
                sContext,
                sParams,
                sAppTail,
                match,
                pm,
                pmx,
                a;
            if (!sHash) {
                return undefined;
            }
            match = re.exec(sHash);
            if (match) {
                sSemanticObject = match[1];
                sAction = match[2];
                sContext = match[4];
                sParams = match[5];
                sAppTail = match[8];
                pm = sParams ? jQuery.sap.getUriParameters(sParams).mParams : {};
                return { semanticObject : sSemanticObject,
                    action : sAction,
                    contextRaw : sContext,
                    params : pm,
                    appSpecificRoute : sAppTail };
            }
            return undefined;
        };



        this.privstripLeadingHash = function (sHash) {
            if (sHash[0] === '#') {
                return sHash.substring(1);
            }
            return sHash;
        };

        /**
         * split a Unified Shell compliant hash into a part with compose a shell Hash from it's respective parts
         * @param {String} sHash
         *  Hash part of a shell conformant URL
         *  {code}#SO-Action~Context?P1=a&P2=x&/route?RPV=1{code}
         *  the hash part of an URL, e.g. {code}"#Object-name~AFE2==?PV1=PV2&PV4=V5&/display/detail/7?UU=HH{code}
         *
         *  Note that params always has an Array for each parameter value!
         *
         * @param {object}
         *   <code>undefined </code> if not a parseable hash
         *   <code> { shellHash : "Object-name~AFE2==?PV1=PV2&PV4=V5",
         *            appSpecificRoute : "display/detail/7?UU=HH"
         *          }
         *    </code>
         * @methodOf sap.ushell.services.URLParsing#
         * @name splitHash
         * @since 1.15.0
         * @private
         */
        this.splitHash = function (sHash) {
            var oShellHash,
                shellPart;
            if (sHash === undefined || sHash === null || sHash === "") {
                return {};
            }
            // break down hash into parts
            // "#SO-ABC~CONTXT?ABC=3A&DEF=4B&/detail/1?A=B");
            oShellHash = this.parseShellHash(sHash);
            if (!oShellHash) {
                return { };
            }
            // reconstruct shell part
            shellPart = this.privstripLeadingHash(this.constructShellHash(oShellHash));
            return {  shellPart : shellPart,
                      appSpecificRoute : (oShellHash && oShellHash.appSpecificRoute) || undefined }; // ,"&/detail/1?A=B");
        };


        /**
         * compose a shell Hash from it's respective parts
         * @returns {string}
         *  the hash part of an URL, e.g. {code}"Object-name~AFE2==?PV1=PV2&PV4=V5&/display/detail/7?UU=HH{code}
         *  returns "" for an undefined object
         *
         * @param {object}
         *   <code>undefined </code> if not a parseable hash
         *   <code> { target : { semanticObject : string,
         *                       action : string,
         *                       contextRaw : string
         *            }
         *            params :  MapObject<String,Array[String]>,
         *            appSpecificRoute : string
         *          }
         *    </code>
         *
         *    xor
         *
         *   <code> { target : { shellHash }
         *          }
         *    </code>
         *
         * @methodOf sap.ushell.services.URLParsing#
         * @name parseShellHash
         * @since 1.15.0
         * @private
         */
        this.constructShellHash = function (oShellHash) {
            var shellPart,
                i = null,
                k,
                lst = [],
                first = "?",
                a = null;
            if (!oShellHash) {
                return "";
            }
            if (!oShellHash.target) {
                oShellHash.target = {};
                oShellHash.target.semanticObject = oShellHash.semanticObject;
                oShellHash.target.action = oShellHash.action;
                oShellHash.target.contextRaw = oShellHash.contextRaw;
            }
            if (oShellHash.target.shellHash) {
                return this.privstripLeadingHash(oShellHash.target.shellHash);
            }
            // reconstruct shell part
            shellPart = oShellHash.target.semanticObject + "-"
                    + oShellHash.target.action;
            if (oShellHash.target.contextRaw) {
                shellPart += "~" + oShellHash.target.contextRaw;
            }
            first = "?";
            a = null;
            lst = [];
            for (a in oShellHash.params) {
                if (oShellHash.params.hasOwnProperty(a)) {
                    lst.push(a);
                }
            }
            lst.sort();
            for (k = 0; k < lst.length; k = k + 1) {
                a = lst[k];
                if (jQuery.isArray(oShellHash.params[a])) {
                    for (i = 0; i < oShellHash.params[a].length; i = i + 1) {
                        shellPart += first + a + "=" + encodeURIComponent(oShellHash.params[a][i]); // TODO urlencode
                        first = "&";
                    }
                } else {
                    shellPart += first + a + "=" + encodeURIComponent(oShellHash.params[a]); // TODO urlencode
                    first = "&";
                }
                // URLENCODE!
            }
            return shellPart;
        };
    };
    sap.ushell.services.URLParsing.hasNoAdapter = true;
}());
