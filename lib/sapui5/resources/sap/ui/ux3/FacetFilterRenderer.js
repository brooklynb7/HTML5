/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.FacetFilterRenderer");sap.ui.ux3.FacetFilterRenderer={};
sap.ui.ux3.FacetFilterRenderer.render=function(r,c){if(!c.getVisible()){return}var a=r;a.write("<div");a.writeControlData(c);a.addClass("sapUiUx3FacetFilter");a.writeClasses();a.write(">");var l=c.getLists();if(l){for(var i=0;i<l.length;i++){l[i].sWidth=100/l.length+"%";a.renderControl(l[i])}}a.write("</div>")};
