/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

/**
 * Initialization Code and shared classes of library sap.suite.ui.commons (1.16.4)
 */
jQuery.sap.declare("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * SAP UI library: sap.suite.ui.commons
 *
 * @namespace
 * @name sap.suite.ui.commons
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");
jQuery.sap.require("sap.ui.commons.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.suite.ui.commons",
  dependencies : ["sap.ui.core","sap.ui.commons"],
  types: [
    "sap.suite.ui.commons.ThingGroupDesign",
    "sap.suite.ui.commons.ValueStatus"
  ],
  interfaces: [],
  controls: [
    "sap.suite.ui.commons.BusinessCard",
    "sap.suite.ui.commons.DateRangeScroller",
    "sap.suite.ui.commons.DateRangeSlider",
    "sap.suite.ui.commons.DateRangeSliderInternal",
    "sap.suite.ui.commons.FacetOverview",
    "sap.suite.ui.commons.FeedItemHeader",
    "sap.suite.ui.commons.FeedTile",
    "sap.suite.ui.commons.KpiTile",
    "sap.suite.ui.commons.LaunchTile",
    "sap.suite.ui.commons.LinkActionSheet",
    "sap.suite.ui.commons.NoteTaker",
    "sap.suite.ui.commons.NoteTakerCard",
    "sap.suite.ui.commons.NoteTakerFeeder",
    "sap.suite.ui.commons.RepeaterViewConfiguration",
    "sap.suite.ui.commons.SplitButton",
    "sap.suite.ui.commons.ThingCollection",
    "sap.suite.ui.commons.ThreePanelThingInspector",
    "sap.suite.ui.commons.ThreePanelThingViewer",
    "sap.suite.ui.commons.UnifiedThingGroup",
    "sap.suite.ui.commons.UnifiedThingInspector",
    "sap.suite.ui.commons.VerticalNavigationBar",
    "sap.suite.ui.commons.ViewRepeater"
  ],
  elements: [
    "sap.suite.ui.commons.CountingNavigationItem",
    "sap.suite.ui.commons.FeedItem"
  ],
  version: "1.16.4"});

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.ThingGroupDesign.
jQuery.sap.declare("sap.suite.ui.commons.ThingGroupDesign");


/**
 * @class Defines the way how UnifiedThingGroup control is rendered.
 *
 * @version 1.16.4
 * @static
 * @public
 */
sap.suite.ui.commons.ThingGroupDesign = {
  
    /**
     * In this design there is no indentation between header and content of the group. 
     * @public
     */
    ZeroIndent : "ZeroIndent",

    /**
     * In this design there is indentation between header and content of the group. 
     * @public
     */
    TopIndent : "TopIndent"

  };
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.ValueStatus.
jQuery.sap.declare("sap.suite.ui.commons.ValueStatus");


/**
 * @class Marker for the key value status.
 *
 * @version 1.16.4
 * @static
 * @public
 */
sap.suite.ui.commons.ValueStatus = {
  
    /**
     * Good value. 
     * @public
     */
    Good : "Good",

    /**
     * Positive value. 
     * @public
     */
    Neutral : "Neutral",

    /**
     * Critical value. 
     * @public
     */
    Critical : "Critical",

    /**
     * Bad value. 
     * @public
     */
    Bad : "Bad"

  };
