sap.ui.controller("views.control.listToolbar", {

	handleInfobarPress : function (evt) {
		jQuery.sap.require("sap.m.MessageToast");
		sap.m.MessageToast.show("info toolbar pressed");
	},

	handleButtonPress : function (evt) {
		jQuery.sap.require("sap.m.MessageToast");
		sap.m.MessageToast.show("header toolbar button pressed");
	}
});