/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides class sap.ui.core.ComponentMetadata
jQuery.sap.declare("sap.ui.core.ComponentMetadata");
jQuery.sap.require("sap.ui.base.ManagedObjectMetadata");

/**
 * Creates a new metadata object for a Component subclass.
 *
 * @param {string} sClassName fully qualified name of the class that is described by this metadata object
 * @param {object} oStaticInfo static info to construct the metadata from
 *
 * @experimental Since 1.9.2. The Component concept is still under construction, so some implementation details can be changed in future.
 * @class
 * @author SAP
 * @version 1.10.0
 * @since 1.9.2
 */
sap.ui.core.ComponentMetadata = function(sClassName, oClassInfo) {

	// call super constructor
	sap.ui.base.ManagedObjectMetadata.apply(this, arguments);
};

//chain the prototypes
sap.ui.core.ComponentMetadata.prototype = jQuery.sap.newObject(sap.ui.base.ManagedObjectMetadata.prototype);

sap.ui.core.ComponentMetadata.prototype.applySettings = function(oClassInfo) {

	var oStaticInfo = oClassInfo.metadata;

	sap.ui.base.ManagedObjectMetadata.prototype.applySettings.call(this, oClassInfo);

	this._mDependencies = oStaticInfo.dependencies || null;
};

/**
 * Returns the dependencies for the component
 */
sap.ui.core.ComponentMetadata.prototype.getDependencies = function() {

	return this._mDependencies;
};