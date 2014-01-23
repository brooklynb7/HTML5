/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.makit.Value.
jQuery.sap.declare("sap.makit.Value");
jQuery.sap.require("sap.makit.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new Value.
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
 * <li>{@link #getExpression expression} : string</li>
 * <li>{@link #getDisplayName displayName} : string</li>
 * <li>{@link #getFormat format} : string</li>
 * <li>{@link #getLocale locale} : string</li></ul>
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
 * Represents the Value data region of the Chart.
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @since 1.8
 * @name sap.makit.Value
 */
sap.ui.core.Element.extend("sap.makit.Value", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.makit",
	properties : {
		"expression" : {type : "string", group : "Misc", defaultValue : null},
		"displayName" : {type : "string", group : "Misc", defaultValue : null},
		"format" : {type : "string", group : "Misc", defaultValue : null},
		"locale" : {type : "string", group : "Misc", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.makit.Value with name <code>sClassName</code> 
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
 * @name sap.makit.Value.extend
 * @function
 */


/**
 * Getter for property <code>expression</code>.
 * The user should map the column on this property. The expression allows more advanced column mapping. Instead of just specifying the column name (e.g. revenueValue), the user can use SAP expression language e.g. Assuming the user has a revenueValue column and an operatingCost column, the user can specify the following expression:
 * "revenueValue - operatingCost"
 * the resulting value displayed in the chart will be the arithmatic operation result on these two columns.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>expression</code>
 * @public
 * @name sap.makit.Value#getExpression
 * @function
 */

/**
 * Setter for property <code>expression</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sExpression  new value for property <code>expression</code>
 * @return {sap.makit.Value} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Value#setExpression
 * @function
 */


/**
 * Getter for property <code>displayName</code>.
 * The text label representing this Value (on value bubble or table's header)
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>displayName</code>
 * @public
 * @name sap.makit.Value#getDisplayName
 * @function
 */

/**
 * Setter for property <code>displayName</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDisplayName  new value for property <code>displayName</code>
 * @return {sap.makit.Value} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Value#setDisplayName
 * @function
 */


/**
 * Getter for property <code>format</code>.
 * Number formatting for the value. Accepted values:
 * number
 * currency
 * percent
 * roundedN - where N represents number of decimal places e.g. rounded4
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>format</code>
 * @public
 * @name sap.makit.Value#getFormat
 * @function
 */

/**
 * Setter for property <code>format</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFormat  new value for property <code>format</code>
 * @return {sap.makit.Value} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Value#setFormat
 * @function
 */


/**
 * Getter for property <code>locale</code>.
 * Comma separated locales for specifiying values in different locale. The locale will be mapped in the same order as the series data.
 * e.g. zh-CH, en-US, de-DE
 * The first zh-CH will be applied to the value of the first series, en-US will be applied to the second series.
 * Currently will only work with 'currency' format.
 * Supported locales:
 * en, zh, de, fr, es, ru, ja, pt and their more specific variations such as en-CA, es-AR, zh-HK, etc.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>locale</code>
 * @public
 * @name sap.makit.Value#getLocale
 * @function
 */

/**
 * Setter for property <code>locale</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLocale  new value for property <code>locale</code>
 * @return {sap.makit.Value} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Value#setLocale
 * @function
 */


// Start of sap/makit/Value.js
/*!
 * @copyright@
 */
