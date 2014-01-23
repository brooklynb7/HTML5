/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.HierarchicalSelectDialogItem");jQuery.sap.require("sap.ca.ui.library");jQuery.sap.require("sap.ui.core.Item");sap.ui.core.Item.extend("sap.ca.ui.HierarchicalSelectDialogItem",{metadata:{library:"sap.ca.ui",properties:{"title":{type:"string",group:"Appearance",defaultValue:null},"entityName":{type:"string",group:"Data",defaultValue:null}},aggregations:{"listItemTemplate":{type:"sap.m.ListItemBase",multiple:false}}}});
