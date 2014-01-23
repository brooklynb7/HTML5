sap.ui.jsview("views.control.text", {

	createContent : function (oController) {

		// CODESNIP_START
		var text1 = new sap.m.Text({
			text: "{/Text}"
		});
		var text2 = new sap.m.Text({
			text: "{/Text}",
			maxLines: 2
		});
		// CODESNIP_END

		return new sap.m.VBox({
			items: [
				text1,
				text2.addStyleClass("marginOnlyTop"),
				util.UiFactory.createDescription('With the text control you can embed longer paragraphs of text into your application that need text wrapping. With the maxLines property you can limit the actual number of lines displayed. The rest of the text will be elided.')
			]
		}).addStyleClass("marginBoxContent");
	}
});