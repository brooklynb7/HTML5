sap.ui.jsview("views.control.iconTabBarMulti", {

	createContent : function (oController) {

		// CODESNIP_START
		// create tab bar
		var tabBar = new sap.m.IconTabBar({
			expanded: !jQuery.device.is.phone,
			items: [
				new sap.m.IconTabFilter({
					icon: "sap-icon://hint",
					text: "Info",
					content: new sap.m.Text({
						text: "Info content goes here ..."
					})
				}),
				new sap.m.IconTabFilter({
					icon: "sap-icon://attachment",
					text: "Attachments",
					count: "3",
					content: new sap.m.Text({
						text: "Attachments go here ..."
					})
				}),
				new sap.m.IconTabFilter({
					icon: "sap-icon://notes",
					text: "Notes",
					count: "12",
					content: new sap.m.Text({
						text: "Notes go here ..."
					})
				}),
				new sap.m.IconTabFilter({
					icon: "sap-icon://group",
					text: "People",
					content: new sap.m.Text({
						text: "People content goes here ..."
					})
				})
			]
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				util.UiFactory.createDescription('In this example the Icon Tab Bar is used to organize multiple different content objects whith only one being visible at a time', 'NoBottom'),
				tabBar
			]
		});
	}
});