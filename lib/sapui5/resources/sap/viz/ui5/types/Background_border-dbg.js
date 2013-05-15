/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Background_border.
jQuery.sap.declare("sap.viz.ui5.types.Background_border");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");

/**
 * Constructor for a new ui5/types/Background_border.
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
 * <li>{@link #getLeft left} : sap.viz.ui5.types.Background_border_left</li>
 * <li>{@link #getRight right} : sap.viz.ui5.types.Background_border_right</li>
 * <li>{@link #getTop top} : sap.viz.ui5.types.Background_border_top</li>
 * <li>{@link #getBottom bottom} : sap.viz.ui5.types.Background_border_bottom</li></ul>
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
 * Settings for border property.
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
 * @name sap.viz.ui5.types.Background_border
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Background_border", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	aggregations : {
    	"left" : {type : "sap.viz.ui5.types.Background_border_left", multiple : false}, 
    	"right" : {type : "sap.viz.ui5.types.Background_border_right", multiple : false}, 
    	"top" : {type : "sap.viz.ui5.types.Background_border_top", multiple : false}, 
    	"bottom" : {type : "sap.viz.ui5.types.Background_border_bottom", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Background_border with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Background_border.extend
 * @function
 */

	
/**
 * Getter for aggregation <code>left</code>.<br/>
 * Set left border property.
 * 
 * @return {sap.viz.ui5.types.Background_border_left}
 * @public
 * @name sap.viz.ui5.types.Background_border#getLeft
 * @function
 */

/**
 * Setter for the aggregated <code>left</code>.
 * @param oLeft {sap.viz.ui5.types.Background_border_left}
 * @return {sap.viz.ui5.types.Background_border} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Background_border#setLeft
 * @function
 */


/**
 * Destroys the left in the aggregation 
 * named <code>left</code>.
 * @return {sap.viz.ui5.types.Background_border} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Background_border#destroyLeft
 * @function
 */
	
/**
 * Getter for aggregation <code>right</code>.<br/>
 * Set right border property.
 * 
 * @return {sap.viz.ui5.types.Background_border_right}
 * @public
 * @name sap.viz.ui5.types.Background_border#getRight
 * @function
 */

/**
 * Setter for the aggregated <code>right</code>.
 * @param oRight {sap.viz.ui5.types.Background_border_right}
 * @return {sap.viz.ui5.types.Background_border} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Background_border#setRight
 * @function
 */


/**
 * Destroys the right in the aggregation 
 * named <code>right</code>.
 * @return {sap.viz.ui5.types.Background_border} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Background_border#destroyRight
 * @function
 */
	
/**
 * Getter for aggregation <code>top</code>.<br/>
 * Set top border property.
 * 
 * @return {sap.viz.ui5.types.Background_border_top}
 * @public
 * @name sap.viz.ui5.types.Background_border#getTop
 * @function
 */

/**
 * Setter for the aggregated <code>top</code>.
 * @param oTop {sap.viz.ui5.types.Background_border_top}
 * @return {sap.viz.ui5.types.Background_border} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Background_border#setTop
 * @function
 */


/**
 * Destroys the top in the aggregation 
 * named <code>top</code>.
 * @return {sap.viz.ui5.types.Background_border} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Background_border#destroyTop
 * @function
 */
	
/**
 * Getter for aggregation <code>bottom</code>.<br/>
 * Set bottom border property.
 * 
 * @return {sap.viz.ui5.types.Background_border_bottom}
 * @public
 * @name sap.viz.ui5.types.Background_border#getBottom
 * @function
 */

/**
 * Setter for the aggregated <code>bottom</code>.
 * @param oBottom {sap.viz.ui5.types.Background_border_bottom}
 * @return {sap.viz.ui5.types.Background_border} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Background_border#setBottom
 * @function
 */


/**
 * Destroys the bottom in the aggregation 
 * named <code>bottom</code>.
 * @return {sap.viz.ui5.types.Background_border} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Background_border#destroyBottom
 * @function
 */

// Start of sap/viz/ui5/types/Background_border.js
sap.viz.ui5.types.Background_border.prototype.getLeft = function() {
  return this._getOrCreate("left");
}
sap.viz.ui5.types.Background_border.prototype.getRight = function() {
  return this._getOrCreate("right");
}
sap.viz.ui5.types.Background_border.prototype.getTop = function() {
  return this._getOrCreate("top");
}
sap.viz.ui5.types.Background_border.prototype.getBottom = function() {
  return this._getOrCreate("bottom");
}
