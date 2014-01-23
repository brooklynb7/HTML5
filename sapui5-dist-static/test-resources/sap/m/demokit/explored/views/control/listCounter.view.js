sap.ui.jsview("views.control.listCounter", {

	createContent : function (oController) {

		// CODESNIP_START
		var list = new sap.m.List({
			headerText: "Products",
			items: {
				path: "/ProductCollection",
				template: new sap.m.StandardListItem({
					title: "{Name}",
					counter: "{path:'Name', formatter:'util.Formatter.randomNumber100'}",
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
				util.UiFactory.createDescription('The counter of an item quickly shows how many details positions are related without having the user to navigate to the detail page', 'NoBottom'),
				list
			]
		});
	}
});
