/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.layout.ResponsiveFlowLayoutRenderer");sap.ui.commons.layout.ResponsiveFlowLayoutRenderer={};(function(){sap.ui.commons.layout.ResponsiveFlowLayoutRenderer.render=function(R,c){R.write("<div");R.writeControlData(c);R.addClass("sapUiRFL");R.writeClasses();R.write(">");r(R,c);R.write("</div>")};var r=function(R,c){var a=c._rows;var I=c.getId();for(var i=0;i<a.length;i++){R.write('<div id="'+I+'-row'+i+'"');R.addClass("sapUiRFLRow");R.writeClasses();R.write(">");for(var j=0;j<a[i].cont.length;j++){var C=a[i].cont[j];R.write('<div id="'+a[i].cont[j].id+'"');R.addClass("sapUiRFLContainer");R.writeClasses();R.addStyle("min-width",C.minWidth+"px");R.writeStyles();R.write(">");R.write("<div");R.write(">");R.renderControl(C.control);R.write("</div>");R.write("</div>")}R.write("</div>")}}}());
