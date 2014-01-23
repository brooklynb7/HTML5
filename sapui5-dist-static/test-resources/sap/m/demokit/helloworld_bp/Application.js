jQuery.sap.declare("Application");
jQuery.sap.require("sap.ui.app.Application");

sap.ui.app.Application.extend("Application", {

	init : function() {
		// set global models
		var imgModel = new sap.ui.model.json.JSONModel("model/img.json");
		var langModel = new sap.ui.model.resource.ResourceModel({bundleName:"i18n.i18n", bundleLocale:"en"});
		sap.ui.getCore().setModel(imgModel, "img");
		sap.ui.getCore().setModel(langModel, "i18n");
	},

	main : function() {
		// create app view and put to html root element
		var root = this.getRoot();
		sap.ui.jsview("app", "view.App").placeAt(root);
	}
});