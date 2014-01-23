/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.types.Datatransform");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Datatransform",{metadata:{library:"sap.viz",aggregations:{"autoBinning":{type:"sap.viz.ui5.types.Datatransform_autoBinning",multiple:false},"dataSampling":{type:"sap.viz.ui5.types.Datatransform_dataSampling",multiple:false}}}});
sap.viz.ui5.types.Datatransform.prototype.getAutoBinning=function(){return this._getOrCreate("autoBinning")};
sap.viz.ui5.types.Datatransform.prototype.getDataSampling=function(){return this._getOrCreate("dataSampling")}
