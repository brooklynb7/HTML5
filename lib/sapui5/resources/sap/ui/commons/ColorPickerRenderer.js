/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.ColorPickerRenderer");sap.ui.commons.ColorPickerRenderer={};
sap.ui.commons.ColorPickerRenderer.render=function(r,c){r.write("<div");r.writeControlData(c);r.write(">");r.renderControl(c.oMatrix);r.write("</div>")};
