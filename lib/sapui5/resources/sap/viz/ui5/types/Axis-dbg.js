/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Axis.
jQuery.sap.declare("sap.viz.ui5.types.Axis");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");

/**
 * Constructor for a new ui5/types/Axis.
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
 * <li>{@link #getIsIndependentMode isIndependentMode} : boolean (default: false)</li>
 * <li>{@link #getIsPercentMode isPercentMode} : boolean (default: false)</li>
 * <li>{@link #getLineSize lineSize} : string (default: '1')</li>
 * <li>{@link #getColor color} : string (default: '#6c6c6c')</li>
 * <li>{@link #getType type} : sap.viz.ui5.types.Axis_type (default: sap.viz.ui5.types.Axis_type.value)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getPosition position} : sap.viz.ui5.types.Axis_position (default: sap.viz.ui5.types.Axis_position.bottom)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTitle title} : sap.viz.ui5.types.Axis_title</li>
 * <li>{@link #getGridline gridline} : sap.viz.ui5.types.Axis_gridline</li>
 * <li>{@link #getAxisline axisline} : sap.viz.ui5.types.Axis_axisline</li>
 * <li>{@link #getLabel label} : sap.viz.ui5.types.Axis_label</li>
 * <li>{@link #getScale scale} : sap.viz.ui5.types.Axis_scale</li>
 * <li>{@link #getLayoutInfo layoutInfo} : sap.viz.ui5.types.Axis_layoutInfo</li></ul>
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
 * Module ui5/types/Axis
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
 * @name sap.viz.ui5.types.Axis
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Axis", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"isIndependentMode" : {type : "boolean", group : "", defaultValue : false},
		"isPercentMode" : {type : "boolean", group : "", defaultValue : false},
		"lineSize" : {type : "string", group : "", defaultValue : '1'},
		"color" : {type : "string", group : "", defaultValue : '#6c6c6c'},
		"type" : {type : "sap.viz.ui5.types.Axis_type", group : "", defaultValue : sap.viz.ui5.types.Axis_type.value},
		"visible" : {type : "boolean", group : "", defaultValue : true},
		"position" : {type : "sap.viz.ui5.types.Axis_position", group : "", defaultValue : sap.viz.ui5.types.Axis_position.bottom}
	},
	aggregations : {
    	"title" : {type : "sap.viz.ui5.types.Axis_title", multiple : false}, 
    	"gridline" : {type : "sap.viz.ui5.types.Axis_gridline", multiple : false}, 
    	"axisline" : {type : "sap.viz.ui5.types.Axis_axisline", multiple : false}, 
    	"label" : {type : "sap.viz.ui5.types.Axis_label", multiple : false}, 
    	"scale" : {type : "sap.viz.ui5.types.Axis_scale", multiple : false}, 
    	"layoutInfo" : {type : "sap.viz.ui5.types.Axis_layoutInfo", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Axis with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Axis.extend
 * @function
 */


/**
 * Getter for property <code>isIndependentMode</code>.
 * Set whether axis works on independent mode, currently it is used specially for boxplot chart.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>isIndependentMode</code>
 * @public
 * @name sap.viz.ui5.types.Axis#getIsIndependentMode
 * @function
 */


/**
 * Setter for property <code>isIndependentMode</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bIsIndependentMode  new value for property <code>isIndependentMode</code>
 * @return {sap.viz.ui5.types.Axis} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis#setIsIndependentMode
 * @function
 */

/**
 * Getter for property <code>isPercentMode</code>.
 * Show the label 0.1 as 10
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>isPercentMode</code>
 * @public
 * @name sap.viz.ui5.types.Axis#getIsPercentMode
 * @function
 */


/**
 * Setter for property <code>isPercentMode</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bIsPercentMode  new value for property <code>isPercentMode</code>
 * @return {sap.viz.ui5.types.Axis} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis#setIsPercentMode
 * @function
 */

/**
 * Getter for property <code>lineSize</code>.
 * Set line size of axis.
 *
 * Default value is <code>1</code>
 *
 * @return {string} the value of property <code>lineSize</code>
 * @public
 * @name sap.viz.ui5.types.Axis#getLineSize
 * @function
 */


/**
 * Setter for property <code>lineSize</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {string} sLineSize  new value for property <code>lineSize</code>
 * @return {sap.viz.ui5.types.Axis} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis#setLineSize
 * @function
 */

/**
 * Getter for property <code>color</code>.
 * Set color of axisline.
 *
 * Default value is <code>#6c6c6c</code>
 *
 * @return {string} the value of property <code>color</code>
 * @public
 * @name sap.viz.ui5.types.Axis#getColor
 * @function
 */


/**
 * Setter for property <code>color</code>.
 *
 * Default value is <code>#6c6c6c</code> 
 *
 * @param {string} sColor  new value for property <code>color</code>
 * @return {sap.viz.ui5.types.Axis} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis#setColor
 * @function
 */

/**
 * Getter for property <code>type</code>.
 * Set type of axis.
 *
 * Default value is <code>value</code>
 *
 * @return {sap.viz.ui5.types.Axis_type} the value of property <code>type</code>
 * @public
 * @name sap.viz.ui5.types.Axis#getType
 * @function
 */


/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>value</code> 
 *
 * @param {sap.viz.ui5.types.Axis_type} oType  new value for property <code>type</code>
 * @return {sap.viz.ui5.types.Axis} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis#setType
 * @function
 */

/**
 * Getter for property <code>visible</code>.
 * Set visibility of axis.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.viz.ui5.types.Axis#getVisible
 * @function
 */


