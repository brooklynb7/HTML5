sap.ui.jsview("views.control.carousel", {

	createContent : function (oController) {

		var description = util.UiFactory.createDescription('With the Carousel a user can browse through multi-page-content by swiping left or right with his finger', 'All');
		
		// CODESNIP_START
		return new sap.m.Carousel({
			pages: [
				new sap.ui.layout.VerticalLayout({
					content: [
						description,
						new sap.m.Image({
							src: "img/product/large_HT-6100.jpg"
						})
					]
				}),
				new sap.m.Image({
					src: "img/product/large_HT-1112.jpg"
				}),
				new sap.m.Image({
					src: "img/product/large_HT-1073.jpg"
				}),
				new sap.m.Text({
					text: "{/Text}"
				}).addStyleClass("marginAll"),
				new sap.m.List({
					headerText: "Some List Content",
					width: "300px",
					items: {
						path: "/ProductCollection",
						template: new sap.m.StandardListItem({
							title: "{Name}",
							description: "{ProductId}",
							icon: "{ProductPicUrl}",
							iconInset: false
						})
					}
				}),
				new sap.m.Image({
					src: "img/product/large_HT-6100.jpg"
				})
			]
		});
		// CODESNIP_END
	}
});
