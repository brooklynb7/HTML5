var oActivityTypesContent = new sap.ui.layout.Grid("form-activity-types", {
	defaultSpan: "L6 M6 S6",
	content: [
		new sap.m.VBox({
			items: [
		        new sap.m.Label({text: "Type:"}),
		        new sap.m.Text({text: "588"})
		    ]
		}),
		new sap.m.VBox({
			items: [
		        new sap.m.Label({text: "Type:"}),
		        new sap.m.Text({text: "046"})
		    ]
		}),
		new sap.m.VBox({
			items: [
		        new sap.m.Label({text: "Type:"}),
		        new sap.m.Text({text: "644"})
		    ],
		    layoutData: new sap.ui.layout.GridData({visibleOnSmall: false})
		}),
		new sap.m.VBox({
			items: [
		        new sap.m.Label({text: "Type:"}),
		        new sap.m.Text({text: "048"})
		    ],
		    layoutData: new sap.ui.layout.GridData({visibleOnSmall: false})
		})
	]
}).addStyleClass("sapUtiFacetOverviewContentMargin");

var oActivityTypesFacet = new sap.suite.ui.commons.FacetOverview(
	"facet-activity-types", {
		title : "Activity Types",
		quantity : 8,
		content : oActivityTypesContent,
		height : fnGetTeaserTileHeight(),
		press : function() {
			setFacetContent("quotation");
	}
});