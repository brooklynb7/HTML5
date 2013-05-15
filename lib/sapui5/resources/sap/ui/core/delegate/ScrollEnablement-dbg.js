/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/**
 * @namespace
 * @name sap.ui.core.delegate
 * @public
 */

// Provides class sap.ui.core.delegate.ScrollEnablement
jQuery.sap.declare("sap.ui.core.delegate.ScrollEnablement");

jQuery.sap.require("sap.ui.base.Object");

(function($) {
	
	sap.ui.base.Object.extend("sap.ui.core.delegate.ScrollEnablement", /* @lends sap.ui.core.delegate.ScrollEnablement */ {

		/**
		 * Creates a ScrollEnablement delegate that can be attached to Controls requiring
		 * capabilities for scrolling of a certain part of their DOM on mobile devices.
		 *
		 * @class Delegate for touch scrolling on mobile devices
		 *
		 * @author SAP AG
		 *
		 * This delegate uses CSS (-webkit-overflow-scrolling) only if supported. Otherwise the desired
		 * scrolling library is used. Please also consider the documentation
		 * of the library for a proper usage.
		 * 
		 * Controls that implement ScrollEnablement should additionally provide the getScrollDelegate method that returns
		 * the current instance of this delegate object
		 *
		 * @extends sap.ui.base.Object
		 * @name sap.ui.core.delegate.ScrollEnablement
		 * @experimental Since 1.5.2. This class is experimental and provides only limited functionality. Also the API might be changed in future.
		 *
		 * @param {sap.ui.core.Control} oControl the Control of which this Scroller is the delegate
		 * @param {string} sScrollContentDom the Id of the element within the DOM of the Control which should be scrollable
		 * @param {object} oConfig the configuration of the scroll delegate
		 * @param {boolean} [oConfig.horizontal=false] Whether the element should be scrollable horizontally
		 * @param {boolean} [oConfig.vertical=false] Whether the element should be scrollable vertically
		 * @param {boolean} [oConfig.zynga=false] If set, then the Zynga scroller (http://zynga.github.com/scroller/) is used otherwise iScroll (http://cubiq.org/iscroll-4) is used.
		 * @param {boolean} [oConfig.preventDefault=false] If set, the default of touchmove is prevented
		 * @param {boolean} [oConfig.nonTouchScrolling=false] If set, the delegate will also be active on non-touch platforms
		 *
		 * @version 1.10.0
		 * @constructor
		 * @protected
		 */
		constructor : function(oControl, sScrollContentDom, oConfig) {

			sap.ui.base.Object.apply(this);

			this._oControl = oControl;
			this._oControl.addDelegate(this);
			this._sContentId = sScrollContentDom;
			this._bHorizontal = !!oConfig.horizontal;
			this._bVertical = !!oConfig.vertical;
			this._scrollX = 0;
			this._scrollY = 0;
			this._scroller = null;

			initDelegateMembers(this, oConfig);

			if(this._init){
				this._init.apply(this, arguments);
			}
		},

		/**
		 * Enable or disable horizontal scrolling.
		 *
		 * @param {boolean} bHorizontal set true to enable horizontal scrolling, false - to disable
		 * @protected
		 */
		setHorizontal : function(bHorizontal) {
			this._bHorizontal = !!bHorizontal;
			if(this._scroller && this._zynga){
				// Zynga keeps scrolling options internally
				this._scroller.options.scrollingX = this._bHorizontal;
			}
		},

		/**
		 * Enable or disable vertical scrolling.
		 *
		 * @param {boolean} bVertical set true to enable vertical scrolling, false - to disable
		 * @protected
		 */
		setVertical : function(bVertical) {
			this._bVertical = !!bVertical;
			if(this._scroller && this._zynga){
				// Zynga options
				this._scroller.options.scrollingY = this._bVertical;
			}
		},

		/**
		 * Get current setting for horizontal scrolling.
		 *
		 * @return {boolean} true if horizontal scrolling is enabled
		 * @protected
		 * @since 1.9.1
		 */
		getHorizontal : function() {
			return this._bHorizontal;
		},

		/**
		 * Get current setting for vertical scrolling.
		 *
		 * @return {boolean} true if vertical scrolling is enabled
		 * @protected
		 * @since 1.9.1
		 */
		getVertical : function() {
			return this._bVertical;
		},

		/**
		 * Set overflow control on top of scroll container.
		 *
		 * @param {sap.ui.core.Control} top control that should be normally hidden over
		 * the top border of the scroll container (pull-down content).
		 * This function is supported in iScroll delegates only.
		 * @protected
		 * @since 1.9.2
		 */
		setPullDown : function(oControl) {
			this._oPullDown = oControl;
			return this;
		},

		scrollTo : function(x, y, time) {
			this._scrollX = x; // remember for later rendering
			this._scrollY = y;
			if (this._scroller) {
				if(this._zynga){ // Zynga
					if (!isNaN(time)){
						this._scroller.options.animationDuration = time;
					}
					this._scroller.scrollTo(x, y, !!time);
				} else { // iScroll
					this._scroller.scrollTo(-x, -y, time, false);
				}
			}
			return this;
		},

		/**
		 * Destroys this Scrolling delegate.
		 *
		 * This function must be called by the control which uses this delegate in the <code>exit</code> function.
		 * @protected
		 */
		destroy : function() {
			if(this._exit){
				this._exit();
			}

			if(this._oControl){
				this._oControl.removeDelegate(this);
				this._oControl = undefined;
			}

			this._isDestroyed = true;
		},

		/**
		 * Refreshes this Scrolling delegate.
		 *
		 * @protected
		 */
		refresh : function() {
			if(this._refresh){
				this._refresh();
			}
		}

	});
	
	/*
	 * Delegate members for usage of iScroll library
	 */
	var oIScrollDelegate = {
		_refresh : function() {
			if (this._scroller && this._sContentId && $.sap.domById(this._sContentId)) {
				this._scroller.refresh();
			}
		},

		_cleanup : function() {
			if(this._sScrollerResizeListenerId){
				sap.ui.core.ResizeHandler.deregister(this._sScrollerResizeListenerId);
				this._sScrollerResizeListenerId = null;
			}

			if(this._sContentResizeListenerId){
				sap.ui.core.ResizeHandler.deregister(this._sContentResizeListenerId);
				this._sContentResizeListenerId = null;
			}

			if (this._scroller) {
				this._scroller.stop();
				this._scrollX = -this._scroller.x; // remember position for after rendering
				this._scrollY = -this._scroller.y;
				this._scroller.destroy();
				this._scroller = null;
			}
		},

		onBeforeRendering : function() {
			this._cleanup();
		},

		onAfterRendering : function() {
			var that = this,
				bBounce = false;

			// Platform-specific behavior, but enable bounce for pull down, if needed
			if($.os.ios || this._oPullDown) {
				bBounce = true;
			}

			var $Content = $.sap.byId(this._sContentId);
			this._sScrollerId = $Content.parent().attr("id");
			// Fix for displaced edit box overlay on scrolled pages in Android 4.0.x browser: 
			var bAndroid40 = $.os.android && !$.browser.chrome && parseFloat($.os.version) == 4 && $Content.find("input").length;

			this._iTopOffset = this._oPullDown && this._oPullDown.getDomRef && this._oPullDown.getDomRef().offsetHeight || 0;

			this._scroller = new window.iScroll(this._sScrollerId, {
				useTransition: true,
				useTransform: !bAndroid40,
				hideScrollbar: true,
				fadeScrollbar: true,
				bounce: bBounce,
				momentum: true,
				handleClick: false,	/* implicitly set to false otherwise we have double click event */
				hScroll: this._bHorizontal,
				vScroll: this._bVertical,
				topOffset: this._iTopOffset,
				onBeforeScrollStart: function(oEvent) {
					// Workaround for problems with active input: close keyboard on scroll start
					if(document.activeElement && document.activeElement.tagName == "INPUT" &&
						!(oEvent.target.tagName == "INPUT" || 
								$(oEvent.target).hasClass("sapMInputPlaceholder") || 
								$(oEvent.target).hasClass("sapMSFR") ) ){
						$.sap.log.debug("Close active input by scroll start");
						document.activeElement.blur();
					}
				},
				onScrollEnd: function(){
					if(that._scroll){ // that.scroll can be undefined when scrolled into the empty place
						that._scrollX = -that._scroll.x;
						that._scrollY = -that._scroll.y;
					}
					if(that._oPullDown){ that._oPullDown.doScrollEnd(); }
				},
				onRefresh: function(){
					if(that._oPullDown){ that._oPullDown.doRefresh(); }
				},
				onScrollMove: function(){
					if(that._oPullDown){ that._oPullDown.doScrollMove(); }
				}
			});

			// Traverse the parents and check if any has a ScrollDelegate with the same vertical or horizontal scroll.
			// Controls that implement ScrollEnablement should provide the getScrollDelegate method.
			for (var oParent = this._oControl; oParent = oParent.oParent;) {
				var oSD = oParent.getScrollDelegate ? oParent.getScrollDelegate() : null;
				if(oSD && (oSD.getVertical() && this.getVertical() || oSD.getHorizontal() && this.getHorizontal())){
					this._scroller._sapui_isNested = true;
					break;
				}
			}

			// SAP modification: disable nested scrolling.
			this._scroller._move = function(oEvent){

				if(oEvent._sapui_handledByControl){ return; }

				// Enable scrolling of outer container when the inner container is scrolled to the end
				// so that a user can "pull out" contents that have been accidentally moved outside of
				// the scrolling container by momentum scrolling.
				if(this._sapui_isNested){
					oEvent._sapui_handledByControl =
						!(this.dirY < 0 && this.y >= 0) &&
						!(this.dirY > 0 && this.y <= this.maxScrollY) &&
						!(this.dirX < 0 && this.x >= 0) && 
						!(this.dirX > 0 && this.x <= this.maxScrollX);
				}
				window.iScroll.prototype._move.call(this,oEvent);
			}

			// re-apply scrolling position after rendering
			if(this._scrollX != -this._scroller.x || this._scrollY != -this._scroller.y){
				this._scroller.scrollTo(-this._scrollX, -this._scrollY, 0);
			}

			//TODO Prevent a double refresh
			this._sScrollerResizeListenerId = sap.ui.core.ResizeHandler.register(
				$.sap.domById(this._sScrollerId),
				$.proxy(function(){
					if((!this._sContentId || !$.sap.domById(this._sContentId)) && this._sScrollerResizeListenerId){
						sap.ui.core.ResizeHandler.deregister(this._sScrollerResizeListenerId);
						this._sScrollerResizeListenerId = null;
					}else{
						this._refresh();
					}
				}, this)
			);

			this._sContentResizeListenerId = sap.ui.core.ResizeHandler.register(
				$.sap.domById(this._sContentId),
				$.proxy(function(){
					if((!this._sContentId || !$.sap.domById(this._sContentId)) && this._sContentResizeListenerId){
						sap.ui.core.ResizeHandler.deregister(this._sContentResizeListenerId);
						this._sContentResizeListenerId = null;
					}else{
						this._refresh();
					}
				}, this)
			);
		},

		ontouchmove : function(oEvent) {
			if(this._preventTouchMoveDefault) {
				//Prevent the default touch action e.g. scrolling the whole page
				oEvent.preventDefault();
			}
		},
	};

	/*
	 * Delegate members for usage of Zynga library
	 */
	var oZyngaDelegate = {
		_refresh : function() {
			if (this._scroller && this._sContentId && $.sap.domById(this._sContentId)) {
				var jContent = $.sap.byId(this._sContentId);
				var jContainer = jContent.parent();
				this._scroller.setDimensions(jContainer.width(), jContainer.height(), jContent.width(), jContent.height());
			}
		},

		_cleanup : function() {
			if(this._sScrollerResizeListenerId){
				sap.ui.core.ResizeHandler.deregister(this._sScrollerResizeListenerId);
				this._sScrollerResizeListenerId = null;
			}

			if(this._sContentResizeListenerId){
				sap.ui.core.ResizeHandler.deregister(this._sContentResizeListenerId);
				this._sContentResizeListenerId = null;
			}

			if (this._scroller) {
				var oVals = this._scroller.getValues();
				this._scrollX = oVals.left; // remember position for after rendering
				this._scrollY = oVals.top;
			}
		},

		onBeforeRendering : function() {
			this._cleanup();
		},

		onAfterRendering : function() {
			this._refresh();

			this._scroller.scrollTo(this._scrollX, this._scrollY, false);

			this._sContentResizeListenerId = sap.ui.core.ResizeHandler.register(
				$.sap.domById(this._sContentId),
				$.proxy(function(){
					if((!this._sContentId || !$.sap.domById(this._sContentId)) && this._sContentResizeListenerId){
						sap.ui.core.ResizeHandler.deregister(this._sContentResizeListenerId);
						this._sContentResizeListenerId = null;
					}else{
						this._refresh();
					}
				}, this)
			);
		},

		ontouchstart : function(oEvent) {
			// Don't react if initial down happens on a form element
			if (oEvent.target.tagName.match(/input|textarea|select/i)) {
				return;
			}
			
			this._scroller.doTouchStart(oEvent.touches, oEvent.timeStamp);
		},

		ontouchend : function(oEvent) {
			this._scroller.doTouchEnd(oEvent.timeStamp);
		},

		ontouchmove : function(oEvent) {
			this._scroller.doTouchMove(oEvent.touches, oEvent.timeStamp);
			if(this._preventTouchMoveDefault) {
				//Prevent the default touch action e.g. scrolling the whole page
				oEvent.preventDefault();
			} else {
				// Zynga relies on default browser behavior and
				// the app.control prevents default at window level in initMobile
				oEvent.stopPropagation();
			}
		}
	};

	/*
	 * Init delegator prototype according to various conditions.
	 */
	function initDelegateMembers(oScrollerInstance, oConfig) {
		var oDelegateMembers;

		if(!$.support.touch && !oConfig.nonTouchScrolling){  //TODO: Maybe find some better criteria
			//Nothing to do on Desktop Browsers
			oDelegateMembers = {};
		}else{
			$.sap.require("jquery.sap.mobile");
	
			oDelegateMembers = {
				_init : function(oControl, sScrollContentDom, oConfig) {

					function createZyngaScroller(contentId, horizontal, vertical){
						var oScroller = new window.Scroller(function(left, top, zoom){
								var jContainer = $.sap.byId(contentId).parent();
								jContainer.scrollLeft(left);
								jContainer.scrollTop(top);
							}, {
								scrollingX: horizontal,
								scrollingY: vertical,
								bouncing: false
						});
						return oScroller;
					}

					// What library to use?:
					var sLib = oConfig.zynga? "z":"i";
					// TODO: sLib = "n" for native scrolling?

					// Initialization
					this._preventTouchMoveDefault = !!oConfig.preventDefault;
					this._scroller = null;

					switch (sLib) {
						case "z": // Zynga library
							$.sap.require("sap.ui.thirdparty.zyngascroll");
							$.extend(this, oZyngaDelegate);
							this._zynga = true;
							this._scroller = createZyngaScroller(this._sContentId, this._bHorizontal, this._bVertical);
							break;
						default: // iScroll library
							$.sap.require("sap.ui.thirdparty.iscroll");
							$.extend(this, oIScrollDelegate);
							break;
					}
				},

				_exit : function() {
					if(this._cleanup){ this._cleanup(); }
					this._scroller = null;
				}
			};
		}

		// Copy over members to prototype
		$.extend(oScrollerInstance, oDelegateMembers);
	}

}(jQuery));