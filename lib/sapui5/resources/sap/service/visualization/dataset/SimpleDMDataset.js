/*!
 * CVOM HTML5 charts
 * 
 * 	(c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.service.visualization.dataset.SimpleDMDataset");jQuery.sap.require("sap.service.visualization.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.service.visualization.dataset.SimpleDMDataset",{metadata:{deprecated:true,publicMethods:["setDataTable"],library:"sap.service.visualization",properties:{"dimensionName":{type:"string",group:"Data",defaultValue:null,bindable:"bindable"},"dimensionItems":{type:"string[]",group:"Data",defaultValue:null,bindable:"bindable"},"measureNames":{type:"string[]",group:"Data",defaultValue:null,bindable:"bindable"},"data":{type:"object[]",group:"Data",defaultValue:null,bindable:"bindable"},"tabularData":{type:"object[]",group:"Data",defaultValue:null,bindable:"bindable"}}}});
/*!
 * @copyright@
 */
jQuery.sap.require("sap.service.visualization.chart.ChartSourceCode.libs.json2");jQuery.sap.require("sap.service.visualization.chart.ChartSourceCode.libs.saprivbase");jQuery.sap.require("sap.service.visualization.chart.ChartSourceCode.libs.sapcommonglobalization");jQuery.sap.require("sap.service.visualization.chart.ChartSourceCode.libs.saprivmodules");
sap.service.visualization.dataset.SimpleDMDataset.prototype.init=function(){this.dataset=new sap.riv.viz.shared.dataConverter.SimpleDMDataset()};
sap.service.visualization.dataset.SimpleDMDataset.prototype.setDimensionItems=function(d){this.setProperty("dimensionItems",d);this.dataset.dimensionLabels(d)};
sap.service.visualization.dataset.SimpleDMDataset.prototype.setDimensionName=function(d){this.setProperty("dimensionName",d);this.dataset.dimensionName(d)};
sap.service.visualization.dataset.SimpleDMDataset.prototype.setData=function(d){this.setProperty("data",d);this.dataset.data(d)};
sap.service.visualization.dataset.SimpleDMDataset.prototype.setMeasureNames=function(m){this.setProperty("measureNames",m);this.dataset.measureNames(m)};
sap.service.visualization.dataset.SimpleDMDataset.prototype.setTabularData=function(t){this.setProperty("tabularData",t);var d=new Array();var m=t;var J=new Array();var f=m[0];for(var k in f){if(f.hasOwnProperty(k)){J.push(k)}};var a=J[0];for(var i=0;i<m.length;i++){if(typeof m[i]!=='undefined')d.push(m[i][a])};var b=J.slice(1);var c=this.getMeasureValueNameArr(J,m);this.setDimensionName(a);this.setData(c);this.setMeasureNames(b);this.setDimensionItems(d)};
sap.service.visualization.dataset.SimpleDMDataset.prototype.setDataTable=function(d){var t=d.getModel().getData();if(!t||typeof t==="undefined")return;var m;for(prop in t){m=t[prop]}this.setTabularData(m)};
sap.service.visualization.dataset.SimpleDMDataset.prototype.getMeasureValueNameArr=function(J,m){var d=new Array();for(var j=1;j<J.length;j++){var t=new Array();var a=J[j];for(var i=0;i<m.length;i++){for(var i=0;i<m.length;i++){if(typeof m[i]!=='undefined')t.push(m[i][a])}}d.push(t)}return d};
