/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.form.GridLayout.
jQuery.sap.declare("sap.ui.commons.form.GridLayout");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.commons.form.FormLayout");

/**
 * Constructor for a new form/GridLayout.
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
 * <li>{@link #getSingleColumn singleColumn} : boolean (default: false)</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.commons.form.FormLayout#constructor sap.ui.commons.form.FormLayout}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This Layout implements a guideline 2.0 grid. This can be a 16 column grid or an 8 column grid.
 * 
 * To adjust the content inside the GridLayout GridContainerData and GridElementData could be used.
 * @extends sap.ui.commons.form.FormLayout
 *
 * @author SAP AG 
 * @version 1.10.0
 *
 * @constructor   
 * @public
 * @since 1.9.1
 * @name sap.ui.commons.form.GridLayout
 */
sap.ui.commons.form.FormLayout.extend("sap.ui.commons.form.GridLayout", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"singleColumn" : {type : "boolean", group : "Misc", defaultValue : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.form.GridLayout with name <code>sClassName</code> 
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
 * @name sap.ui.commons.form.GridLayout.extend
 * @function
 */


/**
 * Getter for property <code>singleColumn</code>.
 * If set the Grid allows only one container column. That means one container is below the other. The whole grid has 8 cells per row.
 * 
 * If not set containers can use the full width of the grid or two container can be placed beside each other. In this case the whole grid has 16 cell per row.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>singleColumn</code>
 * @public
 * @name sap.ui.commons.form.GridLayout#getSingleColumn
 * @function
 */


/**
 * Setter for property <code>singleColumn</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bSingleColumn  new value for property <code>singleColumn</code>
 * @return {sap.ui.commons.form.GridLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.GridLayout#setSingleColumn
 * @function
 */

// Start of sap/ui/commons/form/GridLayout.js
/**
 * This file defines behavior for the control
 */

jQuery.sap.require("sap.ui.commons.form.GridContainerData");
jQuery.sap.require("sap.ui.commons.form.GridElementData");

(function() {

	sap.ui.commons.form.GridLayout.prototype.toggleContainerExpanded = function(oContainer){

		// rerendering of the form is needed
		this.rerender();

	};

	/*
	 * If onAfterRendering of a field is processed the width must be set to 100%
	 */
	sap.ui.commons.form.GridLayout.prototype.contentOnAfterRendering = function(oFormElement, oControl){

		sap.ui.commons.form.FormLayout.prototype.contentOnAfterRendering.apply(this, arguments);

		if (oControl.getMetadata().getName() != "sap.ui.commons.Image" ) {
			oControl.$().css("width", "100%");
		}

	};

	/*
	 * If LayoutData changed on one control this needs to rerender the whole table
	 * because it may influence other rows and columns
	 */
	sap.ui.commons.form.GridLayout.prototype.onLayoutDataChange = function(oEvent){

		if (this.getDomRef()) {
			// only if already rendered
			this.rerender();
		}

	};

	sap.ui.commons.form.GridLayout.prototype.onsaptabnext= function(oEvent){

		var bRtl = sap.ui.getCore().getConfiguration().getRTL();

		if (!bRtl) {
			this.tabForward(oEvent);
		} else {
			this.tabBack(oEvent);
		}

	};

	sap.ui.commons.form.GridLayout.prototype.onsaptabprevious = function(oEvent){

		var bRtl = sap.ui.getCore().getConfiguration().getRTL();

		if (!bRtl) {
			this.tabBack(oEvent);
		} else {
			this.tabForward(oEvent);
		}

	};

	sap.ui.commons.form.GridLayout.prototype.findFieldOfElement = function(oElement, iStartIndex, iLeft){

		if (!iLeft) {
			return sap.ui.commons.form.FormLayout.prototype.findPrevFieldOfElement.apply(this, arguments);
		}

		var aFields = oElement.getFields();
		var oNewDomRef;

		var iIndex = aFields.length;
		iStartIndex = iIndex - 1;


		for ( var i = iStartIndex; i >= 0; i--) {
			// find the next enabled control thats rendered
			var oField = aFields[i];
			var iLeftnew = jQuery.sap.byId(oField.getId()).offset().left;
			if (iLeft < iLeftnew && i != 0) {
				continue;
			}
			var oDomRef = oField.getFocusDomRef();
			if ((!oField.getEnabled || oField.getEnabled()) && oDomRef) {
				oNewDomRef = oDomRef;
				break;
			}
		}

		return oNewDomRef;

	};

	sap.ui.commons.form.GridLayout.prototype.findFieldBelow = function(oControl, oElement){

		var oContainer = oElement.getParent();
		var iCurrentIndex = oContainer.indexOfFormElement(oElement);
		var oNewDomRef;

		var aElements = oContainer.getFormElements();
		var iMax = aElements.length;
		var i = iCurrentIndex+1;
		var iLeft = jQuery.sap.byId(oControl.getId()).offset().left;

		while (!oNewDomRef && i < iMax) {
			var oElement = aElements[i];
			oNewDomRef = this.findFieldOfElement(oElement, 0, iLeft);
			i++;
		}

		if (!oNewDomRef) {
			// no next element -> look in next container
			var oForm = oContainer.getParent();
			iCurrentIndex = oForm.indexOfFormContainer(oContainer);
			oNewDomRef = this.findFirstFieldOfFirstElementInNextContainer(oForm, iCurrentIndex+1);
		}

		return oNewDomRef;

	};

	sap.ui.commons.form.GridLayout.prototype.findFieldAbove = function(oControl, oElement){

		var oContainer = oElement.getParent();
		var iCurrentIndex = oContainer.indexOfFormElement(oElement);
		var oNewDomRef;

		var aElements = oContainer.getFormElements();
		var i = iCurrentIndex-1;
		var iLeft = jQuery.sap.byId(oControl.getId()).offset().left;

		while (!oNewDomRef && i >= 0) {
			var oElement = aElements[i];
			oNewDomRef = this.findFieldOfElement(oElement, 0, iLeft);
			i--;
		}

		if (!oNewDomRef) {
			// no next element -> look in previous container
			var oForm = oContainer.getParent();
			iCurrentIndex = oForm.indexOfFormContainer(oContainer);
			oNewDomRef = this.findLastFieldOfLastElementInPrevContainer(oForm, iCurrentIndex-1);
		}

		return oNewDomRef;

	};

}());