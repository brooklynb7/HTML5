// Copyright (c) 2013 SAP AG, All Rights Reserved
/*global jQuery, sap*/

(function () {
    "use strict";

    jQuery.sap.declare("sap.ushell.ui.tile.StaticTileRenderer");
    jQuery.sap.require("sap.ushell.ui.tile.TileBaseRenderer");

    /**
     * @name sap.ushell.ui.tile.StaticTileRenderer 
     * @static
     * @private
     */
    sap.ushell.ui.tile.StaticTileRenderer = sap.ui.core.Renderer.extend(sap.ushell.ui.tile.TileBaseRenderer);

    /**
     * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
     * 
     * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
     * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
     *
     * @private
     */
    sap.ushell.ui.tile.StaticTileRenderer.renderPart = function (oRm, oControl) {
        // write the HTML into the base classes' render manager
        oRm.write("<span");
        oRm.addClass("sapUshellStaticTile");
        oRm.writeClasses();
        oRm.write(">");

        // span element
        oRm.write("</span>");
    };
}());
