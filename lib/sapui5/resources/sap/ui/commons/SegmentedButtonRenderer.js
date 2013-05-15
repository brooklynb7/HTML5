/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.SegmentedButtonRenderer");sap.ui.commons.SegmentedButtonRenderer={};
sap.ui.commons.SegmentedButtonRenderer.render=function(r,c){var a=r;if(!c.getVisible()){return}a.write("<span");a.writeControlData(c);a.addClass("sapUiSegmentedButton");a.writeClasses();a.writeAccessibilityState(c,{role:"radiogroup",disabled:!c.getEnabled()});a.write(">");this.renderButtons(a,c);a.write("</span>")};
sap.ui.commons.SegmentedButtonRenderer.renderButtons=function(r,c){var a=r,b=c.getButtons();jQuery.each(b,function(i,B){a.renderControl(B)})};
