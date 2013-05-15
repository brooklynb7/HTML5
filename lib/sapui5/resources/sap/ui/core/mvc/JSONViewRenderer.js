/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.mvc.JSONViewRenderer");sap.ui.core.mvc.JSONViewRenderer={};
sap.ui.core.mvc.JSONViewRenderer.render=function(r,c){var a=r;a.write("<div");a.writeControlData(c);a.addClass("sapUiView");a.addClass("sapUiJSONView");a.addStyle("width",c.getWidth());a.addStyle("height",c.getHeight());a.writeStyles();a.writeClasses();a.write(">");var b=c.getContent();if(b){if(b.length&&!(b instanceof sap.ui.core.Control)){for(var i=0;i<b.length;i++){a.renderControl(b[i])}}else{a.renderControl(c.getContent())}}a.write("</div>")};
