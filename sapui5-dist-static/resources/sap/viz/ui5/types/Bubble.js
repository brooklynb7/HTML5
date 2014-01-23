/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.types.Bubble");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Bubble",{metadata:{library:"sap.viz",properties:{"colorPalette":{type:"string[]",group:"",defaultValue:['#748CB2','#9CC677','#EACF5E','#F9AD79','#D16A7C','#8873A2','#3A95B3','#B6D949','#FDD36C','#F47958','#A65084','#0063B1','#0DA841','#FCB71D','#F05620','#B22D6E','#3C368E','#8FB2CF','#95D4AB','#EAE98F','#F9BE92','#EC9A99','#BC98BD','#1EB7B2','#73C03C','#F48323','#EB271B','#D9B5CA','#AED1DA','#DFECB2','#FCDAB0','#F5BCB4']},"shapePalette":{type:"string[]",group:"",defaultValue:['circle','square','diamond','triangleUp','triangleDown','triangleLeft','triangleRight','cross','intersection']},"drawingEffect":{type:"sap.viz.ui5.types.Bubble_drawingEffect",group:"",defaultValue:sap.viz.ui5.types.Bubble_drawingEffect.normal}},aggregations:{"axisTooltip":{type:"sap.viz.ui5.types.Bubble_axisTooltip",multiple:false},"hoverline":{type:"sap.viz.ui5.types.Bubble_hoverline",multiple:false},"animation":{type:"sap.viz.ui5.types.Bubble_animation",multiple:false}}}});
sap.viz.ui5.types.Bubble.prototype.getAxisTooltip=function(){return this._getOrCreate("axisTooltip")};
sap.viz.ui5.types.Bubble.prototype.getHoverline=function(){return this._getOrCreate("hoverline")};
sap.viz.ui5.types.Bubble.prototype.getAnimation=function(){return this._getOrCreate("animation")}
