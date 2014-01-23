//Copyright (c) 2013 SAP AG, All Rights Reserved
(function () {
    "use strict";
    /*global jQuery, sap, console, SearchLayout, SearchResultListItem, SearchResultListItemDetail, SearchResultListWithDetail, SearchResultListItemFooter */

    jQuery.sap.require("sap.ushell.renderers.fiori2.search.SearchResultListItem");
    jQuery.sap.require("sap.ushell.renderers.fiori2.search.SearchLayout");
    jQuery.sap.require("sap.ushell.renderers.fiori2.search.SearchResultListItemDetail");
    jQuery.sap.require("sap.ushell.ui.launchpad.SearchResultApps");
    jQuery.sap.require("sap.ushell.ui.launchpad.SearchResultAppItem");

    // =======================================================================
    // UI5 Helper Methods
    // =======================================================================

    sap.ui.core.Control.extend("sap.search.DivLayout", {
        metadata : {
            aggregations: {
                content: {singularName: "content", multiple:true } // default type is "sap.ui.core.Control", multiple is "true"
            }
        },

        renderer : function(oRm, oControl) {      // the part creating the HTML

            var aChildren = oControl.getContent();
            for (var i = 0; i < aChildren.length; i++) { // loop over all child Controls,
                                                       // render the colored box around them
                oRm.renderControl(aChildren[i]);   // render the child Controls
            }

        }
    });


    sap.ui.core.Control.extend("sap.search.DivContainer", {      // call the new Control type "my.Hello"
                                                  // and let it inherit from sap.ui.core.Control
        metadata : {                              // the Control API
            properties : {
                "cssClass" : "string"
            },
            aggregations: {
               "content": {singularName: "content", multiple:true } // default type is "sap.ui.core.Control", multiple is "true"
            },
        },

        renderer : function(oRm, oControl) {      // the part creating the HTML
            oRm.write('<div');
            oRm.writeControlData(oControl);  // writes the Control ID
            oRm.addClass(oControl.getCssClass());
            oRm.writeClasses();
            oRm.write('>');
            var aChildren = oControl.getContent();
            for (var i = 0; i < aChildren.length; i++) { // loop over all child Controls,
                oRm.renderControl(aChildren[i]);   // render the child Controls
            }
            oRm.write('</div>');
        }
    });


    // =======================================================================
    // Result List View
    // =======================================================================
    sap.ui.jsview("sap.ushell.renderers.fiori2.search.SearchResults", {

        // create content
        // ===================================================================
        createContent: function (oController) {
            var self = this;
            self.oController = oController;
            var listProperties = {
                growing: true,
                threshold: 2,
                inset: false,
                showUnread: true,
                width: "auto",
                showNoData: false
            };
            self.resultList = new sap.m.List(listProperties);
            self.resultList.setGrowingThreshold(2000);
            self.resultList.bindAggregation("items", "/results", function (path, bData) {
                return self.assembleListItem(bData);
            });

            self.oLoadingDialog = new sap.ushell.ui.launchpad.LoadingDialog({
                title: null,
                text: "", // in order to calculate dimension before first call
                showCancelButton: false
            });

            self.appSearchResult = self.assembleAppSearch();
            // self.appListLabel = new sap.m.Label({text:'{i18n>apps}'});

            // self.searchLayout = new SearchLayout({
            //     resultListLabel: new sap.m.Label({text:'{/resultListHeading}'}),
            //     resultListCount: new sap.m.Label({text:'({/count})'}),
            //     resultList: self.resultList,
            //     appListLabel: self.appListLabel,
            //     appList: appSearchResult,
            //     previewLabel: new sap.m.Label({text:'{i18n>more_information_on}'})
            // });

            self.resultListWithDetail = new SearchResultListWithDetail({
                resultList: self.resultList,
                preview: self.assembleDetail()
            });

            self.searchLayout = new SearchLayout({
                showMainHeader:true,
                topHeader: '{i18n>apps}',
                topList: self.appSearchResult,
                bottomHeader: sap.ushell.resources.i18n.getText("others"),
                bottomHeaderIsUnspecific: true,
                bottomList: self.resultListWithDetail,
            });

            self.searchContainer = new sap.search.DivContainer({
                content: self.searchLayout,
                cssClass : 'searchContainer'
            });

            // blub.setPreviewStatus("open");
            return self.searchContainer;

        },

        // is phone
        // ===================================================================
        isPhone: function () {
            return jQuery.device.is.phone;
        },

        newSearchTriggered: function () {
            var self = this;
            var oSearchModel = this.getModel();
            oSearchModel.setProperty("/count", "...");
            oSearchModel.setProperty("/resultListHeading", sap.ushell.resources.i18n.getText("searching"));
            self.oLoadingDialog.openLoadingScreen();
            // self.searchContainer.setBusy(true);
            // self.resultList.removeAllItems();
            this.selectedPath = null;
            this.oTilesContainer.resetGrowing();
        },

        searchFinished: function (result) {
            var self = this;
            var oSearchModel = this.getModel();
            if (result.append)
            {
                return;
            }
            self.oLoadingDialog.closeLoadingScreen();
            // self.searchContainer.setBusy(false);
            self.searchLayout.setBottomCount(Math.max(result.resultset.getSearchResultSet().totalcount,0));

            var category = self.oController.getCategory();
            var bottomLabel;
            if (category)
            {
                bottomLabel = category.label;
            }else{
                bottomLabel = sap.ushell.resources.i18n.getText("others");
            }

            // self.searchLayout.setBottomHeader( || 'Others');

            if (!category || category.objectName.value === '$$ALL$$' )
            {
                self.searchLayout.setBottomHeaderIsUnspecific(true);
                self.searchLayout.setBottomHeader(sap.ushell.resources.i18n.getText("others") );
                // self.searchLayout.setBottomCount(result.resultset.getSearchResultSet().totalcount);
            }else{
                self.searchLayout.setBottomHeaderIsUnspecific(false);
                self.searchLayout.setBottomHeader(bottomLabel);
            }


            var items = self.resultList.getItems();
            if (result.resultset.getSearchResultSet().totalcount !== 0)
            {
                self.searchLayout.setBottomList(self.resultListWithDetail);
                // items[0].setStatus("open");
                var path = '/results/0'; // First item
                self.selectItem(items[0], this.getModel().getProperty(path), path); // sets the detail
            }else{
                // self.resultListWithDetail.setPreview(undefined);
                self.searchLayout.setBottomList(undefined);
            }


        },

        appSearchFinished : function (oResult) {
            var self = this;
            var searchTerm = self.getController().gimmeSearchTerm();
            // if (searchTerm) { // HIGHLIGHTING!!
            //     var tiles = self.oTilesContainer.getTiles();
            //     var baseTitleElem;
            //     var regexObj = new RegExp('(' + searchTerm.replace(/[^A-Za-z0-9;]/g, "") + ')', "gi");
            //     for (var k=0; k<tiles.length; k++) {
            //         baseTitleElem = $(tiles[k].getDomRef()).find('.sapUshellTileBaseTitle');
            //         if (baseTitleElem && baseTitleElem.html()) {
            //             baseTitleElem.html(baseTitleElem.html().replace(regexObj, '<b>$1</b>'));
            //         }
            //     }
            // }
            if (oResult.totalResults === 0)
            {
                self.appsFound = false;
                self.searchLayout.setTopCount(oResult.totalResults);
                self.searchLayout.setTopList(undefined);
            }else{
                self.appsFound = true;
                self.searchLayout.setTopCount(oResult.totalResults);
                self.searchLayout.setTopList(self.appSearchResult);
            }

        },

        onResultItemsChanged: function(){
            var self = this;
            self.resultList.setBusy(false);
        },

        startLoading: function () {
            // this.searchLayout.addStyleClass('loading');
        },

        finishLoading: function () {
            // this.searchLayout.removeStyleClass('loading');
        },

        // app search area
        // ===================================================================
        assembleAppSearch: function(){
            var self = this;
            var oTilesContainer = new sap.ushell.ui.launchpad.SearchResultApps({
                showNoData: false,
                growing: true,
                growingThreshold: 2,
                growingTriggerText: {path: "i18n>showMore"},
                results: {
                    path : "/tiles",
                    template : new sap.ushell.ui.launchpad.SearchResultAppItem({
                        icon: "{icon}",
                        text: "{title}",
                        targetUrl: "{targetURL}"
                    })
                }
            });
            // oTilesContainer.addStyleClass("appSearchContent");
            this.oTilesContainer = oTilesContainer;



            var appSearchResult = new sap.search.DivContainer({
                content: [oTilesContainer],
                cssClass : 'appSearchResults'
            });
            // appSearchResult.addStyleClass('appSearchResults');

            // var oOpenCatalogLink = new sap.m.Link({
            //     text: "{i18n>open_catalog}",
            //     press: function () {
            //         sap.ui.getCore().getEventBus().publish("openCatalog", {
            //             groupContext: null
            //         });
            //     }
            // });

            // appSearchResult.addItem(oOpenCatalogLink);
            // oOpenCatalogLink.addStyleClass("catalogLink");

            return appSearchResult;
            //**************************************************** APP SEARCH END


        },



        // assemble title item
        // ===================================================================
        assembleTitleItem: function (oData) {
            var item = new sap.m.CustomListItem();
            var title = new sap.m.Label({
                text: "{title}"
            });
            title.addStyleClass('bucketTitle');
            item.addStyleClass('bucketTitleContainer');
            item.addContent(new sap.m.HBox({
                items: [title]
            }));
            return item;
        },

        // assemble footer item
        // ===================================================================
        assembleFooterItem: function (oData) {
            var self = this;

            var item = new SearchResultListItemFooter({
                text : "{i18n>showMore}",
                showMore: function(){
                    self.getController().gimmeSomeMore();
                }
            });
            return item;
        },

        // assemble result list item
        // ===================================================================
        assembleResultListItem: function(oData, path){
            var self = this;
            var item = new SearchResultListItem({
                title: "{$$Name$$}",
                titleUrl: "{uri}",
                type: "{dataSourceName}",
                imageUrl: "{imageUrl}",
                data: oData,
                visibleAttributes: 3,
                navigate: function(){
                    // alert("navigate event received from control");
                },
                previewOpen: function(){

                    self.selectItem(item, oData, path);
                    // self.searchLayout.setRightPaneStatus('preview');
                },
                previewClose: function(){
                    // self.hideDetail(this);
                    // self.showApps();
                    // self.selectedPath = null;

                    // if(this.selectedItem){
                    //     this.selectedItem.setStatus("closed");
                    // }
                }
            });

            if (self.selectedPath === path) // Saved path
            {
                // item.setStatus("open");
                // self.selectedItem = item;
                self.selectItem(item, oData, path);
            }

            return item;
        },


        selectItem: function(item, oData, path){
            var self = this;
            if (item === self.selectedItem)
            {
                return;
            }
            self.selectedPath = path;
            self.resultListWithDetail.setPreview(self.assembleDetail(oData));
            if (item)
            {
            item.setStatus("open");
            }

            if(self.selectedItem){
                self.selectedItem.setStatus("closed");
            }
            self.selectedItem = item;

        },

        // show apps
        // ===================================================================
        showApps: function () {

        },

        assembleDetail: function(oData){
            var self = this;
            // if(self.detail){
            //     self.searchLayout.removeItem(self.detail);
            // }
            var detail = new SearchResultListItemDetail({
                headerLabel: "{i18n>more_information_on}",
                itemTitle: oData ? oData.$$Name$$ : undefined,
                itemTitleUrl: oData ? oData.uri : undefined,
                itemType: oData ? oData.dataSourceName : undefined,
                itemData: oData,
                firstDetailAttribute: 4,
                maxDetailAttributes: 8
            });
            return detail;
            // self.resultListWithDetail.setPreview(detail);
            // self.oController.itemPressed(oData);
        },

        // assemble list item
        // ===================================================================
        assembleListItem: function (bData) {
            var self = this;
            var oData = bData.getObject();
            if (oData.type === 'title') {
                return self.assembleTitleItem(oData);
            } else if (oData.type === 'footer') {
                return self.assembleFooterItem(oData);
            } else {
                return self.assembleResultListItem(oData, bData.getPath());
            }
        },



        // get controller name
        // ===================================================================
        getControllerName: function () {
            return "sap.ushell.renderers.fiori2.search.SearchResults";
        }

    });
}());
