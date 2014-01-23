/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ushell.ui.launchpad.PlusTile.
jQuery.sap.declare("sap.ushell.ui.launchpad.PlusTile");
jQuery.sap.require("sap.ushell.library");
jQuery.sap.require("sap.ushell.ui.launchpad.Tile");


/**
 * Constructor for a new ui/launchpad/PlusTile.
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
 * <li>{@link #getGroupId groupId} : string (default: '')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ushell.ui.launchpad.PlusTile#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ushell.ui.launchpad.Tile#constructor sap.ushell.ui.launchpad.Tile}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A specialized tile showing a plus icon.
 * @extends sap.ushell.ui.launchpad.Tile
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ushell.ui.launchpad.PlusTile
 */
sap.ushell.ui.launchpad.Tile.extend("sap.ushell.ui.launchpad.PlusTile", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ushell",
	properties : {
		"groupId" : {type : "string", group : "Misc", defaultValue : ''}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ushell.ui.launchpad.PlusTile with name <code>sClassName</code> 
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
 * @name sap.ushell.ui.launchpad.PlusTile.extend
 * @function
 */

sap.ushell.ui.launchpad.PlusTile.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>groupId</code>.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>groupId</code>
 * @public
 * @name sap.ushell.ui.launchpad.PlusTile#getGroupId
 * @function
 */

/**
 * Setter for property <code>groupId</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sGroupId  new value for property <code>groupId</code>
 * @return {sap.ushell.ui.launchpad.PlusTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.PlusTile#setGroupId
 * @function
 */


/**
 * Fired when user clicks on the tile 
 *
 * @name sap.ushell.ui.launchpad.PlusTile#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ushell.ui.launchpad.PlusTile</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.PlusTile</code>.<br/> itself. 
 *  
 * Fired when user clicks on the tile 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.PlusTile</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.PlusTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.PlusTile#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ushell.ui.launchpad.PlusTile</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.PlusTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.PlusTile#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.PlusTile} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.PlusTile#firePress
 * @function
 */


// Start of sap/ushell/ui/launchpad/PlusTile.js
// Copyright (c) 2013 SAP AG, All Rights Reserved
/*global jQuery, sap*/
/**
 * @name sap.ushell.ui.launchpad.PlusTile
 * 
 * @private
 */
(function () {
    "use strict";

    sap.ushell.ui.launchpad.PlusTile.prototype.init = function () {
        this.oIcon = new sap.ui.core.Icon({
            src : 'sys-cancel',
            tooltip : sap.ushell.resources.i18n.getText("open_catalog")
        });
    }

    sap.ushell.ui.launchpad.PlusTile.prototype.exit = function () {
        if (this.oIcon) {
            this.oIcon.destroy();
        }
    }

    sap.ushell.ui.launchpad.PlusTile.prototype.onclick = function () {
        this.firePress();
    };

    // Override setters to avoid rerenderings
    sap.ushell.ui.launchpad.PlusTile.prototype.setGroupId = function (v) {
        this.setProperty("groupId", v, true);        // set property, but suppress rerendering
        return this;
    };
}());
