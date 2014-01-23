/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.suite.ui.commons.KpiTileRenderer");

/**
 * @class KpiTile renderer.
 * @static
 */
sap.suite.ui.commons.KpiTileRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.KpiTileRenderer.render = function(oRm, oControl) {
    oRm.write("<div");
    oRm.writeControlData(oControl);
    oRm.addClass("sapSuiteKTile");
    oRm.writeClasses();
    oRm.write(">");

        oRm.write("<div");
        oRm.addClass("sapSuiteKTileValue");
        oRm.addClass("sapSuiteKTileStatus" + oControl.getValueStatus());
        if (oControl.getDoubleFontSize()) {
            oRm.addClass("sapSuiteKTileValueLargeText");
        } else {
            oRm.addClass("sapSuiteKTileValueSmallText");
        }
        oRm.writeClasses();
        oRm.write(">");
            oRm.writeEscaped(oControl.getValue());

        if (oControl.getValueScale()) {
            oRm.write("<span");
            oRm.addClass("sapSuiteKTileScale");
            oRm.writeClasses();
            oRm.write(">");
                oRm.writeEscaped(oControl.getValueScale());
            oRm.write("</span>");
        }
        oRm.write("</div>");

        oRm.write("<div");
        oRm.addClass("sapSuiteKTileDesc");
        oRm.writeClasses();
        oRm.writeAttributeEscaped("title", oControl.getDescription());
        oRm.write(">");
            if (oControl.getValueUnit()) {
                oRm.writeEscaped(oControl.getValueUnit()).write(", ");
            }
            oRm.writeEscaped(oControl.getDescription());
        oRm.write("</div>");
    oRm.write("</div>");
};
