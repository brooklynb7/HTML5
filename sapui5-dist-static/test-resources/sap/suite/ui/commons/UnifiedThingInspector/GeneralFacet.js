/**
 * Returns number of rows to be taken from the model to display in General teaser tile,
 * depending on device type and number of segments the tile consists of.
 * @param {number=} [iSegments=1]  Number of segments the tile will take vertically in the grid (optional).
 *                  Currently expected values are 1, 2, 3, however any positive number is supported.
 *                  Default value is 1.
 * @return {number} number of rows shown in General teaser tile.
 */

var fnGetGeneralTeaserRowThreshold = function(iSegments) {
    iSegments = iSegments || 1;
    if (isPhone) {
        return (3 * iSegments - 1);
    } else {
        return (6 * iSegments - 3);
    }
};

var oGeneralFacetRow_CustomJB = new sap.m.ColumnListItem({
        cells: [
            new sap.m.Label({
                text: "Responsible:"
            }),
            new sap.m.Link({
                text: "John Bradford",
                press: function(oe) {
                    sap.m.MessageToast.show("John Bradford's custom template.");
					return false;
                }
            })
        ]
});

var oGeneralFacetData = {
    items: [
        { label: "Locked for", text: "Actual Primary Costs" },
        {                      text: "Actual Secondary Costs" },
        { label: "Valid From", text: "01.01.2010" },
        {   type: "separator" },
        { label: "Valid To",   text: "Partially Invoiced" },
        { label: "Created on", text: "01.01.2010" },
        { label: "Created by", text: "John Smith", type: "link", href: "http://www.sap.com" },
        {   type: "separator" },
        {
            type: "custom",
            row: oGeneralFacetRow_CustomJB
        },
        { label: "Profit Center",       text: "Sales" },
        { label: "Company",             text: "Consultant AG UK" },
        { label: "Controlling Area",    text: "Consult AG" },
        { label: "Group In",            text: "0010 Marketing" },
        { label: "Standard Hierarchy" },
        {   type: "separator" },
        { label: "Sales & Marketing",               type: "heading"},
        { label: "Cost Center Type",    text: "Sales & Marketing" },
        { label: "Cost Center Type",    text: "Event Marketing" }
    ]
};

var oGeneralTeaserData = {
    items: oGeneralFacetData.items.slice(0, fnGetGeneralTeaserRowThreshold(iSegmentsInGeneralTeaser))
};

var oGeneralTableTemplate_Separator = new sap.m.ColumnListItem({
    cells: [new sap.m.Text(), new sap.m.Text()]
});

var oGeneralTableTemplate_Text = new sap.m.ColumnListItem({
    cells: [
        new sap.m.Label({
            text: {
                path: "label",
                formatter: function(v) {
                    return v ? v+":" : "";
                }
            }
        }),

        new sap.m.Text({
            text: "{text}"
        })
    ]
});

var oGeneralTableTemplate_Heading = new sap.m.ColumnListItem({
    cells: [
        new sap.m.VBox({
        	items: [
				new sap.m.Label({
				    text: {
				        path: "label",
				        formatter: function(v) {
				            return v || "";
				        }
				    },
				    design: sap.m.LabelDesign.Bold
				}).addStyleClass("sapSuiteUtiHeaderLabel")
        	]
        }).addStyleClass("sapSuiteUtiTabHeader"),
        new sap.m.Text()
    ]
});

var oGeneralTableTemplate_Link = new sap.m.ColumnListItem({
    cells: [
        new sap.m.Label({
            text: {
                path: "label",
                formatter: function(v) {
                    return v ? v+":" : "";
                }
            }
        }),
        new sap.m.Link({
            text: "{text}",
            href: "{href}",
            target: "_blank",
            press: function(oe) {
                return false;
            }
        })
    ]
});

var fnGeneralTableItemFactory = function(sId, oContext) {
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
            rowTemplate = oGeneralTableTemplate_Link;
            break;
        default:
            rowTemplate = oGeneralTableTemplate_Text;
    }
    return rowTemplate.clone();
};

var oGeneralTeaserContent = new sap.m.Table({
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
}).addDelegate({onAfterRendering : function() {
	jQuery(".sapSuiteUtiHeaderLabel").css("max-width", 100 / 42 * 100 + "%");
	jQuery(".sapSuiteUtiTabHeader").parent().css("overflow", "visible");
}});

oGeneralTeaserContent.setModel(new sap.ui.model.json.JSONModel(oGeneralTeaserData));
oGeneralTeaserContent.addStyleClass("sapSuiteUtiGeneral");
oGeneralTeaserContent.addStyleClass("sapSuiteUtiGeneralInTeaser");


var oGeneralFacetContent = new sap.m.Table({
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
}).addDelegate({onAfterRendering : function() {
	jQuery(".sapSuiteUtiHeaderLabel").css("max-width", 100 / 42 * 100 + "%");
	jQuery(".sapSuiteUtiTabHeader").parent().css("overflow", "visible");
}});

oGeneralFacetContent.setModel(new sap.ui.model.json.JSONModel(oGeneralFacetData));
oGeneralFacetContent.addStyleClass("sapSuiteUtiGeneral");
oGeneralFacetContent.addStyleClass("sapSuiteUtiGeneralOnPage");

var oGeneralFacetGroup = new sap.suite.ui.commons.UnifiedThingGroup("general", {
    title : "General",
    description : "4711, Marketing",
    content : oGeneralFacetContent
});

var oGeneralFacet = new sap.suite.ui.commons.FacetOverview("facet-general", {
    title: "General",
    content: oGeneralTeaserContent,
    height: fnGetTeaserTileHeight(iSegmentsInGeneralTeaser),
    rowSpan: 2,
    press: function() {
        setFacetContent("overview");
    }
});