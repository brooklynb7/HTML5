sap.ui.jsview("views.control.page", {

	createContent : function (oController) {

		// CODESNIP_START
		// create page
		var page = new sap.m.Page({
			title: "Title",
			showNavButton: true,
			subHeader: new sap.m.Bar({
				contentMiddle: [
					new sap.m.SearchField({
						placeholder: "search for...",
						width: "100%"
					})
				]
			}),
			content: [
				new sap.m.Label({
					text: "Lorem ipsum dolor sit amet, consetetur ..."
				}),
				util.UiFactory.createDescription('Each screen of a mobile application is typically represented by a "Page" consisting of a header, a scrollable content area and optionally a footer. The standard header offers a navigation button and a title. Alternatively you can provide a customer header.')
			],
			headerContent: [
				new sap.m.Button({
					icon: "sap-icon://action"
				})
			],
			footer: new sap.m.Bar({
				contentRight: [
					new sap.m.Button({
						text: "Edit",
						icon: "sap-icon://edit"
					}),
					new sap.m.Button({
						text: "Delete",
						icon: "sap-icon://delete"
					})
				]
			})
		}).addStyleClass("marginBoxContent");
		// CODESNIP_END

		return page;
	}
});