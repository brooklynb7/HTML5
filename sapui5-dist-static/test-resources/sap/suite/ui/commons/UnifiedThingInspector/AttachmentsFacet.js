jQuery.sap.require("sap.ui.core.format.DateFormat");
var oLocale = sap.ui.getCore().getConfiguration().getLocale();
var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({style: "short"}, oLocale);
var oListAttachments = new sap.m.List({
	items : [
		new sap.m.StandardListItem({
			title : "fioriBon.pdf, 40KB",
			iconInset : false,
			icon : "sap-icon://pdf-attachment",
			info : oDateFormat.format(new Date()),
			type : sap.m.ListType.Active,
			press : function(oEvent) {

				if(jQuery.device.is.tablet || jQuery.device.is.iphone || jQuery.device.is.phone) {
					window.open("images/fioriBon.pdf", 'Download');
					oEvent.preventDefault();
					return;
				}
				
				var html1 = new sap.ui.core.HTML({
					content:
						"<object type='application/pdf' style='width:100%; height:100%; position: absolute;' data='images/fioriBon.pdf?#scrollbar=1&toolbar=1&navpanes=1'>" +
						"</object>",
					preferDOM : false
				});

	        	var oPage = new sap.m.Page({
	        		title : "fioriBon.pdf",
	        		showNavButton : true,
	        		content : [
						html1
	        		]
	        	});
	        	oUTI.navigateToPage(oPage, true);
	        	
			}
		}),
		new sap.m.StandardListItem({
			title : "SalesReport.xlsx, 168KB",
			iconInset : false,
			icon : "sap-icon://excel-attachment",
			info : oDateFormat.format(new Date()),
			type : sap.m.ListType.Active,
			press : function(oEvent) {
				    window.open("images/salesReport.xlsx", 'Download');
					oEvent.preventDefault();
			}
		}),
	    new sap.m.StandardListItem({
			title : "SalesReport.doc, 16KB",
			iconInset : false,
			icon : "sap-icon://doc-attachment",
			info : oDateFormat.format(new Date()),
			type : sap.m.ListType.Active,
			press : function(oEvent) {
				window.open("images/Document.docx", 'Download');
					oEvent.preventDefault();
			}
		}),
	    new sap.m.StandardListItem({
			title : "grass.jpg, 35KB",
			iconInset : false,
			icon : "sap-icon://attachment-photo",
			info : oDateFormat.format(new Date()),
			type : sap.m.ListType.Active,
			press : function(oEvent) {
                var panel1 = new sap.m.Panel({
                    headerText: "Ideal",
                    content: [
                        new sap.m.Image({
                            src: "images/grass.jpg"
                        }),
                        new sap.m.Text({
                          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt"
                        })
                    ]
					});

	        	var oPage = new sap.m.Page({
	        		title : "Ideal",
	        		showNavButton : true,
	        		content : [
						panel1
	        		]
	        	});
	        	oUTI.navigateToPage(oPage, false);
			}
		})
	]
});

oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({style: "short"}, oLocale);
oDateFormat.format(new Date());

var oAttachmentContentFacet = new sap.ui.layout.Grid("attachment-grid", {
	defaultSpan: "L6 M6 S12"
}).addStyleClass("sapUtiFacetOverviewContentMargin");

var genHBox = new sap.m.VBox({
    items: [
        new sap.m.Label({text:"fioriBon.pdf"}),
        new sap.m.Text({text:oDateFormat.format(new Date())})
    ]
});
oAttachmentContentFacet.addContent(genHBox);

if (!jQuery.device.is.iphone || !isPhone) {
    genHBox = new sap.m.VBox({
        items: [
            new sap.m.Label({text:"SalesOrder.xlsx"}),
            new sap.m.Text({text:oDateFormat.format(new Date())})
        ]
    });
    oAttachmentContentFacet.addContent(genHBox);
   
    genHBox = new sap.m.VBox({
        items: [
            new sap.m.Label({text:"SalesOrder.docx"}),
            new sap.m.Text({text:oDateFormat.format(new Date())})
        ]
    });
    oAttachmentContentFacet.addContent(genHBox);
    
    genHBox = new sap.m.VBox({
        items: [
            new sap.m.Label({text:"grass.jpg"}),
            new sap.m.Text({text:oDateFormat.format(new Date())})
        ]
    });
     oAttachmentContentFacet.addContent(genHBox);
}

var oAttachmentsContent = new sap.suite.ui.commons.UnifiedThingGroup("attacments", {
    title: "Attachments",
    description: "4711, Marketing",
    content: oListAttachments,
    design: sap.suite.ui.commons.ThingGroupDesign.TopIndent
});

var oAttachmentsFacet = new sap.suite.ui.commons.FacetOverview("facet-attachments-types", {
    title: "Attachments",
    quantity: 5,
    height: fnGetTeaserTileHeight(),
    content : oAttachmentContentFacet,
    press: function() {
    	setFacetContent("attachments");
    }
});