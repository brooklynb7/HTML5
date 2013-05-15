/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.controller.Interaction.
jQuery.sap.declare("sap.viz.ui5.types.controller.Interaction");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");

/**
 * Constructor for a new ui5/types/controller/Interaction.
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
 * <li>{@link #getSupportedEventNames supportedEventNames} : string[] (default: ['mouseup','mousemove','mouseout','mouseover','touchstart'])</li>
 * <li>{@link #getEnableMouseMove enableMouseMove} : boolean (default: true)</li>
 * <li>{@link #getEnableMouseOver enableMouseOver} : boolean (default: true)</li>
 * <li>{@link #getEnableMouseOut enableMouseOut} : boolean (default: true)</li>
 * <li>{@link #getSupportLassoEvent supportLassoEvent} : boolean (default: true)</li>
 * <li>{@link #getHoldSelection holdSelection} : boolean (default: false)</li>
 * <li>{@link #getPreserveSelectionWhenDragging preserveSelectionWhenDragging} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSelectability selectability} : sap.viz.ui5.types.controller.Interaction_selectability</li></ul>
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
 * Module ui5/types/controller/Interaction
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
 * @name sap.viz.ui5.types.controller.Interaction
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.controller.Interaction", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"supportedEventNames" : {type : "string[]", group : "", defaultValue : ['mouseup','mousemove','mouseout','mouseover','touchstart']},
		"enableMouseMove" : {type : "boolean", group : "", defaultValue : true},
		"enableMouseOver" : {type : "boolean", group : "", defaultValue : true},
		"enableMouseOut" : {type : "boolean", group : "", defaultValue : true},
		"supportLassoEvent" : {type : "boolean", group : "", defaultValue : true},
		"holdSelection" : {type : "boolean", group : "", defaultValue : false},
		"preserveSelectionWhenDragging" : {type : "boolean", group : "", defaultValue : false}
	},
	aggregations : {
    	"selectability" : {type : "sap.viz.ui5.types.controller.Interaction_selectability", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.controller.Interaction with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.controller.Interaction.extend
 * @function
 */


/**
 * Getter for property <code>supportedEventNames</code>.
 * Set supported event names.
 *
 * Default value is <code>mouseup,mousemove,mouseout,mouseover,touchstart</code>
 *
 * @return {string[]} the value of property <code>supportedEventNames</code>
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#getSupportedEventNames
 * @function
 */


/**
 * Setter for property <code>supportedEventNames</code>.
 *
 * Default value is <code>mouseup,mousemove,mouseout,mouseover,touchstart</code> 
 *
 * @param {string[]} aSupportedEventNames  new value for property <code>supportedEventNames</code>
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#setSupportedEventNames
 * @function
 */

/**
 * Getter for property <code>enableMouseMove</code>.
 * Set whether mouse move is enabled.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableMouseMove</code>
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#getEnableMouseMove
 * @function
 */


/**
 * Setter for property <code>enableMouseMove</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableMouseMove  new value for property <code>enableMouseMove</code>
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#setEnableMouseMove
 * @function
 */

/**
 * Getter for property <code>enableMouseOver</code>.
 * Set whether mouse over is enabled.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableMouseOver</code>
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#getEnableMouseOver
 * @function
 */


/**
 * Setter for property <code>enableMouseOver</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableMouseOver  new value for property <code>enableMouseOver</code>
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#setEnableMouseOver
 * @function
 */

/**
 * Getter for property <code>enableMouseOut</code>.
 * Set whether mouse out is enabled.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableMouseOut</code>
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#getEnableMouseOut
 * @function
 */


/**
 * Setter for property <code>enableMouseOut</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableMouseOut  new value for property <code>enableMouseOut</code>
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#setEnableMouseOut
 * @function
 */

/**
 * Getter for property <code>supportLassoEvent</code>.
 * Set whether support lasso event is enabled.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>supportLassoEvent</code>
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#getSupportLassoEvent
 * @function
 */


/**
 * Setter for property <code>supportLassoEvent</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bSupportLassoEvent  new value for property <code>supportLassoEvent</code>
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#setSupportLassoEvent
 * @function
 */

/**
 * Getter for property <code>holdSelection</code>.
 * Set whether hold selection is enabled.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>holdSelection</code>
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#getHoldSelection
 * @function
 */


/**
 * Setter for property <code>holdSelection</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bHoldSelection  new value for property <code>holdSelection</code>
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#setHoldSelection
 * @function
 */

/**
 * Getter for property <code>preserveSelectionWhenDragging</code>.
 * Set whether preserve selection when dragging is enabled.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>preserveSelectionWhenDragging</code>
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#getPreserveSelectionWhenDragging
 * @function
 */


/**
 * Setter for property <code>preserveSelectionWhenDragging</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bPreserveSelectionWhenDragging  new value for property <code>preserveSelectionWhenDragging</code>
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#setPreserveSelectionWhenDragging
 * @function
 */
	
/**
 * Getter for aggregation <code>selectability</code>.<br/>
 * Settings for selectability.
 * 
 * @return {sap.viz.ui5.types.controller.Interaction_selectability}
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#getSelectability
 * @function
 */

/**
 * Setter for the aggregated <code>selectability</code>.
 * @param oSelectability {sap.viz.ui5.types.controller.Interaction_selectability}
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#setSelectability
 * @function
 */


/**
 * Destroys the selectability in the aggregation 
 * named <code>selectability</code>.
 * @return {sap.viz.ui5.types.controller.Interaction} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.controller.Interaction#destroySelectability
 * @function
 */

// Start of sap/viz/ui5/types/controller/Interaction.js
sap.viz.ui5.types.controller.Interaction.prototype.getSelectability = function() {
  return this._getOrCreate("selectability");
}
