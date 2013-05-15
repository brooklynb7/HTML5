/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.Togglebutton
jQuery.sap.declare("sap.ui.commons.ToggleButtonRenderer");
jQuery.sap.require("sap.ui.commons.ButtonRenderer");
jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class ToggleButton renderer.
 * @author D040134
 * @static
 */

sap.ui.commons.ToggleButtonRenderer = sap.ui.core.Renderer.extend(sap.ui.commons.ButtonRenderer);

/**
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager currently rendering this control
 * @param {sap.ui.commons.ToggleButton}
 *            oToggleButton the ToggleButton that should be rendered
 * @private
 * P.S.: "renderButtonAttributes" is a reserved/hard-coded Button extending function!
 *       It is used to allow extensions to display content after the actual button content.
 */
sap.ui.commons.ToggleButtonRenderer.renderButtonAttributes = function(rm, oToggleButton) {
	rm.addClass("sapUiToggleBtn");
	if (oToggleButton.getPressed()){
		rm.addClass("sapUiToggleBtnPressed");
		rm.writeAttribute('aria-pressed', true);
	} else {
		rm.writeAttribute('aria-pressed', false);
	}
};


/**
 * Function called by ToggleButton control to enable Pressed state.
 */
sap.ui.commons.ToggleButtonRenderer.onactivePressed = function(oToggleButton) {
	jQuery.sap.byId(oToggleButton.getId()).addClass("sapUiToggleBtnPressed").attr('aria-pressed', true);
};

/**
 * Function called by button control to disable Pressed state.
 */
sap.ui.commons.ToggleButtonRenderer.ondeactivePressed = function(oToggleButton) {
	jQuery.sap.byId(oToggleButton.getId()).removeClass("sapUiToggleBtnPressed").attr('aria-pressed', false);
};

/**
 * Returns the icon URI for the given button state
 * @private
 */
sap.ui.commons.ToggleButtonRenderer._getIconForState = function(oButton, sState) {
	switch(sState){
		case "mouseout":
		case "focus":
		case "blur":
		case "base":
			return oButton.getPressed() && oButton.getIconSelected() ? oButton.getIconSelected() : oButton.getIcon();
		case "active":
			var sIcon = oButton.getIconSelected();
			return sIcon ? sIcon : oButton.getIcon();
		case "mouseover":
		case "deactive":
			var sIcon = oButton.getIconHovered();
			return sIcon ? sIcon : (oButton.getPressed() && oButton.getIconSelected() ? oButton.getIconSelected() : oButton.getIcon());
	}
	return oButton.getIcon();
};
