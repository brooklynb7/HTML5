jQuery.sap.declare("sap.ca.ui.charts.ChartRenderer");

/**
 * @class Chart renderer.
 * @static
 */
sap.ca.ui.charts.ChartRenderer = {

    /**
     * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
     *
     * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
     * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
     */
    render: function (oRm, oControl) {
        if (!oControl.getDataset()) {
            return;
        }
        oRm.write("<div");
        oRm.writeControlData(oControl);
        oRm.addClass('sapCaUiChart');
        if (!oControl.getShowHoverBackground()) {
            oRm.addClass('sapCaUiChartNoHover');
        }
        oRm.addStyle("width", oControl.getWidth());
        oRm.addStyle("height", oControl.getHeight());
        oRm.writeClasses();
        oRm.writeStyles();
        oRm.write('>');

        oRm.renderControl(oControl.getAggregation('internalContent'));

//        oRm.write('<div');
//        oRm.addClass('sapCaUiChartRightShadow');
//        oRm.writeClasses();
//        oRm.write('</div>');

        oRm.write('</div>');
    }
};
