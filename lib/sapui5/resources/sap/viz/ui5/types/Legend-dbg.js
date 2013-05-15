/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Legend.
jQuery.sap.declare("sap.viz.ui5.types.Legend");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");

/**
 * Constructor for a new ui5/types/Legend.
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
 * <li>{@link #getFormatString formatString} : string (default: 'null')</li>
 * <li>{@link #getIsHierarchical isHierarchical} : boolean (default: false)</li>
 * <li>{@link #getPosition position} : sap.viz.ui5.types.Legend_position (default: sap.viz.ui5.types.Legend_position.right)</li>
 * <li>{@link #getType type} : sap.viz.ui5.types.Legend_type (default: sap.viz.ui5.types.Legend_type.ColorLegend)</li>
 * <li>{@link #getAlignment alignment} : sap.viz.ui5.types.Legend_alignment (default: sap.viz.ui5.types.Legend_alignment.start)</li>
 * <li>{@link #getDrawingEffect drawingEffect} : sap.viz.ui5.types.Legend_drawingEffect (default: sap.viz.ui5.types.Legend_drawingEffect.normal)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTitle title} : sap.viz.ui5.types.Legend_title</li></ul>
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
 * Module ui5/types/Legend
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
 * @name sap.viz.ui5.types.Legend
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Legend", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"visible" : {type : "boolean", group : "", defaultValue : true},
		"formatString" : {type : "string", group : "", defaultValue : 'null'},
		"isHierarchical" : {type : "boolean", group : "", defaultValue : false},
		"position" : {type : "sap.viz.ui5.types.Legend_position", group : "", defaultValue : sap.viz.ui5.types.Legend_position.right},
		"type" : {type : "sap.viz.ui5.types.Legend_type", group : "", defaultValue : sap.viz.ui5.types.Legend_type.ColorLegend},
		"alignment" : {type : "sap.viz.ui5.types.Legend_alignment", group : "", defaultValue : sap.viz.ui5.types.Legend_alignment.start},
		"drawingEffect" : {type : "sap.viz.ui5.types.Legend_drawingEffect", group : "", defaultValue : sap.viz.ui5.types.Legend_drawingEffect.normal}
	},
	aggregations : {
    	"title" : {type : "sap.viz.ui5.types.Legend_title", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Legend with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Legend.extend
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Set visibility of legend.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.viz.ui5.types.Legend#getVisible
 * @function
 */


/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.viz.ui5.types.Legend} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Legend#setVisible
 * @function
 */

/**
 * Getter for property <code>formatString</code>.
 * Set format string of legend.
 *
 * Default value is <code>null</code>
 *
 * @return {string} the value of property <code>formatString</code>
 * @public
 * @name sap.viz.ui5.types.Legend#getFormatString
 * @function
 */


/**
 * Setter for property <code>formatString</code>.
 *
 * Default value is <code>null</code> 
 *
 * @param {string} sFormatString  new value for property <code>formatString</code>
 * @return {sap.viz.ui5.types.Legend} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Legend#setFormatString
 * @function
 */

/**
 * Getter for property <code>isHierarchical</code>.
 * Set hierarchy legend. Supported only when legend is located in the right of chart.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>isHierarchical</code>
 * @public
 * @name sap.viz.ui5.types.Legend#getIsHierarchical
 * @function
 */


/**
 * Setter for property <code>isHierarchical</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bIsHierarchical  new value for property <code>isHierarchical</code>
 * @return {sap.viz.ui5.types.Legend} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Legend#setIsHierarchical
 * @function
 */

/**
 * Getter for property <code>position</code>.
 * Set legend position. Only support legend is located in the right side.
 *
 * Default value is <code>right</code>
 *
 * @return {sap.viz.ui5.types.Legend_position} the value of property <code>position</code>
 * @public
 * @name sap.viz.ui5.types.Legend#getPosition
 * @function
 */


/**
 * Setter for property <code>position</code>.
 *
 * Default value is <code>right</code> 
 *
 * @param {sap.viz.ui5.types.Legend_position} oPosition  new value for property <code>position</code>
 * @return {sap.viz.ui5.types.Legend} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Legend#setPosition
 * @function
 */

/**
 * Getter for property <code>type</code>.
 * Set legend type of Bubble chart. Non-bubble chart is not supported.
 *
 * Default value is <code>ColorLegend</code>
 *
 * @return {sap.viz.ui5.types.Legend_type} the value of property <code>type</code>
 * @public
 * @name sap.viz.ui5.types.Legend#getType
 * @function
 */


/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>ColorLegend</code> 
 *
 * @param {sap.viz.ui5.types.Legend_type} oType  new value for property <code>type</code>
 * @return {sap.viz.ui5.types.Legend} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Legend#setType
 * @function
 */

/**
 * Getter for property <code>alignment</code>.
 * Set alignment of legend.
 *
 * Default value is <code>start</code>
 *
 * @return {sap.viz.ui5.types.Legend_alignment} the value of property <code>alignment</code>
 * @public
 * @name sap.viz.ui5.types.Legend#getAlignment
 * @function
 */


/**
 * Setter for property <code>alignment</code>.
 *
 * Default value is <code>start</code> 
 *
 * @param {sap.viz.ui5.types.Legend_alignment} oAlignment  new value for property <code>alignment</code>
 * @return {sap.viz.ui5.types.Legend} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Legend#setAlignment
 * @function
 */

/**
 * Getter for property <code>drawingEffect</code>.
 * Set drawing effect of legend.
 *
 * Default value is <code>normal</code>
 *
 * @return {sap.viz.ui5.types.Legend_drawingEffect} the value of property <code>drawingEffect</code>
 * @public
 * @name sap.viz.ui5.types.Legend#getDrawingEffect
 * @function
 */


/**
 * Setter for property <code>drawingEffect</code>.
 *
 * Default value is <code>normal</code> 
 *
 * @param {sap.viz.ui5.types.Legend_drawingEffect} oDrawingEffect  new value for property <code>drawingEffect</code>
 * @return {sap.viz.ui5.types.Legend} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Legend#setDrawingEffect
 * @function
 */
	
/**
 * Getter for aggregation <code>title</code>.<br/>
 * Settings for legend title.
 * 
 * @return {sap.viz.ui5.types.Legend_title}
 * @public
 * @name sap.viz.ui5.types.Legend#getTitle
 * @function
 */

/**
 * Setter for the aggregated <code>title</code>.
 * @param oTitle {sap.viz.ui5.types.Legend_title}
 * @return {sap.viz.ui5.types.Legend} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Legend#setTitle
 * @function
 */


/**
 * Destroys the title in the aggregation 
 * named <code>title</code>.
 * @return {sap.viz.ui5.types.Legend} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Legend#destroyTitle
 * @function
 */

// Start of sap/viz/ui5/types/Legend.js
sap.viz.ui5.types.Legend.prototype.getTitle = function() {
  return this._getOrCreate("title");
}
