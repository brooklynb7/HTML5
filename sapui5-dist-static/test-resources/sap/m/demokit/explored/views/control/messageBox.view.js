sap.ui.jsview("views.control.messageBox", {
	
	createContent : function (oController) {

		// CODESNIP_START
		
		jQuery.sap.require("sap.m.MessageBox");
		
		var openMessageBoxButton = new sap.m.Button({
			text : "Show Confirmation",
			press : function () {
				sap.m.MessageBox.show(
					"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
					"sap-icon://hint",
					"Really Do This?",
					[sap.m.MessageBox.Action.OK, sap.m.MessageBox.Action.CANCEL ]
				);
			}
		});
		
		var openAlertButton = new sap.m.Button({
			text : "Show Alert",
			press : function () {
				sap.m.MessageBox.alert(
					"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
				);
			}
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				openMessageBoxButton,
				openAlertButton,
				util.UiFactory.createDescription('MessageBox is an easier way of showing a message type dialog. You only need to provide the message that you want to show to the user')
			]
		}).addStyleClass("marginVerticalContent");
	}
});