// Copyright (c) 2013 SAP AG, All Rights Reserved

(function () {
    "use strict";

    jQuery.sap.require("sap.ushell.renderers.fiori2.search.SearchModel");

    /*global jQuery, sap, console */

    /**
     * @name "sap.ushell.renderers.fiori2.SearchResults
     * @extends sap.ui.core.mvc.Controller
     * @public
     */
    sap.ui.controller("sap.ushell.renderers.fiori2.search.SearchResults", {

        /**
         * SAPUI5 lifecycle hook.
         * @public
         */
        onInit: function () {
            var self = this;
            // jQuery.sap.includeStyleSheet(jQuery.sap.getModulePath(
            //     "sap.ushell.themes.base.search",
            //     ".css"
            // ));

            this.requestID = 10;
            this.top = 10;

            try {
                //var oSearchModel = new sap.ui.model.json.JSONModel();
                var oSearchModel = new sap.ushell.renderers.fiori2.search.SearchModel();
//                oSearchModel.searchInit();
//                oSearchModel.searchFireQuery();

                this.getView().setModel(oSearchModel);
                // oSearchModel.setProperty("/count", "...");

                sap.ushell.Container.getService("Search").searchInit();
                sap.ushell.Container.getService("Search").searchFireQuery(this.getView().getModel());
                var binding = this.getView().getModel().bindList("/results");
                binding.attachChange(function(){
                    self.getView().onResultItemsChanged();
                });
            } catch(ex) {
                jQuery.sap.log.error(ex.name, ex.message, "sap.ushell.renderers.fiori2.search.SearchResults");
                jQuery.sap.log.warning("Unable to initialize SearchModel", "", "sap.ushell.renderers.fiori2.search.SearchResults");
            }
            sap.ui.getCore().getEventBus().subscribe("search", this.searchInvoked, this);
            sap.ui.getCore().getEventBus().subscribe("selectCategory", function(sChannelId, sEventId, oData){
                self.category = oData;
                self.getView().newSearchTriggered();
            }, this);

            sap.ui.getCore().getEventBus().subscribe("searchFinished", function(sChannelId, sEventId, result){
                self.getView().searchFinished(result);
            }, this);

        },

        getCategory: function () {
            return this.category;
        },

        onExit: function () {
            sap.ui.getCore().getEventBus().unsubscribe("search", this.searchInvoked, this);
            sap.ui.getCore().getEventBus().unsubscribe("selectCategory", this);
            sap.ui.getCore().getEventBus().unsubscribe("searchFinished", this);
        },

        getResultsForDataSource: function (dataSource, results) {
            var resultsForDS = [];
            for (var i = 0; i < results.length; i++) {
                var result = results[i];
                var resultDS = result.$$DataSourceMetaData$$;
                if (dataSource.objectName.value === resultDS.objectName.value) {
                    resultsForDS.push(result);
                }
            }
            return resultsForDS;
        },

        gimmeSomeMore: function () {
//          this.getView().getModel().searchAppendNextPage();
        	sap.ushell.Container.getService("Search").searchAppendNextPage(this.getView().getModel());
        },

        gimmeSearchTerm: function () {
            return this.searchTerm;
        },

        loadResultset: function (searchTerm, dataSource, skip) {
            var self = this;
        	sap.ushell.Container.getService("Search").searchWithCategories(searchTerm, dataSource, this.getView().getModel(), function(resultset){
                // self.getView().newSearchFinished(resultset);
            });
        },

        searchInvoked: function (sChannelId, sEventId, oData) {
            var searchQuery,
                self = this,
                oSearchModel = self.getView().getModel();


            self.category = oData.dataSource;
            self.searchTerm = oData.searchTerm;

            //New search reset to show apps
            this.getView().newSearchTriggered();

            if (window.f2p) {
                window.f2p.add(window.f2p.m.startSearch, {
                    st: oData.searchTerm
                });
            }

            //Search Service
            this.loadResultset(oData.searchTerm, oData.dataSource, 0);

            //App Service
            self.getView().getModel().setProperty("/tiles", []);
            sap.ushell.Container.getService("Search").queryApplications(oData.searchTerm, function (oResult) {
                var aModelTiles = [];
                var aTiles = oResult.getElements();
                self.getView().getModel().setProperty("/tiles", aTiles);
                self.getView().appSearchFinished(oResult);
            });
        },

        itemPressed: function (item) {
            var oModel = this.getView().getModel();
            oModel.setProperty("/detail", item);
        }
    });
}());
