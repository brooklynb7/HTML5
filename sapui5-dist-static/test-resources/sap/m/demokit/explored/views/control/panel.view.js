sap.ui.jsview("views.control.panel", {

	createContent : function (oController) {

		// CODESNIP_START
		var panel = new sap.m.Panel({
			headerToolbar: new sap.m.Toolbar({
				content: [
					new sap.m.Label({ text: "Header" }),
					new sap.m.ToolbarSpacer(),
					new sap.m.Button({ icon: "sap-icon://settings" }),
					new sap.m.Button({ icon: "sap-icon://drop-down-list" })
				]
			}),
			infoToolbar: new sap.m.Toolbar({
				content: [
					new sap.m.Label({ text: "Info"}),
					new sap.m.ToolbarSpacer(),
					new sap.ui.core.Icon({ src: "sap-icon://add-filter" })
				]
			}),
			content: [
				new sap.ui.layout.HorizontalLayout({
					content : [
						new sap.m.Image({
							src: "img/product/large_HT-6100.jpg",
							width: "10em"
						})
					]
				}),
				new sap.m.Text({
					text: "{/Text}"
				})
			]
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				util.UiFactory.createDescription('Panels are helpful to group custom content. They can be decorated with header and info toolbars.', 'NoBottom'),
				panel
			]
		});
	}
});