sap.ui.jsview("views.control.tableMergeCells", {

	createContent : function (oController) {

		// CODESNIP_START
		var table = new sap.m.Table("productinfo", {
			headerText: "Products",
			columns: [
				new sap.m.Column({
					header: new sap.m.Label({text: "Supplier"}),
					mergeDuplicates: true,
				}),
				new sap.m.Column({
					width: "12em",
					header: new sap.m.Label({text: "Product"}),
					mergeDuplicates: true
				}),
				new sap.m.Column({
					minScreenWidth: "Tablet",
					hAlign: "Right",
					demandPopin: true,
					header: new sap.m.Label({text: "Dimensions"}),
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
				sorter: new sap.ui.model.Sorter("SupplierName", false, false),
				template: new sap.m.ColumnListItem({
					cells: [
							new sap.m.Text({
								text: "{SupplierName}"
							}),
							new sap.m.ObjectIdentifier({
								title: "{Name}",
								text: "{ProductId}"
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
				util.UiFactory.createDescription('With column duplicate merging, you can improve the display of repeated data. See the effect of mergeDuplicates on the Supplier column here.', 'NoBottom'),
				table
			]
		});
	}
});