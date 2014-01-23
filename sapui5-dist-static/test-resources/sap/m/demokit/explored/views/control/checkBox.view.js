sap.ui.jsview("views.control.checkBox", {

	createContent : function (oController) {

		// CODESNIP_START
		var checkBox1 = new sap.m.CheckBox({
			text: "{/ProductCollection/0/Name}",
			checked: true
		});
		var checkBox2 = new sap.m.CheckBox({
			text: "{/ProductCollection/1/Name}"
		});
		var checkBox3 = new sap.m.CheckBox({
			text: "{/ProductCollection/2/Name}",
			checked: true
		});
		var checkBox4 = new sap.m.CheckBox({
			text: "{/ProductCollection/3/Name}"
		});
		var checkBox5 = new sap.m.CheckBox({
			text: "{/ProductCollection/4/Name}"
		});
		// CODESNIP_END

		return new sap.m.VBox({
			items: [
				checkBox1,
				checkBox2,
				checkBox3,
				checkBox4,
				checkBox5,
				util.UiFactory.createDescription('Checkboxes allow users to select a subset of options. If you want to turn an option off/on you should rather use the Switch control', "OnlyTop")
			]
		}).addStyleClass("marginBoxContent");
	}
});
