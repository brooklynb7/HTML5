/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.makit.ValueAxis");jQuery.sap.require("sap.makit.library");jQuery.sap.require("sap.makit.Axis");sap.makit.Axis.extend("sap.makit.ValueAxis",{metadata:{library:"sap.makit",properties:{"min":{type:"string",group:"Misc",defaultValue:null},"max":{type:"string",group:"Misc",defaultValue:null}}}});
/*!
 * @copyright@
 */

sap.makit.ValueAxis.prototype.init=function(){this.setShowGrid(true);this.setShowPrimaryLine(false)};
