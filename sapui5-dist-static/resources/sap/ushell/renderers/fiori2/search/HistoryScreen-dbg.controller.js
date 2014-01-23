// Copyright (c) 2013 SAP AG, All Rights Reserved

(function () {
    "use strict";
    /*global jQuery, sap, console */

    jQuery.sap.require("sap.ushell.ui.launchpad.Tile");
    jQuery.sap.require("sap.ushell.ui.launchpad.TileContainer");
    jQuery.sap.require("sap.ushell.services.LaunchPage");
    jQuery.sap.require("sap.ushell.services.Search");
    jQuery.sap.require("sap.ushell.services.UserRecents");

    /**
     * @name "sap.ushell.renderers.fiori2.search.HistoryScreen
     * @extends sap.ui.core.mvc.Controller
     * @public
     */
    sap.ui.controller("sap.ushell.renderers.fiori2.search.HistoryScreen", {

        /**
         * SAPUI5 lifecycle hook.
         * @public
         */
        onInit: function () {
            this.oLaunchPageService = sap.ushell.Container.getService("LaunchPage");
            this.oUserRecentsService = sap.ushell.services.UserRecents;
            this.oSearchService = sap.ushell.Container.getService("Search");
            this.oCurrentSearch = null;

            var that = this,
                oEventBus = sap.ui.getCore().getEventBus(),
                oRecentModel = new sap.ui.model.json.JSONModel();

            oRecentModel.setProperty("/apps", []);
            oRecentModel.setProperty("/searches", []);
            this.getView().setModel(oRecentModel);

            oEventBus.subscribe("search", this.newSearchInvoked, this);
            oEventBus.subscribe("searchDataSourceChange", this.newSearchCategory, this);
            oEventBus.subscribe("closeCurtain", this.saveSearch, this);
            oEventBus.subscribe("openApp", this.appOpened, this);
            oEventBus.subscribe("openHistoryScreen", this.updateView, this);
        },

        onExit: function () {
            if (this.oCurrentSearch) {
                this.oUserRecentsService.noticeSearch(this.oCurrentSearch);
            }
            var oEventBus = sap.ui.getCore().getEventBus();
            oEventBus.unsubscribe("search", this.newSearchInvoked, this);
            oEventBus.unsubscribe("searchDataSourceChange", this.newSearchCategory, this);
            oEventBus.unsubscribe("closeCurtain", this.saveSearch, this);
            oEventBus.unsubscribe("openApp", this.appOpened, this);
            oEventBus.unsubscribe("openHistoryScreen", this.updateView, this);
        },

        updateView: function (sChannelId, sEventId, oData) {
            var fnUpdateAppModel = this.updateAppModel.bind(this),
                oModel = this.getView().getModel();

            this.oUserRecentsService.getRecentApps().done(function (aRecentApps) {
                fnUpdateAppModel(aRecentApps);
            });

            this.oUserRecentsService.getRecentSearches().done(function (aRecentSearches) {
                jQuery.each(aRecentSearches, function (iIndex, oRecentSearch) {
                    var sItemPath = "/searches/" + iIndex;
                    oModel.setProperty(sItemPath, oRecentSearch);
                });
            });
        },

        // wanted behavior: a search is only saved when you navigate away from the search screen
        //      therefore the term is saved (newSearchInvoked()), the category is updated (newSearchCategory())
        //      when the curtain is closing or an app will be opened, it will be saved (saveSearch())
        newSearchInvoked: function (sChannelId, sEventId, oData) {
            if (oData.dataSource) {
                this.oCurrentSearch = {sTerm: oData.searchTerm, oDataSource: oData.dataSource};
            } else {
                this.oCurrentSearch = {
                    sTerm: oData.searchTerm,
                    oDataSource: sap.ushell.Container.getService("Search").getDataSource()
                };
            }
        },

        newSearchCategory: function (sChannelId, sEventId, oData) {
            if (this.oCurrentSearch) {
                this.oCurrentSearch.oObjectName = oData;
            }
        },

        saveSearch: function (sChannelId, sEventId, oData) {
            if (this.oCurrentSearch) {
                this.oUserRecentsService.noticeSearch(this.oCurrentSearch);
                this.oCurrentSearch = null;
            }
        },

        searchAgain: function (oEvent) {
            var oSource = oEvent.getSource(),
                sSearchTerm = oSource.data("sSearchTerm"),
                oDataSource = oSource.data("oDataSource");
//                sObjectNameLabel = oSource.data("sObjectNameLabel"),
//                sObjectNameValue = oSource.data("sObjectNameValue"),
//                oObjectName = {label: sObjectNameLabel, value: sObjectNameValue};
//            if (sObjectNameValue) {
//                sap.ui.getCore().getEventBus().publish("externalSearch", {searchTerm: sSearchTerm, objectName: oObjectName});
//            } else {
//                sap.ui.getCore().getEventBus().publish("externalSearch", {searchTerm: sSearchTerm});
//            }
            sap.ui.getCore().getEventBus().publish("externalSearch", {searchTerm: sSearchTerm, dataSource: oDataSource});
        },

        appOpened: function (sChannelId, sEventId, oData) {
            var that = this,
                oNewApp = {},
                aRecentAppModels;
            this.saveSearch(sChannelId, sEventId, oData);

            if (!oData.semanticObject || !oData.action) {
                return;
            }

            oNewApp.semanticObject = oData.semanticObject;
            oNewApp.action = oData.action;
            oNewApp.sTargetHash = oData.sShellHash;

            this.oUserRecentsService.noticeApp(oNewApp);
        },

        updateAppModel: function (aRecentApps) {
            var oModel = this.getView().getModel(),
                fnBindedInsert = this.insertTileControl.bind(this, oModel, aRecentApps);
            this.oSearchService.queryApplicationsByTarget(aRecentApps, function (aRecentAppTiles) {
                oModel.setProperty("/apps", []);
                jQuery.each(aRecentAppTiles, fnBindedInsert);
            });
        },

        insertTileControl: function (oModel, aSavedData, iIndex, oTile) {
            oModel.setProperty("/apps/" + iIndex, oTile);
        }
    });
}());
