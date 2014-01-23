sap.ui.controller("view.Home", {

	onInit : function() {
	},
	
	leaveRequestTilePress : function(evt) {
		var bus = sap.ui.getCore().getEventBus();
		var data;
		bus.publish("nav", "to", { 
			id : "SplitAppLr"
		});
	},
	
	purchaseOrderTilePress : function(evt) {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", { 
			id : "SplitAppPo"
		});
	}
});