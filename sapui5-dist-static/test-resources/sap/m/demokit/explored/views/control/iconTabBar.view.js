sap.ui.jsview("views.control.iconTabBar", {

	createContent : function (oController) {

		var oFilter = new sap.ui.model.Filter("status", "EQ", "open");
		var oTable = util.UiFactory.createStdTable();
		oTable.setHeaderText(null);
		
		// CODESNIP_START
		// hide separators at the end of table
		oTable.setShowSeparators("Inner");
		
		// create icon tab bar
		var tabBar = new sap.m.IconTabBar({
			content: oTable,
			items: [
				new sap.m.IconTabFilter({
					showAll: true,
					count: "{/ProductCollectionStats/Counts/Total}",
					text: "Products",
					key: "All"
				}),
				new sap.m.IconTabSeparator(),
				new sap.m.IconTabFilter({
					icon: "sap-icon://begin",
					iconColor: sap.ui.core.IconColor.Positive,
					count: "{/ProductCollectionStats/Counts/Weight/Ok}",
					text: "Ok",
					key: "Ok"
				}),
				new sap.m.IconTabFilter({
					icon: "sap-icon://compare",
					iconColor: sap.ui.core.IconColor.Critical,
					count: "{/ProductCollectionStats/Counts/Weight/Heavy}",
					text: "Heavy",
					key: "Heavy"
				}),
				new sap.m.IconTabFilter({
					icon: "sap-icon://inventory",
					iconColor: sap.ui.core.IconColor.Negative,
					count: "{/ProductCollectionStats/Counts/Weight/Overweight}",
					text: "Overweight",
					key: "Overweight"
				})
			],
			select: function (oEvent) {
				var oTable = this.getContent()[0];
				var oBinding = oTable.getBinding("items"),
					sKey = oEvent.getParameter("selectedKey"),
					oFilter;
				if (sKey === "Ok") {
					oFilter = new sap.ui.model.Filter("WeightMeasure", "LE", 1000);
					oBinding.filter([oFilter]);
				} else if (sKey === "Heavy") {
					oFilter = new sap.ui.model.Filter("WeightMeasure", "BT", 1000, 2000);
					oBinding.filter([oFilter]);
				} else if (sKey === "Overweight") {
					oFilter = new sap.ui.model.Filter("WeightMeasure", "GE", 2000);
					oBinding.filter([oFilter]);
				} else {
					oBinding.filter([]);
				}
			}
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				util.UiFactory.createDescription('In this example the Icon Tab Bar is used to apply filters on the same content and give the user a quick preview how many items he can expect for each view.', "NoBottom"),
				tabBar
			]
		});
	}
});
