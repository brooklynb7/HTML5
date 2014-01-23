/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.RootContainer_layout.
jQuery.sap.declare("sap.viz.ui5.types.RootContainer_layout");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");


/**
 * Constructor for a new ui5/types/RootContainer_layout.
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
 * <li>{@link #getAdjustPolicy adjustPolicy} : string</li>
 * <li>{@link #getPadding padding} : int (default: 24)</li>
 * <li>{@link #getPaddingTop paddingTop} : int</li>
 * <li>{@link #getPaddingLeft paddingLeft} : int</li>
 * <li>{@link #getPaddingRight paddingRight} : int</li>
 * <li>{@link #getPaddingBottom paddingBottom} : int</li>
 * <li>{@link #getVgap vgap} : int (default: 8)</li>
 * <li>{@link #getHgap hgap} : int (default: 8)</li></ul>
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
 * Layout properties
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
 * @name sap.viz.ui5.types.RootContainer_layout
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.RootContainer_layout", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"adjustPolicy" : {type : "string", group : "", defaultValue : null, deprecated: true},
		"padding" : {type : "int", group : "", defaultValue : 24},
		"paddingTop" : {type : "int", group : "", defaultValue : null},
		"paddingLeft" : {type : "int", group : "", defaultValue : null},
		"paddingRight" : {type : "int", group : "", defaultValue : null},
		"paddingBottom" : {type : "int", group : "", defaultValue : null},
		"vgap" : {type : "int", group : "", defaultValue : 8, deprecated: true},
		"hgap" : {type : "int", group : "", defaultValue : 8, deprecated: true}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.RootContainer_layout with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.RootContainer_layout.extend
 * @function
 */


/**
 * Getter for property <code>adjustPolicy</code>.
 * Indicates the layout adjust policy.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>adjustPolicy</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.RootContainer_layout#getAdjustPolicy
 * @function
 */

/**
 * Setter for property <code>adjustPolicy</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAdjustPolicy  new value for property <code>adjustPolicy</code>
 * @return {sap.viz.ui5.types.RootContainer_layout} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.RootContainer_layout#setAdjustPolicy
 * @function
 */


/**
 * Getter for property <code>padding</code>.
 * Universal padding value settings. The single value will be applied to all laterals of the chart area. Explicit settings for each edge are supported.
 *
 * Default value is <code>24</code>
 *
 * @return {int} the value of property <code>padding</code>
 * @public
 * @name sap.viz.ui5.types.RootContainer_layout#getPadding
 * @function
 */

/**
 * Setter for property <code>padding</code>.
 *
 * Default value is <code>24</code> 
 *
 * @param {int} iPadding  new value for property <code>padding</code>
 * @return {sap.viz.ui5.types.RootContainer_layout} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.RootContainer_layout#setPadding
 * @function
 */


/**
 * Getter for property <code>paddingTop</code>.
 * Padding value for the top side
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>paddingTop</code>
 * @public
 * @name sap.viz.ui5.types.RootContainer_layout#getPaddingTop
 * @function
 */

/**
 * Setter for property <code>paddingTop</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iPaddingTop  new value for property <code>paddingTop</code>
 * @return {sap.viz.ui5.types.RootContainer_layout} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.RootContainer_layout#setPaddingTop
 * @function
 */


/**
 * Getter for property <code>paddingLeft</code>.
 * Padding value for the left side
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>paddingLeft</code>
 * @public
 * @name sap.viz.ui5.types.RootContainer_layout#getPaddingLeft
 * @function
 */

/**
 * Setter for property <code>paddingLeft</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iPaddingLeft  new value for property <code>paddingLeft</code>
 * @return {sap.viz.ui5.types.RootContainer_layout} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.RootContainer_layout#setPaddingLeft
 * @function
 */


/**
 * Getter for property <code>paddingRight</code>.
 * Padding value for the right side
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>paddingRight</code>
 * @public
 * @name sap.viz.ui5.types.RootContainer_layout#getPaddingRight
 * @function
 */

/**
 * Setter for property <code>paddingRight</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iPaddingRight  new value for property <code>paddingRight</code>
 * @return {sap.viz.ui5.types.RootContainer_layout} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.RootContainer_layout#setPaddingRight
 * @function
 */


/**
 * Getter for property <code>paddingBottom</code>.
 * Padding value for the bottom side
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>paddingBottom</code>
 * @public
 * @name sap.viz.ui5.types.RootContainer_layout#getPaddingBottom
 * @function
 */

/**
 * Setter for property <code>paddingBottom</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iPaddingBottom  new value for property <code>paddingBottom</code>
 * @return {sap.viz.ui5.types.RootContainer_layout} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.RootContainer_layout#setPaddingBottom
 * @function
 */


/**
 * Getter for property <code>vgap</code>.
 * Vertical gap value between UI components
 *
 * Default value is <code>8</code>
 *
 * @return {int} the value of property <code>vgap</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.RootContainer_layout#getVgap
 * @function
 */

/**
 * Setter for property <code>vgap</code>.
 *
 * Default value is <code>8</code> 
 *
 * @param {int} iVgap  new value for property <code>vgap</code>
 * @return {sap.viz.ui5.types.RootContainer_layout} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.RootContainer_layout#setVgap
 * @function
 */


/**
 * Getter for property <code>hgap</code>.
 * Horizontal gap value between UI components
 *
 * Default value is <code>8</code>
 *
 * @return {int} the value of property <code>hgap</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.RootContainer_layout#getHgap
 * @function
 */

/**
 * Setter for property <code>hgap</code>.
 *
 * Default value is <code>8</code> 
 *
 * @param {int} iHgap  new value for property <code>hgap</code>
 * @return {sap.viz.ui5.types.RootContainer_layout} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.RootContainer_layout#setHgap
 * @function
 */


// Start of sap/viz/ui5/types/RootContainer_layout.js
