/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.charts.HorizontalBarChart");jQuery.sap.require("sap.ca.ui.library");jQuery.sap.require("sap.ca.ui.charts.Chart");sap.ca.ui.charts.Chart.extend("sap.ca.ui.charts.HorizontalBarChart",{metadata:{library:"sap.ca.ui",properties:{"data":{type:"object",group:"Misc",defaultValue:null},"container":{type:"string",group:"Misc",defaultValue:'chart'},"barHeight":{type:"int",group:"Misc",defaultValue:48}},aggregations:{"scroll":{type:"sap.m.ScrollContainer",multiple:false},"horizontalBarChart":{type:"sap.viz.ui5.Bar",multiple:false},"verticalArea":{type:"sap.m.VBox",multiple:false}}}});jQuery.sap.declare("sap.ca.ui.charts.HorizontalBarChart");
sap.ca.ui.charts.HorizontalBarChart.prototype.init=function(){sap.ca.ui.charts.Chart.prototype.init.apply(this);this.setChartType("Bar")};
sap.ca.ui.charts.HorizontalBarChart.prototype.setData=function(d){this._oInternalVizChart.setModel(d)};
sap.ca.ui.charts.HorizontalBarChart.prototype.getContainer=function(){return this.getId()};
sap.ca.ui.charts.HorizontalBarChart.prototype.setContainer=function(i){jQuery.sap.log.warning("Usage of deprecated feature, please use instead the generated ID : "+this.getId())};
sap.ca.ui.charts.HorizontalBarChart.prototype.setBarHeight=function(b){this.setProperty("minShapeSize",b)};
sap.ca.ui.charts.HorizontalBarChart.prototype.getBarHeight=function(){return this.getProperty("minShapeSize")};
sap.ca.ui.charts.HorizontalBarChart.prototype.setContent=function(c){jQuery.sap.log.warning("Usage of deprecated feature, please use setAggregation('internalContent')")};
sap.ca.ui.charts.HorizontalBarChart.prototype.getContent=function(){jQuery.sap.log.warning("Usage of deprecated feature please use getAggregation('internalContent')");return null};
sap.ca.ui.charts.HorizontalBarChart.prototype.setScroll=function(s){jQuery.sap.log.warning("Usage of deprecated feature please use setAggregation('internalContent')")};
sap.ca.ui.charts.HorizontalBarChart.prototype.getScroll=function(){return this.getAggregation("internalContent")};
sap.ca.ui.charts.HorizontalBarChart.prototype.getHorizontalBarChart=function(){return this.getAggregation("internalVizChart")};
sap.ca.ui.charts.HorizontalBarChart.prototype.setHorizontalBarChart=function(h){this.setAggregation("internalVizChart",h)};
sap.ca.ui.charts.HorizontalBarChart.prototype.getVerticalArea=function(){jQuery.sap.log.warning("Usage of deprecated feature please use getAggregation('internalContent')");return null};
sap.ca.ui.charts.HorizontalBarChart.prototype.setVerticalArea=function(v){jQuery.sap.log.warning("Usage of deprecated feature, please use setAggregation('internalContent')")}
