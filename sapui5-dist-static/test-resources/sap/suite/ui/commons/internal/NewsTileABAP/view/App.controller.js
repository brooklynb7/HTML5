jQuery.sap.require("jquery.sap.history");
jQuery.sap.require("sap.m.InstanceManager");
jQuery.sap.require("sap.suite.ui.commons.util.FeedAggregator");

sap.ui.controller("view.App", {

	getDefaultPage : function() {

		return "NewsTile";
	},

	onInit : function() {

	},

	removeContent : function _removeContent(channelId, eventId, data) {

		var oShell = sap.ui.getCore().byId("unifiedShell");
		oShell.destroyContent(data.oContent);
	},

	insertContent : function _insertContent(channelId, eventId, data) {

		var oShell = sap.ui.getCore().byId("unifiedShell");
		oShell.addContent(data.oContent);
	}

});