/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.types.Pie");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Pie",{metadata:{library:"sap.viz",properties:{"colorPalette":{type:"string[]",group:"",defaultValue:['#748CB2','#9CC677','#EACF5E','#F9AD79','#D16A7C','#8873A2','#3A95B3','#B6D949','#FDD36C','#F47958','#A65084','#0063B1','#0DA841','#FCB71D','#F05620','#B22D6E','#3C368E','#8FB2CF','#95D4AB','#EAE98F','#F9BE92','#EC9A99','#BC98BD','#1EB7B2','#73C03C','#F48323','#EB271B','#D9B5CA','#AED1DA','#DFECB2','#FCDAB0','#F5BCB4']},"isDonut":{type:"boolean",group:"",defaultValue:false},"isGeoPie":{type:"boolean",group:"",defaultValue:false,deprecated:true},"valign":{type:"sap.viz.ui5.types.Pie_valign",group:"",defaultValue:sap.viz.ui5.types.Pie_valign.top,deprecated:true},"drawingEffect":{type:"sap.viz.ui5.types.Pie_drawingEffect",group:"",defaultValue:sap.viz.ui5.types.Pie_drawingEffect.normal},"plotScale":{type:"float",group:"",defaultValue:1,deprecated:true}},aggregations:{"animation":{type:"sap.viz.ui5.types.Pie_animation",multiple:false},"toolTip":{type:"sap.viz.ui5.types.Pie_tooltip",multiple:false}}}});
sap.viz.ui5.types.Pie.prototype.getAnimation=function(){return this._getOrCreate("animation")};
sap.viz.ui5.types.Pie.prototype.getToolTip=function(){return this._getOrCreate("toolTip")}
