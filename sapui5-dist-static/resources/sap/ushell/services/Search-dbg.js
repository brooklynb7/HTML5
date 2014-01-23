// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The Unified Shell's search service which provides Enterprise Search via SINA.
 *
 * @version 1.16.4
 */
(function () {
    "use strict";
    /*global jQuery, sap */
    jQuery.sap.declare("sap.ushell.services.Search");

    sap.ushell.services.Search = function (oAdapter, oContainerInterface) {
        var aCatalogTileDescriptions,
            oCatalogDeferred,
            oLpdService = sap.ushell.Container.getService("LaunchPage");

        this.init = function () {
            // do nothing, just ensure for abap adapter to init SINA (async GetServerInfo)
        };

        this.isSearchAvailable = function () {
            return oAdapter.isSearchAvailable();
        };

        /**
         * A helper function returning all tiles contained in all available catalogs.
         * Further, once the tiles have been successfully fetched, they are cached locally in order to speed up
         * future calls. This is based on the assumption that catalog tiles will change very infrequently.
         * In case of success the promise's <code>done</code> function should be called with the results.
         *
         * @returns {object}
         *  jQuery.promise object
         * @private
         */
        var _getCatalogTiles = function () {
            var oDeferred = jQuery.Deferred();
            if (aCatalogTileDescriptions) {
                // return cached catalog tiles
                if (oCatalogDeferred.isResolved()) {
                    oDeferred.resolve(aCatalogTileDescriptions);
                } else {
                    // initial request is still pending
                    oCatalogDeferred.done(function () {
                        oDeferred.resolve(aCatalogTileDescriptions);
                    });
                }
            } else {
                // initialize catalog tiles
                aCatalogTileDescriptions = [];
                oCatalogDeferred = oDeferred;
                oLpdService.getCatalogs().done(function (catalogs) {
                    var oDeferreds = [];
                    // get promises for all catalogs' tiles
                    for (var i = 0; i < catalogs.length; i++) {
                        oDeferreds.push(oLpdService.getCatalogTiles(catalogs[i]));
                    }
                    // when all promises have been resolved, merge their results together
                    jQuery.when.apply(jQuery, oDeferreds).done(function() {
                        var aTilesCollection = arguments;
                        for (var i = 0; i < aTilesCollection.length; i++) {
                            var aTiles = aTilesCollection[i];
                            for (var j = 0; j < aTiles.length; j++) {
                                var oTile = aTiles[j],
                                    //need to instanciate a view to make use of the contracts
                                    oTileView = oLpdService.getCatalogTileView(oTile),
                                    aKeywords = oLpdService.getCatalogTileKeywords(oTile),
                                    sTargetURL = oLpdService.getCatalogTileTargetURL(oTile),
                                    sTitle = oLpdService.getCatalogTilePreviewTitle(oTile) || oLpdService.getCatalogTileTitle(oTile),
                                    sSize = oLpdService.getCatalogTileSize(oTile),
                                    sIcon = oLpdService.getCatalogTilePreviewIcon(oTile) || "sap-icon://business-objects-experience";

                                aCatalogTileDescriptions.push({
                                    tile : oTile,
                                    keywords : aKeywords,
                                    url : sTargetURL,
                                    title : sTitle,
                                    icon : sIcon,
                                    size : sSize
                                });
                                //destroy the view - not needed
                                oTileView.destroy();
                            }
                        }
                        // resolve the promise
                        oDeferred.resolve(aCatalogTileDescriptions);
                    });
                });
            }
            return oDeferred.promise();
        };

        /**
         * Search all catalog tiles by their Semantic Object - Action pair
         * The given callback is called on success. This does not touch the respective search adapters.
         *
         * @param {array} aSemObjects
         *     an array of semantic object + action objects
         * @param {function} resultCallback
         *     the callback that will be called
         * @public
         */
        this.queryApplicationsByTarget = function(aSemObjects, resultCallback) {
            _getCatalogTiles().done(function (aCatalogTileDescriptions) {
                var aResults = [];
                // loop through Semantic Objects, thus result is in same order as input SOs
                for (var j = 0, jL = aSemObjects && aSemObjects.length || 0; j < jL; j++) {
                    var oSemO = aSemObjects[j],
                        oURLParsingSrvc = sap.ushell.Container.getService("URLParsing");
                    for (var i = 0; i < aCatalogTileDescriptions.length; i++) {
                        var oTarget = oURLParsingSrvc.parseShellHash(aCatalogTileDescriptions[i].url);
                        if (oTarget && (oTarget.semanticObject === oSemO.semanticObject) && (oTarget.action === oSemO.action)) {
                            aResults.push(aCatalogTileDescriptions[i]);
                            // only take first match
                            break;
                        }
                    }
                }
                resultCallback(aResults);
            });
        };


        this.queryApplications = function(searchTerm, resultCallback, top) {
            var origSearchTerm = searchTerm,
                makeResultSet = function(foundTiles, totalResults){
                return {
                    totalResults: totalResults,
                    searchTerm : origSearchTerm,
                    getElements : function(){
                            return foundTiles;
                        }
                };
            };

            searchTerm = new RegExp(searchTerm.replace("*", ".*"), "gi");

            var readTiles = function(aCatalogTileDescriptions) {
                var foundTiles = [],
                    oTileDescription,
                    oTile,
                    sTitle,
                    sIcon,
                    aKeywords,
                    sKeyword,
                    sLabel,
                    bFound,
                    totalResults = 0;
                top = top || aCatalogTileDescriptions.length;

                for (var j = 0; j < aCatalogTileDescriptions.length; j++) {
                    oTileDescription = aCatalogTileDescriptions[j];
                    sTitle = oTileDescription.title;
                    sIcon = oTileDescription.icon;
                    aKeywords = oTileDescription.keywords;
                    //ensure a tile is only returned once even if more than on keyword matches 
                    bFound = false;
                    for (var i = 0; !bFound && i < aKeywords.length; i++) {
                        sKeyword = aKeywords[i];
                        if(searchTerm.test(sKeyword)) {
                            totalResults = totalResults + 1;
                            if(foundTiles.length<top) {
                                sLabel = sKeyword.replace(searchTerm, "<b>$&</b>");
                                oTile = {
                                        tile : oTileDescription.tile,
                                        label : sLabel,
                                        title : sTitle,
                                        icon : sIcon,
                                        targetURL : oTileDescription.url,
                                        size : oTileDescription.size
                                        };
                                foundTiles.push(oTile);
                                //don't search any further for matching keywords for this tile
                                bFound = true;
                            }
                        }
                    }
                }
                resultCallback(makeResultSet(foundTiles, totalResults));
            };
            _getCatalogTiles().done(function (aCatalogTiles) {
                readTiles(aCatalogTiles);
            });
         };

        this.querySuggestions = function(searchTerm, resultCallback) {
            return oAdapter.querySuggestions(searchTerm, function (result) {
                result.searchTerm = searchTerm;
                resultCallback(result);
            });
        };

        this.search = function(searchTerm, resultCallback) {
            return oAdapter.search(searchTerm, resultCallback);
        };

//        this.searchWithCategories = function(searchTerm, resultCallback, top, skip) {
//            return oAdapter.searchWithCategories(searchTerm, resultCallback, top, skip);
//        };
        
        this.searchWithCategories = function(searchTerm, dataSource, oModel, resultCallback, top, skip) {
            return oAdapter.searchWithCategories(searchTerm, dataSource, oModel, resultCallback, top, skip);
        };
        
        this.searchInit = function() {
        	return oAdapter.searchInit();
        };
        
        this.setQueryForAll = function(oModel, fromRoot){
            return oAdapter.setQueryForAll(oModel, fromRoot);
        };
        
        this.setSearchTermWithoutQuery = function(searchTerm){
            return oAdapter.setSearchTermWithoutQuery(searchTerm);
        };
        
        this.searchFireQuery = function(oModel) {
        	return oAdapter.searchFireQuery(oModel);
        };
        
        this.searchAppendNextPage = function(oModel) {
        	return oAdapter.searchAppendNextPage(oModel);
        };
        
        this.setDataSource= function (dataSource, oModel) {
        	return oAdapter.setDataSource (dataSource, oModel);
        };
        
        this.setSearchCategoryTree = function(categoryTree) {
            return oAdapter.setSearchCategoryTree(categoryTree); 
         };
         
        this.getSina = function(){
          return oAdapter.getSina();  
        };
        
        this.getDataSource= function () {
            return oAdapter.getDataSource();
        };
    };
}());
