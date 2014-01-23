// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The Unified Shell's user activity service.
 *
 * @version 1.16.4
 */
(function () {
    "use strict";
    /*global jQuery, sap, console */
    jQuery.sap.declare("sap.ushell.services.UserRecents");
    jQuery.sap.require("sap.ushell.services.Personalization");

    /**
     * This method is just for internal use within this service.
     * Constructs a new instance of a recent list, used for recent searches and recent apps.
     *
     * @param {integer} iMaxLength
     *     maximum number of entries in the list
     * @param {function} fnEquals
     *     used to decide whether an entry should be updated instead of inserting a new one
     * @param {function} fnCompare
     *     uesed to sort the list
     * @param {function} fnLoad
     *     called to load recent list from backend
     * @param {function} fnSave
     *     called to save current list into backend
     *
     * @constructor
     */
    function RecentList(iMaxLength, fnEquals, fnCompare, fnLoad, fnSave) {
        var aRecents = [],

        // private functions
            fnUpdateIfAlreadyIn = function (oItem, iTimestampNow) {
                return aRecents.some(function (oRecentEntry) {
                    var bFound;
                    if (fnEquals(oRecentEntry.oItem, oItem)) {
                        oRecentEntry.oItem = oItem;
                        oRecentEntry.iTimestamp = iTimestampNow;
                        oRecentEntry.iCount = oRecentEntry.iCount + 1;
                        bFound = true;
                    } else {
                        bFound = false;
                    }
                    return bFound;
                });
            },

            fnInsertNew = function (oItem, iTimestampNow) {
                var oNewEntry = {oItem: oItem,
                        iTimestamp: iTimestampNow,
                        iCount: 1};
                if (aRecents.length === iMaxLength) {
                    aRecents.sort(fnCompare);
                    aRecents.pop();
                }
                aRecents.push(oNewEntry);
            };

        // public interface
        this.newItem = function (oItem) {
            var iTimestampNow = +new Date(),  // timestamp: thanks to http://stackoverflow.com/a/221297
                bAlreadyIn;
            fnLoad().done(function (aLoadedRecents) {
                aRecents = aLoadedRecents || [];

                bAlreadyIn = fnUpdateIfAlreadyIn(oItem, iTimestampNow);
                if (!bAlreadyIn) {
                    fnInsertNew(oItem, iTimestampNow);
                }
                fnSave(aRecents);
            });
        };

        this.getRecentItems = function () {
            var oDeferred = new jQuery.Deferred();

            fnLoad().done(function (aLoadedRecents) {
                aRecents = aLoadedRecents || [];
                oDeferred.resolve(jQuery.map(aRecents.sort(fnCompare), function (oRecentEntry) {
                    return oRecentEntry.oItem;
                }));
            });

            return oDeferred.promise();
        };
    }

    /**
     * @class The Unified Shell's page user recents service. It used for managing recent searches and recently viewed apps.
     *
     * @constructor
     * @see sap.ushell.services.Container#getService
     * @since 1.15.0
     */
    function UserRecents() {
        var oRecentSearches,
            oRecentApps,
            oPersonalizationService,
            oAppPersonalizer,
            oSearchesPersonalizer,
            fnLoad,
            fnSave,
            sRecentAppsKey = "RecentApps",
            sRecentSearchesKey = "RecentSearches",
            sPersContainer = "sap.ushell.services.UserRecents";

        // BEWARE: constructor code below!

        /**
         * Notification that the given search item has just been used. Adds the search to the LRU
         * list of searches.
         *
         * @param {object} oSearchItem
         *     the searchItem identified by the string parameter <code>sTerm</code>
         * @returns {object[]}
         *     the updated LRU list
         * @since 1.15.0
         * @public
         */
        this.noticeSearch = function (oSearchItem) {
            oRecentSearches.newItem(oSearchItem);
            return oRecentSearches.getRecentItems();
        };

        /**
         * Returns the LRU list of searches.
         *
         * @returns {object[]}
         *     the LRU list
         * @since 1.15.0
         * @public
         */
        this.getRecentSearches = function () {
            return oRecentSearches.getRecentItems();
        };

        /**
         * Notification that the given app has just been used. Adds the app to the LRU list of apps.
         *
         * @param {object} oAppItem
         *     the searchItem identified by the string parameter <code>id</code>
         * @returns {object[]}
         *     the updated LRU list
         * @since 1.15.0
         * @public
         */
        this.noticeApp = function (oAppItem) {
            oRecentApps.newItem(oAppItem);
            return oRecentApps.getRecentItems();
        };

        /**
         * Returns the LRU list of apps.
         *
         * @returns {object[]}
         *     the LRU list
         * @since 1.15.0
         * @public
         */
        this.getRecentApps = function () {
            return oRecentApps.getRecentItems();
        };


        // constructor code -------------------------------------------------------

        oPersonalizationService = sap.ushell.Container.getService("Personalization");
        try {
            oAppPersonalizer = oPersonalizationService.getPersonalizer({container: sPersContainer, item: sRecentAppsKey});
            oSearchesPersonalizer = oPersonalizationService.getPersonalizer({container: sPersContainer, item: sRecentSearchesKey});
        } catch (err) {
            jQuery.sap.log.error("Personalization service does not work:");
            jQuery.sap.log.error(err.name + ": " + err.message);
        }

        fnLoad = function (oPersonalizer) {
            var oPromise,
                oDeferred;
            try {
                oPromise = oPersonalizer.getPersData();
            } catch (err) {
                jQuery.sap.log.error("Personalization service does not work:");
                jQuery.sap.log.error(err.name + ": " + err.message);
                oDeferred = new jQuery.Deferred();
                oDeferred.reject(err);
                oPromise = oDeferred.promise();
            }
            return oPromise;
        };

        fnSave = function (oPersonalizer, aList) {
            try {
                oPersonalizer.setPersData(aList);
            } catch (err) {
                jQuery.sap.log.error("Personalization service does not work:");
                jQuery.sap.log.error(err.name + ": " + err.message);
            }
        };

        oRecentSearches = new RecentList(10, function (x, y) {
            var compare = false;
            if (x.oDataSource && y.oDataSource) {
                if (x.oDataSource.objectName && y.oDataSource.objectName) {
                    compare = ((x.sTerm === y.sTerm) && (x.oDataSource.objectName.value === y.oDataSource.objectName.value));
                }
                if (!x.oDataSource.objectName && !y.oDataSource.objectName) {
                    compare = (x.sTerm === y.sTerm);
                }
            }
            if (!x.oDataSource && !y.oDataSource) {
                compare = (x.sTerm === y.sTerm);
            }
            return compare;
        }, function (x, y) {
            return y.iTimestamp - x.iTimestamp; // youngest first
        },
            fnLoad.bind(this, oSearchesPersonalizer),
            fnSave.bind(this, oSearchesPersonalizer));

        oRecentApps = new RecentList(4, function (x, y) {
            return x.semanticObject === y.semanticObject && x.action === y.action;
        }, function (x, y) {
            return y.iTimestamp - x.iTimestamp;
        }, fnLoad.bind(this, oAppPersonalizer), fnSave.bind(this, oAppPersonalizer));
    }

    sap.ushell.services.UserRecents = new UserRecents();
}());
