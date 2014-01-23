/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.makit.CategoryAxis");jQuery.sap.require("sap.makit.library");jQuery.sap.require("sap.makit.Axis");sap.makit.Axis.extend("sap.makit.CategoryAxis",{metadata:{library:"sap.makit",properties:{"sortOrder":{type:"sap.makit.SortOrder",group:"Misc",defaultValue:sap.makit.SortOrder.None},"displayLastLabel":{type:"boolean",group:"Misc",defaultValue:false},"displayAll":{type:"boolean",group:"Misc",defaultValue:true}}}});
/*!
 * @copyright@
 */

sap.makit.CategoryAxis.prototype.init=function(){this.setShowGrid(false);this.setShowPrimaryLine(true)};
