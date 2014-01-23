// Copyright (c) 2013 SAP AG, All Rights Reserved

(function () {
    "use strict";
    /*global jQuery, sap, console, document, $, setTimeout, window */
    /*jslint plusplus: true, nomen: true, bitwise: true */

    jQuery.sap.declare("sap.ushell.renderers.fiori2.launchpad.DashboardManager");
    jQuery.sap.require("sap.ushell.services.Message");
    jQuery.sap.require('sap.ushell.functionOverrideResizeEvent');
    jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-core');
    jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-widget');
    jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-mouse');
    jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-sortable');
    jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-draggable');
    jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-droppable');
    jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-effects-core');
    jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-effects-shake');

    /**
     * Return translated text. Private function in this module.
     * @param sMsgId
     *      Id of the text that is to be translated.
     */
    var getLocalizedText = function (sMsgId) {
        return sap.ushell.resources.i18n.getText(sMsgId);
    };

    sap.ui.base.EventProvider.extend("sap.ushell.renderers.fiori2.launchpad.DashboardManager", {
        metadata : {
            publicMethods : ["getModel", "getDashboardView", "getGroupListView", "loadPersonalizedGroups", "attachEvent", "detachEvent", "attachEventOnce"]
        },

        constructor : function (sId, mSettings) {
            //make this class only available once
            if (sap.ushell.renderers.fiori2.launchpad.getDashboardManager && sap.ushell.renderers.fiori2.launchpad.getDashboardManager()) {
                return sap.ushell.renderers.fiori2.launchpad.getDashboardManager();
            }
            sap.ushell.renderers.fiori2.launchpad.getDashboardManager = jQuery.sap.getter(this.getInterface());
            this.oPageBuilderService = sap.ushell.Container.getService("LaunchPage");
            this.oBookmarkService = sap.ushell.Container.getService("Bookmark");
            this.oModel = mSettings.model;
            this.oDashboardView = sap.ui.jsview("dashboard", "sap.ushell.renderers.fiori2.launchpad.dashboard.DashboardContent");
            this.oGroupListView = sap.ui.jsview("groupList", "sap.ushell.renderers.fiori2.launchpad.group_list.GroupList");
            this.oSortableDeferred = $.Deferred();
            this.oSortableDeferred.resolve();
            this.aRequestQueue = [];
            this.bRequestRunning = false;
            this.registerEvents();
        },

        registerEvents : function () {
            var oEventBus = sap.ui.getCore().getEventBus();

            oEventBus.subscribe("launchpad", "addBookmarkTile", this._createBookmark, this);
            oEventBus.subscribe("launchpad", "createGroup", this._createGroup, this);
            oEventBus.subscribe("launchpad", "deleteGroup", this._deleteGroup, this);
            oEventBus.subscribe("launchpad", "resetGroup", this._resetGroup, this);
            oEventBus.subscribe("launchpad", "changeGroupTitle", this._changeGroupTitle, this);
            oEventBus.subscribe("launchpad", "moveGroup", this._moveGroup, this);
            oEventBus.subscribe("launchpad", "addTile", this._createTile, this);
            oEventBus.subscribe("launchpad", "deleteTile", this._deleteTile, this);
            oEventBus.subscribe("launchpad", "moveTile", this._moveTile, this);
            oEventBus.subscribe("launchpad", "sortableStart", this._sortableStart, this);
            oEventBus.subscribe("launchpad", "sortableStop", this._sortableStop, this);
            oEventBus.subscribe("showCatalog", this.loadAllCatalogs, this);

            this.oDashboardView.addEventDelegate({
                onBeforeShow: jQuery.proxy(function (evt) {
                    this.loadPersonalizedGroups();
                }, this),
                onAfterHide: jQuery.proxy(function (evt) {
                    this._destroyAllGroupModels("/groups");
                }, this)
            });
        },

        _refreshTiles : function () {
            var that = this,
                aGroups = this.oModel.getProperty("/groups");

            jQuery.each(aGroups, function (nIndex, oGroup) {
                jQuery.each(oGroup.tiles, function (nIndex, oTile) {
                    that.oPageBuilderService.refreshTile(oTile.object);
                });
            });
        },

        _sortableStart : function () {
            this.oSortableDeferred = $.Deferred();
        },

        _sortableStop : function () {
            this.oSortableDeferred.resolve();
        },

        _handleAfterSortable : function(fFunc) {
            return $.proxy(function(){
                var outerArgs = Array.prototype.slice.call(arguments);
                this.oSortableDeferred.done(function(){
                    fFunc.apply(null, outerArgs);
                });
            }, this);
        },

        _addRequest : function(fRequest) {
            this.aRequestQueue.push(fRequest);
            if(!this.bRequestRunning) {
                this.bRequestRunning = true;
                this.aRequestQueue.shift()();
            }
        },

        _checkRequestQueue : function() {
            if(this.aRequestQueue.length === 0) {
                this.bRequestRunning = false;
            } else {
                this.aRequestQueue.shift()();
            }
        },

        _requestFailed : function() {
            this.aRequestQueue = [];
            this.bRequestRunning = false;
        },

        /*
         * oData should have the following parameters:
         * title
         */
        _createGroup : function (sChannelId, sEventId, oData) {
            var that = this,
                oGroup = this._getGroupModel(null),
                aGroups = this.oModel.getProperty("/groups"),
                oBus = sap.ui.getCore().getEventBus();
            this.oModel.setProperty("/groups/" + aGroups.length, oGroup);

            window.setTimeout($.proxy(oBus.publish, oBus, "launchpad", "scrollToGroup", { groupId : oGroup.groupId }), 1);

            // We don't call the backend here as the user hasn't had the opportunity to give the group a name yet.
            // The group will be persisted after it got a name, in the changeGroupTitle handler.
            // TODO: This depends on the behaviour of the GroupList, which enters edit-mode immediately after creating a group.
            //       It would be better if this event would be fired after the group has a name.
        },

        _getIndexOfGroup : function (sGroupId) {
            var nGroupIndex = null,
                aGroups = this.oModel.getProperty("/groups");
            jQuery.each(aGroups, function (nIndex, oGroup) {
                if (oGroup.groupId === sGroupId) {
                    nGroupIndex = nIndex;
                    return false;
                }
            });
            return nGroupIndex;
        },

        _getPathOfGroup : function (sGroupId) {
            return "/groups/" + this._getIndexOfGroup(sGroupId);
        },

        _getPathOfTile : function (sTileId) {
            var aGroups = this.oModel.getProperty("/groups"),
                nResGroupIndex = null,
                nResTileIndex = null;

            jQuery.each(aGroups, function (nGroupIndex, oGroup) {
                jQuery.each(oGroup.tiles, function (nTileIndex, oTile) {
                    if (oTile.uuid === sTileId) {
                        nResGroupIndex = nGroupIndex;
                        nResTileIndex = nTileIndex;
                        return false;
                    }
                });

                if(nResGroupIndex !== null) {
                    return false;
                }
            });

            return nResGroupIndex !== null ? "/groups/" + nResGroupIndex + "/tiles/" + nResTileIndex : null;
        },

        // see http://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
        _moveInArray : function (aArray, nFromIndex, nToIndex) {
            if (nToIndex >= aArray.length) {
                var k = nToIndex - aArray.length;
                while ((k--) + 1) {
                    aArray.push(undefined);
                }
            }
            aArray.splice(nToIndex, 0, aArray.splice(nFromIndex, 1)[0]);
        },

        /*
         * oData should have the following parameters
         * groupId
         */
        _deleteGroup : function (sChannelId, sEventId, oData) {
            var that = this,
                sGroupId = oData.groupId,
                aGroups = this.oModel.getProperty("/groups"),
                nGroupIndex = this._getIndexOfGroup(sGroupId),
                oGroup = null,
                oResultPromise;

            this._destroyGroupModel("/groups" + nGroupIndex);
            oGroup = aGroups.splice(nGroupIndex, 1)[0].object;
            this.oModel.setProperty("/groups", aGroups);

            this._addRequest($.proxy(function() {
                try {
                    oResultPromise = this.oPageBuilderService.removeGroup(oGroup);
                } catch (err) {
                    this._resetGroupsOnFailure("fail_to_delete_group_msg");
                    return;
                }

                oResultPromise.done($.proxy(function () {
                    this._showLocalizedMessage("group_deleted_msg");
                    this._checkRequestQueue();
                }, this));
                oResultPromise.fail(this._handleAfterSortable(that._resetGroupsOnFailureHelper("fail_to_delete_group_msg")));
            }, this));
        },

        /*
         * oData should have the following parameters
         * groupId
         */
        _resetGroup : function (sChannelId, sEventId, oData) {
            var that = this,
                sGroupId = oData.groupId,
                nGroupIndex = this._getIndexOfGroup(sGroupId),
                oGroup = this.oModel.getProperty("/groups/" + nGroupIndex),
                oResultPromise;

            this.oModel.setProperty("/groups/" + nGroupIndex + "/sortable", false);

            this._addRequest($.proxy(function() {
                try {
                    oResultPromise = this.oPageBuilderService.resetGroup(oGroup.object);
                } catch (err) {
                    this._resetGroupsOnFailure("fail_to_reset_group_msg");
                    return;
                }

                oResultPromise.done(this._handleAfterSortable($.proxy(function (sGroupId, oGroup, oResetedGroup) {
                    var nGroupIndex = that._getIndexOfGroup(sGroupId);

                this._loadGroup(nGroupIndex, oResetedGroup || oGroup.object);
                    this._showLocalizedMessage("group_reset_msg");
                    this.oModel.setProperty("/groups/" + nGroupIndex + "/sortable", true);
                    this._checkRequestQueue();
                }, this, sGroupId, oGroup)));

                oResultPromise.fail(this._handleAfterSortable(that._resetGroupsOnFailureHelper("fail_to_reset_group_msg")));
            }, this));
        },

        /*
         * oData should have the following parameters
         * fromIndex
         * toIndex
         */
        _moveGroup : function (sChannelId, sEventId, oData) {
            var iFromIndex = oData.fromIndex,
                iToIndex = oData.toIndex,
                aGroups = this.oModel.getProperty("/groups"),
                oGroup = aGroups[iFromIndex],
                sGroupId = oGroup.groupId,
                oResultPromise;

            this._moveInArray(aGroups, iFromIndex, iToIndex);
            this.oModel.setProperty("/groups", aGroups);

            if (oGroup.isDefaultGroup) {
                that.toggleDefaultGroupVisibility(false);
            }

            this._addRequest($.proxy(function() {
                var oGroup = this.oModel.getProperty(this._getPathOfGroup(sGroupId));
                try {
                    oResultPromise = this.oPageBuilderService.moveGroup(oGroup.object, iToIndex);
                } catch (err) {
                    this._resetGroupsOnFailure("fail_to_move_group_msg");
                    return;
                }

                oResultPromise.done($.proxy(this._checkRequestQueue, this));

                oResultPromise.fail(this._handleAfterSortable(this._resetGroupsOnFailureHelper("fail_to_move_group_msg")));
            }, this));
        },

        /*
         * oData should have the following parameters
         * groupId
         * newTitle
         */
        _changeGroupTitle : function (sChannelId, sEventId, oData) {
            var sNewTitle = oData.newTitle,
                sGroupId = oData.groupId,
                nGroupIndex = this._getIndexOfGroup(sGroupId),
                oGroup = this.oModel.getProperty("/groups/" + nGroupIndex),
                oResultPromise;

            this.oModel.setProperty("/groups/" + nGroupIndex + "/title", sNewTitle);

            // Check, if the group has already been persisted.
            if (!oGroup.object) {
                // Add the group in the backend.
                this._addRequest($.proxy(function() {
                    try {
                        oResultPromise = this.oPageBuilderService.addGroup(sNewTitle);
                    } catch (err) {
                        this._resetGroupsOnFailure("fail_to_create_group_msg");
                        return;
                    }

                    oResultPromise.done(this._handleAfterSortable($.proxy(function (sGroupId, oNewGroup) {
                        var nGroupIndex = this._getIndexOfGroup(sGroupId);
                        this._loadGroup(nGroupIndex, oNewGroup);
                        this._checkRequestQueue();
                    }, this, sGroupId)));

                    oResultPromise.fail(this._handleAfterSortable(this._resetGroupsOnFailureHelper("fail_to_create_group_msg")));
                }, this));
            } else {
                // Rename the group in the backend.
                // model is already changed - it only has to be made persistent in the backend
                this._addRequest($.proxy(function() {
                    try {
                        oResultPromise = this.oPageBuilderService.setGroupTitle(oGroup.object, sNewTitle);
                    } catch (err) {
                        this._resetGroupsOnFailure("fail_to_rename_group_msg");
                        return;
                    }

                    oResultPromise.done($.proxy(this._checkRequestQueue, this));

                    // Revert to the old title.
                    oResultPromise.fail(this._handleAfterSortable($.proxy(function (sGroupId, sOldTitle) {
                        var sGroupPath = this._getPathOfGroup(sGroupId);
                        this._showLocalizedError("fail_to_rename_group_msg");
                        this.oModel.setProperty(sGroupPath + "/title", sOldTitle);
                        this._requestFailed();
                    }, this, sGroupId)));
                }, this));
            }
        },

        _createTile : function (sChannelId, sEventId, oData) {
            var oCatalogTileContext = oData.catalogTileContext,
                oContext = oData.groupContext,
                sGroupId = this.oModel.getProperty(oContext.getPath()).groupId,
                oResultPromise;

            if (oContext.getObject().isDefaultGroup) {
                this.toggleDefaultGroupVisibility(true);
            }

            jQuery.sap.log.debug("Add catalog tile to dashboard", oData, this);

            if (!oCatalogTileContext) {
                jQuery.sap.log.warning("DashboardManager: Did not receive catalog tile object. Abort.", this);
                return;
            }

            this._addRequest($.proxy(function() {
                try {
                    oResultPromise = this.oPageBuilderService.addTile(oCatalogTileContext.getProperty("src"), oContext.getProperty("object"));
                } catch (err) {
                    this._resetGroupsOnFailure("fail_to_add_tile_msg");
                    return;
                }

                oResultPromise
                    .done(this._handleAfterSortable($.proxy(function(sGroupId, oTile) {
                        var sGroupPath = this._getPathOfGroup(sGroupId);
                        this._addTileToGroup(sGroupPath, oTile);
                        this._checkRequestQueue();
                    }, this, sGroupId)))
                    .done($.proxy(oCatalogTileContext.getModel().setProperty, oCatalogTileContext.getModel(), "active", true, oCatalogTileContext))
                    .fail(this._handleAfterSortable(this._resetGroupsOnFailureHelper("fail_to_add_tile_msg")));
            }, this));
        },

        _createBookmark : function (sChannelId, sEventId, oData) {
            this._addRequest($.proxy(function() {
                var oResultPromise = this.oBookmarkService.addBookmark(oData);

                oResultPromise.done($.proxy(this._checkRequestQueue, this));

                oResultPromise.fail(this._resetGroupsOnFailureHelper("fail_to_add_tile_msg"));
            }, this));
        },

        /*
         * oData should have the following parameters
         * tileId
         * groupId
         */
        _deleteTile : function (sChannelId, sEventId, oData) {
            var that = this,
                sTileId = oData.tileId,
                aGroups = this.oModel.getProperty("/groups");

            jQuery.each(aGroups, function (nGroupIndex, oGroup) {
                var bFoundFlag = false;
                jQuery.each(oGroup.tiles, function (nTileIndex, oTmpTile) {
                    if (oTmpTile.uuid === sTileId) {
                        // Remove tile from group.
                        that._destroyTileModel("/groups/" + nGroupIndex + "/tiles/" + nTileIndex);
                        var oTile = oGroup.tiles.splice(nTileIndex, 1)[0],
                            oResultPromise;

                        that.oModel.setProperty("/groups/" + nGroupIndex + "/tiles", oGroup.tiles);

                        if (oGroup.isDefaultGroup && oGroup.tiles.length == 0) {
                            that.toggleDefaultGroupVisibility(false);
                        }

                        that._addRequest(function() {
                            try {
                                oResultPromise = that.oPageBuilderService.removeTile(oGroup.object, oTile.object);
                            } catch (err) {
                                this._resetGroupsOnFailure("fail_to_remove_tile_msg");
                                return;
                            }

                            oResultPromise.done(that._handleAfterSortable(function () {
                                that._showLocalizedMessage("tile_deleted_msg");
                                that._checkRequestQueue();
                            }));
                            oResultPromise.fail(that._handleAfterSortable(that._resetGroupsOnFailureHelper("fail_to_remove_tile_msg")));
                        });

                        bFoundFlag = true;
                        return false;
                    }
                });
                if (bFoundFlag) {
                    return false;
                }
            });
        },

        /*
         * oData should have the following parameters:
         * fromGroupId
         * toGroupId
         * fromIndex
         * toIndex can be null => append as last tile in group
         */
        _moveTile : function (sChannelId, sEventId, oData) {
            var that = this,
                nNewIndex = oData.toIndex,
                sNewGroupId = oData.toGroupId,
                sTileId = oData.sTileId,

                oTile,
                nTileIndex,

                oOldGroup,
                nOldGroupIndex,

                oNewGroup,
                nNewGroupIndex,

                aGroups = this.oModel.getProperty("/groups");

            jQuery.each(aGroups, function (nTmpGroupIndex, oTmpGroup) {
                var bFoundFlag = false;
                jQuery.each(oTmpGroup.tiles, function (nTmpTileIndex, oTmpTile) {
                    if (oTmpTile.uuid === sTileId) {
                        oTile = oTmpTile;
                        nTileIndex = nTmpTileIndex;
                        oOldGroup = oTmpGroup;
                        nOldGroupIndex = nTmpGroupIndex;
                        bFoundFlag = true;
                        return false;
                    }
                });
                if (bFoundFlag) {
                    return false;
                }
            });
            jQuery.each(aGroups, function (nTmpGroupIndex, oTmpGroup) {
                if (oTmpGroup.groupId === sNewGroupId) {
                    oNewGroup = oTmpGroup;
                    nNewGroupIndex = nTmpGroupIndex;
                    
                    if (oOldGroup.isDefaultGroup && nOldGroupIndex != nNewGroupIndex && oOldGroup.tiles.length <= 1) {
                        that.toggleDefaultGroupVisibility(false);
                    }
                }
            });

            // When a tile is dragged into an empty group, the Plus-Tiles in the empty list cause
            // the new index to be off by one, i.e. 1 instead of 0, which causes an error.
            // This is a generic check which sanitizes the values if necessary.
            if (nNewIndex && nNewIndex > oNewGroup.tiles.length) {
                nNewIndex = oNewGroup.tiles.length;
            }

            if (oOldGroup.groupId === sNewGroupId) {
                if (nNewIndex === null || nNewIndex === undefined) {
                    // moved over group list to same group
                    oOldGroup.tiles.splice(nTileIndex, 1);
                    // Tile is appended. Set index accordingly.
                    nNewIndex = oOldGroup.tiles.length;
                    // append as last item
                    oOldGroup.tiles.push(oTile);
                } else {
                    this._moveInArray(oOldGroup.tiles, nTileIndex, nNewIndex);
                }
                this.oModel.setProperty("/groups/" + nOldGroupIndex + "/tiles", oOldGroup.tiles);
            } else {
                // remove from old group
                oOldGroup.tiles.splice(nTileIndex, 1);
                this.oModel.setProperty("/groups/" + nOldGroupIndex + "/tiles", oOldGroup.tiles);

                // add to new group
                if (nNewIndex === null || nNewIndex === undefined) {
                    // Tile is appended. Set index accordingly.
                    nNewIndex = oNewGroup.tiles.length;
                    // append as last item
                    oNewGroup.tiles.push(oTile);
                } else {
                    oNewGroup.tiles.splice(nNewIndex, 0, oTile);
                }
                this.oModel.setProperty("/groups/" + nNewGroupIndex + "/tiles", oNewGroup.tiles);
            }

            // change in backend
            var oSourceGroup = this.oModel.getProperty("/groups/" + nOldGroupIndex).object,
                oTargetGroup = this.oModel.getProperty("/groups/" + nNewGroupIndex).object,
                oResultPromise;

            this._addRequest($.proxy(function() {
                try {
                    oResultPromise = this.oPageBuilderService.moveTile(oTile.object, nTileIndex, nNewIndex, oSourceGroup, oTargetGroup);
                } catch (err) {
                    this._resetGroupsOnFailure("fail_to_move_tile_msg");
                    return;
                }

                oResultPromise.done(this._handleAfterSortable($.proxy(function (sTileId, oTargetTile) {
                    var sTilePath = this._getPathOfTile(sTileId),
                        srvc = this.oPageBuilderService;

                    // If we cannot find the tile, it might have been deleted -> Check!
                    if(sTilePath) {
                        // Update the model with the new tile.
                        this._destroyTileModel(sTilePath);
                        this.oModel.setProperty(sTilePath + "/object", oTargetTile);
                        this.oModel.setProperty(sTilePath + "/content", [srvc.getTileView(oTargetTile)]);
                        this.oModel.setProperty(sTilePath + "/target", srvc.getTileTarget(oTargetTile) || "");
                    }

                    this._checkRequestQueue();
                }, this, sTileId)));

                oResultPromise.fail(this._handleAfterSortable(this._resetGroupsOnFailureHelper("fail_to_move_tile_msg")));
            }, this));
        },

        toggleDefaultGroupVisibility : function (bVisible) {
            var oDashboardItem = this.oDashboardView.oDashboardGroupsBox.getGroups()[0],
                oGroupListItem = this.oGroupListView.oGroupList.getItems()[0];

            oDashboardItem.setVisible(bVisible);
            if (oGroupListItem) {
                oGroupListItem.setShow(bVisible);
            }
        },

        // temporary - should not be exposed
        getModel : function () {
            return this.oModel;
        },

        getDashboardView : function () {
            return this.oDashboardView;
        },

        getGroupListView : function () {
            return this.oGroupListView;
        },

        // CATALOG LOADING

        loadAllCatalogs : function (sChannelId, sEventId, oData) {
            if (!this.oModel.getProperty("/catalogs") ||
                    !sap.ushell.Container.getService("LaunchPage").isCatalogsValid()) {
                var that = this;

                // catalog also needs groups 
                this.loadPersonalizedGroups();

                this._destroyAllGroupModels("/catalogs");
                this._destroyAllTileModels("/catalogTiles");
                // Clear existing Catalog items
                this.oModel.setProperty("/catalogs", []);
                this.oModel.setProperty("/catalogTiles", []);

                // Trigger loading of catalogs
                sap.ushell.Container.getService("LaunchPage").getCatalogs().done(
                    $.proxy(
                        this.setCatalogs,
                        this,
                        "/catalogs",
                        [{
                            title : getLocalizedText("all"),
                            "static" : true,
                            tiles : []
                        }]
                    )
                ).fail(that._showLocalizedErrorHelper("fail_to_load_catalog_msg"));
            }
        },

        setCatalogs : function (sPath, aStaticCatalogs, aCatalogs) {
            var that = this,
                srvc = sap.ushell.Container.getService("LaunchPage"),
                offset = (aStaticCatalogs && aStaticCatalogs.length) || 0;

            // Fill catalog info
            this.oModel.setProperty(sPath, $.merge(aStaticCatalogs || [], $.map(
                aCatalogs,
                function (oCatalog) {
                    return {
                        title : srvc.getCatalogTitle(oCatalog),
                        id : srvc.getCatalogId(oCatalog),
                        "static" : false,
                        tiles : []
                    };
                }
            )));

            // Trigger loading of catalog tiles
            $.each(aCatalogs, $.proxy(function (i, oCatalog) {
                srvc.getCatalogTiles(oCatalog).done(
                    $.proxy(this.setCatalogTiles, this, "/catalogTiles", true, {//sPath + "/" + (i + offset) + "/tiles", false, {
                        catalog : srvc.getCatalogTitle(oCatalog),
                        id : srvc.getCatalogId(oCatalog),
                        index : i
                    })
                ).fail(that._showLocalizedErrorHelper("fail_to_load_catalog_tiles_msg"));
            }, this));
        },

        setCatalogTiles : function (sPath, bAppend, oData, aCatalogTiles) {
            var srvc = sap.ushell.Container.getService("LaunchPage");

            // Fill tile info for current catalog
            this.oModel.setProperty(sPath, $.merge((bAppend && this.oModel.getProperty(sPath)) || [], $.map(
                aCatalogTiles,
                function (oCatalogTile, iTile) {
                    return {
                        src : oCatalogTile,
                        catalog : oData.catalog,
                        catalogIndex : oData.index * 100000 + iTile,
                        catalogId : oData.id,
                        title : srvc.getCatalogTileTitle(oCatalogTile),
                        keywords : (srvc.getCatalogTileKeywords(oCatalogTile) || []).join(','),
                        id : srvc.getCatalogTileId(oCatalogTile),
                        size : srvc.getCatalogTileSize(oCatalogTile),
                        content : [srvc.getCatalogTileView(oCatalogTile)]
                    };
                }
            )));
        },

        /**
         * Shows a localized message in the Message-Toast.
         * @param {string} sMsgId
         *      The localization id of the message
         * @param {object} oParams
         *      Additional parameters for the Message Toast showing the message. Can be undefined.
         * @param {sap.ushell.services.Message.Type} [iType=sap.ushell.services.Message.Type.INFO]
         *      The message type (optional)
         */
        _showLocalizedMessage : function (sMsgId, oParams, iType) {
            sap.ushell.services.Message.show(iType || sap.ushell.services.Message.Type.INFO, getLocalizedText(sMsgId), oParams);
        },
        /**
         * Shows a localized error message in the Message-Toast.
         * @param {string} sMsgId
         *      The localization id of the message
         * @param {object} oParams
         *      Additional parameters for the Message Toast showing the message. Can be undefined.
         *
         */
        _showLocalizedError : function (sMsgId, oParams) {
            this._showLocalizedMessage(sMsgId, oParams, sap.ushell.services.Message.Type.ERROR);
        },

        /**
         * A wrapper for _showLocalizedError to reduce boilerplate code in error handling.
         * @param {string} sMsgId
         *      The localization id of the message
         * @param {object} oParams
         *      Additional parameters for the Message Toast showing the message. Can be undefined.
         * @returns {Function}
         *      A function that will call _showLocalizedError with the given parameters.
         */
        _showLocalizedErrorHelper : function (sMsgId, oParams) {
            var that = this;
            return function () {
                that._showLocalizedError(sMsgId, oParams);
            };
        },

        /**
         * Helper function to bind an error message to a reset-function, which reloads all groups
         * from a group array when called.
         * @param {string} sMsgId
         *      The id of the localized string.
         * @returns {Function}
         *      The reset function, which returns the dashboard into an consistent state.
         */
        _resetGroupsOnFailureHelper : function (sMsgId) {
            var that = this;
            return function (aGroups) {
                that._showLocalizedError(sMsgId);
                that._requestFailed();

                // Give the Toast a chance to be shown before the reload freezes the screen.
                setTimeout(function () {
                    that.loadGroupsFromArray(aGroups);
                });
            };
        },

        /**
         * Helper function to reset groups after a backend failure.
         * @param {string} sMsgId
         *      The id of the localized string.
         */
        _resetGroupsOnFailure : function (sMsgId) {
            this._requestFailed();
            this._showLocalizedError(sMsgId);
            this.loadPersonalizedGroups();
            this.oModel.updateBindings(true);
        },

        /**
         * Load all groups in the given array. The default group will be loaded first.
         * @param aGroups
         *      The array containing all groups (including the default group).
         */
        loadGroupsFromArray : function (aGroups) {
            var that = this;

            this.oPageBuilderService.getDefaultGroup().done(function (oDefaultGroup) {
                var i,
                    k = 1;

                that._loadGroup(0, oDefaultGroup);
                for (i = 0; i < aGroups.length; ++i) {
                    if (aGroups[i] !== oDefaultGroup) {
                        that._loadGroup(k, aGroups[i]);
                        k++;
                    }
                }
                for (i = aGroups.length; i < that.oModel.getProperty("/groups/length"); ++i) {
                    that._destroyGroupModel("/groups/" + i);
                }
                //set new length in case there are less new groups
                that.oModel.setProperty("/groups/length", aGroups.length);
            }).fail(that._resetGroupsOnFailureHelper("fail_to_get_default_group_msg"));
        },

        /**
         * Load all tiles in a group and add the group to the internal model.
         * @param nIndex
         *      The index at which the group should be added. 0 is reserved for the default group.
         * @param oGroup
         *      The group as it is returned by the UI2 services.
         */
        _loadGroup : function (nIndex, oGroup) {
            var that = this,
                sGroupPath = "/groups/" + nIndex;
            this._destroyGroupModel(sGroupPath);
            // Set group on model
            var sOldGroupId = this.oModel.getProperty(sGroupPath + "/groupId"),
                oNewGroupModel = this._getGroupModel(oGroup, nIndex === 0);

            // If the group already exists, keep the id. The backend-handlers relay on the id staying the same.
            if(sOldGroupId) {
                oNewGroupModel.groupId = sOldGroupId;
            }

            this.oModel.setProperty(sGroupPath, oNewGroupModel);
        },

        _getGroupModel : function (oGroup, bDefault) {
            var srvc = this.oPageBuilderService,
                aGroupTiles = (oGroup && srvc.getGroupTiles(oGroup)) || [],
                aModelTiles = [],
                i;

            for (i = 0; i < aGroupTiles.length; ++i) {
                aModelTiles.push(this._getTileModel(aGroupTiles[i]));
            }

            return {
                title           : (bDefault && getLocalizedText("my_group")) ||
                                  (oGroup && srvc.getGroupTitle(oGroup)) ||
                                  "",
                object          : oGroup,
                groupId         : jQuery.sap.uid(),
                tiles           : aModelTiles,
                isDefaultGroup  : bDefault || false,
                editMode        : !oGroup,
                removable       : !oGroup || srvc.isGroupRemovable(oGroup),
                sortable        : true
            };
        },

        _addTileToGroup : function (sGroupPath, oTile) {
            var srvc = this.oPageBuilderService,
                sTilePath = sGroupPath + "/tiles",
                sLong = srvc.getTileSize(oTile),
                iNumTiles = this.oModel.getProperty(sTilePath).length;

            this.oModel.setProperty(sTilePath + "/" + iNumTiles, this._getTileModel(oTile));
        },

        _getTileModel : function (oTile) {
            var srvc = this.oPageBuilderService,
                sLong = srvc.getTileSize(oTile);
            return {
                "object"  : oTile,
                "uuid"    : jQuery.sap.uid(),
                "content" : [srvc.getTileView(oTile)],
                "long"    : ((sLong !== null) && (sLong === "1x2" || sLong === "2x2")) || false,
                "target"  : srvc.getTileTarget(oTile) || ""
            };
        },

        _destroyAllGroupModels : function (oTarget) {
            var aGroups = (typeof oTarget === "string") ? this.oModel.getProperty(oTarget) : oTarget,
                i;
            if (aGroups) {
                for (i = 0; i < aGroups.length; i = i + 1) {
                    this._destroyGroupModel(aGroups[i]);
                }
            }
        },

        _destroyGroupModel : function (oTarget) {
            var oGroupModel = (typeof oTarget === "string") ? this.oModel.getProperty(oTarget) : oTarget,
                i;
            if (oGroupModel) {
                this._destroyAllTileModels(oGroupModel.tiles);
            }
        },

        _destroyAllTileModels : function (oTarget) {
            var aTiles = (typeof oTarget === "string") ? this.oModel.getProperty(oTarget) : oTarget,
                i;
            if (aTiles) {
                for (i = 0; i < aTiles.length; i = i + 1) {
                    this._destroyTileModel(aTiles[i]);
                }
            }
        },

        _destroyTileModel : function (oTarget) {
            var oTileModel = (typeof oTarget === "string") ? this.oModel.getProperty(oTarget) : oTarget,
                i;
            if (oTileModel && oTileModel.content) {
                for (i = 0; i < oTileModel.content.length; i = i + 1) {
                    oTileModel.content[i].destroy();
                }
            }
        },

        /**
         * Load all user groups from the backend. (Triggered on initial page load.)
         */
        loadPersonalizedGroups : function () {
            var that = this,
                oGroupsPromise = this.oPageBuilderService.getGroups();

            oGroupsPromise.done(function (aGroups) {
                that.loadGroupsFromArray(aGroups);
            });

            oGroupsPromise.fail(that._showLocalizedErrorHelper("fail_to_load_groups_msg"));
        }
    });
}());
