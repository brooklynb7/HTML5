sap.ui.jsview("views.control.listSwipe", {

	createContent : function (oController) {

		// CODESNIP_START
		var list = new sap.m.List({
			headerText: "Products",
			swipeContent : new sap.m.Button({
				text : "Delete Item",
				type : "Reject",
				press : function () {
					var swipedItem = list.getSwipedItem(); 
					list.removeAggregation("items", swipedItem); 
					list.swipeOut(); 
				}
			}),
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
				util.UiFactory.createDescription('With a swipe gesture you can show additional content for an item without having to navigate to a detail page. This feature is only available for touch devices', 'NoBottom'),
				list
			]
		});
	}
});
