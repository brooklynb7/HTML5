/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.Carousel
jQuery.sap.declare("sap.ui.commons.CarouselRenderer");

/**
 * @class carousel renderer.
 * @static
 */
sap.ui.commons.CarouselRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.commons.CarouselRenderer.render = function(oRenderManager, oControl) {

	var rm = oRenderManager;

	rm.write("<div");
	rm.addClass("sapUiCrsl");
	if (oControl.getWidth() != "") {
		rm.addStyle("width", oControl.getWidth());
	}
	if (oControl.getHeight() != "") {
		rm.addStyle("height", oControl.getHeight());
	}
	rm.writeStyles();
	rm.writeClasses();
	rm.writeControlData(oControl);
	rm.write(">");
	
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");

	// Start Prev button
	rm.write("<div");
	rm.writeAttribute("id", oControl.getId() + "-prevbutton");
	rm.writeAttribute("title", rb.getText("CAROUSEL_SHOW_PREV"));
	rm.addClass("sapUiCrslPrevBtn");
	rm.writeClasses();
	rm.write(">");
	if (oControl.getOrientation() == "vertical") {
		rm.write("&#9650");//Symbol for Base and HCB Theme (Must be hidden in other themes)
	} else {
		rm.write("&#9668");//Symbol for Base and HCB Theme (Must be hidden in other themes)
	}
	rm.write("</div>");
	// End Prev button

	// Start Next button
	rm.write("<div");
	rm.writeAttribute("id", oControl.getId() + "-nextbutton");
	rm.writeAttribute("title", rb.getText("CAROUSEL_SHOW_NEXT"));
	rm.addClass("sapUiCrslNextBtn");
	rm.writeClasses();
	rm.write(">");
	if (oControl.getOrientation() == "vertical") {
		rm.write("&#9660");//Symbol for Base and HCB Theme (Must be hidden in other themes)
	} else {
		rm.write("&#9658");//Symbol for Base and HCB Theme (Must be hidden in other themes)
	}
	rm.write("</div>");
	// End Next button

	// Start content area
	rm.write("<div");
	rm.writeAttribute("id", oControl.getId() + "-contentarea");
	rm.writeAttribute("tabindex", "0");
	rm.addClass("sapUiCrslCnt");
	rm.writeClasses();
	rm.writeAccessibilityState(oControl, {
		role : 'list',
		orientation : oControl.getOrientation(),
		live : 'assertive',
		disabled : false,
		describedby : oControl.getTooltip_AsString() ? (oControl
				.getAriaDescribedBy().join(" ")) : undefined
	});
	rm.write(">");

	var aContent = oControl.getContent();

	rm.write("<ul");
	rm.writeAttribute("id", oControl.getId() + "-scrolllist");
	rm.addClass("sapUiCrslScl");
	rm.writeClasses();
	rm.write(">");

	for ( var i = 0; i < aContent.length; i++) {
		var oChild = aContent[i];
		rm.write("<li");
		rm.writeAttribute("id",oControl.getId() + "-item-" + oChild.getId());
		rm.addClass("sapUiCrslItm");
		rm.writeClasses();
		rm.write(">");
		rm.renderControl(oChild);
		rm.write("</li>");
	}

	rm.write("</ul>");

	rm.write("</div>");
	// End content area

	rm.write("</div>");
};