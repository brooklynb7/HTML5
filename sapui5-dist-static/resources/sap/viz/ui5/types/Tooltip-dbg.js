/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Tooltip.
jQuery.sap.declare("sap.viz.ui5.types.Tooltip");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");


/**
 * Constructor for a new ui5/types/Tooltip.
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
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getDrawingEffect drawingEffect} : sap.viz.ui5.types.Tooltip_drawingEffect (default: sap.viz.ui5.types.Tooltip_drawingEffect.normal)</li>
 * <li>{@link #getFormatString formatString} : any[][] (default: [[null]])</li></ul>
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
 * Module ui5/types/Tooltip
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
 * @name sap.viz.ui5.types.Tooltip
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Tooltip", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"visible" : {type : "boolean", group : "", defaultValue : true},
		"drawingEffect" : {type : "sap.viz.ui5.types.Tooltip_drawingEffect", group : "", defaultValue : sap.viz.ui5.types.Tooltip_drawingEffect.normal},
		"formatString" : {type : "any[][]", group : "", defaultValue : [[null]]}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Tooltip with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Tooltip.extend
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Set visibility of tooltip.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.viz.ui5.types.Tooltip#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.viz.ui5.types.Tooltip} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Tooltip#setVisible
 * @function
 */


/**
 * Getter for property <code>drawingEffect</code>.
 * Set drawing effect of Tooltip.
 *
 * Default value is <code>normal</code>
 *
 * @return {sap.viz.ui5.types.Tooltip_drawingEffect} the value of property <code>drawingEffect</code>
 * @public
 * @name sap.viz.ui5.types.Tooltip#getDrawingEffect
 * @function
 */

/**
 * Setter for property <code>drawingEffect</code>.
 *
 * Default value is <code>normal</code> 
 *
 * @param {sap.viz.ui5.types.Tooltip_drawingEffect} oDrawingEffect  new value for property <code>drawingEffect</code>
 * @return {sap.viz.ui5.types.Tooltip} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Tooltip#setDrawingEffect
 * @function
 */


/**
 * Getter for property <code>formatString</code>.
 * Set format string of tooltip. As we may have dual axis with serveral measures, the first array is applied to primary axis and the second one is applied to the second one.If the length of format string list is less than the length of data series, the last format string in the list will be applied to exceeded data series.Any character in "MDYHSAmdyhsa#?%0@" is reserved as a token for format code.The following is a simple sample format string for tooltip as one chart has two measures: [["#,##0.00 DM;-#,##.00 DM","#,##.00;-#,##.00"]].
 *
 * Default value is <code>null</code>
 *
 * @return {any[][]} the value of property <code>formatString</code>
 * @public
 * @name sap.viz.ui5.types.Tooltip#getFormatString
 * @function
 */

/**
 * Setter for property <code>formatString</code>.
 *
 * Default value is <code>null</code> 
 *
 * @param {any[][]} aFormatString  new value for property <code>formatString</code>
 * @return {sap.viz.ui5.types.Tooltip} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Tooltip#setFormatString
 * @function
 */


// Start of sap/viz/ui5/types/Tooltip.js
