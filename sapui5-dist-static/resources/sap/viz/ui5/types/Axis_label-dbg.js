/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Axis_label.
jQuery.sap.declare("sap.viz.ui5.types.Axis_label");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");


/**
 * Constructor for a new ui5/types/Axis_label.
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
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getNumberFormat numberFormat} : string (default: '')</li>
 * <li>{@link #getFormatString formatString} : any (default: null)</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.viz.ui5.core.BaseStructuredType#constructor sap.viz.ui5.core.BaseStructuredType}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Settings for axis label.
 * @extends sap.viz.ui5.core.BaseStructuredType
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 * @name sap.viz.ui5.types.Axis_label
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Axis_label", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"visible" : {type : "boolean", group : "", defaultValue : true},
		"numberFormat" : {type : "string", group : "", defaultValue : '', deprecated: true},
		"formatString" : {type : "any", group : "", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Axis_label with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Axis_label.extend
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Set visibility of axis label.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.viz.ui5.types.Axis_label#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.viz.ui5.types.Axis_label} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis_label#setVisible
 * @function
 */


/**
 * Getter for property <code>numberFormat</code>.
 * Set number format of value axis.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>numberFormat</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Axis_label#getNumberFormat
 * @function
 */

/**
 * Setter for property <code>numberFormat</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sNumberFormat  new value for property <code>numberFormat</code>
 * @return {sap.viz.ui5.types.Axis_label} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Axis_label#setNumberFormat
 * @function
 */


/**
 * Getter for property <code>formatString</code>.
 * Set format string of value axis. If value is a string, it will be axis format string as before. If value is a two dimensions array that each item of array is applied to each item of measure value group, it is only available for scatter matrix chart and multiple chart with MND in order to display different measure number format in each sub chart. If value is a two dimensions array for other charts except scatter matrix and multiple chart, the first value of first array of two dimensions array is as format string to format axis label. Any character in "MDYHSAmdyhsau#?%0@" is reserved as a token for format code. "u" should be put at the end of format string to let value format in SI units, and the remaining format string will be explained as Excel format string. If "u" is applied and the value before SI unit is bigger than 1e12 or less than 1e-3, it will be formatted in Exponential style. The following is a simple sample format string for label for axis as "0.00%" or as one chart may have two measures: [["#,##0.00 DM;-#,##.00 DM","#,##.00;-#,##.00"]].
 *
 * Default value is <code>null</code>
 *
 * @return {any} the value of property <code>formatString</code>
 * @public
 * @name sap.viz.ui5.types.Axis_label#getFormatString
 * @function
 */

/**
 * Setter for property <code>formatString</code>.
 *
 * Default value is <code>null</code> 
 *
 * @param {any} oFormatString  new value for property <code>formatString</code>
 * @return {sap.viz.ui5.types.Axis_label} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis_label#setFormatString
 * @function
 */


// Start of sap/viz/ui5/types/Axis_label.js
