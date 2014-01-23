// Copyright (c) 2013 SAP AG, All Rights Reserved
/*global jQuery, sap*/

(function () {
    "use strict";
    jQuery.sap.declare("sap.ushell.ui.tile.DynamicTileRenderer");
    jQuery.sap.require("sap.ushell.ui.tile.TileBaseRenderer");
    jQuery.sap.require("sap.ushell.ui.tile.State");
    jQuery.sap.require("sap.ui.core.format.NumberFormat");

    /**
     * @name sap.ushell.ui.tile.DynamicTileRenderer.
     * @static
     * @private
     */
    sap.ushell.ui.tile.DynamicTileRenderer = sap.ui.core.Renderer.extend(sap.ushell.ui.tile.TileBaseRenderer);

    /**
     * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
     * 
     * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
     * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
     */
    sap.ushell.ui.tile.DynamicTileRenderer.renderPart = function (oRm, oControl) {
        // write the HTML into the render manager
        oRm.write("<div");
        oRm.addClass("sapUshellDynamicTile");
        oRm.writeClasses();
        oRm.write(">");

        // dynamic data
        oRm.write("<div");
        oRm.addClass("sapUshellDynamicTileData");
        oRm.addClass((oControl.getNumberState() ? "sapUshellDynamicTileData" + oControl.getNumberState() :
                "sapUshellDynamicTileData" + sap.ushell.ui.tile.State.Neutral));
        oRm.writeClasses();
        oRm.write(">");

        // state arrow
        if (oControl.getStateArrow()) {
            oRm.write("<div");
            oRm.addClass("sapUshellDynamicTileStateArrow");
            oRm.addClass("sapUshellDynamicTileData" + oControl.getStateArrow());
            oRm.writeClasses();
            oRm.write(">");
            oRm.write("</div>");
        }

        // number
        oRm.write('<div');
        oRm.addClass("sapUshellDynamicTileNumber");
        oRm.writeClasses();
        oRm.write('>');
        var oNForm = sap.ui.core.format.NumberFormat.getFloatInstance({maxFractionDigits: oControl.getNumberDigits()}),
            number = oNForm.format(oControl.getNumberValue());
        if (number && number !== "") {
            oRm.writeEscaped(number);
        } else {
            // in case numberValue is a String
            oRm.writeEscaped(oControl.getNumberValue());
        }
        oRm.write('</div>');

        // unit
        oRm.write('<div');
        oRm.addClass("sapUshellDynamicTileNumberFactor");
        oRm.writeClasses();
        oRm.write('>');
        oRm.writeEscaped(oControl.getNumberFactor());
        oRm.write('</div>');

        // end of dynamic data
        oRm.write("</div>");

        // span element
        oRm.write("</div>");
    };


    sap.ushell.ui.tile.DynamicTileRenderer.getInfoPrefix = function (oControl) {
        return oControl.getNumberUnit();
    };
}());
