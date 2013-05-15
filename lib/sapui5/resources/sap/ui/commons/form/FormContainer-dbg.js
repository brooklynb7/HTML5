/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.form.FormContainer.
jQuery.sap.declare("sap.ui.commons.form.FormContainer");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new form/FormContainer.
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
 * <li>{@link #getExpanded expanded} : boolean (default: true)</li>
 * <li>{@link #getExpandable expandable} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFormElements formElements} : sap.ui.commons.form.FormElement[]</li>
 * <li>{@link #getTitle title} : sap.ui.commons.Title|string</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Used to group form elements.
 * Can contain other form elements or containers.
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.10.0
 *
 * @constructor   
 * @public
 * @since 1.9.1
 * @name sap.ui.commons.form.FormContainer
 */
sap.ui.core.Element.extend("sap.ui.commons.form.FormContainer", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"expanded" : {type : "boolean", group : "Misc", defaultValue : true},
		"expandable" : {type : "boolean", group : "Misc", defaultValue : false}
	},
	aggregations : {
    	"formElements" : {type : "sap.ui.commons.form.FormElement", multiple : true, singularName : "formElement"}, 
    	"title" : {type : "sap.ui.commons.Title", altTypes : ["string"], multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.form.FormContainer with name <code>sClassName</code> 
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
 * @name sap.ui.commons.form.FormContainer.extend
 * @function
 */


/**
 * Getter for property <code>expanded</code>.
 * Group is expanded.
 * This property works only if the Container is expandable.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>expanded</code>
 * @public
 * @name sap.ui.commons.form.FormContainer#getExpanded
 * @function
 */


/**
 * Setter for property <code>expanded</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bExpanded  new value for property <code>expanded</code>
 * @return {sap.ui.commons.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.FormContainer#setExpanded
 * @function
 */

/**
 * Getter for property <code>expandable</code>.
 * Defines if the Container is expandable.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>expandable</code>
 * @public
 * @name sap.ui.commons.form.FormContainer#getExpandable
 * @function
 */


/**
 * Setter for property <code>expandable</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bExpandable  new value for property <code>expandable</code>
 * @return {sap.ui.commons.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.FormContainer#setExpandable
 * @function
 */
	
/**
 * Getter for aggregation <code>formElements</code>.<br/>
 * Elements of the FormContainer.
 * 
 * @return {sap.ui.commons.form.FormElement[]}
 * @public
 * @name sap.ui.commons.form.FormContainer#getFormElements
 * @function
 */

/**
 * Inserts a formElement into the aggregation named <code>formElements</code>.
 *
 * @param {sap.ui.commons.form.FormElement}
 *          oFormElement the formElement to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the formElement should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the formElement is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the formElement is inserted at 
 *             the last position        
 * @return {sap.ui.commons.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.FormContainer#insertFormElement
 * @function
 */


/**
 * Adds some formElement <code>oFormElement</code> 
 * to the aggregation named <code>formElements</code>.
 *
 * @param {sap.ui.commons.form.FormElement}
 *            oFormElement the formElement to add; if empty, nothing is inserted
 * @return {sap.ui.commons.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.FormContainer#addFormElement
 * @function
 */


/**
 * Removes an formElement from the aggregation named <code>formElements</code>.
 *
 * @param {int | string | sap.ui.commons.form.FormElement} vFormElement the formElement to remove or its index or id
 * @return {sap.ui.commons.form.FormElement} the removed formElement or null
 * @public
 * @name sap.ui.commons.form.FormContainer#removeFormElement
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>formElements</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.form.FormElement[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.form.FormContainer#removeAllFormElements
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.commons.form.FormElement</code> in the aggregation named <code>formElements</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.form.FormElement}
 *            oFormElement the formElement whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.form.FormContainer#indexOfFormElement
 * @function
 */


/**
 * Destroys all the formElements in the aggregation 
 * named <code>formElements</code>.
 * @return {sap.ui.commons.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.FormContainer#destroyFormElements
 * @function
 */
	
/**
 * Getter for aggregation <code>title</code>.<br/>
 * Title element of the Container. Can either be a Label object, or a simple string.
 * 
 * @return {sap.ui.commons.Title|string}
 * @public
 * @name sap.ui.commons.form.FormContainer#getTitle
 * @function
 */

/**
 * Setter for the aggregated <code>title</code>.
 * @param oTitle {sap.ui.commons.Title|string}
 * @return {sap.ui.commons.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.FormContainer#setTitle
 * @function
 */


/**
 * Destroys the title in the aggregation 
 * named <code>title</code>.
 * @return {sap.ui.commons.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.FormContainer#destroyTitle
 * @function
 */

// Start of sap/ui/commons/form/FormContainer.js
/**
 * This file defines behavior for the control,
 */

jQuery.sap.require("sap.ui.core.EnabledPropagator");
jQuery.sap.require("sap.ui.core.theming.Parameters");

sap.ui.core.EnabledPropagator.apply(sap.ui.commons.form.FormContainer.prototype, [true]);

(function() {

	sap.ui.commons.form.FormContainer.prototype.init = function(){

		this._rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");

	};

	sap.ui.commons.form.FormContainer.prototype.exit = function(){

		if (this._oExpandButton) {
			this._oExpandButton.destroy();
			delete this._oExpandButton;
		}
		this._rb = undefined;

	};

	sap.ui.commons.form.FormContainer.prototype.setExpandable = function(bExpandable){

		this.setProperty("expandable", bExpandable);

		if (bExpandable) {
			if (!this._oExpandButton) {
				this._oExpandButton = new sap.ui.commons.Button(this.getId()+"--Exp",{
					lite: true
				}).setParent(this);
				//this._oExpandButton.addStyleClass("sapUiFormContainerExpBtn");
				var that = this;
				this._oExpandButton.attachEvent('press', handleExpButtonPress, that); // attach event this way to have the right this-reference in handler
			}
			var that = this;
			_setExpanderIcon(that);
		}

	};

	sap.ui.commons.form.FormContainer.prototype.setExpanded = function(bExpanded){

		this.setProperty("expanded", bExpanded, true); // no automatic rerendering

		var that = this;
		_setExpanderIcon(that);

		var oForm = this.getParent();
		if (oForm && oForm.toggleContainerExpanded) {
			oForm.toggleContainerExpanded(that);
		}

	};

	/*
	 * If onAfterRendering of a field is processed the Form (layout) might need to change it.
	 */
	sap.ui.commons.form.FormContainer.prototype.contentOnAfterRendering = function(oFormElement, oControl){

		// call function of parent (if assigned)
		var oParent = this.getParent();
		if (oParent && oParent.contentOnAfterRendering) {
			oParent.contentOnAfterRendering( oFormElement, oControl);
		}

	};

	/*
	 * If LayoutData changed on control this may need changes on the layout. So bubble to the form
	 */
	sap.ui.commons.form.FormContainer.prototype.onLayoutDataChange = function(oEvent){

		// call function of parent (if assigned)
		var oParent = this.getParent();
		if (oParent && oParent.onLayoutDataChange) {
			oParent.onLayoutDataChange(oEvent);
		}

	};

	function _setExpanderIcon(oContainer){

		if (!oContainer._oExpandButton) {
			return;
		}

		var sIcon, sIconHovered, sText, sTooltip;

		if (oContainer.getExpanded()) {
			sIcon = sap.ui.core.theming.Parameters.get('sapUiFormContainerColImageURL');
			sIconHovered = sap.ui.core.theming.Parameters.get('sapUiFormContainerColImageDownURL');
			sText = "-";
			sTooltip = oContainer._rb.getText("PANEL_COLLAPSE");
		} else {
			sIcon = sap.ui.core.theming.Parameters.get('sapUiFormContainerExpImageURL');
			sIconHovered = sap.ui.core.theming.Parameters.get('sapUiFormContainerExpImageDownURL');
			sText = "+";
			sTooltip = oContainer._rb.getText("PANEL_EXPAND");
		}

		if (sIcon) {
			sIcon = jQuery.sap.getModulePath("sap.ui.commons", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + sIcon;
			sText = "";
		}
		if (sIconHovered) {
			sIconHovered = jQuery.sap.getModulePath("sap.ui.commons", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + sIconHovered;
		}
		oContainer._oExpandButton.setIcon(sIcon);
		oContainer._oExpandButton.setIconHovered(sIconHovered);
		oContainer._oExpandButton.setText(sText);
		oContainer._oExpandButton.setTooltip(sTooltip);

	};

	function handleExpButtonPress(oEvent){

		this.setExpanded(!this.getExpanded());

	};

}());