sap.ui.jsview("views.control.responsivePopover", {

	createContent : function (oController) {

		// CODESNIP_START

		// create popover with a list in the content
		var popover = new sap.m.ResponsivePopover({
			title: "{Name}",
			placement: sap.m.PlacementType.Bottom,
			beginButton: new sap.m.Button({
				text: "Action A",
				press: function () {
					popover.close();
				}
			}),
			endButton: new sap.m.Button({
				text: "Action B",
				press: function () {
					popover.close();
				}
			}),
			content: new sap.m.Image({
				src: "{ProductPicUrl}",
				width: "15em"
			})
		}).addStyleClass("sapUiPopupWithPadding");

		var openButton = new sap.m.Button({
			text : "Show Dialog (Phone) or Popover (Other)",
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
				util.UiFactory.createDescription('The Responsive Popover is an abstraction of Popover and Dialog. On the phone a Dialog will be shown. On tablet and desktop a Popover is shown.')
			]
		}).addStyleClass("marginVerticalContent");
	}
});