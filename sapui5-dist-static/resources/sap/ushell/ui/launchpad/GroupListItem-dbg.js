/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ushell.ui.launchpad.GroupListItem.
jQuery.sap.declare("sap.ushell.ui.launchpad.GroupListItem");
jQuery.sap.require("sap.ushell.library");
jQuery.sap.require("sap.m.ListItemBase");


/**
 * Constructor for a new ui/launchpad/GroupListItem.
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
 * <li>{@link #getDefaultGroup defaultGroup} : boolean (default: false)</li>
 * <li>{@link #getShow show} : boolean (default: true)</li>
 * <li>{@link #getEditMode editMode} : boolean (default: false)</li>
 * <li>{@link #getGroupId groupId} : string</li>
 * <li>{@link #getIndex index} : int</li>
 * <li>{@link #getAllowEditMode allowEditMode} : boolean (default: true)</li>
 * <li>{@link #getRemovable removable} : boolean</li>
 * <li>{@link #getNumberOfTiles numberOfTiles} : int (default: 0)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ushell.ui.launchpad.GroupListItem#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ushell.ui.launchpad.GroupListItem#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ushell.ui.launchpad.GroupListItem#event:drop drop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ushell.ui.launchpad.GroupListItem#event:over over} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ushell.ui.launchpad.GroupListItem#event:afterRendering afterRendering} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ushell.ui.launchpad.GroupListItem#event:out out} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * Add your documentation for the newui/launchpad/GroupListItem
 * @extends sap.m.ListItemBase
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem
 */
