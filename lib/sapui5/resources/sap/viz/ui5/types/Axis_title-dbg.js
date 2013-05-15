/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Axis_title.
jQuery.sap.declare("sap.viz.ui5.types.Axis_title");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");

/**
 * Constructor for a new ui5/types/Axis_title.
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
 * <li>{@link #getText text} : string (default: 'null')</li>
 * <li>{@link #getApplyAxislineColor applyAxislineColor} : boolean (default: false)</li></ul>
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
 * Settings for axis title.
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
 * @name sap.viz.ui5.types.Axis_title
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Axis_title", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"visible" : {type : "boolean", group : "", defaultValue : false},
		"text" : {type : "string", group : "", defaultValue : 'null'},
		"applyAxislineColor" : {type : "boolean", group : "", defaultValue : false}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Axis_title with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Axis_title.extend
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Set visibility of axis title.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.viz.ui5.types.Axis_title#getVisible
 * @function
 */


/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.viz.ui5.types.Axis_title} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis_title#setVisible
 * @function
 */

/**
 * Getter for property <code>text</code>.
 * Set text of axis title.
 *
 * Default value is <code>null</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.viz.ui5.types.Axis_title#getText
 * @function
 */


/**
 * Setter for property <code>text</code>.
 *
 * Default value is <code>null</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.viz.ui5.types.Axis_title} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis_title#setText
 * @function
 */

/**
 * Getter for property <code>applyAxislineColor</code>.
 * Set title color same with axisline color.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>applyAxislineColor</code>
 * @public
 * @name sap.viz.ui5.types.Axis_title#getApplyAxislineColor
 * @function
 */


/**
 * Setter for property <code>applyAxislineColor</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bApplyAxislineColor  new value for property <code>applyAxislineColor</code>
 * @return {sap.viz.ui5.types.Axis_title} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis_title#setApplyAxislineColor
 * @function
 */

// Start of sap/viz/ui5/types/Axis_title.js
