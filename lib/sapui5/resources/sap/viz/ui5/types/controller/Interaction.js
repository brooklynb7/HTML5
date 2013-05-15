/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.types.controller.Interaction");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.controller.Interaction",{metadata:{library:"sap.viz",properties:{"supportedEventNames":{type:"string[]",group:"",defaultValue:['mouseup','mousemove','mouseout','mouseover','touchstart']},"enableMouseMove":{type:"boolean",group:"",defaultValue:true},"enableMouseOver":{type:"boolean",group:"",defaultValue:true},"enableMouseOut":{type:"boolean",group:"",defaultValue:true},"supportLassoEvent":{type:"boolean",group:"",defaultValue:true},"holdSelection":{type:"boolean",group:"",defaultValue:false},"preserveSelectionWhenDragging":{type:"boolean",group:"",defaultValue:false}},aggregations:{"selectability":{type:"sap.viz.ui5.types.controller.Interaction_selectability",multiple:false}}}});
sap.viz.ui5.types.controller.Interaction.prototype.getSelectability=function(){return this._getOrCreate("selectability")}
