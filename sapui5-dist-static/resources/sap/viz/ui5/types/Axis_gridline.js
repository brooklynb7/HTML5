/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.types.Axis_gridline");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Axis_gridline",{metadata:{library:"sap.viz",properties:{"visible":{type:"boolean",group:"",defaultValue:true},"showFirstLine":{type:"boolean",group:"",defaultValue:false,deprecated:true},"showLastLine":{type:"boolean",group:"",defaultValue:false,deprecated:true},"type":{type:"sap.viz.ui5.types.Axis_gridline_type",group:"",defaultValue:sap.viz.ui5.types.Axis_gridline_type.line},"color":{type:"string",group:"",defaultValue:'#d8d8d8'},"size":{type:"string",group:"",defaultValue:'1'}}}});
