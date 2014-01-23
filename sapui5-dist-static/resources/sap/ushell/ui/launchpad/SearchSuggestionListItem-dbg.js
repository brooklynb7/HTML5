/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ushell.ui.launchpad.SearchSuggestionListItem.
jQuery.sap.declare("sap.ushell.ui.launchpad.SearchSuggestionListItem");
jQuery.sap.require("sap.ushell.library");
jQuery.sap.require("sap.m.ListItemBase");


/**
 * Constructor for a new ui/launchpad/SearchSuggestionListItem.
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
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getIsGroupFooter isGroupFooter} : boolean (default: false)</li>
 * <li>{@link #getCategorySeperator categorySeperator} : string (default: '/')</li>
 * <li>{@link #getCategoryFirstSeperator categoryFirstSeperator} : string (default: '')</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getMaxCategories maxCategories} : int (default: 2)</li>
 * <li>{@link #getIsGroupHeader isGroupHeader} : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCategories categories} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ushell.ui.launchpad.SearchSuggestionListItem#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ushell.ui.launchpad.SearchSuggestionListItem#event:focus focus} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Add your documentation for the newui/launchpad/SearchSuggestionListItem
 * @extends sap.m.ListItemBase
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem
 */
sap.m.ListItemBase.extend("sap.ushell.ui.launchpad.SearchSuggestionListItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ushell",
	properties : {
		"text" : {type : "string", group : "Misc", defaultValue : null},
		"isGroupFooter" : {type : "boolean", group : "Misc", defaultValue : false},
		"categorySeperator" : {type : "string", group : "Misc", defaultValue : '/'},
		"categoryFirstSeperator" : {type : "string", group : "Misc", defaultValue : ''},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"maxCategories" : {type : "int", group : "Misc", defaultValue : 2},
		"isGroupHeader" : {type : "boolean", group : "Misc", defaultValue : null}
	},
	aggregations : {
    	"categories" : {type : "sap.ui.core.Control", multiple : true, singularName : "category"}
	},
	events : {
		"press" : {}, 
		"focus" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ushell.ui.launchpad.SearchSuggestionListItem with name <code>sClassName</code> 
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
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem.extend
 * @function
 */

sap.ushell.ui.launchpad.SearchSuggestionListItem.M_EVENTS = {'press':'press','focus':'focus'};


/**
 * Getter for property <code>text</code>.
 * Suggestion text
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#setText
 * @function
 */


/**
 * Getter for property <code>isGroupFooter</code>.
 * 
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>isGroupFooter</code>
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#getIsGroupFooter
 * @function
 */

/**
 * Setter for property <code>isGroupFooter</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bIsGroupFooter  new value for property <code>isGroupFooter</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#setIsGroupFooter
 * @function
 */


/**
 * Getter for property <code>categorySeperator</code>.
 * 
 *
 * Default value is <code>/</code>
 *
 * @return {string} the value of property <code>categorySeperator</code>
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#getCategorySeperator
 * @function
 */

/**
 * Setter for property <code>categorySeperator</code>.
 *
 * Default value is <code>/</code> 
 *
 * @param {string} sCategorySeperator  new value for property <code>categorySeperator</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#setCategorySeperator
 * @function
 */


/**
 * Getter for property <code>categoryFirstSeperator</code>.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>categoryFirstSeperator</code>
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#getCategoryFirstSeperator
 * @function
 */

/**
 * Setter for property <code>categoryFirstSeperator</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sCategoryFirstSeperator  new value for property <code>categoryFirstSeperator</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#setCategoryFirstSeperator
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#setIcon
 * @function
 */


/**
 * Getter for property <code>maxCategories</code>.
 * 
 *
 * Default value is <code>2</code>
 *
 * @return {int} the value of property <code>maxCategories</code>
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#getMaxCategories
 * @function
 */

/**
 * Setter for property <code>maxCategories</code>.
 *
 * Default value is <code>2</code> 
 *
 * @param {int} iMaxCategories  new value for property <code>maxCategories</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#setMaxCategories
 * @function
 */


/**
 * Getter for property <code>isGroupHeader</code>.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>isGroupHeader</code>
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#getIsGroupHeader
 * @function
 */

/**
 * Setter for property <code>isGroupHeader</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bIsGroupHeader  new value for property <code>isGroupHeader</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#setIsGroupHeader
 * @function
 */


/**
 * Getter for aggregation <code>categories</code>.<br/>
 * Category Control
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#getCategories
 * @function
 */


/**
 * Inserts a category into the aggregation named <code>categories</code>.
 *
 * @param {sap.ui.core.Control}
 *          oCategory the category to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the category should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the category is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the category is inserted at 
 *             the last position        
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#insertCategory
 * @function
 */

/**
 * Adds some category <code>oCategory</code> 
 * to the aggregation named <code>categories</code>.
 *
 * @param {sap.ui.core.Control}
 *            oCategory the category to add; if empty, nothing is inserted
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#addCategory
 * @function
 */

/**
 * Removes an category from the aggregation named <code>categories</code>.
 *
 * @param {int | string | sap.ui.core.Control} vCategory the category to remove or its index or id
 * @return {sap.ui.core.Control} the removed category or null
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#removeCategory
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>categories</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#removeAllCategories
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>categories</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oCategory the category whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#indexOfCategory
 * @function
 */
	

/**
 * Destroys all the categories in the aggregation 
 * named <code>categories</code>.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#destroyCategories
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#firePress
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#focus
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'focus' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#attachFocus
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'focus' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#detachFocus
 * @function
 */

/**
 * Fire event focus to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.SearchSuggestionListItem#fireFocus
 * @function
 */


// Start of sap/ushell/ui/launchpad/SearchSuggestionListItem.js
// Copyright (c) 2013 SAP AG, All Rights Reserved
(function () {
    "use strict";
    /*global jQuery, sap, window */
    /*jslint nomen: true */

    jQuery.sap.require("sap.ushell.override");

    sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.addCategory = function (oCategory) {
        this.addAggregation("categories", oCategory);

        oCategory.addEventDelegate({
            onmouseover: this._focusCategory
        }, this);
        oCategory.addEventDelegate({
            onsapenter: this.onsapenter
        }, oCategory);
        return this;
    };

    sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.setActive = function (oEvent) {
        return this;
    };

    sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.updateAggregation = sap.ushell.override.updateAggregation;


    sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.firePress = function (oEvent) {
        if (!this.getIsGroupFooter()) {
            sap.m.ListItemBase.prototype.firePress.call(this);
        }
    };


    sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.onmouseover = function (oEvent) {
        if (jQuery(oEvent.target).hasClass('sapUshellSearchSuggestionListItemNavItem')) {
            this.focus();
            this.fireFocus();
        }
    };

    sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.onsapenter = function () {
        this.firePress();
    };

    sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.getFocusDomRef = function () {
        return (this.getDomRef() && this.getDomRef().getElementsByClassName("sapUshellSearchSuggestionListItemNavItem")[0]) || null;
    };


    sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype._focusCategory = function (oEvent) {
        oEvent.srcControl.focus();
        oEvent.preventDefault();
        oEvent.stopPropagation();
        this.fireFocus();
    };
}());