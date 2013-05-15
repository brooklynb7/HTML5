/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.form.Form.
jQuery.sap.declare("sap.ui.commons.form.Form");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new form/Form.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFormContainers formContainers} : sap.ui.commons.form.FormContainer[]</li>
 * <li>{@link #getTitle title} : sap.ui.commons.Title|string</li>
 * <li>{@link #getLayout layout} : sap.ui.commons.form.FormLayout</li></ul>
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
 * Form control.
 * Holder for form control to be rendered in a specific form layout.
 * A Form supports VariantLayoutData for it's conent to allow a simple switching of Layouts.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.10.0
 *
 * @constructor   
 * @public
 * @since 1.9.1
 * @name sap.ui.commons.form.Form
 */
sap.ui.core.Control.extend("sap.ui.commons.form.Form", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null}
	},
	aggregations : {
    	"formContainers" : {type : "sap.ui.commons.form.FormContainer", multiple : true, singularName : "formContainer"}, 
    	"title" : {type : "sap.ui.commons.Title", altTypes : ["string"], multiple : false}, 
    	"layout" : {type : "sap.ui.commons.form.FormLayout", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.form.Form with name <code>sClassName</code> 
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
 * @name sap.ui.commons.form.Form.extend
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Width of the form.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.form.Form#getWidth
 * @function
 */


/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.form.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.Form#setWidth
 * @function
 */
	
/**
 * Getter for aggregation <code>formContainers</code>.<br/>
 * FormContainers with the content of the form.
 * 
 * @return {sap.ui.commons.form.FormContainer[]}
 * @public
 * @name sap.ui.commons.form.Form#getFormContainers
 * @function
 */

/**
 * Inserts a formContainer into the aggregation named <code>formContainers</code>.
 *
 * @param {sap.ui.commons.form.FormContainer}
 *          oFormContainer the formContainer to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the formContainer should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the formContainer is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the formContainer is inserted at 
 *             the last position        
 * @return {sap.ui.commons.form.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.Form#insertFormContainer
 * @function
 */


/**
 * Adds some formContainer <code>oFormContainer</code> 
 * to the aggregation named <code>formContainers</code>.
 *
 * @param {sap.ui.commons.form.FormContainer}
 *            oFormContainer the formContainer to add; if empty, nothing is inserted
 * @return {sap.ui.commons.form.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.Form#addFormContainer
 * @function
 */


/**
 * Removes an formContainer from the aggregation named <code>formContainers</code>.
 *
 * @param {int | string | sap.ui.commons.form.FormContainer} vFormContainer the formContainer to remove or its index or id
 * @return {sap.ui.commons.form.FormContainer} the removed formContainer or null
 * @public
 * @name sap.ui.commons.form.Form#removeFormContainer
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>formContainers</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.form.FormContainer[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.form.Form#removeAllFormContainers
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.commons.form.FormContainer</code> in the aggregation named <code>formContainers</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.form.FormContainer}
 *            oFormContainer the formContainer whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.form.Form#indexOfFormContainer
 * @function
 */


/**
 * Destroys all the formContainers in the aggregation 
 * named <code>formContainers</code>.
 * @return {sap.ui.commons.form.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.Form#destroyFormContainers
 * @function
 */
	
/**
 * Getter for aggregation <code>title</code>.<br/>
 * Title element of the Container. Can either be a Label object, or a simple string.
 * 
 * @return {sap.ui.commons.Title|string}
 * @public
 * @name sap.ui.commons.form.Form#getTitle
 * @function
 */

/**
 * Setter for the aggregated <code>title</code>.
 * @param oTitle {sap.ui.commons.Title|string}
 * @return {sap.ui.commons.form.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.Form#setTitle
 * @function
 */


/**
 * Destroys the title in the aggregation 
 * named <code>title</code>.
 * @return {sap.ui.commons.form.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.Form#destroyTitle
 * @function
 */
	
/**
 * Getter for aggregation <code>layout</code>.<br/>
 * Layout of the form.
 * 
 * @return {sap.ui.commons.form.FormLayout}
 * @public
 * @name sap.ui.commons.form.Form#getLayout
 * @function
 */

/**
 * Setter for the aggregated <code>layout</code>.
 * @param oLayout {sap.ui.commons.form.FormLayout}
 * @return {sap.ui.commons.form.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.Form#setLayout
 * @function
 */


/**
 * Destroys the layout in the aggregation 
 * named <code>layout</code>.
 * @return {sap.ui.commons.form.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.Form#destroyLayout
 * @function
 */

// Start of sap/ui/commons/form/Form.js
/**
 * This file defines behavior for the control,
 */

(function() {

//	sap.ui.commons.Form.prototype.init = function(){
//	// do something for initialization...
//	};

	sap.ui.commons.form.Form.prototype.toggleContainerExpanded = function(oContainer){

		var oLayout = this.getLayout();
		if (oLayout) {
			oLayout.toggleContainerExpanded(oContainer);
		}

	};

	/*
	 * If onAfterRendering of a field is processed the layout might need to change it.
	 */
	sap.ui.commons.form.Form.prototype.contentOnAfterRendering = function(oFormElement, oControl){

		// call function of the layout
		var oLayout = this.getLayout();
		if (oLayout && oLayout.contentOnAfterRendering) {
			oLayout.contentOnAfterRendering( oFormElement, oControl);
		}

	};

	/*
	 * If LayoutData changed on control this may need changes on the layout. So bubble to the Layout
	 */
	sap.ui.commons.form.Form.prototype.onLayoutDataChange = function(oEvent){

		// call function of the layout
		var oLayout = this.getLayout();
		if (oLayout && oLayout.onLayoutDataChange) {
			oLayout.onLayoutDataChange(oEvent);
		}

	};

}());