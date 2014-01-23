// This is the top level controller which manages the page navigation and history handling.
sap.ui.controller("view.App", {
	onInit : function() {
		// Initialize history management
		var that = this;
		this.oEventBus = sap.ui.getCore().getEventBus();
		this.oEventBus.subscribe("nav", "to", this.navTo, this);
		this.oEventBus.subscribe("nav", "back", this.navBack, this);
		
		this.oEventBus.subscribe("app", "mode", function(sChannelId, sEventId, oData){
			this.getView().app.setMode(oData.mode);
		}, this);
		
		jQuery.sap.require("jquery.sap.history");
		jQuery.sap.history({
			routes: [{
				path: "page",
				handler: function(params, navType) {
					if (!params || !params.id) {
						jQuery.sap.log.error("invalid page parameter: " + params);
					} else {
						that.oEventBus.publish("nav", "to", {
							viewId: params.id,
							navType: navType
						});
					}
				}
			}],
			defaultHandler: function(navType) {
				that.oEventBus.publish("nav", "to", {
					viewId: "view.inbox.Home",
					navType: navType
				});
			}
		});
		
	},
	
	// This is how we do the page back navigation
	navBack : function(sChannelId, sEventId, oData) {
		jQuery.sap.history.back();
		jQuery.sap.log.info("navBack");
	},
	
	// This method is called for multiple purpose:
	//  1. When navigate to a new page: history state is added and page(view) is instantiated when it's loaded for the first time
	//  2. When hardware back button is tapped: do 
	
	// oData has following properties:
	// 1. viewName: the name of the view
	// 2. viewId: the id of the goint to be created instance of view
	// 3. data: this is passed to the page which is navigated to
	// 4. navType: this is the type of navigation, if this is undefined, it's a to new page navigation.
	navTo : function(sChannelId, sEventId, oData/*id, writeHistory, navType, viewId*/) {
		var app = this.getView().app,
			sViewName = oData.viewName,
			sViewId = oData.viewId,
			oDataObject = oData.data,
			sNavType = oData.navType,
			oView;
		
		// if no specific viewId is provided, the navigation id will be used as a viewId. This is used for creating more instances 
		// of the same view.
		if(!sViewId){
			sViewId = sViewName;
		}
		
		// check param
		if (!sViewId) {
			jQuery.sap.log.error("navTo failed due to insufficient params: " + sViewId);
			return;
		}
		
		var bMaster = (sViewId.indexOf("view.inbox.") !== -1);
		
		if (sNavType === jQuery.sap.history.NavType.Back) {
			if(bMaster){
				app.backMaster();
			}
		} else {
			if (!sap.ui.getCore().byId(sViewId)) {
				// this is the lazy loading of views
				jQuery.sap.log.info("now loading view with name '" + sViewName + "'");
				oView = sap.ui.jsview(sViewId, sViewName);
				(bMaster) ? app.addMasterPage(oView) : app.addDetailPage(oView);
			} 
			(bMaster) ? app.toMaster(sViewId, oDataObject) : app.toDetail(sViewId, oDataObject);
		}
		
		// write history
		if (!sNavType && (bMaster || jQuery.device.is.phone)) {
			jQuery.sap.history.addHistory("page", {id: sViewId}, false);
		}
		
		// log
		jQuery.sap.log.info("navTo '" + sViewId + "' (" + (!sNavType && bMaster) + "," + sNavType + ")");
	}
});