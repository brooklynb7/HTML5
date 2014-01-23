// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The <code>sap.ushell.System</code> object with related functions.
 */

(function () {
    "use strict";
    /*global jQuery, sap */
    jQuery.sap.declare("sap.ushell.System");

    // "private" methods (static) without need to access properties -------------


    // "public class" -----------------------------------------------------------

    /**
     * Constructs a new representation (wrapper) of the system object as loaded by the
     * startup service.
     *
     * @param {object} oData
     *    the result of the startup service call
     * @class A representation of a system
     * @constructor
     * @since 1.15.0
     */
    sap.ushell.System = function (oData) {

        // BEWARE: constructor code below!

        // "private" or hidden methods --------------------------------------------

        // "public" methods -------------------------------------------------------

        /**
         * Returns this system's alias.
         *
         * @returns {string}
         *   this system's alias
         * @since 1.15.0
         */
        this.getAlias = function () {
            return oData.alias;
        };

        /**
         * Returns this system's base URL.
         *
         * @returns {string}
         *   this system's base URL
         * @since 1.15.0
         */
        this.getBaseUrl = function () {
            return oData.baseUrl;
        };

        /**
         * Returns this system's client.
         *
         * @returns {string}
         *   this system's client
         * @since 1.15.0
         */
        this.getClient = function () {
            return oData.client;
        };

        /**
         * Returns this system's name.
         *
         * @returns {string}
         *   this system's name
         * @since 1.15.0
         */
        this.getName = function () {
            return oData.system;
        };

        /**
         * Returns this system's platform.
         *
         * @returns {string}
         *   this system's platform ("abap", "hana" etc.)
         * @since 1.15.0
         */
        this.getPlatform = function () {
            return oData.platform;
        };

        /**
         * Adjusts the given URL so that it will be passed to this system.
         *
         * @param {string} sUrl
         *      the URL (which must be server-absolute)
         * @returns {string}
         *      the adjusted URL
         * @since 1.15.0
         */
        this.adjustUrl = function (sUrl) {
            /*jslint regexp:true */
            if (sUrl.indexOf('/') !== 0 || sUrl === '/') {
                throw new Error("Invalid URL: " + sUrl);
            }
            if (oData.baseUrl) {
                sUrl = oData.baseUrl.replace(/\/$/, "") + sUrl;
//            } else if (oData.alias) {
//                sUrl = sUrl.replace(/(\/.*?)(\/|$)/, "$1;s=" + oData.alias + "$2");
            }
            return sUrl;
        };

        // constructor code -------------------------------------------------------

        // "public" methods (static) ------------------------------------------------

    };

}());
