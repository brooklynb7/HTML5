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
 * Initialization Code and shared classes of library sap.ui.richtexteditor (1.10.0)
 */
jQuery.sap.declare("sap.ui.richtexteditor.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * SAPUI5 library with rich text editor. Requires installation of an additional richtexteditor library.
 *
 * @namespace
 * @name sap.ui.richtexteditor
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.ui.richtexteditor",
  dependencies : ["sap.ui.core"],
  types: [],
  interfaces: [],
  controls: [
    "sap.ui.richtexteditor.RichTextEditor"
  ],
  elements: [],
  version: "1.10.0"});

