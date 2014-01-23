jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("view.LineItem", {

	/**
	 * Called by the UI5 runtime to init this controller
	 */
	onInit : function () {
		
		// register for onBeforeShow events of pages in app
		this.getView().addEventDelegate({
			onBeforeShow : jQuery.proxy(function (evt) {
				this.onBeforeShow(evt);
			}, this)
		});
	},
	
	/**
	 * Called before the page (= this view) is shown in the app
	 */
	onBeforeShow : function (evt) {
		if (evt.data && evt.data.context) {
			this.getView().setBindingContext(evt.data.context);
		}
	},
	
	/**
	 * Refreshes the model
	 */
	_refresh : function (channelId, eventId, data) {
		
		if (data && data.context) {
			
			// set context of selected master object
			this.getView().setBindingContext(data.context);
			
			// scroll to top of page
			this.getView().byId("page").scrollTo(0);
		}
	},
	
	handleNavBack : function (evt) { 
		sap.ui.getCore().getEventBus().publish("nav", "back");
	}
});