// Copyright (c) 2013 SAP AG, All Rights Reserved
/*global jQuery, sap*/
/**
 * @class DashboardGroupsContainer renderer.
 * @static
 * 
 * @private
 */

(function () {
    "use strict";
    jQuery.sap.declare("sap.ushell.ui.launchpad.DashboardGroupsContainerRenderer");

    sap.ushell.ui.launchpad.DashboardGroupsContainerRenderer = {};

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
    sap.ushell.ui.launchpad.DashboardGroupsContainerRenderer.render = function (oRm, oControl) {
        oRm.write("<div");
        oRm.writeControlData(oControl);
        oRm.addClass("sapUshellDashboardGroupsContainer");
        oRm.writeClasses();
        oRm.write(">");

        var aGroups = oControl.getGroups();

        jQuery.each(aGroups, function () {
            oRm.write("<div");
            oRm.addClass("sapUshellDashboardGroupsContainerItem");
            oRm.writeClasses();
            oRm.write(">");

            oRm.renderControl(this);

            oRm.write("</div>");
        });

        oRm.write("</div>");
    };
}());
