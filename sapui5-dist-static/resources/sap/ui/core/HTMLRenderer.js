/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.HTMLRenderer");sap.ui.core.HTMLRenderer={render:function(r,c){var u=c.getUIArea();r.write("<div id=\"sap-ui-dummy-"+c.getId()+"\" style=\"display:none\">");r.write("</div>")}};
