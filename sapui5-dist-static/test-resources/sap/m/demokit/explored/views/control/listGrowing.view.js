sap.ui.jsview("views.control.listGrowing", {

	createContent : function (oController) {

		// CODESNIP_START
		
		// create list
		var list = new sap.m.List({
			headerText: "Products",
			growing : true,
			growingThreshold : 4,
			growingScrollToLoad : false,
			items: {
				path: "/ProductCollection",
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
				util.UiFactory.createDescription('The Growing feature helps if your content is too big to be loaded/shown at once. It paginates the content into smaller chunks - aka pages - which are loaded/shown one after another. Random access to pages further in the end is not possible. Depending on the model the content is loaded on demand (oData) or shown on demand (JSON)', 'NoBottom'),
				list
			]
		});
	}
});
