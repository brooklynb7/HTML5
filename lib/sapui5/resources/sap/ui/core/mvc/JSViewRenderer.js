/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.mvc.JSViewRenderer");sap.ui.core.mvc.JSViewRenderer={};
sap.ui.core.mvc.JSViewRenderer.render=function(r,c){var a=r;a.write("<div");a.writeControlData(c);a.addClass("sapUiView");a.addClass("sapUiJSView");a.addStyle("width",c.getWidth());a.addStyle("height",c.getHeight());a.writeStyles();a.writeClasses();a.write(">");var b=c.getContent();if(b){if(jQuery.isArray(b)){for(var i=0;i<b.length;i++){a.renderControl(b[i])}}else if(b){a.renderControl(b)}}a.write("</div>")};
