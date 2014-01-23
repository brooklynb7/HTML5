sap.ui.jsview("view.Home", {

	getControllerName: function() {
		return "view.Home";
	},
	
	createContent : function(oController) {
		// create the first page of your application
		this.page = new sap.m.Page("page1", {
				title: "{i18n>page1Title}",
				showNavButton: false,
				content : new sap.m.Button({		// content is just one Button
						text : "{i18n>buttonText}",
						press : [ oController.buttonTap, oController ]
				})
		});
		
		// done
		return this.page;
	}
});