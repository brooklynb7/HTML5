jQuery.sap.declare("sap.ca.ui.utils.resourcebundle");
jQuery.sap.require("sap.ui.model.resource.ResourceModel");

//dialog interface for the applications
sap.ca.ui.utils.resourcebundle = (function() {
 
	var oI18nModel = new sap.ui.model.resource.ResourceModel({
		bundleUrl: jQuery.sap.getModulePath("sap.ca.ui.i18n.i18n", ".properties"),
	});

	sap.ui.getCore().setModel(oI18nModel, "sap.ca.ui.i18n");

	return oI18nModel.getResourceBundle();
}());