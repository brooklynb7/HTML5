//Copyright (c) 2013 SAP AG, All Rights Reserved
(function () {
    "use strict";
    /*global jQuery, sap */

    sap.ui.jsview("sap.ushell.renderers.fiori2.search.ResultFilterInfo", {

        createContent: function (controller) {
            return new sap.m.HBox({
                visible: {
                    path: "/currentState/showCurtainPane",
                    formatter: function (bShowCurtainPane) {
                        return !bShowCurtainPane;
                    }
                },
                items: {
                    path: "filter>/filter",
                    factory: function (sId, oContext) {
                        var oFilter = new sap.m.HBox(),
                            aFilter = oContext.getModel().getProperty("/filter");

                        if (aFilter.indexOf(oContext.getObject()) === 0) {
                            oFilter.addItem(new sap.m.Text({
                                text: {path: "i18n>searchedIn"},
                                layoutData: new sap.m.FlexItemData({
                                    alignSelf: sap.m.FlexAlignSelf.Center
                                })
                            }));
                        }

                        return oFilter.addItem(new sap.m.Text({
                            text: {path: "filter>label"},
                            layoutData: new sap.m.FlexItemData({
                                alignSelf: sap.m.FlexAlignSelf.Center
                            })
                        }).addStyleClass("sapSearchResultFilterInfoLabel"));
                    }
                }
            }).addStyleClass("sapSearchResultFilterInfo");
        },

        getControllerName: function () {
            return "sap.ushell.renderers.fiori2.search.ResultFilterInfo";
        }
    });
}());