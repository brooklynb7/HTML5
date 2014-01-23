sap.ui.controller("launchtile.LaunchApp", {

	onInit : function() {

	},

	onAfterRendering : function() {

	},

	select : function(evt) {

		window.open(evt.getParameter("link"), "_parent");
	}

});