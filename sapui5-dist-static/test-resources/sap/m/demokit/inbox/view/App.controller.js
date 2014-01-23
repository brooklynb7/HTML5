jQuery.sap.require("sap.m.InstanceManager");
jQuery.sap.require("jquery.sap.history");

sap.ui.controller("view.App", {
	
	//=== Custom Part ==================================================================
	
	PAGE : {
		Home : 			{ type : undefined, 	app : "App",		master : undefined }, 
		SplitAppLr :	{ type : undefined, 	app : "App",		master : undefined },
		SplitAppPo :	{ type : undefined, 	app : "App",		master : undefined },
		LrMaster : 		{ type : "HTML", 		app : "SplitAppLr",	master : true },
		LrDetail : 		{ type : "HTML", 		app : "SplitAppLr",	master : false },
		LrCalendar :	{ type : "HTML", 		app : "SplitAppLr",	master : false },
		LrBCard :		{ type : "HTML", 		app : "SplitAppLr",	master : false },
		PoMaster : 		{ type : "HTML", 		app : "SplitAppPo",	master : true },
		PoDetail : 		{ type : "HTML", 		app : "SplitAppPo",	master : false },
		PoCalendar :	{ type : "HTML", 		app : "SplitAppPo",	master : false }
	},
	
	getDefaultPage : function() {
		return "Home";
	},
	
	getViewType : function(pageId) {
		return this.PAGE[pageId].type;
	},
	
	getViewName : function(pageId) {
		return "view." + pageId;
	}, 
	
	getAppId : function(pageId) {
		return this.PAGE[pageId].app;
	},
	
	isMaster : function(pageId) {
		return this.PAGE[pageId].master;
	},
	
	getTransition : function(pageId) {
		if ("App" === this.getAppId(pageId)) {
			return "flip";
		} else if (jQuery.device.is.phone || this.isMaster(pageId)) {
			return "slide";
		} else {
			return "show";
		}
	},
	
	isRootInApp: function(pageId) {
		return pageId === "SplitAppLr" || pageId === "SplitAppPo";
	},
	
	writeToHistory : function(pageId) {
		return true;
	},
	
	//=== Generic Part =========================================================================
	onInit : function() {
		
		var historyDefaultHandler = function(navType) {
			if(navType === jQuery.sap.history.NavType.Back){
				this.navBack(this.getDefaultPage());
			}else{
				this.navTo(this.getDefaultPage(), null, false);
			}
		};
		
		var historyPageHandler = function(params, navType){
			if(!params || !params.id){
				jQuery.sap.log.error("invalid parameter: " + params);
			}else{
				if(navType === jQuery.sap.history.NavType.Back){
					this.navBack(params.id);
				}else{
					this.navTo(params.id, params.data, false);
				}
			}
		};
		
		jQuery.sap.history({
			routes: [{ 
				// This handler is executed when you navigate back to the history state on the path "page"
				path : "page", handler: jQuery.proxy(historyPageHandler, this) 
			}],
			// The default handler is executed when you navigate back to the history state with an empty hash
			defaultHandler: jQuery.proxy(historyDefaultHandler, this)
		});
		
		// subscribe to event bus
		var bus = sap.ui.getCore().getEventBus();
		bus.subscribe("nav", "to", this.navHandler, this);
		bus.subscribe("nav", "back", this.navHandler, this);
		bus.subscribe("nav", "virtual", this.navHandler, this);
	},
	
	navHandler: function(channelId, eventId, data) {
		if(eventId === "to"){
			if (!data.id) {
				jQuery.sap.log.error("'nav to' event cannot be processed. data.id must be given");
			}
			this.navTo(data.id, data.data, true);
		}else if(eventId === "back"){
			//provide a default value for navigation,  one step back in history
			this._previousId = data.id;
			if(!data.step){
				data.step = 1;
			}
			
			if(data.home){
				jQuery.sap.history.backToHash("");
			}else if(data.step > 0){
				jQuery.sap.history.back(data.step);
			}else{
				jQuery.sap.log.error("'nav back' event cannot be processed. At least one from [data.step, data.home] must be given with valid value");
			}
		}else if(eventId === "virtual"){
			jQuery.sap.history.addVirtualHistory();
		}else{
			jQuery.sap.log.error("'nav' event cannot be processed. There's no handler registered for event with id: " + eventId);
		}
	},
	
	navTo : function(id, data, writeHistory) {
		if(id === undefined){
			// invalid id
			jQuery.sap.log.error("navTo failed due to missing id");
		}else{
			//Closing popovers needs to be done in navTo and navBack
			if(sap.m.InstanceManager.hasOpenPopover()){
				sap.m.InstanceManager.closeAllPopovers();
				jQuery.sap.log.info("navTo - closed popover(s)");
			}

			// navigate on app
			var bUpdateDataOnly = this.toView(id, data);
			// write browser history
			if(!bUpdateDataOnly && (writeHistory === undefined || writeHistory) && this.writeToHistory(id)){
				var bookmarkable = false;
				var stateData = { id: id };
				jQuery.sap.history.addHistory("page", stateData, bookmarkable);
			}
			// log
			jQuery.sap.log.info("navTo - to page: " + id);
		}
	},
	
	/**
	 *  this is the lazy loading of views (based on identical IDs for view and view-instance)
	 */
	toView: function(id, data){
		
		// load view on demand
		var appId = this.getAppId(id);
		var app = sap.ui.getCore().byId(appId);
		var master = this.isMaster(id);
		var currentPage = app.getCurrentPage(master);
		var page = app.getPage(id, master);
		var updateDataOnly = false;

		if(currentPage.getId() === id){
			//navigating to the same page as the current page, then only update the data
			updateDataOnly = true;
		}
		
		if (page === null) {
			var type = this.getViewType(id);
			var name = this.getViewName(id);
			var page = sap.ui.view({
				id : id,
				viewName : name,
				type : type
			});
			
			app.addPage(page, master);
			jQuery.sap.log.info("app controller > loaded page: " + id);
		}else{
			if(updateDataOnly){
				var oNavInfo = {
						from:null,
						fromId:null,
						to:page,
						toId:page.getId(),
						firstTime:false,
						isTo:false,
						isBack:false,
						isBackToPage:false,
						isBackToTop:false,
						direction:"to"
				};
				
				var oEvent = jQuery.Event("BeforeShow", oNavInfo);
				oEvent.srcControl = page;
				oEvent.data = data;
				oEvent.backData = {};
				page._handleEvent(oEvent);
				
				return updateDataOnly;
			}
		}
		
		if(this.isRootInApp(id)){
			this.onRoot(app.getPage(id));
		}
		
		// navigate in the app control
		var transition = this.getTransition(id);
		if (transition) {
			app.to(id, transition, data);
		} else {
			jQuery.sap.log.error("app controller > missing transition for page: " + id);
		}
		
		return updateDataOnly;
	},
	
	navBack : function(id) {
		if(!id){
			// invalid parameter
			jQuery.sap.log.error("navBack - parameters id must be given");
		}else{
			if(sap.m.InstanceManager.hasOpenDialog()){
				// close open dialogs 
				sap.m.InstanceManager.closeAllDialogs();
				jQuery.sap.log.info("navBack - closed dialog(s)");
			}
			if (sap.m.InstanceManager.hasOpenPopover()) {
				//Closing popovers needs to be done in navTo and navBack
				sap.m.InstanceManager.closeAllPopovers();
				jQuery.sap.log.info("navBack - closed popover(s)");
			}
			// ... and navigate back
			var appId = this.getAppId(id);
			var app = sap.ui.getCore().byId(appId);
			app.backToPage(id);
			jQuery.sap.log.info("navBack - back to page: " + id);
			
			if(this.isRootInApp(id)){
				this.onRoot(app.getCurrentPage());
			}
		}
	},
	
	onRoot: function(oApp){
		if(oApp instanceof sap.m.SplitContainer){
			oApp.backToTopDetail();
			oApp.backToTopMaster();
		}
	}
});