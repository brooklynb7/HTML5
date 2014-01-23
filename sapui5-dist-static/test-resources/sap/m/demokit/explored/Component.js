jQuery.sap.declare("sap.ui.demo.explored.Component");

sap.ui.core.UIComponent.extend("sap.ui.demo.explored.Component", {

	metadata : {
		routing : {
			config : {
				viewType : "XML",
				viewPath : "views",
				targetControl : "splitApp",
				clearTarget : false
			},
			routes : [
				{
					pattern : "category/{id}",
					name : "category",
					view : "navCategory",
					viewLevel : 2,
					targetAggregation : "masterPages",
					subroutes : [
						{
							pattern : "category/{id}/sub/{subId}",
							name : "sub",
							view : "navSub",
							viewLevel : 3,
							targetAggregation : "masterPages"
						}
					]
				},
				{
					pattern : "sample/{id}",
					name : "sample",
					view : "sample",
					viewLevel : 4,
					targetAggregation : "detailPages"
				},
				{
					pattern : "code/{id}",
					name : "code",
					view : "code",
					viewLevel : 5,
					targetAggregation : "detailPages",
					transition: "flip"
				},
				{
					pattern : "",
					name : "home",
					view : "navHome",
					viewLevel : 1,
					targetAggregation : "masterPages",
					subroutes : [
						{
							pattern : "{all*}",
							name : "notFound",
							view : "notFound",
							viewLevel : 2,
							targetAggregation : "detailPages"
						}
					]
				}
			]
		}
	},

	/**
	 * !!! The steps in here are sequence dependent !!!
	 */
	init : function () {

		// 1. some very generic requires
		jQuery.sap.require("util.UiFactory");
		jQuery.sap.require("util.ThemeDetection");
		jQuery.sap.require("util.Formatter");
		jQuery.sap.require("util.ObjectSearch");
		jQuery.sap.require("sap.ui.core.routing.History");
		jQuery.sap.require("sap.m.InstanceManager");
		jQuery.sap.require("model.Description");
		jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
		jQuery.sap.require("sap.ui.demo.explored.MyRouter");
		jQuery.sap.require("model.Navigation");
		jQuery.sap.require("model.Mock");

		// 2. call overriden init (calls createContent)
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

		// 3a. monkey patch the router
		var router = this.getRouter();
		router.myNavBack = sap.ui.demo.explored.MyRouter.myNavBack;
		router.myNavToWithoutHash = sap.ui.demo.explored.MyRouter.myNavToWithoutHash;

		// 4. nav to initial pages
		if (!jQuery.device.is.phone) {
			router.myNavToWithoutHash("views.toHome", "XML", true);
			router.myNavToWithoutHash("views.welcome", "XML", false);
		}

		// 5. initialize the router
		this.routeHandler = new sap.m.routing.RouteMatchedHandler(router);
		router.initialize();
	},

	destroy : function () {
		
		if (this.routeHandler) {
			this.routeHandler.destroy();
		}
		
		// call overriden destroy
		sap.ui.core.UIComponent.prototype.destroy.apply(this, arguments);
	},

	/**
	 * 
	 */
	createContent : function () {

		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "views.app",
			type : "JS",
			viewData : { component : this }
		});

		// set navigation model
		var navModel = new sap.ui.model.json.JSONModel(model.Navigation);
		oView.setModel(navModel, "nav");
		
		// set mock model
		var mockModel = new sap.ui.model.json.JSONModel(model.Mock);
		oView.setModel(mockModel);
		
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
		oView.setModel(deviceModel, "device");

		// done
		return oView;
	}
});