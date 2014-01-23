sap.ui.controller("views.toHome", {

	onInit : function () {
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
	},
	
	handleNavButtonPress : function (evt) {
		this.router.navTo("home", {});
	}
});