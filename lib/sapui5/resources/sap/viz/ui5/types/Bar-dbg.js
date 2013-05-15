/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Bar.
jQuery.sap.declare("sap.viz.ui5.types.Bar");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");

/**
 * Constructor for a new ui5/types/Bar.
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
 * <li>{@link #getPrimaryValuesColorPalette primaryValuesColorPalette} : string[] (default: ['#8FBADD','#B8D4E9','#7AAED6','#A3C7E3','#3D88C4','#66A1D0','#297CBE','#5295CA','#005BA3','#146FB7','#005395','#0063B1'])</li>
 * <li>{@link #getSecondaryValuesColorPalette secondaryValuesColorPalette} : string[] (default: ['#F6A09B','#F9C3C0','#F58E88','#F8B1AD','#F05B52','#F37D76','#EE4A40','#F16C64','#D92419','#ED382D','#C52117','#EB271B'])</li>
 * <li>{@link #getDrawingEffect drawingEffect} : sap.viz.ui5.types.Bar_drawingEffect (default: sap.viz.ui5.types.Bar_drawingEffect.normal)</li>
 * <li>{@link #getIsRoundCorner isRoundCorner} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getToolTip toolTip} : sap.viz.ui5.types.Bar_tooltip</li>
 * <li>{@link #getAnimation animation} : sap.viz.ui5.types.Bar_animation</li>
 * <li>{@link #getFillMode fillMode} : sap.viz.ui5.types.Bar_fillMode</li></ul>
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
 * Module ui5/types/Bar
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
 * @name sap.viz.ui5.types.Bar
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Bar", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"colorPalette" : {type : "string[]", group : "", defaultValue : ['#748CB2','#9CC677','#EACF5E','#F9AD79','#D16A7C','#8873A2','#3A95B3','#B6D949','#FDD36C','#F47958','#A65084','#0063B1','#0DA841','#FCB71D','#F05620','#B22D6E','#3C368E','#8FB2CF','#95D4AB','#EAE98F','#F9BE92','#EC9A99','#BC98BD','#1EB7B2','#73C03C','#F48323','#EB271B','#D9B5CA','#AED1DA','#DFECB2','#FCDAB0','#F5BCB4']},
		"primaryValuesColorPalette" : {type : "string[]", group : "", defaultValue : ['#8FBADD','#B8D4E9','#7AAED6','#A3C7E3','#3D88C4','#66A1D0','#297CBE','#5295CA','#005BA3','#146FB7','#005395','#0063B1']},
		"secondaryValuesColorPalette" : {type : "string[]", group : "", defaultValue : ['#F6A09B','#F9C3C0','#F58E88','#F8B1AD','#F05B52','#F37D76','#EE4A40','#F16C64','#D92419','#ED382D','#C52117','#EB271B']},
		"drawingEffect" : {type : "sap.viz.ui5.types.Bar_drawingEffect", group : "", defaultValue : sap.viz.ui5.types.Bar_drawingEffect.normal},
		"isRoundCorner" : {type : "boolean", group : "", defaultValue : false}
	},
	aggregations : {
    	"toolTip" : {type : "sap.viz.ui5.types.Bar_tooltip", multiple : false}, 
    	"animation" : {type : "sap.viz.ui5.types.Bar_animation", multiple : false}, 
    	"fillMode" : {type : "sap.viz.ui5.types.Bar_fillMode", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Bar with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Bar.extend
 * @function
 */


/**
 * Getter for property <code>colorPalette</code>.
 * Set color palette for non_dual chart. Or dual chart's color palette if MND is on Category axis.
 *
 * Default value is <code>#748CB2,#9CC677,#EACF5E,#F9AD79,#D16A7C,#8873A2,#3A95B3,#B6D949,#FDD36C,#F47958,#A65084,#0063B1,#0DA841,#FCB71D,#F05620,#B22D6E,#3C368E,#8FB2CF,#95D4AB,#EAE98F,#F9BE92,#EC9A99,#BC98BD,#1EB7B2,#73C03C,#F48323,#EB271B,#D9B5CA,#AED1DA,#DFECB2,#FCDAB0,#F5BCB4</code>
 *
 * @return {string[]} the value of property <code>colorPalette</code>
 * @public
 * @name sap.viz.ui5.types.Bar#getColorPalette
 * @function
 */


/**
 * Setter for property <code>colorPalette</code>.
 *
 * Default value is <code>#748CB2,#9CC677,#EACF5E,#F9AD79,#D16A7C,#8873A2,#3A95B3,#B6D949,#FDD36C,#F47958,#A65084,#0063B1,#0DA841,#FCB71D,#F05620,#B22D6E,#3C368E,#8FB2CF,#95D4AB,#EAE98F,#F9BE92,#EC9A99,#BC98BD,#1EB7B2,#73C03C,#F48323,#EB271B,#D9B5CA,#AED1DA,#DFECB2,#FCDAB0,#F5BCB4</code> 
 *
 * @param {string[]} aColorPalette  new value for property <code>colorPalette</code>
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bar#setColorPalette
 * @function
 */

