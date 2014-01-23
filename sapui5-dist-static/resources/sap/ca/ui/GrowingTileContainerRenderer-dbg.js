/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.ScrollContainerRenderer");
jQuery.sap.require("sap.ui.layout.GridRenderer");
jQuery.sap.declare("sap.ca.ui.GrowingTileContainerRenderer");

/**
 * @class GrowingTileContainer renderer. 
 * @static
 */
sap.ca.ui.GrowingTileContainerRenderer = sap.ui.core.Renderer.extend(sap.m.ScrollContainerRenderer);


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ca.ui.GrowingTileContainerRenderer.render = function(oRm, oControl){ 
	var that = this;
	// call base renderer to do real rendering
	//sap.m.ScrollContainerRenderer.render.call(that, oRm, oControl);
	
	// return immediately if control is invisible
	if (!oControl.getVisible()) {
		return;
	}

	oRm.write("<div");
	oRm.writeControlData(oControl);

	var width = oControl.getWidth(),
	height = oControl.getHeight();
	if (width) {
		oRm.addStyle("width", width);
	}
	if (height) {
		oRm.addStyle("height", height);
	}
	oRm.writeStyles();
	oRm.addClass("sapCaUiGTCBScroll");

	if (oControl.getVertical()) {
		if (!oControl.getHorizontal()) {
			oRm.addClass("sapMScrollContV");
		} else {
			oRm.addClass("sapMScrollContVH");
		}
	} else if (oControl.getHorizontal()) {
		oRm.addClass("sapMScrollContH");
	}

	oRm.addClass("sapMScrollCont");
	oRm.writeClasses();
	
	var sTooltip = oControl.getTooltip_AsString();
	if (sTooltip) {
		oRm.writeAttributeEscaped("title", sTooltip);
	}
	
	oRm.write("><div id='" + oControl.getId() + "-scroll' class='sapMScrollContScroll'>");
	
	// render child controls
	var aContent = oControl.getContent(), 
	l = aContent.length;
	var oLayoutGrid = oControl._getGridLayout();
	for (var i = 0; i < l; i++) {
		oLayoutGrid.addContent(aContent[i]);
		//oRm.renderControl(aContent[i]);
	}
	
	//sap.ui.layout.GridRenderer.render.call(that, oRm, oLayoutGrid);
	oRm.renderControl(oLayoutGrid);

	oRm.write("</div></div>");
};
