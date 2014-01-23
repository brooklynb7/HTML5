/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ushell.ui.launchpad.Panel.
jQuery.sap.declare("sap.ushell.ui.launchpad.Panel");
jQuery.sap.require("sap.ushell.library");
jQuery.sap.require("sap.m.Panel");


/**
 * Constructor for a new ui/launchpad/Panel.
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
 * <li>{@link #getTranslucent translucent} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getHeaderContent headerContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getHeaderBar headerBar} : sap.m.Bar</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.m.Panel#constructor sap.m.Panel}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The Panel control is a container for controls with header text, header controls, or a header bar.
 * @extends sap.m.Panel
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ushell.ui.launchpad.Panel
 */
sap.m.Panel.extend("sap.ushell.ui.launchpad.Panel", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ushell",
	properties : {
		"translucent" : {type : "boolean", group : "Misc", defaultValue : false}
	},
	aggregations : {
    	"headerContent" : {type : "sap.ui.core.Control", multiple : true, singularName : "headerContent"}, 
    	"headerBar" : {type : "sap.m.Bar", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ushell.ui.launchpad.Panel with name <code>sClassName</code> 
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
 * @name sap.ushell.ui.launchpad.Panel.extend
 * @function
 */


/**
 * Getter for property <code>translucent</code>.
 * 
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>translucent</code>
 * @public
 * @name sap.ushell.ui.launchpad.Panel#getTranslucent
 * @function
 */

/**
 * Setter for property <code>translucent</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bTranslucent  new value for property <code>translucent</code>
 * @return {sap.ushell.ui.launchpad.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Panel#setTranslucent
 * @function
 */


/**
 * Getter for aggregation <code>headerContent</code>.<br/>
 * 
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ushell.ui.launchpad.Panel#getHeaderContent
 * @function
 */


/**
 * Inserts a headerContent into the aggregation named <code>headerContent</code>.
 *
 * @param {sap.ui.core.Control}
 *          oHeaderContent the headerContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the headerContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the headerContent is inserted at 
 *             the last position        
 * @return {sap.ushell.ui.launchpad.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Panel#insertHeaderContent
 * @function
 */

/**
 * Adds some headerContent <code>oHeaderContent</code> 
 * to the aggregation named <code>headerContent</code>.
 *
 * @param {sap.ui.core.Control}
 *            oHeaderContent the headerContent to add; if empty, nothing is inserted
 * @return {sap.ushell.ui.launchpad.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Panel#addHeaderContent
 * @function
 */

/**
 * Removes an headerContent from the aggregation named <code>headerContent</code>.
 *
 * @param {int | string | sap.ui.core.Control} vHeaderContent the headerContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed headerContent or null
 * @public
 * @name sap.ushell.ui.launchpad.Panel#removeHeaderContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>headerContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ushell.ui.launchpad.Panel#removeAllHeaderContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>headerContent</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oHeaderContent the headerContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ushell.ui.launchpad.Panel#indexOfHeaderContent
 * @function
 */
	

/**
 * Destroys all the headerContent in the aggregation 
 * named <code>headerContent</code>.
 * @return {sap.ushell.ui.launchpad.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Panel#destroyHeaderContent
 * @function
 */


/**
 * Getter for aggregation <code>headerBar</code>.<br/>
 * 
 * 
 * @return {sap.m.Bar}
 * @public
 * @name sap.ushell.ui.launchpad.Panel#getHeaderBar
 * @function
 */


/**
 * Setter for the aggregated <code>headerBar</code>.
 * @param oHeaderBar {sap.m.Bar}
 * @return {sap.ushell.ui.launchpad.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Panel#setHeaderBar
 * @function
 */
	

/**
 * Destroys the headerBar in the aggregation 
 * named <code>headerBar</code>.
 * @return {sap.ushell.ui.launchpad.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.Panel#destroyHeaderBar
 * @function
 */


// Start of sap/ushell/ui/launchpad/Panel.js
// Copyright (c) 2013 SAP AG, All Rights Reserved

/**
 * @name sap.ushell.ui.launchpad.Panel
 * 
 * @private
 */
jQuery.sap.require("sap.ushell.override");

sap.ushell.ui.launchpad.Panel.prototype.updateAggregation = sap.ushell.override.updateAggregation;
