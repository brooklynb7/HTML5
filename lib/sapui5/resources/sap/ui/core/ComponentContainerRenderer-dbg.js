/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// A renderer for the ComponentContainer control
jQuery.sap.declare("sap.ui.core.ComponentContainerRenderer");

/**
 * @class ComponentContainer renderer.
 * @static
 */
sap.ui.core.ComponentContainerRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl Object representation of the control that should be rendered
 */
sap.ui.core.ComponentContainerRenderer.render = function(oRenderManager, oComponentContainer){

    // convenience variable
	var oRM = oRenderManager;
	var bRTL = sap.ui.getCore().getConfiguration().getRTL();


	oRM.addClass("sapUiComponentContainer");
	oRM.write("<div");
	oRM.writeControlData(oComponentContainer);
	oRM.write(">");
	oRM.write("<div id=\"" + oComponentContainer.getId() + "-uiarea\">");
	//oComponentContainer.getComponentInstance().render(oRM);
	oRM.write("</div></div>");
};

