/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.DataSetSimpleViewRenderer");sap.ui.ux3.DataSetSimpleViewRenderer={};
sap.ui.ux3.DataSetSimpleViewRenderer.render=function(r,c){var a=r;a.write("<div");a.writeControlData(c);a.addClass("sapUiUx3DSSV");if(c.getFloating()){if(c.getResponsive()){a.addClass("sapUiUx3DSSVResponsive")}else{a.addClass("sapUiUx3DSSVFloating")}}else{a.addClass("sapUiUx3DSSVSingleRow")}a.writeClasses();a.write(">");if(c.items){for(var i=0;i<c.items.length;i++){a.write("<div");a.addClass("sapUiUx3DSSVItem");if(c.getFloating()){a.addClass("sapUiUx3DSSVFlow");if(c.getItemMinWidth()>0){a.writeAttribute("style","min-width:"+c.getItemMinWidth()+"px")}}if(c.isItemSelected(c.items[i])){a.addClass("sapUiUx3DSSVSelected")}a.writeClasses();a.writeElementData(c.items[i]);a.write(">");a.renderControl(c.items[i]._getTemplate());a.write("</div>")}}a.write("</div>")};
