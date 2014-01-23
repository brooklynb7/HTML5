sap.ui.controller("view.Home", {

	onInit : function() {
	},
	buttonTap : function(evt) {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", { 
			id : "Page2",
			data : {
				context : evt.getSource().getBindingContext() 
			}
		});
	},
});