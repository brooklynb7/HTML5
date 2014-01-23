sap.ui.jsview("views.control.inputPassword", {

	createContent : function (oController) {

		// CODESNIP_START
		var label = new sap.m.Label({
			text: 'Password'
		});
		var input = new sap.m.Input({
			type: sap.m.InputType.Password,
			placeholder: 'Enter password ...'
		});
		// CODESNIP_END

		return new sap.m.VBox({
			items: [
				label,
				input,
				util.UiFactory.createDescription(model.Description.inputPassword, "OnlyTop")
			]
		}).addStyleClass("marginBoxContent");
	}
});