sap.ui.controller("views.control.pageSpacing", {

	onInit : function (evt) {
		this.getView().byId("idPage").bindElement("/ProductCollection/0");
	}
});