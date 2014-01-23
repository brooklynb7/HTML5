/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.uiext.inbox.InboxRenderer");

/**
 * @class Inbox renderer. 
 * @static
 */
sap.uiext.inbox.InboxRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.uiext.inbox.InboxRenderer.render = function(rm, oControl){ 
	// write the HTML into the render manager
    rm.write("<div");
    rm.writeControlData(oControl);
    rm.writeAttribute("class","sapUiExtInbox"); 
    rm.write(">"); // SPAN element
    rm.renderControl(oControl.vLayout);
    rm.write("</div>");
};
