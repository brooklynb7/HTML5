/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

/**
 * Initialization Code and shared classes of library sap.fiori (1.16.4)
 */
jQuery.sap.declare("sap.fiori.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * SAPUI5 library with all controls required by the Fiori apps
 *
 * @namespace
 * @name sap.fiori
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.fiori",
  dependencies : ["sap.ui.core"],
  types: [],
  interfaces: [],
  controls: [],
  elements: [],
  version: "1.16.4"});

