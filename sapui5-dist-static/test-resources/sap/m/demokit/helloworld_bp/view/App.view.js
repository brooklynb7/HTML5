sap.ui.jsview("view.App", {

	getControllerName: function () {
		return "view.App";
	},
	createContent: function (oController) {

		// to avoid scrollbars on desktop the root view must be set to block display
		this.setDisplayBlock(true);

		// create app control
		this.app = new sap.m.App({
			homeIcon : {
				'phone' : 'img/57_iPhone_Desktop_Launch.png',
				'phone@2' : 'img/114_iPhone-Retina_Web_Clip.png',
				'tablet' : 'img/72_iPad_Desktop_Launch.png',
				'tablet@2' : 'img/144_iPad_Retina_Web_Clip.png',
				'favicon' : 'img/favicon.ico',
				'precomposed': false
			}
		});

		// add only the home page. all others pages are lazy loaded
		var homeView = sap.ui.jsview("Home", "view.Home");
		this.app.addPage(homeView);

		// done
		return this.app;
	}
});