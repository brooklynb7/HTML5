/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

/**
 * Initialization Code and shared classes of library sap.ca.ui (1.16.4)
 */
jQuery.sap.declare("sap.ca.ui.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * SAP UI library: Fiori Commons
 *
 * @namespace
 * @name sap.ca.ui
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.m.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.ca.ui",
  dependencies : ["sap.ui.core","sap.viz","sap.m"],
  types: [
    "sap.ca.ui.charts.ChartColor",
    "sap.ca.ui.charts.ChartSelectionMode",
    "sap.ca.ui.charts.ChartSemanticColor"
  ],
  interfaces: [],
  controls: [
    "sap.ca.ui.AddPicture",
    "sap.ca.ui.CustomerContext",
    "sap.ca.ui.DatePicker",
    "sap.ca.ui.ExpansibleFeedListItem",
    "sap.ca.ui.FileUpload",
    "sap.ca.ui.GrowingTileContainer",
    "sap.ca.ui.HierarchicalSelectDialog",
    "sap.ca.ui.Hierarchy",
    "sap.ca.ui.HierarchyItem",
    "sap.ca.ui.InPlaceEdit",
    "sap.ca.ui.Notes",
    "sap.ca.ui.OverflowContainer",
    "sap.ca.ui.OverviewTile",
    "sap.ca.ui.PictureItem",
    "sap.ca.ui.PictureTile",
    "sap.ca.ui.PictureTileContainer",
    "sap.ca.ui.PictureViewer",
    "sap.ca.ui.PictureViewerItem",
    "sap.ca.ui.TabContainerOverflow",
    "sap.ca.ui.ZoomableScrollContainer",
    "sap.ca.ui.charts.BarListItem",
    "sap.ca.ui.charts.BubbleChart",
    "sap.ca.ui.charts.Chart",
    "sap.ca.ui.charts.ChartToolBar",
    "sap.ca.ui.charts.ClusterListItem",
    "sap.ca.ui.charts.CombinedChart",
    "sap.ca.ui.charts.HorizontalBarChart",
    "sap.ca.ui.charts.LineChart",
    "sap.ca.ui.charts.StackedHorizontalBarChart",
    "sap.ca.ui.charts.StackedVerticalColumnChart",
    "sap.ca.ui.charts.VerticalBarChart"
  ],
  elements: [
    "sap.ca.ui.HierarchicalSelectDialogItem"
  ],
  version: "1.16.4"});

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ca.ui.charts.ChartColor.
jQuery.sap.declare("sap.ca.ui.charts.ChartColor");


/**
 * @class Enumeration of available color to be used in sap.ca.ui charts.
 *
 * @version 1.16.4
 * @static
 * @public
 */
sap.ca.ui.charts.ChartColor = {
  
    /**
     * Sap Ui Chart 1 
     * @public
     */
    sapUiChart1 : "sapUiChart1",

    /**
     * Sap Ui Chart 2 
     * @public
     */
    sapUiChart2 : "sapUiChart2",

    /**
     * Sap Ui Chart 3 
     * @public
     */
    sapUiChart3 : "sapUiChart3",

    /**
     * Sap Ui Chart 4 
     * @public
     */
    sapUiChart4 : "sapUiChart4",

    /**
     * Sap Ui Chart 5 
     * @public
     */
    sapUiChart5 : "sapUiChart5",

    /**
     * Sap Ui Chart 6 
     * @public
     */
    sapUiChart6 : "sapUiChart6",

    /**
     * Sap Ui Chart 7 
     * @public
     */
    sapUiChart7 : "sapUiChart7",

    /**
     * Sap Ui Chart 8 
     * @public
     */
    sapUiChart8 : "sapUiChart8",

    /**
     * Sap Ui Chart 9 
     * @public
     */
    sapUiChart9 : "sapUiChart9",

    /**
     * Sap Ui Chart 10 
     * @public
     */
    sapUiChart10 : "sapUiChart10",

    /**
     * Sap Ui Chart 11 
     * @public
     */
    sapUiChart11 : "sapUiChart11",

    /**
     * Sap Ui Chart Bad 
     * @public
     */
    sapUiChartBad : "sapUiChartBad",

    /**
     * Sap Ui Chart Critical 
     * @public
     */
    sapUiChartCritical : "sapUiChartCritical",

    /**
     * Sap Ui Chart Good 
     * @public
     */
    sapUiChartGood : "sapUiChartGood",

    /**
     * Sap Ui Chart Neutral 
     * @public
     */
    sapUiChartNeutral : "sapUiChartNeutral"

  };
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ca.ui.charts.ChartSelectionMode.
jQuery.sap.declare("sap.ca.ui.charts.ChartSelectionMode");


/**
 * @class Determines the selection mode of a Chart.
 *
 * @version 1.16.4
 * @static
 * @public
 */
sap.ca.ui.charts.ChartSelectionMode = {
  
    /**
     * The chart will not allow any selection 
     * @public
     */
    None : "None",

    /**
     * The chart will only allow single selection 
     * @public
     */
    Single : "Single",

    /**
     * The chart will allow multi selection. 
     * @public
     */
    Multiple : "Multiple"

  };
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ca.ui.charts.ChartSemanticColor.
jQuery.sap.declare("sap.ca.ui.charts.ChartSemanticColor");


/**
 * @class Enumeration of available semantic color to be used in sap.Ca.ui
 *
 * @version 1.16.4
 * @static
 * @public
 */
sap.ca.ui.charts.ChartSemanticColor = {
  
    /**
     * Darker Neutral color 
     * @public
     */
    NeutralDark : "NeutralDark",

    /**
     * Neutral colro 
     * @public
     */
    Neutral : "Neutral",

    /**
     * Lighter Neutral color 
     * @public
     */
    NeutralLight : "NeutralLight",

    /**
     * Darker Good color 
     * @public
     */
    GoodDark : "GoodDark",

    /**
     * Good colro 
     * @public
     */
    Good : "Good",

    /**
     * Lighter Good color 
     * @public
     */
    GoodLight : "GoodLight",

    /**
     * Darker Critical color 
     * @public
     */
    CriticalDark : "CriticalDark",

    /**
     * Critical colro 
     * @public
     */
    Critical : "Critical",

    /**
     * Lighter Critical color 
     * @public
     */
    CriticalLight : "CriticalLight",

    /**
     * Darker Bad color 
     * @public
     */
    BadDark : "BadDark",

    /**
     * Bad colro 
     * @public
     */
    Bad : "Bad",

    /**
     * Lighter Bad color 
     * @public
     */
    BadLight : "BadLight"

  };
