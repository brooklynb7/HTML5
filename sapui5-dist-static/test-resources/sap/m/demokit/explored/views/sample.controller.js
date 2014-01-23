sap.ui.controller("views.sample", {

	onInit : function () {
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
	},
	
	_handleRouteMatched : function (evt) {

		if (evt.getParameter("name") !== "sample") {
			return;
		}
			
		this._id = evt.getParameter("arguments").id;
		var page = this.getView().byId("page");
		
		// get path in navigation model
		var navModel = this.getView().getModel("nav");
		var path = util.ObjectSearch.getPath(navModel.getData(), "id", this._id);
		if (!path) {
			this.router.myNavToWithoutHash("views.notFound", "XML", false, { path: this._id });
			return;
		}
		
		// set page title
		this._navItem = navModel.getProperty(path);
		page.setTitle(this._navItem.name);
		
		// create content view
		var viewId = "controlView-" + this._id;
		var view = sap.ui.getCore().byId(viewId);
		if (!view) {
			view = sap.ui.view({
				id : viewId,
				viewName : "views.control." + this._id,
				type : this._navItem.type
			});
			view.setHeight("100%");
		}
		
		// phone: destroy description text
		// rest: inject description
		var descText = view.byId("description");
		if (jQuery.device.is.phone) {
			if (descText) {
				descText.destroy();
			}
		} else {
			var description = model.Description[this._id];
			if ("XML" === this._navItem.type && description) {
				if (descText) {
					descText.addStyleClass("description");
					descText.setText(description);
				}
			}
		}
		
		// add content view
		page.removeAllContent();
		page.addContent(view);
		
		// enable page scrolling if no page is nested
		var contentControl = view.getContent()[0];
		if (contentControl) {
			var enableScrolling = !(
				contentControl instanceof sap.m.Page ||
				contentControl instanceof sap.m.TileContainer ||
				contentControl instanceof sap.m.ScrollContainer ||
				contentControl instanceof sap.m.Carousel);
			page.setEnableScrolling(enableScrolling);
		}
		
		// scroll to top of page
		page.scrollTo(0);
	},

	handleShowDescription : function (evt) {
		var that = this;
		jQuery.sap.require("sap.m.MessageBox");
		sap.m.MessageBox.show(
			model.Description[this._id],
			"sap-icon://hint",
			"Description",
			[sap.m.MessageBox.Action.OK, "Show Code" ],
			function (action) {
				if ("Show Code" === action) {
					that.handleNavToCode(null);
				}
			}
		);
	},

	handleNavBack : function () {
		var navModel = this.getView().getModel("nav");
		var path = util.ObjectSearch.getPath(navModel.getData(), "id", this._navItem.parent);
		var parentNavItem = navModel.getProperty(path);
		if (2 === parentNavItem.level) {
			this.router.myNavBack("sub", {
				id : parentNavItem.parent,
				subId : parentNavItem.id
			});
		} else if (1 === parentNavItem.level) {
			this.router.myNavBack("category", {
				id : parentNavItem.id
			});
		}
	},

	handleNavToCode : function (evt) {
		this.router.navTo("code", {
			catId : this._catId,
			id : this._id
		}, !jQuery.device.is.phone);
	}
});