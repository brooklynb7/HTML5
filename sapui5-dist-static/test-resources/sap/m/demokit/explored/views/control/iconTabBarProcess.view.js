sap.ui.jsview("views.control.iconTabBarProcess", {

	createContent : function (oController) {

		var oFilter = new sap.ui.model.Filter("WeightMeasure", "LE", 1000);
		var oTable = util.UiFactory.createStdTable([oFilter]);
		oTable.setHeaderText(null);
		
		// CODESNIP_START
		// hide separators at the end of table
		oTable.setShowSeparators("Inner");
		
		// create icon tab bar
		var tabBar = new sap.m.IconTabBar({
			content: oTable,
			items: [
				new sap.m.IconTabFilter({
					icon: "sap-icon://begin",
					iconColor: sap.ui.core.IconColor.Positive,
					design: "Horizontal",
					count: "{/ProductCollectionStats/Counts/Weight/Ok} of {/ProductCollectionStats/Counts/Total}",
					text: "Confirm Ok",
					key: "Ok"
				}),
				new sap.m.IconTabSeparator({
					icon: "sap-icon://open-command-field"
				}),
				new sap.m.IconTabFilter({
					icon: "sap-icon://compare",
					iconColor: sap.ui.core.IconColor.Critical,
					design: "Horizontal",
					count: "{/ProductCollectionStats/Counts/Weight/Heavy} of {/ProductCollectionStats/Counts/Total}",
					text: "Check Heavys",
					key: "Heavy"
				}),
				new sap.m.IconTabSeparator({
					icon: "sap-icon://open-command-field"
				}),
				new sap.m.IconTabFilter({
					icon: "sap-icon://inventory",
					iconColor: sap.ui.core.IconColor.Negative,
					design: "Horizontal",
					count: "{/ProductCollectionStats/Counts/Weight/Overweight} of {/ProductCollectionStats/Counts/Total}",
					text: "Claim Overweights",
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
				}
			}
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				util.UiFactory.createDescription('In this example the Icon Tab Bar is used to apply filters on the same content along a business process.', "NoBottom"),
				tabBar
			]
		});
	}
});
