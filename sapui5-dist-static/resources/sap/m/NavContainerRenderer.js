/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.NavContainerRenderer");sap.m.NavContainerRenderer={};
sap.m.NavContainerRenderer.render=function(r,c){if(!c.getVisible()){return}r.write("<div");r.writeControlData(c);r.addClass("sapMNav");r.addStyle("width",c.getWidth());r.addStyle("height",c.getHeight());if(this.renderAttributes){this.renderAttributes(r,c)}r.writeClasses();r.writeStyles();var t=c.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t)}r.write(">");if(this.renderBeforeContent){this.renderBeforeContent(r,c)}var C=c.getCurrentPage();if(C){r.renderControl(C)}r.write("</div>")};
