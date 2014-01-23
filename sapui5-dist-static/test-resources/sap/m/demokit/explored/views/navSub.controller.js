sap.ui.controller("views.navSub", {

	onInit : function () {
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
	},

	_handleRouteMatched : function (evt) {
		
		if ("sub" !== evt.getParameter("name")) {
			return;
		}

		this._id = evt.getParameter("arguments").id;
		var subId = evt.getParameter("arguments").subId;

		// lookup path
		var model = this.getView().getModel("nav");
		var path = util.ObjectSearch.getPath(model.getData(), "id", subId);

		// filter binding
		var filter = new sap.ui.model.Filter("parent", "EQ", subId);
		var list = this.getView().byId("list");
		var binding = list.getBinding("items");
		binding.filter([filter]);

		// set page title
		var navItem = model.getProperty(path);
		var title = (navItem) ? navItem.name + " (" + navItem.count + ")" : "";
		this.getView().byId("page").setTitle(title);

		// show not found page
		if (!path) {
			this.router.myNavToWithoutHash("views.notFound", "XML", false, { path: subId });
			return;
		}
	},

	itemPress : function (evt) {
		this._navTo(evt.getSource());
	},

	listSelect: function (evt) {
		var item = evt.getParameter("listItem");
		if (item) {
			this._navTo(item);
		}
	},

	_navTo : function (item) {
		var model = this.getView().getModel("nav");
		var path = item.getBindingContext("nav").getPath();
		var navItem = model.getProperty(path);
		this.router.navTo("sample", {
			id : navItem.id
		}, !jQuery.device.is.phone);
	},

	handleNavBack : function () {
		this.router.myNavBack("category", {
			id : this._id
		});
	}
}); 