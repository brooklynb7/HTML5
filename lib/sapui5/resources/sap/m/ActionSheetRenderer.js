/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.ActionSheetRenderer");sap.m.ActionSheetRenderer={};
sap.m.ActionSheetRenderer.render=function(r,c){var a=c.getButtons(),i;r.write("<div");r.writeControlData(c);r.addClass("sapMActionSheet");r.writeClasses();r.write(">");for(i=0;i<a.length;i++){c._preProcessActionButton(a[i]);r.renderControl(a[i].addStyleClass("sapMActionSheetButton"))}if(jQuery.device.is.iphone&&c.getShowCancelButton()){r.renderControl(c._getCancelButton())}r.write("</div>")};
