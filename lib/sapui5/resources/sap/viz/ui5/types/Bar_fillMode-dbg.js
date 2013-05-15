/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Bar_fillMode.
jQuery.sap.declare("sap.viz.ui5.types.Bar_fillMode");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");

/**
 * Constructor for a new ui5/types/Bar_fillMode.
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
 * <li>{@link #getImage image} : boolean (default: false)</li>
 * <li>{@link #getImagePalette imagePalette} : string[] (default: ['http://www.sap.com/global/ui/images/global/sap-logo.png','http://www.sap.com/global/ui/images/global/sap-logo.png','http://www.sap.com/global/ui/images/global/sap-logo.png','http://www.sap.com/global/ui/images/global/sap-logo.png'])</li></ul>
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
 * Settings for tooltip related properties.
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
 * @name sap.viz.ui5.types.Bar_fillMode
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Bar_fillMode", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"image" : {type : "boolean", group : "", defaultValue : false},
		"imagePalette" : {type : "string[]", group : "", defaultValue : ['http://www.sap.com/global/ui/images/global/sap-logo.png','http://www.sap.com/global/ui/images/global/sap-logo.png','http://www.sap.com/global/ui/images/global/sap-logo.png','http://www.sap.com/global/ui/images/global/sap-logo.png']}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Bar_fillMode with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Bar_fillMode.extend
 * @function
 */


/**
 * Getter for property <code>image</code>.
 * Set enabled/disabled image fill.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>image</code>
 * @public
 * @name sap.viz.ui5.types.Bar_fillMode#getImage
 * @function
 */


/**
 * Setter for property <code>image</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bImage  new value for property <code>image</code>
 * @return {sap.viz.ui5.types.Bar_fillMode} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bar_fillMode#setImage
 * @function
 */

/**
 * Getter for property <code>imagePalette</code>.
 * images to fill the bar
 *
 * Default value is <code>http://www.sap.com/global/ui/images/global/sap-logo.png,http://www.sap.com/global/ui/images/global/sap-logo.png,http://www.sap.com/global/ui/images/global/sap-logo.png,http://www.sap.com/global/ui/images/global/sap-logo.png</code>
 *
 * @return {string[]} the value of property <code>imagePalette</code>
 * @public
 * @name sap.viz.ui5.types.Bar_fillMode#getImagePalette
 * @function
 */


/**
 * Setter for property <code>imagePalette</code>.
 *
 * Default value is <code>http://www.sap.com/global/ui/images/global/sap-logo.png,http://www.sap.com/global/ui/images/global/sap-logo.png,http://www.sap.com/global/ui/images/global/sap-logo.png,http://www.sap.com/global/ui/images/global/sap-logo.png</code> 
 *
 * @param {string[]} aImagePalette  new value for property <code>imagePalette</code>
 * @return {sap.viz.ui5.types.Bar_fillMode} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bar_fillMode#setImagePalette
 * @function
 */

// Start of sap/viz/ui5/types/Bar_fillMode.js
