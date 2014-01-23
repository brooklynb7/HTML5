sap.ui.jsview("views.control.select", {

	createContent : function (oController) {

		// CODESNIP_START
		var selectHeader = new sap.m.Select({
			autoAdjustWidth: true,
			items: {
				path: "/ProductCollection",
				sorter: new sap.ui.model.Sorter("Name", false),
				template: new sap.ui.core.Item({
					key: "{ProductId}",
					text: "{Name}"
				})
			}
		});

		var selectContent = new sap.m.Select({
			items: {
				path: "/ProductCollection",
				sorter: new sap.ui.model.Sorter("Name", false),
				template: new sap.ui.core.Item({
					key: "{ProductId}",
					text: "{Name}"
				})
			}
		});

		var selectFooter = new sap.m.Select({
			type: sap.m.SelectType.IconOnly,
			icon: "sap-icon://filter",
			autoAdjustWidth: true,
			items: {
				path: "/ProductCollection",
				sorter: new sap.ui.model.Sorter("Name", false),
				template: new sap.ui.core.Item({
					key: "{ProductId}",
					text: "{Name}"
				})
			}
		});
		// CODESNIP_END

		return new sap.m.Page({
			showHeader: false,
			content: [
				new sap.m.VBox({
					items: [
						selectContent,
						util.UiFactory.createDescription('Choose one out of multiple options with the Select control', "OnlyTop")
					]
				})
			],
			subHeader: new sap.m.Bar({
				contentRight : selectHeader
			}),
			footer: new sap.m.Bar({
				contentRight : selectFooter
			})
		}).addStyleClass("marginBoxContent");
	}
});