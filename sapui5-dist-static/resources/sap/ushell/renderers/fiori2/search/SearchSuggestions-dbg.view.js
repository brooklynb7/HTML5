//Copyright (c) 2013 SAP AG, All Rights Reserved
(function () {
    "use strict";
    /*global jQuery, sap, setTimeout */

    jQuery.sap.require("sap.ushell.ui.launchpad.SearchSuggestionList");
    jQuery.sap.require("sap.ushell.ui.launchpad.SearchSuggestionListItem");

    sap.ui.jsview("sap.ushell.renderers.fiori2.search.SearchSuggestions", {
        createContent: function (oController) {
            var self = this,
                oCategoriesSorter = new sap.ui.model.Sorter("data/valueRaw", true),
                fnLabelFormatter = function (sLabel, sCount, sFooter, bFooter) {
//                    return bFooter ? sFooter : sLabel + (sCount ? " (" + sCount + ")" : "");
                    return bFooter ? sFooter : sLabel;
                },
                oCategoryTemplate = new sap.m.Link({
                    text: {
                        parts: ["suggestions>label",
                                "suggestions>data/valueRaw"],
                        formatter: fnLabelFormatter
                    },
                    press: oController.onClickSuggestion
                }),
                oListItemTemplate = new sap.ushell.ui.launchpad.SearchSuggestionListItem({
                    text: {
                        parts: ["suggestions>label",
                                "suggestions>valueRaw",
                                "i18n>suggestionFooter",
                                "suggestions>isGroupFooter"],
                        formatter: fnLabelFormatter
                    },
                    icon: "{suggestions>icon}",
                    isGroupFooter: "{suggestions>isGroupFooter}",
                    isGroupHeader: "{suggestions>isGroupHeader}",
                    type: sap.m.ListType.Active,
                    press: oController.onClickSuggestion,
                    categories: {
                        path: "suggestions>categories",
                        template: oCategoryTemplate,
                        sorter: oCategoriesSorter
                    }
                }),
                oListSuggestions = new sap.ushell.ui.launchpad.SearchSuggestionList({
                    pressUpFirstItem: this.focusSearchfield,
                    pressEsc: this.focusSearchfield,
                    visible: {
                        parts: ["suggestions>/visible",
                                "suggestions>/items/6/visible",
                                "suggestions>/suggestionsVisible"],
                        formatter: function (bGlobal, bApps, bSuggestions) {
                            if (bGlobal && (bApps || bSuggestions)) {
                                self.showSuggestions();
                            } else {
                                self.hideSuggestions();
                            }
                            return true;
                        }
                    },
                    items: {
                        path: "suggestions>/items",
                        filters: [new sap.ui.model.Filter("visible", sap.ui.model.FilterOperator.EQ, true)],
                        template: oListItemTemplate
                    }
                });

            sap.ui.getCore().byId("sfOverlay").addEventDelegate({
                onsapdown: function (oEvent) {
                    if (oListSuggestions.getItems().length > 0) {
                        oListSuggestions.setDisableKeyboardNavigation(false);
                        oListSuggestions.focus();

                        oEvent.preventDefault();
                        oEvent.stopPropagation();
                    }
                },
                onsapescape: function (oEvent) {
                    oController.closeSuggestions();

                    oEvent.preventDefault();
                    oEvent.stopPropagation();
                }
            });

            return oListSuggestions;
        },

        focusSearchfield: function (oEvent) {
            sap.ui.getCore().byId("sfOverlay").focus();
        },

        onAfterRendering: function () {
            if (!this.getModel("suggestions").getProperty("/visible")) {
                this.hideSuggestions();
            }
        },

        hideSuggestions: function () {
            this.$().slideUp(200);
        },

        showSuggestions: function () {
            this.$().slideDown(200);
            if (this.getParent() && this.getParent().scrollTo) {
                this.getParent().scrollTo(0);
            } else {
                this.$().parent().scrollTop(0);
            }
        },

        getControllerName: function () {
            return "sap.ushell.renderers.fiori2.search.SearchSuggestions";
        }
    });
}());