/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.viz.ui5.types.Axis} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis#setVisible
 * @function
 */

/**
 * Getter for property <code>position</code>.
 * Set position of axis.
 *
 * Default value is <code>bottom</code>
 *
 * @return {sap.viz.ui5.types.Axis_position} the value of property <code>position</code>
 * @public
 * @name sap.viz.ui5.types.Axis#getPosition
 * @function
 */


/**
 * Setter for property <code>position</code>.
 *
 * Default value is <code>bottom</code> 
 *
 * @param {sap.viz.ui5.types.Axis_position} oPosition  new value for property <code>position</code>
 * @return {sap.viz.ui5.types.Axis} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis#setPosition
 * @function
 */
	
/**
 * Getter for aggregation <code>title</code>.<br/>
 * Settings for axis title.
 * 
 * @return {sap.viz.ui5.types.Axis_title}
 * @public
 * @name sap.viz.ui5.types.Axis#getTitle
 * @function
 */

/**
 * Setter for the aggregated <code>title</code>.
 * @param oTitle {sap.viz.ui5.types.Axis_title}
 * @return {sap.viz.ui5.types.Axis} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis#setTitle
 * @function
 */


/**
 * Destroys the title in the aggregation 
 * named <code>title</code>.
 * @return {sap.viz.ui5.types.Axis} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis#destroyTitle
 * @function
 */
	
/**
 * Getter for aggregation <code>gridline</code>.<br/>
 * Settings for axis gridline.
 * 
 * @return {sap.viz.ui5.types.Axis_gridline}
 * @public
 * @name sap.viz.ui5.types.Axis#getGridline
 * @function
 */

/**
 * Setter for the aggregated <code>gridline</code>.
 * @param oGridline {sap.viz.ui5.types.Axis_gridline}
 * @return {sap.viz.ui5.types.Axis} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis#setGridline
 * @function
 */


/**
 * Destroys the gridline in the aggregation 
 * named <code>gridline</code>.
 * @return {sap.viz.ui5.types.Axis} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis#destroyGridline
 * @function
 */
	
/**
 * Getter for aggregation <code>axisline</code>.<br/>
 * Settings for axisline.
 * 
 * @return {sap.viz.ui5.types.Axis_axisline}
 * @public
 * @name sap.viz.ui5.types.Axis#getAxisline
 * @function
 */

/**
 * Setter for the aggregated <code>axisline</code>.
 * @param oAxisline {sap.viz.ui5.types.Axis_axisline}
 * @return {sap.viz.ui5.types.Axis} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis#setAxisline
 * @function
 */


/**
 * Destroys the axisline in the aggregation 
 * named <code>axisline</code>.
 * @return {sap.viz.ui5.types.Axis} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis#destroyAxisline
 * @function
 */
	
/**
 * Getter for aggregation <code>label</code>.<br/>
 * Settings for axis label.
 * 
 * @return {sap.viz.ui5.types.Axis_label}
 * @public
 * @name sap.viz.ui5.types.Axis#getLabel
 * @function
 */

/**
 * Setter for the aggregated <code>label</code>.
 * @param oLabel {sap.viz.ui5.types.Axis_label}
 * @return {sap.viz.ui5.types.Axis} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis#setLabel
 * @function
 */


/**
 * Destroys the label in the aggregation 
 * named <code>label</code>.
 * @return {sap.viz.ui5.types.Axis} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis#destroyLabel
 * @function
 */
	
/**
 * Getter for aggregation <code>scale</code>.<br/>
 * Set scale for yAxis.
 * 
 * @return {sap.viz.ui5.types.Axis_scale}
 * @public
 * @name sap.viz.ui5.types.Axis#getScale
 * @function
 */

/**
 * Setter for the aggregated <code>scale</code>.
 * @param oScale {sap.viz.ui5.types.Axis_scale}
 * @return {sap.viz.ui5.types.Axis} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis#setScale
 * @function
 */


/**
 * Destroys the scale in the aggregation 
 * named <code>scale</code>.
 * @return {sap.viz.ui5.types.Axis} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis#destroyScale
 * @function
 */
	
/**
 * Getter for aggregation <code>layoutInfo</code>.<br/>
 * Settings layoutInfo for axis.
 * 
 * @return {sap.viz.ui5.types.Axis_layoutInfo}
 * @public
 * @name sap.viz.ui5.types.Axis#getLayoutInfo
 * @function
 */

/**
 * Setter for the aggregated <code>layoutInfo</code>.
 * @param oLayoutInfo {sap.viz.ui5.types.Axis_layoutInfo}
 * @return {sap.viz.ui5.types.Axis} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis#setLayoutInfo
 * @function
 */


/**
 * Destroys the layoutInfo in the aggregation 
 * named <code>layoutInfo</code>.
 * @return {sap.viz.ui5.types.Axis} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Axis#destroyLayoutInfo
 * @function
 */

// Start of sap/viz/ui5/types/Axis.js
sap.viz.ui5.types.Axis.prototype.getTitle = function() {
  return this._getOrCreate("title");
}
sap.viz.ui5.types.Axis.prototype.getGridline = function() {
  return this._getOrCreate("gridline");
}
sap.viz.ui5.types.Axis.prototype.getAxisline = function() {
  return this._getOrCreate("axisline");
}
sap.viz.ui5.types.Axis.prototype.getLabel = function() {
  return this._getOrCreate("label");
}
sap.viz.ui5.types.Axis.prototype.getScale = function() {
  return this._getOrCreate("scale");
}
sap.viz.ui5.types.Axis.prototype.getLayoutInfo = function() {
  return this._getOrCreate("layoutInfo");
}
