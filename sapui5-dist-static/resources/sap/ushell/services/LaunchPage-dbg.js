// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The Unified Shell's page builder service.
 *
 * @version 1.16.4
 */
(function () {
    "use strict";
    /*global jQuery, sap */
    jQuery.sap.declare("sap.ushell.services.LaunchPage");

    /**
     * This method MUST be called by the Unified Shell's container only, others MUST call
     * <code>sap.ushell.Container.getService("LaunchPage")</code>.
     * Constructs a new instance of the page builder service.
     *
     * @param {object} oAdapter
     *     the page builder adapter for the logon system
     * @param {object} oContainerInterface
     *     the interface provided by the container
     *
     * @class The Unified Shell's page builder service.
     *
     * @constructor
     * @see sap.ushell.services.Container#getService
     * @since 1.15.0
     * @private
     */
    sap.ushell.services.LaunchPage = function (oAdapter, oContainerInterface) {

        /**
         * A function which returns the groups of the user.
         * In case of success the <code>done</code> function should return an array of 'anonymous' groups.
         * For example [{...},{...},{...},...].
         * The order of the array is the order of groups that will be displayed to the user.
         * In case of failure the <code>fail</code> function of the promise will be called.
         *
         * @returns {object}
         *  jQuery.promise object.
         */
        this.getGroups = function () {
            return oAdapter.getGroups();
        };

        /**
         * A function which returns the default group.
         * In case of success the <code>done</code> function should return an 'anonymous' object
         * representing the default group.
         * In case of failure the <code>fail</code> function of the promise will be called.
         *
         * @returns {object}
         *  jQuery.promise object.
         */
        this.getDefaultGroup = function () {
            return oAdapter.getDefaultGroup();
        };

        /**
         * A function which returns group title
         *
         * @param {object} oGroup
         *     the group
         * @returns {string}
         *  group title
         */
        this.getGroupTitle = function (oGroup) {
            return oAdapter.getGroupTitle(oGroup);
        };

        /**
         * A function which returns group unique identifier
         *
         * @param {object} oGroup
         *     the group
         * @returns {string}
         *  group id
         */
        this.getGroupId = function (oGroup) {
            return oAdapter.getGroupId(oGroup);
        };

        /**
         * A function which returns an array of 'anonymous' tiles of a group.
         * For example [{...},{...},{...},...].
         * The order of the array is the order of tiles that will be displayed to the user.
         *
         * @param {object} oGroup
         *     the group
         * @returns {Array}
         *  the group tiles array
         */
        this.getGroupTiles = function (oGroup) {
            return oAdapter.getGroupTiles(oGroup);
        };

        /**
         * A function that adds a new group.
         * In case of success the <code>done</code> function should return the new added group.
         * Intention: the page builder adds this group to the end of the home screen.
         * In case of failure the <code>fail</code> function should return the consistent backend state of all groups.
         * The groups should be in form of the @see sap.ushell.services.LaunchPage.getGroups
         *
         * @param {string} sTitle
         *     the title of the new group
         * @returns {object}
         *  jQuery.promise object
         */
        this.addGroup = function (sTitle) {
            return oAdapter.addGroup(sTitle);
        };

        /**
         * A function that removes a group.
         * In case of success the <code>done</code> function should be called without any value.
         * Intention: the page builder already removed the page (or hide it from the user) and if successful nothing needs to be done
         * In case of failure the <code>fail</code> function should return the consistent backend state of all groups.
         * The groups should be in form of the @see sap.ushell.services.LaunchPage.getGroups
         *
         * @param {object} oGroup
         *     the group to be removed
         * @param {integer} iIndex
         *     the index for the group to be removed
         * @returns {object}
         *  jQuery.promise object
         */
        this.removeGroup = function (oGroup, iIndex) {
            return oAdapter.removeGroup(oGroup, iIndex);
        };

        /**
         * Resets the oGroup if it has been assigned to the user by an administrator.
         * Reset means that the group is set back to the state as the administrator has defined it;
         * changes from end user personalization are removed.
         * If oGroup is user-created the <code>fail</code> handler is called.
         * In case of success the <code>done</code> function should return the reseted group object.
         * A group can be reset multiple times
         * In case of failure the <code>fail</code> function should return the consistent backend
         * state of all groups.
         * The groups should be in form of the @see sap.ushell.services.LaunchPage.getGroups
         *
         * @param {object} oGroup
         *     the group to be reset
         * @param {integer} iIndex
         *     the index for the group to be reset
         * @returns {object}
         *  jQuery.promise object
         */
        this.resetGroup = function (oGroup, iIndex) {
            return oAdapter.resetGroup(oGroup, iIndex);
        };

        /**
         * Checks if a group can be removed. Returns true if the group can be removed and false if
         * group can only be reset.
         * oGroup should be in form of the @see sap.ushell.services.LaunchPage.getGroups
         *
         * @param {object} oGroup
         *     the group to be checked
         * @returns {boolean}
         *  true if removable; false if resettable
         */
        this.isGroupRemovable = function (oGroup) {
            return oAdapter.isGroupRemovable(oGroup);
        };

        /**
         * A function that moves a group to a new index.
         * In case of success the <code>done</code> function should be called without any value.
         * Intention: the page builder already moved the page (visible to the user) and if
         * successful nothing needs to be done In case of failure the <code>fail</code> function
         * should return the consistent backend state of all groups.
         * The groups should be in form of the @see sap.ushell.services.LaunchPage.getGroups
         *
         * @param {object} oGroup
         *     the group to be moved
         * @param {integer} iNewIndex
         *     the new index for the group
         * @returns {object}
         *  jQuery.promise object
         */
        this.moveGroup = function (oGroup, iNewIndex) {
            return oAdapter.moveGroup(oGroup, iNewIndex);
        };

        /**
         * A function that set a new title to an existing group.
         * In case of success the <code>done</code> function should return nothing
         * Intention: the page builder knows the new title, and if successful nothing needs to be done,
         *  as the title is already visible to the user
         * In case of failure the <code>fail</code> function should return the consistent backend state
         *  of the group title, in most cases the old title.
         *
         * @param {string} sTitle
         *     the new title of the group
         * @param {object} oGroup
         *     the group we need to set the title
         * @returns {object}
         *  jQuery.promise object
         */
        this.setGroupTitle = function (oGroup, sTitle) {
            return oAdapter.setGroupTitle(oGroup, sTitle);
        };

        /**
         * A function that adds a tile to the group.
         * If no group is defined, the tile is added to the default group.
         * In case of success the <code>done</code> function should return the new tile.
         * Intention: the page builder by default puts this tile at the end of the default group.
         * In case of failure the <code>fail</code> function should return the consistent backend state of the default group.
         * The tiles should be in form of the @see sap.ushell.services.LaunchPage.getGroupTiles
         *
         * @param {object} oCatalogTile
         *     an 'anonymous' tile from the catalog browser
         * @param {object} [oGroup]
         *     the target group is optional
         * @returns {object}
         *  jQuery.promise object
         */
        this.addTile = function (oCatalogTile, oGroup) {
            return oAdapter.addTile(oCatalogTile, oGroup);
        };

        /**
         * A function that adds a tile to the default group.
         * In case of success the <code>done</code> function should return the new tile.
         * Intention: the page builder already 'hid' (or removed) the tile.
         * In case of failure the <code>fail</code> function should return the consistent backend state of the group.
         * The tiles should be in form of the @see sap.ushell.services.LaunchPage.getGroupTiles
         *
         * @param {object} oTile
         *     a tile instance from a page
         * @param {object} oGroup
         *     the page we need to remove the tile from
         * @param {integer} iIndex
         *     the tile index
         * @returns {object}
         *  jQuery.promise object
         */
        this.removeTile = function (oGroup, oTile, iIndex) {
            return oAdapter.removeTile(oGroup, oTile, iIndex);
        };

        /**
         * A function that moves a tile in the same group or between different groups.
         * In case of success the <code>done</code> function should return nothing.
         * Intention: the page builder already moved the tile.
         * In case of failure the <code>fail</code> function should return the consistent backend state of the source group and the target group.
         * The result should be in a form {source:[{},{}], target:[{},{}]}.
         * The source and the target group tiles should be in form of the @see sap.ushell.services.LaunchPage.getGroupTiles
         *
         * @param {object} oTile
         *     a tile instance to be moved
         * @param {integer} iSourceIndex
         *     the index in the source group
         * @param {integer} iTargetIndex
         * the target group index, in case this parameter is not supplied we assume the move tile is within the source group using iSourceIndex
         * @param {object} oSourceGroup
         *     the source group the tile came from
         * @param {object} oTargetGroup
         *    (optional)the target group the tile will be placed in, in case this
         *     parameter is not supplied we assume the move tile is within the source group
         * @returns {object}
         *  jQuery.promise object
         */
        this.moveTile = function (oTile, iSourceIndex, iTargetIndex, oSourceGroup, oTargetGroup) {
            return oAdapter.moveTile(oTile, iSourceIndex, iTargetIndex, oSourceGroup, oTargetGroup);
        };

        /**
         * A function which returns the tile's unique identifier
         *
         * @param {object} oTile
         *     the tile
         * @returns {string}
         *  tile id
         */
        this.getTileId = function (oTile) {
            return oAdapter.getTileId(oTile);
        };

        /**
         * A function which returns UI5 view / control  of the tile
         *
         * @param {object} oTile
         *     the tile
         * @returns {object}
         *  view or control
         */
        this.getTileView = function (oTile) {
            return oAdapter.getTileView(oTile);
        };

        /**
         * A function which returns the tile size in the format of 1x1 or 1x2 string
         *
         * @param {object} oTile
         *     the tile
         * @returns {string}
         *  tile size in units in 1x1 format
         */
        this.getTileSize = function (oTile) {
            return oAdapter.getTileSize(oTile);
        };

        /**
         * A function which returns the tile's navigation target.
         * Assigning this to <code>location.hash</code> will open the app.
         *
         * @param {object} oTile
         *     the tile
         * @returns {string}
         *  the tile target
         */
        this.getTileTarget = function (oTile) {
            return oAdapter.getTileTarget(oTile);
        };

        /**
         * Refresh a tile with its latest data.
         * Only dynamic data should be updated, not the tile configuration itself.
         *
         * @param {object} oTile
         *      the tile
         */
        this.refreshTile = function (oTile) {
            oAdapter.refreshTile(oTile);
        };

        /**
         * A function which returns the catalogs of the user.
         * In case of success the <code>done</code> function should return an array of 'anonymous' catalog metadata objects.
         * For example [{...},{...},{...},...].
         * The catalogs will be displayed to the user according to their order in the array.
         * In case of failure the <code>fail</code> function of the promise will be called.
         *
         * @returns {object}
         *  jQuery.promise object.
         */
        this.getCatalogs = function () {
            return oAdapter.getCatalogs();
        };

        /**
         * Returns whether the catalogs collection previously returned by
         * <code>getCatalogs()</code> is still valid. Initially, this is <code>false</code>
         * until <code>getCatalogs()</code> has been called. Later, it might become
         * <code>false</code> again in case one of the catalogs has been invalidated, e.g. due to
         * the addition of a tile ("Add to catalog" scenario).
         *
         * @returns {boolean}
         * @since 1.16.4
         * @see #getCatalogs
         */
        this.isCatalogsValid = function () {
            return oAdapter.isCatalogsValid();
        };

        /**
         * A function which returns catalog unique identifier
         *
         * @param {object} oCatalog
         *     the catalog
         * @returns {string}
         *  catalog id
         */
        this.getCatalogId = function (oCatalog) {
            return oAdapter.getCatalogId(oCatalog);
        };

        /**
         * A function which returns catalog title
         *
         * @param {object} oCatalog
         *     the catalog
         * @returns {string}
         *  catalog title
         */
        this.getCatalogTitle = function (oCatalog) {
            return oAdapter.getCatalogTitle(oCatalog);
        };

        /**
         * A function which returns the tiles of a catalog.
         * In case of success the <code>done</code> function should return an array of 'anonymous' tiles of the catalog.
         * For example [{...},{...},{...},...].
         * In case of failure the <code>fail</code> function of the promise will be called.
         *
         * @param {object} oCatalog
         *     the catalog
         * @returns {object}
         *  jQuery.promise object.
         */
        this.getCatalogTiles = function (oCatalog) {
            return oAdapter.getCatalogTiles(oCatalog);
        };

        /**
         * A function which returns the unique identifier of a catalog tile
         *
         * @param {object} oCatalogTile
         *     the catalog tile
         * @returns {string}
         *  tile id
         */
        this.getCatalogTileId = function (oCatalogTile) {
            return oAdapter.getCatalogTileId(oCatalogTile);
        };

        /**
         * A function which returns the title of a catalog tile
         *
         * @param {object} oCatalogTile
         *     the catalog tile
         * @returns {string}
         *  tile title
         */
        this.getCatalogTileTitle = function (oCatalogTile) {
            return oAdapter.getCatalogTileTitle(oCatalogTile);
        };

        /**
         * A function which returns the size of a catalog tile in the format of 1x1 or 1x2 string
         *
         * @param {object} oCatalogTile
         *     the catalog tile
         * @returns {string}
         *  tile size in units in 1x1 or 1x2 format
         */
        this.getCatalogTileSize = function (oCatalogTile) {
            return oAdapter.getCatalogTileSize(oCatalogTile);
        };

        /**
         * A function which returns UI5 view / control  of the catalog tile
         *
         * @param {object} oCatalogTile
         *     the catalog tile
         * @returns {object}
         *  view or control
         */
        this.getCatalogTileView = function (oCatalogTile) {
            return oAdapter.getCatalogTileView(oCatalogTile);
        };

        /**
         * Get navigation target URL for a catalog tile.
         * This implicitly instantiates the catalog tile view if not existing
         * via {@link #getCatalogTileView(oCatalogTile)}.
         *
         * @param {object} oCatalogTile
         *     the catalog tile
         * @returns {string}
         *     the target URL for the catalog tile's underlying application as provided via the
         *     "preview" contract
         */
        this.getCatalogTileTargetURL = function (oCatalogTile) {
            return oAdapter.getCatalogTileTargetURL(oCatalogTile);
        };

        /**
         * Returns the keywords associated with a catalog tile which can be used to find the
         * catalog tile in a search.
         *
         * @param {object} oCatalogTile
         *      the catalog tile
         * @returns string[]
         *      the keywords associated with this catalog tile
         */
        this.getCatalogTileKeywords = function (oCatalogTile) {
            return oAdapter.getCatalogTileKeywords(oCatalogTile);
        };

        /**
         * Get preview title for a catalog tile.
         *
         * @param {object} oCatalogTile
         *     the catalog tile
         * @returns {string}
         *     the preview title for the catalog tile's underlying application as provided via the
         *     "preview" contract
         * @since 1.16.3
         */
        this.getCatalogTilePreviewTitle = function (oCatalogTile) {
            return oAdapter.getCatalogTilePreviewTitle(oCatalogTile);
        };

        /**
         * Get preview icon for a catalog tile.
         *
         * @param {object} oCatalogTile
         *     the catalog tile
         * @returns {string}
         *     the preview icon as URL/URI for the catalog tile's underlying application as provided via the
         *     "preview" contract
         * @since 1.16.3
         */
        this.getCatalogTilePreviewIcon = function (oCatalogTile) {
            return oAdapter.getCatalogTilePreviewIcon(oCatalogTile);
        };

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
         */
        this.addBookmark = function (oParameters) {
            if (!oParameters.title) {
                throw new Error("Title missing in bookmark configuration");
            }
            if (!oParameters.url) {
                throw new Error("URL missing in bookmark configuration");
            }
            return oAdapter.addBookmark(oParameters);
        };

        /**
         * This method is called to notify that the given tile has been added to some remote
         * catalog which is not specified further.
         *
         * @param {string} sTileId
         *   the ID of the tile that has been added to the catalog (as returned by that OData POST
         *   operation)
         * @private
         * @since 1.16.4
         */
        this.onCatalogTileAdded = function (sTileId) {
            return oAdapter.onCatalogTileAdded(sTileId);
        };
    };
}());
