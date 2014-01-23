/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ushell.ui.launchpad.DeleteArea.
jQuery.sap.declare("sap.ushell.ui.launchpad.DeleteArea");
jQuery.sap.require("sap.ushell.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ui/launchpad/DeleteArea.
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
 * <li>{@link #getType type} : sap.ushell.ui.launchpad.DeleteAreaType (default: sap.ushell.ui.launchpad.DeleteAreaType.Dashboard)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ushell.ui.launchpad.DeleteArea#event:drop drop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ushell.ui.launchpad.DeleteArea#event:tileOver tileOver} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ushell.ui.launchpad.DeleteArea#event:tileOut tileOut} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Add your documentation for the new ui/launchpad/DeleteArea
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ushell.ui.launchpad.DeleteArea
 */
sap.ui.core.Control.extend("sap.ushell.ui.launchpad.DeleteArea", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ushell",
	properties : {
		"type" : {type : "sap.ushell.ui.launchpad.DeleteAreaType", group : "Misc", defaultValue : sap.ushell.ui.launchpad.DeleteAreaType.Dashboard}
	},
	events : {
		"drop" : {}, 
		"tileOver" : {}, 
		"tileOut" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ushell.ui.launchpad.DeleteArea with name <code>sClassName</code> 
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
 * @name sap.ushell.ui.launchpad.DeleteArea.extend
 * @function
 */

sap.ushell.ui.launchpad.DeleteArea.M_EVENTS = {'drop':'drop','tileOver':'tileOver','tileOut':'tileOut'};


/**
 * Getter for property <code>type</code>.
 * 
 *
 * Default value is <code>Dashboard</code>
 *
 * @return {sap.ushell.ui.launchpad.DeleteAreaType} the value of property <code>type</code>
 * @public
 * @name sap.ushell.ui.launchpad.DeleteArea#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>Dashboard</code> 
 *
 * @param {sap.ushell.ui.launchpad.DeleteAreaType} oType  new value for property <code>type</code>
 * @return {sap.ushell.ui.launchpad.DeleteArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.DeleteArea#setType
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.DeleteArea#drop
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'drop' event of this <code>sap.ushell.ui.launchpad.DeleteArea</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.DeleteArea</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.DeleteArea</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.DeleteArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.DeleteArea#attachDrop
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'drop' event of this <code>sap.ushell.ui.launchpad.DeleteArea</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.DeleteArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.DeleteArea#detachDrop
 * @function
 */

/**
 * Fire event drop to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.DeleteArea} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.DeleteArea#fireDrop
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.DeleteArea#tileOver
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'tileOver' event of this <code>sap.ushell.ui.launchpad.DeleteArea</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.DeleteArea</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.DeleteArea</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.DeleteArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.DeleteArea#attachTileOver
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'tileOver' event of this <code>sap.ushell.ui.launchpad.DeleteArea</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.DeleteArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.DeleteArea#detachTileOver
 * @function
 */

/**
 * Fire event tileOver to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.DeleteArea} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.DeleteArea#fireTileOver
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.DeleteArea#tileOut
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'tileOut' event of this <code>sap.ushell.ui.launchpad.DeleteArea</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.DeleteArea</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.DeleteArea</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.DeleteArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.DeleteArea#attachTileOut
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'tileOut' event of this <code>sap.ushell.ui.launchpad.DeleteArea</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.DeleteArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.DeleteArea#detachTileOut
 * @function
 */

/**
 * Fire event tileOut to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.DeleteArea} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.DeleteArea#fireTileOut
 * @function
 */


// Start of sap/ushell/ui/launchpad/DeleteArea.js
// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @name sap.ushell.ui.launchpad.DeleteArea
 * 
 * @private
 */
/*global jQuery, sap, $, window*/


(function () {
    "use strict";
    sap.ushell.ui.launchpad.DeleteArea.prototype.init = function () {
        // do something for initialization...
    };
    sap.ushell.ui.launchpad.DeleteArea.prototype.onAfterRendering = function () {
        if (this.getType() === sap.ushell.ui.launchpad.DeleteAreaType.Dashboard) {
            this.jqDeleteArea_visual = jQuery(".sapUshellDeleteArea_dashboard_visual");
            this.jqDeleteArea_functional = jQuery(".sapUshellDeleteArea_dashboard_functional");
            this.tileOver(false);
        } else {
            this.jqDeleteArea_visual = jQuery(".sapUshellDeleteArea_grouplist_visual");
            this.jqDeleteArea_functional = jQuery(".sapUshellDeleteArea_grouplist_functional");
            this.groupOver(false);
        }
        this._addDroppable();
    };
    sap.ushell.ui.launchpad.DeleteArea.prototype._addDroppable = function () {
        if(this.jqDeleteArea_functional.is(".ui-droppable")) {
            return;
        }

        this.jqDeleteArea_functional.droppable({
            greedy: 'true',
            tolerance: 'touch',
            accept: jQuery.proxy(this._handleAccept, this),
            drop: jQuery.proxy(this._handleDrop, this),
            over: jQuery.proxy(this._handleOver, this),
            out: jQuery.proxy(this._handleOut, this)
        });
    };
    sap.ushell.ui.launchpad.DeleteArea.prototype.tileOver = function (bool) {
        this.jqDeleteArea_functional.data("tileOver", bool);
    };
    sap.ushell.ui.launchpad.DeleteArea.prototype.groupOver = function (bool) {
        this.jqDeleteArea_functional.data("groupOver", bool);
    };
    sap.ushell.ui.launchpad.DeleteArea.prototype.getFunctionalArea = function () {
        return this.jqDeleteArea_functional;
    };
    sap.ushell.ui.launchpad.DeleteArea.prototype.getVisualArea = function () {
        return this.jqDeleteArea_visual;
    };
    sap.ushell.ui.launchpad.DeleteArea.prototype.show = function () {
        this.jqDeleteArea_functional.removeClass("sapUshellDeleteArea_functional_hidden").addClass("sapUshellDeleteArea_functional_show");
        if (this.getType() === sap.ushell.ui.launchpad.DeleteAreaType.Dashboard){
            this.jqDeleteArea_visual.switchClass("sapUshellDeleteArea_visual_hidden", "sapUshellDeleteArea_visual_show sapUshellDeleteArea_dashboard_visual_show", 250, "swing");
        } else {
            this.jqDeleteArea_visual.switchClass("sapUshellDeleteArea_visual_hidden", "sapUshellDeleteArea_visual_show sapUshellDeleteArea_grouplist_visual_show", 250, "swing");
        }
    };
    sap.ushell.ui.launchpad.DeleteArea.prototype.hide = function () {
        this.jqDeleteArea_visual.removeClass("sapUshellDeleteArea_visual_hover");
        if (this.getType() === sap.ushell.ui.launchpad.DeleteAreaType.Dashboard){
            this.jqDeleteArea_visual.switchClass("sapUshellDeleteArea_visual_show sapUshellDeleteArea_dashboard_visual_show", "sapUshellDeleteArea_visual_hidden", 250, "swing");
            this.jqDeleteArea_visual.removeClass("sapUshellDeleteArea_dashboard_visual_hover");
        } else {
            this.jqDeleteArea_visual.switchClass("sapUshellDeleteArea_visual_show sapUshellDeleteArea_grouplist_visual_show", "sapUshellDeleteArea_visual_hidden", 250, "swing");
            this.jqDeleteArea_visual.removeClass("sapUshellDeleteArea_grouplist_visual_hover");
        }
        this.jqDeleteArea_functional.removeClass("sapUshellDeleteArea_functional_show").addClass("sapUshellDeleteArea_functional_hidden");
    };
    sap.ushell.ui.launchpad.DeleteArea.prototype._handleAccept = function (d) {
        if (this.getType() === sap.ushell.ui.launchpad.DeleteAreaType.GroupList) {
            return d.hasClass("sapUshellGroupListItem");
        } else {
            return true;
        }
    };
    sap.ushell.ui.launchpad.DeleteArea.prototype._handleDrop = function (event, ui) {
        this.fireEvent("drop", {
            functionalArea : this.jqDeleteArea_functional,
            ui : ui
        });
    };
    sap.ushell.ui.launchpad.DeleteArea.prototype._handleOver = function () {
        var that = this,
            isDashboardDeleteArea = (this.getType() === sap.ushell.ui.launchpad.DeleteAreaType.Dashboard);

        if (this.getType() === sap.ushell.ui.launchpad.DeleteAreaType.Dashboard) {
            this.tileOver(true);
        } else {
            this.groupOver(true);
        }

        //Hide placholder and animate clones to new positions
        this.fireTileOver();

        if (this.getType() === sap.ushell.ui.launchpad.DeleteAreaType.Dashboard){
            this.jqDeleteArea_visual.switchClass("", "sapUshellDeleteArea_visual_hover sapUshellDeleteArea_dashboard_visual_hover", 100, "swing");
        } else {
            this.jqDeleteArea_visual.switchClass("", "sapUshellDeleteArea_visual_hover sapUshellDeleteArea_grouplist_visual_hover", 100, "swing");
        }
    };
    sap.ushell.ui.launchpad.DeleteArea.prototype._handleOut = function () {
        var that = this,
            isDashboardDeleteArea = (this.getType() === sap.ushell.ui.launchpad.DeleteAreaType.Dashboard);

        if (this.getType() === sap.ushell.ui.launchpad.DeleteAreaType.Dashboard) {
            this.tileOver(false);
        } else {
            this.groupOver(false);
        }

        //Hide placholder and animate clones to new positions
        this.fireTileOut();

        if (this.getType() === sap.ushell.ui.launchpad.DeleteAreaType.Dashboard){
            this.jqDeleteArea_visual.switchClass("sapUshellDeleteArea_visual_hover sapUshellDeleteArea_dashboard_visual_hover", "", 100, "swing");
        } else {
            this.jqDeleteArea_visual.switchClass("sapUshellDeleteArea_visual_hover sapUshellDeleteArea_grouplist_visual_hover", "", 100, "swing");
        }
    };
}());
