jQuery.sap.declare("Application");
jQuery.sap.require("sap.ui.app.Application");

sap.ui.app.Application.extend("Application", {

	init : function() {
		// set global models
		var imgModel = new sap.ui.model.json.JSONModel("model/img.json");
		var dataModel = new sap.ui.model.json.JSONModel("model/mock.json");
		sap.ui.getCore().setModel(imgModel, "img");
		sap.ui.getCore().setModel(dataModel, "data");
	},

	main : function() {
		// create app view and put to html root element
		var root = this.getRoot();
		sap.ui.jsview("app", "view.App").placeAt(root);
	}
});