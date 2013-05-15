/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Line_marker.
jQuery.sap.declare("sap.viz.ui5.types.Line_marker");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");

/**
 * Constructor for a new ui5/types/Line_marker.
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
 * <li>{@link #getVisible visible} : boolean (default: false)</li>
 * <li>{@link #getShape shape} : sap.viz.ui5.types.Line_marker_shape (default: sap.viz.ui5.types.Line_marker_shape.circle)</li>
 * <li>{@link #getSize size} : int (default: 6)</li></ul>
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
 * Settings for marker/data point graphics
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
 * @name sap.viz.ui5.types.Line_marker
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Line_marker", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"visible" : {type : "boolean", group : "", defaultValue : false},
		"shape" : {type : "sap.viz.ui5.types.Line_marker_shape", group : "", defaultValue : sap.viz.ui5.types.Line_marker_shape.circle},
		"size" : {type : "int", group : "", defaultValue : 6}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Line_marker with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Line_marker.extend
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Set show marker or not.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.viz.ui5.types.Line_marker#getVisible
 * @function
 */


/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.viz.ui5.types.Line_marker} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Line_marker#setVisible
 * @function
 */

/**
 * Getter for property <code>shape</code>.
 * Set marker shapes for chart.
 *
 * Default value is <code>circle</code>
 *
 * @return {sap.viz.ui5.types.Line_marker_shape} the value of property <code>shape</code>
 * @public
 * @name sap.viz.ui5.types.Line_marker#getShape
 * @function
 */


/**
 * Setter for property <code>shape</code>.
 *
 * Default value is <code>circle</code> 
 *
 * @param {sap.viz.ui5.types.Line_marker_shape} oShape  new value for property <code>shape</code>
 * @return {sap.viz.ui5.types.Line_marker} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Line_marker#setShape
 * @function
 */

/**
 * Getter for property <code>size</code>.
 * Set marker size of data point, range[4,32]. When beyond the range, the marker size is default size 6.
 *
 * Default value is <code>6</code>
 *
 * @return {int} the value of property <code>size</code>
 * @public
 * @name sap.viz.ui5.types.Line_marker#getSize
 * @function
 */


/**
 * Setter for property <code>size</code>.
 *
 * Default value is <code>6</code> 
 *
 * @param {int} iSize  new value for property <code>size</code>
 * @return {sap.viz.ui5.types.Line_marker} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Line_marker#setSize
 * @function
 */

// Start of sap/viz/ui5/types/Line_marker.js
