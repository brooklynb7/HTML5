jQuery.sap.declare("Application");

jQuery.sap.require("sap.ui.app.Application");
jQuery.sap.require("sap.m.MessageToast");
jQuery.sap.require("model.Config");

sap.ui.app.Application.extend("Application", {

	init : function () {
		
		// set data model (mock/oData)
		var m;
		if (!model.Config.isMock) {
			var url = model.Config.getServiceUrl();
			m = new sap.ui.model.odata.ODataModel(url, true);
		} else {
			m = new sap.ui.model.json.JSONModel("model/mock.json");
		}
		sap.ui.getCore().setModel(m);
		
		// publish event once data is loaded
		m.attachRequestCompleted(function () {
			sap.ui.getCore().getEventBus().publish("app", "DataLoaded");
		});
		
		// set employee mock model
		var eModel = new sap.ui.model.json.JSONModel("model/mockEmployee.json");
		sap.ui.getCore().setModel(eModel, "employee");
		
		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/messageBundle.properties"
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
	},
	
	main : function () {
		
		// create app view and put to html root element
		var root = this.getRoot();
		sap.ui.jsview("app", "view.App").placeAt(root);
		
		// show message if in demo mode
		if (model.Config.isMock) {
			var msg = "Running in demo mode with mock data";
			sap.m.MessageToast.show(msg, {
				duration: 1000
			});
		}
	}
});