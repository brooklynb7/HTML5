/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.ViewSettingsFilterItem");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.m.ViewSettingsItem");sap.m.ViewSettingsItem.extend("sap.m.ViewSettingsFilterItem",{metadata:{library:"sap.m",properties:{"multiSelect":{type:"boolean",group:"Behavior",defaultValue:true}},aggregations:{"items":{type:"sap.m.ViewSettingsItem",multiple:true,singularName:"item"}}}});
