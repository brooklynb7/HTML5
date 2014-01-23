jQuery.sap.require("sap.ui.core.mvc.Controller");
jQuery.sap.require("sap.ca.scfld.md.app.CommonHeaderFooterHelper");
//
sap.ui.core.mvc.Controller.extend("sap.ca.scfld.md.controller.BaseDetailController", {

	constructor : function() {
		this.oApplicationImplementation = sap.ca.scfld.md.app.Application.getImpl();
		// Make sure that our init-coding is executed even if the App overrides onInit() and does not call
		// onInit() of the super class.
		var fMyOnInit = jQuery.proxy(function() {

			// get routing object for navigation
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			this.oApplicationFacade = sap.ca.scfld.md.app.Application.getImpl().oConfiguration.oApplicationFacade;

			this.oConnectionManager = sap.ca.scfld.md.app.Application.getImpl().getConnectionManager();

			
			this.oApplicationImplementation.setModels(this);

			// for compatibility reasons. This only affects cases where the App defines the header itself and relies
			// on this piece of code that was entered by mistake
			if (jQuery.device.is.phone){
			  var oPage = this.getPage();
			  oPage.setShowNavButton(true);
			  oPage.attachNavButtonPress(this._navBack);
			}
			
			var oPage = this.getView().getContent()[0];
			oPage.setShowNavButton(jQuery.device.is.phone);
			oPage.attachNavButtonPress(this._navBack);
			
			// --------------------------
			var fMyOnBeforeShow = jQuery.proxy(function(evt) {
				this.oApplicationImplementation.defineDetailHeaderFooter(this);
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
	 * Obsolete: Use {@link #setHeaderFooterOptions} in order to explicitly set the header and footer when they need to be
	 * changed.
	 */
	getHeaderFooterOptions : function() {
		return null;
	},

	/*********************************************************************************************************************
	 * Call this method in order to reset the header and footer of this page
	 */
	setHeaderFooterOptions : function(oOptions) {
		this.oApplicationImplementation.oDHFHelper.setHeaderFooter(this, oOptions);
	},

	setBtnEnabled : function(sId, bEnabled) {
		if (this._oControlStore.oButtonListHelper) {
			this._oControlStore.oButtonListHelper.setBtnEnabled(sId, bEnabled);
		}
	},

	setBtnText : function(sId, sText) {
		if (this._oControlStore.oButtonListHelper) {
			this._oControlStore.oButtonListHelper.setBtnText(sId, sText);
		}
	},

	/*
	 * Override this method in order to describe wether this view is the main detail (S3) screen or a screen on deeper hierarchy level
	 * Note: This method must only return true or false.
	 * The default implementation also returns other values for compatibility reasons
	 */
  isMainScreen : function(){
  	if (this._oControlStore.oBackButton){
  		return false;
  	}
  	// for compatibility reasons in order to distinguish from overridden cases
  	return "X";
  },

	_navBack : function() {
		window.history.back();
	}
});
