/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Line.
jQuery.sap.declare("sap.viz.ui5.types.Line");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");


/**
 * Constructor for a new ui5/types/Line.
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
 * <li>{@link #getOrientation orientation} : sap.viz.ui5.types.Line_orientation (default: sap.viz.ui5.types.Line_orientation.vertical)</li>
 * <li>{@link #getColorPalette colorPalette} : string[] (default: ['#748CB2','#9CC677','#EACF5E','#F9AD79','#D16A7C','#8873A2','#3A95B3','#B6D949','#FDD36C','#F47958','#A65084','#0063B1','#0DA841','#FCB71D','#F05620','#B22D6E','#3C368E','#8FB2CF','#95D4AB','#EAE98F','#F9BE92','#EC9A99','#BC98BD','#1EB7B2','#73C03C','#F48323','#EB271B','#D9B5CA','#AED1DA','#DFECB2','#FCDAB0','#F5BCB4'])</li>
 * <li>{@link #getPrimaryValuesColorPalette primaryValuesColorPalette} : string[] (default: ['#8FBADD','#B8D4E9','#7AAED6','#A3C7E3','#3D88C4','#66A1D0','#297CBE','#5295CA','#005BA3','#146FB7','#005395','#0063B1'])</li>
 * <li>{@link #getSecondaryValuesColorPalette secondaryValuesColorPalette} : string[] (default: ['#F6A09B','#F9C3C0','#F58E88','#F8B1AD','#F05B52','#F37D76','#EE4A40','#F16C64','#D92419','#ED382D','#C52117','#EB271B'])</li>
 * <li>{@link #getDrawingEffect drawingEffect} : sap.viz.ui5.types.Line_drawingEffect (default: sap.viz.ui5.types.Line_drawingEffect.normal)</li>
 * <li>{@link #getWidth width} : int (default: 2)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getToolTip toolTip} : sap.viz.ui5.types.Line_tooltip</li>
 * <li>{@link #getAnimation animation} : sap.viz.ui5.types.Line_animation</li>
 * <li>{@link #getHoverline hoverline} : sap.viz.ui5.types.Line_hoverline</li>
 * <li>{@link #getMarker marker} : sap.viz.ui5.types.Line_marker</li></ul>
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
 * Module ui5/types/Line
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
 * @name sap.viz.ui5.types.Line
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Line", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"orientation" : {type : "sap.viz.ui5.types.Line_orientation", group : "", defaultValue : sap.viz.ui5.types.Line_orientation.vertical, deprecated: true},
		"colorPalette" : {type : "string[]", group : "", defaultValue : ['#748CB2','#9CC677','#EACF5E','#F9AD79','#D16A7C','#8873A2','#3A95B3','#B6D949','#FDD36C','#F47958','#A65084','#0063B1','#0DA841','#FCB71D','#F05620','#B22D6E','#3C368E','#8FB2CF','#95D4AB','#EAE98F','#F9BE92','#EC9A99','#BC98BD','#1EB7B2','#73C03C','#F48323','#EB271B','#D9B5CA','#AED1DA','#DFECB2','#FCDAB0','#F5BCB4']},
		"primaryValuesColorPalette" : {type : "string[]", group : "", defaultValue : ['#8FBADD','#B8D4E9','#7AAED6','#A3C7E3','#3D88C4','#66A1D0','#297CBE','#5295CA','#005BA3','#146FB7','#005395','#0063B1']},
		"secondaryValuesColorPalette" : {type : "string[]", group : "", defaultValue : ['#F6A09B','#F9C3C0','#F58E88','#F8B1AD','#F05B52','#F37D76','#EE4A40','#F16C64','#D92419','#ED382D','#C52117','#EB271B']},
		"drawingEffect" : {type : "sap.viz.ui5.types.Line_drawingEffect", group : "", defaultValue : sap.viz.ui5.types.Line_drawingEffect.normal},
		"width" : {type : "int", group : "", defaultValue : 2}
	},
	aggregations : {
    	"toolTip" : {type : "sap.viz.ui5.types.Line_tooltip", multiple : false, deprecated: true}, 
    	"animation" : {type : "sap.viz.ui5.types.Line_animation", multiple : false}, 
    	"hoverline" : {type : "sap.viz.ui5.types.Line_hoverline", multiple : false}, 
    	"marker" : {type : "sap.viz.ui5.types.Line_marker", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Line with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Line.extend
 * @function
 */


