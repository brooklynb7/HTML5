/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.model.resource.ResourcePropertyBinding");jQuery.sap.require("sap.ui.model.PropertyBinding");sap.ui.model.PropertyBinding.extend("sap.ui.model.resource.ResourcePropertyBinding",{constructor:function(m,p){sap.ui.model.PropertyBinding.apply(this,arguments);this.oValue=this.oModel.getProperty(p)}});
sap.ui.model.resource.ResourcePropertyBinding.prototype.getValue=function(){return this.oModel.getProperty(this.sPath)};
