/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Toolbar.
jQuery.sap.declare("sap.m.Toolbar");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Toolbar.
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
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getActive active} : boolean (default: false)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Toolbar#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Toolbar displays extra information to the user and allows to interact with press event.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @since 1.16
 * @name sap.m.Toolbar
 */
sap.ui.core.Control.extend("sap.m.Toolbar", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"width" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : '100%'},
		"active" : {type : "boolean", group : "Behavior", defaultValue : false},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"height" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : ''}
	},
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.Toolbar with name <code>sClassName</code> 
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
 * @name sap.m.Toolbar.extend
 * @function
 */

sap.m.Toolbar.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>visible</code>.
 * Sets the visibility of the control.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.Toolbar#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Toolbar#setVisible
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Defines the width of the control.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.m.Toolbar#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Toolbar#setWidth
 * @function
 */


/**
 * Getter for property <code>active</code>.
 * Indicates that the whole toolbar is clickable. Press event of this control is fired only if this property is set "true"
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>active</code>
 * @public
 * @name sap.m.Toolbar#getActive
 * @function
 */

/**
 * Setter for property <code>active</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bActive  new value for property <code>active</code>
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Toolbar#setActive
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Sets the "enabled" property of all controls defined in the "content" aggregation. Note: This property is not for the toolbar itself. See also "active" property.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.m.Toolbar#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Toolbar#setEnabled
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * Customize the default height of the toolbar defined in CSS.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.m.Toolbar#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Toolbar#setHeight
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * The content of the toolbar
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.Toolbar#getContent
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
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Toolbar#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Toolbar#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.m.Toolbar#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.Toolbar#removeAllContent
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
 * @name sap.m.Toolbar#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Toolbar#destroyContent
 * @function
 */


/**
 * If "active" property is set "true" then "press" event is fired when user clicks on the toolbar. 
 *
 * @name sap.m.Toolbar#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Control} oControlEvent.getParameters.srcControl Holds which control caused the press event within the toolbar.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.m.Toolbar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Toolbar</code>.<br/> itself. 
 *  
 * If "active" property is set "true" then "press" event is fired when user clicks on the toolbar. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Toolbar</code>.<br/> itself.
 *
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Toolbar#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.m.Toolbar</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Toolbar#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'srcControl' of type <code>sap.ui.core.Control</code> Holds which control caused the press event within the toolbar.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Toolbar#firePress
 * @function
 */


// Start of sap/m/Toolbar.js
jQuery.sap.require("sap.ui.core.EnabledPropagator");
sap.ui.core.EnabledPropagator.call(sap.m.Toolbar.prototype);

/*
 * Grow-Shrink flexbox polyfill for Toolbar
 * TODO: Find a way to get percent widths also from class name not oly from style
 *
 * @static
 * @protected
 * @param {jQuery} $Element The container of flex items
 * @param {String} sFlexClass flex item class name
 */
sap.m.Toolbar.flexie = function($Element, sFlexClass) {
	if (!$Element) {
		return;
	}

	var iInnerWidth = 0,
		iTotalPercent = 0,
		aFlexItems = [],
		aPercentItems = [],
		nOuterWidth = $Element.width(),
		$Children = $Element.children(),
		sLastWidthAttr = "data-sap-tb-last-width",
		sPercentWidthAttr = "data-sap-tb-percent-width",
		pushPercentItem = function($item, nPercent) {
			var nBoxSizing = 0;
			var nWidth = $item.width();
			iTotalPercent += nPercent;
			iInnerWidth += $item.outerWidth(true) - nWidth;
			if ($item.css("box-sizing") == "border-box") {
				nBoxSizing = $item.outerWidth() - nWidth;
			}
			aPercentItems.push({
				boxSizing : nBoxSizing,
				percent : nPercent,
				el : $item[0]
			});
		},
		canPercentItemsFit = function() {
			if (aPercentItems.length) {
				var nRemainWidth = nOuterWidth - iInnerWidth;
				aPercentItems.forEach(function(oItem) {
					var nWidth = (nOuterWidth * oItem.percent) / 100;
					nRemainWidth -= Math.floor(nWidth);
				});
				return (nRemainWidth >= 0);
			}
		},
		setWidths = function(iTotalWidth) {
			var iSumOfWidth = 0;
			aPercentItems.forEach(function(oItem) {
				var nRelativePercent = Math.min(100, (oItem.percent * 100) / iTotalPercent);
				var nWidth = oItem.boxSizing + Math.floor((iTotalWidth * nRelativePercent) / 100);
				var sWidth = nWidth + "px";
				oItem.el.style.width = sWidth;
				oItem.el.setAttribute(sLastWidthAttr, sWidth);
				iSumOfWidth += nWidth;
			});

			iTotalWidth -= iSumOfWidth;
			if (iTotalWidth > 1) {
				aFlexItems.forEach(function(oFlexItemDomRef) {
					oFlexItemDomRef.style.width = Math.floor(iTotalWidth / aFlexItems.length) + "px";
				});
			}
		};

	$Children.each(function() {
		var $child = jQuery(this);
		if ($child.hasClass(sFlexClass)) {
			// this is flexible item
			aFlexItems.push(this);
			this.style.width = 0;
		} else if (this.firstChild && this.firstChild.nodeType == 3) {
			// text nodes should behave like 100% width elements
			pushPercentItem($child, 100);
		} else {
			// percent width check
			var sStyleWidth = this.style.width;
			var sLastWidthData = this.getAttribute(sLastWidthAttr);
			var sPercentWidthData = this.getAttribute(sPercentWidthAttr);
			var sWidth = (sStyleWidth === sLastWidthData) ? sPercentWidthData || sStyleWidth : sStyleWidth;
			if (sWidth.indexOf("%") > 0) {
				var nPercent = parseFloat(sWidth);
				pushPercentItem($child, nPercent);
				$child.attr(sPercentWidthAttr, sWidth);
			} else {
				iInnerWidth += $child.outerWidth(true);
			}
		}
	});

	var nRemainWidth = nOuterWidth - iInnerWidth;
	if (nRemainWidth > 0) {
		setWidths(canPercentItemsFit() ? nOuterWidth : nRemainWidth);
	}
};

