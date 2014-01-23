sap.ui.jsview("views.control.slider", {

	createContent : function (oController) {

		// CODESNIP_START
		var oSlider1 = new sap.m.Slider({
			value: 30,
			width: '90%'
		});

		var oSlider2 = new sap.m.Slider({
			value: 27,
			width: "10em"
		});

		var oSlider3 = new sap.m.Slider({
			value: 40,
			width: "15em"
		});

		var oSlider4 = new sap.m.Slider({
			min: 0,
			max: 50,
			value: 5,
			width: '66%',
			enabled: false
		});

		var oSlider5 = new sap.m.Slider({
			min: 0,
			max: 10,
			value: 9,
			width: '77%'
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				oSlider1,
				oSlider2,
				oSlider3,
				oSlider4,
				oSlider5,
				util.UiFactory.createDescription('With the Slider a user can choose a value from a numerical range')
			]
		}).addStyleClass("marginVerticalContent");
	}
});
