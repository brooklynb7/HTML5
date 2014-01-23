sap.ui.jsview("views.control.inputTypes", {

	createContent : function (oController) {

		return new sap.m.VBox({
			items: [
				// CODESNIP_START
				new sap.m.Label({
					text: 'Text'
				}),
				new sap.m.Input({
					type: sap.m.InputType.Text,
					placeholder: 'Enter Text ...'
				}),

				new sap.m.Label({
					text: 'Email'
				}),
				new sap.m.Input({
					type: sap.m.InputType.Email,
					placeholder: 'Enter EMail ...'
				}),

				new sap.m.Label({
					text: 'Telephone'
				}),
				new sap.m.Input({
					type: sap.m.InputType.Tel,
					placeholder: 'Enter Telephone Number ...'
				}),

				new sap.m.Label({
					text: 'Number'
				}),
				new sap.m.Input({
					type: sap.m.InputType.Number,
					placeholder: 'Enter a Number ...'
				}),

				new sap.m.Label({
					text: 'URL'
				}),
				new sap.m.Input({
					type: sap.m.InputType.Url,
					placeholder: 'Enter URL ...'
				}),
				// CODESNIP_END
				util.UiFactory.createDescription(model.Description.inputTypes, "OnlyTop")
			]
		}).addStyleClass("marginBoxContent");
	}
});