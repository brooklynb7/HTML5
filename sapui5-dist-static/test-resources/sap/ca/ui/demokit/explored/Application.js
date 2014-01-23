jQuery.sap.declare("Application");

jQuery.sap.require("sap.ui.app.Application");
jQuery.sap.require("util.Navigation");

sap.ui.app.Application.extend("Application", {

	init : function () {

		// set global models
		var model = new sap.ui.model.json.JSONModel(util.Navigation);
		sap.ui.getCore().setModel(model);
		
		// set device model
		var deviceModel = new sap.ui.model.json.JSONModel({
			listMode : (jQuery.device.is.phone) ? "None" : "SingleSelectMaster",
			listItemType : (jQuery.device.is.phone) ? "Active" : "Inactive"
		});
		sap.ui.getCore().setModel(deviceModel, "device");
	},

	main : function () {

		// create app view and put to html root element
		var root = this.getRoot();
		sap.ui.jsview("app", "views.app").placeAt(root);
	}
});
