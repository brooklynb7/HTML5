sap.ui.jsview("views.control.listItemAction", {

	createContent : function (oController) {

		// CODESNIP_START
		var list = new sap.m.List({
			headerText: "Actions",
			items: [
				new sap.m.ActionListItem({
					text: "Reject"
				}),
				new sap.m.ActionListItem({
					text: "Accept"
				}),
				new sap.m.ActionListItem({
					text: "EMail"
				}),
				new sap.m.ActionListItem({
					text: "Forward"
				}),
				new sap.m.ActionListItem({
					text: "Delete"
				})
			]
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				util.UiFactory.createDescription('Use the Action List Item to trigger an action directly from a list', 'NoBottom'),
				list
			]
		});
	}
});
