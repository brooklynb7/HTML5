jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("view.LrBCard", {

	onInit : function() {
		this.getView().addEventDelegate({
			// not added the controller as delegate to avoid controller functions with similar names as the events
			onBeforeShow : jQuery.proxy(function(evt) {
				this.onBeforeShow(evt);
			}, this)
		});
	},
	
	onBeforeShow : function(evt) {
		if (evt.data.context) {
			this.getView().setBindingContext(evt.data.context, "lr");
		} 
	}, 
	
	back : function(evt) {
		sap.ui.getCore().getEventBus().publish("nav", "back", {});
	},
	
	sendMessage : function(evt) {
		sap.m.MessageToast.show('Message Send');
	},
	
	addToContacts : function(evt) {
		sap.m.MessageToast.show('Added to Contacts');
	}
});