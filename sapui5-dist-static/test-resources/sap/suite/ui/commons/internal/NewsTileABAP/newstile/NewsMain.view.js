jQuery.sap.require("sap.suite.ui.commons.FeedTile");

sap.ui.jsview("newstile.NewsMain", {

	getControllerName : function() {

		return "newstile.NewsMain";
	},

	createContent : function(oController) {

		this.setHeight('100%');
	}
});