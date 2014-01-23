jQuery.sap.require("util.Formatter");
jQuery.sap.require("model.Config");

sap.ui.controller("view.Home", {

	onInit : function () {
		// move the search bar under the pullToRefresh control on touch devices
		if (sap.ui.Device.support.touch) {
			var bar = this.getView().byId("searchBar");
			var page = this.getView().byId("page");
			page.insertAggregation("content", bar, 1);
		}
		
		// trigger first search to set visibilities right
		this._search();
	},
	
	handleSearch : function (evt) {
		this._search();
	},
	
	handleRefresh : function (evt) {
		var that = this;
		if (model.Config.isMock) {
			
			// just wait if we do not have oData services
			setTimeout(function () {
				that.getView().byId("pullToRefresh").hide();
			}, 2000);
			
		} else {
			
			// trigger search again and hide pullToRefresh when data ready
			var productList = this.getView().byId("productList");
			var binding = productList.getBinding("items");
			var handler = function() {
				that.getView().byId("pullToRefresh").hide();
				binding.detachDataReceived(handler);
			};
			binding.attachDataReceived(handler);
			that._search();
		}
	},
	
	_search : function () {
		
		var productList = this.getView().byId("productList");
		var categoryList = this.getView().byId("categoryList");
		var searchField = this.getView().byId("searchField");
		
		// switch visibility of lists
		var showSearch = searchField.getValue().length !== 0;
		productList.toggleStyleClass("invisible", !showSearch);
		categoryList.toggleStyleClass("invisible", showSearch);
		
		// filter product list
		var binding = productList.getBinding("items");
		if (binding) {
			if (showSearch) {
				var filter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.Contains, searchField.getValue());
				binding.filter([filter]);
			} else {
				binding.filter([]);
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
	
	handleCategoryListItemPress : function (evt) {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", {
			id : "Category",
			data : {
				categoryId : evt.getSource().data("id"),
				categoryName : evt.getSource().getTitle()
			}
		});
	},
	
	handleCartButtonPress :  function (evt) {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", {
			id: "Cart"
		});
	}
});