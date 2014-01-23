/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.suite.ui.commons.FacetOverviewRenderer");

/**
 * @class FacetOverview renderer.
 * @static
 */
sap.suite.ui.commons.FacetOverviewRenderer = {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.FacetOverviewRenderer.render = function(oRm, oControl) { 
    oRm.write("<div");
    oRm.writeControlData(oControl);
    if (oControl.hasListeners("press")) {
    	oRm.writeAttribute("tabindex", "0");
    	oRm.addClass("sapSuiteFovClickable");
    }
    oRm.addClass("sapSuiteFov");
    oRm.writeClasses();
    oRm.addStyle("width", oControl.getWidth());
    oRm.addStyle("height", oControl.getHeight());
    oRm.writeStyles();
    oRm.write(">");
        oRm.write("<div");
        oRm.writeAttribute("id", oControl.getId() + "-title");
        oRm.addClass("sapSuiteFovTitle");
        oRm.writeClasses();
        oRm.write(">");
	        oRm.write("<div");
	        oRm.writeAttribute("id", oControl.getId() + "-title-text");
	        oRm.addClass("sapSuiteFovTitleText");
	        oRm.writeClasses();
	        oRm.write(">");
            	oRm.writeEscaped(oControl.getTitle());
            oRm.write("</div>");

            if (oControl.getQuantity() >= 0) {
                oRm.write("<div");
                oRm.writeAttribute("id", oControl.getId() + "-qty");
                oRm.addClass("sapSuiteFovQty");
                oRm.writeClasses();
                oRm.write(">");
                    oRm.writeEscaped("(" + oControl.getQuantity() + ")");
                oRm.write("</div>");
            }
                        
            if (oControl._oHoverIcon) {
	            oRm.write("<div");
	            oRm.writeAttribute("id", oControl.getId() + "-hover-icon");
	            oRm.addClass("sapSuiteFovHoverIcon");
	            oRm.writeClasses();
	            oRm.write(">");
	            	oRm.renderControl(oControl._oHoverIcon);
	            oRm.write("</div>");
	        }
        oRm.write("</div>");

        oRm.write("<div");
        oRm.writeAttribute("id", oControl.getId() + "-content");
        oRm.addClass("sapSuiteFovContent");
        oRm.writeClasses();
        oRm.write(">");
			oRm.renderControl(oControl.getContent() ? oControl.getContent() : oControl._oNoDataLabel);
        oRm.write("</div>");

    oRm.write("</div>");
};
