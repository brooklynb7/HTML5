// Copyright (c) 2013 SAP AG, All Rights Reserved
/*global jQuery, sap*/

(function () {
    "use strict";
    jQuery.sap.declare("sap.ushell.ui.launchpad.TileContainerRenderer");

    /**
     * @class TileContainer renderer.
     * @static
     * 
     * @private
     */
    sap.ushell.ui.launchpad.TileContainerRenderer = {};

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
    sap.ushell.ui.launchpad.TileContainerRenderer.render = function (oRm, oControl) {
        var aTiles = oControl.getTiles(),
            aFootItems = oControl.getFooterContent() || [],
            bHideTileContainer = (oControl.getDefaultGroup() && aTiles.length === 0) || !oControl.getVisible();
    
        oRm.write("<div");
        oRm.writeControlData(oControl);

        oRm.addClass("sapUshellTileContainer");
        oRm.writeClasses();

        if (bHideTileContainer) {
            oRm.addStyle("display", "none");
            oRm.writeStyles();
        }

        oRm.write(">");

        // PositionAnchor that if we scroll to this container, it will be under
        // UnifiedShell
        oRm.write("<a");
        oRm.addClass("sapUshellContainerPositionAnchor");
        oRm.writeClasses();
        oRm.writeAttribute("name", oControl.getId() + "-position");
        oRm.write("></a>");

        if (oControl.getShowHeader()) {
            // Title
            oRm.write("<");
            oRm.write(oControl.getHeaderLevel().toLowerCase());
            oRm.addClass('sapUshellContainerTitle');
            oRm.writeClasses();
            oRm.write(">");
            oRm.writeEscaped(oControl.getHeaderText());
            oRm.write("</");
            oRm.write(oControl.getHeaderLevel().toLowerCase());
            oRm.write(">");

            // Title END
        }

        oRm.write("<div");
        oRm.addClass('sapUshellTilesContainer-sortable');
        oRm.addClass('sapUshellInner');
        oRm.writeClasses();
        oRm.write(">");

        jQuery.each(aTiles, function () {
            oRm.renderControl(this);
        });

        // If no tiles in group or default group
        if (oControl.getShowPlaceholder() && aTiles.length === 0 && !bHideTileContainer) {
            oRm.renderControl(oControl.oPlusTile);
        }

        oRm.write("</div>");
        // Tiles END

        // Footer
        if (aFootItems.length > 0) {
            oRm.write("<footer");
            oRm.addClass('sapUshellTilesContainerFtr');
            oRm.writeClasses();
            oRm.write(">");
            jQuery.each(aFootItems, function () {
                oRm.renderControl(this);
            });
            oRm.write("</footer>");
        }
        oRm.write("</div>");
    };
}());
