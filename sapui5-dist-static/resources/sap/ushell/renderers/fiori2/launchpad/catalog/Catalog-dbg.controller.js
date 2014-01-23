// Copyright (c) 2013 SAP AG, All Rights Reserved

(function () {
    "use strict";
    /*global jQuery, $, sap, console, window */
    /*jslint nomen: true */

    sap.ui.controller("sap.ushell.renderers.fiori2.launchpad.catalog.Catalog", {
        onInit: function () {
            var oModel = sap.ui.getCore().byId("navContainer").getModel();
            oModel.setProperty("/showCatalogHeaders", true);
            oModel.setProperty("/states/catalog/search", new sap.m.Text("catalogTitle", {
                text : "{i18n>tile_catalog}",
                width : "100%",
                textAlign : sap.ui.core.TextAlign.Center
            }).getId());
            sap.ui.getCore().getEventBus().subscribe("showCatalog", this.onShow, this);
        },

        onExit: function () {
            sap.ui.getCore().getEventBus().unsubscribe("showCatalog", this.onShow);
        },

        onAfterRendering: function () {
            // disable swipe gestures -> never show master in Portait mode
            sap.ui.getCore().byId("catalogSplitContainer").onswiperight = function () {};
        },

        onShow: function (sChannelId, sEventId, oData) {
            $.extend(this.getView().getViewData(), oData);
            //reset active tiles
            var oModel = sap.ui.getCore().byId("navContainer").getModel(),
                aCatalogTiles = oModel.getProperty("/catalogTiles") || [],
                i;
            for (i = 0; i < aCatalogTiles.length; i = i + 1) {
                aCatalogTiles[i].active = false;
            }
            this.applyTileFilters();
            window.setTimeout($.proxy(sap.ui.getCore().byId("catalogSelect").setSelectedItemId, sap.ui.getCore().byId("catalogSelect"), this.selectedCategory), 500);
        },

        setCategoryFilter : function (aFilter) {
            this.categoryFilter = aFilter || null;
            this.applyTileFilters();
        },

        setSearchFilter : function (aFilter) {
            this.searchFilter = aFilter || null;
            this.applyTileFilters();
        },

        applyTileFilters : function () {
            var aFilters = [],
                oSearchFilter,
                oCategoryFilter;
            if (this.searchFilter) {
                oSearchFilter = new sap.ui.model.Filter($.map(this.searchFilter.split(/[\s,]+/), function (v) {
                    return (v && new sap.ui.model.Filter("keywords", sap.ui.model.FilterOperator.Contains, v)) || undefined;
                }), true);
                aFilters.push(oSearchFilter);
            }
            if (this.categoryFilter) {
                oCategoryFilter = new sap.ui.model.Filter("catalog", sap.ui.model.FilterOperator.EQ, this.categoryFilter);
                aFilters.push(oCategoryFilter);
            }
            sap.ui.getCore().byId("catalogTiles").getBinding("tiles").filter(aFilters);
        },

        onLiveFilter : function (oEvent) {
            var sQuery = oEvent.getParameter("newValue");
            if (sQuery) {
                this.setSearchFilter(sQuery);
            } else {
                this.setSearchFilter();
            }
        },

        onCategoryFilter : function (oEvent) {
            var oSource = oEvent.getParameter("selectedItem"),
                oSourceContext = oSource.getBindingContext(),
                oModel = oSourceContext.getModel();
            if (oModel.getProperty("static", oSourceContext)) { // show all categories
                oModel.setProperty("/showCatalogHeaders", true);
                this.setCategoryFilter();
                this.selectedCategory = undefined;
            } else { // filter to category
                oModel.setProperty("/showCatalogHeaders", false);
                this.setCategoryFilter(oSource.getText());
                this.selectedCategory = oSource.getId();
            }
        },

        onTileDragStart : function (oEvent) {
            var oScroller = sap.ui.getCore().byId("catalogTilesPage").getScrollDelegate()._scroller;
            if (oScroller) {
                window.setTimeout($.proxy(oScroller.disable, oScroller), 1);
            }
        },

        onTileDragStop : function (oEvent) {
            var oScroller = sap.ui.getCore().byId("catalogTilesPage").getScrollDelegate()._scroller;
            if (oScroller) {
                oScroller.enable();
                oScroller.scrollTo(0, 0, 1, true);
            }
        },

        /**
         * Event handler triggered if tile should be added to the default group.
         * 
         * @param {sap.ui.base.Event} oEvent
         *     the event object. It is expected that the binding context of the event source points to the tile to add.
         */
        onAddTileToDefault : function (oEvent) {
            var oSourceContext = oEvent.getSource().getBindingContext();
            if (!oSourceContext.getProperty("active")) {
                this._addTile(oSourceContext, this.getView().getViewData().groupContext
                        || new sap.ui.model.Context(oSourceContext.getModel(), "/groups/0"));
            }
        },

        /**
         * Event handler triggered if tile should be added to a specified group.
         * 
         * @param {sap.ui.base.Event} oEvent
         *     the event object. It is expected that the binding context of the event source points to the group. Also,
         *     the event must contain a "control" parameter whose binding context points to the tile.
         */
        onAddTile : function (oEvent) {
            var oSourceContext = oEvent.getParameter("control").getBindingContext();
            if (!oSourceContext.getProperty("active")) {
                this._addTile(oSourceContext, oEvent.getSource().getBindingContext());
            }
        },

        /**
         * Send request to add a tile to a group. Request is triggered asynchronously, so UI is not blocked.
         *
         * @param {sap.ui.model.Context} oTileContext
         *     the catalog tile to add
         * @param {sap.ui.model.Context} oGroupContext
         *     the group where the tile should be added
         * @private
         */
        _addTile : function (oTileContext, oGroupContext) {
            var oBus = sap.ui.getCore().getEventBus();
            window.setTimeout($.proxy(oBus.publish, oBus, "launchpad", "addTile", {
                catalogTileContext : oTileContext,
                groupContext: oGroupContext
            }), 0);
        }
    });
}());
