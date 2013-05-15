jQuery.sap.declare('sap.makit.library-all');if(!jQuery.sap.isDeclared('sap.makit.ChartRenderer')){
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.makit.ChartRenderer");sap.makit.ChartRenderer={};sap.makit.ChartRenderer.render=function(r,c){r.write("<div id=\"sap-ui-dummy-"+c.getId()+"\" style=\"display:none\">");r.write("<div");r.writeControlData(c);r.writeAttribute("data-sap-ui-preserve",c.getId());r.addClass("sapMakitChart");r.writeClasses();r.write(">");r.write("</div>");r.write("</div>")}};if(!jQuery.sap.isDeclared('sap.makit.library')){jQuery.sap.declare("sap.makit.library");jQuery.sap.require('sap.ui.core.Core');jQuery.sap.require('sap.ui.core.library');sap.ui.getCore().initLibrary({name:"sap.makit",dependencies:["sap.ui.core"],types:["sap.makit.ChartType","sap.makit.LegendPosition","sap.makit.SortOrder","sap.makit.ValueBubblePosition","sap.makit.ValueBubbleStyle"],interfaces:[],controls:["sap.makit.Chart"],elements:["sap.makit.Axis","sap.makit.Category","sap.makit.CategoryAxis","sap.makit.Column","sap.makit.Row","sap.makit.Series","sap.makit.Value","sap.makit.ValueAxis","sap.makit.ValueBubble"],version:"1.10.0"});jQuery.sap.declare("sap.makit.ChartType");sap.makit.ChartType={Column:"Column",Line:"Line",Bubble:"Bubble",Bar:"Bar",Pie:"Pie",Donut:"Donut",StackedColumn:"StackedColumn",HundredPercentStackedColumn:"HundredPercentStackedColumn"};jQuery.sap.declare("sap.makit.LegendPosition");sap.makit.LegendPosition={Top:"Top",Left:"Left",Bottom:"Bottom",Right:"Right",None:"None"};jQuery.sap.declare("sap.makit.SortOrder");sap.makit.SortOrder={Ascending:"Ascending",Descending:"Descending",Partial:"Partial",None:"None"};jQuery.sap.declare("sap.makit.ValueBubblePosition");sap.makit.ValueBubblePosition={Top:"Top",Side:"Side"};jQuery.sap.declare("sap.makit.ValueBubbleStyle");sap.makit.ValueBubbleStyle={Top:"Top",Float:"Float",FloatTop:"FloatTop"}};if(!jQuery.sap.isDeclared('sap.makit.Axis')){jQuery.sap.declare("sap.makit.Axis");jQuery.sap.require('sap.ui.core.Element');sap.ui.core.Element.extend("sap.makit.Axis",{metadata:{library:"sap.makit",properties:{"showLabel":{type:"boolean",group:"Appearance",defaultValue:true},"showPrimaryLine":{type:"boolean",group:"Appearance",defaultValue:true},"showGrid":{type:"boolean",group:"Appearance",defaultValue:false},"thickness":{type:"float",group:"Appearance",defaultValue:0.5},"color":{type:"string",group:"Appearance",defaultValue:'gray'}}}})
/*!
 * @copyright@
 */
};if(!jQuery.sap.isDeclared('sap.makit.Category')){
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.makit.Category");jQuery.sap.require('sap.ui.core.Element');sap.ui.core.Element.extend("sap.makit.Category",{metadata:{library:"sap.makit",properties:{"column":{type:"string",group:"Misc",defaultValue:null},"displayName":{type:"string",group:"Misc",defaultValue:null},"format":{type:"string",group:"Misc",defaultValue:null}}}})
/*!
 * @copyright@
 */
};if(!jQuery.sap.isDeclared('sap.makit.CategoryAxis')){
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.makit.CategoryAxis");sap.makit.Axis.extend("sap.makit.CategoryAxis",{metadata:{library:"sap.makit",properties:{"sortOrder":{type:"sap.makit.SortOrder",group:"Misc",defaultValue:sap.makit.SortOrder.None},"displayLastLabel":{type:"boolean",group:"Misc",defaultValue:false}}}});
/*!
 * @copyright@
 */
sap.makit.CategoryAxis.prototype.init=function(){this.setShowGrid(false);this.setShowPrimaryLine(true)}};if(!jQuery.sap.isDeclared('sap.makit.Column')){
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.makit.Column");jQuery.sap.require('sap.ui.core.Element');sap.ui.core.Element.extend("sap.makit.Column",{metadata:{library:"sap.makit",properties:{"name":{type:"string",group:"Identification",defaultValue:null},"value":{type:"any",group:"Data",defaultValue:null},"type":{type:"string",group:"Misc",defaultValue:'string'}}}})
/*!
 * @copyright@
 */
};if(!jQuery.sap.isDeclared('sap.makit.Row')){
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.makit.Row");jQuery.sap.require('sap.ui.core.Element');sap.ui.core.Element.extend("sap.makit.Row",{metadata:{library:"sap.makit",aggregations:{"cells":{type:"sap.makit.Column",multiple:true,singularName:"cell"}}}});
/*!
 * @copyright@
 */
sap.makit.Row.prototype.init=function(){this._datarow={}};sap.makit.Row.prototype.addCell=function(c){sap.ui.core.Element.prototype.addAggregation.call(this,"cells",c,false);var i=this.getId();if(!jQuery.sap.endsWith(i,"dummyrows")){this._datarow[c.getName()]=c.getValue();c.attachEvent("_change",this.onCellChanged,this)}};sap.makit.Row.prototype.onCellChanged=function(e){if(e.mParameters['name']==="name"){var o=e.mParameters['oldValue'];var n=e.mParameters['newValue'];this._datarow[n]=undefined;if(o&&o!==""){this._datarow[n]=this._datarow[o];this._datarow[o]=null;this._datarow[o]=undefined;delete this._datarow[o]}}else if(e.mParameters['name']==="value"){var c=e.oSource.getName();this._datarow[c]=e.mParameters['newValue']}}};if(!jQuery.sap.isDeclared('sap.makit.Series')){
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.makit.Series");jQuery.sap.require('sap.ui.core.Element');sap.ui.core.Element.extend("sap.makit.Series",{metadata:{library:"sap.makit",properties:{"column":{type:"string",group:"Data",defaultValue:null},"displayName":{type:"string",group:"Appearance",defaultValue:null},"format":{type:"string",group:"Misc",defaultValue:null}}}})
/*!
 * @copyright@
 */
};if(!jQuery.sap.isDeclared('sap.makit.Value')){
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.makit.Value");jQuery.sap.require('sap.ui.core.Element');sap.ui.core.Element.extend("sap.makit.Value",{metadata:{library:"sap.makit",properties:{"expression":{type:"string",group:"Misc",defaultValue:null},"displayName":{type:"string",group:"Misc",defaultValue:null},"format":{type:"string",group:"Misc",defaultValue:null}}}})
/*!
 * @copyright@
 */
};if(!jQuery.sap.isDeclared('sap.makit.ValueAxis')){
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.makit.ValueAxis");sap.makit.Axis.extend("sap.makit.ValueAxis",{metadata:{library:"sap.makit",properties:{"min":{type:"string",group:"Misc",defaultValue:null},"max":{type:"string",group:"Misc",defaultValue:null}}}});
/*!
 * @copyright@
 */
sap.makit.ValueAxis.prototype.init=function(){this.setShowGrid(true);this.setShowPrimaryLine(false)}};if(!jQuery.sap.isDeclared('sap.makit.ValueBubble')){
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.makit.ValueBubble");jQuery.sap.require('sap.ui.core.Element');sap.ui.core.Element.extend("sap.makit.ValueBubble",{metadata:{library:"sap.makit",properties:{"showCategoryText":{type:"boolean",group:"Misc",defaultValue:true},"showCategoryDisplayName":{type:"boolean",group:"Misc",defaultValue:true},"showValueDisplayName":{type:"boolean",group:"Misc",defaultValue:true},"showValueOnPieChart":{type:"boolean",group:"Misc",defaultValue:false},"showLegendLabel":{type:"boolean",group:"Misc",defaultValue:true},"showNullValue":{type:"boolean",group:"Misc",defaultValue:true},"position":{type:"sap.makit.ValueBubblePosition",group:"Misc",defaultValue:sap.makit.ValueBubblePosition.Top},"style":{type:"sap.makit.ValueBubbleStyle",group:"Misc",defaultValue:sap.makit.ValueBubbleStyle.Top},"visible":{type:"boolean",group:"Appearance",defaultValue:true}}}});
/*!
 * @copyright@
 */
sap.makit.ValueBubble.prototype.toObject=function(){var o={};o.showCategoryText=this.getShowCategoryText();o.showCategoryDisplayName=this.getShowCategoryDisplayName();o.showValueDisplayName=this.getShowValueDisplayName();o.showValueOnPieChart=this.getShowValueOnPieChart();o.showLegendLabel=this.getShowLegendLabel();o.showNullValue=this.getShowNullValue();o.style=this.getStyle().toLowerCase();o.position=this.getPosition().toLowerCase();o.visible=this.getVisible();return o}};
