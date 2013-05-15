/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Axis_scale.
jQuery.sap.declare("sap.viz.ui5.types.Axis_scale");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");

/**
 * Constructor for a new ui5/types/Axis_scale.
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
 * <li>{@link #getFixedRange fixedRange} : boolean (default: false)</li>
 * <li>{@link #getMinValue minValue} : float (default: 0)</li>
 * <li>{@link #getMaxValue maxValue} : float (default: 0)</li></ul>
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
 * Set scale for yAxis.
 * @extends sap.viz.ui5.core.BaseStructuredType
 *
 * @author  
 * @version 1.10.0
 *
 * @constructor   
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 * @name sap.viz.ui5.types.Axis_scale
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Axis_scale", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"fixedRange" : {type : "boolean", group : "", defaultValue : false},
		"minValue" : {type : "float", group : "", defaultValue : 0},
		"maxValue" : {type : "float", group : "", defaultValue : 0}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Axis_scale with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Axis_scale.extend
 * @function
 */


/**
 * Getter for property <code>fixedRange</code>.
 * Enable/disable fixed axis range according minValue and maxValue.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>fixedRange</code>
 * @public
 * @name sap.viz.ui5.types.Axis_scale#getFixedRange
 * @function
 */


/**
 * Setter for property <code>fixedRange</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bFixedRange  new value for property <code>fixedRange</code>
 * @return {sap.viz.ui5.types.Axis_scale} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis_scale#setFixedRange
 * @function
 */

/**
 * Getter for property <code>minValue</code>.
 * Set minValue of yAxis.
 *
 * Default value is <code>0</code>
 *
 * @return {float} the value of property <code>minValue</code>
 * @public
 * @name sap.viz.ui5.types.Axis_scale#getMinValue
 * @function
 */


/**
 * Setter for property <code>minValue</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {float} fMinValue  new value for property <code>minValue</code>
 * @return {sap.viz.ui5.types.Axis_scale} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis_scale#setMinValue
 * @function
 */

/**
 * Getter for property <code>maxValue</code>.
 * Set maxValue of yAxis.
 *
 * Default value is <code>0</code>
 *
 * @return {float} the value of property <code>maxValue</code>
 * @public
 * @name sap.viz.ui5.types.Axis_scale#getMaxValue
 * @function
 */


/**
 * Setter for property <code>maxValue</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {float} fMaxValue  new value for property <code>maxValue</code>
 * @return {sap.viz.ui5.types.Axis_scale} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis_scale#setMaxValue
 * @function
 */

// Start of sap/viz/ui5/types/Axis_scale.js
