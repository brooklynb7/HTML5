sap.ui.jsview("views.control.listItemStandard", {

	createContent : function (oController) {

		// CODESNIP_START
		var list = new sap.m.List({
			headerText: "Products",
			items: [
				new sap.m.StandardListItem({
					title: "{Name}"
				}),
				new sap.m.StandardListItem({
					title: "{Name}",
					description: "{ProductId}"
				}),
				new sap.m.StandardListItem({
					title: "{Name}",
					description: "{ProductId}",
					icon: "{ProductPicUrl}"
				}),
				new sap.m.StandardListItem({
					title: "{Name}",
					description: "{ProductId}",
					icon: "{ProductPicUrl}",
					iconInset: false
				}),
				new sap.m.StandardListItem({
					title: "{Name}",
					description: "{ProductId}",
					icon: "{ProductPicUrl}",
					info: "Overweight",
					infoState: sap.ui.core.ValueState.Error
				})
			]
		}).bindElement("/ProductCollection/0");
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				util.UiFactory.createDescription('This list item offers a standardized user interface for list content. Use any combination of title, description, info and icon', 'NoBottom'),
				list
			]
		});
	}
});
