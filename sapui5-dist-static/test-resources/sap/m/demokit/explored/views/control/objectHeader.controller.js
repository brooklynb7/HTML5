sap.ui.controller("views.control.objectHeader", {

	onInit: function() {
		this.getView().bindElement('/ProductCollection/0');
	},

	handleLinkObjectAttributePress: function(oEvent) {
		sap.m.URLHelper.redirect("http://www.sap.com", true);
	}

});
