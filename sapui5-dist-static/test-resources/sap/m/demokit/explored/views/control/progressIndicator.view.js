sap.ui.jsview("views.control.progressIndicator", {

	createContent : function (oController) {

		// CODESNIP_START
		var progressIndicator1 = new sap.m.ProgressIndicator({
			width : "90%",
			percentValue : 30,
			displayValue : "30%",
			showValue : true,
			state: sap.ui.core.ValueState.None
		});
		var progressIndicator2 = new sap.m.ProgressIndicator({
			width : "90%",
			percentValue : 50,
			showValue : false,
			state: sap.ui.core.ValueState.Error
		});
		var progressIndicator3 = new sap.m.ProgressIndicator({
			width : "90%",
			percentValue : 99,
			displayValue : "0.99GB of 1GB",
			showValue : true,
			state: sap.ui.core.ValueState.Success
		});
		var progressIndicator4 = new sap.m.ProgressIndicator({
			width : "90%",
			percentValue : 25,
			displayValue : "25%",
			showValue : true,
			state: sap.ui.core.ValueState.Warning
		});
		// CODESNIP_END

		return new sap.m.VBox({
			items : [
				progressIndicator1,
				progressIndicator2,
				progressIndicator3,
				progressIndicator4,
				util.UiFactory.createDescription('Shows the progress of a process in a graphical way. To indicate the progress, the inside of the ProgressIndicator is filled with a color')
			]
		}).addStyleClass("marginBoxContent");
	}
});