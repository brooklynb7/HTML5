/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ushell.ui.tile.ImageTile.
jQuery.sap.declare("sap.ushell.ui.tile.ImageTile");
jQuery.sap.require("sap.ushell.library");
jQuery.sap.require("sap.ushell.ui.tile.TileBase");


/**
 * Constructor for a new ui/tile/ImageTile.
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
 * <li>{@link #getImageSource imageSource} : string</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ushell.ui.tile.TileBase#constructor sap.ushell.ui.tile.TileBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Add your documentation for the newui/tile/ImageTile
 * @extends sap.ushell.ui.tile.TileBase
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ushell.ui.tile.ImageTile
 */
sap.ushell.ui.tile.TileBase.extend("sap.ushell.ui.tile.ImageTile", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ushell",
	properties : {
		"imageSource" : {type : "string", group : "Appearance", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.ushell.ui.tile.ImageTile with name <code>sClassName</code> 
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
 * @name sap.ushell.ui.tile.ImageTile.extend
 * @function
 */


/**
 * Getter for property <code>imageSource</code>.
 * the URL of the image to display
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>imageSource</code>
 * @public
 * @name sap.ushell.ui.tile.ImageTile#getImageSource
 * @function
 */

/**
 * Setter for property <code>imageSource</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sImageSource  new value for property <code>imageSource</code>
 * @return {sap.ushell.ui.tile.ImageTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.tile.ImageTile#setImageSource
 * @function
 */


// Start of sap/ushell/ui/tile/ImageTile.js
// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * Applauncher displaying a tile with an added image
 * 
 * @name sap.ushell.ui.tile.ImageTile
 * 
 * @since   1.15.0
 * @private
 */