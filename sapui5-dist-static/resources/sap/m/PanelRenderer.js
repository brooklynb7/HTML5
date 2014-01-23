/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.PanelRenderer");sap.m.PanelRenderer={};
sap.m.PanelRenderer.render=function(r,c){if(!c.getVisible()){return}r.write("<section");r.writeControlData(c);r.addClass("sapMPanel");r.addStyle("width",c.getWidth());r.addStyle("height",c.getHeight());r.writeClasses();r.writeStyles();r.write(">");var h=c.getHeaderText();var H=c.getHeaderToolbar();if(h||H){r.write("<div");r.writeAttribute("id",c.getId()+"-header");r.addClass(H?"sapMTB-Transparent-CTX":"sapMPanelHdr");r.writeClasses();r.write(">");if(H){r.renderControl(H)}else{r.writeEscaped(h)}r.write("</div>")}var I=c.getInfoToolbar();if(I){r.write("<div");r.writeAttribute("id",c.getId()+"-infobar");r.addClass("sapMTB-Info-CTX");r.writeClasses();r.write(">");r.renderControl(I);r.write("</div>")}r.write("<div");r.addClass("sapMPanelContent");r.addClass("sapMPanelBG");r.writeClasses();r.write(">");var C=c.getContent();var l=C.length;for(var i=0;i<l;i++){r.renderControl(C[i])}r.write("</div>");r.write("</section>")};
