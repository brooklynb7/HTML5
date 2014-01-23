jQuery.sap.require("sap.ui.core.mvc.Controller");
jQuery.sap.require("sap.ca.scfld.md.app.FullScreenHeaderFooterHelper");
jQuery.sap.require("sap.ca.scfld.md.app.CommonHeaderFooterHelper");

jQuery.sap.require("sap.ca.scfld.md.app.Application");

//
sap.ui.core.mvc.Controller.extend("sap.ca.scfld.md.controller.BaseFullscreenController", {

	constructor : function() {
		this.oApplicationImplementation = sap.ca.scfld.md.app.Application.getImpl();
		// Make sure that our init-coding is executed even if the App overrides onInit() and does not call
		// onInit() of the super class.
		var fMyOnInit = jQuery.proxy(function() {

			// get routing object for navigation
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			this.oApplicationFacade = this.oApplicationImplementation.oConfiguration.oApplicationFacade;

			this.oConnectionManager = this.oApplicationImplementation.getConnectionManager();

			this.oApplicationImplementation.setModels(this);

            this.oApplicationImplementation.defineFullscreenHeaderFooter(this);

			// --------------------------
			var fMyOnBeforeShow = jQuery.proxy(function(evt) {

			}, this);

			// register for onBeforeShow
			if (typeof this.onBeforeShow === "function") {
				var fAppOnBeforeShow = jQuery.proxy(this.onBeforeShow, this);
				this.onBeforeShow = function(evt) {
					fAppOnBeforeShow(evt);
					fMyOnBeforeShow(evt);
				};
			} else {
				this.getView().addEventDelegate({
					onBeforeShow : jQuery.proxy(function(evt) {
						fMyOnBeforeShow();
					}, this)
				});
			};
			// -------------------------------------
		}, this);

		var fAppOnInit = jQuery.proxy(this.onInit, this);
		this.onInit = function() {
			fMyOnInit();
			fAppOnInit();
		};
	},

	onInit : function() {
		// do not add any coding here. Just needed in case the App calls onInit() of the super class
	},
	
	/*
	 * override this method if you have not used the standard way to include the page in the view
	 */
	getPage : function(){
		return sap.ca.scfld.md.app.CommonHeaderFooterHelper.getPageFromController(this);
	}, 

	/*********************************************************************************************************************
   * Obsolete: Use {@link #setHeaderFooterOptions} in order to explicitly set the header and footer when they need to be changed.
	 */
	getHeaderFooterOptions : function() {
		return null;
	},
	
	/*********************************************************************************************************************
	 * Call this method in order to reset the header and footer of this page
	 */	
	setHeaderFooterOptions : function(oOptions){
		if (!this._oFullScreenHeaderFooterHelper){
			this._oFullScreenHeaderFooterHelper = new sap.ca.scfld.md.app.FullScreenHeaderFooterHelper(this.oApplicationImplementation);
		}
		this._oFullScreenHeaderFooterHelper.setHeaderFooter(this, oOptions);
	},

	setBtnEnabled : function(sId, bEnabled) {
    if (this._oControlStore.oButtonListHelper){
    	this._oControlStore.oButtonListHelper.setBtnEnabled(sId, bEnabled);
    }
	},
	
	setBtnText : function(sId, sText){
    if (this._oControlStore.oButtonListHelper){
    	this._oControlStore.oButtonListHelper.setBtnText(sId, sText);
    }		
	},
	
	/**
	 * Refreshes the model
	 */
	_refresh : function(channelId, eventId, data) {

		if (data && data.context) {

			// set context of selected master object
			this.getView().setBindingContext(data.context);

			// scroll to top of page
			// this.getView().byId("page").scrollTo(0);
		}
	},

	_navBack : function() {
		window.history.back();
	},

  isMainScreen : function(){
  	return true;
  }
});
