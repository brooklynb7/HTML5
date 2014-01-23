//Copyright (c) 2013 SAP AG, All Rights Reserved

(function () {
    "use strict";
    /*global jQuery, sap */
    /*jslint nomen: true */

    jQuery.sap.require("sap.ui.core.IconPool");
    jQuery.sap.require("sap.ushell.ui.launchpad.Tile");
    jQuery.sap.require("sap.ushell.ui.launchpad.TileContainer");
    jQuery.sap.require("sap.ushell.ui.launchpad.Panel");
    jQuery.sap.require("sap.ushell.ui.launchpad.CatalogListItem");

    sap.ui.jsview("sap.ushell.renderers.fiori2.launchpad.catalog.Catalog", {

        createContent: function (oController) {
            var translationBundle = sap.ushell.resources.i18n;
            function ifnot(v) {
                return !v;
            }
            function iflong(sLong) {
            	return ((sLong !== null) && (sLong === "1x2" || sLong === "2x2")) || false;
            }
            function falseIfPhone(v) {
                if(jQuery.device.is.phone) {
                    return false;
                } else {
                    return ifnot(v);
                }
            }
            function to_int(v) {
                return parseInt(v, 10) || 0;
            }
            function get_icon(bState) {
                return (bState && sap.ui.core.IconPool.getIconURI("accept")) || sap.ui.core.IconPool.getIconURI("add");
            }
            function formatTiles(v) {
                return (v && v > 0) ?
                        v + ((v > 1 && (" " + translationBundle.getText("tiles"))) || (" " + translationBundle.getText("tile"))) :
                        translationBundle.getText("no_tiles");
            }

            var oButton = new sap.m.Button({
                icon : {
                    path : "active",
                    formatter : get_icon
                },
                enabled : {
                    path : "active",
                    formatter : ifnot
                },
                tooltip : "{i18n>addTileToGroup}",
                press : [ oController.onAddTileToDefault, oController ]
            }), oTileTemplate = new sap.ushell.ui.launchpad.Tile({
                draggable : {
                    path : "active",
                    formatter : falseIfPhone
                },
                dragContainer : "body", //".sapUshellCatalogList", TODO: visibility issues
                dragStart : [ oController.onTileDragStart, oController ],
                dragStop : [ oController.onTileDragStop, oController ],
                tileViews : {
                    path : "content",
                    factory : function(sId, oContext){return oContext.getObject();}
                },
                footItems : [oButton],
                "long" : {
                	path : "size",
                	formatter : iflong
                },
                index: {
                    path : "id",
                    formatter : to_int
                }
            });

            /* Override build-in setters */
            oButton.constructor.prototype.setEnabled = function (v) {
                this.setProperty("enabled", v, true);        // set property, but suppress rerendering
                this.$().toggleClass("sapMBtnDisabled", !v); // switch appearance directly
                return this;
            };

            oButton.constructor.prototype.setIcon = function (v) {
                this.setProperty("icon", v, true);          // set property, but suppress rerendering
                if (v && this._image && this._image.setSrc) {
                    this._image.setSrc(v);                  // set property of internal control
                }
                return this;
            };

            return [ new sap.m.SplitContainer("catalogSplitContainer", {
                detailPages : [ new sap.m.Page("catalogTilesPage", {
                    showHeader : false,
                    showFooter : false,
                    content : [ new sap.ushell.ui.launchpad.Panel({
                        translucent : true,
                        headerText : "",
                        headerLevel : sap.m.HeaderLevel.H2,
                        headerBar : new sap.m.Bar("catalogHeader", {
                            translucent : true,
                            contentLeft : [ new sap.m.Select("catalogSelect", {
                                name : "Browse",
                                title : "{i18n>tile_catalog}",
                                items : {
                                    path : "/catalogs",
                                    template : new sap.ui.core.ListItem({
                                        text : "{title}"
                                    })
                                },
                                change : [ oController.onCategoryFilter, oController ]
                            })],
                            contentRight : [ new sap.m.SearchField("catalogSearch", {
                                placeholder: "{i18n>search_catalog}",
                                liveChange : [ oController.onLiveFilter, oController ]
                            })]
                        }),
                        content : [ new sap.ushell.ui.launchpad.TileContainer("catalogTiles", {
                            showHeader : false,
                            showPlaceholder : false,
                            showGroupHeader : "{/showCatalogHeaders}",
                            groupHeaderLevel : sap.m.HeaderLevel.H6,
                            tiles : {
                                path : "/catalogTiles",
                                template : oTileTemplate,
                                sorter : new sap.ui.model.Sorter("catalogIndex", false, function (oContext) {
                                    return (oContext && oContext.getProperty("catalog")) || "";
                                })
                            }
                        })]
                    })]
                }).addStyleClass("sapUshellCatalogMain")],

                masterPages : [ new sap.m.Page({
                    showHeader : false,
                    showFooter : false,
                    content : [ new sap.m.List({
                        mode : sap.m.ListMode.None,
                        items : {
                            path : "/groups",
                            template : new sap.ushell.ui.launchpad.CatalogListItem({
                                title : "{title}",
                                markChange : 200,
                                icon : sap.ui.core.IconPool.getIconURI("target-group"),
                                type : sap.m.ListType.Inactive,
                                description : {
                                    path : "tiles/length",
                                    formatter : formatTiles
                                },
                                drop : [ oController.onAddTile, oController ]
                            }),
                            sorter : new sap.ui.model.Sorter("isDefaultGroup", true, function (oContext) {
                                return (!oContext.getProperty("isDefaultGroup") && translationBundle.getText("drag_groups")) || "";
                            })
                        }
                    }).addStyleClass("sapUshellCatalogList")]
                }).addStyleClass("sapUshellCatalogSide")]
            }).addStyleClass("sapUshellCatalog")];
        },

        getControllerName: function () {
            return "sap.ushell.renderers.fiori2.launchpad.catalog.Catalog";
        }
    });
}());
