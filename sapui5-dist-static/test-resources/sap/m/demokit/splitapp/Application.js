jQuery.sap.declare("Application");
jQuery.sap.require("sap.ui.app.Application");

sap.ui.app.Application.extend("Application", {

	init: function() {
		// load the global data model
		var oJSONDataModel = new sap.ui.model.json.JSONModel("model/data.json");
		sap.ui.getCore().setModel(oJSONDataModel);
		
		// load the global image source model
		var oImgModel = new sap.ui.model.json.JSONModel("model/img.json");
		sap.ui.getCore().setModel(oImgModel, "img");
	},
	
	main: function() {
		// create app view and put to html root element
        var root = this.getRoot();
        sap.ui.jsview("app", "view.App").placeAt(root);
	}

});