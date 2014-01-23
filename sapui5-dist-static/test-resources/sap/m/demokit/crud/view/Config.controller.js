sap.ui.controller("view.Config", {

	onInit : function() {
		var model = new sap.ui.model.json.JSONModel({
			open : true,
			mode : null
		});
		sap.ui.getCore().setModel(model, "config");
	},
	
	buttonStdPress : function(evt) {
		this.navTo("std");
	},
	
	buttonQuickDelPress : function(evt) {
		this.navTo("quickDel");
	},
	
	buttonBatchPress : function(evt) {
		this.navTo("batch");
	},
	
	navTo : function(mode) {
		this.getView().getModel("config").setData({
			open : false,
			mode : mode
		});
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", {
			id : "Home"
		});
	}
});