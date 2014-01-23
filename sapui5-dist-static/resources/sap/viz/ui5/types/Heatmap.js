/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.types.Heatmap");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Heatmap",{metadata:{library:"sap.viz",properties:{"startColor":{type:"string",group:"",defaultValue:'#C2E3A9'},"endColor":{type:"string",group:"",defaultValue:'#73C03C'},"colorPalette":{type:"string[]",group:"",defaultValue:null}},aggregations:{"border":{type:"sap.viz.ui5.types.Heatmap_border",multiple:false},"animation":{type:"sap.viz.ui5.types.Heatmap_animation",multiple:false},"toolTip":{type:"sap.viz.ui5.types.Heatmap_tooltip",multiple:false,deprecated:true}}}});
sap.viz.ui5.types.Heatmap.prototype.getBorder=function(){return this._getOrCreate("border")};
sap.viz.ui5.types.Heatmap.prototype.getAnimation=function(){return this._getOrCreate("animation")};
sap.viz.ui5.types.Heatmap.prototype.getToolTip=function(){return this._getOrCreate("toolTip")}
