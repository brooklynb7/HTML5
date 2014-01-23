/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.charts.ClusterListItem.
jQuery.sap.declare("sap.ca.ui.charts.ClusterListItem");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.m.ListItemBase");


/**
 * Constructor for a new ClusterListItem.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getItems items} : object</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The cluster list item consists of a title and items.
 * @extends sap.m.ListItemBase
 *
 * @author SAP AG 
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.charts.ClusterListItem
 */
sap.m.ListItemBase.extend("sap.ca.ui.charts.ClusterListItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"items" : {type : "object", group : "Data", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.charts.ClusterListItem with name <code>sClassName</code> 
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
 * @name sap.ca.ui.charts.ClusterListItem.extend
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * Title
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.ca.ui.charts.ClusterListItem#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ca.ui.charts.ClusterListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ClusterListItem#setTitle
 * @function
 */


/**
 * Getter for property <code>items</code>.
 * Items
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>items</code>
 * @public
 * @name sap.ca.ui.charts.ClusterListItem#getItems
 * @function
 */

/**
 * Setter for property <code>items</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oItems  new value for property <code>items</code>
 * @return {sap.ca.ui.charts.ClusterListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ClusterListItem#setItems
 * @function
 */


// Start of sap\ca\ui\charts\ClusterListItem.js
jQuery.sap.require("sap.m.ListItemBase");
sap.ca.ui.charts.ClusterListItem.prototype.init = function() {
    sap.m.ListItemBase.prototype.init.apply(this, arguments);
    this.addStyleClass("sapCaUiCLI");
};
