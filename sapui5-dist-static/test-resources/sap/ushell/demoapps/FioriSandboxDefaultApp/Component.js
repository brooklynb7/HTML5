// define a root UIComponent which exposes the main view
jQuery.sap.declare("sap.ushell.demoapps.FioriSandboxDefaultApp.Component");
jQuery.sap.require("sap.ui.core.UIComponent");

// new Component
sap.ui.core.UIComponent.extend("sap.ushell.demoapps.FioriSandboxDefaultApp.Component", {

	metadata : {

		version : "@version@",

		library : "sap.ushell.demoapps.FioriSandboxDefaultApp",

		includes : [ ],

		dependencies : {
			libs : [ "sap.m" ],
			components : []
		},
        config: {
            "title": "Fiori Sandbox Default App",
            //"resourceBundle" : "i18n/i18n.properties",
            //"titleResource" : "shellTitle",
            "icon" : "sap-icon://Fiori2/F0429"
        }
	},

	createContent : function() {
		return sap.ui.xmlview("sap.ushell.demoapps.FioriSandboxDefaultApp.App");
	}
});
