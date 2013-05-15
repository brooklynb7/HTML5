jQuery.sap.require("sap.ui.base.Event");

sap.ui.controller("view.Home", {

	onInit : function() {
		this.search();
	},
	
	searchLiveChange : function(evt) {
		this.search();
	},
	
	search : function() {
		
		var view = this.getView();
		var searchValue = view.searchField.getValue();
		var showSearch = searchValue.length !== 0;
		
		// switch visibility of lists
		view.productList.toggleStyleClass("invisible", !showSearch);
		view.categoryList.toggleStyleClass("invisible", showSearch);
		
		// filter product list
		var binding = view.productList.getBinding("items");
		if (showSearch && binding !== undefined) {
			var filter = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, searchValue);
			binding.filter([filter]);
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
	
	categoryListTap : function(evt) {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", {
			id : "Category",
			data : { 
				categoryId : evt.getSource().data("id"),
				categoryName : evt.getSource().getTitle()
			}
		});
	},
	
	toCartButtonTap :  function(evt) {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", { 
			id: "Cart" 
		});
	}
});