/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Carousel.
jQuery.sap.declare("sap.ui.commons.Carousel");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Carousel.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getOrientation orientation} : sap.ui.commons.enums.Orientation (default: sap.ui.commons.enums.Orientation.horizontal)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getDefaultItemHeight defaultItemHeight} : int (default: 150)</li>
 * <li>{@link #getDefaultItemWidth defaultItemWidth} : int (default: 150)</li>
 * <li>{@link #getAnimationDuration animationDuration} : int (default: 500)</li>
 * <li>{@link #getVisibleItems visibleItems} : int</li>
 * <li>{@link #getHandleSize handleSize} : int (default: 22)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Carousel holds multiple controls and displays them vertical or horizontal next to each other. You can define how many content items should be displayed at once or let the carousel determine that for you. Navigation is done through buttons or keys.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.10.0
 *
 * @constructor   
 * @public
 * @since 1.8.0
 * @name sap.ui.commons.Carousel
 */
sap.ui.core.Control.extend("sap.ui.commons.Carousel", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"showNext", "showPrevious", "showElementWithId"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"orientation" : {type : "sap.ui.commons.enums.Orientation", group : "Misc", defaultValue : sap.ui.commons.enums.Orientation.horizontal},
		"width" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"height" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"defaultItemHeight" : {type : "int", group : "Misc", defaultValue : 150},
		"defaultItemWidth" : {type : "int", group : "Misc", defaultValue : 150},
		"animationDuration" : {type : "int", group : "Misc", defaultValue : 500},
		"visibleItems" : {type : "int", group : "Misc", defaultValue : null},
		"handleSize" : {type : "int", group : "Misc", defaultValue : 22}
	},
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content", bindable : "bindable"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.Carousel with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.ui.commons.Carousel.extend
 * @function
 */


/**
 * Getter for property <code>orientation</code>.
 * Can be either "horizontal" or "vertical"
 *
 * Default value is <code>horizontal</code>
 *
 * @return {sap.ui.commons.enums.Orientation} the value of property <code>orientation</code>
 * @public
 * @name sap.ui.commons.Carousel#getOrientation
 * @function
 */


/**
 * Setter for property <code>orientation</code>.
 *
 * Default value is <code>horizontal</code> 
 *
 * @param {sap.ui.commons.enums.Orientation} oOrientation  new value for property <code>orientation</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#setOrientation
 * @function
 */

/**
 * Getter for property <code>width</code>.
 * Width of carousel
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.Carousel#getWidth
 * @function
 */


/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#setWidth
 * @function
 */

/**
 * Getter for property <code>height</code>.
 * Height of carousel
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ui.commons.Carousel#getHeight
 * @function
 */


/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#setHeight
 * @function
 */

/**
 * Getter for property <code>defaultItemHeight</code>.
 * Default height of item in carousel if no height can be determined
 *
 * Default value is <code>150</code>
 *
 * @return {int} the value of property <code>defaultItemHeight</code>
 * @public
 * @name sap.ui.commons.Carousel#getDefaultItemHeight
 * @function
 */


/**
 * Setter for property <code>defaultItemHeight</code>.
 *
 * Default value is <code>150</code> 
 *
 * @param {int} iDefaultItemHeight  new value for property <code>defaultItemHeight</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#setDefaultItemHeight
 * @function
 */

/**
 * Getter for property <code>defaultItemWidth</code>.
 * Default width of item in carousel if no height can be determined
 *
 * Default value is <code>150</code>
 *
 * @return {int} the value of property <code>defaultItemWidth</code>
 * @public
 * @name sap.ui.commons.Carousel#getDefaultItemWidth
 * @function
 */


/**
 * Setter for property <code>defaultItemWidth</code>.
 *
 * Default value is <code>150</code> 
 *
 * @param {int} iDefaultItemWidth  new value for property <code>defaultItemWidth</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#setDefaultItemWidth
 * @function
 */

/**
 * Getter for property <code>animationDuration</code>.
 * Duration for animation when navigating through children
 *
 * Default value is <code>500</code>
 *
 * @return {int} the value of property <code>animationDuration</code>
 * @public
 * @name sap.ui.commons.Carousel#getAnimationDuration
 * @function
 */


/**
 * Setter for property <code>animationDuration</code>.
 *
 * Default value is <code>500</code> 
 *
 * @param {int} iAnimationDuration  new value for property <code>animationDuration</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#setAnimationDuration
 * @function
 */

/**
 * Getter for property <code>visibleItems</code>.
 * If defined, the carousel displays the number of items defined. Items will be resized to fit the area.
 *
 * Default value is <code></code>
 *
 * @return {int} the value of property <code>visibleItems</code>
 * @public
 * @name sap.ui.commons.Carousel#getVisibleItems
 * @function
 */


/**
 * Setter for property <code>visibleItems</code>.
 *
 * Default value is <code></code> 
 *
 * @param {int} iVisibleItems  new value for property <code>visibleItems</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#setVisibleItems
 * @function
 */

/**
 * Getter for property <code>handleSize</code>.
 * Size of the handle in pixels. (Height for vertical carousel, width for horizontal carousel)
 *
 * Default value is <code>22</code>
 *
 * @return {int} the value of property <code>handleSize</code>
 * @public
 * @name sap.ui.commons.Carousel#getHandleSize
 * @function
 */


/**
 * Setter for property <code>handleSize</code>.
 *
 * Default value is <code>22</code> 
 *
 * @param {int} iHandleSize  new value for property <code>handleSize</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#setHandleSize
 * @function
 */
	
/**
 * Getter for aggregation <code>content</code>.<br/>
 * Controls which are displayed inside the carousel
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.commons.Carousel#getContent
 * @function
 */

/**
 * Inserts a content into the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#insertContent
 * @function
 */


/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#addContent
 * @function
 */


/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ui.commons.Carousel#removeContent
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.Carousel#removeAllContent
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.Carousel#indexOfContent
 * @function
 */


/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#destroyContent
 * @function
 */

/**
 * Binder for aggregation <code>content</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#bindContent
 * @function
 */


/**
 * Unbinder for aggregation <code>content</code>.
 *
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#unbindContent
 * @function
 */

/**
 * Shows next item in carousel. This can be only used after the component is rendered.
 *
 * @name sap.ui.commons.Carousel.prototype.showNext
 * @function

 * @type void
 * @public
 */


/**
 * Shows previous item in carousel. This can be only used after the component is rendered.
 *
 * @name sap.ui.commons.Carousel.prototype.showPrevious
 * @function

 * @type void
 * @public
 */


/**
 * Shows the element with id specified. This can be only used after the component is rendered.
 *
 * @name sap.ui.commons.Carousel.prototype.showElementWithId
 * @function

 * @type void
 * @public
 */


// Start of sap/ui/commons/Carousel.js
jQuery.sap.require("sap.ui.core.ResizeHandler");

sap.ui.commons.Carousel.prototype.init = function() {

	var $Me = this;
	$Me.startTouchX = undefined;
	$Me.startTouchY = undefined;
	$Me.scrollDelta = undefined;
	$Me._visibleItems = 0;
	$Me._bTouchNotMoved = true;


	if (jQuery.sap.touchEventMode != "OFF") {
		var fnTouchStart = function(evt) {
			evt.preventDefault();
			$Me.startTouchX = evt.touches[0].pageX;
			$Me.startTouchY = evt.touches[0].pageY;
			$Me._bTouchNotMoved = true;
		};

		var fnTouchMove = function(evt) {
			evt.preventDefault();
			var dx = evt.touches[0].pageX - $Me.startTouchX;
			var dy = evt.touches[0].pageY - $Me.startTouchY;

			if ($Me.getOrientation() == "horizontal") {
				$Me.scrollDelta = -dx;
			} else { 
				$Me.scrollDelta = -dy;
			}
			$Me._bTouchNotMoved = false;
		};

		var fnTouchEnd = function(evt) {
			evt.preventDefault();
			if (!$Me._bTouchNotMoved) { // swiping ends now
				if ($Me.scrollDelta > 0) {
					$Me.showNext();
				} else {
					$Me.showPrevious();
				}

				$Me.startTouchX = undefined;
				$Me.startTouchY = undefined;
				$Me.scrollDelta = undefined;
			}
		};

		this.ontouchstart = fnTouchStart;
		this.ontouchend = fnTouchEnd;
		this.ontouchmove = fnTouchMove;
	}
};

sap.ui.commons.Carousel.prototype.exit = function() {
	// Cleanup resize event registration on exit
	if (this.sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
};

sap.ui.commons.Carousel.prototype.onclick = function(oEvent) {
	var sCarouselId = this.getId();

	switch (oEvent.target) {
	case jQuery.sap.byId(sCarouselId + '-prevbutton')[0]:
		this.showPrevious();
		break;
	case jQuery.sap.byId(sCarouselId + '-nextbutton')[0]:
		this.showNext();
		break;
	default:
		return;
	}

	jQuery.sap.byId(sCarouselId + '-contentarea').focus();
};

sap.ui.commons.Carousel.prototype.onBeforeRendering = function() {
	// Cleanup resize event registration before re-rendering
	if (this.sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
};

/**
 * Used for after-rendering initialization.
 *
 * @private
 */

sap.ui.commons.Carousel.prototype.onAfterRendering = function() {
	// Define which attribute needs to be animated
	if (this.getOrientation() == "vertical") {
		this._sAnimationAttribute = 'margin-top';
	} else {
		if (sap.ui.getCore().getConfiguration().getRTL()) {
			this._sAnimationAttribute = 'margin-right';
		} else {
			this._sAnimationAttribute = 'margin-left';
		}
	}

	this.calculateAndSetSize();

	if (this._firstItem) {
		this.showElementWithId(this._firstItem);
	}
	this.oDomRef = this.getDomRef();
	this.sResizeListenerId = sap.ui.core.ResizeHandler.register(this.oDomRef,
			jQuery.proxy(this.onresize, this));
};

/**
 * Function is called when left (RTL) or right or up arrow is pressed
 *
 * @param {jQuery.Event}
 *            oEvent
 * @private
 */
sap.ui.commons.Carousel.prototype.onsapnext = function(oEvent) {
	this.showNext();
};

/**
 * Function is called when left or right (RTL) or up arrow is pressed
 *
 * @param {jQuery.Event}
 *            oEvent
 * @private
 */
sap.ui.commons.Carousel.prototype.onsapprevious = function(oEvent) {
	this.showPrevious();
};

/**
 * Function is called when window is resized
 *
 * @param {jQuery.Event}
 *            oEvent
 * @private
 */
sap.ui.commons.Carousel.prototype.onresize = function(oEvent) {
	if (!this.getDomRef()) {
		// carousel is not rendered, maybe deleted from DOM -> deregister resize
		// handler and do nothing
		// Cleanup resize event registration on exit
		if (this.sResizeListenerId) {
			sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
			this.sResizeListenerId = null;
		}
		return;
	}

	this.calculateAndSetSize();
};

/**
 * Slide to previous element
 *
 * @public
 */
sap.ui.commons.Carousel.prototype.showPrevious = function() {
	var mAnimationArguments = {};
	mAnimationArguments[this._sAnimationAttribute] = 0;
	var $ScrollList = jQuery.sap.byId(this.getId() + '-scrolllist');
	var $ContentArea = jQuery.sap.byId(this.getId() + '-contentarea');
	if ($ScrollList.find('li').length < 2) {
		return;
	}
	$ContentArea.focus();
	$ScrollList.css(this._sAnimationAttribute, -this._iMaxWidth);
	var $lastItem = $ScrollList.find('li:last');
	var $firstItem = $ScrollList.find('li:first');
	this._showAllItems();
	$lastItem.insertBefore($firstItem);
	var me = this;
	$ScrollList.stop(true, true).animate(mAnimationArguments,
			this.getAnimationDuration(), function() {
				me._firstItem = $firstItem.attr('id');
				me._hideInvisibleItems();
			});
};

/**
 * Slide to next element
 *
 * @public
 */
sap.ui.commons.Carousel.prototype.showNext = function() {
	var mAnimationArguments = {};
	mAnimationArguments[this._sAnimationAttribute] = -this._iMaxWidth;
	var $ScrollList = jQuery.sap.byId(this.getId() + '-scrolllist');
	var $ContentArea = jQuery.sap.byId(this.getId() + '-contentarea');
	if ($ScrollList.find('li').length < 2) {
		return;
	}
	$ContentArea.focus();
	this._showAllItems();
	var sAnimationAttribute = this._sAnimationAttribute;
	var me = this;
	$ScrollList.stop(true, true).animate(mAnimationArguments,
			this.getAnimationDuration(), function() {
				$ScrollList.find('li:first').appendTo($ScrollList);
				jQuery(this).css(sAnimationAttribute, '0px');
				me._firstItem = $ScrollList.find('li:first').attr('id');
				me._hideInvisibleItems();
			});
};

/**
 * Slide to specific element
 *
 * @public
 * @param {stringt}
 *            sElementId
 */
sap.ui.commons.Carousel.prototype.showElementWithId = function(sElementId) {
	var $ScrollList = jQuery.sap.byId(this.getId() + '-scrolllist');
	var index = $ScrollList.find('li').index(jQuery.sap.byId(sElementId));
	$ScrollList.find('li:lt(' + index + ')').appendTo($ScrollList);
};

sap.ui.commons.Carousel.prototype.calculateAndSetSize = function() {
	var aContent = this.getContent();
	var sCarouselId = this.getId();
	
	this._showAllItems();

	if (aContent.length > 0) {
		var maxWidth = 0;
		var maxHeight = 0;

		for ( var i = 0; i < aContent.length; i++) {
			var childWidth, childHeight;
			try {
				childWidth = aContent[i].getWidth();
				if (childWidth.substr(-1) == "%") {
					childWidth = this.getDefaultItemWidth();
				}
			} catch (e) {
				childWidth = this.getDefaultItemWidth();
			}
			try {
				childHeight = aContent[i].getHeight();
				if (childHeight.substr(-1) == "%") {
					childHeight = this.getDefaultItemHeight();
				}
			} catch (e) {
				childHeight = this.getDefaultItemHeight();
			}
			maxWidth = Math.max(maxWidth, parseInt(childWidth, 10));
			maxHeight = Math.max(maxHeight, parseInt(childHeight, 10));
		}

		if (maxWidth == 0 || isNaN(maxWidth)) {
			maxWidth = this.getDefaultItemWidth();
		}
		if (maxHeight == 0 || isNaN(maxHeight)) {
			maxHeight = this.getDefaultItemHeight();
		}

		var contentBarSize;
		var visibleItems = this.getVisibleItems();
		var $Me = jQuery.sap.byId(sCarouselId);
		var $NextButton = jQuery.sap.byId(sCarouselId + '-nextbutton');
		var $PrevButton = jQuery.sap.byId(sCarouselId + '-prevbutton');
		var $ContentArea = jQuery.sap.byId(sCarouselId + '-contentarea');

		if (this.getWidth() && this.getOrientation() == "vertical") {
			maxWidth = $Me.width();
		}
		if (this.getHeight() && this.getOrientation() == "horizontal") {
			maxHeight = $Me.height();
		}

		jQuery.sap.byId(this.getId()).addClass('sapUiCrsl' + jQuery.sap.charToUpperCase(this.getOrientation(), 0));

		if (this.getOrientation() == "horizontal") {
			contentBarSize = $Me.width() - this.getHandleSize() * 2 - 1;

			if (visibleItems == 0) {
				visibleItems = Math.floor(contentBarSize / (maxWidth + 10));
			}

			maxWidth = (contentBarSize / visibleItems) - 10;
			this._iMaxWidth = maxWidth;

			$ContentArea.find('.sapUiCrslItm').width(maxWidth).height(maxHeight);
			var cLineHeight = maxHeight + "px";
			$PrevButton.css("height", maxHeight).css("line-height", cLineHeight);
			$NextButton.css("height", maxHeight).css("line-height", cLineHeight);
			$ContentArea.width(contentBarSize).height(maxHeight);
		} else {
			contentBarSize = $Me.height() - this.getHandleSize() * 2 - 1;

			if (visibleItems == 0) {
				visibleItems = Math.floor(contentBarSize / (maxHeight + 10));
			}

			maxHeight = (contentBarSize / visibleItems) - 10;
			this._iMaxWidth = maxHeight;

			$ContentArea.find('.sapUiCrslItm').width(maxWidth).height(maxHeight);
			$PrevButton.width(maxWidth).after($ContentArea);
			$NextButton.width(maxWidth);
			$ContentArea.width(maxWidth).height(contentBarSize);
		}
		this._visibleItems = visibleItems;
		this._hideInvisibleItems();
	}
};

sap.ui.commons.Carousel.prototype.getFocusDomRef = function() {
	return this.oContentArea;
};

sap.ui.commons.Carousel.prototype._showAllItems = function() {
	var $ContentArea = jQuery.sap.byId(this.getId() + '-contentarea');
	$ContentArea.find('.sapUiCrslItm').show();
};

sap.ui.commons.Carousel.prototype._hideInvisibleItems = function() {
	var $ContentArea = jQuery.sap.byId(this.getId() + '-contentarea');
	$ContentArea.find('.sapUiCrslItm:gt(' + (this._visibleItems - 1)  + ')').hide();
};