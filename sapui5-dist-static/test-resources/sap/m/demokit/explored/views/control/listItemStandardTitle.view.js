sap.ui.jsview("views.control.listItemStandardTitle", {

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
					adaptTitleSize: false
				}),
				new sap.m.StandardListItem({
					title: "{1/Name}",
					description: null, // set to null to simulate empty description
					icon: "{1/ProductPicUrl}",
					iconInset: false,
					adaptTitleSize: false
				}),
				new sap.m.StandardListItem({
					title: "{2/Name}",
					description: "{2/ProductId}",
					icon: "{2/ProductPicUrl}",
					iconInset: false,
					adaptTitleSize: false
				}),
				new sap.m.StandardListItem({
					title: "{3/Name}",
					description: null, // set to null to simulate empty description
					icon: "{3/ProductPicUrl}",
					iconInset: false,
					adaptTitleSize: false
				})
			]
		}).bindElement("/ProductCollection");
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				util.UiFactory.createDescription(model.Description.listItemStandardTitle, 'NoBottom'),
				list
			]
		});
	}
});
