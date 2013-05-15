/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides class sap.ui.core.ResizeHandler
jQuery.sap.declare("sap.ui.core.ResizeHandler");
jQuery.sap.require("sap.ui.base.Object");
jQuery.sap.require("sap.ui.Global");
jQuery.sap.require("jquery.sap.script");

(function(){

	var oCoreRef = null;

	/**
	 * Constructs an instance of a sap.ui.core.ResizeHandler.
	 * Handles the resize event on registered DOM elements.
	 *
	 * Resize events on arbitrary DOM elements are not supported on Firefox and Safari.
	 * This class provides firing of resize events on Firefox by checking width
	 * and height of registered DOM elements and firing events accordingly.
	 *
	 * @class sap.ui.core.ResizeHandler
	 * @param oCore the core
	 */
	sap.ui.core.ResizeHandler = function(oCore) {
		sap.ui.base.Object.apply(this);

		oCoreRef = oCore;

		this.aResizeListeners = [];
		this.sInterval = null;

		this.iIdCounter = 0;

		this.fDestroyHandler = jQuery.proxy(this.destroy, this);

		jQuery(window).bind("unload", this.fDestroyHandler);
	};

	sap.ui.core.ResizeHandler.prototype = jQuery.sap.newObject(sap.ui.base.Object.prototype);
	sap.ui.base.Object.defineClass("sap.ui.core.ResizeHandler", {
		baseType : "sap.ui.base.Object"
	});

	/**
	 * The interval which is used for checking the width/height of all attached elements.
	 * One check takes less than 1 MICROsecond (maybe even *much* less - the only confirmed fact is that 20000 checks
	 * summed up are still not measurable), so a 200 ms interval is perfectly fine.
	 * @private
	 */
	sap.ui.core.ResizeHandler.prototype.I_INTERVAL = 200;

	/**
	 * Destroy method of the Resize Handler.
	 * It unregisters the event handlers.
	 *
	 * @param {jQuery.Event} oEvent the event that initiated the destruction of the ResizeHandler
	 * @private
	 */
	sap.ui.core.ResizeHandler.prototype.destroy = function(oEvent) {
		jQuery(window).unbind("unload", this.fDestroyHandler);
		if(jQuery.browser.msie && (jQuery.browser.version == "7.0" || jQuery.browser.version == "8.0")){
			jQuery.each(this.aResizeListeners, function(index, oResizeListener){
				jQuery(oResizeListener.oDomRef).unbind("resize", oResizeListener.fHandler);
			});
		}
		oCoreRef = null;
		this.aResizeListeners = [];
		this.sInterval = null;
	};

	/**
	 * Attaches listener to resize event.
	 *
	 * @param {element} oDomRef the DOM reference
	 * @param {function} fHandler the event handler function
	 * @return {string} Registration-ID for later detaching.
	 * @private
	 */
	sap.ui.core.ResizeHandler.prototype.attachListener = function(oDomRef, fHandler){
		var iWidth = oDomRef.offsetWidth,
		iHeight = oDomRef.offsetHeight,
		sId = "rs-" + new Date().valueOf() + "-" + this.iIdCounter++;

		this.aResizeListeners.push({sId: sId, oDomRef: oDomRef, fHandler: fHandler, iWidth: iWidth, iHeight: iHeight});

		if(jQuery.browser.msie && (jQuery.browser.version == "7.0" || jQuery.browser.version == "8.0")){
			jQuery(oDomRef).bind("resize", fHandler);
		}else{
			if(!this.sInterval){
				this.sInterval = jQuery.sap.delayedCall(this.I_INTERVAL, this, "checkSizes");
			}
		}
		return sId;
	};

	/**
	 * Detaches listener from resize event.
	 *
	 * @param {string} Registration-ID returned from attachListener
	 * @private
	 */
	sap.ui.core.ResizeHandler.prototype.detachListener = function(sId){
		var that = this;
		jQuery.each(this.aResizeListeners, function(index, oResizeListener){
			if(oResizeListener.sId == sId){
				that.aResizeListeners.splice(index,1);
				if(jQuery.browser.msie && (jQuery.browser.version == "7.0" || jQuery.browser.version == "8.0")){
					jQuery(oResizeListener.oDomRef).unbind("resize", oResizeListener.fHandler);
				}
				return false; //break the loop
			};
		});

		// if list is empty now, stop interval
		if(this.aResizeListeners.length == 0){
			jQuery.sap.clearDelayedCall(this.sInterval);
			this.sInterval = null;
		}
	};

	/**
	 * Check sizes of resize elements
	 * @private
	 */
	sap.ui.core.ResizeHandler.prototype.checkSizes = function() {
		jQuery.each(this.aResizeListeners, function(index, oResizeListener){
			if(oResizeListener){
				var oDomRef = oResizeListener.oDomRef;
				if (oDomRef.offsetWidth != oResizeListener.iWidth ||
						oDomRef.offsetHeight != oResizeListener.iHeight) {
					oResizeListener.iWidth = oDomRef.offsetWidth;
					oResizeListener.iHeight = oDomRef.offsetHeight;
					var oEvent = jQuery.Event("resize");
					oEvent.target = oResizeListener.oDomRef;
					oEvent.currentTarget = oResizeListener.oDomRef;
					oResizeListener.fHandler(oEvent);
				}
			}
		});
		this.sInterval = jQuery.sap.delayedCall(this.I_INTERVAL, this, "checkSizes");
	};

	/**
	 * Registers the given handler for resize events on the given
	 * DOM reference.
	 *
	 * @param {element} oDomRef the DOM reference for which the given handler should be registered (beside the window)
	 * @param {function} fHandler the handler which should be called on a resize event
	 * @return {string} Registration ID which can be used for deregistering
	 * @public
	 */
	sap.ui.core.ResizeHandler.register = function(oDomRef, fHandler) {
		if(!oCoreRef || !oCoreRef.oResizeHandler) {
			return null;
		}
		return oCoreRef.oResizeHandler.attachListener(oDomRef, fHandler);
	};

	/**
	 * Deregisters the registered handler for resize events with the given ID.
	 *
	 * @param {string} Registration ID
	 * @public
	 */
	sap.ui.core.ResizeHandler.deregister = function(sId) {
		if(!oCoreRef || !oCoreRef.oResizeHandler) {
			return;
		}
		oCoreRef.oResizeHandler.detachListener(sId);
	};

}());