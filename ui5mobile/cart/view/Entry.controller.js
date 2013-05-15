sap.ui.controller("view.Entry", {

	onInit : function() {
		// kind of ugly: cart & entry view need to share the same model
		// named models are no solution as the named model cannot do aggregation binding
		this.getView().setModel(app.ref.CartView.getModel()); 
	},

	onBeforeShow : function(evt) {
		if (evt.data.context)
			this.getView().setBindingContext(evt.data.context);
	},

	navButtonTap : function(evt) {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "back");
	}
});