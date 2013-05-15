/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.RichTooltip
jQuery.sap.declare("sap.ui.commons.RichTooltipRenderer");
jQuery.sap.require("sap.ui.core.ValueStateSupport");

/**
 * @class RichToltip renderer.
 * @static
 */
sap.ui.commons.RichTooltipRenderer = {};

/**
 * Renders the HTML for the RichTooltip, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager The RenderManager that can be used for writing to the render output buffer.
 * @param {sap.ui.core.Control} oControl An object representation of the control that should be rendered.
 */
sap.ui.commons.RichTooltipRenderer.render = function(oRenderManager, oRichTooltip){
	var rm = oRenderManager;

	// Read title parameter and add it to the HTML
	var sText = oRichTooltip.getText();

	// Header
	rm.write("<div ");
	rm.writeControlData(oRichTooltip);
	rm.addClass("sapUiRtt");
	rm.writeClasses();
	rm.write(" ><div><div>");
	rm.write("<div class='sapUiRttTopL'></div><div class='sapUiRttTopR'></div>");
	rm.write("<div class='sapUiRttCL'>");
	rm.write("<div class='sapUiRttCR'>");
	rm.write("<div class='sapUiRttContent'");

	var sImage = oRichTooltip.getImageSrc();
	// min width is bigger if there is an image additionally to the text
	if (sImage && sText){
	    rm.write(" style=\"min-width:355px \"" );
	}
	rm.write(" >");


	// Content
	var sTitle = oRichTooltip.getTitle();
	if (sTitle) {
		rm.write("<div id='" + oRichTooltip.getId() +"-title' role='tooltip' class='sapUiRttTitle'>");
		rm.writeEscaped(sTitle);
		rm.write("</div>");
		rm.write("<div class='sapUiRttSep'></div>");
	}

	if (sImage){
		rm.write("<img class='sapUiRttImage' src='");
		rm.writeEscaped(sImage);
		rm.write("'/>");
	}
	rm.write("<div id='" + oRichTooltip.getId() +"-txt' role='tooltip' class='sapUiRttText'>");

	rm.writeEscaped(sText, true);

	var valueStateText = sap.ui.core.ValueStateSupport.getAdditionalText(oRichTooltip.getParent());
	if (valueStateText) {
		rm.write("<br> <br>");
		rm.writeEscaped(valueStateText);
	}
	rm.write("</div>");


	// Footer
	rm.write("</div></div></div>");
	// rm.write("<div class='sapUiRttCR'></div>");
	rm.write("<div class='sapUiRttBotL'></div>");
	rm.write("<div class='sapUiRttBotR'></div>");
	rm.write("</div></div></div>");
};