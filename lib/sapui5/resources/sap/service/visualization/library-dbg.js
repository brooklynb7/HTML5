/*!
 * CVOM HTML5 charts
 * 
 * 	(c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

/**
 * Initialization Code and shared classes of library sap.service.visualization (1.10.0)
 */
jQuery.sap.declare("sap.service.visualization.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * this lib contains pie bar line and combination charts
 *
 * @namespace
 * @name sap.service.visualization
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.service.visualization",
  dependencies : ["sap.ui.core"],
  types: [],
  interfaces: [],
  controls: [
    "sap.service.visualization.chart.Bar",
    "sap.service.visualization.chart.Column",
    "sap.service.visualization.chart.Combination",
    "sap.service.visualization.chart.Line",
    "sap.service.visualization.chart.Pie"
  ],
  elements: [
    "sap.service.visualization.ChartOption",
    "sap.service.visualization.Themings",
    "sap.service.visualization.dataset.SimpleDMDataset"
  ],
  version: "1.10.0"});

