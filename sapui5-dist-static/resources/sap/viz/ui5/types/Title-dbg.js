/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Title.
jQuery.sap.declare("sap.viz.ui5.types.Title");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");


/**
 * Constructor for a new ui5/types/Title.
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
 * <li>{@link #getVisible visible} : boolean (default: false)</li>
 * <li>{@link #getText text} : string (default: 'null')</li>
 * <li>{@link #getAlignment alignment} : sap.viz.ui5.types.Title_alignment (default: sap.viz.ui5.types.Title_alignment.center)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getLayout layout} : sap.viz.ui5.types.Title_layout</li></ul>
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
 * Module ui5/types/Title
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
 * @name sap.viz.ui5.types.Title
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Title", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"visible" : {type : "boolean", group : "", defaultValue : false},
		"text" : {type : "string", group : "", defaultValue : 'null'},
		"alignment" : {type : "sap.viz.ui5.types.Title_alignment", group : "", defaultValue : sap.viz.ui5.types.Title_alignment.center}
	},
	aggregations : {
    	"layout" : {type : "sap.viz.ui5.types.Title_layout", multiple : false, deprecated: true}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Title with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Title.extend
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Set visibility of chart title.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.viz.ui5.types.Title#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.viz.ui5.types.Title} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Title#setVisible
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * Set chart title text.
 *
 * Default value is <code>null</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.viz.ui5.types.Title#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is <code>null</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.viz.ui5.types.Title} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Title#setText
 * @function
 */


/**
 * Getter for property <code>alignment</code>.
 * Set chart title alignment.
 *
 * Default value is <code>center</code>
 *
 * @return {sap.viz.ui5.types.Title_alignment} the value of property <code>alignment</code>
 * @public
 * @name sap.viz.ui5.types.Title#getAlignment
 * @function
 */

/**
 * Setter for property <code>alignment</code>.
 *
 * Default value is <code>center</code> 
 *
 * @param {sap.viz.ui5.types.Title_alignment} oAlignment  new value for property <code>alignment</code>
 * @return {sap.viz.ui5.types.Title} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Title#setAlignment
 * @function
 */


/**
 * Getter for aggregation <code>layout</code>.<br/>
 * Settings for layout of title.
 * 
 * @return {sap.viz.ui5.types.Title_layout}
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Title#getLayout
 * @function
 */


/**
 * Setter for the aggregated <code>layout</code>.
 * @param oLayout {sap.viz.ui5.types.Title_layout}
 * @return {sap.viz.ui5.types.Title} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Title#setLayout
 * @function
 */
	

/**
 * Destroys the layout in the aggregation 
 * named <code>layout</code>.
 * @return {sap.viz.ui5.types.Title} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Title#destroyLayout
 * @function
 */


// Start of sap/viz/ui5/types/Title.js
sap.viz.ui5.types.Title.prototype.getLayout = function() {
  return this._getOrCreate("layout");
}
