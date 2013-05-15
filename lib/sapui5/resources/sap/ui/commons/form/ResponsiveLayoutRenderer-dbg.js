/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.ui.commons.form.FormLayoutRenderer");
jQuery.sap.declare("sap.ui.commons.form.ResponsiveLayoutRenderer");

/**
 * @class ResponsiveLayout renderer.
 * @static
 */
sap.ui.commons.form.ResponsiveLayoutRenderer = sap.ui.core.Renderer.extend(sap.ui.commons.form.FormLayoutRenderer);


sap.ui.commons.form.ResponsiveLayoutRenderer.getMainClass = function(){
	return "sapUiFormResLayout";
};

sap.ui.commons.form.ResponsiveLayoutRenderer.renderContainers = function(rm, oLayout, oForm){

	var aContainers = oForm.getFormContainers();
	var iLength = aContainers.length;

	// special case: only one container -> do not render an outer ResponsiveFlowLayout
	if (iLength > 1) {
		//render ResponsiveFlowLayout
		rm.renderControl(oLayout._mainRFLayout);
	}else if(oLayout.mContainers[aContainers[0].getId()][0]){
		// render panel
		rm.renderControl(oLayout.mContainers[aContainers[0].getId()][0]);
	}else{
		// render ResponsiveFlowLayout of container
		rm.renderControl(oLayout.mContainers[aContainers[0].getId()][1]);
	}

};