/**
 * Getter for property <code>primaryValuesColorPalette</code>.
 * Set axis 1 color palette for dual chart.
 *
 * Default value is <code>#8FBADD,#B8D4E9,#7AAED6,#A3C7E3,#3D88C4,#66A1D0,#297CBE,#5295CA,#005BA3,#146FB7,#005395,#0063B1</code>
 *
 * @return {string[]} the value of property <code>primaryValuesColorPalette</code>
 * @public
 * @name sap.viz.ui5.types.Bar#getPrimaryValuesColorPalette
 * @function
 */


/**
 * Setter for property <code>primaryValuesColorPalette</code>.
 *
 * Default value is <code>#8FBADD,#B8D4E9,#7AAED6,#A3C7E3,#3D88C4,#66A1D0,#297CBE,#5295CA,#005BA3,#146FB7,#005395,#0063B1</code> 
 *
 * @param {string[]} aPrimaryValuesColorPalette  new value for property <code>primaryValuesColorPalette</code>
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bar#setPrimaryValuesColorPalette
 * @function
 */

/**
 * Getter for property <code>secondaryValuesColorPalette</code>.
 * Set axis 2 color palette for dual chart.
 *
 * Default value is <code>#F6A09B,#F9C3C0,#F58E88,#F8B1AD,#F05B52,#F37D76,#EE4A40,#F16C64,#D92419,#ED382D,#C52117,#EB271B</code>
 *
 * @return {string[]} the value of property <code>secondaryValuesColorPalette</code>
 * @public
 * @name sap.viz.ui5.types.Bar#getSecondaryValuesColorPalette
 * @function
 */


/**
 * Setter for property <code>secondaryValuesColorPalette</code>.
 *
 * Default value is <code>#F6A09B,#F9C3C0,#F58E88,#F8B1AD,#F05B52,#F37D76,#EE4A40,#F16C64,#D92419,#ED382D,#C52117,#EB271B</code> 
 *
 * @param {string[]} aSecondaryValuesColorPalette  new value for property <code>secondaryValuesColorPalette</code>
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bar#setSecondaryValuesColorPalette
 * @function
 */

/**
 * Getter for property <code>drawingEffect</code>.
 * Set drawing effect of XY.
 *
 * Default value is <code>normal</code>
 *
 * @return {sap.viz.ui5.types.Bar_drawingEffect} the value of property <code>drawingEffect</code>
 * @public
 * @name sap.viz.ui5.types.Bar#getDrawingEffect
 * @function
 */


/**
 * Setter for property <code>drawingEffect</code>.
 *
 * Default value is <code>normal</code> 
 *
 * @param {sap.viz.ui5.types.Bar_drawingEffect} oDrawingEffect  new value for property <code>drawingEffect</code>
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bar#setDrawingEffect
 * @function
 */

/**
 * Getter for property <code>isRoundCorner</code>.
 * Set enable/disable round corner of bar.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>isRoundCorner</code>
 * @public
 * @name sap.viz.ui5.types.Bar#getIsRoundCorner
 * @function
 */


/**
 * Setter for property <code>isRoundCorner</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bIsRoundCorner  new value for property <code>isRoundCorner</code>
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bar#setIsRoundCorner
 * @function
 */
	
/**
 * Getter for aggregation <code>toolTip</code>.<br/>
 * Settings for tooltip related properties.
 * 
 * @return {sap.viz.ui5.types.Bar_tooltip}
 * @public
 * @name sap.viz.ui5.types.Bar#getToolTip
 * @function
 */

/**
 * Setter for the aggregated <code>toolTip</code>.
 * @param oToolTip {sap.viz.ui5.types.Bar_tooltip}
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bar#setToolTip
 * @function
 */


/**
 * Destroys the toolTip in the aggregation 
 * named <code>toolTip</code>.
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bar#destroyToolTip
 * @function
 */
	
/**
 * Getter for aggregation <code>animation</code>.<br/>
 * Settings for animation of plot area.
 * 
 * @return {sap.viz.ui5.types.Bar_animation}
 * @public
 * @name sap.viz.ui5.types.Bar#getAnimation
 * @function
 */

/**
 * Setter for the aggregated <code>animation</code>.
 * @param oAnimation {sap.viz.ui5.types.Bar_animation}
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bar#setAnimation
 * @function
 */


/**
 * Destroys the animation in the aggregation 
 * named <code>animation</code>.
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bar#destroyAnimation
 * @function
 */
	
/**
 * Getter for aggregation <code>fillMode</code>.<br/>
 * Settings for tooltip related properties.
 * 
 * @return {sap.viz.ui5.types.Bar_fillMode}
 * @public
 * @name sap.viz.ui5.types.Bar#getFillMode
 * @function
 */

/**
 * Setter for the aggregated <code>fillMode</code>.
 * @param oFillMode {sap.viz.ui5.types.Bar_fillMode}
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bar#setFillMode
 * @function
 */


/**
 * Destroys the fillMode in the aggregation 
 * named <code>fillMode</code>.
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bar#destroyFillMode
 * @function
 */

// Start of sap/viz/ui5/types/Bar.js
sap.viz.ui5.types.Bar.prototype.getToolTip = function() {
  return this._getOrCreate("toolTip");
}
sap.viz.ui5.types.Bar.prototype.getAnimation = function() {
  return this._getOrCreate("animation");
}
sap.viz.ui5.types.Bar.prototype.getFillMode = function() {
  return this._getOrCreate("fillMode");
}
