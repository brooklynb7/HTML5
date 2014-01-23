/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides default renderer for View
jQuery.sap.declare("sap.ui.core.mvc.ViewRenderer");

/**
 * @class View renderer.
 * @static
 */
sap.ui.core.mvc.ViewRenderer = {
};

sap.ui.core.mvc.ViewRenderer.addDisplayClass = function(rm, oControl) {
	if (oControl.getDisplayBlock() || (oControl.getWidth() === "100%" && oControl.getHeight() === "100%")) {
		rm.addClass("sapUiViewDisplayBlock");
	}
};