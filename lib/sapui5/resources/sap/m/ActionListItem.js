/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.ActionListItem");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.m.ListItemBase");sap.m.ListItemBase.extend("sap.m.ActionListItem",{metadata:{library:"sap.m",properties:{"text":{type:"string",group:"Misc",defaultValue:null}}}});jQuery.sap.require("sap.ui.core.EnabledPropagator");
sap.m.ActionListItem.prototype.init=function(){this.setType(sap.m.ListType.Active);sap.m.ListItemBase.prototype.init.apply(this,arguments)};
