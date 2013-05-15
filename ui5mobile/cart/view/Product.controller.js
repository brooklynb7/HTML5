jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("view.Product", {

	onInit : function() {
	},
	
	onBeforeShow : function(evt) {
		if (evt.data.context) {
			this.getView().setBindingContext(evt.data.context);
		} 
	},
	
	addToCartButtonTap : function(evt) {
		var view = this.getView();
		var product = view.getBindingContext().getObject();
		var cartController = app.ref.CartView.getController();
		cartController.addEntry(product);
		sap.m.MessageToast.show('Product added to your shopping cart');
	},
	
	toCartButtonTap : function() {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", {
			id : "Cart"
		});
	},
	
	navButtonTap : function(evt) { 
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "back");
	}
});