sap.ui.jsview("view.App", {

	getControllerName: function() {
		return "view.App";
	},
	
	createContent: function(oController) {

		// to avoid scrollbars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app control
		this.app = new sap.m.App();

		// add only the home page. all others pages are lazy loaded
		var homeView = sap.ui.jsview("Home", "view.Home");
		this.app.addPage(homeView);

		// done
		return this.app;
	}
});