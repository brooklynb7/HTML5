/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ushell.ui.launchpad.SearchSuggestionList.
jQuery.sap.declare("sap.ushell.ui.launchpad.SearchSuggestionList");
jQuery.sap.require("sap.ushell.library");
jQuery.sap.require("sap.m.List");


/**
 * Constructor for a new ui/launchpad/SearchSuggestionList.
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
 * <li>{@link #getDisableKeyboardNavigation disableKeyboardNavigation} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ushell.ui.launchpad.SearchSuggestionList#event:pressEsc pressEsc} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ushell.ui.launchpad.SearchSuggestionList#event:pressUpFirstItem pressUpFirstItem} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.List#constructor sap.m.List}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Add your documentation for the newui/launchpad/SearchSuggestionList
 * @extends sap.m.List
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionList
 */
sap.m.List.extend("sap.ushell.ui.launchpad.SearchSuggestionList", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ushell",
	properties : {
		"disableKeyboardNavigation" : {type : "boolean", group : "Misc", defaultValue : false}
	},
	events : {
		"pressEsc" : {}, 
		"pressUpFirstItem" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ushell.ui.launchpad.SearchSuggestionList with name <code>sClassName</code> 
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
 * @name sap.ushell.ui.launchpad.SearchSuggestionList.extend
 * @function
 */

sap.ushell.ui.launchpad.SearchSuggestionList.M_EVENTS = {'pressEsc':'pressEsc','pressUpFirstItem':'pressUpFirstItem'};


/**
 * Getter for property <code>disableKeyboardNavigation</code>.
 * 
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>disableKeyboardNavigation</code>
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionList#getDisableKeyboardNavigation
 * @function
 */

/**
 * Setter for property <code>disableKeyboardNavigation</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bDisableKeyboardNavigation  new value for property <code>disableKeyboardNavigation</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionList} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionList#setDisableKeyboardNavigation
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.SearchSuggestionList#pressEsc
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'pressEsc' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.SearchSuggestionList} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionList#attachPressEsc
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'pressEsc' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionList} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionList#detachPressEsc
 * @function
 */

/**
 * Fire event pressEsc to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionList} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.SearchSuggestionList#firePressEsc
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.SearchSuggestionList#pressUpFirstItem
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'pressUpFirstItem' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.SearchSuggestionList} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionList#attachPressUpFirstItem
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'pressUpFirstItem' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionList} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchSuggestionList#detachPressUpFirstItem
 * @function
 */

/**
 * Fire event pressUpFirstItem to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionList} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.SearchSuggestionList#firePressUpFirstItem
 * @function
 */


// Start of sap/ushell/ui/launchpad/SearchSuggestionList.js
// Copyright (c) 2013 SAP AG, All Rights Reserved
(function () {
    "use strict";
    /*global jQuery, sap, window */
    /*jslint nomen: true */

    jQuery.sap.require("sap.ushell.override");
    jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");

    sap.ushell.ui.launchpad.SearchSuggestionList.prototype.init = function (oEvent) {
        this.setShowNoData(false);
        this.setShowSeparators(sap.m.ListSeparators.Inner);

        this.oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
        this.oItemNavigation.attachEvent("AfterFocus", this._afterFocus);
    };

    sap.ushell.ui.launchpad.SearchSuggestionList.prototype.exit = function (oEvent) {
        this.oItemNavigation.detachEvent("AfterFocus", this._afterFocus);
        this.oItemNavigation.destroy();
    };

    sap.ushell.ui.launchpad.SearchSuggestionList.prototype.updateAggregation = sap.ushell.override.updateAggregation;

    sap.ushell.ui.launchpad.SearchSuggestionList.prototype.addItem = function (oItem) {
        if (oItem instanceof sap.ushell.ui.launchpad.SearchSuggestionListItem) {
            oItem.attachFocus(this._focusItem, this);
        }
        return sap.m.List.prototype.addItem.call(this, oItem);
    };

    sap.ushell.ui.launchpad.SearchSuggestionList.prototype.removeItem = function (oItem) {
        if (oItem instanceof sap.ushell.ui.launchpad.SearchSuggestionListItem) {
            oItem.detachFocus(this._focusItem, this);
        }
        return sap.m.List.prototype.removeItem.call(this, oItem);
    };

    sap.ushell.ui.launchpad.SearchSuggestionList.prototype.setDisableKeyboardNavigation = function (bDisabled) {
        if (bDisabled) {
            this.removeDelegate(this.oItemNavigation);
        } else {
            this.addDelegate(this.oItemNavigation);
        }

        this.setProperty("disableKeyboardNavigation", bDisabled);
        return this;
    };

    sap.ushell.ui.launchpad.SearchSuggestionList.prototype.onsapright = function () {
        var self = this.oItemNavigation;
        self.setFocusedIndex(self.getItemDomRefs().lastIndexOf(self.getFocusedDomRef()));
    };

    sap.ushell.ui.launchpad.SearchSuggestionList.prototype.onsapup = function (oEvent) {
        if (oEvent.srcControl === this.getItems()[0]) {
            this.removeDelegate(this.oItemNavigation);
            this.firePressUpFirstItem();
        }
    };

    sap.ushell.ui.launchpad.SearchSuggestionList.prototype.onsapescape = function () {
        this.removeDelegate(this.oItemNavigation);
        this.firePressEsc();
    };

    sap.ushell.ui.launchpad.SearchSuggestionList.prototype.onAfterRendering = function () {
        //Collect the dom references of the items
        var oFocusRef = this.getDomRef(),
            aDomRefs = oFocusRef.getElementsByTagName("li"),
            aItems = [],
            iMaxColumns = 0;

        // Get max number of columns in one row
        jQuery.each(aDomRefs, function (i, value) {
            var iClolumns = value.getElementsByClassName("sapUshellSearchSuggestionListItemNavItem").length;
            if (iClolumns > iMaxColumns) {
                iMaxColumns = iClolumns;
            }
        });

        // Build Grid
        jQuery.each(aDomRefs, function (i, value) {
            var oLinks = value.getElementsByClassName("sapUshellSearchSuggestionListItemNavItem"),
                j = 0;
            if (oLinks.length > 0) {
                for (j; j < iMaxColumns; j = j + 1) {
                    aItems.push(oLinks[j] || aItems[aItems.length - 1]);
                }
            }
        });

        // After each rendering the delegate needs to be initialized as well.
        this.oItemNavigation
            .setRootDomRef(oFocusRef)
            .setItemDomRefs(aItems)
            .setCycling(true)
            .setColumns(iMaxColumns)
            .setSelectedIndex(0);
    };

    sap.ushell.ui.launchpad.SearchSuggestionList.prototype._afterFocus = function (oEvent) {
        this.setFocusedIndex(this.getItemDomRefs().indexOf(this.getFocusedDomRef()));
    };

    sap.ushell.ui.launchpad.SearchSuggestionList.prototype._focusItem = function () {
        this.addDelegate(this.oItemNavigation);
    };
}());