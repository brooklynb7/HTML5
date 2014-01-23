// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The Unified Shell's container adapter for standalone demos.
 *
 * @version @version@
 */
/**
 * @namespace Default namespace for Unified Shell adapters for standalone demos. They can usually
 * be placed directly into this namespace, e.g.
 * <code>sap.ushell.adapters.demo.ContainerAdapter</code>.
 *
 * @name sap.ushell.adapters.demo
 * @see sap.ushell.adapters.demo.ContainerAdapter
 * @since 1.15.0
 */
(function () {
    "use strict";
    /*global jQuery, sap */
    jQuery.sap.declare("sap.ushell.adapters.demo.ContainerAdapter");

    jQuery.sap.require("sap.ushell.User");

    /**
     * This method MUST be called by the Unified Shell's container only, others MUST call
     * <code>sap.ushell.services.initializeContainer("demo")</code>.
     * Constructs a new instance of the container adapter for standalone demos.
     *
     * @param {sap.ushell.System} oSystem
     *     the logon system (alias, platform, base URL)
     *
     * @class The Unified Shell's container adapter which does the bootstrap for standalone demos.
     *
     * @constructor
     * @see sap.ushell.services.initializeContainer
     * @since 1.15.0
     */
    sap.ushell.adapters.demo.ContainerAdapter = function (oSystem) {

        var oUser = new sap.ushell.User({});

        /**
         * Returns the logon system.
         *
         * @returns {sap.ushell.System}
         *     object providing information about the system where the container is logged in
         *
         * @since 1.15.0
         */
        this.getSystem = function () {
            return oSystem;
        };

        /**
         * Returns the logged-in user.
         *
         * @returns {sap.ushell.User}
         *      object providing information about the logged-in user
         *
         * @since 1.15.0
         */
        this.getUser = function () {
            return oUser;
        };

        /**
         * Does the bootstrap for the demo platform (and loads the container's configuration).
         *
         * @returns {jQuery.Promise}
         *     a promise that is resolved once the bootstrap is done
         *
         * @since 1.15.0
         */
        this.load = function () {
            var oDeferred = new jQuery.Deferred();
            oDeferred.resolve();
            return oDeferred.promise();
        };

        /**
         * Logs out the current user from this adapter's systems backend system.
         *
         * @returns {jQuery.Deferred}
         *          a <code>jQuery.Deferred</code> object's promise to be resolved when logout is
         *          finished, even when it failed
         * @since 1.15.0
         * @public
         */
        this.logout = function () {
            jQuery.sap.log.info("Logout", null, "sap.ushell.adapters.demo.ContainerAdapter");
            return new jQuery.Deferred().resolve().promise();
        };
    };
}());