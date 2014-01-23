var oControllingDocsData = {
    content : [{
    	date: "20.04.2013",
    	document: "47110001",
    	header: "Header Text",
    	amount: "140 USD",
    	amountTC: "110 EUR"
    }, {
    	date: "20.04.2013",
    	document: "47110020",
    	header: "Header Text",
    	amount: "140 USD",
    	amountTC: "110 EUR"
    }, {
    	date: "20.04.2013",
    	document: "47112300",
    	header: "Header Text",
    	amount: "230 USD",
    	amountTC: "190 EUR"
    }, {
    	date: "20.04.2013",
    	document: "47112500",
    	header: "Header Text",
    	amount: "230 USD",
    	amountTC: "190 EUR"
    }, {
    	date: "20.04.2013",
    	document: "47113000",
    	header: "Header Text",
    	amount: "140 USD",
    	amountTC: "110 EUR"
    }, {
    	date: "20.04.2013",
    	document: "47113100",
    	header: "Header Text",
    	amount: "210 USD",
    	amountTC: "170 EUR"
    }, {
    	date: "20.04.2013",
    	document: "47113200",
    	header: "Header Text",
    	amount: "140 USD",
    	amountTC: "110 EUR"
    }]
};

var oControllingDocsTemplate  = new sap.m.ColumnListItem({
    cells : [
		new sap.m.Text({text : "{date}"}),
        new sap.m.Link({text : "{document}"}),
        new sap.m.Text({text : "{header}"}),
        new sap.m.Text({text : "{amount}"}),
        new sap.m.Text({text : "{amountTC}"})
    ]
});

var oControllingDocsList = new sap.m.List({
    columns : [
        new sap.m.Column({
        	header : new sap.m.Text({text : "Posting Date"})
    }), new sap.m.Column({
        	header : new sap.m.Text({text : "Document No"})
    }), new sap.m.Column({
        	header : new sap.m.Text({text : "Header Text"})
    }), new sap.m.Column({
    		width: "25%",
        	header : new sap.m.Text({text : "Amount in Controlling Area Currency"}),
            minScreenWidth : "Tablet",
            demandPopin : true
    }), new sap.m.Column({
    		width: "25%",
        	header : new sap.m.Text({text : "Amount in Transaction Currency"}),
            minScreenWidth : "Tablet",
            demandPopin : true
    })],
    items : {
        path : "/content",
        template : oControllingDocsTemplate
    }
});
    
var oControllingDocsModel = new sap.ui.model.json.JSONModel();
oControllingDocsModel.setData(oControllingDocsData);
oControllingDocsList.setModel(oControllingDocsModel);

var oListControllingDocsGroup = new sap.suite.ui.commons.UnifiedThingGroup("docs", {
	title: "Controlling Documents",
	description: "4711, Marketing",
	content: oControllingDocsList,
    design: sap.suite.ui.commons.ThingGroupDesign.TopIndent
});

var oControllingDocsContent = new sap.ui.layout.Grid("form-docs", {
    defaultSpan: "L6 M6 S6",
    content: [
        new sap.m.VBox({
            items: [
                new sap.m.Label({text: "4711000:"}),
                new sap.m.Text({text: "240 USD"})
            ]
        }),
        new sap.m.VBox({
            items: [
                new sap.m.Label({text: "4711001:"}),
                new sap.m.Text({text: "110 USD"})
            ]
        }),
        new sap.m.VBox({
            items: [
                new sap.m.Label({text: "4711002:"}),
                new sap.m.Text({text: "320 USD"})
            ],
            layoutData: new sap.ui.layout.GridData({visibleOnSmall: false})
        }),
        new sap.m.VBox({
            items: [
                new sap.m.Label({text: "4711003:"}),
                new sap.m.Text({text: "2670 USD"})
            ],
            layoutData: new sap.ui.layout.GridData({visibleOnSmall: false})
        })
    ]
}).addStyleClass("sapUtiFacetOverviewContentMargin");

var oControllingDocsFacet = new sap.suite.ui.commons.FacetOverview("facet-documents", {
    title: "Controlling Documents 00001 - Walldorf, Germany",
    quantity: 99000,
    content: oControllingDocsContent,
    height: fnGetTeaserTileHeight(),
    press: function() {
        setFacetContent("controllingDocs");
    }
});