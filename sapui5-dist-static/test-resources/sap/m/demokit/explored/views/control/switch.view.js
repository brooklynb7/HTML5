sap.ui.jsview("views.control.switch", {

	createContent : function (oController) {

		// CODESNIP_START
		var hbox = new sap.m.HBox({
			items: [
				new sap.m.Switch({
					state: true,
					layoutData: new sap.m.FlexItemData({growFactor: 1})
				}),
				new sap.m.Switch({
					state: false,
					layoutData: new sap.m.FlexItemData({growFactor: 1})
				}),
				new sap.m.Switch({
					state: true,
					enabled: false,
					layoutData: new sap.m.FlexItemData({growFactor: 1})
				})
			]
		});

		var hboxAcceptReject = new sap.m.HBox({
			items: [
				new sap.m.Switch({
					type: "AcceptReject",
					state: true,
					layoutData: new sap.m.FlexItemData({growFactor: 1})
				}),
				new sap.m.Switch({
					type: "AcceptReject",
					state: false,
					layoutData: new sap.m.FlexItemData({growFactor: 1})
				}),
				new sap.m.Switch({
					type: "AcceptReject",
					state: true,
					enabled: false,
					layoutData: new sap.m.FlexItemData({growFactor: 1})
				})
			]
		});
		// CODESNIP_END

		var box = new sap.m.VBox({}).addStyleClass("marginBoxContent");
		box.addItem(hbox);
		if (!util.ThemeDetection.isMVI()) {
			box.addItem(hboxAcceptReject);
		}
		box.addItem(util.UiFactory.createDescription('Some say it is only a switch, I say it is one of the most stylish controls in the universe of mobile UI controls." (unknown developer)', "OnlyTop"));
		return box;
	}
});
