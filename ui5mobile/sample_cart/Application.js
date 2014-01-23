jQuery.sap.declare("App");
jQuery.sap.require("sap.ui.app.Application");

sap.ui.app.Application.extend("App", {
	init: function() {
		console && console.log("initail");

		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl: "locale/i18n.properties",
			bundleLocale: "en"
		});
		sap.ui.getCore().setModel(i18nModel, "i18n");

		this.data = new sap.ui.model.json.JSONModel("model/testData.json");
		sap.ui.getCore().setModel(this.data);

		console && console.log(sap.ui.getCore().getModel());
		console && console.log(sap.ui.getCore().getModel("i18n"));
	},

	main: function() {
		console && console.log("main");
	}
});