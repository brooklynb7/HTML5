sap.ui.jsview("views.control.actionSheet", {

	createContent : function (oController) {

		// CODESNIP_START
		var oActionSheet = new sap.m.ActionSheet({
			title: "Choose Your Action",
			showCancelButton: true,
			placement: sap.m.PlacementType.Bottom,
			buttons: [
				new sap.m.Button({
					icon: "sap-icon://decline",
					text: "Reject"
				}),
				new sap.m.Button({
					icon: "sap-icon://accept",
					text: "Accept"
				}),
				new sap.m.Button({
					icon: "sap-icon://email",
					text: "EMail"
				}),
				new sap.m.Button({
					icon: "sap-icon://forward",
					text: "Forward"
				}),
				new sap.m.Button({
					icon: "sap-icon://delete",
					text: "Delete"
				})
			]
		});

		var openButton = new sap.m.Button({
			text: "Open Action Sheet",
			press : function (evt) {
				oActionSheet.openBy(evt.getSource());
			}
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				openButton,
				util.UiFactory.createDescription(model.Description.actionSheet)
			]
		}).addStyleClass("marginVerticalContent");
	}
});