sap.ui.jsview("views.control.label", {

	createContent : function (oController) {

		// CODESNIP_START
		var label1 = new sap.m.Label({
			text: "{/ProductCollection/0/Name}"
		});
		var label2 = new sap.m.Label({
			text: "{/ProductCollection/1/Name}"
		});
		var label3 = new sap.m.Label({
			text: "{/ProductCollection/2/Name}"
		});
		var label4 = new sap.m.Label({
			text: "{/ProductCollection/3/Name}",
			design: sap.m.LabelDesign.Bold
		});
		var label5 = new sap.m.Label({
			text: "{/ProductCollection/4/Name}"
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width : "100%",
			content : [
				label1,
				label2,
				label3,
				label4,
				label5,
				util.UiFactory.createDescription('Labels are helpful when you need to describe some other UI control')
			]
		}).addStyleClass("marginVerticalContent");
	}
});