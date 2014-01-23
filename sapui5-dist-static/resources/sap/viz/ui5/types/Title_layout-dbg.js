/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Title_layout.
jQuery.sap.declare("sap.viz.ui5.types.Title_layout");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");


/**
 * Constructor for a new ui5/types/Title_layout.
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
 * <li>{@link #getPosition position} : string (default: 'right')</li>
 * <li>{@link #getPriority priority} : int (default: 0)</li></ul>
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
 * Settings for layout of title.
 * @extends sap.viz.ui5.core.BaseStructuredType
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @since 1.7.2
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Title_layout
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Title_layout", { metadata : {

	// ---- object ----
	deprecated : true,

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"position" : {type : "string", group : "", defaultValue : 'right'},
		"priority" : {type : "int", group : "", defaultValue : 0, deprecated: true}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Title_layout with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Title_layout.extend
 * @function
 */


/**
 * Getter for property <code>position</code>.
 * Set the position of the title.
 *
 * Default value is <code>right</code>
 *
 * @return {string} the value of property <code>position</code>
 * @public
 * @name sap.viz.ui5.types.Title_layout#getPosition
 * @function
 */

/**
 * Setter for property <code>position</code>.
 *
 * Default value is <code>right</code> 
 *
 * @param {string} sPosition  new value for property <code>position</code>
 * @return {sap.viz.ui5.types.Title_layout} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Title_layout#setPosition
 * @function
 */


/**
 * Getter for property <code>priority</code>.
 * Set the priority of the position for the title.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>priority</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Title_layout#getPriority
 * @function
 */

/**
 * Setter for property <code>priority</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iPriority  new value for property <code>priority</code>
 * @return {sap.viz.ui5.types.Title_layout} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Title_layout#setPriority
 * @function
 */


// Start of sap/viz/ui5/types/Title_layout.js
