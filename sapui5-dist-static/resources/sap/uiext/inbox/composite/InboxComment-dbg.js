/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.uiext.inbox.composite.InboxComment.
jQuery.sap.declare("sap.uiext.inbox.composite.InboxComment");
jQuery.sap.require("sap.uiext.inbox.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new composite/InboxComment.
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
 * <li>{@link #getSender sender} : string</li>
 * <li>{@link #getTimestamp timestamp} : string</li>
 * <li>{@link #getThumbnailSrc thumbnailSrc} : sap.ui.core.URI</li>
 * <li>{@link #getText text} : string</li></ul>
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
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * fsgg
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.uiext.inbox.composite.InboxComment
 */
sap.ui.core.Control.extend("sap.uiext.inbox.composite.InboxComment", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.uiext.inbox",
	properties : {
		"sender" : {type : "string", group : "Data", defaultValue : null},
		"timestamp" : {type : "string", group : "Data", defaultValue : null},
		"thumbnailSrc" : {type : "sap.ui.core.URI", group : "Data", defaultValue : null},
		"text" : {type : "string", group : "Data", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.uiext.inbox.composite.InboxComment with name <code>sClassName</code> 
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
 * @name sap.uiext.inbox.composite.InboxComment.extend
 * @function
 */


/**
 * Getter for property <code>sender</code>.
 * Sender of the comment chunk
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>sender</code>
 * @public
 * @name sap.uiext.inbox.composite.InboxComment#getSender
 * @function
 */

/**
 * Setter for property <code>sender</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSender  new value for property <code>sender</code>
 * @return {sap.uiext.inbox.composite.InboxComment} <code>this</code> to allow method chaining
 * @public
 * @name sap.uiext.inbox.composite.InboxComment#setSender
 * @function
 */


/**
 * Getter for property <code>timestamp</code>.
 * Format is ISO 8601 YYYY-MM-DDThh:mm:ss.sZ, Z meaning the time is in UTC time zone
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>timestamp</code>
 * @public
 * @name sap.uiext.inbox.composite.InboxComment#getTimestamp
 * @function
 */

/**
 * Setter for property <code>timestamp</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTimestamp  new value for property <code>timestamp</code>
 * @return {sap.uiext.inbox.composite.InboxComment} <code>this</code> to allow method chaining
 * @public
 * @name sap.uiext.inbox.composite.InboxComment#setTimestamp
 * @function
 */


/**
 * Getter for property <code>thumbnailSrc</code>.
 * URL to the thumbnail image.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>thumbnailSrc</code>
 * @public
 * @name sap.uiext.inbox.composite.InboxComment#getThumbnailSrc
 * @function
 */

/**
 * Setter for property <code>thumbnailSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sThumbnailSrc  new value for property <code>thumbnailSrc</code>
 * @return {sap.uiext.inbox.composite.InboxComment} <code>this</code> to allow method chaining
 * @public
 * @name sap.uiext.inbox.composite.InboxComment#setThumbnailSrc
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * The FeedChunk text
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.uiext.inbox.composite.InboxComment#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.uiext.inbox.composite.InboxComment} <code>this</code> to allow method chaining
 * @public
 * @name sap.uiext.inbox.composite.InboxComment#setText
 * @function
 */


// Start of sap/uiext/inbox/composite/InboxComment.js
/**
 * This file defines behavior for the control,
 */
sap.uiext.inbox.composite.InboxComment.prototype.init = function(){
    this.rb = sap.ui.getCore().getLibraryResourceBundle("sap.uiext.inbox");
};
