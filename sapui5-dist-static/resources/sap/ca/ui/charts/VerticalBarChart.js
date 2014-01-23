/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.charts.VerticalBarChart");jQuery.sap.require("sap.ca.ui.library");jQuery.sap.require("sap.ca.ui.charts.Chart");sap.ca.ui.charts.Chart.extend("sap.ca.ui.charts.VerticalBarChart",{metadata:{library:"sap.ca.ui",properties:{"data":{type:"object",group:"Data",defaultValue:null},"container":{type:"string",group:"Identification",defaultValue:'chart'},"barWidth":{type:"int",group:"Appearance",defaultValue:48}},aggregations:{"content":{type:"sap.ui.core.Control",multiple:true,singularName:"content"},"scroll":{type:"sap.m.ScrollContainer",multiple:false},"verticalBarChart":{type:"sap.viz.ui5.Column",multiple:false},"verticalArea":{type:"sap.m.VBox",multiple:false}}}});jQuery.sap.declare("sap.ca.ui.charts.VerticalBarChart");
sap.ca.ui.charts.VerticalBarChart.prototype.init=function(){sap.ca.ui.charts.Chart.prototype.init.apply(this);this.setChartType("Column")};
sap.ca.ui.charts.VerticalBarChart.prototype.setData=function(d){this._oInternalVizChart.setModel(d)};
sap.ca.ui.charts.VerticalBarChart.prototype.getContainer=function(){return this.getId()};
sap.ca.ui.charts.VerticalBarChart.prototype.setContainer=function(i){jQuery.sap.log.warning("Usage of deprecated feature, please use instead the generated ID : "+this.getId())};
sap.ca.ui.charts.VerticalBarChart.prototype.setBarWidth=function(b){this.setProperty("minShapeSize",b)};
sap.ca.ui.charts.VerticalBarChart.prototype.getBarWidth=function(){return this.getProperty("minShapeSize")};
sap.ca.ui.charts.VerticalBarChart.prototype.setContent=function(c){jQuery.sap.log.warning("Usage of deprecated feature, please use setAggregation('internalContent')")};
sap.ca.ui.charts.VerticalBarChart.prototype.getContent=function(){jQuery.sap.log.warning("Usage of deprecated feature please use getAggregation('internalContent')");return null};
sap.ca.ui.charts.VerticalBarChart.prototype.setScroll=function(s){jQuery.sap.log.warning("Usage of deprecated feature please use setAggregation('internalContent')")};
sap.ca.ui.charts.VerticalBarChart.prototype.getScroll=function(){return this.getAggregation("internalContent")};
sap.ca.ui.charts.VerticalBarChart.prototype.getVerticalBarChart=function(){return this.getAggregation("internalVizChart")};
sap.ca.ui.charts.VerticalBarChart.prototype.setVerticalBarChart=function(v){this.setAggregation("internalVizChart",v)};
sap.ca.ui.charts.VerticalBarChart.prototype.getVerticalArea=function(){jQuery.sap.log.warning("Usage of deprecated feature please use getAggregation('internalContent')");return null};
sap.ca.ui.charts.VerticalBarChart.prototype.setVerticalArea=function(v){jQuery.sap.log.warning("Usage of deprecated feature, please use setAggregation('internalContent')")}
