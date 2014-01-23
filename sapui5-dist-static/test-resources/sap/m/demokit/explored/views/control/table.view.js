sap.ui.jsview("views.control.table", {

	/**
	 * This code is reused to create a standard table for other views.
	 * This is what the "oInitialFilter" parameter is needed for.
	 */
	createContent : function (oController, oInitialFilter) {
		
		// CODESNIP_START
		var table = new sap.m.Table({
			headerText: "Products",
			columns: [
				new sap.m.Column({
					width : "12em",
					header: new sap.m.Label({text: "Product"})
				}),
				new sap.m.Column({
					header: new sap.m.Label({text: "Supplier"}),
					minScreenWidth: "Tablet",
					demandPopin: true
				}),
				new sap.m.Column({
					header: new sap.m.Label({text: "Dimensions"}),
					minScreenWidth: "Tablet",
					demandPopin: true,
					hAlign: "Right"
				}),
				new sap.m.Column({
					header: new sap.m.Label({text: "Weight"}),
					minScreenWidth: "Tablet",
					demandPopin: true,
					hAlign: "Center"
				}),
				new sap.m.Column({
					header: new sap.m.Label({text: "Price"}),
					hAlign: "Right"
				})
			],
			items: {
				path: "/ProductCollection",
				filter: oInitialFilter,
				sorter: new sap.ui.model.Sorter("Name", false),
				template: new sap.m.ColumnListItem({
					cells: [
						new sap.m.ObjectIdentifier({
							title: "{Name}",
							text: "{ProductId}"
						}),
						new sap.m.Text({
							text: "{SupplierName}"
						}),
						new sap.m.Text({
							text: "{Width} x {Depth} x {Height} {DimUnit}"
						}),
						new sap.m.ObjectNumber({
							number: "{WeightMeasure}",
							unit: "{WeightUnit}",
							state: "{path:'WeightMeasure', formatter: 'util.Formatter.weightState'}"
						}),
						new sap.m.ObjectNumber({
							number: "{Price}",
							unit: "{CurrencyCode}"
						})
					]
				})
			}
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				util.UiFactory.createDescription('The Table shares many features with the List and introduces columns in addition', 'NoBottom'),
				table
			]
		});
	}
});