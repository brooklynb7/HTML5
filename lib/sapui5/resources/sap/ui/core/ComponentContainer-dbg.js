/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.ComponentContainer.
jQuery.sap.declare("sap.ui.core.ComponentContainer");
jQuery.sap.require("sap.ui.core.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new ComponentContainer.
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
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getComponent component} : string | sap.ui.core.Component</li></ul>
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
 * Component Container
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.10.0
 *
 * @constructor   
 * @public
 * @experimental Since version 1.9.2. 
 * The Component concept is still under construction, so some implementation details can be changed in future.
 * @name sap.ui.core.ComponentContainer
 */
sap.ui.core.Control.extend("sap.ui.core.ComponentContainer", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.core",
	associations : {
		"component" : {type : "sap.ui.core.Component", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.core.ComponentContainer with name <code>sClassName</code> 
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
 * @name sap.ui.core.ComponentContainer.extend
 * @function
 */


/**
 * Component in this ComponentContainer
 *
 * @return {string} Id of the element which is the current target of the <code>component</code> association, or null
 * @public
 * @name sap.ui.core.ComponentContainer#getComponent
 * @function
 */


/**
 * Component in this ComponentContainer
 *
 * @param {string | sap.ui.core.Component} vComponent 
 *    Id of an element which becomes the new target of this <code>component</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.core.ComponentContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.ComponentContainer#setComponent
 * @function
 */

// Start of sap/ui/core/ComponentContainer.js
/*!
 * @copyright@
 */
/**
 * This file defines behavior for the control,
 */

// =============================================================================
// BASIC CONTROL API
// =============================================================================

/**
 * Initialization of the ComponentContainer control
 * @private
 */
sap.ui.core.ComponentContainer.prototype.init = function(){
	this.oComponentArea = null;
};

/**
 * Rerendering handling
 * @private
 */
sap.ui.core.ComponentContainer.prototype.onBeforeRendering = function() {

};

/**
 * Rerendering handling
 * @private
 */
sap.ui.core.ComponentContainer.prototype.onAfterRendering = function () {
	jQuery.sap.delayedCall(0, this, function() {
		this.oComponentArea = new sap.ui.getCore().createUIArea(this.getId() + "-uiarea");
		this.getComponentInstance().setUIArea(this.oComponentArea); // TODO: try without the UI area, may be with closures?
	});
};

/**
 * Get component
 */
sap.ui.core.ComponentContainer.prototype.getComponentInstance = function () {

	var sComponentId = this.getComponent();
	return sap.ui.getCore().getComponent(sComponentId);
};

///**
// * Get component
// */
//sap.ui.core.ComponentContainer.prototype.setComponent = function (oComponent) {
////
////	var sComponentId = oComponent;
////	if (sComponentId instanceof sap.ui.core.Component) {
////		sComponentId = oComponent.getId();
////	} else if (sComponentId != null && typeof sComponentId !== "string") {
////		jQuery.sap.assert(false, "setComponent(): component must be a string, an instance of sap.ui.core.Component or null");
////		return this;
////	}
////
////	this.setProperty("component", sComponentId); // TODO: may be it is better to use association instead of property?
////
//	return this.setComponentRef(oComponent);
//};


