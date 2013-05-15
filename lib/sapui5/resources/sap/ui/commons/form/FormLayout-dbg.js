/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.form.FormLayout.
jQuery.sap.declare("sap.ui.commons.form.FormLayout");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new form/FormLayout.
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
 * Base layout for Forms.
 * Other Layouts must inherit from this one.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.10.0
 *
 * @constructor   
 * @public
 * @since 1.9.1
 * @name sap.ui.commons.form.FormLayout
 */
sap.ui.core.Control.extend("sap.ui.commons.form.FormLayout", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons"
}});


/**
 * Creates a new subclass of class sap.ui.commons.form.FormLayout with name <code>sClassName</code> 
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
 * @name sap.ui.commons.form.FormLayout.extend
 * @function
 */


// Start of sap/ui/commons/form/FormLayout.js
/**
 * This file defines behavior for the control,
 */

jQuery.sap.require("sap.ui.commons.form.Form");

(function() {

	sap.ui.commons.form.FormLayout.prototype.contentOnAfterRendering = function(oFormElement, oControl){

		jQuery(oControl.getFocusDomRef()).data("sap.InNavArea", true);

	};

	sap.ui.commons.form.FormLayout.prototype.toggleContainerExpanded = function(oContainer){

		var bExpanded = oContainer.getExpanded();
		if(this.getDomRef()){
			if (bExpanded) {
				//show content
				jQuery.sap.byId(oContainer.getId()+"-content").css("display", "");
			} else {
				//hide content
				jQuery.sap.byId(oContainer.getId()+"-content").css("display", "none");
			}
		}

	};

	/*
	 * gets the layout data of a element (container, control...) for the needed layout data type
	 */
	sap.ui.commons.form.FormLayout.prototype.getLayoutDataForElement = function(oElement, sType){

		var oLayoutData = oElement.getLayoutData();

		if (!oLayoutData) {
			return undefined;
		}else if (oLayoutData.getMetadata().getName() == sType) {
			return oLayoutData;
		}else if (oLayoutData.getMetadata().getName() == "sap.ui.core.VariantLayoutData") {
			// multiple LayoutData available - search here
			var aLayoutData = oLayoutData.getMultipleLayoutData();
			for ( var i = 0; i < aLayoutData.length; i++) {
				var oLayoutData2 = aLayoutData[i];
				if (oLayoutData2.getMetadata().getName() == sType) {
					return oLayoutData2;
				}
			}
		}

	};

	/* Keyboard handling
	 * In the FormLayout just a basic keyboard handling is implemented.
	 * This must be enhanced in the other Layouts if needed.
	 *
	 * The main idea is to navigate via arrow keys from control to control
	 * using Tab only the editable/active controls are reached. So the tab-chain is short
	 * Via F6 the navigation goes to the next container
	 * There is an "edit mode" to allow arrow key navigation inside of controls.
	 */

	sap.ui.commons.form.FormLayout.prototype.onsapright = function(oEvent){

		var bRtl = sap.ui.getCore().getConfiguration().getRTL();
		var that = this;

		if (!bRtl) {
			this.navigateForward(oEvent, that);
		} else {
			this.navigateBack(oEvent, that);
		}

	};

	sap.ui.commons.form.FormLayout.prototype.onsapleft = function(oEvent){

		var bRtl = sap.ui.getCore().getConfiguration().getRTL();
		var that = this;

		if (!bRtl) {
			this.navigateBack(oEvent, that);
		} else {
			this.navigateForward(oEvent, that);
		}

	};

	sap.ui.commons.form.FormLayout.prototype.onsapdown = function(oEvent){

		var oControl = oEvent.srcControl;
		var iCurrentIndex = 0;
		var oNewDomRef;
		var oRoot = this.findElement(oControl);
		var oElement = oRoot.element;
		oControl = oRoot.rootControl;
		if (oElement && oElement instanceof sap.ui.commons.form.FormElement) {
			oNewDomRef = this.findFieldBelow(oControl, oElement);
		} else if (oElement && oElement instanceof sap.ui.commons.form.FormContainer) {
			// current control is not inside an Element - maybe a title or expander?
			oNewDomRef = this.findFirstFieldOfNextElement(oElement, 0);
		}

		if (oNewDomRef) {
			jQuery.sap.focus(oNewDomRef);
			oEvent.preventDefault(); // to avoid moving cursor in next field
		}

	};

	sap.ui.commons.form.FormLayout.prototype.onsapup = function(oEvent){

		var oControl = oEvent.srcControl;
		var iCurrentIndex = 0;
		var oNewDomRef;
		var oRoot = this.findElement(oControl);
		var oElement = oRoot.element;
		oControl = oRoot.rootControl;
		if (oElement && oElement instanceof sap.ui.commons.form.FormElement) {
			oNewDomRef = this.findFieldAbove(oControl, oElement);
		} else if (oElement && oElement instanceof sap.ui.commons.form.FormContainer) {
			// current control is not inside an Element - maybe a title or expander?
			var oForm = oElement.getParent();
			iCurrentIndex = oForm.indexOfFormContainer(oElement);
			oNewDomRef = this.findLastFieldOfLastElementInPrevContainer(oForm, iCurrentIndex-1);
		}

		if (oNewDomRef) {
			jQuery.sap.focus(oNewDomRef);
			oEvent.preventDefault(); // to avoid moving cursor in next field
		}

	};

	sap.ui.commons.form.FormLayout.prototype.onsaphome = function(oEvent){

		var oControl = oEvent.srcControl;
		var iCurrentIndex = 0;
		var oNewDomRef;
		var oRoot = this.findElement(oControl);
		var oElement = oRoot.element;
		var oContainer = oElement.getParent();
		var oForm = oContainer.getParent();

		iCurrentIndex = oForm.indexOfFormContainer(oContainer);
		// actually it's within the same container
		oNewDomRef = this.findFirstFieldOfFirstElementInNextContainer(oForm, iCurrentIndex);

		if (oNewDomRef) {
			jQuery.sap.focus(oNewDomRef);
			oEvent.preventDefault(); // to avoid moving cursor in next field
		}

	}

	sap.ui.commons.form.FormLayout.prototype.onsaptop = function(oEvent){

		var oControl = oEvent.srcControl;
		var oRoot = this.findElement(oControl);
		var oElement = oRoot.element;
		var oNewDomRef;
		var oContainer;

		if (oElement && oElement instanceof sap.ui.commons.form.FormElement) {
			oContainer = oElement.getParent();
		} else if (oElement && oElement instanceof sap.ui.commons.form.FormContainer) {
			// current control is not inside an Element - maybe a title or expander?
			oContainer = oElement;
		}
		var oForm = oContainer.getParent();

		oNewDomRef = this.findFirstFieldOfForm(oForm);

		if (oNewDomRef) {
			jQuery.sap.focus(oNewDomRef);
			oEvent.preventDefault(); // to avoid moving cursor in next field
		}

	}

	sap.ui.commons.form.FormLayout.prototype.onsapend = function(oEvent){

		var oControl = oEvent.srcControl;
		var iCurrentIndex = 0;
		var oNewDomRef;
		var oRoot = this.findElement(oControl);
		var oElement = oRoot.element;
		var oContainer = oElement.getParent();
		var oForm = oContainer.getParent();

		iCurrentIndex = oForm.indexOfFormContainer(oContainer);
		oNewDomRef = this.findLastFieldOfLastElementInPrevContainer(oForm, iCurrentIndex);

		if (oNewDomRef) {
			jQuery.sap.focus(oNewDomRef);
			oEvent.preventDefault(); // to avoid moving cursor in next field
		}

	}

	sap.ui.commons.form.FormLayout.prototype.onsapbottom = function(oEvent){

		var oControl = oEvent.srcControl;
		var oRoot = this.findElement(oControl);
		var oElement = oRoot.element;
		var oNewDomRef;
		var oContainer;

		if (oElement && oElement instanceof sap.ui.commons.form.FormElement) {
			oContainer = oElement.getParent();
		} else if (oElement && oElement instanceof sap.ui.commons.form.FormContainer) {
			// current control is not inside an Element - maybe a title or expander?
			oContainer = oElement;
		}
		var oForm = oContainer.getParent();

		var aContainers = oForm.getFormContainers();
		var iLength = aContainers.length;

		oNewDomRef = this.findLastFieldOfLastElementInPrevContainer(oForm, iLength - 1);

		if (oNewDomRef) {
			jQuery.sap.focus(oNewDomRef);
			oEvent.preventDefault(); // to avoid moving cursor in next field
		}

	}

	sap.ui.commons.form.FormLayout.prototype.onsapexpand = function(oEvent){

		var oControl = oEvent.srcControl;
		var oRoot = this.findElement(oControl);
		var oElement = oRoot.element;
		var oContainer = oElement.getParent();

		oContainer.setExpanded(true);
	}

	sap.ui.commons.form.FormLayout.prototype.onsapcollapse = function(oEvent){

		var oControl = oEvent.srcControl;
		var oRoot = this.findElement(oControl);
		var oElement = oRoot.element;
		var oContainer = oElement.getParent();

		oContainer.setExpanded(false);
	}

	sap.ui.commons.form.FormLayout.prototype.onsapskipforward = function(oEvent){

		var oControl = oEvent.srcControl;
		var oRoot = this.findElement(oControl);
		var oElement = oRoot.element;
		oControl = oRoot.rootControl;
		var oNewDomRef;
		var oContainer;

		if (oElement && oElement instanceof sap.ui.commons.form.FormElement) {
			oContainer = oElement.getParent();
		} else if (oElement && oElement instanceof sap.ui.commons.form.FormContainer) {
			// current control is not inside an Element - maybe a title or expander?
			oContainer = oElement;
		}
		var oForm = oContainer.getParent();
		var iCurrentIndex = oForm.indexOfFormContainer(oContainer);

		// goto next container
		oNewDomRef = this.findFirstFieldOfFirstElementInNextContainer(oForm, iCurrentIndex+1);
		if (!oNewDomRef) {
			oNewDomRef = this.findFirstFieldOfForm(oForm);
		}

		if (oNewDomRef) {
			jQuery.sap.focus(oNewDomRef);
			oEvent.preventDefault(); // to avoid moving cursor in next field
		}

	};

	sap.ui.commons.form.FormLayout.prototype.onsapskipback = function(oEvent){

		var oControl = oEvent.srcControl;
		var oRoot = this.findElement(oControl);
		var oElement = oRoot.element;
		oControl = oRoot.rootControl;
		var oNewDomRef;
		var oContainer;

		if (oElement && oElement instanceof sap.ui.commons.form.FormElement) {
			oContainer = oElement.getParent();
		} else if (oElement && oElement instanceof sap.ui.commons.form.FormContainer) {
			// current control is not inside an Element - maybe a title or expander?
			oContainer = oElement;
		}
		var oForm = oContainer.getParent();
		var aContainers = oForm.getFormContainers();
		var iCurrentIndex = oForm.indexOfFormContainer(oContainer);

		// goto previous container
		while (!oNewDomRef && iCurrentIndex >= 0) {
			var oPrevContainer = aContainers[iCurrentIndex-1];
			if (!oPrevContainer.getExpandable() || oPrevContainer.getExpanded()) {
				oNewDomRef = this.findFirstFieldOfFirstElementInPrevContainer(oForm, iCurrentIndex-1);
			}
			iCurrentIndex = iCurrentIndex-1;
		}
		if (!oNewDomRef) {
			oNewDomRef = this.findLastFieldOfForm(oForm);
		}

		if (oNewDomRef) {
			jQuery.sap.focus(oNewDomRef);
			oEvent.preventDefault(); // to avoid moving cursor in next field
		}

	};

	sap.ui.commons.form.FormLayout.prototype.findElement = function(oControl){
		// since the source control can be part of a child control or layout we have to look in the control tree
		// to find the FormElement where the control is assigned

		var oElement = oControl.getParent();
		var oRootControl = oControl;

		while (oElement && !(oElement instanceof sap.ui.commons.form.FormElement) &&
				!(oElement && oElement instanceof sap.ui.commons.form.FormContainer) &&
				!(oElement && oElement instanceof sap.ui.commons.form.Form)) {
			oRootControl = oElement;
			oElement = oElement.getParent();
		}

		return ({rootControl: oRootControl, element: oElement});

	};

	sap.ui.commons.form.FormLayout.prototype.navigateForward = function(oEvent){

		var oControl = oEvent.srcControl;
		var iCurrentIndex = 0;
		var oNewDomRef;
		var oRoot = this.findElement(oControl);
		var oElement = oRoot.element;
		oControl = oRoot.rootControl;

		if (oElement && oElement instanceof sap.ui.commons.form.FormElement) {
			if (oControl == oElement.getLabelControl()) {
				iCurrentIndex = -1;
			} else {
				iCurrentIndex = oElement.indexOfField(oControl);
			}
			oNewDomRef = this.findNextFieldOfElement(oElement, iCurrentIndex+1);

			if (!oNewDomRef) {
				// use 1st field of next Element
				var oContainer = oElement.getParent();
				iCurrentIndex = oContainer.indexOfFormElement(oElement);
				oNewDomRef = this.findFirstFieldOfNextElement(oContainer, iCurrentIndex+1);

				if (!oNewDomRef) {
					// no next element -> look in next container
					var oForm = oContainer.getParent();
					iCurrentIndex = oForm.indexOfFormContainer(oContainer);
					oNewDomRef = this.findFirstFieldOfFirstElementInNextContainer(oForm, iCurrentIndex+1);
				}
			}
		} else if (oElement && oElement instanceof sap.ui.commons.form.FormContainer) {
			// current control is not inside an Element - maybe a title or expander?
			oNewDomRef = this.findFirstFieldOfNextElement(oElement, 0);
		}

		if (oNewDomRef) {
			jQuery.sap.focus(oNewDomRef);
			oEvent.preventDefault(); // to avoid moving cursor in next field
		}

	};

	sap.ui.commons.form.FormLayout.prototype.tabForward = function(oEvent){

		var oControl = oEvent.srcControl;
		var iCurrentIndex = 0;
		var oNewDomRef;
		var oRoot = this.findElement(oControl);
		var oElement = oRoot.element;
		oControl = oRoot.rootControl;

		if (oElement && oElement instanceof sap.ui.commons.form.FormElement) {
			if (oControl == oElement.getLabelControl()) {
				iCurrentIndex = -1;
			} else {
				iCurrentIndex = oElement.indexOfField(oControl);
			}
			oNewDomRef = this.findNextFieldOfElement(oElement, iCurrentIndex+1, true);

			if (!oNewDomRef) {
				// use 1st field of next Element
				var oContainer = oElement.getParent();
				iCurrentIndex = oContainer.indexOfFormElement(oElement);
				oNewDomRef = this.findFirstFieldOfNextElement(oContainer, iCurrentIndex+1, true);

				if (!oNewDomRef) {
					// no next element -> look in next container
					var oForm = oContainer.getParent();
					iCurrentIndex = oForm.indexOfFormContainer(oContainer);
					oNewDomRef = this.findFirstFieldOfFirstElementInNextContainer(oForm, iCurrentIndex+1, true);
				}
			}
		} else if (oElement && oElement instanceof sap.ui.commons.form.FormContainer) {
			// current control is not inside an Element - maybe a title or expander?
			oNewDomRef = this.findFirstFieldOfNextElement(oElement, 0, true);
			if (!oNewDomRef) {
				// no next element -> look in next container
				var oForm = oElement.getParent();
				iCurrentIndex = oForm.indexOfFormContainer(oElement);
				oNewDomRef = this.findFirstFieldOfFirstElementInNextContainer(oForm, iCurrentIndex+1, true);
			}
		}

		if (oNewDomRef) {
			jQuery.sap.focus(oNewDomRef);
			oEvent.preventDefault(); // to avoid moving cursor in next field
		}

	};

	sap.ui.commons.form.FormLayout.prototype.findNextFieldOfElement = function(oElement, iStartIndex, bTabOver){

		var aFields = oElement.getFields();
		var iLength = aFields.length;
		var oNewDomRef;

		for ( var i = iStartIndex; i < iLength; i++) {
			// find the next enabled control thats rendered
			var oField = aFields[i];
			var oDomRef = oField.getFocusDomRef();
			if (bTabOver == true){
				if ((!oField.getEditable || oField.getEditable()) && (!oField.getEnabled || oField.getEnabled()) && oDomRef) {
					oNewDomRef = oDomRef;
					break;
				}
			} else {
				if ((!oField.getEnabled || oField.getEnabled()) && oDomRef) {
					oNewDomRef = oDomRef;
					break;
				}
			}
		}

		return oNewDomRef;

	};

	sap.ui.commons.form.FormLayout.prototype.findFirstFieldOfNextElement = function(oContainer, iStartIndex, bTabOver){

		var aElements = oContainer.getFormElements();
		var iLength = aElements.length;
		var oNewDomRef;
		var i = iStartIndex;

		while (!oNewDomRef && i < iLength) {
			var oElement = aElements[i];
			if (bTabOver == true){
				oNewDomRef = this.findNextFieldOfElement(oElement, 0, true);
			} else {
				oNewDomRef = this.findNextFieldOfElement(oElement, 0);
			}
			i++;
		}

		return oNewDomRef;

	};

	sap.ui.commons.form.FormLayout.prototype.findFirstFieldOfForm = function(oForm){
		var aContainers = oForm.getFormContainers();
		var oNewDomRef;
		var oContainer = aContainers[0];
		if (!oContainer.getExpandable() || oContainer.getExpanded()) {
			oNewDomRef = this.findFirstFieldOfNextElement(oContainer, 0);
		}

		return oNewDomRef;

	};

	sap.ui.commons.form.FormLayout.prototype.findLastFieldOfForm = function(oForm){
		var aContainers = oForm.getFormContainers();
		var iLength = aContainers.length;
		var oNewDomRef;
		var oContainer = aContainers[iLength -1];
		if (!oContainer.getExpandable() || oContainer.getExpanded()) {
			oNewDomRef = this.findFirstFieldOfNextElement(oContainer, 0);
		}

		return oNewDomRef;

	};

		sap.ui.commons.form.FormLayout.prototype.findFirstFieldOfLastContainerOfForm = function(oForm){
		var aContainers = oForm.getFormContainers();
		var iLength = aContainers.length;
		var oNewDomRef;
		var oContainer = aContainers[iLength -1];
		if (!oContainer.getExpandable() || oContainer.getExpanded()) {
			oNewDomRef = this.findFirstFieldOfNextElement(oContainer, 0);
		}

		return oNewDomRef;

	};

	sap.ui.commons.form.FormLayout.prototype.findFirstFieldOfFirstElementInNextContainer = function(oForm, iStartIndex, bTabOver){

		var aContainers = oForm.getFormContainers();
		var iLength = aContainers.length;
		var oNewDomRef;
		var i = iStartIndex;

		while (!oNewDomRef && i < iLength) {
			var oContainer = aContainers[i];
			if (oContainer.getExpandable() && bTabOver) {
				oNewDomRef = oContainer._oExpandButton;
				return oNewDomRef;
				break;
			}
			if (!oContainer.getExpandable() || oContainer.getExpanded()) {
				if (bTabOver == true){
					oNewDomRef = this.findFirstFieldOfNextElement(oContainer, 0, true);
				} else {
					oNewDomRef = this.findFirstFieldOfNextElement(oContainer, 0);
				}
			}
			i++;
		}

		return oNewDomRef;

	};

	sap.ui.commons.form.FormLayout.prototype.findFirstFieldOfFirstElementInPrevContainer = function(oForm, iStartIndex){

		var aContainers = oForm.getFormContainers();
		var iLength = aContainers.length;
		var oNewDomRef;
		var i = iStartIndex;

		while (!oNewDomRef && i < iLength && i >= 0) {
			var oContainer = aContainers[i];
			if (!oContainer.getExpandable() || oContainer.getExpanded()) {
				oNewDomRef = this.findFirstFieldOfNextElement(oContainer, 0);
			}
			i++;
		}

		return oNewDomRef;

	};

	sap.ui.commons.form.FormLayout.prototype.navigateBack = function(oEvent){

		var oControl = oEvent.srcControl;
		var iCurrentIndex = 0;
		var oNewDomRef;
		var oRoot = this.findElement(oControl);
		var oElement = oRoot.element;
		oControl = oRoot.rootControl;
		if (oElement && oElement instanceof sap.ui.commons.form.FormElement) {
			if (oControl == oElement.getLabelControl()) {
				iCurrentIndex = 0;
			} else {
				iCurrentIndex = oElement.indexOfField(oControl);
			}
			oNewDomRef = this.findPrevFieldOfElement(oElement, iCurrentIndex-1);

			if (!oNewDomRef) {
				// use 1st field of next Element
				var oContainer = oElement.getParent();
				iCurrentIndex = oContainer.indexOfFormElement(oElement);
				oNewDomRef = this.findLastFieldOfPrevElement(oContainer, iCurrentIndex-1);

				if (!oNewDomRef) {
					// no next element -> look in next container
					var oForm = oContainer.getParent();
					iCurrentIndex = oForm.indexOfFormContainer(oContainer);
					oNewDomRef = this.findLastFieldOfLastElementInPrevContainer(oForm, iCurrentIndex-1);
				}
			}
		} else if (oElement && oElement instanceof sap.ui.commons.form.FormContainer) {
			// current control is not inside an Element - maybe a title or expander?
			var oForm = oElement.getParent();
			iCurrentIndex = oForm.indexOfFormContainer(oElement);
			oNewDomRef = this.findLastFieldOfLastElementInPrevContainer(oForm, iCurrentIndex-1);
		}

		if (oNewDomRef) {
			jQuery.sap.focus(oNewDomRef);
			oEvent.preventDefault(); // to avoid moving cursor in next field
		}

	};

	sap.ui.commons.form.FormLayout.prototype.tabBack = function(oEvent){

		var oControl = oEvent.srcControl;
		var iCurrentIndex = 0;
		var oNewDomRef;
		var oRoot = this.findElement(oControl);
		var oElement = oRoot.element;
		oControl = oRoot.rootControl;
		if (oElement && oElement instanceof sap.ui.commons.form.FormElement) {
			if (oControl == oElement.getLabelControl()) {
				iCurrentIndex = 0;
			} else {
				iCurrentIndex = oElement.indexOfField(oControl);
			}
			oNewDomRef = this.findPrevFieldOfElement(oElement, iCurrentIndex-1, true);

			if (!oNewDomRef) {
				// use 1st field of next Element
				var oContainer = oElement.getParent();
				iCurrentIndex = oContainer.indexOfFormElement(oElement);
				oNewDomRef = this.findLastFieldOfPrevElement(oContainer, iCurrentIndex-1, true);

				if (!oNewDomRef) {
					// no next element -> look in next container
					var oForm = oContainer.getParent();
					iCurrentIndex = oForm.indexOfFormContainer(oContainer);
					if (oContainer.getExpandable()) {
						oNewDomRef = oContainer._oExpandButton;
					} else {
						oNewDomRef = this.findLastFieldOfLastElementInPrevContainer(oForm, iCurrentIndex-1, true);
					}
				}
			}
		} else if (oElement && oElement instanceof sap.ui.commons.form.FormContainer) {
			// current control is not inside an Element - maybe a title or expander?
			var oForm = oElement.getParent();
			iCurrentIndex = oForm.indexOfFormContainer(oElement);
			oNewDomRef = this.findLastFieldOfLastElementInPrevContainer(oForm, iCurrentIndex-1, true);
		}

		if (oNewDomRef) {
			jQuery.sap.focus(oNewDomRef);
			oEvent.preventDefault(); // to avoid moving cursor in next field
		}

	};
	

	sap.ui.commons.form.FormLayout.prototype.findPrevFieldOfElement = function(oElement, iStartIndex, bTabOver){

		var aFields = oElement.getFields();
		var oNewDomRef;

		for ( var i = iStartIndex; i >= 0; i--) {
			// find the next enabled control thats rendered
			var oField = aFields[i];
			var oDomRef = oField.getFocusDomRef();
			if (bTabOver == true){
				if ((!oField.getEditable || oField.getEditable()) && (!oField.getEnabled || oField.getEnabled()) && oDomRef) {
					oNewDomRef = oDomRef;
					break;
				}
			} else {
				if ((!oField.getEnabled || oField.getEnabled()) && oDomRef) {
					oNewDomRef = oDomRef;
					break;
				}
			}
		}

		return oNewDomRef;

	};

	sap.ui.commons.form.FormLayout.prototype.findLastFieldOfPrevElement = function(oContainer, iStartIndex, bTabOver){

		var aElements = oContainer.getFormElements();
		var oNewDomRef;
		var i = iStartIndex;

		while (!oNewDomRef && i >= 0) {
			var oElement = aElements[i];
			var iLength = oElement.getFields().length;

			if (bTabOver == true){
				oNewDomRef = this.findPrevFieldOfElement(oElement, iLength-1, true);
			} else {
				oNewDomRef = this.findPrevFieldOfElement(oElement, iLength-1);
			}
			i--;
		}

		return oNewDomRef;

	};

	sap.ui.commons.form.FormLayout.prototype.findLastFieldOfLastElementInPrevContainer = function(oForm, iStartIndex, bTabOver){

		var aContainers = oForm.getFormContainers();
		var oNewDomRef;
		var i = iStartIndex;

		while (!oNewDomRef && i >= 0) {
			var oContainer = aContainers[i];
			if (oContainer.getExpandable() && !oContainer.getExpanded() && bTabOver) {
				oNewDomRef = oContainer._oExpandButton;
				return oNewDomRef;
				break;
			}
			if (!oContainer.getExpandable() || oContainer.getExpanded()) {
				var iLength = oContainer.getFormElements().length;
				if (bTabOver == true){
					oNewDomRef = this.findLastFieldOfPrevElement(oContainer, iLength-1, true);
				} else {
					oNewDomRef = this.findLastFieldOfPrevElement(oContainer, iLength-1, 0);
				}
			}
			i--;
		}

		return oNewDomRef;

	};

	sap.ui.commons.form.FormLayout.prototype.findFieldBelow = function(oControl, oElement){

		var oContainer = oElement.getParent();
		var iCurrentIndex = oContainer.indexOfFormElement(oElement);
		var oNewDomRef = this.findFirstFieldOfNextElement(oContainer, iCurrentIndex+1);

		if (!oNewDomRef) {
			// no next element -> look in next container
			var oForm = oContainer.getParent();
			iCurrentIndex = oForm.indexOfFormContainer(oContainer);
			oNewDomRef = this.findFirstFieldOfFirstElementInNextContainer(oForm, iCurrentIndex+1);
		}

		return oNewDomRef;

	};


	sap.ui.commons.form.FormLayout.prototype.findFieldAbove = function(oControl, oElement){

		var oContainer = oElement.getParent();
		var iCurrentIndex = oContainer.indexOfFormElement(oElement);

		var aElements = oContainer.getFormElements();
		var oNewDomRef;
		var i = iCurrentIndex-1;

		while (!oNewDomRef && i >= 0) {
			var oElement = aElements[i];
			oNewDomRef = this.findPrevFieldOfElement(oElement, 0);
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
