/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Treemap.
jQuery.sap.declare("sap.viz.ui5.types.Treemap");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");


/**
 * Constructor for a new ui5/types/Treemap.
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
 * <li>{@link #getStartColor startColor} : string (default: '#C2E3A9')</li>
 * <li>{@link #getEndColor endColor} : string (default: '#73C03C')</li>
 * <li>{@link #getColorPalette colorPalette} : string[]</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getBorder border} : sap.viz.ui5.types.Treemap_border</li>
 * <li>{@link #getAnimation animation} : sap.viz.ui5.types.Treemap_animation</li>
 * <li>{@link #getToolTip toolTip} : sap.viz.ui5.types.Treemap_tooltip</li></ul>
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
 * Module ui5/types/Treemap
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
 * @name sap.viz.ui5.types.Treemap
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Treemap", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"startColor" : {type : "string", group : "", defaultValue : '#C2E3A9'},
		"endColor" : {type : "string", group : "", defaultValue : '#73C03C'},
		"colorPalette" : {type : "string[]", group : "", defaultValue : null}
	},
	aggregations : {
    	"border" : {type : "sap.viz.ui5.types.Treemap_border", multiple : false}, 
    	"animation" : {type : "sap.viz.ui5.types.Treemap_animation", multiple : false}, 
    	"toolTip" : {type : "sap.viz.ui5.types.Treemap_tooltip", multiple : false, deprecated: true}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Treemap with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Treemap.extend
 * @function
 */


/**
 * Getter for property <code>startColor</code>.
 * Set treeMap startColor.
 *
 * Default value is <code>#C2E3A9</code>
 *
 * @return {string} the value of property <code>startColor</code>
 * @public
 * @name sap.viz.ui5.types.Treemap#getStartColor
 * @function
 */

/**
 * Setter for property <code>startColor</code>.
 *
 * Default value is <code>#C2E3A9</code> 
 *
 * @param {string} sStartColor  new value for property <code>startColor</code>
 * @return {sap.viz.ui5.types.Treemap} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Treemap#setStartColor
 * @function
 */


/**
 * Getter for property <code>endColor</code>.
 * Set treeMap endColor.
 *
 * Default value is <code>#73C03C</code>
 *
 * @return {string} the value of property <code>endColor</code>
 * @public
 * @name sap.viz.ui5.types.Treemap#getEndColor
 * @function
 */

/**
 * Setter for property <code>endColor</code>.
 *
 * Default value is <code>#73C03C</code> 
 *
 * @param {string} sEndColor  new value for property <code>endColor</code>
 * @return {sap.viz.ui5.types.Treemap} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Treemap#setEndColor
 * @function
 */


/**
 * Getter for property <code>colorPalette</code>.
 * Set the color palette for sectors. For example, ["#748CB2", "#9CC677", "#EACF5E", "#F9AD79", "#D16A7C"].
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string[]} the value of property <code>colorPalette</code>
 * @public
 * @name sap.viz.ui5.types.Treemap#getColorPalette
 * @function
 */

/**
 * Setter for property <code>colorPalette</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string[]} aColorPalette  new value for property <code>colorPalette</code>
 * @return {sap.viz.ui5.types.Treemap} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Treemap#setColorPalette
 * @function
 */


/**
 * Getter for aggregation <code>border</code>.<br/>
 * Settings for border.
 * 
 * @return {sap.viz.ui5.types.Treemap_border}
 * @public
 * @name sap.viz.ui5.types.Treemap#getBorder
 * @function
 */


/**
 * Setter for the aggregated <code>border</code>.
 * @param oBorder {sap.viz.ui5.types.Treemap_border}
 * @return {sap.viz.ui5.types.Treemap} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Treemap#setBorder
 * @function
 */
	

/**
 * Destroys the border in the aggregation 
 * named <code>border</code>.
 * @return {sap.viz.ui5.types.Treemap} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Treemap#destroyBorder
 * @function
 */


/**
 * Getter for aggregation <code>animation</code>.<br/>
 * Settings for animation of plot area.
 * 
 * @return {sap.viz.ui5.types.Treemap_animation}
 * @public
 * @name sap.viz.ui5.types.Treemap#getAnimation
 * @function
 */


/**
 * Setter for the aggregated <code>animation</code>.
 * @param oAnimation {sap.viz.ui5.types.Treemap_animation}
 * @return {sap.viz.ui5.types.Treemap} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Treemap#setAnimation
 * @function
 */
	

/**
 * Destroys the animation in the aggregation 
 * named <code>animation</code>.
 * @return {sap.viz.ui5.types.Treemap} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Treemap#destroyAnimation
 * @function
 */


/**
 * Getter for aggregation <code>toolTip</code>.<br/>
 * Settings for tooltip.
 * 
 * @return {sap.viz.ui5.types.Treemap_tooltip}
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Treemap#getToolTip
 * @function
 */


/**
 * Setter for the aggregated <code>toolTip</code>.
 * @param oToolTip {sap.viz.ui5.types.Treemap_tooltip}
 * @return {sap.viz.ui5.types.Treemap} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Treemap#setToolTip
 * @function
 */
	

/**
 * Destroys the toolTip in the aggregation 
 * named <code>toolTip</code>.
 * @return {sap.viz.ui5.types.Treemap} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Treemap#destroyToolTip
 * @function
 */


// Start of sap/viz/ui5/types/Treemap.js
sap.viz.ui5.types.Treemap.prototype.getBorder = function() {
  return this._getOrCreate("border");
}
sap.viz.ui5.types.Treemap.prototype.getAnimation = function() {
  return this._getOrCreate("animation");
}
sap.viz.ui5.types.Treemap.prototype.getToolTip = function() {
  return this._getOrCreate("toolTip");
}
