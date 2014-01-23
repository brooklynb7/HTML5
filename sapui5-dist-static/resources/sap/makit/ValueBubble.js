/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.makit.ValueBubble");jQuery.sap.require("sap.makit.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.makit.ValueBubble",{metadata:{library:"sap.makit",properties:{"showCategoryText":{type:"boolean",group:"Misc",defaultValue:true},"showCategoryDisplayName":{type:"boolean",group:"Misc",defaultValue:true},"showValueDisplayName":{type:"boolean",group:"Misc",defaultValue:true},"showValueOnPieChart":{type:"boolean",group:"Misc",defaultValue:false},"showLegendLabel":{type:"boolean",group:"Misc",defaultValue:true},"showNullValue":{type:"boolean",group:"Misc",defaultValue:true},"position":{type:"sap.makit.ValueBubblePosition",group:"Misc",defaultValue:sap.makit.ValueBubblePosition.Top},"style":{type:"sap.makit.ValueBubbleStyle",group:"Misc",defaultValue:sap.makit.ValueBubbleStyle.Top},"visible":{type:"boolean",group:"Appearance",defaultValue:true}}}});
/*!
 * @copyright@
 */

sap.makit.ValueBubble.prototype.toObject=function(){var o={};o.showCategoryText=this.getShowCategoryText();o.showCategoryDisplayName=this.getShowCategoryDisplayName();o.showValueDisplayName=this.getShowValueDisplayName();o.showValueOnPieChart=this.getShowValueOnPieChart();o.showLegendLabel=this.getShowLegendLabel();o.showNullValue=this.getShowNullValue();o.style=this.getStyle().toLowerCase();o.position=this.getPosition().toLowerCase();o.visible=this.getVisible();return o};
