sap.ui.jsview("views.control.icon", {

	createContent : function (oController) {

		// CODESNIP_START
		var icon1 = new sap.ui.core.Icon({
			src: "sap-icon://syringe",
			size: (jQuery.device.is.phone) ? "1em" : "1.5em",
			color: "#031E48",
			layoutData: new sap.m.FlexItemData({growFactor: 1})
		});
		var icon2 = new sap.ui.core.Icon({
			src: "sap-icon://pharmacy",
			size: (jQuery.device.is.phone) ? "2em" : "2.5em",
			color: "#64E4CE",
			layoutData: new sap.m.FlexItemData({growFactor: 1})
		});
		var icon3 = new sap.ui.core.Icon({
			src: "sap-icon://electrocardiogram",
			size: (jQuery.device.is.phone) ? "3em" : "5em",
			color: "#E69A17",
			layoutData: new sap.m.FlexItemData({growFactor: 1})
		});
		var icon4 = new sap.ui.core.Icon({
			src: "sap-icon://doctor",
			size: (jQuery.device.is.phone) ? "4em" : "7.5em",
			color: "#1C4C98",
			layoutData: new sap.m.FlexItemData({growFactor: 1})
		});
		var icon5 = new sap.ui.core.Icon({
			src: "sap-icon://stethoscope",
			size: (jQuery.device.is.phone) ? "5em" : "10em",
			color: "#8875E7",
			layoutData: new sap.m.FlexItemData({growFactor: 1}),
			press: function (oEvent) {
				jQuery.sap.require("sap.m.MessageToast");
				sap.m.MessageToast.show("Over budget!");
			}
		});
		// CODESNIP_END

		return new sap.m.Page({
			showHeader: false,
			content: [
				new sap.m.HBox({
					items: [
						icon1,
						icon2,
						icon3,
						icon4,
						icon5
					]
				}),
				util.UiFactory.createDescription('Built with an embedded font, icons scale well, and can be altered with CSS. They can also fire a press event. See the Icon Explorer for more icons.')
			]
		}).addStyleClass("marginBoxContent");
	}
});