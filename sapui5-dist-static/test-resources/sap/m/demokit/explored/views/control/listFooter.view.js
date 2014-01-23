sap.ui.jsview("views.control.listFooter", {

	createContent : function (oController) {

		// CODESNIP_START
		var list = new sap.m.List({
			headerText: "Products",
			footerText: "This is the footer text",
			items: [
				new sap.m.StandardListItem({
					title: "{Name}",
					description: "{ProductId}",
					icon: "{ProductPicUrl}",
					iconInset: false
				})
			]
		}).bindElement("/ProductCollection/0");
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				util.UiFactory.createDescription(model.Description.listFooter, 'NoBottom'),
				list
			]
		});
	}
});
