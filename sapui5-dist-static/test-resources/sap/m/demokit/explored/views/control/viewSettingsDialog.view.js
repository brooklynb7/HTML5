sap.ui.jsview("views.control.viewSettingsDialog", {

	createContent : function (oController) {

		// CODESNIP_START

		// create dialog
		var oVSDialog = new sap.m.ViewSettingsDialog({
			sortItems : [
				new sap.m.ViewSettingsItem({
					text : "Field 1",
					key : "1",
					selected: true
				}),
				new sap.m.ViewSettingsItem({
					text : "Field 2",
					key : "2"
				}),
				new sap.m.ViewSettingsItem({
					text : "Field 3",
					key : "3"
				})
			],
			groupItems : [
				new sap.m.ViewSettingsItem({
					text : "Field 1",
					key : "1"
				}),
				new sap.m.ViewSettingsItem({
					text : "Field 2",
					key : "2"
				}),
				new sap.m.ViewSettingsItem({
					text : "Field 3",
					key : "3"
				})
			],
			filterItems : [
				new sap.m.ViewSettingsFilterItem({
					text : "Field 1",
					key : "1",
					items : [
						new sap.m.ViewSettingsItem({
							text : "Value A",
							key : "1a"
						}),
						new sap.m.ViewSettingsItem({
							text : "Value B",
							key : "1b"
						}),
						new sap.m.ViewSettingsItem({
							text : "Value C",
							key : "1c"
						})
					]
				}),
				new sap.m.ViewSettingsFilterItem({
					text : "Field 2",
					key : "2",
					items : [
						new sap.m.ViewSettingsItem({
							text : "Value A",
							key : "2a"
						}),
						new sap.m.ViewSettingsItem({
							text : "Value B",
							key : "2b"
						}),
						new sap.m.ViewSettingsItem({
							text : "Value C",
							key : "2c"
						})
					]
				}),
				new sap.m.ViewSettingsFilterItem({
					text : "Field 3",
					key : "3",
					items : [
						new sap.m.ViewSettingsItem({
							text : "Value A",
							key : "3a"
						}),
						new sap.m.ViewSettingsItem({
							text : "Value B",
							key : "3b"
						}),
						new sap.m.ViewSettingsItem({
							text : "Value C",
							key : "3c"
						})
					]
				})
			],
			confirm : function (evt) {
				jQuery.sap.require("sap.m.MessageToast");
				if (evt.getParameters().filterString) {
					sap.m.MessageToast.show(evt.getParameters().filterString);
				}
			}
		});

		// CODESNIP_END

		var oOpenDialogButton = new sap.m.Button({
			text : "Show View Settings Dialog",
			press : function () {
				oVSDialog.open();
			}
		});

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				oOpenDialogButton,
				util.UiFactory.createDescription("The View Settings Dialog is a standard UI pattern for specifying sorting, grouping and filtering.")
			]
		}).addStyleClass("marginVerticalContent");
	}
});