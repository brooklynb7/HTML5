sap.ui.controller("views.navHome", {

	onInit : function () {
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
	},

	_handleRouteMatched : function (evt) {
		
		var param = evt.getParameter("name");
		if ("home" !== param && "notFound" !== param) {
			return;
		}
			
		// set footer text
		var model = this.getView().getModel("nav");
		var path = util.ObjectSearch.getPath(model.getData(), "id", "root");
		var navItem = model.getProperty(path);
		var title = " Samples (" + navItem.count + ")";
		this.getView().byId("page").setTitle(title);

		this._filterList();
	},

	handleSearch : function () {
		this._filterList();
	},

	_filterList : function () {
		var searchField = this.getView().byId("searchField");
		var query = searchField.getValue();
		var list = this.getView().byId("list");
		var binding = list.getBinding("items");
		if (query) {
			binding.filter([
				new sap.ui.model.Filter("name", "Contains", query),
				new sap.ui.model.Filter("type", "NE", "DIR")
			]);
		} else {
			binding.filter([
				new sap.ui.model.Filter("parent", "EQ", "root")
			]);
		}
	},

	itemPress : function (evt) {
		var model = this.getView().getModel("nav");
		var path = evt.getSource().getBindingContext("nav").getPath();
		var navItem = model.getProperty(path);
		if ("DIR" === navItem.type) {
			this.router.navTo("category", {
				id : navItem.id
			});
		} else {
			this.router.navTo("sample", {
				id : navItem.id
			}, !jQuery.device.is.phone);
		}
	}
}); 