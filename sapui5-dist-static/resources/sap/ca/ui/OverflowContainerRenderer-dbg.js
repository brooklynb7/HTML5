jQuery.sap.declare("sap.ca.ui.OverflowContainerRenderer");

/**
 * @class OverflowContainer renderer. 
 * @static
 */
sap.ca.ui.OverflowContainerRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ca.ui.OverflowContainerRenderer.render = function(oRm, oControl){ 
	 // write the HTML into the render manager
    var aContents = oControl.getContent();

    oRm.write("<div");
    oRm.writeControlData(oControl);
    oRm.addStyle("height", oControl.getExpanded() ? "auto" : oControl.getOverflowHeight());
    oRm.writeStyles();

    oRm.addClass("sapCaUiOC");
    oRm.writeClasses();
    oRm.write(">"); // first level div

    oRm.write("<div id='"+ oControl.getId() + "-content'");
    oRm.writeClasses();

    oRm.write(">");
    jQuery.each(aContents, function(oItem) {
        oRm.renderControl(aContents[oItem]);
    });
    oRm.write("</div>");

    // write div for overlay + button
    oRm.write("<div");
    oRm.writeAttributeEscaped("id", oControl.getId() + "-overlay");
    oRm.addClass("sapCaUiOCOverlay");
    oRm.writeClasses();
    oRm.write(">");
    oRm.write("</div>");

    // Button
    oRm.renderControl(oControl._getButton());

	oRm.write("</div>");

};
