/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.LinkRenderer");sap.ui.commons.LinkRenderer={};
sap.ui.commons.LinkRenderer.render=function(R,l){var a=R,r=sap.ui.commons.LinkRenderer;if(!l.getVisible()){return}a.write("<a");a.writeControlData(l);a.writeAccessibilityState(l);if(!l.getEnabled()){a.addClass("sapUiLnkDsbl");a.writeAttribute("disabled","true")}else{a.addClass("sapUiLnk")}a.writeClasses();if(l.getTooltip_AsString()){a.writeAttributeEscaped("title",l.getTooltip_AsString())}if(l.getHref()){a.writeAttributeEscaped("href",l.getHref())}else{a.writeAttribute("href","javascript:void(0);")}if(l.getTarget()){a.writeAttributeEscaped("target",l.getTarget())}if(!l.getEnabled()){a.writeAttribute("tabIndex","-1")}else{a.writeAttribute("tabIndex","0")}if(l.getWidth()){a.addStyle("width",l.getWidth())}a.writeStyles();a.write(">");if(l.getText()){a.writeEscaped(l.getText())}a.write("</a>")};
