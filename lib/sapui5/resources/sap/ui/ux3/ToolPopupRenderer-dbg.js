/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides default renderer for the sap.ui.ux3.ToolPopup
jQuery.sap.declare("sap.ui.ux3.ToolPopupRenderer");

/**
 * @class ToolPopup renderer.
 * @static
 */
sap.ui.ux3.ToolPopupRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.ux3.ToolPopupRenderer.render = function(rm, oControl) {
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
	var sId = oControl.getId();

	// write the HTML into the render manager
	rm.write("<div");
	rm.writeControlData(oControl);
	rm.addClass("sapUiUx3TP");
	rm.addClass("sapUiInverted-CTX");
	rm.writeClasses();
	rm.write(" aria-labelledby='", sId, "-title ", sId, "-acc' role='dialog'>"); // div element

	// since the left arrow is the default value this arrow is rendered and later replaced if necessary
	rm.write("<div id='" + sId + "-arrow' class='sapUiUx3TPArrow sapUiUx3TPArrowLeft'></div>");
	rm.write("<span style='display:none;' id='", sId, "-acc'>", rb.getText("DIALOG_CLOSE_HELP"), "</span>");

	// write a focusable element that can be focused if there is no focusable element within the control
	rm.write('<span id="' + sId + '-focusable'+'" tabindex="0" class="sapUiUxTPFocus">');
	// there must be something to focus -> empty elements don't get a focus
	var sSrc = sap.ui.resource('sap.ui.core', 'themes/base/img/1x1.gif');
	rm.write('<img src="' + sSrc + '">');
	rm.write('</span>');

	// title
	var sTitle = oControl.getTitle();
	if (sTitle && (sTitle.length > 0)) {
		rm.write("<h1 id='" + sId + "-title'>" + sTitle + "</h1>");
		rm.write("<hr/>");
	} else { // for accessibility reasons use tooltip as hidden label
		var sTooltip = oControl.getTooltip_AsString();
		if (sTooltip) {
			rm.write("<h1 id='" + sId + "-title' style='display:none;'>" + sTooltip + "</h1>");
		}
	}

	// content
	var aChildren = oControl.getContent();
	for (var i = 0; i < aChildren.length; i++) {
		rm.renderControl(aChildren[i]);
	}

	// button row
	aChildren = oControl.getButtons();
	if (aChildren.length > 0) {
		rm.write("<hr/><div class='sapUiUx3TPBtnRow'>");
		for (var i = 0; i < aChildren.length; i++) {
			rm.renderControl(aChildren[i].addStyleClass("sapUiUx3TPBtn"));
		}
		rm.write("</div>");
	}

	rm.write("</div>");
};