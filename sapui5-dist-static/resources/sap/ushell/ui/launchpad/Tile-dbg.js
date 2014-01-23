/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ushell.ui.launchpad.Tile.
jQuery.sap.declare("sap.ushell.ui.launchpad.Tile");
jQuery.sap.require("sap.ushell.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ui/launchpad/Tile.
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
 * <li>{@link #getLong long} : boolean (default: false)</li>
 * <li>{@link #getUuid uuid} : string</li>
 * <li>{@link #getTarget target} : string</li>
 * <li>{@link #getDraggable draggable} : boolean (default: false)</li>
 * <li>{@link #getDragContainer dragContainer} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTileViews tileViews} : sap.ui.core.Control[]</li>
 * <li>{@link #getFootItems footItems} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ushell.ui.launchpad.Tile#event:dragStart dragStart} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ushell.ui.launchpad.Tile#event:dragStop dragStop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ushell.ui.launchpad.Tile#event:afterRendering afterRendering} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A tile to be displayed in the tile container. This tile acts as container for specialized tile implementations.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ushell.ui.launchpad.Tile
 */
sap.ui.core.Control.extend("sap.ushell.ui.launchpad.Tile", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ushell",
	properties : {
		"long" : {type : "boolean", group : "Misc", defaultValue : false},
		"uuid" : {type : "string", group : "Misc", defaultValue : null},
		"target" : {type : "string", group : "Misc", defaultValue : null},
		"draggable" : {type : "boolean", group : "Misc", defaultValue : false},
		"dragContainer" : {type : "string", group : "Misc", defaultValue : null},
		"visible" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	aggregations : {
    	"tileViews" : {type : "sap.ui.core.Control", multiple : true, singularName : "tileView"}, 
    	"footItems" : {type : "sap.ui.core.Control", multiple : true, singularName : "footItem"}
	},
	events : {
		"dragStart" : {}, 
		"dragStop" : {}, 
		"afterRendering" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ushell.ui.launchpad.Tile with name <code>sClassName</code> 
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
 * @name sap.ushell.ui.launchpad.Tile.extend
 * @function
 */

sap.ushell.ui.launchpad.Tile.M_EVENTS = {'dragStart':'dragStart','dragStop':'dragStop','afterRendering':'afterRendering'};


/**
 * Getter for property <code>long</code>.
 * Whether tile spans more than one column
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>long</code>
 * @public
 * @name sap.ushell.ui.launchpad.Tile#getLong
 * @function
 */

/**
 * Setter for property <code>long</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bLong  new value for property <code>long</code>
 * @return {sap.ushell.ui.launchpad.Tile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Tile#setLong
 * @function
 */


/**
 * Getter for property <code>uuid</code>.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>uuid</code>
 * @public
 * @name sap.ushell.ui.launchpad.Tile#getUuid
 * @function
 */

/**
 * Setter for property <code>uuid</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sUuid  new value for property <code>uuid</code>
 * @return {sap.ushell.ui.launchpad.Tile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Tile#setUuid
 * @function
 */


/**
 * Getter for property <code>target</code>.
 * Hyperlink target
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>target</code>
 * @public
 * @name sap.ushell.ui.launchpad.Tile#getTarget
 * @function
 */

/**
 * Setter for property <code>target</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTarget  new value for property <code>target</code>
 * @return {sap.ushell.ui.launchpad.Tile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Tile#setTarget
 * @function
 */


/**
 * Getter for property <code>draggable</code>.
 * 
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>draggable</code>
 * @public
 * @name sap.ushell.ui.launchpad.Tile#getDraggable
 * @function
 */

/**
 * Setter for property <code>draggable</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bDraggable  new value for property <code>draggable</code>
 * @return {sap.ushell.ui.launchpad.Tile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Tile#setDraggable
 * @function
 */


/**
 * Getter for property <code>dragContainer</code>.
 * jQuery selector specifying where drag helper is appended to.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>dragContainer</code>
 * @public
 * @name sap.ushell.ui.launchpad.Tile#getDragContainer
 * @function
 */

/**
 * Setter for property <code>dragContainer</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDragContainer  new value for property <code>dragContainer</code>
 * @return {sap.ushell.ui.launchpad.Tile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Tile#setDragContainer
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ushell.ui.launchpad.Tile#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ushell.ui.launchpad.Tile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Tile#setVisible
 * @function
 */


/**
 * Getter for aggregation <code>tileViews</code>.<br/>
 * 
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ushell.ui.launchpad.Tile#getTileViews
 * @function
 */


/**
 * Inserts a tileView into the aggregation named <code>tileViews</code>.
 *
 * @param {sap.ui.core.Control}
 *          oTileView the tileView to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the tileView should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the tileView is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the tileView is inserted at 
 *             the last position        
 * @return {sap.ushell.ui.launchpad.Tile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Tile#insertTileView
 * @function
 */

/**
 * Adds some tileView <code>oTileView</code> 
 * to the aggregation named <code>tileViews</code>.
 *
 * @param {sap.ui.core.Control}
 *            oTileView the tileView to add; if empty, nothing is inserted
 * @return {sap.ushell.ui.launchpad.Tile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Tile#addTileView
 * @function
 */

/**
 * Removes an tileView from the aggregation named <code>tileViews</code>.
 *
 * @param {int | string | sap.ui.core.Control} vTileView the tileView to remove or its index or id
 * @return {sap.ui.core.Control} the removed tileView or null
 * @public
 * @name sap.ushell.ui.launchpad.Tile#removeTileView
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>tileViews</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ushell.ui.launchpad.Tile#removeAllTileViews
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>tileViews</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oTileView the tileView whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ushell.ui.launchpad.Tile#indexOfTileView
 * @function
 */
	

/**
 * Destroys all the tileViews in the aggregation 
 * named <code>tileViews</code>.
 * @return {sap.ushell.ui.launchpad.Tile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Tile#destroyTileViews
 * @function
 */


/**
 * Getter for aggregation <code>footItems</code>.<br/>
 * 
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ushell.ui.launchpad.Tile#getFootItems
 * @function
 */


/**
 * Inserts a footItem into the aggregation named <code>footItems</code>.
 *
 * @param {sap.ui.core.Control}
 *          oFootItem the footItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the footItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the footItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the footItem is inserted at 
 *             the last position        
 * @return {sap.ushell.ui.launchpad.Tile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Tile#insertFootItem
 * @function
 */

/**
 * Adds some footItem <code>oFootItem</code> 
 * to the aggregation named <code>footItems</code>.
 *
 * @param {sap.ui.core.Control}
 *            oFootItem the footItem to add; if empty, nothing is inserted
 * @return {sap.ushell.ui.launchpad.Tile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Tile#addFootItem
 * @function
 */

/**
 * Removes an footItem from the aggregation named <code>footItems</code>.
 *
 * @param {int | string | sap.ui.core.Control} vFootItem the footItem to remove or its index or id
 * @return {sap.ui.core.Control} the removed footItem or null
 * @public
 * @name sap.ushell.ui.launchpad.Tile#removeFootItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>footItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ushell.ui.launchpad.Tile#removeAllFootItems
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>footItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oFootItem the footItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ushell.ui.launchpad.Tile#indexOfFootItem
 * @function
 */
	

/**
 * Destroys all the footItems in the aggregation 
 * named <code>footItems</code>.
 * @return {sap.ushell.ui.launchpad.Tile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Tile#destroyFootItems
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.Tile#dragStart
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'dragStart' event of this <code>sap.ushell.ui.launchpad.Tile</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.Tile</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.Tile</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.Tile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Tile#attachDragStart
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'dragStart' event of this <code>sap.ushell.ui.launchpad.Tile</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.Tile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Tile#detachDragStart
 * @function
 */

/**
 * Fire event dragStart to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.Tile} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.Tile#fireDragStart
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.Tile#dragStop
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'dragStop' event of this <code>sap.ushell.ui.launchpad.Tile</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.Tile</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.Tile</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.Tile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Tile#attachDragStop
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'dragStop' event of this <code>sap.ushell.ui.launchpad.Tile</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.Tile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Tile#detachDragStop
 * @function
 */

/**
 * Fire event dragStop to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.Tile} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.Tile#fireDragStop
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.Tile#afterRendering
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterRendering' event of this <code>sap.ushell.ui.launchpad.Tile</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.Tile</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.Tile</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.Tile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Tile#attachAfterRendering
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'afterRendering' event of this <code>sap.ushell.ui.launchpad.Tile</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.Tile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Tile#detachAfterRendering
 * @function
 */

/**
 * Fire event afterRendering to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.Tile} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.Tile#fireAfterRendering
 * @function
 */


// Start of sap/ushell/ui/launchpad/Tile.js
// Copyright (c) 2013 SAP AG, All Rights Reserved
/*global jQuery, sap*/
/**
 * @name sap.ushell.ui.launchpad.Tile
 *
 * @private
 */
(function () {
    "use strict";
    /*global jQuery, sap, window */
    /*jslint nomen: true*/

    jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-core');
    jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-widget');
    jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-mouse');
    jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-draggable');
    jQuery.sap.require("sap.ushell.override");

    sap.ushell.ui.launchpad.Tile.prototype.ontap = function (event, ui) {
        // NOTE: for now, the on press animation is not used, as it caused too much
        // confusion
        return;
        var oSrc = event.srcElement,
            bIsInFooter = true,
            i,
            fTimeoutHelper = function () {
                var fHelper2 = function () {
                    this.toggleStyleClass("sapUshellTileHide", false);
                };
                this.toggleStyleClass("sapUshellTileHide", true);
                this.toggleStyleClass("sapUshellTileTapped", false);
                window.setTimeout(jQuery.proxy(fHelper2, this), 800);
            };
        // we do not need to support animations for phones and if the browser does not support it
        if (jQuery.device.is.phone || !jQuery.support.cssAnimations) {
            return;
        }
        // workaround: check whether the clicked source element is within the main section of the tile (i.e. in sapUshellTileInner)
        // If a parent is outside, e.g. in the footer (Catalog view), we suppress the animation
        for (i = 0; i < 6; i = i + 1) {
            if (jQuery(oSrc) && (jQuery(oSrc).hasClass("sapUshellTileInner") || jQuery(oSrc).hasClass("sapUshellPlusTile"))) {
                bIsInFooter = false;
                break;
            }
            // go up one level
            oSrc = jQuery(oSrc).parent();
        }
        if (bIsInFooter) {
            // the tapped item is the footer button or something not within the tile - ignore
            return;
        }
        this.toggleStyleClass("sapUshellTileTapped", true);
        window.setTimeout(jQuery.proxy(fTimeoutHelper, this), 1000);
    };

    sap.ushell.ui.launchpad.Tile.prototype.destroy = function (bSuppressInvalidate) {
        this.removeAggregation("tileViews", 0, true);
        sap.ui.core.Control.prototype.destroy.call(this, bSuppressInvalidate);
    };

    sap.ushell.ui.launchpad.Tile.prototype.addTileView = function (oObject, bSuppressInvalidate) {
        // Workaround for a problem in addAggregation. If a child is added to its current parent again,
        // it is actually removed from the aggregation. Prevent this by removing it from its parent first.
        oObject.setParent(null);
        sap.ui.base.ManagedObject.prototype.addAggregation.call(this, "tileViews", oObject, bSuppressInvalidate);
    };

    sap.ushell.ui.launchpad.Tile.prototype.destroyTileViews = function () {
        // Don't delete the tileViews when destroying the aggregation. They are stored in the model and must be handled manually.
        if (this.mAggregations["tileViews"]) {
            this.mAggregations["tileViews"].length = 0;
        }
    };

    sap.ushell.ui.launchpad.Tile.prototype.exit = function () {
        if (this.getDraggable()) {
            this._setDraggable(false);
        }
    };

    sap.ushell.ui.launchpad.Tile.prototype.onBeforeRendering = function () {
        if (this.getDraggable()) {
            this._setDraggable(false);
        }
    };

    sap.ushell.ui.launchpad.Tile.prototype.onAfterRendering = function () {
        if (this.getDraggable()) {
            this._setDraggable(true);
        }
        this.fireAfterRendering();
    };

    //jQuery events
    sap.ushell.ui.launchpad.Tile.prototype._handleDragStart = function (event, ui) {
        this.fireDragStart();
    };

    sap.ushell.ui.launchpad.Tile.prototype._handleDragStop = function (event, ui) {
        this.fireDragStop();
    };

    // override setters
    sap.ushell.ui.launchpad.Tile.prototype.setDraggable = function (bDraggable) {
        this.setProperty("draggable", bDraggable, true); // suppress rerendering
        this._setDraggable(bDraggable);
        return this;
    };

    sap.ushell.ui.launchpad.Tile.prototype.setVisible = function (bVisible) {
        this.setProperty("visible", bVisible, true); // suppress rerendering
        return this.toggleStyleClass("sapUshellHidden", !bVisible);
    };

    sap.ushell.ui.launchpad.Tile.prototype.setLong = function (bLong) {
        this.setProperty("long", bLong, true); // suppress rerendering
        return this.toggleStyleClass("sapUshellLong", bLong);
    };

    sap.ushell.ui.launchpad.Tile.prototype.setUuid = function (sUuid) {
        this.setProperty("uuid", sUuid, true); // suppress rerendering
        return this;
    };

    /**
     *@private
     */
    sap.ushell.ui.launchpad.Tile.prototype._setDraggable = function (bDraggable) {
        if (this.getDomRef()) {
            if (bDraggable) {
                this.$().draggable({
                    containment : "document",
                    handle : ".sapUshellTileInner",
                    helper : "clone",
                    appendTo: this.getDragContainer() || "body",
                    opacity : 0.5,
                    delay: 200,
                    zIndex: 100,
                    scroll: false
                }).bind("dragstart", jQuery.proxy(this._handleDragStart, this))
                  .bind("dragstop", jQuery.proxy(this._handleDragStop, this));
            } else {
                this.$().unbind("dragstart", this._handleDragStart)
                    .unbind("dragstop", this._handleDragStop)
                    .draggable("destroy");
            }
        }
    };

}());