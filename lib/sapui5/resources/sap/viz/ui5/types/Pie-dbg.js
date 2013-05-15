/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Pie.
jQuery.sap.declare("sap.viz.ui5.types.Pie");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");

/**
 * Constructor for a new ui5/types/Pie.
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
 * <li>{@link #getColorPalette colorPalette} : string[] (default: ['#748CB2','#9CC677','#EACF5E','#F9AD79','#D16A7C','#8873A2','#3A95B3','#B6D949','#FDD36C','#F47958','#A65084','#0063B1','#0DA841','#FCB71D','#F05620','#B22D6E','#3C368E','#8FB2CF','#95D4AB','#EAE98F','#F9BE92','#EC9A99','#BC98BD','#1EB7B2','#73C03C','#F48323','#EB271B','#D9B5CA','#AED1DA','#DFECB2','#FCDAB0','#F5BCB4'])</li>
 * <li>{@link #getIsDonut isDonut} : boolean (default: false)</li>
 * <li>{@link #getIsGeoPie isGeoPie} : boolean (default: false)</li>
 * <li>{@link #getValign valign} : sap.viz.ui5.types.Pie_valign (default: sap.viz.ui5.types.Pie_valign.top)</li>
 * <li>{@link #getDrawingEffect drawingEffect} : sap.viz.ui5.types.Pie_drawingEffect (default: sap.viz.ui5.types.Pie_drawingEffect.normal)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getAnimation animation} : sap.viz.ui5.types.Pie_animation</li>
 * <li>{@link #getToolTip toolTip} : sap.viz.ui5.types.Pie_tooltip</li></ul>
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
 * Module ui5/types/Pie
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
 * @name sap.viz.ui5.types.Pie
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Pie", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"colorPalette" : {type : "string[]", group : "", defaultValue : ['#748CB2','#9CC677','#EACF5E','#F9AD79','#D16A7C','#8873A2','#3A95B3','#B6D949','#FDD36C','#F47958','#A65084','#0063B1','#0DA841','#FCB71D','#F05620','#B22D6E','#3C368E','#8FB2CF','#95D4AB','#EAE98F','#F9BE92','#EC9A99','#BC98BD','#1EB7B2','#73C03C','#F48323','#EB271B','#D9B5CA','#AED1DA','#DFECB2','#FCDAB0','#F5BCB4']},
		"isDonut" : {type : "boolean", group : "", defaultValue : false},
		"isGeoPie" : {type : "boolean", group : "", defaultValue : false},
		"valign" : {type : "sap.viz.ui5.types.Pie_valign", group : "", defaultValue : sap.viz.ui5.types.Pie_valign.top},
		"drawingEffect" : {type : "sap.viz.ui5.types.Pie_drawingEffect", group : "", defaultValue : sap.viz.ui5.types.Pie_drawingEffect.normal}
	},
	aggregations : {
    	"animation" : {type : "sap.viz.ui5.types.Pie_animation", multiple : false}, 
    	"toolTip" : {type : "sap.viz.ui5.types.Pie_tooltip", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Pie with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Pie.extend
 * @function
 */


/**
 * Getter for property <code>colorPalette</code>.
 * Set the color palette for sectors.
 *
 * Default value is <code>#748CB2,#9CC677,#EACF5E,#F9AD79,#D16A7C,#8873A2,#3A95B3,#B6D949,#FDD36C,#F47958,#A65084,#0063B1,#0DA841,#FCB71D,#F05620,#B22D6E,#3C368E,#8FB2CF,#95D4AB,#EAE98F,#F9BE92,#EC9A99,#BC98BD,#1EB7B2,#73C03C,#F48323,#EB271B,#D9B5CA,#AED1DA,#DFECB2,#FCDAB0,#F5BCB4</code>
 *
 * @return {string[]} the value of property <code>colorPalette</code>
 * @public
 * @name sap.viz.ui5.types.Pie#getColorPalette
 * @function
 */


