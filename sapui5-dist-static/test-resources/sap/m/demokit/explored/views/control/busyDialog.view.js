sap.ui.jsview("views.control.busyDialog", {

	createContent : function (oController) {

		// CODESNIP_START
		var openButton = new sap.m.Button({
			text : "Show Busy Dialog",
			press : function () {
				var dialog = new sap.m.BusyDialog({
					title: "Loading Data",
					text: '... now loading the data from a far away server.',
					showCancelButton: true
				});
				dialog.open();
			}
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				openButton,
				util.UiFactory.createDescription('A Busy Dialog blocks the user interface until the currently running operation has been finished. No other activities can be started in parallel')
			]
		}).addStyleClass("marginVerticalContent");
	}
});
