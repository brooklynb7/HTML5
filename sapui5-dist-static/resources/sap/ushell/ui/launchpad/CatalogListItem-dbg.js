/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ushell.ui.launchpad.CatalogListItem.
jQuery.sap.declare("sap.ushell.ui.launchpad.CatalogListItem");
jQuery.sap.require("sap.ushell.library");
jQuery.sap.require("sap.m.ListItemBase");


/**
 * Constructor for a new ui/launchpad/CatalogListItem.
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
 * <li>{@link #getDescription description} : string</li>
 * <li>{@link #getInfo info} : string</li>
 * <li>{@link #getGroupId groupId} : string</li>
 * <li>{@link #getInfoState infoState} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getActiveIcon activeIcon} : sap.ui.core.URI</li>
 * <li>{@link #getIconInset iconInset} : boolean (default: true)</li>
 * <li>{@link #getIconDensityAware iconDensityAware} : boolean (default: true)</li>
 * <li>{@link #getHeaderLevel headerLevel} : sap.m.HeaderLevel (default: sap.m.HeaderLevel.H6)</li>
 * <li>{@link #getEditMode editMode} : boolean (default: false)</li>
 * <li>{@link #getAllowEditMode allowEditMode} : boolean (default: true)</li>
 * <li>{@link #getMarkChange markChange} : int (default: 0)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ushell.ui.launchpad.CatalogListItem#event:drop drop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ushell.ui.launchpad.CatalogListItem#event:afterRendering afterRendering} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ushell.ui.launchpad.CatalogListItem#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ushell.ui.launchpad.CatalogListItem#event:dblPress dblPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ushell.ui.launchpad.CatalogListItem#event:sapEnter sapEnter} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ushell.ui.launchpad.CatalogListItem#event:sapEscape sapEscape} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ushell.ui.launchpad.CatalogListItem#event:focusOut focusOut} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * The CatalogListItem is a list item providing image, titel and description.
 * @extends sap.m.ListItemBase
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem
 */
