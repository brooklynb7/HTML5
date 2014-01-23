
jQuery.sap.declare("sap.ca.ui.NavigationHandler");

jQuery.sap.require("jquery.sap.history");
jQuery.sap.require("sap.m.InstanceManager");

sap.ca.ui.NavigationHandler = function(oApp, oAppConfig) {
	//add config
	this._app = oApp;
	this.config = oAppConfig;
};

sap.ca.ui.NavigationHandler.prototype._getValue = function(sPropName) {
	var val = this[sPropName];
	if (typeof val == 'string' || val instanceof String){
		return val;
	}
	return val();
};

sap.ca.ui.NavigationHandler.prototype.subscribe = function () {

	// handler for initial history
	var historyDefaultHandler = function (navType) {
		var pageId = this.config.getStringValue("defaultPageId");
		if (navType === jQuery.sap.history.NavType.Back) {
			this._navBack(pageId);
		} else {
			this._navTo(pageId, null, false);
		}
	};
	
	// handler for changes in browser history
	var historyPageHandler = function (params, navType) {
		if (!params || !params.id) {
			jQuery.sap.log.error("invalid parameter: " + params);
		} else {
			if (navType === jQuery.sap.history.NavType.Back) {
				this._navBack(params.id);
			} else {
				this._navTo(params.id, params.data, false);
			}
		}
	};
	
	// initialize the history plugin
	jQuery.sap.history({
		routes: [{ 
			// This handler is executed when you navigate back to the history state on the path "page"
			path : "page",
			handler: jQuery.proxy(historyPageHandler, this)
		}],
		// The default handler is executed when you navigate back to the history state with an empty hash
		//defaultHandler: jQuery.proxy(historyDefaultHandler, this)
	});
	
	// subscribe to event bus
	var bus = sap.ui.getCore().getEventBus();
	bus.subscribe("nav", "to", this._navHandler, this);
	bus.subscribe("nav", "back", this._navHandler, this);
	bus.subscribe("nav", "backMaster", this._backMaster, this);
	bus.subscribe("nav", "virtual", this._navHandler, this);
};

sap.ca.ui.NavigationHandler.prototype._backMaster = function (channelId, eventId, data) {
	this._app.backMaster();
};

sap.ca.ui.NavigationHandler.prototype._navHandler = function (channelId, eventId, data) {
	
	if (eventId === "to") {
		this._navTo(data.id, data.data, true);
	} 
	else if (eventId === "back") {
		this._navBack(data.id);
		//provide a default value for navigation,  one step back in history
		/*if (!data.step) {
			data.step = 1;
		}
		if (data.home) {
			jQuery.sap.history.backToHash("");
		} 
		else if (data.step > 0) {
			jQuery.sap.history.back(data.step);
		} 
		else {
			jQuery.sap.log.error("'nav back' event cannot be processed. At least one from [data.step, data.home] must be given with valid value");
		}
		*/
	} 
	else if (eventId === "virtual") {
		jQuery.sap.history.addVirtualHistory();
	} 
	else {
		jQuery.sap.log.error("'nav' event cannot be processed. There's no handler registered for event with id: " + eventId);
	}
};

sap.ca.ui.NavigationHandler.prototype._navTo = function (id, data, writeHistory) {
		
	if (id === undefined) {
		
		// invalid id
		jQuery.sap.log.error("navTo failed due to missing id");
		
	} else {
		
		// close open popovers
		if(sap.m.InstanceManager.hasOpenPopover()){
			sap.m.InstanceManager.closeAllPopovers();
			jQuery.sap.log.info("navTo - closed popover(s)");
		}

        var transition = this.config.getStringValue("transition");
        var isMaster = this.config.getBoolValue("isMaster",[id]);
        var hasMaster = isMaster || this.config.getBoolValue("masterVisible",[id]);
        if (id instanceof sap.ui.core.Control) {

            if (this._app.getPage(id.getId()) === null) {
                this._app.addPage(id);
            }
        }
        else {
            // load view on demand
            var viewType = this.config.getStringValue("viewType");
            var viewName = this.config.getStringValue("viewName",[id]);
            if (this._app.getPage(id, isMaster) === null) {
                var page = sap.ui.view({
                    id : id,
                    viewName : viewName,
                    type : viewType
                });
                this._app.addPage(page, isMaster);
                jQuery.sap.log.info("app controller > loaded page: " + id);
            }
        }


        this._app.toggleStyleClass("sapMSplitAppFullscreen", !hasMaster);
		this._app.to((page !== undefined ? page.getId() : id), transition, data);
		
		// write browser history
		if ((writeHistory === undefined || writeHistory)) {
			//TODO why does this work in explored app but no here?
			//&& (jQuery.device.is.phone || master)) {
			var bookmarkable = false;
			var stateData = { id : id };
//			jQuery.sap.history.addHistory("page", stateData, bookmarkable);
		}
		
		// log
		jQuery.sap.log.info("navTo - to page: " + id);
	}
};

sap.ca.ui.NavigationHandler.prototype._navBack = function (id) {
	if (!id) {		
		// invalid parameter
		jQuery.sap.log.error("navBack - parameters id must be given");
		
	} else {
		
		// close open popovers
		if (sap.m.InstanceManager.hasOpenPopover()) {
			sap.m.InstanceManager.closeAllPopovers();
		}
		
		// close open dialogs
		if (sap.m.InstanceManager.hasOpenDialog()) {
			sap.m.InstanceManager.closeAllDialogs();
			jQuery.sap.log.info("navBack - closed dialog(s)");
		}
		
		// ... and navigate back
		var currentId = (this._app.getCurrentPage()) ? this._app.getCurrentPage().getId() : null;
		if (currentId !== id) {
			
			var isMaster = this.config.getBoolValue("isMaster",[id]);
	        var hasMaster = isMaster || this.config.getBoolValue("masterVisible",[id]);
			
	        this._app.toggleStyleClass("sapMSplitAppFullscreen", !hasMaster);
			this._app.backToPage(id);
		}
		jQuery.sap.log.info("navBack - back to page: " + id);
	}
};