/**
 * Setter for property <code>colorPalette</code>.
 *
 * Default value is <code>#748CB2,#9CC677,#EACF5E,#F9AD79,#D16A7C,#8873A2,#3A95B3,#B6D949,#FDD36C,#F47958,#A65084,#0063B1,#0DA841,#FCB71D,#F05620,#B22D6E,#3C368E,#8FB2CF,#95D4AB,#EAE98F,#F9BE92,#EC9A99,#BC98BD,#1EB7B2,#73C03C,#F48323,#EB271B,#D9B5CA,#AED1DA,#DFECB2,#FCDAB0,#F5BCB4</code> 
 *
 * @param {string[]} aColorPalette  new value for property <code>colorPalette</code>
 * @return {sap.viz.ui5.types.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Pie#setColorPalette
 * @function
 */

/**
 * Getter for property <code>isDonut</code>.
 * Set whether is a donut or pie.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>isDonut</code>
 * @public
 * @name sap.viz.ui5.types.Pie#getIsDonut
 * @function
 */


/**
 * Setter for property <code>isDonut</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bIsDonut  new value for property <code>isDonut</code>
 * @return {sap.viz.ui5.types.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Pie#setIsDonut
 * @function
 */

/**
 * Getter for property <code>isGeoPie</code>.
 * Set whether is a geo pie.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>isGeoPie</code>
 * @public
 * @name sap.viz.ui5.types.Pie#getIsGeoPie
 * @function
 */


/**
 * Setter for property <code>isGeoPie</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bIsGeoPie  new value for property <code>isGeoPie</code>
 * @return {sap.viz.ui5.types.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Pie#setIsGeoPie
 * @function
 */

/**
 * Getter for property <code>valign</code>.
 * Set vertical aligment.
 *
 * Default value is <code>top</code>
 *
 * @return {sap.viz.ui5.types.Pie_valign} the value of property <code>valign</code>
 * @public
 * @name sap.viz.ui5.types.Pie#getValign
 * @function
 */


/**
 * Setter for property <code>valign</code>.
 *
 * Default value is <code>top</code> 
 *
 * @param {sap.viz.ui5.types.Pie_valign} oValign  new value for property <code>valign</code>
 * @return {sap.viz.ui5.types.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Pie#setValign
 * @function
 */

/**
 * Getter for property <code>drawingEffect</code>.
 * Set drawing effect of Pie.
 *
 * Default value is <code>normal</code>
 *
 * @return {sap.viz.ui5.types.Pie_drawingEffect} the value of property <code>drawingEffect</code>
 * @public
 * @name sap.viz.ui5.types.Pie#getDrawingEffect
 * @function
 */


/**
 * Setter for property <code>drawingEffect</code>.
 *
 * Default value is <code>normal</code> 
 *
 * @param {sap.viz.ui5.types.Pie_drawingEffect} oDrawingEffect  new value for property <code>drawingEffect</code>
 * @return {sap.viz.ui5.types.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Pie#setDrawingEffect
 * @function
 */
	
/**
 * Getter for aggregation <code>animation</code>.<br/>
 * Settings for animation of plot area.
 * 
 * @return {sap.viz.ui5.types.Pie_animation}
 * @public
 * @name sap.viz.ui5.types.Pie#getAnimation
 * @function
 */

/**
 * Setter for the aggregated <code>animation</code>.
 * @param oAnimation {sap.viz.ui5.types.Pie_animation}
 * @return {sap.viz.ui5.types.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Pie#setAnimation
 * @function
 */


/**
 * Destroys the animation in the aggregation 
 * named <code>animation</code>.
 * @return {sap.viz.ui5.types.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Pie#destroyAnimation
 * @function
 */
	
/**
 * Getter for aggregation <code>toolTip</code>.<br/>
 * Settings for tooltip related properties.
 * 
 * @return {sap.viz.ui5.types.Pie_tooltip}
 * @public
 * @name sap.viz.ui5.types.Pie#getToolTip
 * @function
 */

/**
 * Setter for the aggregated <code>toolTip</code>.
 * @param oToolTip {sap.viz.ui5.types.Pie_tooltip}
 * @return {sap.viz.ui5.types.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Pie#setToolTip
 * @function
 */


/**
 * Destroys the toolTip in the aggregation 
 * named <code>toolTip</code>.
 * @return {sap.viz.ui5.types.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Pie#destroyToolTip
 * @function
 */

// Start of sap/viz/ui5/types/Pie.js
sap.viz.ui5.types.Pie.prototype.getAnimation = function() {
  return this._getOrCreate("animation");
}
sap.viz.ui5.types.Pie.prototype.getToolTip = function() {
  return this._getOrCreate("toolTip");
}
