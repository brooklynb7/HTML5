/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.charts.ClusterListItem");jQuery.sap.require("sap.ca.ui.library");jQuery.sap.require("sap.m.ListItemBase");sap.m.ListItemBase.extend("sap.ca.ui.charts.ClusterListItem",{metadata:{library:"sap.ca.ui",properties:{"title":{type:"string",group:"Misc",defaultValue:null},"items":{type:"object",group:"Data",defaultValue:null}}}});jQuery.sap.require("sap.m.ListItemBase");
sap.ca.ui.charts.ClusterListItem.prototype.init=function(){sap.m.ListItemBase.prototype.init.apply(this,arguments);this.addStyleClass("sapCaUiCLI")};
