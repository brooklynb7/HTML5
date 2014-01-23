// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The Unified Shell's page builder adapter for the 'demo' platform.
 *
 * @version @version@
 */
(function () {
    "use strict";
    /*global jQuery, sap, window */
    jQuery.sap.declare("sap.ushell.adapters.demo.LaunchPageAdapter");
    jQuery.sap.require("sap.ushell.shells.demo.fioriDemoConfig");

    jQuery.sap.require("sap.m.Text");

    /**
     * This method MUST be called by the Unified Shell's container only.
     * Constructs a new instance of the page builder adapter for the 'demo' platform.
     *
     * @param {object} oSystem
     *     the system served by the adapter
     *
     * @class The Unified Shell's page builder adapter for the 'demo' platform.
     *
     * @constructor
     * @see sap.ushell.services.LaunchPage
     * @since 1.15.0
     */
    sap.ushell.adapters.demo.LaunchPageAdapter = function (oSystem) {
        var aConfigGroups = jQuery.extend(true, [], sap.ushell.shells.demo.fioriDemoConfig.groups),
            aConfigCatalogs = sap.ushell.shells.demo.fioriDemoConfig.catalogs,
            //possibility to fail in percent
            iFailRate = 0,
            //artificial minimal time needed for request in ms
            iMinRequestTime = 10,
            //artificial maximum of additional time for request in ms (random)
            iMaxRequestTime = 10,
            defaultGroup = aConfigGroups[0];

        // add necessary decorations to tiles
        jQuery.each(aConfigCatalogs, function (index, oCatTiles) {
            jQuery.each(oCatTiles.tiles, function (index, oTile) {
                oTile.getTitle = function () {
                    return oTile.title;
                };
            });
        });
        jQuery.each(aConfigGroups, function (index, oGroup) {
            jQuery.each(oGroup.tiles, function (index, oTile) {
                oTile.getTitle = function () {
                    return oTile.title;
                };
            });
        });

        function getSimulateFail() {
            return (100 * Math.random()) < iFailRate;
        }

        function getRequestTime() {
            return iMinRequestTime + iMaxRequestTime * Math.random();
        }

        function indexOfTile(oGroup, oTile) {
            var index;
            for (index = 0; index < oGroup.tiles.length; index = index + 1) {
                if (oTile.id === oGroup.tiles[index].id) {
                    return index;
                }
            }
            return -1;
        }

        function indexOfGroup(aGroups, oGroup) {
            var index;
            for (index = 0; index < aGroups.length; index = index + 1) {
                if (oGroup.id === aGroups[index].id) {
                    return index;
                }
            }
            return -1;
        }

        /**
         * Reloads an existing group in order to get its existing state in the backend
         *
         * @param {object} the group that should be reloaded
         * @return {jQuery.promise}
         */
        function reloadGroup(oGroup) {
            var oDfd = jQuery.Deferred();

            //Simulate an async function
            window.setTimeout(function () {
                // Simulates a success call (the done function of the promise will be called).
                //Return the given group
                oDfd.resolve(oGroup);

                // TODO: simulate a failure (which will trigger the fail function of the promise)
                //oDfd.reject();
            }, getRequestTime());

            return oDfd.promise();
        }

        /**
         * Reloads the groups that in the given array in order to get its existing state in the backend
         *
         * @param {Array} an Array of the groups that should be reloaded
         * @return {jQuery.promise}
         */
        function reloadGroupArray(aGroups) {
            var oDfd = jQuery.Deferred();

            //Simulate an async function
            window.setTimeout(function () {
                // Simulates a success call (the done function of the promise will be called).
                //Return the given group
                oDfd.resolve(aGroups);

                // TODO: simulate a failure (which will trigger the fail function of the promise)
                //oDfd.reject();
            }, getRequestTime());

            return oDfd.promise();
        }

        this.getGroups = function () {
            var oDfd = jQuery.Deferred();

            //Simulate an async function
            window.setTimeout(function () {
                // Simulates a success call (the done function of the promise will be called)
                oDfd.resolve(aConfigGroups);

                // TODO: simulate a failure (which will trigger the fail function of the promise)
                //oDfd.reject();
            }, getRequestTime());

            return oDfd.promise();
        };

        /**
         * Returns the default group. This is an asynchronous function using a jQuery.Promise.
         * In case of success its <code>done</code> function is called and gets the
         * <code>sap.ui2.srvc.Page</code> object representing the default group.
         *
         * In case of error the promise's <code>fail</code> function is called.
         *
         * @returns {object}
         *  jQuery.Promise object.
         * @since 1.11.0
         * @public
         */
        this.getDefaultGroup = function () {
            var oDeferred = new jQuery.Deferred();

            oDeferred.resolve(defaultGroup);
            return oDeferred.promise();
        };

        this.addGroup = function (sTitle) {
            var oDfd = jQuery.Deferred(),
                bFail = getSimulateFail(),
                that = this;

            //Simulate an async function
            window.setTimeout(function () {
                if (!bFail) {
                    var newGroup = {
                        id: "group_" + aConfigGroups.length,
                        title: sTitle,
                        tiles: []
                    };
                    aConfigGroups.push(newGroup);
                    // Simulates a success call (the done function of the promise will be called)
                    oDfd.resolve(newGroup);
                } else {
                    //In case adding a new group fails, load the existing groups from the server
                    that.getGroups()
                        .done(function (oExistingGroups) {
                            //Use the reject function in order to specify that an error has occurred.
                            //Pass the existing groups that we got from the server to the reject function
                            oDfd.reject(oExistingGroups);
                        })
                        .fail(function () {
                            //In case loading the existing groups also fails, call the reject function with no parameters.
                            //TODO: what should the UI do in that case? leave the groups as is or delete all groups from page?
                            oDfd.reject();
                        });
                }
            }, getRequestTime());

            return oDfd.promise();
        };

        this.getGroupTitle = function (oGroup) {
            return oGroup.title;
        };

        this.setGroupTitle = function (oGroup, sNewTitle) {
            var oDfd = jQuery.Deferred(),
                bFail = getSimulateFail(),
                that = this;

            //Simulate an async function
            window.setTimeout(function () {
                if (!bFail) {
                    // Simulates a success call (the done function of the promise will be called)
                    oGroup.title = sNewTitle;
                    oDfd.resolve();
                } else {
                    //In case setting group's title fails, reload the existing groups from the server
                    reloadGroup(oGroup)
                        .done(function (oExistingGroup) {
                            //Use the reject function in order to specify that an error has occurred.
                            //Pass the existing group's title that we got from the server to the reject function
                            oDfd.reject(oExistingGroup.title);
                        })
                        .fail(function () {
                            //In case loading the existing group also fails, call the reject function with no parameters.
                            //TODO: what should the UI do in that case? leave the group as is or pass the title that we have from the oGroup parameter?
                            oDfd.reject();
                        });
                }
            }, getRequestTime());
            return oDfd.promise();
        };

        this.getGroupId = function (oGroup) {
            return oGroup.id;
        };

        this.moveGroup = function (oGroup, newIndex) {
            var oDfd = jQuery.Deferred(),
                bFail = getSimulateFail(),
                that = this;

            //Simulate an async function
            window.setTimeout(function () {
                if (!bFail) {
                    // Simulates a success call (the done function of the promise will be called)
                    aConfigGroups.splice(newIndex, 0, aConfigGroups.splice(indexOfGroup(aConfigGroups, oGroup), 1)[0]);
                    oDfd.resolve();
                } else {
                    // TODO: simulate a failure (which will trigger the fail function of the promise)
                    //In case moving a group fails, load the existing groups from the server
                    that.getGroups()
                        .done(function (oExistingGroups) {
                            //Use the reject function in order to specify that an error has occurred.
                            //Pass the existing groups that we got from the server to the reject function
                            oDfd.reject(oExistingGroups);
                        })
                        .fail(function () {
                            //In case loading the existing groups also fails, call the reject function with no parameters.
                            //TODO: what should the UI do in that case? leave the groups as is or delete all groups from page?
                            oDfd.reject();
                        });
                }
            }, getRequestTime());

            return oDfd.promise();
        };

        this.removeGroup = function (oGroup) {
            var oDfd = jQuery.Deferred(),
                bFail = getSimulateFail(),
                that = this;

            //Simulate an async function
            window.setTimeout(function () {
                if (!bFail) {
                    // Simulates a success call (the done function of the promise will be called)
                    aConfigGroups.splice(indexOfGroup(aConfigGroups, oGroup), 1);
                    oDfd.resolve();
                } else {
                    //In case removing a group fails, load the existing groups from the server
                    that.getGroups()
                        .done(function (oExistingGroups) {
                            //Use the reject function in order to specify that an error has occurred.
                            //Pass the existing groups that we got from the server to the reject function
                            oDfd.reject(oExistingGroups);
                        })
                        .fail(function () {
                            //In case loading the existing groups also fails, call the reject function with no parameters.
                            //TODO: what should the UI do in that case? leave the groups as is or delete all groups from page?
                            oDfd.reject();
                        });
                }
            }, getRequestTime());

            return oDfd.promise();
        };

        this.resetGroup = function (oGroup) {
            var oDfd = jQuery.Deferred(),
                bFail = getSimulateFail(),
                that = this;

            //Simulate an async function
            window.setTimeout(function () {
                if (!bFail) {
                    //Simulates a success call (the done function of the promise will be called)
                    //get the preset definition of the group
                    oGroup = jQuery.extend(true, {}, sap.ushell.shells.demo.fioriDemoConfig.groups[indexOfGroup(sap.ushell.shells.demo.fioriDemoConfig.groups, oGroup)]);
                    //replace the old group => indexOfGroup compares IDs, so use of original oGroup is valid
                    aConfigGroups.splice(indexOfGroup(aConfigGroups, oGroup), 1, oGroup);
                    oDfd.resolve(oGroup);
                } else {
                    //In case removing a group fails, load the existing groups from the server
                    that.getGroups()
                        .done(function (oExistingGroups) {
                            //Use the reject function in order to specify that an error has occurred.
                            //Pass the existing groups that we got from the server to the reject function
                            oDfd.reject(oExistingGroups);
                        })
                        .fail(function () {
                            //In case loading the existing groups also fails, call the reject function with no parameters.
                            //TODO: what should the UI do in that case? leave the groups as is or delete all groups from page?
                            oDfd.reject();
                        });
                }
            }, getRequestTime());

            return oDfd.promise();
        };

        this.isGroupRemovable = function (oGroup) {
            return oGroup && !oGroup.isPreset;
        };

        this.getGroupTiles = function (oGroup) {
            return oGroup.tiles;
        };

        this.getTileTitle = function (oTile) {
            return oTile.title;
        };

        this.getTileId = function (oTile) {
            return oTile.id;
        };

        this.getTileSize = function (oTile) {
            return oTile.size;
        };

        this.getTileTarget = function (oTile) {
            return oTile.target_url || "";
        };

        this.getTileView = function (oTile) {
            var sError = 'unknown error',
                ViewPrototype;
            if (oTile.tileType) {
                jQuery.sap.require(oTile.tileType);
                ViewPrototype = jQuery.sap.getObject(oTile.tileType);
                if (ViewPrototype) {
                    try {
                        return new ViewPrototype(oTile.properties || {});
                    } catch (e) {
                        return new sap.m.Text({
                            width : "100%",
                            text : (e && (e.name + ": " + e.message))
                                || "Unknown error while loading Catalog Tile view."
                        });
                    }
                } else {
                    sError = 'TileType: ' + oTile.tileType + ' not found!';
                }
            } else {
                sError = 'No TileType defined!';
            }
            return new sap.m.Text({
                width : "100%",
                text: sError
            });
        };

        this.refreshTile = function (oTile) {
            //nothing to do here for the moment as we don't have dynamic data
        };

        this.addTile = function (oCatalogTile, oGroup) {
            if (!oGroup) {
                oGroup = defaultGroup;
            }

            var oDfd = jQuery.Deferred(),
                bFail = getSimulateFail(),
                that = this;

            //Simulate an async function
            window.setTimeout(function () {
                if (!bFail) {
                    var newTile = jQuery.extend(true, {
                        title: "A new tile was added",
                        size: "1x1"
                    }, oCatalogTile, {
                        id: "tile_0" + oGroup.tiles.length
                    });

                    oGroup.tiles.push(newTile);
                    // Simulates a success call (the done function of the promise will be called)
                    oDfd.resolve(newTile);
                } else {
                    //In case adding a tile fails, load the existing groups from the server
                    that.getGroups()
                        .done(function (oExistingGroups) {
                            //Use the reject function in order to specify that an error has occurred.
                            //Pass the existing groups that we got from the server to the reject function
                            oDfd.reject(oExistingGroups);
                        })
                        .fail(function () {
                            //In case loading the existing group also fails, call the reject function with no parameters.
                            //TODO: what should the UI do in that case?
                            oDfd.reject();
                        });
                }
            }, getRequestTime());

            return oDfd.promise();
        };

        this.removeTile = function (oGroup, oTile) {
            var oDfd = jQuery.Deferred(),
                bFail = getSimulateFail(),
                that = this;

            //Simulate an async function
            window.setTimeout(function () {
                if (!bFail) {
                    // Simulates a success call (the done function of the promise will be called)
                    oGroup.tiles.splice(indexOfTile(oGroup, oTile), 1);
                    oDfd.resolve();
                } else {
                    //In case removing a tile fails, load the existing groups from the server
                    that.getGroups()
                        .done(function (oExistingGroups) {
                            //Use the reject function in order to specify that an error has occurred.
                            //Pass the existing groups that we got from the server to the reject function
                            oDfd.reject(oExistingGroups);
                        })
                        .fail(function () {
                            //In case loading the existing group also fails, call the reject function with no parameters.
                            //TODO: what should the UI do in that case?
                            oDfd.reject();
                        });
                }
            }, getRequestTime());

            return oDfd.promise();
        };

        this.moveTile = function (oTile, sourceIndex, targetIndex, oSourceGroup, oTargetGroup) {
            var oDfd = jQuery.Deferred(),
                bFail = getSimulateFail(),
                that = this;

            //Simulate an async function
            window.setTimeout(function () {
                if (!bFail) {
                    if (oTargetGroup === undefined) {
                        //Move a tile in the same group
                        oTargetGroup = oSourceGroup;
                    }

                    oSourceGroup.tiles.splice(sourceIndex, 1);
                    oTargetGroup.tiles.splice(targetIndex, 0, oTile);

                    // Simulates a success call (the done function of the promise will be called)
                    oDfd.resolve(oTile);
                } else {
                    //In case moving a tile fails, reload the groups from the server
                    that.getGroups()
                        .done(function (oExistingGroups) {
                            //Use the reject function in order to specify that an error has occurred.
                            //Pass the existing groups that we got from the server to the reject function
                            oDfd.reject(oExistingGroups);
                        })
                        .fail(function () {
                            //In case loading the existing group also fails, call the reject function with no parameters.
                            //TODO: what should the UI do in that case?
                            oDfd.reject();
                        });
                }
            }, getRequestTime());

            return oDfd.promise();
        };

        this.getTile = function (sSemanticObject, sAction) {
            var oDfd = jQuery.Deferred();
            // TODO: return a oTile async
            return oDfd.promise();
        };

        this.getCatalogs = function () {
            var oDfd = jQuery.Deferred();

            //Simulate an async function with a loading delay of up to 5 sec
            window.setTimeout(function () {
                // Simulates a success call (the done function of the promise will be called)
                oDfd.resolve(aConfigCatalogs);

                // TODO: simulate a failure (which will trigger the fail function of the promise)
                //oDfd.reject();
            }, getRequestTime());

            return oDfd.promise();
        };

        this.isCatalogsValid = function () {
            // TODO
            return true;
        };

        this.getCatalogId = function (oCatalog) {
            return oCatalog.id;
        };

        this.getCatalogTitle = function (oCatalog) {
            return oCatalog.title;
        };

        this.getCatalogTiles = function (oCatalog) {
            var oDfd = jQuery.Deferred();

            //Simulate an async function with a loading delay of up to 5 sec
            window.setTimeout(function () {
                // Simulates a success call (the done function of the promise will be called)
                oDfd.resolve(oCatalog.tiles);

                // TODO: simulate a failure (which will trigger the fail function of the promise)
                //oDfd.reject();
            }, getRequestTime());

            return oDfd.promise();
        };

        this.getCatalogTileId = function (oCatalogTile) {
            return oCatalogTile.id;
        };

        this.getCatalogTileTitle = function (oCatalogTile) {
            return oCatalogTile.title;
        };

        this.getCatalogTileSize = function (oCatalogTile) {
            return oCatalogTile.size;
        };

        this.getCatalogTileView = function (oCatalogTile) {
            var sError = 'unknown error',
                ViewPrototype;
            if (oCatalogTile.tileType) {
                jQuery.sap.require(oCatalogTile.tileType);
                ViewPrototype = jQuery.sap.getObject(oCatalogTile.tileType);
                if (ViewPrototype) {
                    try {
                        return new ViewPrototype(oCatalogTile.properties || {});
                    } catch (e) {
                        return new sap.m.Text({
                            width : "100%",
                            text : (e && (e.name + ": " + e.message))
                                || "Unknown error while loading Catalog Tile view."
                        });
                    }
                } else {
                    sError = 'TileType: ' + oCatalogTile.tileType + ' not found!';
                }
            } else {
                sError = 'No TileType defined!';
            }
            return new sap.m.Text({
                width : "100%",
                text: sError
            });
        };

        this.getCatalogTileTargetURL = function (oCatalogTile) {
            return (oCatalogTile.properties && oCatalogTile.properties.targetURL) || null;
        };

        this.getCatalogTilePreviewTitle = function (oCatalogTile) {
            return (oCatalogTile.properties && oCatalogTile.properties.title) || null;
        };

        this.getCatalogTilePreviewIcon = function (oCatalogTile) {
            return (oCatalogTile.properties && oCatalogTile.properties.icon) || null;
        };

        this.getCatalogTileKeywords = function (oCatalogTile) {
            return jQuery.merge([], jQuery.grep(jQuery.merge([
                oCatalogTile.title,
                oCatalogTile.properties && oCatalogTile.properties.subtitle,
                oCatalogTile.properties && oCatalogTile.properties.info
            ],
                (oCatalogTile.properties && oCatalogTile.properties.keywords) || []),
                function (n, i) { return n !== "" && n; }));
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
         * @since 1.11.0
         * @public
         */
        this.addBookmark = function (oParameters) {
            var oDeferred = new jQuery.Deferred();
            // TODO implement adding the bookmark to user's home page
            oDeferred.resolve();
            return oDeferred.promise();
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
            // TODO
        };
    };
}());
