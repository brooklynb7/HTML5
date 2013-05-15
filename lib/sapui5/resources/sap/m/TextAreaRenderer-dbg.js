/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.TextAreaRenderer");

/**
 * @class TextArea renderer.
 * @static
 */
sap.m.TextAreaRenderer = {};


/**
 * Renders the HTML for the given control, using the provided
 * {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager}
 *            oRm the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oTextArea an object representation of the control that should be
 *            rendered
 */

sap.m.TextAreaRenderer.render = function(oRm, oTextArea) {
	// To inherit all styles from input
	var sRootClass = "sapMInput";
	
	// if not visible then do not render	
	if (!oTextArea.getVisible()) {
		return;
	}
	
	// write control data for parent div
	oRm.write("<div ");
	oRm.writeControlData(oTextArea);
	!oTextArea.getEnabled() && oRm.addClass(sRootClass + "Disabled");
	oTextArea.getValueState() != "None" && oRm.addClass(sRootClass + oTextArea.getValueState());
	oTextArea.getWidth() && oRm.addStyle("width", oTextArea.getWidth()) && oRm.writeStyles();
	oRm.addClass(sRootClass + " sapMTextArea");
	oRm.writeClasses();
	oRm.write(">");
	
	// write attributes
	oRm.write("<textarea id=" + oTextArea.getId() + "-inner");
	oRm.writeAttribute("rows", oTextArea.getRows());
	oRm.writeAttribute("cols", oTextArea.getCols());
	!oTextArea.getEnabled() && oRm.writeAttribute("disabled", true);
	oTextArea.getMaxLength() > 0 && oRm.writeAttribute("maxlength", oTextArea.getMaxLength());
	oTextArea.getPlaceholder() && oRm.writeAttributeEscaped("placeholder", oTextArea.getPlaceholder());
	oTextArea.getWrapping() && oTextArea.getWrapping() != "None" && oRm.writeAttribute("wrap", oTextArea.getWrapping());
	
	// do styling
	oRm.addClass(sRootClass + "Inner sapMTextAreaInner");
	oTextArea.getValueState() != "None" && oRm.addClass(sRootClass + oTextArea.getValueState() + "Inner");
	oTextArea.getHeight() && oRm.addStyle("height", oTextArea.getHeight());
	oTextArea.getWidth() && oRm.addStyle("width", "100%");
	oRm.writeClasses();
	oRm.writeStyles();	
	oRm.write(">");
	oRm.writeEscaped(oTextArea.getValue());
	oRm.write("</textarea></div>");
};
