sap.ui.controller("views.control.GrowingTileContainer", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf views.control.GrowingTileContainer
*/
	onInit: function() {
		jQuery.sap.require("sap.ui.app.MockServer");

		var oMockServer = new sap.ui.app.MockServer({
			rootUri : "/sap/hierarchicalData/"});
		oMockServer.simulate("views/control/models/hierarchicalSelectDialogMetadata.xml");
		oMockServer.start();

		var m = new sap.ui.model.odata.ODataModel("/sap/hierarchicalData/", true);
		this.getView().setModel(m, "odata");

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf views.control.GrowingTileContainer
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf views.control.GrowingTileContainer
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf views.control.GrowingTileContainer
*/
//	onExit: function() {
//
//	}

});