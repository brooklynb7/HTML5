/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.legend.Common.
jQuery.sap.declare("sap.viz.ui5.types.legend.Common");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");


/**
 * Constructor for a new ui5/types/legend/Common.
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
 * <li>{@link #getIsScrollable isScrollable} : boolean (default: false)</li>
 * <li>{@link #getPosition position} : sap.viz.ui5.types.legend.Common_position (default: sap.viz.ui5.types.legend.Common_position.right)</li>
 * <li>{@link #getType type} : sap.viz.ui5.types.legend.Common_type (default: sap.viz.ui5.types.legend.Common_type.ColorLegend)</li>
 * <li>{@link #getAlignment alignment} : sap.viz.ui5.types.legend.Common_alignment (default: sap.viz.ui5.types.legend.Common_alignment.start)</li>
 * <li>{@link #getDrawingEffect drawingEffect} : sap.viz.ui5.types.legend.Common_drawingEffect (default: sap.viz.ui5.types.legend.Common_drawingEffect.normal)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTitle title} : sap.viz.ui5.types.legend.Common_title</li></ul>
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
 * Module ui5/types/legend/Common
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
 * @name sap.viz.ui5.types.legend.Common
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.legend.Common", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"visible" : {type : "boolean", group : "", defaultValue : true},
		"formatString" : {type : "string", group : "", defaultValue : 'null', deprecated: true},
		"isHierarchical" : {type : "boolean", group : "", defaultValue : false},
		"isScrollable" : {type : "boolean", group : "", defaultValue : false},
		"position" : {type : "sap.viz.ui5.types.legend.Common_position", group : "", defaultValue : sap.viz.ui5.types.legend.Common_position.right, deprecated: true},
		"type" : {type : "sap.viz.ui5.types.legend.Common_type", group : "", defaultValue : sap.viz.ui5.types.legend.Common_type.ColorLegend, deprecated: true},
		"alignment" : {type : "sap.viz.ui5.types.legend.Common_alignment", group : "", defaultValue : sap.viz.ui5.types.legend.Common_alignment.start, deprecated: true},
		"drawingEffect" : {type : "sap.viz.ui5.types.legend.Common_drawingEffect", group : "", defaultValue : sap.viz.ui5.types.legend.Common_drawingEffect.normal}
	},
	aggregations : {
    	"title" : {type : "sap.viz.ui5.types.legend.Common_title", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.legend.Common with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.legend.Common.extend
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
 * @name sap.viz.ui5.types.legend.Common#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.viz.ui5.types.legend.Common} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.legend.Common#setVisible
 * @function
 */


/**
 * Getter for property <code>formatString</code>.
 * Set format string of legend. Any character in "MDYHSAmdyhsa#?%0@" is reserved as a token for format code.
 *
 * Default value is <code>null</code>
 *
 * @return {string} the value of property <code>formatString</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.legend.Common#getFormatString
 * @function
 */

/**
 * Setter for property <code>formatString</code>.
 *
 * Default value is <code>null</code> 
 *
 * @param {string} sFormatString  new value for property <code>formatString</code>
 * @return {sap.viz.ui5.types.legend.Common} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.legend.Common#setFormatString
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
 * @name sap.viz.ui5.types.legend.Common#getIsHierarchical
 * @function
 */

/**
 * Setter for property <code>isHierarchical</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bIsHierarchical  new value for property <code>isHierarchical</code>
 * @return {sap.viz.ui5.types.legend.Common} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.legend.Common#setIsHierarchical
 * @function
 */


/**
 * Getter for property <code>isScrollable</code>.
 * Set scrollable legend. Switch on/off scrollable legend. If it is switched off, "..." will be used instead when there is no enough room to fit in all legend items.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>isScrollable</code>
 * @public
 * @name sap.viz.ui5.types.legend.Common#getIsScrollable
 * @function
 */

/**
 * Setter for property <code>isScrollable</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bIsScrollable  new value for property <code>isScrollable</code>
 * @return {sap.viz.ui5.types.legend.Common} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.legend.Common#setIsScrollable
 * @function
 */


/**
 * Getter for property <code>position</code>.
 * It is a deprecated property. Please use "legendGroup.layout.position" property to set legend position.
 *
 * Default value is <code>right</code>
 *
 * @return {sap.viz.ui5.types.legend.Common_position} the value of property <code>position</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.legend.Common#getPosition
 * @function
 */

/**
 * Setter for property <code>position</code>.
 *
 * Default value is <code>right</code> 
 *
 * @param {sap.viz.ui5.types.legend.Common_position} oPosition  new value for property <code>position</code>
 * @return {sap.viz.ui5.types.legend.Common} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.legend.Common#setPosition
 * @function
 */


/**
 * Getter for property <code>type</code>.
 * Set legend type of Bubble chart. Non-bubble chart is not supported.
 *
 * Default value is <code>ColorLegend</code>
 *
 * @return {sap.viz.ui5.types.legend.Common_type} the value of property <code>type</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.legend.Common#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>ColorLegend</code> 
 *
 * @param {sap.viz.ui5.types.legend.Common_type} oType  new value for property <code>type</code>
 * @return {sap.viz.ui5.types.legend.Common} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.legend.Common#setType
 * @function
 */


/**
 * Getter for property <code>alignment</code>.
 * Set alignment of legend.
 *
 * Default value is <code>start</code>
 *
 * @return {sap.viz.ui5.types.legend.Common_alignment} the value of property <code>alignment</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.legend.Common#getAlignment
 * @function
 */

/**
 * Setter for property <code>alignment</code>.
 *
 * Default value is <code>start</code> 
 *
 * @param {sap.viz.ui5.types.legend.Common_alignment} oAlignment  new value for property <code>alignment</code>
 * @return {sap.viz.ui5.types.legend.Common} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.legend.Common#setAlignment
 * @function
 */


/**
 * Getter for property <code>drawingEffect</code>.
 * Set drawing effect of legend.
 *
 * Default value is <code>normal</code>
 *
 * @return {sap.viz.ui5.types.legend.Common_drawingEffect} the value of property <code>drawingEffect</code>
 * @public
 * @name sap.viz.ui5.types.legend.Common#getDrawingEffect
 * @function
 */

/**
 * Setter for property <code>drawingEffect</code>.
 *
 * Default value is <code>normal</code> 
 *
 * @param {sap.viz.ui5.types.legend.Common_drawingEffect} oDrawingEffect  new value for property <code>drawingEffect</code>
 * @return {sap.viz.ui5.types.legend.Common} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.legend.Common#setDrawingEffect
 * @function
 */


/**
 * Getter for aggregation <code>title</code>.<br/>
 * Settings for legend title.
 * 
 * @return {sap.viz.ui5.types.legend.Common_title}
 * @public
 * @name sap.viz.ui5.types.legend.Common#getTitle
 * @function
 */


/**
 * Setter for the aggregated <code>title</code>.
 * @param oTitle {sap.viz.ui5.types.legend.Common_title}
 * @return {sap.viz.ui5.types.legend.Common} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.legend.Common#setTitle
 * @function
 */
	

/**
 * Destroys the title in the aggregation 
 * named <code>title</code>.
 * @return {sap.viz.ui5.types.legend.Common} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.legend.Common#destroyTitle
 * @function
 */


// Start of sap/viz/ui5/types/legend/Common.js
sap.viz.ui5.types.legend.Common.prototype.getTitle = function() {
  return this._getOrCreate("title");
}
