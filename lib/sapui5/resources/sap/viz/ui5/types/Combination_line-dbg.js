/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Combination_line.
jQuery.sap.declare("sap.viz.ui5.types.Combination_line");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");

/**
 * Constructor for a new ui5/types/Combination_line.
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
 * <li>{@link #getWidth width} : int (default: 2)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMarker marker} : sap.viz.ui5.types.Combination_line_marker</li></ul>
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
 * Settings for line properties.
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
 * @name sap.viz.ui5.types.Combination_line
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Combination_line", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"width" : {type : "int", group : "", defaultValue : 2}
	},
	aggregations : {
    	"marker" : {type : "sap.viz.ui5.types.Combination_line_marker", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Combination_line with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Combination_line.extend
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Set width of line, range[1,7]. When beyond the range, the line width is default size 2.
 *
 * Default value is <code>2</code>
 *
 * @return {int} the value of property <code>width</code>
 * @public
 * @name sap.viz.ui5.types.Combination_line#getWidth
 * @function
 */


/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>2</code> 
 *
 * @param {int} iWidth  new value for property <code>width</code>
 * @return {sap.viz.ui5.types.Combination_line} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Combination_line#setWidth
 * @function
 */
	
/**
 * Getter for aggregation <code>marker</code>.<br/>
 * Set marker/data point graphics settings.
 * 
 * @return {sap.viz.ui5.types.Combination_line_marker}
 * @public
 * @name sap.viz.ui5.types.Combination_line#getMarker
 * @function
 */

/**
 * Setter for the aggregated <code>marker</code>.
 * @param oMarker {sap.viz.ui5.types.Combination_line_marker}
 * @return {sap.viz.ui5.types.Combination_line} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Combination_line#setMarker
 * @function
 */


/**
 * Destroys the marker in the aggregation 
 * named <code>marker</code>.
 * @return {sap.viz.ui5.types.Combination_line} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Combination_line#destroyMarker
 * @function
 */

// Start of sap/viz/ui5/types/Combination_line.js
sap.viz.ui5.types.Combination_line.prototype.getMarker = function() {
  return this._getOrCreate("marker");
}
