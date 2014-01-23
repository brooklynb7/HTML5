/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Legend_layout.
jQuery.sap.declare("sap.viz.ui5.types.Legend_layout");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");


/**
 * Constructor for a new ui5/types/Legend_layout.
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
 * <li>{@link #getPosition position} : sap.viz.ui5.types.Legend_layout_position (default: sap.viz.ui5.types.Legend_layout_position.right)</li>
 * <li>{@link #getPriority priority} : int (default: 1)</li></ul>
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
 * Settings for layout of legend area.
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
 * @name sap.viz.ui5.types.Legend_layout
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Legend_layout", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"position" : {type : "sap.viz.ui5.types.Legend_layout_position", group : "", defaultValue : sap.viz.ui5.types.Legend_layout_position.right},
		"priority" : {type : "int", group : "", defaultValue : 1, deprecated: true}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Legend_layout with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Legend_layout.extend
 * @function
 */


/**
 * Getter for property <code>position</code>.
 * Set the position of the legend area.
 *
 * Default value is <code>right</code>
 *
 * @return {sap.viz.ui5.types.Legend_layout_position} the value of property <code>position</code>
 * @public
 * @name sap.viz.ui5.types.Legend_layout#getPosition
 * @function
 */

/**
 * Setter for property <code>position</code>.
 *
 * Default value is <code>right</code> 
 *
 * @param {sap.viz.ui5.types.Legend_layout_position} oPosition  new value for property <code>position</code>
 * @return {sap.viz.ui5.types.Legend_layout} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Legend_layout#setPosition
 * @function
 */


/**
 * Getter for property <code>priority</code>.
 * Set the priority of the position for the legend area.
 *
 * Default value is <code>1</code>
 *
 * @return {int} the value of property <code>priority</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Legend_layout#getPriority
 * @function
 */

/**
 * Setter for property <code>priority</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {int} iPriority  new value for property <code>priority</code>
 * @return {sap.viz.ui5.types.Legend_layout} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Legend_layout#setPriority
 * @function
 */


// Start of sap/viz/ui5/types/Legend_layout.js
