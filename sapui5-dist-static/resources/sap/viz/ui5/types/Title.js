/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.types.Title");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Title",{metadata:{library:"sap.viz",properties:{"visible":{type:"boolean",group:"",defaultValue:false},"text":{type:"string",group:"",defaultValue:'null'},"alignment":{type:"sap.viz.ui5.types.Title_alignment",group:"",defaultValue:sap.viz.ui5.types.Title_alignment.center}},aggregations:{"layout":{type:"sap.viz.ui5.types.Title_layout",multiple:false,deprecated:true}}}});
sap.viz.ui5.types.Title.prototype.getLayout=function(){return this._getOrCreate("layout")}
