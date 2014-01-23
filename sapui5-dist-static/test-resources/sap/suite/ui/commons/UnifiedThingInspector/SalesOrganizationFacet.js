
var oSalesOrgIcon = new sap.ui.core.Icon({
    src: "sap-icon://globe",
    size: isPhone ? "3rem" : "5.75rem"
}).addStyleClass("sapUtiImagePaddingRight");

var oSalesOrgGrid = new sap.m.VBox("sales-org-grid", {
    items: [
        new sap.m.HBox({
            items: [
                new sap.m.Label({text: "Distribution Channel General Brenenal"}).addStyleClass("sapUtiSalesOrgKeyLabel"),
                new sap.m.Label({text: ":"}).addStyleClass("sapUtiSalesOrgDelimiter"),
                new sap.m.Text({text: "01 - Electronic Sales"}).addStyleClass("sapUtiSalesOrgValueLabel")
            ]
        }),
        new sap.m.HBox({
            items: [
                new sap.m.Label({text: "Division"}).addStyleClass("sapUtiSalesOrgKeyLabel"),
                new sap.m.Label({text: ":"}).addStyleClass("sapUtiSalesOrgDelimiter"),
                new sap.m.Text({text: "01 - Industry"}).addStyleClass("sapUtiSalesOrgValueLabel")
            ]
        }),
        new sap.m.HBox({
            items: [
                new sap.m.Label({text: "Sales Group"}).addStyleClass("sapUtiSalesOrgKeyLabel"),
                new sap.m.Label({text: ":"}).addStyleClass("sapUtiSalesOrgDelimiter"),
                new sap.m.Link({text: "001 Sales Group 01"}).addStyleClass("sapUtiSalesOrgValueLabel")
            ],
            layoutData: new sap.ui.layout.GridData({visibleOnSmall: false})
        })
    ]
}).addStyleClass("sapUtiSalesOrgFacet");

if (sap.ui.getCore().getConfiguration().getRTL()) {
	oSalesOrgIcon.addStyleClass("sapUtiRtl");
	oSalesOrgGrid.addStyleClass("sapUtiRtl");
}

var oSalesOrgFacetContent = new sap.m.FlexBox("sales-org-content", {
    items:[
        oSalesOrgIcon,
        oSalesOrgGrid
    ]
});

var oSalesOrgFacet = new sap.suite.ui.commons.FacetOverview("facet-sales-org", {
	title: "Sales Organization 0001 - Walldorf",
	content: oSalesOrgFacetContent,
	height: fnGetTeaserTileHeight(),
});