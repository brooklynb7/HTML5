sap.ui.controller("views.control.listItemStandardTitle", {

	onInit : function (evt) {
		this.getView().byId("ShortProductList").bindElement("/ProductCollection");
	}

});