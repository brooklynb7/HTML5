/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Datatransform_dataSampling.
jQuery.sap.declare("sap.viz.ui5.types.Datatransform_dataSampling");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");


/**
 * Constructor for a new ui5/types/Datatransform_dataSampling.
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
 * <li>{@link #getSizeFactor sizeFactor} : int (default: 1)</li>
 * <li>{@link #getNumberPrecondition numberPrecondition} : int (default: 3000)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getGrid grid} : sap.viz.ui5.types.Datatransform_dataSampling_grid</li></ul>
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
 * Settings for data sampling algorithm
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
 * @name sap.viz.ui5.types.Datatransform_dataSampling
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Datatransform_dataSampling", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"enable" : {type : "boolean", group : "", defaultValue : false},
		"sizeFactor" : {type : "int", group : "", defaultValue : 1},
		"numberPrecondition" : {type : "int", group : "", defaultValue : 3000}
	},
	aggregations : {
    	"grid" : {type : "sap.viz.ui5.types.Datatransform_dataSampling_grid", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Datatransform_dataSampling with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Datatransform_dataSampling.extend
 * @function
 */


/**
 * Getter for property <code>enable</code>.
 * Set whether to enable data sampling.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>enable</code>
 * @public
 * @name sap.viz.ui5.types.Datatransform_dataSampling#getEnable
 * @function
 */

/**
 * Setter for property <code>enable</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bEnable  new value for property <code>enable</code>
 * @return {sap.viz.ui5.types.Datatransform_dataSampling} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Datatransform_dataSampling#setEnable
 * @function
 */


/**
 * Getter for property <code>sizeFactor</code>.
 * Set data point percentage in original dataset
 *
 * Default value is <code>1</code>
 *
 * @return {int} the value of property <code>sizeFactor</code>
 * @public
 * @name sap.viz.ui5.types.Datatransform_dataSampling#getSizeFactor
 * @function
 */

/**
 * Setter for property <code>sizeFactor</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {int} iSizeFactor  new value for property <code>sizeFactor</code>
 * @return {sap.viz.ui5.types.Datatransform_dataSampling} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Datatransform_dataSampling#setSizeFactor
 * @function
 */


/**
 * Getter for property <code>numberPrecondition</code>.
 * if data point is larger than this value, data sampling will be triggered.
 *
 * Default value is <code>3000</code>
 *
 * @return {int} the value of property <code>numberPrecondition</code>
 * @public
 * @name sap.viz.ui5.types.Datatransform_dataSampling#getNumberPrecondition
 * @function
 */

/**
 * Setter for property <code>numberPrecondition</code>.
 *
 * Default value is <code>3000</code> 
 *
 * @param {int} iNumberPrecondition  new value for property <code>numberPrecondition</code>
 * @return {sap.viz.ui5.types.Datatransform_dataSampling} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Datatransform_dataSampling#setNumberPrecondition
 * @function
 */


/**
 * Getter for aggregation <code>grid</code>.<br/>
 * add documentation for aggregation grid
 * 
 * @return {sap.viz.ui5.types.Datatransform_dataSampling_grid}
 * @public
 * @name sap.viz.ui5.types.Datatransform_dataSampling#getGrid
 * @function
 */


/**
 * Setter for the aggregated <code>grid</code>.
 * @param oGrid {sap.viz.ui5.types.Datatransform_dataSampling_grid}
 * @return {sap.viz.ui5.types.Datatransform_dataSampling} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Datatransform_dataSampling#setGrid
 * @function
 */
	

/**
 * Destroys the grid in the aggregation 
 * named <code>grid</code>.
 * @return {sap.viz.ui5.types.Datatransform_dataSampling} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Datatransform_dataSampling#destroyGrid
 * @function
 */


// Start of sap/viz/ui5/types/Datatransform_dataSampling.js
sap.viz.ui5.types.Datatransform_dataSampling.prototype.getGrid = function() {
  return this._getOrCreate("grid");
}
