jQuery.sap.declare("sap.ca.ui.OverviewTileRenderer");
jQuery.sap.require("sap.m.TileRenderer");

/**
 * @class OverviewTile renderer. 
 * @static
 */
sap.ca.ui.OverviewTileRenderer = sap.ui.core.Renderer.extend(sap.m.TileRenderer);


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */

sap.ca.ui.OverviewTileRenderer.render =function(oRm, oControl){ 
	if(!oControl.getVisible()){
		return;
	}
    oRm.write("<div");
	oRm.writeControlData(oControl);
	var width = oControl.getWidth();
	if (width) {
		oRm.addStyle("width", width);
	}
	oRm.writeStyles();
	oRm.addClass("sapCaUiOverviewTile");
    oRm.addClass("sapMPointer");
	oRm.writeClasses();
    oRm.write(">"); // first level div

    	// Header
    	oRm.write("<div");
	    oRm.writeAttributeEscaped("id", oControl.getId() + "-header");
		oRm.addClass("sapCaUiOverviewTileHeader");
	    oRm.writeClasses();
	    oRm.write(">");
	    
	    	// Image
	    	oRm.write("<div");
		    oRm.writeAttributeEscaped("id", oControl.getId() + "-image");
		    oRm.addClass("sapCaUiOTImageDiv");
		    oRm.writeClasses();
		    oRm.write(">");
		    	oRm.renderControl(oControl._getImageCtrl());
			oRm.write("</div>");

	    	// TitleContent
	    	oRm.write("<div");
		    oRm.writeAttributeEscaped("id", oControl.getId() + "-titleContent");
		    oRm.addClass("sapCaUiOTTitleContentDiv");
		    oRm.writeClasses();
		    oRm.write(">");
	
		    	// Title
		    	oRm.write("<div");
			    oRm.writeAttributeEscaped("id", oControl.getId() + "-title");
			    //oRm.addClass("sapCaUiOverviewTileTitle");
			    oRm.writeClasses();
			    oRm.write(">");
			    	oRm.renderControl(oControl._getTitleCtrl());		
				oRm.write("</div>");

                // Address
                oRm.write("<div");
                oRm.writeAttributeEscaped("id", oControl.getId() + "-address");
                oRm.addClass("sapCaUiOTTitleAddressDiv");
                oRm.writeClasses();
                oRm.write(">");
                oRm.renderControl(oControl._getAddressCtrl());
                oRm.write("</div>");


                // Contact
		    	oRm.write("<div");
			    oRm.writeAttributeEscaped("id", oControl.getId() + "-contact");
			    oRm.addClass("sapCaUiOTTitleContactDiv");
			    oRm.writeClasses();
			    oRm.write(">");
			    	oRm.renderControl(oControl._getContactCtrl());		
				oRm.write("</div>");

			oRm.write("</div>");

		oRm.write("</div>");
	    
    	// Content
    	oRm.write("<div");
	    oRm.writeAttributeEscaped("id", oControl.getId() + "-content");
	    oRm.addClass("sapCaUiOverviewTileContent");
	    oRm.writeClasses();
	    oRm.write(">");

	    	// OppLine
	    	this.renderFormLine(oRm, oControl, "-oppLine",
	    			oControl._getOppLabelCtrl(), oControl._getOppCtrl());
	
	    	// RevenueLine
	    	this.renderFormLine(oRm, oControl, "-revenueLine",
	    			oControl._getRevenueLabelCtrl(), oControl._getRevenueCtrl());
	
	    	// RatingLine
	    	this.renderFormLine(oRm, oControl, "-ratingLine",
	    			oControl._getRatingLabelCtrl(), oControl._getRatingCtrl());
	
	    	// LastCtxLine
	    	this.renderFormLine(oRm, oControl, "-lastCtxLine",
	    			oControl._getLastCtxLabelCtrl(), oControl._getLastCtxCtrl());
	
	    	// NextCtxLine
	    	this.renderFormLine(oRm, oControl, "-nextCtxLine",
	    			oControl._getNextCtxLabelCtrl(), oControl._getNextCtxCtrl());
	
		oRm.write("</div>");
	    
	oRm.write("</div>");


};

sap.ca.ui.OverviewTileRenderer.renderFormLine = function(oRm, oControl, sIdSuffix, oLabel, oText){ 
	oRm.write("<div");
	oRm.writeAttributeEscaped("id", oControl.getId() + sIdSuffix);
	oRm.addClass("sapCaUiOTFormLine");
	oRm.writeClasses();
	oRm.write(">");

		// Need to invert the text and label because of the float
	    oRm.renderControl(oText);		
	    oRm.renderControl(oLabel);		
	
	oRm.write("</div>");
};

