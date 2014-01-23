sap.ui.jsview("views.control.textArea", {

	createContent : function (oController) {

		// CODESNIP_START
		var textArea = new sap.m.TextArea({
			value : "{/Text}",
			rows : 8
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				textArea,
				util.UiFactory.createDescription('The Text Area allows to enter multi-line text and automatically breaks to a new line for overflow text. If the text gets too big to be displayed at once the user can scroll up and down')
			]
		}).addStyleClass("marginVerticalContent");
	}
});