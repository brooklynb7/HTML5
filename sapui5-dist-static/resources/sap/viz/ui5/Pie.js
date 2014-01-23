/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.Pie");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseChart");sap.viz.ui5.core.BaseChart.extend("sap.viz.ui5.Pie",{metadata:{library:"sap.viz",aggregations:{"general":{type:"sap.viz.ui5.types.RootContainer",multiple:false},"title":{type:"sap.viz.ui5.types.Title",multiple:false},"legendGroup":{type:"sap.viz.ui5.types.Legend",multiple:false},"legend":{type:"sap.viz.ui5.types.legend.Common",multiple:false},"xyContainer":{type:"sap.viz.ui5.types.XYContainer",multiple:false},"plotArea":{type:"sap.viz.ui5.types.Pie",multiple:false},"dataLabel":{type:"sap.viz.ui5.types.Datalabel",multiple:false},"interaction":{type:"sap.viz.ui5.types.controller.Interaction",multiple:false},"dataTransform":{type:"sap.viz.ui5.types.Datatransform",multiple:false}},events:{"selectData":{},"deselectData":{},"showTooltip":{},"hideTooltip":{},"initialized":{}}}});sap.viz.ui5.Pie.M_EVENTS={'selectData':'selectData','deselectData':'deselectData','showTooltip':'showTooltip','hideTooltip':'hideTooltip','initialized':'initialized'};
sap.viz.ui5.Pie.prototype.getVIZChartType=function(){return"viz/pie"};
sap.viz.ui5.Pie.prototype.getGeneral=function(){return this._getOrCreate("general")};
sap.viz.ui5.Pie.prototype.getTitle=function(){return this._getOrCreate("title")};
sap.viz.ui5.Pie.prototype.getLegendGroup=function(){return this._getOrCreate("legendGroup")};
sap.viz.ui5.Pie.prototype.getLegend=function(){return this._getOrCreate("legend")};
sap.viz.ui5.Pie.prototype.getXyContainer=function(){return this._getOrCreate("xyContainer")};
sap.viz.ui5.Pie.prototype.getPlotArea=function(){return this._getOrCreate("plotArea")};
sap.viz.ui5.Pie.prototype.getDataLabel=function(){return this._getOrCreate("dataLabel")};
sap.viz.ui5.Pie.prototype.getInteraction=function(){return this._getOrCreate("interaction")};
sap.viz.ui5.Pie.prototype.getDataTransform=function(){return this._getOrCreate("dataTransform")};
sap.viz.ui5.Pie.prototype.attachSelectData=function(d,h,l){return this._attachVIZEvent("selectData",d,h,l)};
sap.viz.ui5.Pie.prototype.detachSelectData=function(h,l){return this._detachVIZEvent("selectData",h,l)};
sap.viz.ui5.Pie.prototype.attachDeselectData=function(d,h,l){return this._attachVIZEvent("deselectData",d,h,l)};
sap.viz.ui5.Pie.prototype.detachDeselectData=function(h,l){return this._detachVIZEvent("deselectData",h,l)};
sap.viz.ui5.Pie.prototype.attachShowTooltip=function(d,h,l){return this._attachVIZEvent("showTooltip",d,h,l)};
sap.viz.ui5.Pie.prototype.detachShowTooltip=function(h,l){return this._detachVIZEvent("showTooltip",h,l)};
sap.viz.ui5.Pie.prototype.attachHideTooltip=function(d,h,l){return this._attachVIZEvent("hideTooltip",d,h,l)};
sap.viz.ui5.Pie.prototype.detachHideTooltip=function(h,l){return this._detachVIZEvent("hideTooltip",h,l)};
sap.viz.ui5.Pie.prototype.attachInitialized=function(d,h,l){return this._attachVIZEvent("initialized",d,h,l)};
sap.viz.ui5.Pie.prototype.detachInitialized=function(h,l){return this._detachVIZEvent("initialized",h,l)};