sap.m.ListItemBase.extend("sap.ushell.ui.launchpad.GroupListItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ushell",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"defaultGroup" : {type : "boolean", group : "Misc", defaultValue : false},
		"show" : {type : "boolean", group : "Misc", defaultValue : true},
		"editMode" : {type : "boolean", group : "Misc", defaultValue : false},
		"groupId" : {type : "string", group : "Misc", defaultValue : null},
		"index" : {type : "int", group : "Misc", defaultValue : null},
		"allowEditMode" : {type : "boolean", group : "Misc", defaultValue : true},
		"removable" : {type : "boolean", group : "Misc", defaultValue : null},
		"numberOfTiles" : {type : "int", group : "Misc", defaultValue : 0}
	},
	events : {
		"press" : {}, 
		"change" : {}, 
		"drop" : {}, 
		"over" : {}, 
		"afterRendering" : {}, 
		"out" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ushell.ui.launchpad.GroupListItem with name <code>sClassName</code> 
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
 * @name sap.ushell.ui.launchpad.GroupListItem.extend
 * @function
 */

sap.ushell.ui.launchpad.GroupListItem.M_EVENTS = {'press':'press','change':'change','drop':'drop','over':'over','afterRendering':'afterRendering','out':'out'};


/**
 * Getter for property <code>title</code>.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#setTitle
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
 * @name sap.ushell.ui.launchpad.GroupListItem#getDefaultGroup
 * @function
 */

/**
 * Setter for property <code>defaultGroup</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bDefaultGroup  new value for property <code>defaultGroup</code>
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#setDefaultGroup
 * @function
 */


/**
 * Getter for property <code>show</code>.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>show</code>
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#getShow
 * @function
 */

/**
 * Setter for property <code>show</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShow  new value for property <code>show</code>
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#setShow
 * @function
 */


/**
 * Getter for property <code>editMode</code>.
 * 
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>editMode</code>
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#getEditMode
 * @function
 */

/**
 * Setter for property <code>editMode</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bEditMode  new value for property <code>editMode</code>
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#setEditMode
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
 * @name sap.ushell.ui.launchpad.GroupListItem#getGroupId
 * @function
 */

/**
 * Setter for property <code>groupId</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sGroupId  new value for property <code>groupId</code>
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#setGroupId
 * @function
 */


/**
 * Getter for property <code>index</code>.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>index</code>
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#getIndex
 * @function
 */

/**
 * Setter for property <code>index</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iIndex  new value for property <code>index</code>
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#setIndex
 * @function
 */


/**
 * Getter for property <code>allowEditMode</code>.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>allowEditMode</code>
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#getAllowEditMode
 * @function
 */

/**
 * Setter for property <code>allowEditMode</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bAllowEditMode  new value for property <code>allowEditMode</code>
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#setAllowEditMode
 * @function
 */


/**
 * Getter for property <code>removable</code>.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>removable</code>
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#getRemovable
 * @function
 */

/**
 * Setter for property <code>removable</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bRemovable  new value for property <code>removable</code>
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#setRemovable
 * @function
 */


/**
 * Getter for property <code>numberOfTiles</code>.
 * 
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>numberOfTiles</code>
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#getNumberOfTiles
 * @function
 */

/**
 * Setter for property <code>numberOfTiles</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iNumberOfTiles  new value for property <code>numberOfTiles</code>
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#setNumberOfTiles
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.GroupListItem#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.GroupListItem#firePress
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.GroupListItem#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#attachChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#detachChange
 * @function
 */

/**
 * Fire event change to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.GroupListItem#fireChange
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.GroupListItem#drop
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'drop' event of this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#attachDrop
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'drop' event of this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#detachDrop
 * @function
 */

/**
 * Fire event drop to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.GroupListItem#fireDrop
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.GroupListItem#over
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'over' event of this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#attachOver
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'over' event of this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#detachOver
 * @function
 */

/**
 * Fire event over to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.GroupListItem#fireOver
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.GroupListItem#afterRendering
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterRendering' event of this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#attachAfterRendering
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'afterRendering' event of this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#detachAfterRendering
 * @function
 */

/**
 * Fire event afterRendering to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.GroupListItem#fireAfterRendering
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.GroupListItem#out
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'out' event of this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#attachOut
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'out' event of this <code>sap.ushell.ui.launchpad.GroupListItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.GroupListItem#detachOut
 * @function
 */

/**
 * Fire event out to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.GroupListItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.GroupListItem#fireOut
 * @function
 */


// Start of sap/ushell/ui/launchpad/GroupListItem.js
// Copyright (c) 2013 SAP AG, All Rights Reserved
/*global jQuery, sap*/
/**
 * @name sap.ushell.ui.launchpad.GroupListItem
 *
 * @private
 */
(function () {
    "use strict";

    jQuery.sap.require("sap.m.Input");
    jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-core');
    jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-widget');
    jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-mouse');
    jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-droppable');

    sap.ushell.ui.launchpad.GroupListItem.prototype.init = function () {
        this._sDefaultValue = sap.ushell.resources.i18n.getText("new_group_name");
        this._sOldTitle = "";

        this.oEditInputField = new sap.m.Input({
            //placeholder : "{i18n>new_group_name}", // Does not work? i18n is not in the model...
            placeholder : this._sDefaultValue,
            value : this.getTitle()
        });

        this.oEditInputField.onfocusout = jQuery.proxy(this._stopEdit, this);
    };

    sap.ushell.ui.launchpad.GroupListItem.prototype.exit = function () {
        this.$().unbind("drop", this._handleDrop)
            .unbind("dropover", this._handleDropOver)
            .droppable("destroy");
        this.oEditInputField.destroy();
        sap.m.ListItemBase.prototype.exit.apply(this, arguments);
    };

    sap.ushell.ui.launchpad.GroupListItem.prototype.onBeforeRendering = function() {
        this.$().unbind("drop", this._handleDrop)
            .unbind("dropover", this._handleDropOver)
            .droppable("destroy");
    };

    sap.ushell.ui.launchpad.GroupListItem.prototype.onAfterRendering = function () {
        var jqThis = jQuery.sap.byId(this.sId),
            bHideItem = !this.getShow() || (this.getDefaultGroup() && this.getNumberOfTiles() === 0);

        if (this.getEditMode()) {
            this.focus();
            //fix for android devices which not accept the focus correctly
            jQuery.sap.byId(this.oEditInputField.sId).click();
        }

        //Make this groupListItem droppable
        this.$().droppable({
            greedy: true,
            tolerance: "pointer",
            accept: ".sapUshellTile",
            over: jQuery.proxy(this._handleOver, this),
            out: jQuery.proxy(this._handleOut, this),
            drop: jQuery.proxy(this._handleDrop, this)
        });

        if (!bHideItem) {
            jqThis.css("display", "flex");
        } else {
            jqThis.css("display", "none");
        }

        this.fireAfterRendering();
    };

    // focus handling
    sap.ushell.ui.launchpad.GroupListItem.prototype.getFocusDomRef = function () {
        // delegate to input field if in edit mode, otherwise revert to default
        return (this.getEditMode() && this.oEditInputField && this.oEditInputField.getFocusDomRef()) || this.getDomRef();
    };

    // SAPUI5 events
    sap.ushell.ui.launchpad.GroupListItem.prototype._startEdit = function () {
        if (this.getAllowEditMode()) {
            this._sOldTitle = this.oEditInputField.getValue();
            this.setEditMode(true);
            this.focus(); // grab focus -> will be delegated to input field
        }
    };

    sap.ushell.ui.launchpad.GroupListItem.prototype._stopEdit = function () {
        // This event may be called twice, first by sapenter/sapescape, then by the triggered focusout.
        // Make sure we send changes only once.
        if(!this.getEditMode()) {
            return;
        }

        // Check if we need to update the title.
        // Note: sapescape is send to the input first, which has already reset
        //  its content when this is called. Therefore:
        //  this._sOldTitle == sCurrentTitle and no change is necessary.
        var sCurrentTitle = this.oEditInputField.getValue().trim(),
            sNewTitle = sCurrentTitle || this._sDefaultValue,
            bHasChanged = sNewTitle !== this._sOldTitle;

        if(bHasChanged) {
            this.setTitle(sNewTitle).fireChange({
                newTitle: sNewTitle
            });
        }
        this.setEditMode(false);

        // Workaround for IE9 (blurring <body> or <span> switches the application (e.g. from ie9 to notepad or outlook))
        // See http://tjvantoll.com/2013/08/30/bugs-with-document-activeelement-in-internet-explorer/
        var activeElement = document.activeElement;
        if ( activeElement.nodeName.toLowerCase() !== "body" && activeElement.nodeName.toLowerCase() !== "span") {
            // "Blur" triggers the _stopEdit event to be fired again. Workaround: Make sure
            // to call this only after the EditMode has been set to false to allow a quick
            // exit in the beginning.
            activeElement.blur();
        }

        //Call the resize handler
        var jqOuterGroupList = jQuery("#groupList");
        jqOuterGroupList.trigger("resize", [jqOuterGroupList.width(), jqOuterGroupList.height()]);
    };

    // jQuery events
    sap.ushell.ui.launchpad.GroupListItem.prototype._handleOver = function (event, ui) {
        //Sometimes, the jQuery hoverClass does not work properly for some reason
        //Better take care of that explicitly:
        jQuery("#" + this.sId).addClass("sapUshellDrop");
        this.fireOver({
            control : (ui && ui.draggable && (ui.draggable.length > 0)
                && sap.ui.getCore().byId(ui.draggable[0].id)) || undefined
        });
    };
    sap.ushell.ui.launchpad.GroupListItem.prototype._handleOut = function (event, ui) {
        //Sometimes, the jQuery hoverClass does not work properly for some reason
        //Better take care of that explicitly:
        jQuery("#" + this.sId).removeClass("sapUshellDrop");
        this.fireOut({
            control : (ui && ui.draggable && (ui.draggable.length > 0)
                && sap.ui.getCore().byId(ui.draggable[0].id)) || undefined
        });
    };
    sap.ushell.ui.launchpad.GroupListItem.prototype._handleDrop = function (event, ui) {
        this.fireDrop({
            control : (ui && ui.draggable && (ui.draggable.length > 0)
                && sap.ui.getCore().byId(ui.draggable[0].id)) || undefined
        });
    };

    // browser events
    // use onmousedown instead of onclick because a click will not end the edit mode if the user starts immediately dragging another tile
    sap.ushell.ui.launchpad.GroupListItem.prototype.onclick = function (oEvent) {
        this.firePress({
            id : this.getId()
        });
        //Close the grouplist after selection if on phone
        if(jQuery.device.is.phone) {
            sap.ui.getCore().byId("shell").setShowPane(false);
        }
    };
    sap.ushell.ui.launchpad.GroupListItem.prototype.onmousedown = function () {
        this.focus(); // grab focus

    };

    sap.ushell.ui.launchpad.GroupListItem.prototype.ondblclick = function () {
        if(!jQuery.device.is.phone) {
            this._startEdit();
        }
    };

    sap.ushell.ui.launchpad.GroupListItem.prototype.onsapenter = function () {
        if(!jQuery.device.is.phone) {
            this._stopEdit();
        }
    };

    sap.ushell.ui.launchpad.GroupListItem.prototype.onsapescape = function () {
        if(!jQuery.device.is.phone) {
            this._stopEdit();
        }
    };

    // override setters
    sap.ushell.ui.launchpad.GroupListItem.prototype.setEditMode = function (bMode) {
        this.setProperty("editMode", bMode, true); // suppress rerendering

        //Close the grouplist after selection if on phone
        if(jQuery.device.is.phone && (bMode === false)) {
            sap.ui.getCore().byId("shell").setShowPane(false);
        }

        //Call the resize handler (some delay so IE9 can catch up)
        setTimeout(function () {
            var jqOuterGroupList = jQuery("#groupList");
            jqOuterGroupList.trigger("resize", [jqOuterGroupList.width(), jqOuterGroupList.height()]);
        }, 5);

        return this.toggleStyleClass("sapUshellEditing", bMode);
    };

    sap.ushell.ui.launchpad.GroupListItem.prototype.setAllowEditMode = function (bAllowEditMode) {
        this.setProperty("allowEditMode", bAllowEditMode, true); // suppress rerendering
        return this;
    };

    sap.ushell.ui.launchpad.GroupListItem.prototype.setRemovable = function (bRemovable) {
        this.setProperty("removable", bRemovable, true); // suppress rerendering
        return this;
    };

    sap.ushell.ui.launchpad.GroupListItem.prototype.setGroupId = function (sGroupId) {
        this.setProperty("groupId", sGroupId, true); // suppress rerendering
        return this;
    };

    sap.ushell.ui.launchpad.GroupListItem.prototype.setTitle = function (sTitle) {
        this.setProperty("title", sTitle, true); // suppress rerendering
        this.oEditInputField.setValue(sTitle);
        this.$().find(".sapMSLITitleOnly").text(sTitle);
        return this;
    };
}());
