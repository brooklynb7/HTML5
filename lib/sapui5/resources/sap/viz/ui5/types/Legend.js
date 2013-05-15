/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.types.Legend");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Legend",{metadata:{library:"sap.viz",properties:{"visible":{type:"boolean",group:"",defaultValue:true},"formatString":{type:"string",group:"",defaultValue:'null'},"isHierarchical":{type:"boolean",group:"",defaultValue:false},"position":{type:"sap.viz.ui5.types.Legend_position",group:"",defaultValue:sap.viz.ui5.types.Legend_position.right},"type":{type:"sap.viz.ui5.types.Legend_type",group:"",defaultValue:sap.viz.ui5.types.Legend_type.ColorLegend},"alignment":{type:"sap.viz.ui5.types.Legend_alignment",group:"",defaultValue:sap.viz.ui5.types.Legend_alignment.start},"drawingEffect":{type:"sap.viz.ui5.types.Legend_drawingEffect",group:"",defaultValue:sap.viz.ui5.types.Legend_drawingEffect.normal}},aggregations:{"title":{type:"sap.viz.ui5.types.Legend_title",multiple:false}}}});
sap.viz.ui5.types.Legend.prototype.getTitle=function(){return this._getOrCreate("title")}
