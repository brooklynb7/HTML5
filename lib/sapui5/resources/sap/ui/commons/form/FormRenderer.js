/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.form.FormRenderer");sap.ui.commons.form.FormRenderer={};
sap.ui.commons.form.FormRenderer.render=function(r,f){var a=r;var l=f.getLayout();a.write("<div");a.writeControlData(f);a.addClass("sapUiForm");if(f.getWidth()){a.addStyle("width",f.getWidth())}if(f.getTooltip_AsString()){a.writeAttributeEscaped('title',f.getTooltip_AsString())}a.writeClasses();a.writeStyles();var A={role:"form"};var t=f.getTitle();if(t){var i="";if(typeof t=="string"){i=f.getId()+"--title"}else{i=t.getId()}A["describedby"]=i}a.writeAccessibilityState(f,A);a.write(">");if(l){a.renderControl(l)}a.write("</div>")};
