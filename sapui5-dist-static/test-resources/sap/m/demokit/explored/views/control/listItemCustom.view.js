sap.ui.jsview("views.control.listItemCustom", {

	createContent : function (oController) {

		// CODESNIP_START
		var list = new sap.m.List({
			headerText: "Custom Content",
			items: [
				new sap.m.CustomListItem({
					type: sap.m.ListType.Inactive,
					content: [
						new sap.m.Label('custom1', {
							text: "A first custom list item ..."
						}),
						new sap.m.Button('custom2', {
							text: "Press Me!"
						})
					]
				}),
				new sap.m.CustomListItem({
					type: sap.m.ListType.Navigation,
					content: [
						new sap.ui.core.Icon({
							src: sap.ui.core.IconPool.getIconURI("lab"),
							size: "2em"
						}).addStyleClass('content'),
						new sap.m.Label('custom4', {
							text: "... and another one ..."
						}),
						new sap.ui.core.Icon({
							src: sap.ui.core.IconPool.getIconURI("competitor"),
							size: "2em"
						}).addStyleClass('content')
					]
				}),
				new sap.m.CustomListItem({
					type: sap.m.ListType.Navigation,
					content: [
						new sap.m.Switch('custom6', {
							state: true
						}),
						new sap.m.Switch('custom7', {
							state: false
						}),
						new sap.m.Label('custom8', {
							text: "... followed by the very last."
						})
					]
				})
			]
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				util.UiFactory.createDescription('With the Custom List Item you can add any kind of content to lists', 'NoBottom'),
				list
			]
		});
	}
});
