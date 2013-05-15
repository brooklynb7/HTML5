/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.TextRenderer");jQuery.sap.require("sap.ui.core.Renderer");sap.m.TextRenderer={};
sap.m.TextRenderer.render=function(r,t){if(!t.getVisible()){return}var a=r;if(!t.getWrapping()){a.addStyle("white-space","nowrap");a.addStyle("overflow","hidden");a.addStyle("text-overflow","ellipsis")}if(t.getWidth()&&t.getWidth()!=''){a.addStyle("width",t.getWidth())}a.write("<span");a.writeControlData(t);a.addClass("sapMText");var T=t.getTextDirection();if(T){a.writeAttribute("dir",T)}var o=t.getTextAlign();if(o){a.addStyle("text-align",sap.m.TextRenderer.getTextAlign(o,T))}a.writeClasses();a.writeStyles();a.write(">");a.writeEscaped(t.getText(),true);a.write("</span>")};
sap.m.TextRenderer.getTextAlign=sap.ui.core.Renderer.getTextAlign;
