sap.ui.jsview("views.control.dialog", {

	createContent : function (oController) {

		// CODESNIP_START

		// create standard dialog containing a list
		var stdDialog = new sap.m.Dialog({
			title: "{Name}",
			content: new sap.m.Image({
				src: "{ProductPicUrl}",
				width: "15em"
			}),
			leftButton: new sap.m.Button({
				text: "Ok",
				press: function () {
					stdDialog.close();
				}
			}),
			rightButton: new sap.m.Button({
				text: "Cancel",
				press: function () {
					stdDialog.close();
				}
			})
		}).addStyleClass("sapUiPopupWithPadding");
		
		var openStdDialogButton = new sap.m.Button({
			text : "Show Dialog",
			press : function (evt) {
				stdDialog.open();
				stdDialog.setModel(evt.getSource().getModel());
				stdDialog.bindElement("/ProductCollection/0");
			}
		});
		
		var msgDialog = new sap.m.Dialog({
			title: "Alert",
			type: sap.m.DialogType.Message,
			icon: "sap-icon://competitor",
			content: new sap.m.Text({
				text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.'
			}),
			leftButton: new sap.m.Button({
				text: "Close",
				press: function () {
					msgDialog.close();
				}
			})
		});

		var openMsgDialogButton = new sap.m.Button({
			text : "Show Message Dialog",
			press : function () {
				msgDialog.open();
			}
		});

		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				openStdDialogButton,
				openMsgDialogButton,
				util.UiFactory.createDescription('Typically a Dialog prompts the user for decisions or additional information required by the application. The content of a dialog is fully customizable. If you want to highlight important information you should use the special type of "Message Dialog"')
			]
		}).addStyleClass("marginVerticalContent");
	}
});
