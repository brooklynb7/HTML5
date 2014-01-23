/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

/**
 * Initialization Code and shared classes of library sap.portal.ui5 (1.16.4)
 */
jQuery.sap.declare("sap.portal.ui5.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * SAP UI library: sap.portal.ui5
 *
 * @namespace
 * @name sap.portal.ui5
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.portal.ui5",
  dependencies : ["sap.ui.core"],
  types: [],
  interfaces: [],
  controls: [],
  elements: [],
  version: "1.16.4"});


// -----------------------------------------------------------------------------
// Begin of Library Initialization coding, copied from shared.js
// -----------------------------------------------------------------------------

sap.ui.lazyRequire('sap.portal.ui5.core.PropertyObserver');
sap.ui.lazyRequire('sap.portal.ui5.core.ObjectMetadata');
sap.ui.lazyRequire('sap.portal.ui5.core.ObservablePropertiesMixin');
sap.ui.lazyRequire('sap.portal.ui5.core.Object');
sap.ui.lazyRequire('sap.portal.ui5.core.View');
sap.ui.lazyRequire('sap.portal.ui5.core.DynamicView');
sap.ui.lazyRequire('sap.portal.ui5.core.UI5ControlView');
sap.ui.lazyRequire('sap.portal.ui5.core.LayoutInterface');
sap.ui.lazyRequire('sap.portal.ui5.core.Collection');
sap.ui.lazyRequire('sap.portal.ui5.core.ComponentCollection');
sap.ui.lazyRequire('sap.portal.ui5.core.LayoutData');
sap.ui.lazyRequire('sap.portal.ui5.core.ComponentManager');
sap.ui.lazyRequire('sap.portal.ui5.core.Component');
