var oRelatedArticlesTemplate  = new sap.m.ColumnListItem({
    cells : [
                new sap.m.Text({text : "{country}"}),
        new sap.m.Text({text : "{plant}"}),
        new sap.m.Text({text : "{location}"}),
        new sap.m.Text({text : "{available}"})
    ]
});

var oRelatedArticlesList = new sap.m.List({
    columns : [
        new sap.m.Column({
                header : new sap.m.Text({text : "Country"})
    }), new sap.m.Column({
                header : new sap.m.Text({text : "Plant"})
    }), new sap.m.Column({
                width: "40%",
                header : new sap.m.Text({text : "Related Articles"}),
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
        template : oRelatedArticlesTemplate
    }
});

var oRelatedArticlesData = {
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

var oRelatedArticlesModel = new sap.ui.model.json.JSONModel();
oRelatedArticlesModel.setData(oRelatedArticlesData);
oRelatedArticlesList.setModel(oRelatedArticlesModel);

var oRelatedArticlesContent = new sap.suite.ui.commons.UnifiedThingGroup("related-articles", {
    title: "Related Articles",
    description : "4711, Marketing",
    content: oRelatedArticlesList,
    design: sap.suite.ui.commons.ThingGroupDesign.TopIndent
});

var oRelatedArticlesFacetData = {
    items: [
        { type: "link", href: "", label: "Location 001", text: "Fresh Strawberries" }
    ]
};

var oRelatedArticlesTemplate_Link = new sap.m.ColumnListItem({
    cells: [
        new sap.m.Link({
            text: {
                path: "text",
                formatter: function(v) {
                    var concatString = isPhone ? ":" : " -";
                    return v ? v + concatString : "";
                }
            },

            press: function(oe) {
                oUTI2 = new sap.suite.ui.commons.UnifiedThingInspector({
                    id : "unified2",
                    icon: "images/strawberries_frozen.jpg",
                    title : "Article",
                    name : "Fresh Strawberries",
                    description : "{/description}",
                    actionsVisible : true,
                    transactionsVisible : true,
                    kpis : [
                        new sap.suite.ui.commons.KpiTile({
                            value: "28",
                            description: "Employees, 8000",
                            doubleFontSize: true
                        }),
                        new sap.suite.ui.commons.KpiTile({
                            value: "1200h",
                            description: "Production Hours, 0815",
                            doubleFontSize: true
                        })
                    ],
                    facets : [ oGeneralFacet.clone(), oOrdersFacet.clone(), oActivityTypesFacet.clone() ],
                    backAction : function() {
                        oUTI2.destroy();
                        oUTI._navigateToMaster();
                        return false;
                    },
                    transactions : {
                        path:"/transactions", 
                        template : oLinkTempl
                    },
                    actions : {
                        path: "/actions",
                        template : oButtonTempl
                    }
                });
                var oUTI2Page = new sap.m.Page({
                    showHeader: false,
                    showFooter: false,
                    enableScrolling: false,
                    content:[ oUTI2 ]});
                
                oUTI.navigateToPage(oUTI2Page, true);
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

var fnArticlesTableItemFactory = function(sId, oContext) {
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
            rowTemplate = oRelatedArticlesTemplate_Link;
            break;
        default:
            rowTemplate = oGeneralTableTemplate_Text;
    }
    return rowTemplate.clone();
};

var oRelatedArticlesContentTable = new sap.m.Table({
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
        factory: fnArticlesTableItemFactory
    }
});

oRelatedArticlesContentTable.setModel(new sap.ui.model.json.JSONModel(oRelatedArticlesFacetData));

var oArticlesFacet = new sap.suite.ui.commons.FacetOverview("facet-articles-location", {
    title : "Related Articles View",
    quantity : 1,
    content : oRelatedArticlesContentTable,
    height : fnGetTeaserTileHeight(),
    press : function() {
        setFacetContent("relatedArticles");
    }
});
