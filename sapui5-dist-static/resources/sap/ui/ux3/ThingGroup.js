/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.ThingGroup");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.ui.ux3.ThingGroup",{metadata:{library:"sap.ui.ux3",properties:{"title":{type:"string",group:"Misc",defaultValue:null},"colspan":{type:"boolean",group:"Misc",defaultValue:false}},defaultAggregation:"content",aggregations:{"content":{type:"sap.ui.core.Control",multiple:true,singularName:"content"},"actions":{type:"sap.ui.ux3.ThingGroup",multiple:true,singularName:"action"}}}});
