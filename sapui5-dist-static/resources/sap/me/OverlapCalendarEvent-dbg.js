/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.me.OverlapCalendarEvent.
jQuery.sap.declare("sap.me.OverlapCalendarEvent");
jQuery.sap.require("sap.me.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new OverlapCalendarEvent.
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
 * <li>{@link #getStartDay startDay} : string</li>
 * <li>{@link #getEndDay endDay} : string</li>
 * <li>{@link #getRelevant relevant} : boolean</li>
 * <li>{@link #getType type} : string</li>
 * <li>{@link #getTypeName typeName} : string</li>
 * <li>{@link #getHalfDay halfDay} : boolean (default: false)</li>
 * <li>{@link #getRow row} : int (default: -1)</li>
 * <li>{@link #getName name} : string</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Represent the data of an event for the overlap calendar
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @experimental Since version 1.12. 
 * API is not yet finished and might change completely
 * @name sap.me.OverlapCalendarEvent
 */
sap.ui.core.Element.extend("sap.me.OverlapCalendarEvent", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.me",
	properties : {
		"startDay" : {type : "string", group : "Data", defaultValue : null, bindable : "bindable"},
		"endDay" : {type : "string", group : "Data", defaultValue : null, bindable : "bindable"},
		"relevant" : {type : "boolean", group : "Misc", defaultValue : null, bindable : "bindable"},
		"type" : {type : "string", group : "Data", defaultValue : null, bindable : "bindable"},
		"typeName" : {type : "string", group : "Appearance", defaultValue : null, bindable : "bindable"},
		"halfDay" : {type : "boolean", group : "Data", defaultValue : false, bindable : "bindable"},
		"row" : {type : "int", group : "Data", defaultValue : -1, bindable : "bindable"},
		"name" : {type : "string", group : "Misc", defaultValue : null, bindable : "bindable"}
	}
}});


/**
 * Creates a new subclass of class sap.me.OverlapCalendarEvent with name <code>sClassName</code> 
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
 * @name sap.me.OverlapCalendarEvent.extend
 * @function
 */


/**
 * Getter for property <code>startDay</code>.
 * The first day of the event
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>startDay</code>
 * @public
 * @name sap.me.OverlapCalendarEvent#getStartDay
 * @function
 */

/**
 * Setter for property <code>startDay</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sStartDay  new value for property <code>startDay</code>
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#setStartDay
 * @function
 */


/**
 * Binder for property <code>startDay</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#bindStartDay
 * @function
 */

/**
 * Unbinder for property <code>startDay</code>.
 *
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#unbindStartDay
 * @function
 */


/**
 * Getter for property <code>endDay</code>.
 * Last day of the event
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>endDay</code>
 * @public
 * @name sap.me.OverlapCalendarEvent#getEndDay
 * @function
 */

/**
 * Setter for property <code>endDay</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sEndDay  new value for property <code>endDay</code>
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#setEndDay
 * @function
 */


/**
 * Binder for property <code>endDay</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#bindEndDay
 * @function
 */

/**
 * Unbinder for property <code>endDay</code>.
 *
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#unbindEndDay
 * @function
 */


/**
 * Getter for property <code>relevant</code>.
 * Indicates if this elements is relevant to be consider in the overlap
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>relevant</code>
 * @public
 * @name sap.me.OverlapCalendarEvent#getRelevant
 * @function
 */

/**
 * Setter for property <code>relevant</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bRelevant  new value for property <code>relevant</code>
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#setRelevant
 * @function
 */


/**
 * Binder for property <code>relevant</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#bindRelevant
 * @function
 */

/**
 * Unbinder for property <code>relevant</code>.
 *
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#unbindRelevant
 * @function
 */


/**
 * Getter for property <code>type</code>.
 * Type of the event. Display in the second label (no overlap)
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>type</code>
 * @public
 * @name sap.me.OverlapCalendarEvent#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sType  new value for property <code>type</code>
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#setType
 * @function
 */


/**
 * Binder for property <code>type</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#bindType
 * @function
 */

/**
 * Unbinder for property <code>type</code>.
 *
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#unbindType
 * @function
 */


/**
 * Getter for property <code>typeName</code>.
 * The CSS class to use
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>typeName</code>
 * @public
 * @name sap.me.OverlapCalendarEvent#getTypeName
 * @function
 */

/**
 * Setter for property <code>typeName</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTypeName  new value for property <code>typeName</code>
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#setTypeName
 * @function
 */


/**
 * Binder for property <code>typeName</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#bindTypeName
 * @function
 */

/**
 * Unbinder for property <code>typeName</code>.
 *
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#unbindTypeName
 * @function
 */


/**
 * Getter for property <code>halfDay</code>.
 * Is this half a day
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>halfDay</code>
 * @public
 * @name sap.me.OverlapCalendarEvent#getHalfDay
 * @function
 */

/**
 * Setter for property <code>halfDay</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bHalfDay  new value for property <code>halfDay</code>
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#setHalfDay
 * @function
 */


/**
 * Binder for property <code>halfDay</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#bindHalfDay
 * @function
 */

/**
 * Unbinder for property <code>halfDay</code>.
 *
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#unbindHalfDay
 * @function
 */


/**
 * Getter for property <code>row</code>.
 * Id of the row on which to place this event
 *
 * Default value is <code>-1</code>
 *
 * @return {int} the value of property <code>row</code>
 * @public
 * @name sap.me.OverlapCalendarEvent#getRow
 * @function
 */

/**
 * Setter for property <code>row</code>.
 *
 * Default value is <code>-1</code> 
 *
 * @param {int} iRow  new value for property <code>row</code>
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#setRow
 * @function
 */


/**
 * Binder for property <code>row</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#bindRow
 * @function
 */

/**
 * Unbinder for property <code>row</code>.
 *
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#unbindRow
 * @function
 */


/**
 * Getter for property <code>name</code>.
 * Name of the row
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * @name sap.me.OverlapCalendarEvent#getName
 * @function
 */

/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#setName
 * @function
 */


/**
 * Binder for property <code>name</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#bindName
 * @function
 */

/**
 * Unbinder for property <code>name</code>.
 *
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendarEvent#unbindName
 * @function
 */


// Start of sap/me/OverlapCalendarEvent.js
///**
// * This file defines behavior for the control,
// */
//sap.me.OverlapCalendarEvent.prototype.init = function(){
//   // do something for initialization...
//};