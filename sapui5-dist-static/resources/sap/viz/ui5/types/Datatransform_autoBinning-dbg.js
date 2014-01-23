/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Datatransform_autoBinning.
jQuery.sap.declare("sap.viz.ui5.types.Datatransform_autoBinning");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");


/**
 * Constructor for a new ui5/types/Datatransform_autoBinning.
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
 * <li>{@link #getEnable enable} : boolean (default: false)</li>
 * <li>{@link #getBinNumber binNumber} : int (default: 10)</li></ul>
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
 * Settings for auto-binning algorithm
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
 * @name sap.viz.ui5.types.Datatransform_autoBinning
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Datatransform_autoBinning", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"enable" : {type : "boolean", group : "", defaultValue : false},
		"binNumber" : {type : "int", group : "", defaultValue : 10}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Datatransform_autoBinning with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Datatransform_autoBinning.extend
 * @function
 */


/**
 * Getter for property <code>enable</code>.
 * Set whether to enable data auto binning.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>enable</code>
 * @public
 * @name sap.viz.ui5.types.Datatransform_autoBinning#getEnable
 * @function
 */

/**
 * Setter for property <code>enable</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bEnable  new value for property <code>enable</code>
 * @return {sap.viz.ui5.types.Datatransform_autoBinning} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Datatransform_autoBinning#setEnable
 * @function
 */


/**
 * Getter for property <code>binNumber</code>.
 * Set bin number.
 *
 * Default value is <code>10</code>
 *
 * @return {int} the value of property <code>binNumber</code>
 * @public
 * @name sap.viz.ui5.types.Datatransform_autoBinning#getBinNumber
 * @function
 */

/**
 * Setter for property <code>binNumber</code>.
 *
 * Default value is <code>10</code> 
 *
 * @param {int} iBinNumber  new value for property <code>binNumber</code>
 * @return {sap.viz.ui5.types.Datatransform_autoBinning} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Datatransform_autoBinning#setBinNumber
 * @function
 */


// Start of sap/viz/ui5/types/Datatransform_autoBinning.js
