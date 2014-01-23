// Copyright (c) 2013 SAP AG, All Rights Reserved

(function () {
    "use strict";
    /*global jQuery, sap, console */

    /**
     * @name "sap.ushell.renderers.fiori2.SearchFilter
     * @extends sap.ui.core.mvc.Controller
     * @public
     */
    sap.ui.controller("sap.ushell.renderers.fiori2.search.SearchFilter", {

        /**
         * SAPUI5 lifecycle hook.
         * @public
         */
        onInit: function () {
            var searchResultView = sap.ui.getCore().byId("searchResultsView");
            this.getView().setModel(searchResultView.getModel(), 'SearchFilter');

            var oEventBus = sap.ui.getCore().getEventBus();

            oEventBus.subscribe("search", this.buildCategoryTreeForSuggestion, this);
            oEventBus.subscribe("searchSuggest", this.buildCategoryTreeForNoSearchTerm, this);
            oEventBus.subscribe("closeCurtain", this.buildCategoryTreeForCloseCurtain, this);

//            this.onInit = true;
        },


        selectCategory : function(event,category){
            sap.ushell.Container.getService("Search").setDataSource(category.dataSource, this.getView().getModel('SearchFilter'));
            sap.ui.getCore().getEventBus().publish("selectCategory", category.dataSource);
        },


        buildCategoryTreeForSuggestion: function (sChannelId, sEventId, oData) {
            var self = this;
            self.getView().getModel("SearchFilter").setProperty("/currentState/showCurtainPane", false);
            if(oData.categorySuggested){
                sap.ushell.Container.getService("Search").setSearchCategoryTree(oData);
            }
        },

        buildCategoryTreeForNoSearchTerm: function(sChannelId, sEventId, oData){
            var self = this;
//            if(!self.onInit){
//                self.onInit = false;
                if(oData.searchTerm === ""){
                    sap.ushell.Container.getService("Search").setQueryForAll(this.getView().getModel('SearchFilter'), false);
                } else {
                    sap.ushell.Container.getService("Search").setSearchTermWithoutQuery(oData.searchTerm);
                }
//            };
        },

        buildCategoryTreeForCloseCurtain: function(){
            sap.ushell.Container.getService("Search").setQueryForAll(this.getView().getModel('SearchFilter'), true);
        }



    });
}());
