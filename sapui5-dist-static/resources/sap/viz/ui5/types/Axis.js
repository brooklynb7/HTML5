/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.types.Axis");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Axis",{metadata:{library:"sap.viz",properties:{"isIndependentMode":{type:"boolean",group:"",defaultValue:false,deprecated:true},"isPercentMode":{type:"boolean",group:"",defaultValue:false,deprecated:true},"lineSize":{type:"string",group:"",defaultValue:'1'},"color":{type:"string",group:"",defaultValue:'#6c6c6c'},"type":{type:"sap.viz.ui5.types.Axis_type",group:"",defaultValue:sap.viz.ui5.types.Axis_type.value,deprecated:true},"visible":{type:"boolean",group:"",defaultValue:true},"position":{type:"sap.viz.ui5.types.Axis_position",group:"",defaultValue:sap.viz.ui5.types.Axis_position.bottom,deprecated:true},"isTruncateAvailable":{type:"boolean",group:"",defaultValue:true,deprecated:true},"forceLabelArea":{type:"boolean",group:"",defaultValue:false,deprecated:true},"enableLabelSelection":{type:"boolean",group:"",defaultValue:true,deprecated:true}},aggregations:{"title":{type:"sap.viz.ui5.types.Axis_title",multiple:false},"gridline":{type:"sap.viz.ui5.types.Axis_gridline",multiple:false},"axisline":{type:"sap.viz.ui5.types.Axis_axisline",multiple:false},"label":{type:"sap.viz.ui5.types.Axis_label",multiple:false},"indicator":{type:"sap.viz.ui5.types.Axis_indicator",multiple:false},"scale":{type:"sap.viz.ui5.types.Axis_scale",multiple:false},"layoutInfo":{type:"sap.viz.ui5.types.Axis_layoutInfo",multiple:false,deprecated:true},"axisTick":{type:"sap.viz.ui5.types.Axis_axisTick",multiple:false,deprecated:true}}}});
sap.viz.ui5.types.Axis.prototype.getTitle=function(){return this._getOrCreate("title")};
sap.viz.ui5.types.Axis.prototype.getGridline=function(){return this._getOrCreate("gridline")};
sap.viz.ui5.types.Axis.prototype.getAxisline=function(){return this._getOrCreate("axisline")};
sap.viz.ui5.types.Axis.prototype.getLabel=function(){return this._getOrCreate("label")};
sap.viz.ui5.types.Axis.prototype.getIndicator=function(){return this._getOrCreate("indicator")};
sap.viz.ui5.types.Axis.prototype.getScale=function(){return this._getOrCreate("scale")};
sap.viz.ui5.types.Axis.prototype.getLayoutInfo=function(){return this._getOrCreate("layoutInfo")};
sap.viz.ui5.types.Axis.prototype.getAxisTick=function(){return this._getOrCreate("axisTick")}
