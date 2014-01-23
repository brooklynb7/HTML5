sap.ui.controller("views.control.listSelection", {

	handleSelectChange: function(oEvent) {
		var mode = oEvent.getParameter("selectedItem").getKey();
		this.getView().byId("ProductList").setMode(mode);
	}

});