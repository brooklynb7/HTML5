sap.ui.jsview("views.control.dateTimeInput", {

	createContent : function (oController) {

		// CODESNIP_START
		var input1 = new sap.m.DateTimeInput({
			type: sap.m.DateTimeInputType.Date,
			placeholder: 'Enter Date ...'
		});

		var input2 = new sap.m.DateTimeInput({
			type: sap.m.DateTimeInputType.Time,
			placeholder: 'Enter Time ...'
		});

		var input3 = new sap.m.DateTimeInput({
			type: sap.m.DateTimeInputType.DateTime,
			placeholder: 'Enter Date & Time ...'
		});
		// CODESNIP_END

		// create page
		return new sap.m.VBox({
			items: [
				new sap.m.Label({text: 'Date'}),
				input1,
				new sap.m.Label({text: 'Time'}),
				input2,
				new sap.m.Label({text: 'Date & Time'}),
				input3,
				util.UiFactory.createDescription('The Date & Time Input is an extension of the Input control and is dedicated to Date and Time', "OnlyTop")
			]
		}).addStyleClass("marginBoxContent");
	}
});