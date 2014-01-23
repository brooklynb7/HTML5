jQuery.sap.require("util.Formatter");

sap.ui.controller("view.Category", {

	onInit : function () {
		
		// register for onBeforeShow events for 'pages'
		this.getView().addEventDelegate({
			onBeforeShow : jQuery.proxy(function (evt) {
				this.onBeforeShow(evt);
			}, this)
		});
	},
	
	onBeforeShow : function (evt) {
		if ("to" === evt.direction) {
			this.getView().byId("page").setTitle(evt.data.categoryName);
			// only show products of the current category
			var binding = this.getView().byId("productList").getBinding("items");
			if (binding !== undefined) {
				var id = evt.data.categoryId;
				var filter = new sap.ui.model.Filter("Category", sap.ui.model.FilterOperator.EQ, id);
				binding.filter([filter]);
			}
		}
	},
	
	handleProductListSelect : function (evt) {
		this._showProduct(evt.getParameter("listItem"));
	},
	
	handleProductListItemPress : function (evt) {
		this._showProduct(evt.getSource());
	},
	
	_showProduct : function (item) {
		
		// nav to page (w/o parameter)
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", {
			id : "Product"
		});
		
		// tell detail to update
		bus.publish("app", "RefreshDetail", {
			context : item.getBindingContext()
		});
	},
	
	handleNavButtonPress : function (evt) {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "back");
	},
	
	handleCartButtonPress : function () {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", {
			id : "Cart"
		});
	}
}); 