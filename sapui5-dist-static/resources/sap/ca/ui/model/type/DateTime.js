/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.model.type.DateTime");jQuery.sap.require("sap.ca.ui.model.type.Date");sap.ca.ui.model.type.Date.extend("sap.ca.ui.model.type.DateTime",{constructor:function(){sap.ca.ui.model.type.Date.apply(this,arguments);this.sName="DateTime"}});
sap.ca.ui.model.type.DateTime.prototype._handleLocalizationChange=function(){this.oOutputFormat=sap.ca.ui.model.format.DateFormat.getDateTimeInstance(this.oFormatOptions);if(this.oFormatOptions.source){this.oInputFormat=sap.ca.ui.model.format.DateFormat.getDateTimeInstance(this.oFormatOptions.source)}};
