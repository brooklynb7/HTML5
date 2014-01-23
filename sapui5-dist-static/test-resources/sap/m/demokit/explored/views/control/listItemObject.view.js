sap.ui.jsview("views.control.listItemObject", {

	createContent : function (oController) {

		// CODESNIP_START
		var list = new sap.m.List({
			headerText: "Products",
			items: {
				path: "/ProductCollection",
				template: new sap.m.ObjectListItem({
					title : "{Name}",
					number : "{Price}",
					numberUnit : "{CurrencyCode}",
					firstStatus : new sap.m.ObjectStatus({
						text : "Overweight",
						state : "Error"
					}),
					secondStatus : new sap.m.ObjectStatus({
						text : "In Stock",
						state : "Success"
					}),
					attributes : [
						new sap.m.ObjectAttribute({
							text : "{WeightMeasure} {WeightUnit}"
						}),
						new sap.m.ObjectAttribute({
							text : "{Width} x {Depth} X {Height} {DimUnit}"
						})
					]
				})
			}
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				util.UiFactory.createDescription("The Object List Item has a bunch of possibilities to provide a quick overview on an object within a list", 'NoBottom'),
				list
			]
		});
	}
});
