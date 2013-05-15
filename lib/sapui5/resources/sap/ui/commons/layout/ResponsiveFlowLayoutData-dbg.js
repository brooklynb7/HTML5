/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.layout.ResponsiveFlowLayoutData.
jQuery.sap.declare("sap.ui.commons.layout.ResponsiveFlowLayoutData");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.LayoutData");

/**
 * Constructor for a new layout/ResponsiveFlowLayoutData.
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
 * <li>{@link #getMinWidth minWidth} : int (default: 100)</li>
 * <li>{@link #getWeight weight} : int (default: 1)</li>
 * <li>{@link #getLinebreak linebreak} : boolean (default: false)</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This is a LayoutData Element that can be added to a control if this control is used within a ResponsiveFlowLayout
 * @extends sap.ui.core.LayoutData
 *
 * @author SAP 
 * @version 1.10.0
 *
 * @constructor   
 * @public
 * @since 1.9.1
 * @name sap.ui.commons.layout.ResponsiveFlowLayoutData
 */
sap.ui.core.LayoutData.extend("sap.ui.commons.layout.ResponsiveFlowLayoutData", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"minWidth" : {type : "int", group : "Misc", defaultValue : 100},
		"weight" : {type : "int", group : "Misc", defaultValue : 1},
		"linebreak" : {type : "boolean", group : "Misc", defaultValue : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.layout.ResponsiveFlowLayoutData with name <code>sClassName</code> 
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
 * @name sap.ui.commons.layout.ResponsiveFlowLayoutData.extend
 * @function
 */


/**
 * Getter for property <code>minWidth</code>.
 * This is the minimal size in pixels of an ResponsiveFlowLayout element. The element will be shrinked till this value.
 *
 * Default value is <code>100</code>
 *
 * @return {int} the value of property <code>minWidth</code>
 * @public
 * @name sap.ui.commons.layout.ResponsiveFlowLayoutData#getMinWidth
 * @function
 */


/**
 * Setter for property <code>minWidth</code>.
 *
 * Default value is <code>100</code> 
 *
 * @param {int} iMinWidth  new value for property <code>minWidth</code>
 * @return {sap.ui.commons.layout.ResponsiveFlowLayoutData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.ResponsiveFlowLayoutData#setMinWidth
 * @function
 */

/**
 * Getter for property <code>weight</code>.
 * This is the weight of the element that influences the resulting width. If there are several elements within a row of the ResponsiveFlowLayout each element could have another weight. The bigger the weight of a single element the wider it will be pumped up --> a bigger weight result a bigger width.
 *
 * Default value is <code>1</code>
 *
 * @return {int} the value of property <code>weight</code>
 * @public
 * @name sap.ui.commons.layout.ResponsiveFlowLayoutData#getWeight
 * @function
 */


/**
 * Setter for property <code>weight</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {int} iWeight  new value for property <code>weight</code>
 * @return {sap.ui.commons.layout.ResponsiveFlowLayoutData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.ResponsiveFlowLayoutData#setWeight
 * @function
 */

/**
 * Getter for property <code>linebreak</code>.
 * If this property is set the control where this LayoutData is added to will always cause a linebreak within the ResponsiveFlowLayout
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>linebreak</code>
 * @public
 * @name sap.ui.commons.layout.ResponsiveFlowLayoutData#getLinebreak
 * @function
 */


/**
 * Setter for property <code>linebreak</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bLinebreak  new value for property <code>linebreak</code>
 * @return {sap.ui.commons.layout.ResponsiveFlowLayoutData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.ResponsiveFlowLayoutData#setLinebreak
 * @function
 */

// Start of sap/ui/commons/layout/ResponsiveFlowLayoutData.js
/*!
 * @copyright@
 */
sap.ui.commons.layout.ResponsiveFlowLayoutData.MIN_WIDTH = 100;
sap.ui.commons.layout.ResponsiveFlowLayoutData.WEIGHT = 1;
sap.ui.commons.layout.ResponsiveFlowLayoutData.LINEBREAK = false;

sap.ui.commons.layout.ResponsiveFlowLayoutData.prototype.setWeight = function(
		iWeight) {
	if (iWeight < 1) {
		var sWarning = "Values smaller than 1 are not valid. Default value '1' is used instead";
		jQuery.sap.log.warning(sWarning, this);

		this.setProperty("weight", 1);
	} else {
		this.setProperty("weight", iWeight);
	}

	return this;
};
