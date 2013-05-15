sap.ui.jsview("view.App", {

	getControllerName: function() {
		return "view.App";
	},
	
	createContent : function(oCon) {
		
		// add first pages (the rest is lazy loaded)
		this.app = new sap.m.App();
		this.app.addPage(sap.ui.jsview("Home", "view.Home"));
		this.app.addPage(sap.ui.jsview("Cart", "view.Cart")); // cart needs to be loaded before being show because of dependency to controller
		
		return this.app;
	}
});