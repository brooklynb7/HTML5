/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.charts.CombinedChart");jQuery.sap.require("sap.ca.ui.library");jQuery.sap.require("sap.ca.ui.charts.Chart");sap.ca.ui.charts.Chart.extend("sap.ca.ui.charts.CombinedChart",{metadata:{library:"sap.ca.ui",properties:{"data":{type:"any",group:"Data",defaultValue:null},"primaryAxis":{type:"string[]",group:"Appearance",defaultValue:null},"secondAxis":{type:"string[]",group:"Appearance",defaultValue:null}},aggregations:{"scrollArea":{type:"sap.m.ScrollContainer",multiple:false}}}});jQuery.sap.declare("sap.ca.ui.charts.CombinedChart");
sap.ca.ui.charts.CombinedChart.prototype.init=function(){sap.ca.ui.charts.Chart.prototype.init.apply(this);this.setChartType("Combination")};
sap.ca.ui.charts.CombinedChart.prototype._getChartSettings=function(){var c=sap.ca.ui.charts.Chart.prototype._getChartSettings.call(this);if(typeof c.plotArea==="undefined"){c.plotArea={}}if(this.getPrimaryAxis()!=null){if(typeof c.plotArea.dataShape==="undefined"){c.plotArea.dataShape={}}c.plotArea.dataShape.primaryAxis=this.getPrimaryAxis()}if(this.getSecondAxis()!=null){if(typeof c.plotArea.dataShape==="undefined"){c.plotArea.dataShape={}}c.plotArea.dataShape.secondAxis=this.getSecondAxis()}c.plotArea.line={marker:{visible:true,size:this._getMarkerSize()}};return c};
sap.ca.ui.charts.CombinedChart.prototype.setData=function(d){this._oInternalVizChart.setModel(d)};
sap.ca.ui.charts.CombinedChart.prototype.getScrollArea=function(){return this.getAggregation("internalContent")};
sap.ca.ui.charts.CombinedChart.prototype.setScrollArea=function(s){jQuery.sap.log.warning("Usage of deprecated feature, please use instead : this.setAggregation('internalContent')")};
