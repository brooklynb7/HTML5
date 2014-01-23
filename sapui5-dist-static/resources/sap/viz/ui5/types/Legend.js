/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.types.Legend");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Legend",{metadata:{library:"sap.viz",aggregations:{"layout":{type:"sap.viz.ui5.types.Legend_layout",multiple:false}}}});
sap.viz.ui5.types.Legend.prototype.getLayout=function(){return this._getOrCreate("layout")}
