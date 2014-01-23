// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview Shell Navigation Services,
 */

/*global jQuery, sap, location, hasher, jQuery */

jQuery.sap.require("sap.ui.thirdparty.signals");
jQuery.sap.require("sap.ui.thirdparty.hasher");

jQuery.sap.require("sap.ui.core.routing.HashChanger");

jQuery.sap.declare("sap.ushell.services.ShellNavigation");

(function () {
    "use strict";
    /*global jQuery, sap, location, hasher */
    jQuery.sap.declare("sap.ushell.services.ShellNavigation");

    sap.ui.core.routing.HashChanger.extend("sap.ushell.services.ShellNavigationHashChanger", {

        constructor : function () {

            sap.ui.core.routing.HashChanger.apply(this);
            this.priv_initializedByShellNav = false;    // initialization flag for the shellNavigationService

            this.privfnShellCallback = null;
            this.privappHashPrefix = "&/";
            this.privhashPrefix = "#";

            /**
             * obtain the current shell hash (with #) urlDecoded
             * @private
             */
            this.privgetCurrentShellHash = function () {
                var res = this.privsplitHash(hasher.getHash());
                if (!res) {
                    return hasher.getHash();
                }
                return this.privhashPrefix + res.shellPart;
            };

            this.privgetCurrentShellHashNoHash = function () {
                var res = this.privsplitHash(hasher.getHash());
                if (!res) {
                    return hasher.getHash();
                }
                return res.shellPart;
            };

            /**
             * internal, construct the next hash, with #
             * @private
             */
            this.privconstructHash = function (sAppSpecific) {
                return this.privgetCurrentShellHash() + sAppSpecific;
            };

            /**
             * internal, without #
             * @private
             */
            this.privconstructShellHash = function (oShellHash) {
                return sap.ushell.Container.getService("URLParsing").constructShellHash(oShellHash);
            };

            // split a shell hash into app and shell specific part
            // this may be made part of URLParser
            this.privsplitHash = function (sHash) {
                if (sHash === undefined || sHash === null || sHash === "") {
                    return {};
                }
                // break down hash into parts
                // "#SO-ABC~CONTXT?ABC=3A&DEF=4B&/detail/1?A=B");
                var oShellHash =  sap.ushell.Container.getService("URLParsing").parseShellHash(sHash);
                return {  shellPart : (oShellHash && this.privstripLeadingHash(this.privconstructShellHash(oShellHash))) || null,
                          appSpecificRoute : (oShellHash && oShellHash.appSpecificRoute) || null }; // ,"&/detail/1?A=B");
            };

            /**
             * internal, central navigation hook trigger hash change
             * @private
             */
            this.privsetHash = function (sHash, writeHistory) {
                hasher.prependHash = "";
                sHash = this.privstripLeadingHash(sHash);
                if (writeHistory === undefined) {
                    writeHistory = true;
                }
                if (writeHistory) {
                    sap.ui.core.routing.HashChanger.prototype.setHash.apply(this, [sHash]);
                } else {
                    sap.ui.core.routing.HashChanger.prototype.replaceHash.apply(this, [sHash]);
                }
            };

            this.privstripLeadingHash = function (sHash) {
                if (sHash[0] === '#') {
                    return sHash.substring(1);
                }
                return sHash;
            };

            /// protected api, only used by shell services
            /**
             * returns a string which can be put into the DOM (e.g. in a link tag)
             *
             * @param {oArgs}
             *     object encoding a semantic object and action
             *  e.g. { target : { semanticObject : "AnObject", action: "Action" },
             *         params : { A : "B" } }
             *         or          
             *      { target : { shellHash : "SO-36&jumper=postman" },
             *      }
             * @returns {Object}
             *     the href for the specified parameters; always starting with a hash character; all parameters are URL-encoded
             *
             * @methodOf sap.ushell.services.ShellNavigation#
             * @name hrefForExternal
             * @since 1.15.0
             * @private
             */
            this.hrefForExternal = function (oArgs) {
                return "#" + encodeURI(this.privstripLeadingHash(this.privhrefForExternalNoEnc(oArgs)));
            };

            this.privhrefForExternalNoEnc = function (oArgs) {
                var r;
                if (oArgs === undefined) {
                    return "#" + this.privgetCurrentShellHashNoHash();
                }
                // construct url
                if (oArgs && oArgs.target && (typeof oArgs.target.semanticObject === "string" || typeof oArgs.target.shellHash === "string")) {
                    r = "#" + this.privconstructShellHash(oArgs);
                    return r;
                }
                return "#" + this.privgetCurrentShellHashNoHash();
            };

            /**
             * returns a string which can be put into the DOM (e.g. in a link tag)
             * given an app specific hash suffix
             * @param {string} sAppHash
             * @returns {string}
             *     a string which can be put into the link tag, containin ga shell suffix the parsed result
             *
              * example:
              *   hrefForAppSpecificHash("View1/details/0/")
              *   returns  "#MyApp-Display&/View1/details/0/"
              * @methodOf sap.ushell.services.ShellNavigation#
              * @name parseShellHash
              * @since 1.15.0
              * @private
              */
            this.hrefForAppSpecificHash = function (sAppHash) {
                return "#" + encodeURI(this.privconstructHash(this.privappHashPrefix + sAppHash));
            };

            /**
             *
             * Navigate to an external target
             *
             * @param {Object}  configuration object describing the target
             *
             *  e.g. { target : { semanticObject : "AnObject", action: "Action" },
             *         params : { A : "B" } }
             *
             * constructs sth like    http://....ushell#AnObject-Action?A=B ....
             * and navigates to it.
             * @private
             */
            this.toExternal = function (oArgs) {
                var sHash = this.privhrefForExternalNoEnc(oArgs);
                this.privsetHash(sHash);
            };

            /**
             * constructs the full shell hash and
             * sets it, thus triggering a navigation to it
             * @param {string} sAppHash specific hash
             * @param writeHistory if true it adds a history entry in the browser if not it replaces the hash
             * @private
             */
            this.toAppHash = function (sAppHash, writeHistory) {
                var sHash = this.privconstructHash(this.privappHashPrefix + sAppHash);
                this.privsetHash(sHash, writeHistory);
            };
        }
    });


    /**
     * Initialization for the shell navigation.
     * 
     * This will start listening to hash changes and also fire a hashchanged event with the initial hash.
     * @protected
     * @return false if it was initialized before, true if it was initialized the first time
     */
    sap.ushell.services.ShellNavigationHashChanger.prototype.initShellNavigation = function () {

        if (this.priv_initializedByShellNav) {
            jQuery.sap.log.info("initShellNavigation already called on this ShellNavigationHashChanger instance.");
            return false;
        }

        hasher.changed.add(this.treatHashChanged, this); //parse hash changes

        if (!hasher.isActive()) {
            hasher.initialized.addOnce(this.treatHashChanged, this); //parse initial hash
            hasher.init(); //start listening for history change
        } else {
            this.treatHashChanged(hasher.getHash());
        }
        this.priv_initializedByShellNav = true;
        return true;
    };

    /**
     * Initialization for the application
     * 
     * The init method of the base class is overridden, because the hasher initialization (registration for hash changes) is already done
     * in <code>initShellNavigation</code> method. The application-specific initialization ensures that the application receives a hash change event for the
     * application-specific part if set in the  initial hash.
     * @protected
     * @return false if it was initialized before, true if it was initialized the first time
     */
    sap.ushell.services.ShellNavigationHashChanger.prototype.init = function () {
        if (this.priv_initialized) {
            jQuery.sap.log.info("init already called on this ShellNavigationHashChanger instance.");
            return false;
        }
        // fire initial hash change event for the app-specific part
        var oNewHash = this.privsplitHash(hasher.getHash()),
            sAppSpecificRoute = (oNewHash.appSpecificRoute || "  ").substring(2);  // strip &/
        this.fireEvent("hashChanged", { newHash : sAppSpecificRoute });
        this.priv_initialized = true;
        return true;
    };

    /**
     * Fires the hashchanged event, may be extended to modify the hash before firing the event
     * @param newHash the new hash of the browser
     * @param oldHash - the previous hash
     * @protected
     */
    sap.ushell.services.ShellNavigationHashChanger.prototype.treatHashChanged = function (newHash, oldHash) {
        var sAppSpecificRoute,
            sOldAppSpecificRoute,
            oNewHash,
            oOldHash;
        oNewHash = this.privsplitHash(newHash);
        oOldHash = this.privsplitHash(oldHash);

        if (oNewHash.shellPart === oOldHash.shellPart && (oldHash !== undefined)) { // second condition holds true for initial load where we always want to trigger the shell navigation
            // app specific change only !
            sAppSpecificRoute = (oNewHash.appSpecificRoute || "  ").substring(2);  // strip &/
            sOldAppSpecificRoute = (oOldHash.appSpecificRoute || "  ").substring(2);  // strip &/
            // an empty string has to be propagated!
            this.fireEvent("hashChanged", { newHash : sAppSpecificRoute, oldHash : sOldAppSpecificRoute });
            return;
        }

        // all Shell specific callback -> load other app !
        this.fireEvent("shellHashChanged", { newShellHash : oNewHash.shellPart, newAppSpecificRoute : oNewHash.appSpecificRoute, oldShellHash :  oOldHash.shellPart});
        this.privfnShellCallback(oNewHash.shellPart, oNewHash.appSpecificRoute, oOldHash.shellPart);
    };

    /**
     * Sets the hash to a certain value, this hash is prefixed by the 
     * @param sHash the hash
     * @param writeHistory if true it adds a history entry in the browser if not it replaces the hash
     * @protected
     */
    sap.ushell.services.ShellNavigationHashChanger.prototype.setHash = function (sHash) {
        this.toAppHash(sHash, /*writeHistory*/true);
    };

    /**
     * Replaces the hash to a certain value. When using the replace function no browser history is written. 
     * If you want to have an entry in the browser history, please use set setHash function.
     * @param sHash the hash
     * @protected
     */
    sap.ushell.services.ShellNavigationHashChanger.prototype.replaceHash = function (sHash) {
        this.toAppHash(sHash, /* writeHistory */false);
    };

    /**
     * Gets the current hash
     * 
     * Override the implementation of the base class and just return the application-specific hash part
     * 
     * @protected
     */
    sap.ushell.services.ShellNavigationHashChanger.prototype.getHash = function () {
        return this.getAppHash();
    };

    /**
     * Gets the current application-specific hash part
     * 
     * 
     * @private
     */
    sap.ushell.services.ShellNavigationHashChanger.prototype.getAppHash = function () {
        var oNewHash = this.privsplitHash(hasher.getHash()),
            sAppSpecificRoute = (oNewHash.appSpecificRoute || "  ").substring(2);  // strip &/
        return sAppSpecificRoute;
    };

    /**
     * Cleans the event registration
     * @see sap.ui.base.Object.prototype.destroy
     * @protected
     */
    sap.ushell.services.ShellNavigationHashChanger.prototype.destroy = function () {
        hasher.changed.remove(this.fireHashChanged);
        sap.ui.core.routing.HashChanger.prototype.destroy.apply(this, arguments);
    };


    /**
     * This method MUST be called by the Unified Shell's container only, others MUST call
     * <code>sap.ushell.Container.getService("ShellNavigation")</code>.
     * Constructs a new instance of the shell navigation service.
     *
     * @class The Unified Shell's internal navigation service (platform independent)
     *
     * This interface is for consumption by shell renderers/containers only
     *
     * It is not for direct usage by applications, see
     * 
     * inner app navigation : 
     * cross app navigation : @see CrossApplicationNavigation
     * 
     *
     * Usage:
     *
     * example: see renders/fiorisandbox/Shell.controller.js
     *
     * {code}
     *   jquery.sap.require("sap.ushell.services.ShellNavigator");
     *   Shell.onHashChange(shellHash,appHash) {  / *resolve url, load app and exchange root view* / }
     *   Shell.init() {
     *     this.privShellNavigator =  sap.ushell.services.ShellNavigator();
     *     this.privShellNavigator.init(jQuery.proxy(this.doHashChange,this));
     *   }
     * {code}
     *
     * Note: further app specific integration via the reference app reuse code
     *  (setting of app specific handler)
     *
     * @constructor
     * @see sap.ushell.services.Container#getService
     * @since 1.15.0
     * @private
     */
    function ShellNavigation() {
        // instantiate and exchange the HashChanger from UI5
        this.hashChanger = new sap.ushell.services.ShellNavigationHashChanger();
        /////////////////////////////// api for external usage

        /**
        * returns a string which can be put into the DOM (e.g. in a link tag)
        *
        * @param {oArgs}
        *     object encoding a semantic object and action
        *  e.g. { target : { semanticObject : "AnObject", action: "Action" },
        *         params : { A : "B" } }
        *         or          
        *      { target : { shellHash : "SO-36&jumper=postman" },
        *      }
        * @returns {Object}
        *     the href for the specified parameters; always starting with a hash character; all parameters are URL-encoded
        *
        * @methodOf sap.ushell.services.ShellNavigation#
        * @name hrefForExternal
        * @since 1.15.0
        * @private
         */
        this.hrefForExternal = function (oArgs) {
            return this.hashChanger.hrefForExternal(oArgs);
        };

        /**
         * returns a string which can be put into the DOM (e.g. in a link tag)
         * given an app specific hash suffix
         * @param {string} sAppHash
         * @returns {string}
         *     a string which can be put into the link tag, containin ga shell suffix the parsed result
         *
         * example:
         *   hrefForAppSpecificHash("View1/details/0/")
         *   returns  "#MyApp-Display&/View1/details/0/"
         * @methodOf sap.ushell.services.ShellNavigation#
         * @name parseShellHash
         * @since 1.15.0
         * @private
          */
        this.hrefForAppSpecificHash = function (sAppHash) {
            return this.hashChanger.hrefForAppSpecificHash(sAppHash);
        };

        /**
        *
        * Navigate to an external target
        *
        * @param {Object}  configuration object describing the target
        *
        *  e.g. { target : { semanticObject : "AnObject", action: "Action" },
        *         params : { A : "B" } }
        *
        * constructs sth like    http://....ushell#AnObject-Action?A=B ....
        * and navigates to it.
        * @private
        */
        this.toExternal = function (oArgs) {
            this.hashChanger.toExternal(oArgs);
        };

        /**
         * constructs the full shell hash and
         * sets it, thus triggering a navigation to it
         * @param {string} sAppHash specific hash
         * @param writeHistory if true it adds a history entry in the browser if not it replaces the hash
         * @private
         */
        this.toAppHash = function (sAppHash, writeHistory) {
            this.hashChanger.toAppHash(sAppHash, writeHistory);
        };

        // Lifecycle methods

        /**
         * Initialisation:
         * This method is to be invoked by the Shell to
         * -register the event listener
         * -register it's container callback for the (currently single) ShellHash changes.
         * signature of the callback   fn(
         *         sShellHashPart,  // to be resolved and used for application loading
         *         sAppSpecificPart // typically ignored
         *         sOldShellHashPart, // for bookkeeping only (unreliable)
         *
         * @private
         */
        this.init = function (fnShellCallback) {
            hasher.prependHash = "";
            sap.ui.core.routing.HashChanger.replaceHashChanger(this.hashChanger);
            this.hashChanger.privfnShellCallback = fnShellCallback;
            this.hashChanger.initShellNavigation();
            return this;
        };

    } // ShellNavigation

    sap.ushell.bootstrap = sap.ushell.bootstrap || function (sPlatform) { };


    sap.ushell.services.ShellNavigation = new ShellNavigation();

}());
