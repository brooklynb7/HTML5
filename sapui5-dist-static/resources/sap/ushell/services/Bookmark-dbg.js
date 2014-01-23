// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The Unified Shell's bookmark service, which allows you to create shortcuts on the
 * user's home page.
 *
 * @version 1.16.4
 */
(function () {
    "use strict";
    /*global jQuery, sap */
    jQuery.sap.declare("sap.ushell.services.Bookmark");

    /**
     * This method MUST be called by the Unified Shell's container only, others MUST call
     * <code>sap.ushell.Container.getService("Bookmark")</code>.
     * Constructs a new instance of the bookmark service.
     *
     * @class The unified shell's bookmark service, which allows you to create shortcuts on the
     * user's home page.
     *
     * @constructor
     * @see sap.ushell.services.Container#getService
     * @since 1.15.0
     * @public
     */
    sap.ushell.services.Bookmark = function () {
        /**
         * Adds a bookmark to the user's home page.
         *
         * @param {object} oParameters
         *   bookmark parameters. In addition to title and URL, a bookmark might allow additional
         *   settings, such as an icon or a subtitle. Which settings are supported depends
         *   on the environment in which the application is running. Unsupported parameters will be
         *   ignored.
         * @param {string} oParameters.title
         *   The title of the bookmark.
         * @param {string} oParameters.url
         *   The URL of the bookmark. If the target application shall run in the Shell the URL has
         *   to be in the format <code>"#SO-Action~Context?P1=a&P2=x&/route?RPV=1"</code>
         * @param {string} [oParameters.icon]
         *   The optional icon URL of the bookmark (e.g. <code>"sap-icon://home"</code>).
         * @param {string} [oParameters.info]
         *   The optional information text of the bookmark.
         * @param {string} [oParameters.subtitle]
         *   The optional subtitle of the bookmark.
         * @param {string} [oParameters.serviceUrl]
         *   The URL to a REST or OData service that provides some dynamic information for the
         *   bookmark.
         * @param {string} [oParameters.serviceRefreshInterval]
         *   The refresh interval for the <code>serviceUrl</code> in seconds.
         * @param {string} [oParameters.numberUnit]
         *   The unit for the number retrieved from <code>serviceUrl</code>.
         * @returns {object}
         *   a jQuery promise.
         *
         * @see sap.ushell.services.URLParsing#getShellHash
         * @since 1.15.0
         * @public
         */
        this.addBookmark = function (oParameters) {
            return sap.ushell.Container.getService("LaunchPage").addBookmark(oParameters);
        };
    };
    sap.ushell.services.Bookmark.hasNoAdapter = true;
}());
