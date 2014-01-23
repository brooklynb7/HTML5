sap.ui.controller("view.LrCalendar", {

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
	}
});