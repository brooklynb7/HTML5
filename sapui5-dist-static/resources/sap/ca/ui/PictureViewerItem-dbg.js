/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.PictureViewerItem.
jQuery.sap.declare("sap.ca.ui.PictureViewerItem");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new PictureViewer.
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
 * <li>{@link #getSrc src} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getImage image} : sap.m.Image</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Picture viewer control relying on the TileContainer control
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.PictureViewerItem
 */
sap.ui.core.Control.extend("sap.ca.ui.PictureViewerItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"src" : {type : "string", group : "Misc", defaultValue : null}
	},
	aggregations : {
    	"image" : {type : "sap.m.Image", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.PictureViewerItem with name <code>sClassName</code> 
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
 * @name sap.ca.ui.PictureViewerItem.extend
 * @function
 */


/**
 * Getter for property <code>src</code>.
 * Image source url.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>src</code>
 * @public
 * @name sap.ca.ui.PictureViewerItem#getSrc
 * @function
 */

/**
 * Setter for property <code>src</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSrc  new value for property <code>src</code>
 * @return {sap.ca.ui.PictureViewerItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureViewerItem#setSrc
 * @function
 */


/**
 * Getter for aggregation <code>image</code>.<br/>
 * Pass in an existing Image control to be used inside the PictureViewer
 * 
 * @return {sap.m.Image}
 * @public
 * @name sap.ca.ui.PictureViewerItem#getImage
 * @function
 */


/**
 * Setter for the aggregated <code>image</code>.
 * @param oImage {sap.m.Image}
 * @return {sap.ca.ui.PictureViewerItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureViewerItem#setImage
 * @function
 */
	

/**
 * Destroys the image in the aggregation 
 * named <code>image</code>.
 * @return {sap.ca.ui.PictureViewerItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureViewerItem#destroyImage
 * @function
 */


// Start of sap\ca\ui\PictureViewerItem.js
/**
 * Setter for property <code>src</code>.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @param {string} sSrc  new value for property <code>src</code>
 * @return {sap.ca.ui.PictureViewerItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureViewerItem#setSrc
 * @function
 */
sap.ca.ui.PictureViewerItem.prototype.setSrc = function(sSrc) {
	this.setProperty("src", sSrc);
	// Also create or update the internal image
	var oImage = this.getImage();
	if (oImage == null) {
		oImage = new sap.m.Image()
	}
	oImage.setSrc(sSrc);
	this.setImage(oImage);
	return this;
};

/**
 * Called when the control is destroyed
 */
sap.ca.ui.PictureViewerItem.prototype.exit = function() {
    var oImage = this.getImage();
    if (oImage) {
        oImage.destroy();
    }
};