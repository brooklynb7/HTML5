jQuery.sap.declare("sap.ca.ui.charts.ChartToolBarRenderer");

/**
 * @class ChartToolBar renderer.
 * @static
 */
sap.ca.ui.charts.ChartToolBarRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ca.ui.charts.ChartToolBarRenderer.render = function(oRm, oControl){

    var selectedId = oControl.getSelectedChart();
    var oChart = oControl._findChartById(selectedId);

    // write the HTML into the render manager
    oRm.write("<div");
    oRm.writeControlData(oControl);
    oRm.addClass("sapCaUiChartToolBar");
    oRm.writeClasses();
    oRm.write(">");

        // wrapper
        oRm.write("<div");
        oRm.writeAttributeEscaped("id", oControl.getId() + "-wrapper");
        oRm.addClass("sapCaUiChartToolBarWrapper");

        oRm.writeClasses();
        oRm.write(">");

            //toolbar
            oRm.renderControl(oControl._oToolBar);

            // chart part
            oRm.write("<div");
            oRm.addClass("sapCaUiChartToolBarChartArea");
            oRm.writeClasses();
            oRm.write(">");

                oRm.renderControl(oChart);

            oRm.write("</div>");// end chartArea
        oRm.write("</div>");    // end wrapper

    oRm.write("</div>");
};
