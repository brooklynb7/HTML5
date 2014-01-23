sap.ui.controller("views.control.listItemStandard", {

	onInit : function (evt) {
		this.getView().byId("ShortProductList").bindElement("/ProductCollection/0");
	}

});