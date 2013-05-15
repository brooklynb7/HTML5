/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.ui.commons.form.FormRenderer");

/**
 * @class Form renderer.
 * @static
 */
sap.ui.commons.form.FormRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oForm an object representation of the control that should be rendered
 */
sap.ui.commons.form.FormRenderer.render = function(oRenderManager, oForm){

	// convenience variable
	var rm = oRenderManager;
	var oLayout = oForm.getLayout();

	// write only a DIV for the form and let the layout render the rest
	rm.write("<div");
	rm.writeControlData(oForm);
	rm.addClass("sapUiForm");
	if (oForm.getWidth()) {
		rm.addStyle("width", oForm.getWidth());
	}
	if(oForm.getTooltip_AsString()) {
		rm.writeAttributeEscaped('title', oForm.getTooltip_AsString());
	}
	rm.writeClasses();
	rm.writeStyles();

	var mAriaProps = {role: "form"};
	var oTitle = oForm.getTitle();
	if (oTitle) {
		var sId = "";
		if (typeof oTitle == "string") {
			sId = oForm.getId()+"--title";
		} else {
			sId = oTitle.getId();
		}
		mAriaProps["describedby"] = sId;
	}

	rm.writeAccessibilityState(oForm, mAriaProps);

	rm.write(">");

	if (oLayout) {
		// render the layout with the content of this form control
		rm.renderControl(oLayout);
	}

	rm.write("</div>");
};