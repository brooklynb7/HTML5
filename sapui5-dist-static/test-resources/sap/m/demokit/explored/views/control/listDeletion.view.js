sap.ui.jsview("views.control.listDeletion", {

	createContent : function (oController) {

		// CODESNIP_START
		// create list
		var list = new sap.m.List({
			headerText: "Products",
			mode: sap.m.ListMode.Delete,
			items: {
				path: "/ProductCollection",
				template: new sap.m.StandardListItem({
					title: "{Name}",
					description: "{ProductId}",
					icon: "{ProductPicUrl}",
					iconInset: false
				})
			},
			"delete": function (evt) {
				var item = evt.getParameter("listItem");	
				list.removeItem(item);
			}
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				util.UiFactory.createDescription('When putting a List to the "Delete" mode you can trigger the deletion of single items with a single press. The application has to decide if an additional confirmation is required', 'NoBottom'),
				list
			]
		});
	}
});
