// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview Cross Application Navigation
 *
 *   This file exposes an API to perform (Invoke) Cross Application Navigation
 *   for applications for cross app navigation
 *
 *   it exposes interfaces to perform a hash change and/or trigger an external navigation
 *
 * @version 1.16.4
 */


/*global jQuery, sap */
jQuery.sap.declare("sap.ushell.services.CrossApplicationNavigation");

(function () {
    "use strict";
    /*global jQuery, sap, location, hasher */
    jQuery.sap.declare("sap.ushell.services.CrossApplicationNavigation");

    /**
     * This method MUST be called by the Unified Shell's container only, others MUST call
     * <code>sap.ushell.Container.getService("CrossApplicationNavigation")</code>.
     * Constructs a new instance of the CrossApplicationNavigation service.
     *
     * @class The Unified Shell's CrossApplicationNavigation service, which allows to
     *        navigate to external targets or create links to external targets
     *
     * CrossApplicationNavigation currently provides platform independent functionality.
     *
     * This interface is for usage by applications or shell renderers/containers.
     *
     * Usage:
     *
     * example: see demoapps/appNavSample/MainXML.controller.js
     *
     * {code}
     *   jquery.sap.require("sap.ushell.services.CrossApplicationNavigation");
     *   var fgetService =  sap.ushell && sap.ushell.Container && sap.ushell.container.getService;
     *   var xnavservice = fgetService && fgetService("CrossApplicationNavigation");
     *   var href = ( xnavservice && xnavservice.hrefForExternal({
     *          target : { semanticObject : "Product", action : "display" },
     *          params : { "ProductID" : [ "102343333" ] }
     *          })) || "";
     * {code}
     *
     * Note: further app specific integration via the reference app reuse code
     *  (setting of app specific handler)
     *
     * @constructor
     * @see sap.ushell.services.Container#getService
     * @since 1.15.0
     * @public
     */
    sap.ushell.services.CrossApplicationNavigation = function () {


        /**
        * Returns a string which can be put into the DOM (e.g. in a link tag)
        *
        * @param {oArgs}
        *     object encoding a semantic object and action
        *  e.g. { target : { semanticObject : "AnObject", action: "Action" },
        *         params : { A : "B" } }
        *  or
        *
        *      { target : { shellHash : "SO-36&jumper=postman" },
        *      }
        * @returns {Object}
        *     the href for the specified parameters; always starting with a hash character; all parameters are URL-encoded
        *
        * @methodOf sap.ushell.services.ShellNavigation#
        * @name hrefForExternal
        * @since 1.15.0
        * @public
         */
        this.hrefForExternal = function (oArgs) {
            if (sap.ushell && sap.ushell.services && sap.ushell.services.ShellNavigation) {
                return sap.ushell.services.ShellNavigation.hrefForExternal(oArgs);
            }
            jQuery.sap.log.debug("Shell not available, no Cross App Navigation");
            return "";
        };

        /**
        *
        * Navigate to an external target
        *
        * @param {Object}  configuration object describing the target
        *
        *  e.g. { target : { semanticObject : "AnObject", action: "Action" },
        *         params : { A : "B", C : [ "e", "j"] } }
        *
        * constructs sth. like   #AnObject-Action?A=B&C=e&C=j ....
        * and navigate to it via changing the local hash
        * @public
        */
        this.toExternal = function (oArgs) {
            if (sap.ushell && sap.ushell.services && sap.ushell.services.ShellNavigation) {
                sap.ushell.services.ShellNavigation.toExternal(oArgs);
                return;
            }
            jQuery.sap.log.debug("Shell not avialable, no Cross App Navigation");
            return;
        };


        /**
         * Returns a string which can be put into the DOM (e.g. in a link tag)
         * given an application specific hash suffix
         *
         * @param {string}
         *            sAppHash
         * @returns {string} a string which can be put into the link tag,
         *          containing the current shell navigation target and the
         *          specified application specific hash suffix
         *
         * Example: hrefForAppSpecificHash("View1/details/0/") returns
         * "#SemanticObject-Action&/View1/details/0/" if the current application
         * runs in the shell and was started using "SemanticObject-Action" as
         * shell navigation hash
         *
         * @methodOf sap.ushell.services.ShellNavigation#
         * @name hrefForAppSpecificHash
         * @since 1.15.0
         * @public
         */
        this.hrefForAppSpecificHash = function (sAppHash) {
            if (sap.ushell && sap.ushell.services && sap.ushell.services.ShellNavigation) {
                return sap.ushell.services.ShellNavigation.hrefForAppSpecificHash(sAppHash);
            }
            jQuery.sap.log.debug("Shell not avialable, no Cross App Navigation; fallback to app-specific part only");
            // TODO: check encoding
            return "#" + sAppHash;

        };

    }; // CrossApplicationNavigation
    sap.ushell.services.CrossApplicationNavigation.hasNoAdapter = true;
}());
