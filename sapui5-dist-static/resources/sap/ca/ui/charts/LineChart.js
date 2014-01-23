/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.charts.LineChart");jQuery.sap.require("sap.ca.ui.library");jQuery.sap.require("sap.ca.ui.charts.Chart");sap.ca.ui.charts.Chart.extend("sap.ca.ui.charts.LineChart",{metadata:{library:"sap.ca.ui",properties:{"chartTitle":{type:"string",group:"Data",defaultValue:'Line Chart',deprecated:true},"dataLabelFormat":{type:"any",group:"Appearance",defaultValue:'#0'},"minTouchSize":{type:"string",group:"Behavior",defaultValue:'48px',deprecated:true},"minTouchWidth":{type:"string",group:"Behavior",defaultValue:'48px',deprecated:true},"showLabel":{type:"boolean",group:"Appearance",defaultValue:true,deprecated:true},"showScrollContext":{type:"boolean",group:"Appearance",defaultValue:false,deprecated:true},"chartDataset":{type:"any",group:"Data",defaultValue:null,deprecated:true},"datasetSettings":{type:"any",group:"Data",defaultValue:null,deprecated:true},"chartDatasetSettings":{type:"any",group:"Data",defaultValue:null,deprecated:true},"dataPath":{type:"string",group:"Data",defaultValue:null,deprecated:true},"data":{type:"any",group:"Data",defaultValue:null,deprecated:true},"chartBusinessData":{type:"any",group:"Data",defaultValue:null,deprecated:true},"useDelayedResize":{type:"boolean",group:"Behavior",defaultValue:false,deprecated:true}},aggregations:{"vertical":{type:"sap.m.VBox",multiple:false,deprecated:true}},events:{"onDetailsSelected":{deprecated:true}}}});sap.ca.ui.charts.LineChart.M_EVENTS={'onDetailsSelected':'onDetailsSelected'};
sap.ca.ui.charts.LineChart.prototype.init=function(){sap.ca.ui.charts.Chart.prototype.init.apply(this);this.setChartType("Line")};
sap.ca.ui.charts.LineChart.prototype.setVertical=function(a){jQuery.sap.log.warning("Vertical aggregation is deprecated")};
sap.ca.ui.charts.LineChart.prototype.getVertical=function(){jQuery.sap.log.warning("Vertical aggregation is deprecated");return null};
sap.ca.ui.charts.LineChart.prototype.attachOnDetailsSelected=function(){jQuery.sap.log.warning("onDetailsSelected event is deprecated")};
sap.ca.ui.charts.LineChart.prototype.setUseDelayedResize=function(a){jQuery.sap.log.warning("UseDelayedResize property is deprecated")};
sap.ca.ui.charts.LineChart.prototype.getUseDelayedResize=function(){jQuery.sap.log.warning("UseDelayedResize property is deprecated");return null};
sap.ca.ui.charts.LineChart.prototype.setChartBusinessData=function(a){jQuery.sap.log.warning("ChartBusinessData property is deprecated")};
sap.ca.ui.charts.LineChart.prototype.getChartBusinessData=function(){jQuery.sap.log.warning("ChartBusinessData property is deprecated");return null};
sap.ca.ui.charts.LineChart.prototype.setData=function(a){jQuery.sap.log.warning("Data property is deprecated")};
sap.ca.ui.charts.LineChart.prototype.getData=function(){jQuery.sap.log.warning("Data property is deprecated");return null};
sap.ca.ui.charts.LineChart.prototype.setDataPath=function(a){jQuery.sap.log.warning("DataPath property is deprecated")};
sap.ca.ui.charts.LineChart.prototype.getDataPath=function(){jQuery.sap.log.warning("DataPath property is deprecated");return null};
sap.ca.ui.charts.LineChart.prototype.setChartDatasetSettings=function(a){jQuery.sap.log.warning("ChartDatasetSettings property is deprecated")};
sap.ca.ui.charts.LineChart.prototype.getChartDatasetSettings=function(){jQuery.sap.log.warning("ChartDatasetSettings property is deprecated");return null};
sap.ca.ui.charts.LineChart.prototype.setDatasetSettings=function(a){jQuery.sap.log.warning("DatasetSettings property is deprecated")};
sap.ca.ui.charts.LineChart.prototype.getDatasetSettings=function(){jQuery.sap.log.warning("DatasetSettings property is deprecated");return null};
sap.ca.ui.charts.LineChart.prototype.setChartDataset=function(a){jQuery.sap.log.warning("ChartDataset property is deprecated")};
sap.ca.ui.charts.LineChart.prototype.getChartDataset=function(){jQuery.sap.log.warning("ChartDataset property is deprecated");return null};
sap.ca.ui.charts.LineChart.prototype.setShowScrollContext=function(a){jQuery.sap.log.warning("Vertical property is deprecated")};
sap.ca.ui.charts.LineChart.prototype.getVertical=function(){jQuery.sap.log.warning("Vertical property is deprecated");return null};
sap.ca.ui.charts.LineChart.prototype.setShowLabel=function(a){jQuery.sap.log.warning("ShowLabel property is deprecated")};
sap.ca.ui.charts.LineChart.prototype.getShowLabel=function(){jQuery.sap.log.warning("ShowLabel property is deprecated");return null};
sap.ca.ui.charts.LineChart.prototype.setMinTouchWidth=function(a){jQuery.sap.log.warning("MinTouchWidth property is deprecated")};
sap.ca.ui.charts.LineChart.prototype.getMinTouchWidth=function(){jQuery.sap.log.warning("MinTouchWidth property is deprecated");return null};
sap.ca.ui.charts.LineChart.prototype.setMinTouchSize=function(a){jQuery.sap.log.warning("MinTouchSize property is deprecated")};
sap.ca.ui.charts.LineChart.prototype.getMinTouchSize=function(){jQuery.sap.log.warning("MinTouchSize property is deprecated");return null};
sap.ca.ui.charts.LineChart.prototype.setDataLabelFormat=function(a){jQuery.sap.log.warning("DataLabelFormat property is deprecated")};
sap.ca.ui.charts.LineChart.prototype.getDataLabelFormat=function(){jQuery.sap.log.warning("DataLabelFormat property is deprecated");return null};
sap.ca.ui.charts.LineChart.prototype.setChartTitle=function(a){jQuery.sap.log.warning("ChartTitle property is deprecated")};
sap.ca.ui.charts.LineChart.prototype.getChartTitle=function(){jQuery.sap.log.warning("ChartTitle property is deprecated");return null};
