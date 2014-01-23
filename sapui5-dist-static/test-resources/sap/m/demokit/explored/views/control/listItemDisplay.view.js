sap.ui.jsview("views.control.listItemDisplay", {

	createContent : function (oController) {

		// CODESNIP_START
		var list = new sap.m.List({
			headerText: "Address",
			items: [
				new sap.m.DisplayListItem({
					label: "First Name",
					value: "Francis"
				}),
				new sap.m.DisplayListItem({
					label: "Last Name",
					value: "Douglas"
				}),
				new sap.m.DisplayListItem({
					type: sap.m.ListType.Navigation,
					label: "Street",
					value: "Kensington Road  7"
				}),
				new sap.m.DisplayListItem({
					type: sap.m.ListType.Navigation,
					label: "City",
					value: "Millham"
				})
			]
		});
		// CODESNIP_END
		
		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				util.UiFactory.createDescription('Use the Display List Item for showing name value pairs', 'NoBottom'),
				list
			]
		});
	}
});
