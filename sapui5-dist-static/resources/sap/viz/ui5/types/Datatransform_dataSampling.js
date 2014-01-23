/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.types.Datatransform_dataSampling");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Datatransform_dataSampling",{metadata:{library:"sap.viz",properties:{"enable":{type:"boolean",group:"",defaultValue:false},"sizeFactor":{type:"int",group:"",defaultValue:1},"numberPrecondition":{type:"int",group:"",defaultValue:3000}},aggregations:{"grid":{type:"sap.viz.ui5.types.Datatransform_dataSampling_grid",multiple:false}}}});
sap.viz.ui5.types.Datatransform_dataSampling.prototype.getGrid=function(){return this._getOrCreate("grid")}
