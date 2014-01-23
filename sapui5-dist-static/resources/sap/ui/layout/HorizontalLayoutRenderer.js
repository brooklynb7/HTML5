/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.layout.HorizontalLayoutRenderer");sap.ui.layout.HorizontalLayoutRenderer={};
sap.ui.layout.HorizontalLayoutRenderer.render=function(r,c){if(!c.getVisible()){return}var a=r;var n=!c.getAllowWrapping();a.write("<div");a.writeControlData(c);a.addClass("sapUiHLayout");if(n){a.addClass("sapUiHLayoutNoWrap")}a.writeClasses();a.write(">");var C=c.getContent();for(var i=0;i<C.length;i++){if(n){a.write("<div class='sapUiHLayoutChildWrapper'>")}a.renderControl(C[i]);if(n){a.write("</div>")}}a.write("</div>")};
