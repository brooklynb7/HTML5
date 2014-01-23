// Copyright (c) 2013 SAP AG, All Rights Reserved

(function () {
    "use strict";
    /*global jQuery, sap, console */

    /**
     * @name "sap.ushell.renderers.fiori2.SearchFilter
     * @extends sap.ui.core.mvc.Controller
     * @public
     */
    sap.ui.controller("sap.ushell.renderers.fiori2.search.ResultFilterInfo", {

        /**
         * SAPUI5 lifecycle hook.
         * @public
         */
        onInit: function () {
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData({filter: []});
            this.getView().setModel(oModel, "filter");

            sap.ui.getCore().getEventBus().subscribe("search", this.searchInvoked, this);
            sap.ui.getCore().getEventBus().subscribe("searchDataSourceChange", this.dataSourceSelected, this);
        },

        onExit: function () {
            sap.ui.getCore().getEventBus().unsubscribe("search", this.searchInvoked, this);
            sap.ui.getCore().getEventBus().unsubscribe("searchDataSourceChange", this.dataSourceSelected, this);
        },

        dataSourceSelected: function (sChannelId, sEventId, oData) {
            this.setResultFilterInfo([oData]);
        },

        searchInvoked: function (sChannelId, sEventId, oData) {
            if (oData.dataSource && oData.dataSource.label) {
                this.setResultFilterInfo([oData.dataSource]);
            } else {
                this.setResultFilterInfo([]);
            }
        },

        setResultFilterInfo: function (aFilters) {
            var oModel = this.getView().getModel("filter");

            // do not display "$$ALL$$" filter
            if (aFilters.length > 0 && aFilters[0].objectName && (aFilters[0].objectName === "$$ALL$$"
                || aFilters[0].objectName.value === "$$ALL$$")) {
                aFilters.splice(0, 1);
            }

            if (aFilters.length > 0) {
                sap.ui.getCore().byId("searchResultPage").removeStyleClass("sapSearchResultFilterInfoHidden");
                this.showCategoryMarker = true;
                oModel.setProperty("/filter", aFilters);
            } else {
                sap.ui.getCore().byId("searchResultPage").addStyleClass("sapSearchResultFilterInfoHidden");
                this.showCategoryMarker = false;
                oModel.setProperty("/filter", []);
            }
        },

        onBeforeRendering: function () {
            this.getView().getModel().setProperty("/states/searchResults/showCategoryMarker", this.showCategoryMarker);
        }
    });
}());
