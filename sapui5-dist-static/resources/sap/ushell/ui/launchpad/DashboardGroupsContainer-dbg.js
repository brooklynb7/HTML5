/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ushell.ui.launchpad.DashboardGroupsContainer.
jQuery.sap.declare("sap.ushell.ui.launchpad.DashboardGroupsContainer");
jQuery.sap.require("sap.ushell.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ui/launchpad/DashboardGroupsContainer.
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
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getGroups groups} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ushell.ui.launchpad.DashboardGroupsContainer#event:afterRendering afterRendering} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Add your documentation for the newui/launchpad/DashboardGroupsContainer
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ushell.ui.launchpad.DashboardGroupsContainer
 */
sap.ui.core.Control.extend("sap.ushell.ui.launchpad.DashboardGroupsContainer", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ushell",
	aggregations : {
    	"groups" : {type : "sap.ui.core.Control", multiple : true, singularName : "group"}
	},
	events : {
		"afterRendering" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ushell.ui.launchpad.DashboardGroupsContainer with name <code>sClassName</code> 
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
 * @name sap.ushell.ui.launchpad.DashboardGroupsContainer.extend
 * @function
 */

sap.ushell.ui.launchpad.DashboardGroupsContainer.M_EVENTS = {'afterRendering':'afterRendering'};


/**
 * Getter for aggregation <code>groups</code>.<br/>
 * 
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ushell.ui.launchpad.DashboardGroupsContainer#getGroups
 * @function
 */


/**
 * Inserts a group into the aggregation named <code>groups</code>.
 *
 * @param {sap.ui.core.Control}
 *          oGroup the group to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the group should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the group is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the group is inserted at 
 *             the last position        
 * @return {sap.ushell.ui.launchpad.DashboardGroupsContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.DashboardGroupsContainer#insertGroup
 * @function
 */

/**
 * Adds some group <code>oGroup</code> 
 * to the aggregation named <code>groups</code>.
 *
 * @param {sap.ui.core.Control}
 *            oGroup the group to add; if empty, nothing is inserted
 * @return {sap.ushell.ui.launchpad.DashboardGroupsContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.DashboardGroupsContainer#addGroup
 * @function
 */

/**
 * Removes an group from the aggregation named <code>groups</code>.
 *
 * @param {int | string | sap.ui.core.Control} vGroup the group to remove or its index or id
 * @return {sap.ui.core.Control} the removed group or null
 * @public
 * @name sap.ushell.ui.launchpad.DashboardGroupsContainer#removeGroup
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>groups</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ushell.ui.launchpad.DashboardGroupsContainer#removeAllGroups
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>groups</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oGroup the group whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ushell.ui.launchpad.DashboardGroupsContainer#indexOfGroup
 * @function
 */
	

/**
 * Destroys all the groups in the aggregation 
 * named <code>groups</code>.
 * @return {sap.ushell.ui.launchpad.DashboardGroupsContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.DashboardGroupsContainer#destroyGroups
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.DashboardGroupsContainer#afterRendering
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterRendering' event of this <code>sap.ushell.ui.launchpad.DashboardGroupsContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.DashboardGroupsContainer</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.DashboardGroupsContainer</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.DashboardGroupsContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.DashboardGroupsContainer#attachAfterRendering
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'afterRendering' event of this <code>sap.ushell.ui.launchpad.DashboardGroupsContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.DashboardGroupsContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.DashboardGroupsContainer#detachAfterRendering
 * @function
 */

/**
 * Fire event afterRendering to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.DashboardGroupsContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.DashboardGroupsContainer#fireAfterRendering
 * @function
 */


// Start of sap/ushell/ui/launchpad/DashboardGroupsContainer.js
// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @name sap.ushell.ui.launchpad.DashboardGroupsContainer
 *
 * @private
 */
/*global jQuery, sap*/

(function () {
    "use strict";

    // Overwrite update function (version without filter/sort support)
    sap.ushell.ui.launchpad.DashboardGroupsContainer.prototype.updateGroups = sap.ushell.override.updateAggregatesFactory("groups");
    // Alternative (supports all bindings, uses default as fallback)
    //sap.ushell.ui.launchpad.TileContainer.prototype.updateAggregation = sap.ushell.override.updateAggregation;

    sap.ushell.ui.launchpad.DashboardGroupsContainer.prototype.onAfterRendering = function () {
        this.fireAfterRendering();
    };
}());
