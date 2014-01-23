/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ushell.ui.launchpad.SearchResultAppItem.
jQuery.sap.declare("sap.ushell.ui.launchpad.SearchResultAppItem");
jQuery.sap.require("sap.ushell.library");
jQuery.sap.require("sap.m.Button");


/**
 * Constructor for a new ui/launchpad/SearchResultAppItem.
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
 * <li>{@link #getSearchTerm searchTerm} : string</li>
 * <li>{@link #getTargetUrl targetUrl} : sap.ui.core.URI</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Button#constructor sap.m.Button}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Add your documentation for the newui/launchpad/SearchResultAppItem
 * @extends sap.m.Button
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ushell.ui.launchpad.SearchResultAppItem
 */
sap.m.Button.extend("sap.ushell.ui.launchpad.SearchResultAppItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ushell",
	properties : {
		"searchTerm" : {type : "string", group : "Appearance", defaultValue : null},
		"targetUrl" : {type : "sap.ui.core.URI", group : "Behavior", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.ushell.ui.launchpad.SearchResultAppItem with name <code>sClassName</code> 
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
 * @name sap.ushell.ui.launchpad.SearchResultAppItem.extend
 * @function
 */


/**
 * Getter for property <code>searchTerm</code>.
 * the search term used for searching apps. Occurrences of this search term in the app title are highlighted
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>searchTerm</code>
 * @public
 * @name sap.ushell.ui.launchpad.SearchResultAppItem#getSearchTerm
 * @function
 */

/**
 * Setter for property <code>searchTerm</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSearchTerm  new value for property <code>searchTerm</code>
 * @return {sap.ushell.ui.launchpad.SearchResultAppItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchResultAppItem#setSearchTerm
 * @function
 */


/**
 * Getter for property <code>targetUrl</code>.
 * The app's target URL for navigating to the app
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>targetUrl</code>
 * @public
 * @name sap.ushell.ui.launchpad.SearchResultAppItem#getTargetUrl
 * @function
 */

/**
 * Setter for property <code>targetUrl</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sTargetUrl  new value for property <code>targetUrl</code>
 * @return {sap.ushell.ui.launchpad.SearchResultAppItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchResultAppItem#setTargetUrl
 * @function
 */


// Start of sap/ushell/ui/launchpad/SearchResultAppItem.js
// Copyright (c) 2013 SAP AG, All Rights Reserved
(function () {
    "use strict";
    /*global jQuery, sap, window */
    /*jslint nomen: true */

    sap.ushell.ui.launchpad.SearchResultAppItem.prototype.init = function () {
        if (sap.m.Button.prototype.init) {
            sap.m.Button.prototype.init.call(this);
        }
        this.setType(sap.m.ButtonType.Transparent);
        this.attachPress(this._onPress, this);
        this.addStyleClass("sapUshellSearchResultAppItem");
    };

    sap.ushell.ui.launchpad.SearchResultAppItem.prototype.exit = function () {
        if (sap.m.Button.prototype.exit) {
            sap.m.Button.prototype.exit.call(this);
        }
        this.detachPress(this._onPress, this);
    };

    sap.ushell.ui.launchpad.SearchResultAppItem.prototype.setTargetUrl = function (sUrl) {
        this.setEnabled(!!sUrl);
        this.setProperty("targetUrl", sUrl);
        return this;
    };

    sap.ushell.ui.launchpad.SearchResultAppItem.prototype._onPress = function () {
        if (this.getTargetUrl()) {
            window.location = this.getTargetUrl();
        }
    };
}());