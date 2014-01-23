sap.ui.controller("views.control.iconTabBarProcess", {

	onInit: function() {
		var oFilter = new sap.ui.model.Filter("WeightMeasure", "LE", 1000);
		var oTable = util.UiFactory.createStdTable([oFilter]);
		oTable.setHeaderText(null);
		oTable.setShowSeparators("Inner");
		this.getView().byId("idIconTabBar").insertContent(oTable);
	},

	handleIconTabBarSelect: function(oEvent) {
		var oTable = oEvent.getSource().getContent()[0];
		var oBinding = oTable.getBinding("items"),
			sKey = oEvent.getParameter("selectedKey"),
			oFilter;
		if (sKey === "Ok") {
			oFilter = new sap.ui.model.Filter("WeightMeasure", "LE", 1000);
			oBinding.filter([oFilter]);
		} else if (sKey === "Heavy") {
			oFilter = new sap.ui.model.Filter("WeightMeasure", "BT", 1001, 2000);
			oBinding.filter([oFilter]);
		} else if (sKey === "Overweight") {
			oFilter = new sap.ui.model.Filter("WeightMeasure", "GT", 2000);
			oBinding.filter([oFilter]);
		} else {
			oBinding.filter([]);
		}
	}

});
