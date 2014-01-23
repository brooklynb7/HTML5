sap.ui.jsview("views.control.radioButton", {

	createContent : function (oController) {

		// CODESNIP_START
		var radioButton1 = new sap.m.RadioButton({
			text: "{/ProductCollection/0/Name}",
			groupName: "GroupA",
			selected: true
		});
		var radioButton2 = new sap.m.RadioButton({
			text: "{/ProductCollection/1/Name}",
			groupName: "GroupA"
		});
		var radioButton3 = new sap.m.RadioButton({
			text: "{/ProductCollection/2/Name}",
			groupName: "GroupA"
		});
		var radioButton4 = new sap.m.RadioButton({
			text: "{/ProductCollection/3/Name}",
			groupName: "GroupA"
		});
		var radioButton5 = new sap.m.RadioButton({
			text: "{/ProductCollection/4/Name}",
			groupName: "GroupA"
		});
		// CODESNIP_END

		return new sap.m.VBox({
			items: [
				radioButton1,
				radioButton2,
				radioButton3,
				radioButton4,
				radioButton5,
				util.UiFactory.createDescription('Typically the Radio Button is used by other controls. E.g. the List uses it the single selection. But you can also use the Radio Buttons standalone control to select exactly one out of many options')
			]
		}).addStyleClass("marginBoxContent");
	}
});