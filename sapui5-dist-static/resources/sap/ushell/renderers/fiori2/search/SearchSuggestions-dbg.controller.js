// Copyright (c) 2013 SAP AG, All Rights Reserved

(function () {
    "use strict";
    /*global jQuery, sap, console, window */

    /**
     * @name "sap.ushell.renderers.fiori2.SearchFilter
     * @extends sap.ui.core.mvc.Controller
     * @public
     */
    sap.ui.controller("sap.ushell.renderers.fiori2.search.SearchSuggestions", {

        /**
         * SAPUI5 lifecycle hook.
         * @public
         */
        onInit: function () {
            var oModel = new sap.ui.model.json.JSONModel();
            this.getView().setModel(oModel, "suggestions");
            this.closeSuggestions();

            if (jQuery.device.is.phone || jQuery.device.is.tablet) {
                this.suggestionLimit = 4;
            } else {
                this.suggestionLimit = 5;
            }

            sap.ui.getCore().getEventBus().subscribe("searchSuggest", this.doSuggestion, this);
            sap.ui.getCore().getEventBus().subscribe("search", this.closeSuggestions, this);
        },

        onExit: function () {

            sap.ui.getCore().getEventBus().unsubscribe("searchSuggest", this.doSuggestion, this);
            sap.ui.getCore().getEventBus().unsubscribe("search", this.closeSuggestions, this);
        },

        closeSuggestions: function (sChannelId, sEventId, oData) {
            this.getView().getModel("suggestions").setData({
                items: [{visible: false, type: "suggestion"},
                        {visible: false, type: "suggestion"},
                        {visible: false, type: "suggestion"},
                        {visible: false, type: "suggestion"},
                        {visible: false, type: "suggestion"},
                        {visible: false, type: "suggestion", isGroupFooter: true},
                        {visible: false, type: "app", isGroupHeader: true, label: sap.ushell.resources.i18n.getText("suggestion_found_apps")},
                        {visible: false, type: "app"}],
                suggestionsVisible: false,
                visible: false
            });
        },

        dataSourceSelected: function (sChannelId, sEventId, oData) {
            if (this.getView().getModel("suggestions").getProperty("/visible")) {
                this.doSuggestion(null, null, {searchTerm: this.lastSearchTerm});
            }
        },

        onClickSuggestion: function (oEvent) {
            var oSuggestion = oEvent.getSource().getBindingContext("suggestions").getObject(),
                oDataSource,
                sSearchTerm,
                bCategorySuggested = false;

            if (oSuggestion.type === "app") {
                if (oSuggestion.targetURL) {
                    window.location = oSuggestion.targetURL;
                }
            } else {
                if (oSuggestion.data) {
                    sSearchTerm = oSuggestion.data.labelRaw;
                    oDataSource = oSuggestion.data.dataSource;
                    oDataSource.label = oDataSource.objectName.label;
                    bCategorySuggested = true;
                } else {
                    sSearchTerm = oSuggestion.labelRaw;
//                    oDataSource = sap.ushell.Container.getService("Search").getDataSource();
                    oDataSource = {
                            label: "All",
                            level: 0,
                            objectName: {
                                label: "ALL",
                                value: "$$ALL$$"
                            },
                            packageName: {
                                label: "ABAP",
                                value: "ABAP"
                            },
                            schemaName: {
                                label: "",
                                value: ""
                            },
                            type: {
                                label: "Category",
                                value: "Category"
                            }
                    }; 
                }
                sap.ui.getCore().getEventBus().publish("externalSearch", {
                    searchTerm: sSearchTerm,
                    dataSource: oDataSource,
                    categorySuggested: bCategorySuggested
                });
            }
        },

        doSuggestion: function (sChannelId, sEventId, oData) {
            var oFilter = new sap.ui.model.Filter("visible", sap.ui.model.FilterOperator.EQ, true),
                oModel = this.getView().getModel("suggestions"),
                appQuery,
                query;

            // do not trigger requests twice if view is not visible at the moment
            if (oData.activeViews && oData.activeViews.indexOf(this.getView().getId()) === -1) {
                return;
            }

            this.lastSearchTerm = oData.searchTerm;

            if (oData.searchTerm.length === 0) {
                this.closeSuggestions();
            }
            if (oData.searchTerm.length < 3) {
                return;
            }

            oModel.setProperty("/visible", true);

            appQuery = sap.ushell.Container.getService("Search").queryApplications(oData.searchTerm, jQuery.proxy(function (resultset) {
                var result = resultset.getElements();

                if (resultset.searchTerm !== this.lastSearchTerm) {
                    return;
                }

                if (result.length > 0) {
                    oModel.setProperty("/items/6/visible", true);
                    oModel.setProperty("/items/7", {
                        label: result[0].label,
                        icon: result[0].icon,
                        targetURL: result[0].targetURL,
                        app: result[0],
                        visible: true,
                        type: "app"
                    });
                } else {
                    oModel.setProperty("/items/6/visible", false);
                    oModel.setProperty("/items/7/visible", false);
                }

                this.getView().getContent()[0].getBinding("items").filter([oFilter]);
            }, this), 1);

            query = sap.ushell.Container.getService("Search").querySuggestions(oData.searchTerm, jQuery.proxy(function (resultset) {
                var suggestions = resultset.getElements(),
                    oSuggestions = [],
                    i = 0;

                if (resultset.searchTerm !== this.lastSearchTerm) {
                    return;
                }

                if (suggestions.length > 0) {
                    oSuggestions = this.buildSuggestions(suggestions);
                    oModel.setProperty("/suggestionsVisible", true);
                } else {
                    oModel.setProperty("/suggestionsVisible", false);
                }

                for (i; i < 4; i = i + 1) {
                    if (oSuggestions[i] && i < (this.suggestionLimit - 1)) {
                        oModel.setProperty("/items/" + i, oSuggestions[i]);
                    } else {
                        oModel.setProperty("/items/" + i + "/visible", false);
                    }
                }

                if (oSuggestions.length > 0) {
                    oModel.setProperty("/items/" + (i + 1), {visible: true, type: "suggestion", isGroupFooter: true});
                } else {
                    oModel.setProperty("/items/" + (i + 1) + "/visible", false);
                }

                this.getView().getContent()[0].getBinding("items").filter([oFilter]);
            }, this));
        },

        buildSuggestions: function (aSuggestions) {
            var oResult = {};

            jQuery.each(aSuggestions, function (i, value) {

                if (value.filter.attribute !== "$$AllAttributes$$") {
                    return;
                }

                if (!oResult[value.labelRaw]) {
                    oResult[value.labelRaw] = value;
                    oResult[value.labelRaw].categories = [];
                    oResult[value.labelRaw].visible = true;
                    oResult[value.labelRaw].type = "suggestion";
                }

                if (oResult[value.labelRaw].label.length === 0) {
                    oResult[value.labelRaw].label = value.labelRaw;
                }

                if (value.dataSource.getObjectName().value !== "$$AllDataSources$$") {
                    oResult[value.labelRaw].categories.push({
                        label: value.dataSource.getObjectName().label,
                        data: value
                    });
                }
            });

            return jQuery.map(oResult, function (k, v) {
                return [k];
            });
        }
    });
}());
