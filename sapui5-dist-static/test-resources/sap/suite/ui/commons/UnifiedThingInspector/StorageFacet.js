var oStorageLocationTemplate  = new sap.m.ColumnListItem({
    cells : [
		new sap.m.Text({text : "{country}"}),
        new sap.m.Text({text : "{plant}"}),
        new sap.m.Text({text : "{location}"}),
        new sap.m.Text({text : "{available}"})
    ]
});

var oStorageLocationsList = new sap.m.List({
    columns : [
        new sap.m.Column({
        	header : new sap.m.Text({text : "Country"})
    }), new sap.m.Column({
        	header : new sap.m.Text({text : "Plant"})
    }), new sap.m.Column({
    		width: "40%",
        	header : new sap.m.Text({text : "Storage Location"}),
            minScreenWidth : "Tablet",
            demandPopin : true
    }), new sap.m.Column({
    		hAlign : "Center",
    		width: "15%",
        	header : new sap.m.Text({text : "Available Stock"}),
            minScreenWidth : "Tablet",
            demandPopin : true
    })],
    items : {
        path : "/content",
        template : oStorageLocationTemplate
    }
});

var oStorageLocationsData = {
    content : [{
    	country: "Germany",
    	plant: "DC Germany South",
    	location: "Loc1 Mills Rd",
    	available: "200"
    }, {
    	country: "Germany",
    	plant: "DC Germany South",
    	location: "Loc2 Lee Avenue",
    	available: "40"
    }, {
    	country: "Germany",
    	plant: "Store Munich",
    	location: "South Castle Peak Rd",
    	available: "20"
    }]
};

var oStorageLocationsModel = new sap.ui.model.json.JSONModel();
oStorageLocationsModel.setData(oStorageLocationsData);
oStorageLocationsList.setModel(oStorageLocationsModel);

var oStorageLocationsContent = new sap.suite.ui.commons.UnifiedThingGroup("storage-location", {
    title: "Storage Location",
    description : "4711, Marketing",
    content: oStorageLocationsList,
    design: sap.suite.ui.commons.ThingGroupDesign.TopIndent
});

var oStorageFacetData = {
    items: [
        { type: "link", href: "http://sap.com", label: "Storage Location 001", text: "DC Germany South" },
        { type: "link", href: "http://sap.com", label: "Storage Location 002", text: "DC Germany South" }
    ]
};

var oStorageTableTemplate_Link = new sap.m.ColumnListItem({
    cells: [
        new sap.m.Link({
            text: {
                path: "text",
                formatter: function(v) {
                    var concatString = isPhone ? ":" : " -";
                    return v ? v + concatString : "";
                }
            },
            href: "{href}",
            target: "_blank",
            press: function(oe) {
                return false;
            }
        }),
        new sap.m.Label({
            text: {
                path: "label"
            }
        })
    ]
});

var fnStorageTableItemFactory = function(sId, oContext) {
    var type = oContext.getProperty("type");
    var rowTemplate;
    switch (type) {
        case "custom":
            rowTemplate = oContext.getProperty("row") || oGeneralTableTemplate_Text;
            break;
        case "separator":
            rowTemplate = oGeneralTableTemplate_Separator;
            break;
        case "heading":
            rowTemplate = oGeneralTableTemplate_Heading;
            break;
        case "link":
            rowTemplate = oStorageTableTemplate_Link;
            break;
        default:
            rowTemplate = oGeneralTableTemplate_Text;
    }
    return rowTemplate.clone();
};

var oStorageContentTable = new sap.m.Table({
    backgroundDesign: sap.m.BackgroundDesign.Transparent,
    showSeparators: sap.m.ListSeparators.None,
    columns: [
        new sap.m.Column({
            width: isPhone ? "60%" : "40%",
            hAlign: sap.ui.core.TextAlign.End
        }),
        new sap.m.Column({
        })
    ],
    items: 
    {
        path: "/items",
        factory: fnStorageTableItemFactory
    }
});

oStorageContentTable.setModel(new sap.ui.model.json.JSONModel(oStorageFacetData));

var oStorageFacet = new sap.suite.ui.commons.FacetOverview("facet-storage-location", {
    title : "Storage Location View",
    quantity : 3,
    content : oStorageContentTable,
    height : fnGetTeaserTileHeight(),
    press : function() {
        setFacetContent("storageLocation");
    }
});
