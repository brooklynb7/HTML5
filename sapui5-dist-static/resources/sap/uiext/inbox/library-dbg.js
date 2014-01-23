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
 * Initialization Code and shared classes of library sap.uiext.inbox (1.16.4)
 */
jQuery.sap.declare("sap.uiext.inbox.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * SAPUI5 library containing the Unified  Inbox control
 *
 * @namespace
 * @name sap.uiext.inbox
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.ux3.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.uiext.inbox",
  dependencies : ["sap.ui.core","sap.ui.commons","sap.ui.ux3"],
  types: [],
  interfaces: [],
  controls: [
    "sap.uiext.inbox.Inbox",
    "sap.uiext.inbox.SubstitutionRulesManager",
    "sap.uiext.inbox.composite.InboxComment",
    "sap.uiext.inbox.composite.InboxTaskComments"
  ],
  elements: [],
  version: "1.16.4"});

