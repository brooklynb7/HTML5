sap.ui.jsview("views.control.busyIndicator", {

	createContent : function (oController) {

		// CODESNIP_START
		var indicator = new sap.m.BusyIndicator({
			text: "... something happens"
		});
		var indicators = new sap.m.HBox({
			justifyContent: sap.m.FlexAlignItems.Start,
			alignItems: sap.m.FlexAlignItems.Center,
			items: [
				new sap.m.BusyIndicator({ size: "1.4em" }),
				new sap.m.BusyIndicator({ size: "3em" }),
				new sap.m.BusyIndicator({ size: "4.6em" }),
				new sap.m.BusyIndicator({ size: "3em" }),
				new sap.m.BusyIndicator({ size: "1.4em" })
			]
		});
		// CODESNIP_END

		return new sap.m.VBox({
			items: [
				indicator,
				indicators,
				util.UiFactory.createDescription('The Busy Indicator signals the user that some operation is going on and he has to wait. It does not block the current UI screen so other operations could be triggered in parallel')
			]
		}).addStyleClass("marginBoxContent");
	}
});
