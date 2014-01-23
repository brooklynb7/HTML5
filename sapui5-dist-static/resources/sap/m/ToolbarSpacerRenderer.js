/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.ToolbarSpacerRenderer");jQuery.sap.require("sap.ui.core.Renderer");sap.m.ToolbarSpacerRenderer={};
sap.m.ToolbarSpacerRenderer.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapMTBSpacer");var w=c.getWidth();if(w){r.addStyle("width",c.getWidth())}else{r.addClass(sap.m.ToolbarSpacer.flexClass)}r.writeStyles();r.writeClasses();r.write("></div>")};
