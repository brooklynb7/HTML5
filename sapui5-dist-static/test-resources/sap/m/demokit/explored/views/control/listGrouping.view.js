sap.ui.jsview("views.control.listGrouping", {

	createContent : function (oController) {

		// CODESNIP_START
		// define group function
		var fnGroupSupplier = function (oContext) {
			var sSupplier = oContext.getProperty("SupplierName");
			return {
				key: sSupplier,
				text: sSupplier
			};
		};

		// create list
		var list = new sap.m.List({
			headerText: "Products",
			items: {
				path: "/ProductCollection",
				sorter: new sap.ui.model.Sorter("SupplierName", false, fnGroupSupplier),
				template: new sap.m.StandardListItem({
					title: "{Name}",
					description: "{ProductId}",
					icon: "{ProductPicUrl}",
					iconInset: false
				})
			}
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				util.UiFactory.createDescription('Grouping your items makes it easier for the user to browse and find the desired content', 'NoBottom'),
				list
			]
		});
	}
});