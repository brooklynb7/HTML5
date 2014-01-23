// Copyright (c) 2013 SAP AG, All Rights Reserved
/*global jQuery, sap*/
/**
 * @class GroupListItem renderer.
 * @static
 * 
 * @private
 */

(function () {
    "use strict";

    jQuery.sap.declare("sap.ushell.ui.launchpad.GroupListItemRenderer");
    jQuery.sap.require("sap.m.ListItemBaseRenderer");

    /**
     * @class GroupListItem renderer.
     * @static
     */
    sap.ushell.ui.launchpad.GroupListItemRenderer = sap.ui.core.Renderer.extend(sap.m.ListItemBaseRenderer);

    sap.ushell.ui.launchpad.GroupListItemRenderer.renderLIAttributes = function(rm, oLI) {
        rm.addClass("sapUshellGroupLI");
        if (oLI.getEditMode()) {
            rm.addClass("sapUshellEditing");
        }
    };

    /**
     * Renders the HTML for the list content part of the given control, using the provided
     * {@link sap.ui.core.RenderManager}.
     * 
     * @param {sap.ui.core.RenderManager}
     *            oRm the RenderManager that can be used for writing to the render
     *            output buffer
     * @param {sap.ui.core.Control}
     *            oLI an object representation of the list item control that should be
     *            rendered
     */
    sap.ushell.ui.launchpad.GroupListItemRenderer.renderLIContent = function (rm, oLI) {
        rm.write("<div");
        rm.addClass("sapMSLIDiv");
        rm.addClass("sapMSLITitleDiv");
        rm.writeClasses();

        if (!oLI.getVisible()) {
            rm.addStyle("display", "none");
            rm.writeStyles();
        }

        rm.write(">");

        // List item text (also written when no title for keeping the space)
        rm.renderControl(oLI.oEditInputField);
        rm.write("<div");
        rm.addClass("sapMSLITitleOnly");
        rm.writeClasses();
        rm.write(">");
        rm.writeEscaped(oLI.getTitle());
        rm.write("</div>");

        rm.write("</div>");
    };
}());
