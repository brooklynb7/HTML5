// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The Unified Shell's container adapter for a development sandbox.
 *
 * @version @version@
 */
/**
 * @namespace Default namespace for Unified Shell adapters for development sandbox scenarios. They
 * can usually be placed directly into this namespace, e.g.
 * <code>sap.ushell.adapters.sandbox.ContainerAdapter</code>.
 *
 * @name sap.ushell.adapters.sandbox
 * @see sap.ushell.adapters.sandbox.ContainerAdapter
 * @since 1.15.0
 */
(function () {
    "use strict";
    /*global jQuery, sap */
    jQuery.sap.declare("sap.ushell.adapters.sandbox.ContainerAdapter");

    jQuery.sap.require("sap.ushell.User");

    /**
     * This method MUST be called by the Unified Shell's container only, others MUST call
     * <code>sap.ushell.services.initializeContainer("sandbox")</code>.
     * Constructs a new instance of the container adapter for development sandbox scenarios.
     *
     * @param {sap.ushell.System} oSystem
     *     the logon system (alias, platform, base URL)
     *
     * @class The Unified Shell's container adapter which does the bootstrap for development
     * sandbox scenarios.
     *
     * @constructor
     * @see sap.ushell.services.initializeContainer
     * @since 1.15.0
     */
    sap.ushell.adapters.sandbox.ContainerAdapter = function (oSystem) {

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
         * Does the bootstrap for the sandbox platform (and loads the container's configuration).
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
    };
}());