sap.m.ListItemBase.extend("sap.ushell.ui.launchpad.CatalogListItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ushell",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"description" : {type : "string", group : "Misc", defaultValue : null},
		"info" : {type : "string", group : "Misc", defaultValue : null},
		"groupId" : {type : "string", group : "Misc", defaultValue : null},
		"infoState" : {type : "sap.ui.core.ValueState", group : "Misc", defaultValue : sap.ui.core.ValueState.None},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"activeIcon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"iconInset" : {type : "boolean", group : "Misc", defaultValue : true},
		"iconDensityAware" : {type : "boolean", group : "Misc", defaultValue : true},
		"headerLevel" : {type : "sap.m.HeaderLevel", group : "Misc", defaultValue : sap.m.HeaderLevel.H6},
		"editMode" : {type : "boolean", group : "Misc", defaultValue : false},
		"allowEditMode" : {type : "boolean", group : "Misc", defaultValue : true},
		"markChange" : {type : "int", group : "Misc", defaultValue : 0}
	},
	events : {
		"drop" : {}, 
		"afterRendering" : {}, 
		"press" : {}, 
		"dblPress" : {}, 
		"sapEnter" : {}, 
		"sapEscape" : {}, 
		"focusOut" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ushell.ui.launchpad.CatalogListItem with name <code>sClassName</code> 
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
 * @name sap.ushell.ui.launchpad.CatalogListItem.extend
 * @function
 */

sap.ushell.ui.launchpad.CatalogListItem.M_EVENTS = {'drop':'drop','afterRendering':'afterRendering','press':'press','dblPress':'dblPress','sapEnter':'sapEnter','sapEscape':'sapEscape','focusOut':'focusOut'};


/**
 * Getter for property <code>title</code>.
 * ListItem title.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#setTitle
 * @function
 */


/**
 * Getter for property <code>description</code>.
 * Description.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>description</code>
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#getDescription
 * @function
 */

/**
 * Setter for property <code>description</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDescription  new value for property <code>description</code>
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#setDescription
 * @function
 */


/**
 * Getter for property <code>info</code>.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>info</code>
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#getInfo
 * @function
 */

/**
 * Setter for property <code>info</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sInfo  new value for property <code>info</code>
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#setInfo
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
 * @name sap.ushell.ui.launchpad.CatalogListItem#getGroupId
 * @function
 */

/**
 * Setter for property <code>groupId</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sGroupId  new value for property <code>groupId</code>
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#setGroupId
 * @function
 */


/**
 * Getter for property <code>infoState</code>.
 * 
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.ValueState} the value of property <code>infoState</code>
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#getInfoState
 * @function
 */

/**
 * Setter for property <code>infoState</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.ValueState} oInfoState  new value for property <code>infoState</code>
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#setInfoState
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
 * @name sap.ushell.ui.launchpad.CatalogListItem#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#setIcon
 * @function
 */


/**
 * Getter for property <code>activeIcon</code>.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>activeIcon</code>
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#getActiveIcon
 * @function
 */

/**
 * Setter for property <code>activeIcon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sActiveIcon  new value for property <code>activeIcon</code>
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#setActiveIcon
 * @function
 */


/**
 * Getter for property <code>iconInset</code>.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>iconInset</code>
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#getIconInset
 * @function
 */

/**
 * Setter for property <code>iconInset</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bIconInset  new value for property <code>iconInset</code>
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#setIconInset
 * @function
 */


/**
 * Getter for property <code>iconDensityAware</code>.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>iconDensityAware</code>
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#getIconDensityAware
 * @function
 */

/**
 * Setter for property <code>iconDensityAware</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bIconDensityAware  new value for property <code>iconDensityAware</code>
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#setIconDensityAware
 * @function
 */


/**
 * Getter for property <code>headerLevel</code>.
 * 
 *
 * Default value is <code>H6</code>
 *
 * @return {sap.m.HeaderLevel} the value of property <code>headerLevel</code>
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#getHeaderLevel
 * @function
 */

/**
 * Setter for property <code>headerLevel</code>.
 *
 * Default value is <code>H6</code> 
 *
 * @param {sap.m.HeaderLevel} oHeaderLevel  new value for property <code>headerLevel</code>
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#setHeaderLevel
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
 * @name sap.ushell.ui.launchpad.CatalogListItem#getEditMode
 * @function
 */

/**
 * Setter for property <code>editMode</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bEditMode  new value for property <code>editMode</code>
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#setEditMode
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
 * @name sap.ushell.ui.launchpad.CatalogListItem#getAllowEditMode
 * @function
 */

/**
 * Setter for property <code>allowEditMode</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bAllowEditMode  new value for property <code>allowEditMode</code>
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#setAllowEditMode
 * @function
 */


/**
 * Getter for property <code>markChange</code>.
 * Time in ms the item is marked when changed. Disabled if set to 0.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>markChange</code>
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#getMarkChange
 * @function
 */

/**
 * Setter for property <code>markChange</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iMarkChange  new value for property <code>markChange</code>
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#setMarkChange
 * @function
 */


/**
 * Event triggered if another sap.ui.core/Control is dropped on this element 
 *
 * @name sap.ushell.ui.launchpad.CatalogListItem#drop
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'drop' event of this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/> itself. 
 *  
 * Event triggered if another sap.ui.core/Control is dropped on this element 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#attachDrop
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'drop' event of this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#detachDrop
 * @function
 */

/**
 * Fire event drop to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.CatalogListItem#fireDrop
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.CatalogListItem#afterRendering
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterRendering' event of this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#attachAfterRendering
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'afterRendering' event of this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#detachAfterRendering
 * @function
 */

/**
 * Fire event afterRendering to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.CatalogListItem#fireAfterRendering
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.CatalogListItem#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.CatalogListItem#firePress
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.CatalogListItem#dblPress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'dblPress' event of this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#attachDblPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'dblPress' event of this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#detachDblPress
 * @function
 */

/**
 * Fire event dblPress to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.CatalogListItem#fireDblPress
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.CatalogListItem#sapEnter
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'sapEnter' event of this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#attachSapEnter
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'sapEnter' event of this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#detachSapEnter
 * @function
 */

/**
 * Fire event sapEnter to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.CatalogListItem#fireSapEnter
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.CatalogListItem#sapEscape
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'sapEscape' event of this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#attachSapEscape
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'sapEscape' event of this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#detachSapEscape
 * @function
 */

/**
 * Fire event sapEscape to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.CatalogListItem#fireSapEscape
 * @function
 */


/**
 *  
 *
 * @name sap.ushell.ui.launchpad.CatalogListItem#focusOut
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'focusOut' event of this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/> itself.
 *
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#attachFocusOut
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'focusOut' event of this <code>sap.ushell.ui.launchpad.CatalogListItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.CatalogListItem#detachFocusOut
 * @function
 */

/**
 * Fire event focusOut to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.CatalogListItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ushell.ui.launchpad.CatalogListItem#fireFocusOut
 * @function
 */


// Start of sap/ushell/ui/launchpad/CatalogListItem.js
// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * This file defines behavior for the control, sap.ushell.ui.launchpad.CatalogListItem
 */
jQuery.sap.require("sap.ui.core.EnabledPropagator");
jQuery.sap.require("sap.ui.core.IconPool");
jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-core');
jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-widget');
jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-mouse');
jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-droppable');

/**
 * @name sap.ushell.ui.launchpad.CatalogListItem
 * 
 * @private
 */
sap.ushell.ui.launchpad.CatalogListItem.prototype.init = function() {
    this.oEditInputField = new sap.m.Input();
    this.oEditInputField.setPlaceholder(sap.ushell.resources.i18n.getText("new_group_name"));
};

sap.ushell.ui.launchpad.CatalogListItem.prototype.getEditInputField = function() {
    return this.oEditInputField;
};

sap.ushell.ui.launchpad.CatalogListItem.prototype.onAfterRendering  = function() {
    this.$().droppable({
        hoverClass : "sapUshellCatalogLIHover",
        tolerance : "pointer",
    }).bind("drop", jQuery.proxy(this._handleDrop, this));
    this.fireAfterRendering();
};

sap.ushell.ui.launchpad.CatalogListItem.prototype.onBeforeRendering = function() {
    this.$().unbind("drop", this._handleDrop).droppable("destroy");
    this.oEditInputField.setValue( this.getTitle() );
};

sap.ushell.ui.launchpad.CatalogListItem.prototype.exit = function() {
    this.$().unbind("drop", this._handleDrop).droppable("destroy");

    if (this._image) {
        this._image.destroy();
    }

    sap.m.ListItemBase.prototype.exit.apply(this, arguments);
};

/**
 * @private
 */
sap.ushell.ui.launchpad.CatalogListItem.prototype._handleDrop = function(event, ui) {
    this.fireDrop({
        control : ui && ui.draggable && (ui.draggable.length > 0)
            && sap.ui.getCore().byId(ui.draggable[0].id) || undefined
    });
};

/**
 * @private
 */
sap.ushell.ui.launchpad.CatalogListItem.prototype._getImage = function(sImgId, sImgStyle, sSrc, bIconDensityAware) {
    var oImage = this._image;
    if(oImage)
    {
        oImage.setSrc(sSrc);
        if(oImage instanceof sap.m.Image)
            oImage.setDensityAware(bIconDensityAware);
    }
    else
    {
        oImage = sap.ui.core.IconPool.createControlByURI({
            id: sImgId,
      src : sSrc,
      densityAware : bIconDensityAware
    }, sap.m.Image).setParent(this, null, true);
    }

    if(oImage instanceof sap.m.Image){
        oImage.addStyleClass(sImgStyle, true);
    }
    else{
        oImage.addStyleClass(sImgStyle + "Icon", true);
    }

    return this._image = oImage;
};

// overwrite base method to hook into the active handling
sap.ushell.ui.launchpad.CatalogListItem.prototype._activeHandlingInheritor = function() {
    var img = sap.ui.getCore().byId(this.getId() + "-img");
    if(img instanceof sap.ui.core.Icon){
        img.$().toggleClass('sapMSLIIconActive', this._active);
        return;
    }

    if (img && this.getActiveIcon()) {
            img.setSrc(this.getActiveIcon());
    }
};

// overwrite base method to hook into the inactive handling
sap.ushell.ui.launchpad.CatalogListItem.prototype._inactiveHandlingInheritor = function() {
    var img = sap.ui.getCore().byId(this.getId() + "-img");
        if(img instanceof sap.ui.core.Icon){
        img.$().toggleClass('sapMSLIIconActive', this._active);
        return;
    }

    if (img) {
            img.setSrc(this.getIcon());
    }
};

sap.ushell.ui.launchpad.CatalogListItem.prototype.onclick = function(oBrowserEvent) {
    this.firePress({
        id : this.getId()
    });
};

sap.ushell.ui.launchpad.CatalogListItem.prototype.ondblclick = function(oBrowserEvent) {
    this.fireDblPress({
        id : this.getId()
    });
};

sap.ushell.ui.launchpad.CatalogListItem.prototype.onsapenter = function(oBrowserEvent) {
    this.fireSapEnter({
        id : this.getId()
    });
};

sap.ushell.ui.launchpad.CatalogListItem.prototype.onsapescape = function(oBrowserEvent) {
    this.fireSapEscape({
        id : this.getId()
    });
};

sap.ushell.ui.launchpad.CatalogListItem.prototype.onfocusout = function() {
    this.fireFocusOut();
};

// override setters
sap.ushell.ui.launchpad.CatalogListItem.prototype.setDescription = function(sDescription) {
    var jDesc = this.$().find('.sapUshellCatalogLIDescription');
    this.setProperty("description", sDescription, true);
    if (this.getMarkChange() && jDesc.text()) {
        this.addStyleClass("sapUshellCatalogLIRecentChange"); // add style class marking change 
        window.clearTimeout(this.markChangeTimer);            // clear existing timeout
        this.markChangeTimer = window.setTimeout(
                $.proxy(this.removeStyleClass, this, "sapUshellCatalogLIRecentChange"),
                this.getMarkChange());                        // remove style class after timeout 
    }
    jDesc.text(sDescription);
    return this;
};
