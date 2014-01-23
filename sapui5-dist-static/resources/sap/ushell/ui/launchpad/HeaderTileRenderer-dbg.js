// Copyright (c) 2013 SAP AG, All Rights Reserved

/**
 * @class HeaderTile renderer.
 * @static
 * 
 * @private
 */
jQuery.sap.declare("sap.ushell.ui.launchpad.HeaderTileRenderer");
sap.ushell.ui.launchpad.HeaderTileRenderer = {};

/**
 * Renders the HTML for the given control, using the provided
 * {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *            oRm the RenderManager that can be used for writing to the render
 *            output buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.ushell.ui.launchpad.HeaderTileRenderer.render = function(oRm, oControl) {
    oRm.write("<");
    oRm.write(oControl.getHeaderLevel().toLowerCase());
    oRm.writeControlData(oControl);
    oRm.addClass("sapUshellHeaderTile");
    if (!oControl.getVisible()) {
        oRm.addClass("sapUshellHidden");
    }
    oRm.writeClasses();
    oRm.write(">");
    oRm.writeEscaped(oControl.getHeaderText());
    oRm.write("</");
    oRm.write(oControl.getHeaderLevel().toLowerCase());
    oRm.write(">");
};
