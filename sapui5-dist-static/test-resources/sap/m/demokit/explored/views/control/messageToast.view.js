sap.ui.jsview("views.control.messageToast", {

	createContent : function (oController) {

		// CODESNIP_START
		var openButton = new sap.m.Button({
			text : "Show Message Toast",
			press : function () {
				var msg = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.';
				jQuery.sap.require("sap.m.MessageToast");
				sap.m.MessageToast.show(msg);
			}
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				openButton,
				util.UiFactory.createDescription('The Message Toast displays the message text as an overlay to the current screen. It closes automatically after some time without requiring further user interaction')
			]
		}).addStyleClass("marginVerticalContent");
	}
});