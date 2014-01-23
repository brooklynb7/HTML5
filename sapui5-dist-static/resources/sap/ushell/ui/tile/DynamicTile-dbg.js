/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ushell.ui.tile.DynamicTile.
jQuery.sap.declare("sap.ushell.ui.tile.DynamicTile");
jQuery.sap.require("sap.ushell.library");
jQuery.sap.require("sap.ushell.ui.tile.TileBase");


/**
 * Constructor for a new ui/tile/DynamicTile.
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
 * <li>{@link #getNumberValue numberValue} : string (default: '0.0')</li>
 * <li>{@link #getNumberState numberState} : sap.ushell.ui.tile.State (default: sap.ushell.ui.tile.State.Neutral)</li>
 * <li>{@link #getNumberUnit numberUnit} : string</li>
 * <li>{@link #getNumberDigits numberDigits} : int (default: 0)</li>
 * <li>{@link #getStateArrow stateArrow} : sap.ushell.ui.tile.StateArrow (default: sap.ushell.ui.tile.StateArrow.None)</li>
 * <li>{@link #getNumberFactor numberFactor} : string</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ushell.ui.tile.TileBase#constructor sap.ushell.ui.tile.TileBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * An applauncher for apps that need to display dynamically updated information
 * @extends sap.ushell.ui.tile.TileBase
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ushell.ui.tile.DynamicTile
 */
sap.ushell.ui.tile.TileBase.extend("sap.ushell.ui.tile.DynamicTile", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ushell",
	properties : {
		"numberValue" : {type : "string", group : "Data", defaultValue : '0.0'},
		"numberState" : {type : "sap.ushell.ui.tile.State", group : "Appearance", defaultValue : sap.ushell.ui.tile.State.Neutral},
		"numberUnit" : {type : "string", group : "Data", defaultValue : null},
		"numberDigits" : {type : "int", group : "Appearance", defaultValue : 0},
		"stateArrow" : {type : "sap.ushell.ui.tile.StateArrow", group : "Appearance", defaultValue : sap.ushell.ui.tile.StateArrow.None},
		"numberFactor" : {type : "string", group : "Data", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.ushell.ui.tile.DynamicTile with name <code>sClassName</code> 
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
 * @name sap.ushell.ui.tile.DynamicTile.extend
 * @function
 */


/**
 * Getter for property <code>numberValue</code>.
 * a number to be formatted with numberDigits decimal digits. Can be sap.ui.core.string as well.
 *
 * Default value is <code>0.0</code>
 *
 * @return {string} the value of property <code>numberValue</code>
 * @public
 * @name sap.ushell.ui.tile.DynamicTile#getNumberValue
 * @function
 */

/**
 * Setter for property <code>numberValue</code>.
 *
 * Default value is <code>0.0</code> 
 *
 * @param {string} sNumberValue  new value for property <code>numberValue</code>
 * @return {sap.ushell.ui.tile.DynamicTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.tile.DynamicTile#setNumberValue
 * @function
 */


/**
 * Getter for property <code>numberState</code>.
 * The state of the number, indicating positive or negative conditions
 *
 * Default value is <code>Neutral</code>
 *
 * @return {sap.ushell.ui.tile.State} the value of property <code>numberState</code>
 * @public
 * @name sap.ushell.ui.tile.DynamicTile#getNumberState
 * @function
 */

/**
 * Setter for property <code>numberState</code>.
 *
 * Default value is <code>Neutral</code> 
 *
 * @param {sap.ushell.ui.tile.State} oNumberState  new value for property <code>numberState</code>
 * @return {sap.ushell.ui.tile.DynamicTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.tile.DynamicTile#setNumberState
 * @function
 */


/**
 * Getter for property <code>numberUnit</code>.
 * The unit in which numberValue is measured
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>numberUnit</code>
 * @public
 * @name sap.ushell.ui.tile.DynamicTile#getNumberUnit
 * @function
 */

/**
 * Setter for property <code>numberUnit</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sNumberUnit  new value for property <code>numberUnit</code>
 * @return {sap.ushell.ui.tile.DynamicTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.tile.DynamicTile#setNumberUnit
 * @function
 */


/**
 * Getter for property <code>numberDigits</code>.
 * the number of fractional decimal digits
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>numberDigits</code>
 * @public
 * @name sap.ushell.ui.tile.DynamicTile#getNumberDigits
 * @function
 */

/**
 * Setter for property <code>numberDigits</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iNumberDigits  new value for property <code>numberDigits</code>
 * @return {sap.ushell.ui.tile.DynamicTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.tile.DynamicTile#setNumberDigits
 * @function
 */


/**
 * Getter for property <code>stateArrow</code>.
 * the state of the trend indicator
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ushell.ui.tile.StateArrow} the value of property <code>stateArrow</code>
 * @public
 * @name sap.ushell.ui.tile.DynamicTile#getStateArrow
 * @function
 */

/**
 * Setter for property <code>stateArrow</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ushell.ui.tile.StateArrow} oStateArrow  new value for property <code>stateArrow</code>
 * @return {sap.ushell.ui.tile.DynamicTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.tile.DynamicTile#setStateArrow
 * @function
 */


/**
 * Getter for property <code>numberFactor</code>.
 * defines a scaling factor (like "%", "M" or "k") right to a scaled number
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>numberFactor</code>
 * @public
 * @name sap.ushell.ui.tile.DynamicTile#getNumberFactor
 * @function
 */

/**
 * Setter for property <code>numberFactor</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sNumberFactor  new value for property <code>numberFactor</code>
 * @return {sap.ushell.ui.tile.DynamicTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.tile.DynamicTile#setNumberFactor
 * @function
 */


// Start of sap/ushell/ui/tile/DynamicTile.js
// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * Applauncher displaying an application that provides a service that returns
 * dynamic data.
 * 
 * @name sap.ushell.ui.tile.DynamicTile
 * 
 * @since   1.15.0
 * @private
 */
