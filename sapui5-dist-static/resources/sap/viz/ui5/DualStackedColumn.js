/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.DualStackedColumn");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseChart");sap.viz.ui5.core.BaseChart.extend("sap.viz.ui5.DualStackedColumn",{metadata:{library:"sap.viz",aggregations:{"general":{type:"sap.viz.ui5.types.RootContainer",multiple:false},"interaction":{type:"sap.viz.ui5.types.controller.Interaction",multiple:false},"title":{type:"sap.viz.ui5.types.Title",multiple:false},"legendGroup":{type:"sap.viz.ui5.types.Legend",multiple:false},"legend":{type:"sap.viz.ui5.types.legend.Common",multiple:false},"toolTip":{type:"sap.viz.ui5.types.Tooltip",multiple:false},"dataLabel":{type:"sap.viz.ui5.types.Datalabel",multiple:false},"yAxis":{type:"sap.viz.ui5.types.Axis",multiple:false},"xAxis":{type:"sap.viz.ui5.types.Axis",multiple:false},"background":{type:"sap.viz.ui5.types.Background",multiple:false},"plotArea":{type:"sap.viz.ui5.types.StackedVerticalBar",multiple:false},"yAxis2":{type:"sap.viz.ui5.types.Axis",multiple:false}},events:{"selectData":{},"deselectData":{},"showTooltip":{},"hideTooltip":{},"initialized":{}}}});sap.viz.ui5.DualStackedColumn.M_EVENTS={'selectData':'selectData','deselectData':'deselectData','showTooltip':'showTooltip','hideTooltip':'hideTooltip','initialized':'initialized'};
sap.viz.ui5.DualStackedColumn.prototype.getVIZChartType=function(){return"viz/dual_stacked_column"};
sap.viz.ui5.DualStackedColumn.prototype.getGeneral=function(){return this._getOrCreate("general")};
sap.viz.ui5.DualStackedColumn.prototype.getInteraction=function(){return this._getOrCreate("interaction")};
sap.viz.ui5.DualStackedColumn.prototype.getTitle=function(){return this._getOrCreate("title")};
sap.viz.ui5.DualStackedColumn.prototype.getLegendGroup=function(){return this._getOrCreate("legendGroup")};
sap.viz.ui5.DualStackedColumn.prototype.getLegend=function(){return this._getOrCreate("legend")};
sap.viz.ui5.DualStackedColumn.prototype.getToolTip=function(){return this._getOrCreate("toolTip")};
sap.viz.ui5.DualStackedColumn.prototype.getDataLabel=function(){return this._getOrCreate("dataLabel")};
sap.viz.ui5.DualStackedColumn.prototype.getYAxis=function(){return this._getOrCreate("yAxis")};
sap.viz.ui5.DualStackedColumn.prototype.getXAxis=function(){return this._getOrCreate("xAxis")};
sap.viz.ui5.DualStackedColumn.prototype.getBackground=function(){return this._getOrCreate("background")};
sap.viz.ui5.DualStackedColumn.prototype.getPlotArea=function(){return this._getOrCreate("plotArea")};
sap.viz.ui5.DualStackedColumn.prototype.getYAxis2=function(){return this._getOrCreate("yAxis2")};
sap.viz.ui5.DualStackedColumn.prototype.attachSelectData=function(d,h,l){return this._attachVIZEvent("selectData",d,h,l)};
sap.viz.ui5.DualStackedColumn.prototype.detachSelectData=function(h,l){return this._detachVIZEvent("selectData",h,l)};
sap.viz.ui5.DualStackedColumn.prototype.attachDeselectData=function(d,h,l){return this._attachVIZEvent("deselectData",d,h,l)};
sap.viz.ui5.DualStackedColumn.prototype.detachDeselectData=function(h,l){return this._detachVIZEvent("deselectData",h,l)};
sap.viz.ui5.DualStackedColumn.prototype.attachShowTooltip=function(d,h,l){return this._attachVIZEvent("showTooltip",d,h,l)};
sap.viz.ui5.DualStackedColumn.prototype.detachShowTooltip=function(h,l){return this._detachVIZEvent("showTooltip",h,l)};
sap.viz.ui5.DualStackedColumn.prototype.attachHideTooltip=function(d,h,l){return this._attachVIZEvent("hideTooltip",d,h,l)};
sap.viz.ui5.DualStackedColumn.prototype.detachHideTooltip=function(h,l){return this._detachVIZEvent("hideTooltip",h,l)};
sap.viz.ui5.DualStackedColumn.prototype.attachInitialized=function(d,h,l){return this._attachVIZEvent("initialized",d,h,l)};
sap.viz.ui5.DualStackedColumn.prototype.detachInitialized=function(h,l){return this._detachVIZEvent("initialized",h,l)};
