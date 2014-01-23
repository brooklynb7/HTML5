/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ushell.ui.launchpad.TileContainer.
jQuery.sap.declare("sap.ushell.ui.launchpad.TileContainer");
jQuery.sap.require("sap.ushell.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ui/launchpad/TileContainer.
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
 * <li>{@link #getScrollType scrollType} : string (default: 'item')</li>
 * <li>{@link #getAnimationSpeed animationSpeed} : int (default: 500)</li>
 * <li>{@link #getGroupId groupId} : string</li>
 * <li>{@link #getShowHeader showHeader} : boolean (default: true)</li>
 * <li>{@link #getShowPlaceholder showPlaceholder} : boolean (default: true)</li>
 * <li>{@link #getDefaultGroup defaultGroup} : boolean (default: false)</li>
 * <li>{@link #getHeaderText headerText} : string</li>
 * <li>{@link #getHeaderLevel headerLevel} : sap.m.HeaderLevel (default: sap.m.HeaderLevel.H2)</li>
 * <li>{@link #getGroupHeaderLevel groupHeaderLevel} : sap.m.HeaderLevel (default: sap.m.HeaderLevel.H4)</li>
 * <li>{@link #getShowGroupHeader showGroupHeader} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getSortable sortable} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTiles tiles} : sap.ushell.ui.launchpad.Tile[]</li>
 * <li>{@link #getFooterContent footerContent} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ushell.ui.launchpad.TileContainer#event:afterRendering afterRendering} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ushell.ui.launchpad.TileContainer#event:add add} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A container that arranges Tile controls.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer
 */
sap.ui.core.Control.extend("sap.ushell.ui.launchpad.TileContainer", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ushell",
	properties : {
		"scrollType" : {type : "string", group : "Misc", defaultValue : 'item'},
		"animationSpeed" : {type : "int", group : "Misc", defaultValue : 500},
		"groupId" : {type : "string", group : "Misc", defaultValue : null},
		"showHeader" : {type : "boolean", group : "Misc", defaultValue : true},
		"showPlaceholder" : {type : "boolean", group : "Misc", defaultValue : true},
		"defaultGroup" : {type : "boolean", group : "Misc", defaultValue : false},
		"headerText" : {type : "string", group : "Misc", defaultValue : null},
		"headerLevel" : {type : "sap.m.HeaderLevel", group : "Misc", defaultValue : sap.m.HeaderLevel.H2},
		"groupHeaderLevel" : {type : "sap.m.HeaderLevel", group : "Misc", defaultValue : sap.m.HeaderLevel.H4},
		"showGroupHeader" : {type : "boolean", group : "Misc", defaultValue : true},
		"visible" : {type : "boolean", group : "Misc", defaultValue : true},
		"sortable" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	aggregations : {
    	"tiles" : {type : "sap.ushell.ui.launchpad.Tile", multiple : true, singularName : "tile"}, 
    	"footerContent" : {type : "sap.ui.core.Control", multiple : true, singularName : "footerContent"}
	},
	events : {
		"afterRendering" : {}, 
		"add" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ushell.ui.launchpad.TileContainer with name <code>sClassName</code> 
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
 * @name sap.ushell.ui.launchpad.TileContainer.extend
 * @function
 */

sap.ushell.ui.launchpad.TileContainer.M_EVENTS = {'afterRendering':'afterRendering','add':'add'};


/**
 * Getter for property <code>scrollType</code>.
 * 
 *
 * Default value is <code>item</code>
 *
 * @return {string} the value of property <code>scrollType</code>
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#getScrollType
 * @function
 */

/**
 * Setter for property <code>scrollType</code>.
 *
 * Default value is <code>item</code> 
 *
 * @param {string} sScrollType  new value for property <code>scrollType</code>
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#setScrollType
 * @function
 */


/**
 * Getter for property <code>animationSpeed</code>.
 * Animation Speed in milliseconds (ms)
 *
 * Default value is <code>500</code>
 *
 * @return {int} the value of property <code>animationSpeed</code>
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#getAnimationSpeed
 * @function
 */

/**
 * Setter for property <code>animationSpeed</code>.
 *
 * Default value is <code>500</code> 
 *
 * @param {int} iAnimationSpeed  new value for property <code>animationSpeed</code>
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#setAnimationSpeed
 * @function
 */


/**
 * Getter for property <code>groupId</code>.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>groupId</code>
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#getGroupId
 * @function
 */

/**
 * Setter for property <code>groupId</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sGroupId  new value for property <code>groupId</code>
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#setGroupId
 * @function
 */


/**
 * Getter for property <code>showHeader</code>.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showHeader</code>
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#getShowHeader
 * @function
 */

/**
 * Setter for property <code>showHeader</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowHeader  new value for property <code>showHeader</code>
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#setShowHeader
 * @function
 */


/**
 * Getter for property <code>showPlaceholder</code>.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showPlaceholder</code>
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#getShowPlaceholder
 * @function
 */

/**
 * Setter for property <code>showPlaceholder</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowPlaceholder  new value for property <code>showPlaceholder</code>
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#setShowPlaceholder
 * @function
 */


/**
 * Getter for property <code>defaultGroup</code>.
 * 
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>defaultGroup</code>
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#getDefaultGroup
 * @function
 */

/**
 * Setter for property <code>defaultGroup</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bDefaultGroup  new value for property <code>defaultGroup</code>
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#setDefaultGroup
 * @function
 */


/**
 * Getter for property <code>headerText</code>.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>headerText</code>
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#getHeaderText
 * @function
 */

/**
 * Setter for property <code>headerText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sHeaderText  new value for property <code>headerText</code>
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#setHeaderText
 * @function
 */


/**
 * Getter for property <code>headerLevel</code>.
 * 
 *
 * Default value is <code>H2</code>
 *
 * @return {sap.m.HeaderLevel} the value of property <code>headerLevel</code>
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#getHeaderLevel
 * @function
 */

/**
 * Setter for property <code>headerLevel</code>.
 *
 * Default value is <code>H2</code> 
 *
 * @param {sap.m.HeaderLevel} oHeaderLevel  new value for property <code>headerLevel</code>
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#setHeaderLevel
 * @function
 */


/**
 * Getter for property <code>groupHeaderLevel</code>.
 * Header level (H1-H6) used for headers of tile groups.
 *
 * Default value is <code>H4</code>
 *
 * @return {sap.m.HeaderLevel} the value of property <code>groupHeaderLevel</code>
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#getGroupHeaderLevel
 * @function
 */

/**
 * Setter for property <code>groupHeaderLevel</code>.
 *
 * Default value is <code>H4</code> 
 *
 * @param {sap.m.HeaderLevel} oGroupHeaderLevel  new value for property <code>groupHeaderLevel</code>
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#setGroupHeaderLevel
 * @function
 */


/**
 * Getter for property <code>showGroupHeader</code>.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showGroupHeader</code>
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#getShowGroupHeader
 * @function
 */

/**
 * Setter for property <code>showGroupHeader</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowGroupHeader  new value for property <code>showGroupHeader</code>
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#setShowGroupHeader
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
 * @name sap.ushell.ui.launchpad.TileContainer#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#setVisible
 * @function
 */


/**
 * Getter for property <code>sortable</code>.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>sortable</code>
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#getSortable
 * @function
 */

/**
 * Setter for property <code>sortable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bSortable  new value for property <code>sortable</code>
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#setSortable
 * @function
 */


/**
 * Getter for aggregation <code>tiles</code>.<br/>
 * 
 * 
 * @return {sap.ushell.ui.launchpad.Tile[]}
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#getTiles
 * @function
 */


/**
 * Inserts a tile into the aggregation named <code>tiles</code>.
 *
 * @param {sap.ushell.ui.launchpad.Tile}
 *          oTile the tile to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the tile should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the tile is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the tile is inserted at 
 *             the last position        
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#insertTile
 * @function
 */

/**
 * Adds some tile <code>oTile</code> 
 * to the aggregation named <code>tiles</code>.
 *
 * @param {sap.ushell.ui.launchpad.Tile}
 *            oTile the tile to add; if empty, nothing is inserted
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#addTile
 * @function
 */

/**
 * Removes an tile from the aggregation named <code>tiles</code>.
 *
 * @param {int | string | sap.ushell.ui.launchpad.Tile} vTile the tile to remove or its index or id
 * @return {sap.ushell.ui.launchpad.Tile} the removed tile or null
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#removeTile
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>tiles</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ushell.ui.launchpad.Tile[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#removeAllTiles
 * @function
 */

/**
 * Checks for the provided <code>sap.ushell.ui.launchpad.Tile</code> in the aggregation named <code>tiles</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ushell.ui.launchpad.Tile}
 *            oTile the tile whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#indexOfTile
 * @function
 */
	

/**
 * Destroys all the tiles in the aggregation 
 * named <code>tiles</code>.
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#destroyTiles
 * @function
 */


/**
 * Getter for aggregation <code>footerContent</code>.<br/>
 * 
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#getFooterContent
 * @function
 */


/**
 * Inserts a footerContent into the aggregation named <code>footerContent</code>.
 *
 * @param {sap.ui.core.Control}
 *          oFooterContent the footerContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the footerContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the footerContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the footerContent is inserted at 
 *             the last position        
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#insertFooterContent
 * @function
 */

/**
 * Adds some footerContent <code>oFooterContent</code> 
 * to the aggregation named <code>footerContent</code>.
 *
 * @param {sap.ui.core.Control}
 *            oFooterContent the footerContent to add; if empty, nothing is inserted
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#addFooterContent
 * @function
 */

/**
 * Removes an footerContent from the aggregation named <code>footerContent</code>.
 *
 * @param {int | string | sap.ui.core.Control} vFooterContent the footerContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed footerContent or null
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#removeFooterContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>footerContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#removeAllFooterContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>footerContent</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oFooterContent the footerContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#indexOfFooterContent
 * @function
 */
	

/**
 * Destroys all the footerContent in the aggregation 
 * named <code>footerContent</code>.
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#destroyFooterContent
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.TileContainer#afterRendering
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterRendering' event of this <code>sap.ushell.ui.launchpad.TileContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.TileContainer</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.TileContainer</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#attachAfterRendering
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'afterRendering' event of this <code>sap.ushell.ui.launchpad.TileContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#detachAfterRendering
 * @function
 */

/**
 * Fire event afterRendering to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.TileContainer#fireAfterRendering
 * @function
 */


/**
 * Event fired when placeholder is clicked 
 *
 * @name sap.ushell.ui.launchpad.TileContainer#add
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'add' event of this <code>sap.ushell.ui.launchpad.TileContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.TileContainer</code>.<br/> itself. 
 *  
 * Event fired when placeholder is clicked 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.TileContainer</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#attachAdd
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'add' event of this <code>sap.ushell.ui.launchpad.TileContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.TileContainer#detachAdd
 * @function
 */

/**
 * Fire event add to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.TileContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.TileContainer#fireAdd
 * @function
 */


// Start of sap/ushell/ui/launchpad/TileContainer.js
// Copyright (c) 2013 SAP AG, All Rights Reserved
/*global jQuery, sap*/
/**
 * @name sap.ushell.ui.launchpad.TileContainer
 *
 * @private
 */

(function () {
    "use strict";
    jQuery.sap.require("sap.ushell.override");

    sap.ushell.ui.launchpad.TileContainer.prototype.init = function () {
        jQuery.sap.require("sap.ushell.ui.launchpad.PlusTile");

        this.oPlusTile = new sap.ushell.ui.launchpad.PlusTile({
            groupId : this.getGroupId(),
            press : [ this.fireAdd, this ]
        });
        this.oPlusTile.setParent(this);
    };

    sap.ushell.ui.launchpad.TileContainer.prototype.exit = function () {
        if (this.oPlusTile) {
            this.oPlusTile.destroy();
        }
    };

    sap.ushell.ui.launchpad.TileContainer.prototype.onAfterRendering = function () {
        this.fireAfterRendering();
    };

    // Improve handling of aggregation updates
    sap.ushell.ui.launchpad.TileContainer.prototype.updateAggregation = sap.ushell.override.updateAggregation;
    sap.ushell.ui.launchpad.TileContainer.prototype.updateTiles = function (sReason) {
        var sName = "tiles";
        if (this.isTreeBinding(sName)) {
            // no idea how to handle -> delegate to parent 
            sap.ui.base.ManagedObject.prototype.updateAggregation.apply(this, arguments);
        } else {
            jQuery.sap.log.debug("Updating TileContainer. Reason: ", sReason);
            switch (sReason) {
            case "filter":
                try {
                    this.filterTiles(); // may fail if filter broadens after non-filter update
                } catch (ex) {
                    this.updateAggregation(sName);
                }
                break;
            default:
                this.updateAggregation(sName);
            }
        }
    };

    sap.ushell.ui.launchpad.TileContainer.prototype.filterTiles = function () {
        var sName = "tiles",
            oBinding = this.mBindingInfos[sName].binding,
            oAggregationInfo = this.getMetadata().getJSONKeys()[sName],
            oNewGroup = null,
            bGrouped = oBinding.isGrouped(),
            bShowGroupHeader = this.getShowGroupHeader(),
            sGroup = null,
            iListIndex = -1,
            aItems = this[oAggregationInfo._sGetter](),
            nItems = aItems.length,
            oItem = null,
            that = this;

        // loop over all non-filtered objects
        jQuery.each(oBinding.getContexts(), function (iIndex, oContext) {
            var oNewGroup, sNewGroup;
            if (bGrouped && oBinding.aSorters.length > 0) {
                oNewGroup = oBinding.aSorters[0].fnGroup(oContext);
                sNewGroup = (typeof oNewGroup === "string") && oNewGroup || oNewGroup.key || "";
                // check if entering a new group
                if (sNewGroup !== sGroup) {
                    // hide all non-header tiles and non-matching header tiles up to matching header tile
                    for (oItem = aItems[++iListIndex];
                            oItem && (!oItem.getHeaderText || oItem.getHeaderText() !== sNewGroup) && iListIndex < nItems;
                            oItem = aItems[++iListIndex]) {
                        oItem.setVisible(false);
                    }
                    oItem.setVisible(bShowGroupHeader);
                }
                sGroup = sNewGroup;
            }

            // hide non-matching tiles up to matching tile
            for (oItem = aItems[++iListIndex];
                    oItem && oItem.getBindingContext().getPath() !== oContext.getPath() && iListIndex < nItems;
                    oItem = aItems[++iListIndex]) {
                oItem.setVisible(false);
            }
            oItem.setVisible(true);
        });

        // hide all remaining tiles
        for (oItem = aItems[++iListIndex]; oItem && iListIndex < nItems; oItem = aItems[++iListIndex]) {
            oItem.setVisible(false);
        }
    };

    sap.ushell.ui.launchpad.TileContainer.prototype.addTileGroup = function (oGroup, oHeader) {
        this.addAggregation("tiles", oHeader || new sap.ushell.ui.launchpad.HeaderTile({
            headerText: oGroup.text || oGroup.key,
            headerLevel : oGroup.headerLevel || this.getGroupHeaderLevel(),
            visible : this.getShowGroupHeader()
        }).addStyleClass("sapUshellTileContainerHdr"));
    };

    // Override setters
    sap.ushell.ui.launchpad.TileContainer.prototype.setGroupId = function (v) {
        this.setProperty("groupId", v, true);        // set property, but suppress rerendering
        if (this.oPlusTile) {
            this.oPlusTile.setGroupId(v);
        }
        return this;
    };

    sap.ushell.ui.launchpad.TileContainer.prototype.setHeaderText = function (sHeaderText) {
        this.setProperty("headerText", sHeaderText, true);        // set property, but suppress rerendering
        this.$().find(".sapUshellContainerTitle").text(sHeaderText);
        return this;
    };

    sap.ushell.ui.launchpad.TileContainer.prototype.setSortable = function (bSortable) {
        if(bSortable) {
            this.$().find(".ui-sortable").sortable('enable');
        } else {
            this.$().find(".ui-sortable").sortable('disable');
        }
        return this;
    };
}());
