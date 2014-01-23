sap.ui.controller("views.navCategory", {

	onInit : function () {
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
	},

	_handleRouteMatched : function (evt) {
		
		if ("category" !== evt.getParameter("name")) {
			return;
		}

		this._id = evt.getParameter("arguments").id;

		// lookup path
		var model = this.getView().getModel("nav");
		var path = util.ObjectSearch.getPath(model.getData(), "id", this._id);

		// filter binding
		var filter = new sap.ui.model.Filter("parent", "EQ", this._id);
		var list = this.getView().byId("list");
		var binding = list.getBinding("items");
		binding.filter([filter]);

		// set page title
		var navItem = model.getProperty(path);
		var title = (navItem) ? navItem.name + " (" + navItem.count + ")" : "";
		this.getView().byId("page").setTitle(title);

		// show not found page
		if (!path) {
			this.router.myNavToWithoutHash("views.notFound", "XML", false, { path: this._id });
			return;
		}
	},

	itemPress : function (evt) {
		this._navTo(evt.getSource());
	},

	listSelect: function (evt) {
		var item = evt.getParameter("listItem");
		if (item) {
			var navItem = this._navTo(item);
			// ugly: we need to reset the selection manually as we really do a nav for the directory items
			if ("DIR" === navItem.type) {
				var list = this.getView().byId("list");
				list.setSelectedItem(item, false);
			}
		}
	},

	_navTo : function (item) {
		var model = this.getView().getModel("nav");
		var path = item.getBindingContext("nav").getPath();
		var navItem = model.getProperty(path);
		if ("DIR" === navItem.type) {
			this.router.navTo("sub", {
				id : this._id,
				subId : navItem.id
			});
		} else {
			this.router.navTo("sample", {
				id: navItem.id
			}, !jQuery.device.is.phone);
		}
		return navItem;
	},

	handleNavBack : function () {
		this.router.myNavBack("home", {});
	}
}); 