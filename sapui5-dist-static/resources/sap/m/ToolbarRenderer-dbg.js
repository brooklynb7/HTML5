/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.m.ToolbarRenderer");
jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class Toolbar renderer.
 * @static
 */
sap.m.ToolbarRenderer = {};

sap.m.ToolbarRenderer.render = function(rm, oControl) {
	if (!oControl.getVisible()) {
		return;
	}

	rm.write("<div");
	rm.writeControlData(oControl);
	rm.addClass("sapMTB");

	if (!oControl.hasFlexBoxSupport) {
		rm.addClass("sapMTBNoFlex");
	}
	if (!jQuery.support.newFlexBoxLayout) {
		rm.addClass("sapMTBOldFlex");
	}

	if (oControl.getActive()) {
		rm.addClass("sapMTBActive");
		rm.writeAttribute("tabindex", "0");
	} else {
		rm.addClass("sapMTBInactive");
		rm.writeAttribute("tabindex", "-1");
	}

	var sWidth = oControl.getWidth();
	var sHeight = oControl.getHeight();
	sWidth && rm.addStyle("width", sWidth);
	sHeight && rm.addStyle("height", sHeight);

	rm.writeClasses();
	rm.writeStyles();
	rm.write(">");

	oControl.getContent().forEach(function(oContent) {
		rm.renderControl(oContent);
	});

	rm.write("</div>");
};