jQuery.sap.require("jquery.sap.history");
jQuery.sap.require("sap.m.InstanceManager");

sap.ui.controller("views.app", {

	getDefaultPage : function () {
		return util.Id.CATEGORIES;
	},

	onInit : function () {

		// subscribe to history changes
		var historyDefaultHandler = function (navType) {
			if (navType === jQuery.sap.history.NavType.Back) {
				this.navBack(this.getDefaultPage());
			} else {
				this.navTo(this.getDefaultPage(), null, false);
			}
		};
		var historyPageHandler = function (params, navType) {
			if (!params || !params.id) {
				jQuery.sap.log.error("invalid parameter: " + params);
			} else {
				if (navType === jQuery.sap.history.NavType.Back) {
					this.navBack(params.id);
				} else {
					this.navTo(params.id, params.data, false);
				}
			}
		};
		jQuery.sap.history({
			routes: [{
				path : "page",
				handler : jQuery.proxy(historyPageHandler, this)
			}],
			defaultHandler: jQuery.proxy(historyDefaultHandler, this)
		});

		// subscribe to event bus
		var bus = sap.ui.getCore().getEventBus();
		bus.subscribe("nav", "to", this.navHandler, this);
		bus.subscribe("nav", "back", this.navHandler, this);
		bus.subscribe("nav", "virtual", this.navHandler, this);
	},
	
	navHandler : function (channelId, eventId, data) {
		if (eventId === "to") {
			this.navTo(data.id, data.data, true);
		} else if (eventId === "back") {
			jQuery.sap.history.back();
		} else if (eventId === "virtual") {
			jQuery.sap.history.addVirtualHistory();
		} else {
			jQuery.sap.log.error("'nav' event cannot be processed. There's no handler registered for event with id: " + eventId);
		}
	},

	navTo : function (id, data, writeHistory) {

		if (id === undefined) {

			// invalid parameter
			jQuery.sap.log.error("navTo failed due to missing id");

		} else {

			// is it a master?
			var master = !(id.indexOf("control.") === 0 
							|| id.indexOf("dialogs.") === 0 
							|| id.indexOf("type.") === 0 
							|| id.indexOf("format.") === 0 
							|| id.indexOf("sample.") === 0
							|| id.indexOf("utils.") === 0);
			
			// load view on demand
			var app = this.getView().app;
			if (app.getPage(id, master) === null) {
				var type = ("code" === id || "controls" === id) ? "XML" : "XML";
				var page = sap.ui.view({
					id : id,
					viewName : "views." + id,
					type : type
				});
				if (master) {
					app.addMasterPage(page);
				} else {
					app.addDetailPage(page);
				}
				jQuery.sap.log.info("app controller > loaded page: " + id);
			}

			// navigate in the app control
			var transition = (!jQuery.device.is.phone && id.indexOf("control.") !== -1 && id.indexOf("type.") !== -1 && id.indexOf("format.") !== -1 && id.indexOf("sample.") !== -1) ? "show" : "slide";
			app.to(id, transition, data);

			// write browser history
			if ((writeHistory === undefined || writeHistory) &&
				(jQuery.device.is.phone || master)) {
				jQuery.sap.history.addHistory("page", { id: id }, false);
			}

			// log
			jQuery.sap.log.info("navTo - to page: " + id + " [" + writeHistory + "]");
		}
	},

    navToSample : function (id, data, writeHistory) {

        if (id === undefined) {

            // invalid parameter
            jQuery.sap.log.error("navToSample failed due to missing id");

        } else {

            // is it a master?
            var masterId = id + ".master";
            var detailId = id + ".detail";

            // load master view on demand
            var app = this.getView().app;
            if (app.getPage(masterId, true) === null) {
                var page = sap.ui.view({
                    id : masterId,
                    viewName : "views." + masterId,
                    type : "XML"
                });

                app.addMasterPage(page);

                jQuery.sap.log.info("app controller > loaded page: " + masterId);
            }

            // load detail view on demand
            if (app.getPage(detailId, false) === null) {
                var page = sap.ui.view({
                    id : detailId,
                    viewName : "views." + detailId,
                    type : "XML"
                });

                app.addDetailPage(page);

                jQuery.sap.log.info("app controller > loaded page: " + detailId);
            }


            // navigate in the app control
            app.to(masterId, "slide", data);
            if (!jQuery.device.is.phone)
                app.to(detailId, "show", data);

            // write browser history
            if (writeHistory === undefined || writeHistory) {
                jQuery.sap.history.addHistory("page", { id: masterId }, false);
            }

            // log
            jQuery.sap.log.info("navTo - to page: " + masterId + " [" + writeHistory + "]");
        }
    },

    navBack : function (id) {

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
			var app = this.getView().app;
			var currentId = (app.getCurrentPage()) ? app.getCurrentPage().getId() : null;
			if (currentId !== id) {
				app.backToPage(id);
				jQuery.sap.log.info("navBack - back to page: " + id);
			}
		}
	}
});