/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.model.resource.ResourceModel");jQuery.sap.require("sap.ui.model.Model");jQuery.sap.require("sap.ui.model.resource.ResourcePropertyBinding");sap.ui.model.Model.extend("sap.ui.model.resource.ResourceModel",{constructor:function(d){sap.ui.model.Model.apply(this,arguments);this.sDefaultBindingMode=sap.ui.model.BindingMode.OneTime;this.mSupportedBindingModes={"OneWay":false,"TwoWay":false,"OneTime":true};if(d&&(d.bundleUrl||d.bundleName)){this.ResourceBundle=this.loadResourceBundle(d)}else{throw new Error("Neither url nor library name are given. One of these is mandatory.")}},metadata:{publicMethods:["getResourceBundle"]}});
sap.ui.model.resource.ResourceModel.prototype.loadResourceBundle=function(d){var c=sap.ui.getCore().getConfiguration(),r,u,l,i;l=d.bundleLocale;if(!l){l=c.getLanguage()}i=c.getOriginInfo();u=d.bundleUrl;if(d.bundleName){u=jQuery.sap.getModulePath(d.bundleName,'.properties')}r=jQuery.sap.resources({url:u,locale:l,includeInfo:i});return r};
sap.ui.model.resource.ResourceModel.prototype.bindProperty=function(p){var b=new sap.ui.model.resource.ResourcePropertyBinding(this,p);return b};
sap.ui.model.resource.ResourceModel.prototype.getProperty=function(p){var t=this.ResourceBundle.getText(p);return t};
sap.ui.model.resource.ResourceModel.prototype.getResourceBundle=function(){return this.ResourceBundle};
