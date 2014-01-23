sap.ui.jsview("view.Page2", {

	getControllerName: function() {
		return "view.Page2";
	},
	createContent : function(oController) {

		// create the second page of your application
		this.page = new sap.m.Page("page2", {
				title: "{i18n>page2Title}",
				showNavButton: true,				// page 2 should display a back button
				navButtonPress: [ oController.navButtonPress, oController ],
				icon: "{img>icon/sapLogo}",
				content : new sap.m.Label({text:"{i18n>labelText}"})
		});
		
		// done
		return this.page;
	}
});