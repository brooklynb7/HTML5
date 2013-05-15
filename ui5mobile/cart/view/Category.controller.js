sap.ui.controller("view.Category", {

	onInit : function() {
	},
	
	onBeforeShow : function(evt) {
		if ("to" === evt.direction) {
			this.getView().page.setTitle(evt.data.categoryName);
			// only show products of the current category
			var view = this.getView();
			var binding = view.productList.getBinding("items");
			if (binding !== undefined) {
				var id = evt.data.categoryId;
				var filter = new sap.ui.model.Filter("category", sap.ui.model.FilterOperator.EQ, id);
				binding.filter([filter]);
			}
		}
	},
	
	productListTap : function(evt) {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", {
			id : "Product",
			data : {
				context : evt.getSource().getBindingContext() 
			}
		});
	},
	
	navButtonTap : function(evt) { 
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "back");
	},
	
	toCartButtonTap : function() {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", {
			id : "Cart"
		});
	}
}); 