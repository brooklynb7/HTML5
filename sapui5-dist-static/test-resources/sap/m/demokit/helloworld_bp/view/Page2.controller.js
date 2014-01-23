sap.ui.controller("view.Page2", {

	onInit : function() {
	},
	navButtonPress : function(evt) { 
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "back");
	}

});