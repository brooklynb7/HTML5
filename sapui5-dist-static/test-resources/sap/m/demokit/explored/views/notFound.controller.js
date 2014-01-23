sap.ui.controller("views.notFound", {

	onInit : function () {
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
		this.getView().addEventDelegate(this);
	},

	_msg : "<div class='titlesNotFound'>The requested object '{0}' is unknown to the explored app. We suspect it's lost in space.</div>",
	
	_handleRouteMatched : function (evt) {
		if ("notFound" !== evt.getParameter("name")) {
			return;
		}
		var params = evt.getParameter("arguments")["all*"];
		var html = this._msg.replace("{0}", params);
		this.getView().byId("msgHtml").setContent(html);
	},
	
	onBeforeShow : function (evt) {
		if (evt.data.path) {
			var html = this._msg.replace("{0}", evt.data.path);
			this.getView().byId("msgHtml").setContent(html);
		}
	},
	
	handleNavBack : function () {
		this.router.myNavBack("home", {});
	}
});