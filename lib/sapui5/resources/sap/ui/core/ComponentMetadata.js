/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.ComponentMetadata");jQuery.sap.require("sap.ui.base.ManagedObjectMetadata");
sap.ui.core.ComponentMetadata=function(c,C){sap.ui.base.ManagedObjectMetadata.apply(this,arguments)};
sap.ui.core.ComponentMetadata.prototype=jQuery.sap.newObject(sap.ui.base.ManagedObjectMetadata.prototype);
sap.ui.core.ComponentMetadata.prototype.applySettings=function(c){var s=c.metadata;sap.ui.base.ManagedObjectMetadata.prototype.applySettings.call(this,c);this._mDependencies=s.dependencies||null};
sap.ui.core.ComponentMetadata.prototype.getDependencies=function(){return this._mDependencies};
