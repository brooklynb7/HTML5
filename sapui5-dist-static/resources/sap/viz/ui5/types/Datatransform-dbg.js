/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Datatransform.
jQuery.sap.declare("sap.viz.ui5.types.Datatransform");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");


/**
 * Constructor for a new ui5/types/Datatransform.
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
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getAutoBinning autoBinning} : sap.viz.ui5.types.Datatransform_autoBinning</li>
 * <li>{@link #getDataSampling dataSampling} : sap.viz.ui5.types.Datatransform_dataSampling</li></ul>
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
 * Module ui5/types/Datatransform
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
 * @name sap.viz.ui5.types.Datatransform
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Datatransform", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	aggregations : {
    	"autoBinning" : {type : "sap.viz.ui5.types.Datatransform_autoBinning", multiple : false}, 
    	"dataSampling" : {type : "sap.viz.ui5.types.Datatransform_dataSampling", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Datatransform with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Datatransform.extend
 * @function
 */


/**
 * Getter for aggregation <code>autoBinning</code>.<br/>
 * Settings for auto-binning algorithm
 * 
 * @return {sap.viz.ui5.types.Datatransform_autoBinning}
 * @public
 * @name sap.viz.ui5.types.Datatransform#getAutoBinning
 * @function
 */


/**
 * Setter for the aggregated <code>autoBinning</code>.
 * @param oAutoBinning {sap.viz.ui5.types.Datatransform_autoBinning}
 * @return {sap.viz.ui5.types.Datatransform} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Datatransform#setAutoBinning
 * @function
 */
	

/**
 * Destroys the autoBinning in the aggregation 
 * named <code>autoBinning</code>.
 * @return {sap.viz.ui5.types.Datatransform} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Datatransform#destroyAutoBinning
 * @function
 */


/**
 * Getter for aggregation <code>dataSampling</code>.<br/>
 * Settings for data sampling algorithm
 * 
 * @return {sap.viz.ui5.types.Datatransform_dataSampling}
 * @public
 * @name sap.viz.ui5.types.Datatransform#getDataSampling
 * @function
 */


/**
 * Setter for the aggregated <code>dataSampling</code>.
 * @param oDataSampling {sap.viz.ui5.types.Datatransform_dataSampling}
 * @return {sap.viz.ui5.types.Datatransform} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Datatransform#setDataSampling
 * @function
 */
	

/**
 * Destroys the dataSampling in the aggregation 
 * named <code>dataSampling</code>.
 * @return {sap.viz.ui5.types.Datatransform} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Datatransform#destroyDataSampling
 * @function
 */


// Start of sap/viz/ui5/types/Datatransform.js
sap.viz.ui5.types.Datatransform.prototype.getAutoBinning = function() {
  return this._getOrCreate("autoBinning");
}
sap.viz.ui5.types.Datatransform.prototype.getDataSampling = function() {
  return this._getOrCreate("dataSampling");
}
