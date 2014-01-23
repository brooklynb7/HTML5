/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.mvc.ViewRenderer");sap.ui.core.mvc.ViewRenderer={};
sap.ui.core.mvc.ViewRenderer.addDisplayClass=function(r,c){if(c.getDisplayBlock()||(c.getWidth()==="100%"&&c.getHeight()==="100%")){r.addClass("sapUiViewDisplayBlock")}};
