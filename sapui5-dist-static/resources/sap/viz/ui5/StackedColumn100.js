/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.StackedColumn100");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseChart");sap.viz.ui5.core.BaseChart.extend("sap.viz.ui5.StackedColumn100",{metadata:{library:"sap.viz",aggregations:{"general":{type:"sap.viz.ui5.types.RootContainer",multiple:false},"interaction":{type:"sap.viz.ui5.types.controller.Interaction",multiple:false},"title":{type:"sap.viz.ui5.types.Title",multiple:false},"legendGroup":{type:"sap.viz.ui5.types.Legend",multiple:false},"legend":{type:"sap.viz.ui5.types.legend.Common",multiple:false},"toolTip":{type:"sap.viz.ui5.types.Tooltip",multiple:false},"dataLabel":{type:"sap.viz.ui5.types.Datalabel",multiple:false},"yAxis":{type:"sap.viz.ui5.types.Axis",multiple:false},"xAxis":{type:"sap.viz.ui5.types.Axis",multiple:false},"background":{type:"sap.viz.ui5.types.Background",multiple:false},"plotArea":{type:"sap.viz.ui5.types.StackedVerticalBar",multiple:false}},events:{"selectData":{},"deselectData":{},"showTooltip":{},"hideTooltip":{},"initialized":{}}}});sap.viz.ui5.StackedColumn100.M_EVENTS={'selectData':'selectData','deselectData':'deselectData','showTooltip':'showTooltip','hideTooltip':'hideTooltip','initialized':'initialized'};
sap.viz.ui5.StackedColumn100.prototype.getVIZChartType=function(){return"viz/100_stacked_column"};
sap.viz.ui5.StackedColumn100.prototype.getGeneral=function(){return this._getOrCreate("general")};
sap.viz.ui5.StackedColumn100.prototype.getInteraction=function(){return this._getOrCreate("interaction")};
sap.viz.ui5.StackedColumn100.prototype.getTitle=function(){return this._getOrCreate("title")};
sap.viz.ui5.StackedColumn100.prototype.getLegendGroup=function(){return this._getOrCreate("legendGroup")};
sap.viz.ui5.StackedColumn100.prototype.getLegend=function(){return this._getOrCreate("legend")};
sap.viz.ui5.StackedColumn100.prototype.getToolTip=function(){return this._getOrCreate("toolTip")};
sap.viz.ui5.StackedColumn100.prototype.getDataLabel=function(){return this._getOrCreate("dataLabel")};
sap.viz.ui5.StackedColumn100.prototype.getYAxis=function(){return this._getOrCreate("yAxis")};
sap.viz.ui5.StackedColumn100.prototype.getXAxis=function(){return this._getOrCreate("xAxis")};
sap.viz.ui5.StackedColumn100.prototype.getBackground=function(){return this._getOrCreate("background")};
sap.viz.ui5.StackedColumn100.prototype.getPlotArea=function(){return this._getOrCreate("plotArea")};
sap.viz.ui5.StackedColumn100.prototype.attachSelectData=function(d,h,l){return this._attachVIZEvent("selectData",d,h,l)};
sap.viz.ui5.StackedColumn100.prototype.detachSelectData=function(h,l){return this._detachVIZEvent("selectData",h,l)};
sap.viz.ui5.StackedColumn100.prototype.attachDeselectData=function(d,h,l){return this._attachVIZEvent("deselectData",d,h,l)};
sap.viz.ui5.StackedColumn100.prototype.detachDeselectData=function(h,l){return this._detachVIZEvent("deselectData",h,l)};
sap.viz.ui5.StackedColumn100.prototype.attachShowTooltip=function(d,h,l){return this._attachVIZEvent("showTooltip",d,h,l)};
sap.viz.ui5.StackedColumn100.prototype.detachShowTooltip=function(h,l){return this._detachVIZEvent("showTooltip",h,l)};
sap.viz.ui5.StackedColumn100.prototype.attachHideTooltip=function(d,h,l){return this._attachVIZEvent("hideTooltip",d,h,l)};
sap.viz.ui5.StackedColumn100.prototype.detachHideTooltip=function(h,l){return this._detachVIZEvent("hideTooltip",h,l)};
sap.viz.ui5.StackedColumn100.prototype.attachInitialized=function(d,h,l){return this._attachVIZEvent("initialized",d,h,l)};
sap.viz.ui5.StackedColumn100.prototype.detachInitialized=function(h,l){return this._detachVIZEvent("initialized",h,l)};
