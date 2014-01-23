// Copyright (c) 2013 SAP AG, All Rights Reserved
/*global jQuery, sap*/

(function () {
    "use strict";
    jQuery.sap.declare("sap.ushell.ui.launchpad.TileRenderer");

    /**
     * @class Tile renderer.
     * @static
     *
     * @private
     */
    sap.ushell.ui.launchpad.TileRenderer = {};

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
    sap.ushell.ui.launchpad.TileRenderer.render = function (oRm, oControl) {
        var oTileView = null;

        try {
            oTileView = oControl.getTileViews()[0];
        } catch (ex) {
            jQuery.sap.log.warning("Failed to load tile view: ", ex.message);
            oTileView = new sap.m.Text({ text: "Failed to load. "});
        }

        oRm.write("<div");
        oRm.writeControlData(oControl);
        oRm.addClass("sapUshellTile");
        if (oControl.getFootItems() && oControl.getFootItems().length > 0) {
            oRm.addClass("sapUshellTileFooter");
        }
        if (oControl.getLong()) {
            oRm.addClass("sapUshellLong");
        }
        if (!oControl.getVisible()) {
            oRm.addClass("sapUshellHidden");
        }
        oRm.writeClasses();
        oRm.write(">");

        // Tile Content
        oRm.addClass("sapUshellTileInner");
        if (this.renderTileView) {
            this.renderTileView(oRm, oTileView, oControl.getTarget());
        }

        // Tile Footer Items
        oRm.write("<footer");
        oRm.addClass("sapUshellTileFooterElement");
        oRm.writeClasses();
        oRm.write(">");
        jQuery.each(oControl.getFootItems(), function () {
            oRm.renderControl(this);
        });
        oRm.write("</footer>");

        oRm.write("</div>");
    };

    sap.ushell.ui.launchpad.TileRenderer.renderTileView = function (oRm, oTileView, sTarget) {
        if ((sTarget || "") !== "") {
            oRm.write("<a");
            oRm.writeClasses();
            oRm.writeAttributeEscaped("href", "#" + sTarget);
            oRm.write(">");
            oRm.renderControl(oTileView);
            oRm.write("</a>");
        } else {
            oRm.write("<div");
            oRm.writeClasses();
            oRm.write(">");
            oRm.renderControl(oTileView);
            oRm.write("</div>");
        }
    };

}());
