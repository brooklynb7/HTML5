/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.IconRenderer");sap.ui.core.IconRenderer={};
sap.ui.core.IconRenderer.render=function(r,c){if(!c.getVisible()){return}var i=sap.ui.core.IconPool.getIconInfo(c.getSrc()),w=c.getWidth(),h=c.getHeight(),C=c.getColor(),b=c.getBackgroundColor(),s=c.getSize(),t=c.getTooltip_AsString(),T=(!!sap.ui.Device.browser.internet_explorer&&sap.ui.Device.browser.version<9),a=c.getDecorative()?-1:0;r.write("<span");r.writeControlData(c);r.writeAttribute("tabindex",a);if(t){r.writeAttributeEscaped("title",t)}if(i){if(!T){r.writeAttribute("data-sap-ui-icon-content",i.content)}r.addStyle("font-family","'"+i.fontFamily+"'")}if(w){r.addStyle("width",w)}if(h){r.addStyle("height",h);r.addStyle("line-height",h)}if(C){r.addStyle("color",C)}if(b){r.addStyle("background-color",b)}if(s){r.addStyle("font-size",s)}r.writeStyles();r.addClass("sapUiIcon");if(i&&!i.skipMirroring){r.addClass("sapUiIconMirrorInRTL")}if(c.hasListeners("press")||c.hasListeners("tap")){r.addClass("sapMPointer")}r.writeClasses();r.write(">");if(i&&T){r.write(i.content)}r.write("</span>")};
