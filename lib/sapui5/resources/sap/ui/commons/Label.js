/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.Label");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.Label",{metadata:{interfaces:["sap.ui.commons.ToolbarItem"],library:"sap.ui.commons",properties:{"design":{type:"sap.ui.commons.LabelDesign",group:"Appearance",defaultValue:sap.ui.commons.LabelDesign.Standard},"textDirection":{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:sap.ui.core.TextDirection.Inherit},"wrapping":{type:"boolean",group:"Appearance",defaultValue:false},"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:''},"text":{type:"string",group:"Misc",defaultValue:''},"visible":{type:"boolean",group:"Behavior",defaultValue:true},"icon":{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null},"textAlign":{type:"sap.ui.core.TextAlign",group:"Appearance",defaultValue:sap.ui.core.TextAlign.Begin}},associations:{"labelFor":{type:"sap.ui.core.Control",multiple:false}}}});
sap.ui.commons.Label.prototype.onAfterRendering=function(){if(this.getLabelForRendering()&&(this.getTooltip_AsString()==""||!(this.getTooltip()instanceof sap.ui.core.TooltipBase))){var f=sap.ui.getCore().byId(this.getLabelForRendering());if(f&&(f.getTooltip()instanceof sap.ui.core.TooltipBase)){this.oForTooltip=f.getTooltip();this.addDelegate(this.oForTooltip)}}};
sap.ui.commons.Label.prototype.onBeforeRendering=function(){if(this.oForTooltip){this.removeDelegate(this.oForTooltip);this.oForTooltip=null}};
sap.ui.commons.Label.prototype.exit=function(){if(this.oForTooltip){this.removeDelegate(this.oForTooltip);this.oForTooltip=null}};
sap.ui.commons.Label.prototype.isRequired=function(){var f=sap.ui.getCore().byId(this.getLabelForRendering());if(f&&f.getRequired&&f.getRequired()===true){return true}else{return false}};
sap.ui.commons.Label.prototype.getLabelForRendering=function(){return this.getLabelFor()};
