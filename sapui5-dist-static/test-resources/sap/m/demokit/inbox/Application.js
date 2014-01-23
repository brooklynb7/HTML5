jQuery.sap.declare("Application");
jQuery.sap.require("sap.ui.app.Application");

sap.ui.app.Application.extend("Application", {

	init : function() {
		
		// set global models
		var imgModel = new sap.ui.model.json.JSONModel("model/img.json");
		var lrModel = new sap.ui.model.json.JSONModel("model/leaveRequest.json");
		var poModel = new sap.ui.model.json.JSONModel("model/purchaseOrder.json");
		var numberModel = new sap.ui.model.json.JSONModel("model/number.json");
		sap.ui.getCore().setModel(imgModel, "img");
		sap.ui.getCore().setModel(lrModel, "lr");
		sap.ui.getCore().setModel(poModel, "po");
		sap.ui.getCore().setModel(numberModel, "number");
	},

	main : function() {
		
		// create app view and put to html root element
		var root = this.getRoot();
		sap.ui.jsview("app", "view.App").placeAt(root);
	}
});