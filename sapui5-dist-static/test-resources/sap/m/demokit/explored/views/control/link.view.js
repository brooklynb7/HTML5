sap.ui.jsview("views.control.link", {

	createContent : function (oController) {

		// CODESNIP_START
		var oLink1 = new sap.m.Link({
			text : "Click me",
			press: function () {
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.alert("Link was clicked!");
			}
		});

		var oLink2 = new sap.m.Link({
			text : "Disabled Link",
			enabled : false
		});

		var oLink3 = new sap.m.Link({
			text : "Open SAP Homepage",
			target: "_blank",
			href: "http://www.sap.com/"
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width : "100%",
			content : [
				oLink1,
				oLink2,
				oLink3,
				util.UiFactory.createDescription('These are some links. Typically links are used in user interfaces to trigger the navigation to related content inside or outside of the current application')
			]
		}).addStyleClass("marginVerticalContent");
	}
});