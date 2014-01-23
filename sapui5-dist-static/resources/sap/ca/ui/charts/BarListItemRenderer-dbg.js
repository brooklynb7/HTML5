/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.ca.ui.charts.BarListItemRenderer");

jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.ListItemBaseRenderer");

/**
 * @class DisplayListItem renderer.
 * @static
 */
sap.ca.ui.charts.BarListItemRenderer = sap.ui.core.Renderer.extend(sap.m.ListItemBaseRenderer);

/**
 * Renders the HTML for the given control, using the provided
 * {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *          oRenderManager the RenderManager that can be used for writing to the
 *          Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *          oControl an object representation of the control that should be
 *          rendered
 */
sap.ca.ui.charts.BarListItemRenderer.renderLIAttributes = function(rm, oLI) {
	rm.addClass("sapMBLI");
};

sap.ca.ui.charts.BarListItemRenderer.renderLIContent = function(rm, oLI) {

   var isAxis = oLI.getAxis();

   // List item axis
   if (isAxis) {
      rm.write("<p for='" + oLI.getId() + "-axis' class='sapMBLIAxis'>");
      rm.writeEscaped(oLI.getAxis());
      rm.write("</p>");
   }
   
	var isGroup = oLI.getGroup();

	// List item group
	if (isGroup) {
		rm.write("<label for='" + oLI.getId() + "-value' class='sapMBLIGroup'>");
		rm.writeEscaped(oLI.getGroup());
		rm.write("</label>");
	}
	
	var isValue = oLI.getValue();
	
	// List item value
	if (isValue) {
		rm.write("<div id='" + oLI.getId() + "-value' class='sapMBLIValue'>");
		rm.writeEscaped(oLI.getValue());
		rm.write("</div>");
	}
};
