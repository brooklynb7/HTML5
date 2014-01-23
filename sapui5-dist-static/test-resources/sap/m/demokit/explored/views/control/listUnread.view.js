sap.ui.jsview("views.control.listUnread", {

	createContent : function (oController) {

		// CODESNIP_START
		var list = new sap.m.List({
			headerText: "Products",
			showUnread: true,
			items: {
				path: "/ProductCollection",
				template: new sap.m.StandardListItem({
					title: "{Name}",
					unread: "{path:'Name', formatter:'util.Formatter.randomBoolean'}",
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
				util.UiFactory.createDescription('With the Unread Indicator you can highlight new items making it easier for the user to discover them', 'NoBottom'),
				list
			]
		});
	}
});