/**
 * Getter for property <code>orientation</code>.
 * Set orientation of plot area.
 *
 * Default value is <code>vertical</code>
 *
 * @return {sap.viz.ui5.types.Line_orientation} the value of property <code>orientation</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Line#getOrientation
 * @function
 */

/**
 * Setter for property <code>orientation</code>.
 *
 * Default value is <code>vertical</code> 
 *
 * @param {sap.viz.ui5.types.Line_orientation} oOrientation  new value for property <code>orientation</code>
 * @return {sap.viz.ui5.types.Line} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Line#setOrientation
 * @function
 */


/**
 * Getter for property <code>colorPalette</code>.
 * Set color palette for non-dual chart. Or dual chart's color palette when MND is not fed on legend color.
 *
 * Default value is <code>#748CB2,#9CC677,#EACF5E,#F9AD79,#D16A7C,#8873A2,#3A95B3,#B6D949,#FDD36C,#F47958,#A65084,#0063B1,#0DA841,#FCB71D,#F05620,#B22D6E,#3C368E,#8FB2CF,#95D4AB,#EAE98F,#F9BE92,#EC9A99,#BC98BD,#1EB7B2,#73C03C,#F48323,#EB271B,#D9B5CA,#AED1DA,#DFECB2,#FCDAB0,#F5BCB4</code>
 *
 * @return {string[]} the value of property <code>colorPalette</code>
 * @public
 * @name sap.viz.ui5.types.Line#getColorPalette
 * @function
 */

/**
 * Setter for property <code>colorPalette</code>.
 *
 * Default value is <code>#748CB2,#9CC677,#EACF5E,#F9AD79,#D16A7C,#8873A2,#3A95B3,#B6D949,#FDD36C,#F47958,#A65084,#0063B1,#0DA841,#FCB71D,#F05620,#B22D6E,#3C368E,#8FB2CF,#95D4AB,#EAE98F,#F9BE92,#EC9A99,#BC98BD,#1EB7B2,#73C03C,#F48323,#EB271B,#D9B5CA,#AED1DA,#DFECB2,#FCDAB0,#F5BCB4</code> 
 *
 * @param {string[]} aColorPalette  new value for property <code>colorPalette</code>
 * @return {sap.viz.ui5.types.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Line#setColorPalette
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
 * @name sap.viz.ui5.types.Line#getPrimaryValuesColorPalette
 * @function
 */

/**
 * Setter for property <code>primaryValuesColorPalette</code>.
 *
 * Default value is <code>#8FBADD,#B8D4E9,#7AAED6,#A3C7E3,#3D88C4,#66A1D0,#297CBE,#5295CA,#005BA3,#146FB7,#005395,#0063B1</code> 
 *
 * @param {string[]} aPrimaryValuesColorPalette  new value for property <code>primaryValuesColorPalette</code>
 * @return {sap.viz.ui5.types.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Line#setPrimaryValuesColorPalette
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
 * @name sap.viz.ui5.types.Line#getSecondaryValuesColorPalette
 * @function
 */

/**
 * Setter for property <code>secondaryValuesColorPalette</code>.
 *
 * Default value is <code>#F6A09B,#F9C3C0,#F58E88,#F8B1AD,#F05B52,#F37D76,#EE4A40,#F16C64,#D92419,#ED382D,#C52117,#EB271B</code> 
 *
 * @param {string[]} aSecondaryValuesColorPalette  new value for property <code>secondaryValuesColorPalette</code>
 * @return {sap.viz.ui5.types.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Line#setSecondaryValuesColorPalette
 * @function
 */


