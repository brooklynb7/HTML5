var oSalesQuotationGrid = new sap.ui.layout.Grid("sales-quotation-grid", {
	defaultSpan: "L6 M12 S12",
    hSpacing: 1,
    vSpacing: 1,
	content: [
		new sap.m.ObjectHeader({
		    title: "40000019",
		    titleActive: true,
		    number: "70,000.00",
		    numberUnit: "EUR",
		    attributes: [ new sap.m.ObjectAttribute({ text: "Quantity Contract" }) ],
		    firstStatus: new sap.m.ObjectStatus({ text: "Being processed"}),
		    secondStatus: new sap.m.ObjectStatus({ text: "01/01/2013 - 05/31/2014"})
		}).addStyleClass("sapSuiteUtiSalesQuotation"),
		new sap.m.ObjectHeader({
	        title: "40000020",
	        titleActive: true,
	        number: "100,000.00",
	        numberUnit: "EUR",
	        attributes: [ new sap.m.ObjectAttribute({ text: "Matl.-rel. Value Cont" }) ],
	        firstStatus: new sap.m.ObjectStatus({ text: "Open"}),
	        secondStatus: new sap.m.ObjectStatus({ text: "01/15/2013 - 02/15/2014"})
	    }).addStyleClass("sapSuiteUtiSalesQuotation")
	]
}).addStyleClass("sapSuiteUtiSalesQuotationGrid");

var oSalesQuotationFormGroup = new sap.suite.ui.commons.UnifiedThingGroup("sales", {
    title: "Sales Quotation",
    description: "27, Standard Order",
    content: oSalesQuotationGrid,
    design: sap.suite.ui.commons.ThingGroupDesign.TopIndent
});

var oSalesFacet = new sap.suite.ui.commons.FacetOverview("facet-sales-view", {
	title : "Sales View",
	quantity : 0,
	height : fnGetTeaserTileHeight()
});