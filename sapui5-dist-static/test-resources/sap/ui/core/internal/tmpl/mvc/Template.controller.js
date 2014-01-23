sap.ui.controller("sap.ui.core.tmpl.mvc.Template", {
	
	onInit: function(oEvent) {},
	onBeforeRendering: function(oEvent) {},
	onAfterRendering: function(oEvent) {
		
		var that = this;
		setTimeout(function() {
			sap.ui.template("myTemplate1InView");
			sap.ui.template("myTemplate2InView");
		}, 0);
		
	},
	onExit: function(oEvent) {}

});