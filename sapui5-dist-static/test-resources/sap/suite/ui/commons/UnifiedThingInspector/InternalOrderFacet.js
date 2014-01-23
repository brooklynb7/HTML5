var oOrdersData = {
    navigation : [{
        name : "23000",
        description : "CeBit Demo",
        orderType : "040 Event",
        systemStatus : "Planned"
    }, {
        name : "23120",
        description : "Order 2",
        orderType : "040 Event",
        systemStatus : "Released"
    }, {
        name : "23230",
        description : "Order 3",
        orderType : "040 Event",
        systemStatus : "Released"
    }, {
        name : "21000",
        description : "Order 4",
        orderType : "040 Event",
        systemStatus : "Released"
    }]
};	


var oTemplateOrdersData = new sap.m.ColumnListItem({
    type : sap.m.ListType.Navigation,
    press : function(oEvent) {
        var sId = oEvent.getSource().getCells()[0].getText();
        var sDesc = oEvent.getSource().getCells()[1].getText();
        var sOrderType = oEvent.getSource().getCells()[2].getText();
        var sStatus = oEvent.getSource().getCells()[3].getText();
        
        var oDeliveryData = {
            items: [
                { label: "Name", text: "SAP Germany" },
                { label: "Street", text: "Dietmar-Hopp-Allee 16" },
                { label: "City", text: "69190 Walldorf" },
                { label: "Country", text: "Germany" }
            ]
        };

        var oDeliveryTable = new sap.m.Table({
            backgroundDesign: sap.m.BackgroundDesign.Transparent,
            showSeparators: sap.m.ListSeparators.None,
            columns: [
                new sap.m.Column({
                    width: "42%",
                    hAlign: sap.ui.core.TextAlign.End
                }),
                new sap.m.Column({
                })
            ],
            items: {
                path: "/items",
                factory: fnGeneralTableItemFactory
            }
        });
        oDeliveryTable.setModel(new sap.ui.model.json.JSONModel(oDeliveryData));
        oDeliveryTable.addStyleClass("sapSuiteUtiGeneral");
        oDeliveryTable.addStyleClass("sapSuiteUtiGeneralOnPage");

        var oDeliveryUtg = new sap.suite.ui.commons.UnifiedThingGroup({
            content: oDeliveryTable,
            description : "Delivery Address"
        });
        
        
        var oPage = new sap.m.Page({
            title : "Order Detail",
            showNavButton : true,
            content : [
                new sap.m.ObjectHeader({
                    title : sDesc,
                    number : sId,
                    flagged : true,
                    showFlag : true,
                    attributes : [
                        new sap.m.ObjectAttribute({text : sOrderType}),
                        new sap.m.ObjectAttribute({text : sStatus})
                    ]
                }).addStyleClass("sapSuiteUtiOrderDetails"),
                oDeliveryUtg
            ]
        });
        oUTI.navigateToPage(oPage, true);
    },
    unread : false,
    cells : [
        new sap.m.Link({text : "{name}"}),
        new sap.m.Text({text : "{description}"}),
        new sap.m.Text({text : "{orderType}"}),
        new sap.m.Text({text : "{systemStatus}"})
    ]
});

var oListOrdersForm = new sap.m.List("internal-orders-list", {
    threshold: 2,
    inset : false,
    showUnread : true,
    scrollToLoad : true,
    columns : [
        new sap.m.Column({
        hAlign : "Left",
        header : new sap.m.Text({text : "Order Number"}),
        width : "25%"
    }), new sap.m.Column({
        hAlign : "Left",
        header : new sap.m.Text({text : "Description"}),
        minScreenWidth : "Tablet",
        width : "25%",
        demandPopin : true
        }), new sap.m.Column({
            hAlign : "Left",
            width : "25%",
            header : new sap.m.Text({text : "Order Type"}),
            demandPopin : true
        }), new sap.m.Column({
            hAlign : "Left",
            header : new sap.m.Text({text : "System Status"}),
            demandPopin : true
        })],
        items: {
            path : "/navigation",
            template : oTemplateOrdersData
        }
});

var oListOrdersFormGroup = new sap.suite.ui.commons.UnifiedThingGroup("orders", {
    title: "Internal Orders",
    description: isPhone ? "" : "4711, Marketing",
    content: oListOrdersForm,
    design: sap.suite.ui.commons.ThingGroupDesign.TopIndent
});


var oModelOrders = new sap.ui.model.json.JSONModel();
oModelOrders.setData(oOrdersData);
oListOrdersForm.setModel(oModelOrders);

var oOrdersContent = new sap.ui.layout.Grid("form-orders", {
    defaultSpan: "L6 M6 S6",
    content: [
        new sap.m.VBox({
            items: [
                new sap.m.Label({text: "CeBit Demo:"}),
                new sap.m.Text({text: "040 Event"})
            ]
        }),
        new sap.m.VBox({
            items: [
                new sap.m.Label({text: "Order 2:"}),
                new sap.m.Text({text: "040 Event"})
            ]
        }),
        new sap.m.VBox({
            items: [
                new sap.m.Label({text: "Order 3:"}),
                new sap.m.Text({text: "040 Event"})
            ],
            layoutData: new sap.ui.layout.GridData({visibleOnSmall: false})
        }),
        new sap.m.VBox({
            items: [
                new sap.m.Label({text: "Order 4:"}),
                new sap.m.Text({text: "040 Event"})
            ],
            layoutData: new sap.ui.layout.GridData({visibleOnSmall: false})
        })
    ]
}).addStyleClass("sapUtiFacetOverviewContentMargin");

var oOrdersFacet = new sap.suite.ui.commons.FacetOverview("facet-orders", {
    title: "Internal Orders",
    quantity: 3,
    content: oOrdersContent,
    height: fnGetTeaserTileHeight(),
    press: function() {
        setFacetContent("orders");
    }
});
