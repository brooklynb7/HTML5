/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.types.Combination_line");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Combination_line",{metadata:{library:"sap.viz",properties:{"width":{type:"int",group:"",defaultValue:2}},aggregations:{"marker":{type:"sap.viz.ui5.types.Combination_line_marker",multiple:false}}}});
sap.viz.ui5.types.Combination_line.prototype.getMarker=function(){return this._getOrCreate("marker")}