// decides toolbar has flexbox support
sap.m.Toolbar.prototype.hasFlexBoxSupport = jQuery.support.hasFlexBoxSupport;

sap.m.Toolbar.prototype.onBeforeRendering = function() {
	if (!this.hasFlexBoxSupport) {
		this._deregisterResize();
	}
};

sap.m.Toolbar.prototype.onAfterRendering = function() {
	if (!this.hasFlexBoxSupport) {
		this._reflexie();
		this._registerResize();
	}
};

sap.m.Toolbar.prototype.exit = function() {
	if (!this.hasFlexBoxSupport) {
		this._deregisterResize();
	}
};

// handle press event
sap.m.Toolbar.prototype.ontap = function(oEvent) {
	if (this.getActive()) {
		this.firePress({
			srcControl : oEvent.srcControl || this
		});
	}
};

// keyboard handling mimic the tap/click event
sap.m.Toolbar.prototype.onsapenter = sap.m.Toolbar.prototype.ontap;
sap.m.Toolbar.prototype.onsapspace = sap.m.Toolbar.prototype.ontap;

sap.m.Toolbar.prototype.ontouchstart = function(oEvent) {
	// for control who need to know if they should handle touch events of toolbar
	oEvent.originalEvent._sapui_handledByControl = this.getActive();
};

// register DOM resize handlers
sap.m.Toolbar.prototype._registerResize = function() {
	sap.ui.getCore().attachIntervalTimer(this._handleContentResize, this);

	// register resize handler only if toolbar has relative width
	if (/^(\d+%|auto|inherit)$/i.test(this.getWidth())) {
		jQuery.sap.require("sap.ui.core.ResizeHandler");
		var fnResizeProxy = jQuery.proxy(this._handleToolbarResize, this);
		this._sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef(), fnResizeProxy);
	}
};

// remove DOM resize handlers
sap.m.Toolbar.prototype._deregisterResize = function() {
	sap.ui.getCore().detachIntervalTimer(this._handleContentResize, this);
	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
};

//get the end position of last content
sap.m.Toolbar.prototype._getEndPoint = function() {
	var iEndPoint = 0;
	var oDomRef = this.getDomRef();
	if (oDomRef && oDomRef.lastElementChild) {
		iEndPoint = oDomRef.lastElementChild.offsetLeft;
		if (!sap.ui.getCore().getConfiguration().getRTL()) {
			iEndPoint += oDomRef.lastElementChild.offsetWidth;
		}
	}
	return iEndPoint;
};

// Recalculate flexbox layout
sap.m.Toolbar.prototype._reflexie = function() {
	jQuery.sap.require("sap.m.ToolbarSpacer");
	sap.m.Toolbar.flexie(this.$(), sap.m.ToolbarSpacer.flexClass);
	this._endPoint = this._getEndPoint();
};

// handle toolbar resize
sap.m.Toolbar.prototype._handleToolbarResize = function() {
	this._reflexie();
};

// handle inner content resize
sap.m.Toolbar.prototype._handleContentResize = function() {
	if (this._endPoint != this._getEndPoint()) {
		this._reflexie();
	}
};