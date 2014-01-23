/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ushell.ui.tile.TileBase.
jQuery.sap.declare("sap.ushell.ui.tile.TileBase");
jQuery.sap.require("sap.ushell.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ui/tile/TileBase.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getSubtitle subtitle} : string</li>
 * <li>{@link #getIcon icon} : string</li>
 * <li>{@link #getInfo info} : string</li>
 * <li>{@link #getInfoState infoState} : sap.ushell.ui.tile.State (default: sap.ushell.ui.tile.State.Neutral)</li>
 * <li>{@link #getTargetURL targetURL} : string</li>
 * <li>{@link #getHighlightTerms highlightTerms} : any (default: [])</li></ul>
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
 * <li>{@link sap.ushell.ui.tile.TileBase#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Base class for tiles that already provides several visual elements like title, subtitle, icon and additional information
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ushell.ui.tile.TileBase
 */
sap.ui.core.Control.extend("sap.ushell.ui.tile.TileBase", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ushell",
	properties : {
		"title" : {type : "string", group : "Data", defaultValue : null},
		"subtitle" : {type : "string", group : "Data", defaultValue : null},
		"icon" : {type : "string", group : "Data", defaultValue : null},
		"info" : {type : "string", group : "Data", defaultValue : null},
		"infoState" : {type : "sap.ushell.ui.tile.State", group : "", defaultValue : sap.ushell.ui.tile.State.Neutral},
		"targetURL" : {type : "string", group : "Behavior", defaultValue : null},
		"highlightTerms" : {type : "any", group : "Appearance", defaultValue : []}
	},
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ushell.ui.tile.TileBase with name <code>sClassName</code> 
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
 * @name sap.ushell.ui.tile.TileBase.extend
 * @function
 */

sap.ushell.ui.tile.TileBase.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>title</code>.
 * The title of this tile
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.ushell.ui.tile.TileBase#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ushell.ui.tile.TileBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.tile.TileBase#setTitle
 * @function
 */


/**
 * Getter for property <code>subtitle</code>.
 * A subtitle of this tile (optional)
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>subtitle</code>
 * @public
 * @name sap.ushell.ui.tile.TileBase#getSubtitle
 * @function
 */

/**
 * Setter for property <code>subtitle</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSubtitle  new value for property <code>subtitle</code>
 * @return {sap.ushell.ui.tile.TileBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.tile.TileBase#setSubtitle
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * An icon for the tile
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>icon</code>
 * @public
 * @name sap.ushell.ui.tile.TileBase#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.ushell.ui.tile.TileBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.tile.TileBase#setIcon
 * @function
 */


/**
 * Getter for property <code>info</code>.
 * Additional information displayed at the bottom of the tile
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>info</code>
 * @public
 * @name sap.ushell.ui.tile.TileBase#getInfo
 * @function
 */

/**
 * Setter for property <code>info</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sInfo  new value for property <code>info</code>
 * @return {sap.ushell.ui.tile.TileBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.tile.TileBase#setInfo
 * @function
 */


/**
 * Getter for property <code>infoState</code>.
 * The state of the info field
 *
 * Default value is <code>Neutral</code>
 *
 * @return {sap.ushell.ui.tile.State} the value of property <code>infoState</code>
 * @public
 * @name sap.ushell.ui.tile.TileBase#getInfoState
 * @function
 */

/**
 * Setter for property <code>infoState</code>.
 *
 * Default value is <code>Neutral</code> 
 *
 * @param {sap.ushell.ui.tile.State} oInfoState  new value for property <code>infoState</code>
 * @return {sap.ushell.ui.tile.TileBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.tile.TileBase#setInfoState
 * @function
 */


/**
 * Getter for property <code>targetURL</code>.
 * If given, the Control is wrapped into a link pointing to this URL. If empty or not set, the link is not rendered
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>targetURL</code>
 * @public
 * @name sap.ushell.ui.tile.TileBase#getTargetURL
 * @function
 */

/**
 * Setter for property <code>targetURL</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTargetURL  new value for property <code>targetURL</code>
 * @return {sap.ushell.ui.tile.TileBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.tile.TileBase#setTargetURL
 * @function
 */


/**
 * Getter for property <code>highlightTerms</code>.
 * contains an array of terms that should be highlighted; per default, the array is empty
 *
 * Default value is <code>[]</code>
 *
 * @return {any} the value of property <code>highlightTerms</code>
 * @public
 * @name sap.ushell.ui.tile.TileBase#getHighlightTerms
 * @function
 */

/**
 * Setter for property <code>highlightTerms</code>.
 *
 * Default value is <code>[]</code> 
 *
 * @param {any} oHighlightTerms  new value for property <code>highlightTerms</code>
 * @return {sap.ushell.ui.tile.TileBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.tile.TileBase#setHighlightTerms
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * 
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ushell.ui.tile.TileBase#getContent
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
 * @return {sap.ushell.ui.tile.TileBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.tile.TileBase#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ushell.ui.tile.TileBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.tile.TileBase#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ushell.ui.tile.TileBase#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ushell.ui.tile.TileBase#removeAllContent
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
 * @name sap.ushell.ui.tile.TileBase#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ushell.ui.tile.TileBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.tile.TileBase#destroyContent
 * @function
 */


/**
 * called when the tile is clicked / pressed 
 *
 * @name sap.ushell.ui.tile.TileBase#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ushell.ui.tile.TileBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.tile.TileBase</code>.<br/> itself. 
 *  
 * called when the tile is clicked / pressed 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.tile.TileBase</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.tile.TileBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.tile.TileBase#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ushell.ui.tile.TileBase</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.tile.TileBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.tile.TileBase#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.tile.TileBase} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.tile.TileBase#firePress
 * @function
 */


// Start of sap/ushell/ui/tile/TileBase.js
// Copyright (c) 2013 SAP AG, All Rights Reserved
/*global jQuery, sap*/

/**
 * Base class for applaunchers that provides basic properties like title,
 * subtitle, icon and additional information.
 * 
 * @name sap.ushell.ui.tile.TileBase
 * 
 * @since   1.15.0
 * @private
 */

(function () {
    "use strict";

    sap.ushell.ui.tile.TileBase.prototype.ontap = function () {
        this.firePress({});
    };
}());
