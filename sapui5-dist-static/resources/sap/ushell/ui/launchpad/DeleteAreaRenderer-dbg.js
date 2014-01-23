// Copyright (c) 2013 SAP AG, All Rights Reserved
/*global jQuery, sap, $, window*/

(function () {
    "use strict";
    jQuery.sap.declare("sap.ushell.ui.launchpad.DeleteAreaRenderer");

    /**
     * @class DeleteArea renderer.
     * @static
     *
     * @private
     */
    sap.ushell.ui.launchpad.DeleteAreaRenderer = {};

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
    sap.ushell.ui.launchpad.DeleteAreaRenderer.render = function (oRm, oControl) {
        oRm.write("<div");
        oRm.writeControlData(oControl);
        oRm.write(">");

        oRm.write("<div");
        oRm.addClass("sapUshellDeleteArea_visual");
        oRm.addClass("sapUshellDeleteArea_visual_hidden");
        if (oControl.getType() === sap.ushell.ui.launchpad.DeleteAreaType.Dashboard) {
            oRm.addClass("sapUshellDeleteArea_dashboard");
            oRm.addClass("sapUshellDeleteArea_dashboard_visual");
        } else {
            oRm.addClass("sapUshellDeleteArea_grouplist");
            oRm.addClass("sapUshellDeleteArea_grouplist_visual");
        }
        oRm.writeStyles();
        oRm.writeClasses();
        oRm.write(">");
        oRm.write("</div>");

        oRm.write("<div");
        oRm.addClass("sapUshellDeleteArea_functional");
        oRm.addClass("sapUshellDeleteArea_functional_hidden");
        if (oControl.getType() === sap.ushell.ui.launchpad.DeleteAreaType.Dashboard) {
            oRm.addClass("sapUshellDeleteArea_dashboard_functional");
        } else {
            oRm.addClass("sapUshellDeleteArea_grouplist_functional");
        }
        oRm.writeStyles();
        oRm.writeClasses();
        oRm.write(">");
        oRm.write("</div>");
        oRm.write("</div>");
    };
}());
