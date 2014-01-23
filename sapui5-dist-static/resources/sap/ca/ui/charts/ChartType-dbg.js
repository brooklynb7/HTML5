jQuery.sap.declare("sap.ca.ui.charts.ChartType");
jQuery.sap.require("sap.ca.ui.utils.resourcebundle");

/**
 * @class Types of chart supported in the sap.ca library.
 *
 * @version 1.16.4-SNAPSHOT
 * @static
 * @public
 */
sap.ca.ui.charts.ChartType = {

    /**
     * A Bar Chart using "viz/bar" chart
     * @public
     */
    Bar: "Bar",

    /**
     * A Stacked Bar Chart using "viz/stacked_bar" chart
     * @public
     */
    StackedBar: "StackedBar",

    /**
     * A 100% Stacked Bar Chart using "viz/100_stacked_bar" chart
     * @public
     */
    StackedBar100: "StackedBar100",

    /**
     * A Dual Stacked Bar Chart using "viz/dual_stacked_bar" chart
     * @public
     */
    DualStackedBar: "DualStackedBar",

    /**
     * A 100% Dual Stacked Bar Chart using "viz/100_dual_stacked_bar" chart
     * @public
     */
    DualStackedBar100: "DualStackedBar100",

    /**
     * A Column Chart using "viz/column" chart
     * @public
     */
    Column: "Column",

    /**
     * A Stacked Column Chart using "viz/stacked_column" chart
     * @public
     */
    StackedColumn: "StackedColumn",

    /**
     * A 100% Stacked Column Chart using "viz/100_stacked_column" chart
     * @public
     */
    StackedColumn100: "StackedColumn100",

    /**
     * A Dual Stacked Column Chart using "viz/dual_stacked_column" chart
     * @public
     */
    DualStackedColumn: "DualStackedColumn",

    /**
     * A 100% Dual Stacked Column Chart using "viz/100_dual_stacked_column" chart
     * @public
     */
    DualStackedColumn100: "DualStackedColumn100",

    /**
     * A Line Chart using "viz/line" chart
     * @public
     */
    Line: "Line",

    /**
     * A Combination chart using "viz/combination" chart
     * @public
     */
    Combination: "Combination",

    /**
     * A Bubble chart using "viz/bubble" chart
     * @public
     */
    Bubble: "Bubble"

};

