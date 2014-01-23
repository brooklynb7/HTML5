/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.HierarchicalSelectDialogItem.
jQuery.sap.declare("sap.ca.ui.HierarchicalSelectDialogItem");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.ui.core.Item");


/**
 * Constructor for a new HierarchicalSelectDialogItem.
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
 * <li>{@link #getEntityName entityName} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getListItemTemplate listItemTemplate} : sap.m.ListItemBase</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.Item#constructor sap.ui.core.Item}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * 
 * Kind of item required by the sap.ca.ui.HierarchicalSelectDialog control.
 * An item is actually one page of the Dialog
 * 
 * @extends sap.ui.core.Item
 *
 * @author Bruno Vicente 
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.HierarchicalSelectDialogItem
 */
sap.ui.core.Item.extend("sap.ca.ui.HierarchicalSelectDialogItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"title" : {type : "string", group : "Appearance", defaultValue : null},
		"entityName" : {type : "string", group : "Data", defaultValue : null}
	},
	aggregations : {
    	"listItemTemplate" : {type : "sap.m.ListItemBase", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.HierarchicalSelectDialogItem with name <code>sClassName</code> 
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
 * @name sap.ca.ui.HierarchicalSelectDialogItem.extend
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * Dialog title for this item
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.ca.ui.HierarchicalSelectDialogItem#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ca.ui.HierarchicalSelectDialogItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.HierarchicalSelectDialogItem#setTitle
 * @function
 */


/**
 * Getter for property <code>entityName</code>.
 * Property used for the binding
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>entityName</code>
 * @public
 * @name sap.ca.ui.HierarchicalSelectDialogItem#getEntityName
 * @function
 */

/**
 * Setter for property <code>entityName</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sEntityName  new value for property <code>entityName</code>
 * @return {sap.ca.ui.HierarchicalSelectDialogItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.HierarchicalSelectDialogItem#setEntityName
 * @function
 */


/**
 * Getter for aggregation <code>listItemTemplate</code>.<br/>
 * Used as a template for each list item of the page
 * 
 * @return {sap.m.ListItemBase}
 * @public
 * @name sap.ca.ui.HierarchicalSelectDialogItem#getListItemTemplate
 * @function
 */


/**
 * Setter for the aggregated <code>listItemTemplate</code>.
 * @param oListItemTemplate {sap.m.ListItemBase}
 * @return {sap.ca.ui.HierarchicalSelectDialogItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.HierarchicalSelectDialogItem#setListItemTemplate
 * @function
 */
	

/**
 * Destroys the listItemTemplate in the aggregation 
 * named <code>listItemTemplate</code>.
 * @return {sap.ca.ui.HierarchicalSelectDialogItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.HierarchicalSelectDialogItem#destroyListItemTemplate
 * @function
 */


// Start of sap\ca\ui\HierarchicalSelectDialogItem.js
