sap.ui.jsview("views.app", {

	getControllerName: function () {
		return "views.app";
	},

	createContent : function (oController) {

		// to avoid scrollbars on desktop the root view must be set to block display
		this.setDisplayBlock(true);

		// create app
		this.app = new sap.m.SplitApp({
			afterDetailNavigate: function () {
				this.hideMaster();
			}
		});

		// add first pages only, the rest is lazy loaded
		this.app.addMasterPage(sap.ui.xmlview(util.Id.CATEGORIES, "views." + util.Id.CATEGORIES));
		if (!jQuery.device.is.phone) {
			this.app.addDetailPage(sap.ui.xmlview(util.Id.WELCOME, "views." + util.Id.WELCOME));
		}

		// done
		return new sap.m.Shell("Shell", {
			title : "ca.ui Explored",
			showLogout : false,
			app : this.app,
			homeIcon : {
				'phone' : 'images/57_iPhone_Desktop_Launch.png',
				'phone@2' : 'images/114_iPhone-Retina_Web_Clip.png',
				'tablet' : 'images/72_iPad_Desktop_Launch.png',
				'tablet@2' : 'images/144_iPad_Retina_Web_Clip.png',
				'favicon' : 'images/favicon.ico',
				'precomposed': false
			}
		});
	}
});