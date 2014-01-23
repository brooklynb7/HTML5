// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The Search adapter for the demo platform.
 *
 * @version @version@
 */
(function () {
    "use strict";
    /*global jQuery, sap, setTimeout */
    jQuery.sap.declare("sap.ushell.adapters.demo.SearchAdapter");
    /**
     * 
     * @param oSystem
     * @returns {sap.ushell.adapters.abap.SearchAdapter}
     */
    sap.ushell.adapters.demo.SearchAdapter = function (oSystem) {

        this.searchDataSource = {
            objectName: "$$ALL$$",
            packageName: "ABAP",
            type: "Category",
            label: "All"
        };

        this.querySuggestions = function (searchTerm, resultCallback) {
            var sUrl = jQuery.sap.getModulePath("sap.ushell.adapters.demo.searchSuggestions." + searchTerm.length, ".json"),
                oSuggestions = jQuery.sap.syncGetJSON(sUrl),
                fnGetObjectName = function () {
                    return this.objectName;
                },
                fnMakeResultSet = function (oSuggestions) {

                    jQuery.each(oSuggestions, function (i, value) {
                        value.dataSource.getObjectName = fnGetObjectName;
                    });

                    return {
                        getElements : function () {
                            return oSuggestions;
                        }
                    };
                };

            setTimeout(function () {
                resultCallback(fnMakeResultSet(oSuggestions.data ? oSuggestions.data.suggestions : []));
            }, 300);
        };

        this.search = function (searchTerm, resultCallback) {
            // TODO            
        };

        this.setQueryForAll = function () {
            // TODO
        };

        this.setSearchTermWithoutQuery = function () {
            // TODO
        };

        this.searchWithCategories = function (searchTerm, objectName, oModel, resultCallback, top, skip) {
            var sUrl = jQuery.sap.getModulePath("sap.ushell.adapters.demo.searchResults." + "Sally", ".json"),
                dat = jQuery.sap.syncGetJSON(sUrl);

            setTimeout(function () {
                // TODO do not pass model to the services / adapters
                oModel.setProperty("/results", dat.data);

                sap.ui.getCore().getEventBus().publish("searchFinished", {
                    append: false,
                    resultset: dat.data
                });
            }, 500);
        };

        this.searchInit = function () {
            // TODO
        };

        this.searchFireQuery = function (oModel) {
            var sUrl = jQuery.sap.getModulePath("sap.ushell.adapters.demo.searchFilters.dataSources", ".json"),
                dat = jQuery.sap.syncGetJSON(sUrl);

            oModel.setProperty("/categoryTree", dat.data);
        };

        this.setDataSource = function (dataSource, oModel) {
            this.searchDataSource = dataSource;
            sap.ui.getCore().getEventBus().publish("searchDataSourceChange", dataSource);
        };

        this.isSearchAvailable = function () {
            var oDeferred = jQuery.Deferred();

            oDeferred.resolve(true);
            return oDeferred.promise();
        };

        this.setSearchCategoryTree = function () {
            // TODO
        };

        this.getSina = function () {
            return null;
        };

        this.getDataSource = function () {
            return this.searchDataSource;
        };
    };
}());