/**
 * Getter for property <code>drawingEffect</code>.
 * Set drawing effect of plotArea.
 *
 * Default value is <code>normal</code>
 *
 * @return {sap.viz.ui5.types.Line_drawingEffect} the value of property <code>drawingEffect</code>
 * @public
 * @name sap.viz.ui5.types.Line#getDrawingEffect
 * @function
 */

/**
 * Setter for property <code>drawingEffect</code>.
 *
 * Default value is <code>normal</code> 
 *
 * @param {sap.viz.ui5.types.Line_drawingEffect} oDrawingEffect  new value for property <code>drawingEffect</code>
 * @return {sap.viz.ui5.types.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Line#setDrawingEffect
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
 * @name sap.viz.ui5.types.Line#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>2</code> 
 *
 * @param {int} iWidth  new value for property <code>width</code>
 * @return {sap.viz.ui5.types.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Line#setWidth
 * @function
 */


/**
 * Getter for aggregation <code>toolTip</code>.<br/>
 * Settings for tooltip related properties.
 * 
 * @return {sap.viz.ui5.types.Line_tooltip}
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Line#getToolTip
 * @function
 */


/**
 * Setter for the aggregated <code>toolTip</code>.
 * @param oToolTip {sap.viz.ui5.types.Line_tooltip}
 * @return {sap.viz.ui5.types.Line} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Line#setToolTip
 * @function
 */
	

/**
 * Destroys the toolTip in the aggregation 
 * named <code>toolTip</code>.
 * @return {sap.viz.ui5.types.Line} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Line#destroyToolTip
 * @function
 */


/**
 * Getter for aggregation <code>animation</code>.<br/>
 * Settings for animation related properties.
 * 
 * @return {sap.viz.ui5.types.Line_animation}
 * @public
 * @name sap.viz.ui5.types.Line#getAnimation
 * @function
 */


/**
 * Setter for the aggregated <code>animation</code>.
 * @param oAnimation {sap.viz.ui5.types.Line_animation}
 * @return {sap.viz.ui5.types.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Line#setAnimation
 * @function
 */
	

/**
 * Destroys the animation in the aggregation 
 * named <code>animation</code>.
 * @return {sap.viz.ui5.types.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Line#destroyAnimation
 * @function
 */


/**
 * Getter for aggregation <code>hoverline</code>.<br/>
 * Settings for hoverline properties.
 * 
 * @return {sap.viz.ui5.types.Line_hoverline}
 * @public
 * @name sap.viz.ui5.types.Line#getHoverline
 * @function
 */


/**
 * Setter for the aggregated <code>hoverline</code>.
 * @param oHoverline {sap.viz.ui5.types.Line_hoverline}
 * @return {sap.viz.ui5.types.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Line#setHoverline
 * @function
 */
	

/**
 * Destroys the hoverline in the aggregation 
 * named <code>hoverline</code>.
 * @return {sap.viz.ui5.types.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Line#destroyHoverline
 * @function
 */


/**
 * Getter for aggregation <code>marker</code>.<br/>
 * Settings for marker/data point graphics
 * 
 * @return {sap.viz.ui5.types.Line_marker}
 * @public
 * @name sap.viz.ui5.types.Line#getMarker
 * @function
 */


/**
 * Setter for the aggregated <code>marker</code>.
 * @param oMarker {sap.viz.ui5.types.Line_marker}
 * @return {sap.viz.ui5.types.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Line#setMarker
 * @function
 */
	

/**
 * Destroys the marker in the aggregation 
 * named <code>marker</code>.
 * @return {sap.viz.ui5.types.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Line#destroyMarker
 * @function
 */


// Start of sap/viz/ui5/types/Line.js
sap.viz.ui5.types.Line.prototype.getToolTip = function() {
  return this._getOrCreate("toolTip");
}
sap.viz.ui5.types.Line.prototype.getAnimation = function() {
  return this._getOrCreate("animation");
}
sap.viz.ui5.types.Line.prototype.getHoverline = function() {
  return this._getOrCreate("hoverline");
}
sap.viz.ui5.types.Line.prototype.getMarker = function() {
  return this._getOrCreate("marker");
}
