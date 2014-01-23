// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The Unified Shell's user information service, which allows you to retrieve
 *     information about the user.
 *
 * @version 1.16.4
 */
(function () {
    "use strict";
    /*global jQuery, sap */
    jQuery.sap.declare("sap.ushell.services.UserInfo");

    /**
     * This method MUST be called by the Unified Shell's container only, others MUST call
     * <code>sap.ushell.Container.getService("UserInfo")</code>.
     * Constructs a new instance of the user information service.
     *
     * @class The Unified Shell's user information service, which allows you to retrieve
     *     information about the logged-in user.
     *
     * @constructor
     * @see sap.ushell.services.Container#getService
     * @since 1.16.3
     * @public
     */
    sap.ushell.services.UserInfo = function () {
        /**
         * Returns the id of the user.
         *
         * @returns {string}
         *   the user id.
         *
         * @since 1.16.3
         * @public
         */
        this.getId = function () {
            return sap.ushell.Container.getUser().getId();
        };
    };
    sap.ushell.services.UserInfo.hasNoAdapter = true;
}());
