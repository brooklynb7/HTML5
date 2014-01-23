/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.controller.Interaction_selectability.
jQuery.sap.declare("sap.viz.ui5.types.controller.Interaction_selectability");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");


/**
 * Constructor for a new ui5/types/controller/Interaction_selectability.
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
 * <li>{@link #getMode mode} : sap.viz.ui5.types.controller.Interaction_selectability_mode (default: sap.viz.ui5.types.controller.Interaction_selectability_mode.multiple)</li>
 * <li>{@link #getLassoWithCtrlKey lassoWithCtrlKey} : boolean (default: false)</li></ul>
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
 * Settings for selectability.
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
 * @name sap.viz.ui5.types.controller.Interaction_selectability
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.controller.Interaction_selectability", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"mode" : {type : "sap.viz.ui5.types.controller.Interaction_selectability_mode", group : "", defaultValue : sap.viz.ui5.types.controller.Interaction_selectability_mode.multiple},
		"lassoWithCtrlKey" : {type : "boolean", group : "", defaultValue : false, deprecated: true}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.controller.Interaction_selectability with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.controller.Interaction_selectability.extend
 * @function
 */


/**
 * Getter for property <code>mode</code>.
 * Set the selection mode. Single means you only can select one at the same time. Multiple means you can select several ones. None means you can not select anything.
 *
 * Default value is <code>multiple</code>
 *
 * @return {sap.viz.ui5.types.controller.Interaction_selectability_mode} the value of property <code>mode</code>
 * @public
 * @name sap.viz.ui5.types.controller.Interaction_selectability#getMode
 * @function
 */

/**
 * Setter for property <code>mode</code>.
 *
 * Default value is <code>multiple</code> 
 *
 * @param {sap.viz.ui5.types.controller.Interaction_selectability_mode} oMode  new value for property <code>mode</code>
 * @return {sap.viz.ui5.types.controller.Interaction_selectability} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.controller.Interaction_selectability#setMode
 * @function
 */


/**
 * Getter for property <code>lassoWithCtrlKey</code>.
 * Set whether lasso selection needs ctrl key pressed.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>lassoWithCtrlKey</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction_selectability#getLassoWithCtrlKey
 * @function
 */

/**
 * Setter for property <code>lassoWithCtrlKey</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bLassoWithCtrlKey  new value for property <code>lassoWithCtrlKey</code>
 * @return {sap.viz.ui5.types.controller.Interaction_selectability} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.controller.Interaction_selectability#setLassoWithCtrlKey
 * @function
 */


// Start of sap/viz/ui5/types/controller/Interaction_selectability.js
