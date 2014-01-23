/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.charts.StackedHorizontalBarChart");jQuery.sap.require("sap.ca.ui.library");jQuery.sap.require("sap.ca.ui.charts.Chart");sap.ca.ui.charts.Chart.extend("sap.ca.ui.charts.StackedHorizontalBarChart",{metadata:{library:"sap.ca.ui",properties:{"type":{type:"string",group:"Designtime",defaultValue:'StackedBar',deprecated:true},"minTouchSize":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'48px',deprecated:true},"dataLabelFormat":{type:"any",group:"Appearance",defaultValue:[["##"]]}},aggregations:{"content":{type:"sap.ui.core.Control",multiple:true,singularName:"content",deprecated:true}}}});jQuery.sap.require("sap.ca.ui.charts.ChartType");
sap.ca.ui.charts.StackedHorizontalBarChart.prototype.setType=function(v){var c="";switch(v){case"viz/stacked_bar":c=sap.ca.ui.charts.ChartType.StackedBar;break;case"viz/100_stacked_bar":c=sap.ca.ui.charts.ChartType.StackedBar100;break;case"viz/dual_stacked_bar":c=sap.ca.ui.charts.ChartType.DualStackedBar;break;case"viz/100_dual_stacked_bar":c=sap.ca.ui.charts.ChartType.DualStackedBar100;break}this.setProperty("chartType",c);return this};
sap.ca.ui.charts.StackedHorizontalBarChart.prototype.getType=function(){return this.getChartType()};
sap.ca.ui.charts.StackedHorizontalBarChart.prototype.setMinTouchSize=function(v){this.setMinShapeSize(v);return this};
sap.ca.ui.charts.StackedHorizontalBarChart.prototype.getMinTouchSize=function(){return this.getMinShapeSize()};
sap.ca.ui.charts.StackedHorizontalBarChart.prototype.setDataLabelFormat=function(f){jQuery.sap.log.warning("This method has been deprectated. Please use dataLabelFormatter")};
