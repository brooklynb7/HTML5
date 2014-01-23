jQuery.sap.declare("Application");
jQuery.sap.require("sap.ui.app.Application");

sap.ui.app.Application.extend("Application", {

	init : function() {
		// set global models
		var imgModel = new sap.ui.model.json.JSONModel("model/img.json");
		sap.ui.getCore().setModel(imgModel, "img");
	},

	main : function() {
		// create app view and put to html root element
		var root = this.getRoot();
		sap.ui.jsview("App", "view.App").placeAt(root);
	}
});