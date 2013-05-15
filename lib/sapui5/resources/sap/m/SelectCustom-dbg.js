/*
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.SelectCustom");

(function(jsap) {
	var sPath = "sap.ui.thirdparty.mobiscroll.",
		sCSSPath = sPath + "css";

	jsap.require("sap.m.InstanceManager");
	jsap.require(sPath + "js.mobiscroll-core");
	jsap.require(sPath + "js.mobiscroll-select");
	jsap.includeStyleSheet(jsap.getModulePath(sCSSPath, "/") + "mobiscroll-core.css");
	jsap.includeStyleSheet(jsap.getModulePath(sCSSPath, "/") + "mobiscroll-android-ics.css");

	/* =========================================================== */
	/*                   begin: lifecycle methods                  */
	/* =========================================================== */

	/**
	 * Required adaptations before rendering when using Mobiscroll.
	 *
	 * @private
	 */
	sap.m.Select.prototype._onBeforeRenderingCustom = function() {
		if (this._$SltNative instanceof jQuery) {
			this._$SltNative.scroller('destroy');
		}
	};

	/**
	 * Required adaptations after rendering when using Mobiscroll.
	 *
	 * @private
	 */
	sap.m.Select.prototype._onAfterRenderingCustom = function() {
		var self = this,
			InstanceManager = sap.m.InstanceManager;

		if (this._$SltNative.length) {	// do stuff if the select exist
			this._$SltNative.scroller({

				/**
				 *	Options for controlling the modal dialog button labels and header text.
				 */

				// text for Cancel button
				cancelText: this._oRb.getText("SELECT_CANCEL"),

				// text for Set button
				setText: this._oRb.getText("SELECT_ACCEPT"),

				// specifies a custom string which appears in the popup header
				headerText: false,

				// language of the scroller
				lang: this._sLang,

				// specifies the speed in milliseconds to change values in clickpick mode with tap & hold
				delay: 300,

				// disables (true) or enables (false) the scroller
				disabled: !this.getEnabled(),

				// controls the positioning of the scroller. Possible options:
				// "modal", "inline", "bubble", "top", "bottom"
				display: 'modal',

				// Option to choose between modes.
				// Possible modes: 'scroller' - standard behaviour, 'clickpick' - '+' and '-' buttons
				mode: 'scroller',

				// Preset configurations for select
				preset: 'select',

				// Show/hide labels above wheels
				showLabel: false,

				// Sets the scroller's visual appearance.
				// Supplied themes: 'android', 'android-ics', 'android-ics light', 'sense-ui', 'ios', 'jqm'
				theme: 'android-ics light',

				// css class(es) to style the input which is shown instead of the original select element
				inputClass: 'sapMSltInput',

				/**
				 * Gets called when the scroller appears.
				 *
				 * @param {jQuery} oHtml  jQuery object containing the generated html
				 * @param {string} sValue The formatted value
				 * @param {object} oScroller Scroller instance
				 */
				onShow: function() {
					InstanceManager.addDialogInstance(self);
				},

				/**
				 * Allows you to define your own event when the scroller is closed.
				 * If returns false, close is prevented.
				 *
				 * @param {string} sValue Selected value as text
				 * @param {object} oScroller Scroller instance
				 **/
				onClose: function() {
					InstanceManager.removeDialogInstance(self);
				}
			});
		}
	};

	/**
	 * Close the opened select dialog in Android 2.3 when the back button is push.
	 *
	 * This method gets called from sap.m.InstanceManager, but previously it is needed
	 * to add the select instance to the instance manager by using sap.m.InstanceManager.addDialogInstance().
	 */
	sap.m.Select.prototype.close = function() {
		if (sap.m.InstanceManager.isDialogOpen(this)) {
			this._$SltNative.scroller("hide");
		}
	};

	/* =========================================================== */
	/*                   end: lifecycle methods                    */
	/* =========================================================== */


	/* =========================================================== */
	/*                      begin: event handlers                  */
	/* =========================================================== */

	sap.m.Select.prototype._ontouchstartCustom = function() {
		if (this._$SltNative.length) {
			this._$SltNative.scroller('show');
		}
	};

	/* ============================================================ */
	/*                      end: event handlers                  	*/
	/* ============================================================ */

})(jQuery.sap);