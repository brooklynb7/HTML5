//Copyright (c) 2013 SAP AG, All Rights Reserved
(function () {
    "use strict";
    /*global jQuery, sap, SearchLayout */

    jQuery.sap.require("sap.ushell.ui.launchpad.TileContainer");
    jQuery.sap.require("sap.ushell.ui.launchpad.Tile");
    jQuery.sap.require("sap.ushell.ui.launchpad.SearchResultApps");
    jQuery.sap.require("sap.ushell.ui.launchpad.SearchResultAppItem");
    jQuery.sap.require("sap.ushell.renderers.fiori2.search.SearchLayout");

    sap.ui.jsview("sap.ushell.renderers.fiori2.search.HistoryScreen", {
        createContent: function (oController) {
            var oSearchItemTemplate,
                oListSearches,
                oRecentApps;

            // recent apps
            oRecentApps =  new sap.ushell.ui.launchpad.SearchResultApps({
                showNoData: false,
                growing: true,
                growingThreshold: 2,
                growingTriggerText: {path: "i18n>showMore"},
                results: {
                    path : "/apps",
                    template : new sap.ushell.ui.launchpad.SearchResultAppItem({
                        icon: "{icon}",
                        text: "{title}",
                        targetUrl: "{url}"
                    })
                },
                visible: {
                    path: "/apps/length",
                    formatter: function (iAppCount) {
                        return (iAppCount !== 0);
                    }
                }
            }).addStyleClass("sapUshellHistoryScreenRecentApps");

            // recent searches
            oSearchItemTemplate = new sap.m.StandardListItem({
                title: {
                    parts: ["sTerm", "oDataSource/label", "oDataSource/objectName/value"],
                    formatter: function (sTerm, sCategoryLabel, sObjectNameValue) {
                        if (sObjectNameValue === "$$ALL$$") {
                            return sTerm;
                        }
                        return sTerm + (sCategoryLabel ? ", " + sCategoryLabel : "");
                    }
                },
                type: "Active",
                press: oController.searchAgain
            });
            oSearchItemTemplate.data("sSearchTerm", "{sTerm}");
//            oSearchItemTemplate.data("sObjectNameValue", "{oObjectName/value}");
//            oSearchItemTemplate.data("sObjectNameLabel", "{oObjectName/label}");
            oSearchItemTemplate.data("oDataSource", "{oDataSource}");

            oListSearches = new sap.m.List({
                inset : false,
                showSeparators : sap.m.ListSeparators.Inner,
                visible: {
                    path: "/searches/length",
                    formatter: function (iAppCount) {
                        return (iAppCount !== 0);
                    }
                },
                items : {
                    path: "/searches",
                    template: oSearchItemTemplate
                }
            }).addStyleClass("sapUshellHistoryScreenRecentSearches");

            return new SearchLayout({
                bottomHeader: {
                    parts: ["/searches/length", "i18n>recent_searches"],
                    formatter: function (iSearchCount, sLabel) {
                        return iSearchCount !== 0 ? sLabel : undefined;
                    }
                },
                bottomList: oListSearches,
                topHeader: {
                    parts: ["/apps/length", "i18n>recently_viewed_apps"],
                    formatter: function (iAppCount, sLabel) {
                        return iAppCount !== 0 ? sLabel : undefined;
                    }
                },
                topList: oRecentApps
            });
        },

        getControllerName: function () {
            return "sap.ushell.renderers.fiori2.search.HistoryScreen";
        }
    });
}());
