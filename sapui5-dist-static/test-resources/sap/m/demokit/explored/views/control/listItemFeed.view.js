sap.ui.jsview("views.control.listItemFeed", {

	createContent : function (oController) {

		// CODESNIP_START
		var list = new sap.m.List({
			headerText: "Notes",
			items: [
				new sap.m.FeedListItem({
					sender: "Giselle Ashante-Ramirez",
					icon: "img/people/giselle.jpg",
					info: "Request",
					timestamp: "March 03, 2013",
					text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
				}),
				new sap.m.FeedListItem({
					sender: "Johannes Schaffensteiger",
					icon: "img/people/johannes.jpg",
					info: "Reply",
					timestamp: "March 04, 2013",
					text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
				}),
				new sap.m.FeedListItem({
					sender: "Giselle Ashante-Ramirez",
					icon: "img/people/giselle.jpg",
					info: "Request",
					timestamp: "March 04, 2013",
					text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
				}),
				new sap.m.FeedListItem({
					sender: "Johannes Schaffensteiger",
					icon: "img/people/johannes.jpg",
					info: "Rejection",
					timestamp: "March 07, 2013",
					text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
				})
			]
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				util.UiFactory.createDescription("The Feed List Item provides a standard UI for 'Feeds' where multiple users publish information on regular basis on a certain topic", 'NoBottom'),
				list
			]
		});
	}
});
