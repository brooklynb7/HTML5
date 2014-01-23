/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.Treemap");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseChart");sap.viz.ui5.core.BaseChart.extend("sap.viz.ui5.Treemap",{metadata:{library:"sap.viz",aggregations:{"general":{type:"sap.viz.ui5.types.RootContainer",multiple:false},"title":{type:"sap.viz.ui5.types.Title",multiple:false},"legendGroup":{type:"sap.viz.ui5.types.Legend",multiple:false},"legend":{type:"sap.viz.ui5.types.legend.Common",multiple:false},"xyContainer":{type:"sap.viz.ui5.types.XYContainer",multiple:false},"dataLabel":{type:"sap.viz.ui5.types.Datalabel",multiple:false},"plotArea":{type:"sap.viz.ui5.types.Treemap",multiple:false},"toolTip":{type:"sap.viz.ui5.types.Tooltip",multiple:false},"interaction":{type:"sap.viz.ui5.types.controller.Interaction",multiple:false}},events:{"selectData":{},"deselectData":{},"showTooltip":{},"hideTooltip":{},"initialized":{}}}});sap.viz.ui5.Treemap.M_EVENTS={'selectData':'selectData','deselectData':'deselectData','showTooltip':'showTooltip','hideTooltip':'hideTooltip','initialized':'initialized'};
sap.viz.ui5.Treemap.prototype.getVIZChartType=function(){return"viz/treemap"};
sap.viz.ui5.Treemap.prototype.getGeneral=function(){return this._getOrCreate("general")};
sap.viz.ui5.Treemap.prototype.getTitle=function(){return this._getOrCreate("title")};
sap.viz.ui5.Treemap.prototype.getLegendGroup=function(){return this._getOrCreate("legendGroup")};
sap.viz.ui5.Treemap.prototype.getLegend=function(){return this._getOrCreate("legend")};
sap.viz.ui5.Treemap.prototype.getXyContainer=function(){return this._getOrCreate("xyContainer")};
sap.viz.ui5.Treemap.prototype.getDataLabel=function(){return this._getOrCreate("dataLabel")};
sap.viz.ui5.Treemap.prototype.getPlotArea=function(){return this._getOrCreate("plotArea")};
sap.viz.ui5.Treemap.prototype.getToolTip=function(){return this._getOrCreate("toolTip")};
sap.viz.ui5.Treemap.prototype.getInteraction=function(){return this._getOrCreate("interaction")};
sap.viz.ui5.Treemap.prototype.attachSelectData=function(d,h,l){return this._attachVIZEvent("selectData",d,h,l)};
sap.viz.ui5.Treemap.prototype.detachSelectData=function(h,l){return this._detachVIZEvent("selectData",h,l)};
sap.viz.ui5.Treemap.prototype.attachDeselectData=function(d,h,l){return this._attachVIZEvent("deselectData",d,h,l)};
sap.viz.ui5.Treemap.prototype.detachDeselectData=function(h,l){return this._detachVIZEvent("deselectData",h,l)};
sap.viz.ui5.Treemap.prototype.attachShowTooltip=function(d,h,l){return this._attachVIZEvent("showTooltip",d,h,l)};
sap.viz.ui5.Treemap.prototype.detachShowTooltip=function(h,l){return this._detachVIZEvent("showTooltip",h,l)};
sap.viz.ui5.Treemap.prototype.attachHideTooltip=function(d,h,l){return this._attachVIZEvent("hideTooltip",d,h,l)};
sap.viz.ui5.Treemap.prototype.detachHideTooltip=function(h,l){return this._detachVIZEvent("hideTooltip",h,l)};
sap.viz.ui5.Treemap.prototype.attachInitialized=function(d,h,l){return this._attachVIZEvent("initialized",d,h,l)};
sap.viz.ui5.Treemap.prototype.detachInitialized=function(h,l){return this._detachVIZEvent("initialized",h,l)};
