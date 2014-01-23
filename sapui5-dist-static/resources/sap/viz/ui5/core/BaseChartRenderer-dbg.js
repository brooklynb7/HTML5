/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.viz.ui5.core.BaseChartRenderer");

/**
 * @class BaseChart renderer.
 * @static
 */
sap.viz.ui5.core.BaseChartRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.viz.ui5.core.BaseChartRenderer.render = function(oRm, oControl){
	
	var bIsEmpty = 	!oControl.getDataset() || !oControl.getDataset().getVIZDataset(),
		oBundle = sap.ui.getCore().getLibraryResourceBundle("sap.viz.ui5.messages"); // TODO relies on undocumented behavior?
	
	// write the HTML into the render manager
	oRm.write("<DIV");
	oRm.writeControlData(oControl);
	if(oControl.getTooltip_AsString()) {
		oRm.writeAttributeEscaped("title", oControl.getTooltip_AsString());
	}
	oRm.addClass("sapVizChart");
	if ( bIsEmpty ) {
		oRm.addClass("sapVizNoData");
	}
	oRm.writeClasses();
	oRm.addStyle("width", oControl.getWidth());
	oRm.addStyle("height", oControl.getHeight());
	oRm.writeStyles();
	oRm.write(">");
	if ( !sap.viz.__svg_support ) {
		oRm.write('<DIV class="sapVizNoDataDefault">');
		oRm.writeEscaped(oBundle.getText("NO_SVG_SUPPORT"));
		oRm.write('</DIV>');
	} else if ( bIsEmpty ) {
		var oNoData = oControl.getNoData();
		if ( oNoData ) {
			oRm.renderControl(oNoData);
		} else {
			oRm.write('<DIV class="sapVizNoDataDefault">');
			oRm.writeEscaped(oBundle.getText("NO_DATA")); 
			oRm.write('</DIV>');
		}
	}
	oRm.write("</DIV>");
};
