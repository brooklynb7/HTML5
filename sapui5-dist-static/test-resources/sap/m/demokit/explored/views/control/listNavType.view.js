sap.ui.jsview("views.control.listNavType", {

	createContent : function (oController) {

		// CODESNIP_START
		var list = new sap.m.List({
			headerText: "Products",
			items: [
				new sap.m.StandardListItem({
					title: "{0/Name}",
					description: "{0/ProductId}",
					icon: "{0/ProductPicUrl}",
					iconInset: false,
					type: "Navigation"
				}),
				new sap.m.StandardListItem({
					title: "{1/Name}",
					description: "{1/ProductId}",
					icon: "{1/ProductPicUrl}",
					iconInset: false,
					type: "Navigation"
				}),
				new sap.m.StandardListItem({
					title: "{2/Name}",
					description: "{2/ProductId}",
					icon: "{2/ProductPicUrl}",
					iconInset: false
				})
				
			]
		}).bindElement("/ProductCollection");
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				util.UiFactory.createDescription(model.Description.listNavType, 'NoBottom'),
				list
			]
		});
	}
});
