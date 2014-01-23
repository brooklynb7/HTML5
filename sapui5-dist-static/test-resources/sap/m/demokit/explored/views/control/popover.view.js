sap.ui.jsview("views.control.popover", {

	createContent : function (oController) {

		// CODESNIP_START

		// create popover with a list in the content
		var popover = new sap.m.Popover({
			title: "{Name}",
			placement: sap.m.PlacementType.Bottom,
			footer:  new sap.m.Bar({
				contentRight: [
					new sap.m.Button({
						text: "EMail",
						icon: "sap-icon://email",
						press: function () {
							popover.close();
							jQuery.sap.require("sap.m.MessageToast");
							sap.m.MessageToast.show("E-Mail has been sent");
						}
					})
				]
			}),
			content: new sap.m.Image({
				src: "{ProductPicUrl}",
				width: "15em"
			})
		}).addStyleClass("sapUiPopupWithPadding");

		var openButton = new sap.m.Button({
			text : "Show Popover",
			press : function (evt) {
				popover.openBy(this);
				popover.setModel(evt.getSource().getModel());
				popover.bindElement("/ProductCollection/0");
			}
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				openButton,
				util.UiFactory.createDescription('The Popover controls allows to show contextual information without leaving the current page. Press somewhere outside the popover to close it')
			]
		}).addStyleClass("marginVerticalContent");
	}
});
