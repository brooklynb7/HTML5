jQuery.sap.declare("Application");
jQuery.sap.require("sap.ui.app.Application");
jQuery.sap.require("model.Config");
jQuery.sap.require("sap.m.MessageToast");

sap.ui.app.Application.extend("Application", {
	
	init : function () {
		
		// set data model
		var url = model.Config.getServiceUrl();
		var m = new sap.ui.model.odata.ODataModel(url, true, model.Config.getUser(), model.Config.getPwd());
		sap.ui.getCore().setModel(m);
		
		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/appTexts.properties"
		});
		sap.ui.getCore().setModel(i18nModel, "i18n");
		
		// set device model
		var deviceModel = new sap.ui.model.json.JSONModel({
			isTouch : sap.ui.Device.support.touch,
			isNoTouch : !sap.ui.Device.support.touch,
			isPhone : jQuery.device.is.phone,
			isNoPhone : !jQuery.device.is.phone,
			listMode : (jQuery.device.is.phone) ? "None" : "SingleSelectMaster",
			listItemType : (jQuery.device.is.phone) ? "Active" : "Inactive"
		});
		deviceModel.setDefaultBindingMode("OneWay");
		sap.ui.getCore().setModel(deviceModel, "device");
		
		// start mock server
		if (model.Config.isMock) {
			jQuery.sap.require("sap.ui.app.MockServer");
			var oMockServer = new sap.ui.app.MockServer({
				rootUri: url
			});
			oMockServer.simulate("model/metadata.xml", "model/");
			oMockServer.start();
		}
	},
	
	main : function () {
		
		// create app view and put to html root element
		var root = this.getRoot();
		sap.ui.jsview("app", "view.App").placeAt(root);
		
		// show message if in demo mode
		if (model.Config.isMock) {
			var msg = "Running in demo mode with mock data.";
			sap.m.MessageToast.show(msg, {
				duration: 2000
			});
		}
	}
});