sap.ca.ui.charts.ChartType.M_CHARTPROPERTIES = {
    "Bar": {
        name: "Bar",
        displayLabel: sap.ca.ui.utils.resourcebundle.getText("ChartToolBar.ChartName.Bar"),
        stacked: false,
        icon: "sap-icon://horizontal-bar-chart",
        scroll: {
            vertical: true,
            horizontal: false
        },
        showHoverLine : false,
        dataLabelPosition : "inside",
        dualAxis : false
    },
    "StackedBar": {
        name: "StackedColumn",
        displayLabel: sap.ca.ui.utils.resourcebundle.getText("ChartToolBar.ChartName.StackedBar"),
        vizType : "viz/stacked_bar",
        stacked: true,
        icon: "sap-icon://horizontal-stacked-chart",
        scroll: {
            vertical: true,
            horizontal: false
        },
        showHoverLine : false,
        dataLabelPosition : "inside",
        dualAxis : false
    },
    "StackedBar100": {
        name: "StackedColumn100",
        displayLabel: sap.ca.ui.utils.resourcebundle.getText("ChartToolBar.ChartName.StackedBar100"),
        vizType : "viz/100_stacked_bar",
        stacked: true,
        icon: "sap-icon://full-stacked-chart",
        scroll: {
            vertical: true,
            horizontal: false
        },
        showHoverLine : false,
        dataLabelPosition : "inside",
        dualAxis : false
    },
    "DualStackedBar": {
        name: "DualStackedColumn",
        displayLabel: sap.ca.ui.utils.resourcebundle.getText("ChartToolBar.ChartName.DualStackedBar"),
        vizType : "viz/dual_stacked_bar",
        stacked: true,
        icon: "sap-icon://horizontal-stacked-chart",
        scroll: {
            vertical: true,
            horizontal: false
        },
        showHoverLine : false,
        dataLabelPosition : "inside",
        dualAxis : true,
        alignScales : true
    },
    "DualStackedBar100": {
        name: "DualStackedColumn100",
        displayLabel: sap.ca.ui.utils.resourcebundle.getText("ChartToolBar.ChartName.DualStackedBar100"),
        vizType : "viz/100_dual_stacked_bar",
        stacked: true,
        icon: "sap-icon://full-stacked-chart",
        scroll: {
            vertical: true,
            horizontal: false
        },
        showHoverLine : false,
        dataLabelPosition : "inside",
        dualAxis : true,
        alignScales : false
    },
    "Column": {
        name: "Column",
        displayLabel: sap.ca.ui.utils.resourcebundle.getText("ChartToolBar.ChartName.Column"),
        stacked: false,
        icon: "sap-icon://vertical-bar-chart",
        scroll: {
            vertical: false,
            horizontal: true
        },
        showHoverLine : false,
        dataLabelPosition : "inside",
        dualAxis : false
    },
    "StackedColumn": {
        name: "StackedColumn",
        displayLabel: sap.ca.ui.utils.resourcebundle.getText("ChartToolBar.ChartName.StackedColumn"),
        stacked: true,
        icon: "sap-icon://vertical-stacked-chart",
        scroll: {
            vertical: false,
            horizontal: true
        },
        showHoverLine : false,
        dataLabelPosition : "inside",
        dualAxis : false
    },
    "StackedColumn100": {
        name: "StackedColumn100",
        displayLabel: sap.ca.ui.utils.resourcebundle.getText("ChartToolBar.ChartName.StackedColumn100"),
        stacked: true,
        icon: "sap-icon://full-stacked-column-chart",
        scroll: {
            vertical: false,
            horizontal: true
        },
        showHoverLine : false,
        dataLabelPosition : "inside",
        dualAxis : false
    },
    "DualStackedColumn": {
        name: "DualStackedColumn",
        displayLabel: sap.ca.ui.utils.resourcebundle.getText("ChartToolBar.ChartName.DualStackedColumn"),
        stacked: true,
        icon: "sap-icon://vertical-stacked-chart",
        scroll: {
            vertical: false,
            horizontal: true
        },
        showHoverLine : false,
        dataLabelPosition : "inside",
        dualAxis : true,
        alignScales : true
    },
    "DualStackedColumn100": {
        name: "DualStackedColumn100",
        displayLabel: sap.ca.ui.utils.resourcebundle.getText("ChartToolBar.ChartName.DualStackedColumn100"),
        stacked: true,
        icon: "sap-icon://full-stacked-column-chart",
        scroll: {
            vertical: false,
            horizontal: true
        },
        showHoverLine : false,
        dataLabelPosition : "inside",
        dualAxis : true,
        alignScales : false
    },
    "Line": {
        name: "Line",
        displayLabel: sap.ca.ui.utils.resourcebundle.getText("ChartToolBar.ChartName.Line"),
        stacked: false,
        icon: "sap-icon://line-chart",
        scroll: {
            vertical: false,
            horizontal: true
        },
        showHoverLine : true,
        dataLabelPosition : "outside",
        dualAxis : false
    },
    "Combination": {
        name: "Combination",
        displayLabel: sap.ca.ui.utils.resourcebundle.getText("ChartToolBar.ChartName.Combination"),
        stacked: true,
        icon: "sap-icon://business-objects-experience",
        scroll: {
            vertical: false,
            horizontal: true
        },
        showHoverLine : false,
        dataLabelPosition : "inside",
        dualAxis : false
    },
    "Bubble": {
        name: "Bubble",
        displayLabel: sap.ca.ui.utils.resourcebundle.getText("ChartToolBar.ChartName.Bubble"),
        stacked: true,
        icon: "sap-icon://bubble-chart",
        scroll: {
            vertical: false,
            horizontal: false
        },
        showHoverLine : false,
        dataLabelPosition : "inside",
        dualAxis : false
    }
}

sap.ca.ui.charts.ChartType.getChartProperties = function (oChartType) {
    var oChartProperties = sap.ca.ui.charts.ChartType.M_CHARTPROPERTIES[oChartType];
    if (oChartProperties == null) {
        jQuery.sap.log.error("Unknown Chart Type " + oChartType + " is not a recognized type");
    }
    return oChartProperties;
}
