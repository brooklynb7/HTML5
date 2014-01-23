sap.ui.jsview("views.control.html", {

	createContent : function (oController) {

		// CODESNIP_START
		var html = new sap.ui.core.HTML({
			content: '<div class="content"><h4>Lorem ipsum</h4><div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div><a target="_blank" href="http://en.wikipedia.org/wiki/Lorem_ipsum">Learn more about Lorem Ipsum ...</a></div>'
		});
		// CODESNIP_END

		return new sap.m.VBox({
			items: [
				html,
				util.UiFactory.createDescription('With the HTML controls you can easily embed any kind of HTML content into your UI5 mobile application')
			]
		}).addStyleClass("marginBoxContent");
	}
});
