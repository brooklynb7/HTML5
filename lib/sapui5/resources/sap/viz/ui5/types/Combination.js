/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.types.Combination");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Combination",{metadata:{library:"sap.viz",properties:{"colorPalette":{type:"string[]",group:"",defaultValue:['#748CB2','#9CC677','#EACF5E','#F9AD79','#D16A7C','#8873A2','#3A95B3','#B6D949','#FDD36C','#F47958','#A65084','#0063B1','#0DA841','#FCB71D','#F05620','#B22D6E','#3C368E','#8FB2CF','#95D4AB','#EAE98F','#F9BE92','#EC9A99','#BC98BD','#1EB7B2','#73C03C','#F48323','#EB271B','#D9B5CA','#AED1DA','#DFECB2','#FCDAB0','#F5BCB4']},"primaryValuesColorPalette":{type:"string[]",group:"",defaultValue:['#8FBADD','#B8D4E9','#7AAED6','#A3C7E3','#3D88C4','#66A1D0','#297CBE','#5295CA','#005BA3','#146FB7','#005395','#0063B1']},"secondaryValuesColorPalette":{type:"string[]",group:"",defaultValue:['#F6A09B','#F9C3C0','#F58E88','#F8B1AD','#F05B52','#F37D76','#EE4A40','#F16C64','#D92419','#ED382D','#C52117','#EB271B']},"drawingEffect":{type:"sap.viz.ui5.types.Combination_drawingEffect",group:"",defaultValue:sap.viz.ui5.types.Combination_drawingEffect.normal}},aggregations:{"toolTip":{type:"sap.viz.ui5.types.Combination_tooltip",multiple:false},"animation":{type:"sap.viz.ui5.types.Combination_animation",multiple:false},"dataShape":{type:"sap.viz.ui5.types.Combination_dataShape",multiple:false},"bar":{type:"sap.viz.ui5.types.Combination_bar",multiple:false},"line":{type:"sap.viz.ui5.types.Combination_line",multiple:false}}}});
sap.viz.ui5.types.Combination.prototype.getToolTip=function(){return this._getOrCreate("toolTip")};
sap.viz.ui5.types.Combination.prototype.getAnimation=function(){return this._getOrCreate("animation")};
sap.viz.ui5.types.Combination.prototype.getDataShape=function(){return this._getOrCreate("dataShape")};
sap.viz.ui5.types.Combination.prototype.getBar=function(){return this._getOrCreate("bar")};
sap.viz.ui5.types.Combination.prototype.getLine=function(){return this._getOrCreate("line")}
