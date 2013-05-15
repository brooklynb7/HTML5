/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.ComboBox.
jQuery.sap.declare("sap.ui.commons.ComboBox");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.commons.TextField");

/**
 * Constructor for a new ComboBox.
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
 * <li>{@link #getMaxPopupItems maxPopupItems} : int (default: 10)</li>
 * <li>{@link #getDisplaySecondaryValues displaySecondaryValues} : boolean (default: false)</li>
 * <li>{@link #getSelectedKey selectedKey} : string</li>
 * <li>{@link #getSelectedItemId selectedItemId} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.core.ListItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getListBox listBox} : string | sap.ui.commons.ListBox</li></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.TextField#constructor sap.ui.commons.TextField}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * 
 * The control provides a field that allows end users to either enter some text, or to choose an entry out of a list of pre-defined items. The choosable items can be provided in the form of complete list boxes, single listbox items, or text strings defined for the current application.
 * 
 * @extends sap.ui.commons.TextField
 * @implements sap.ui.commons.ToolbarItem
 *
 * @author SAP AG 
 * @version 1.10.0
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.ComboBox
 */
sap.ui.commons.TextField.extend("sap.ui.commons.ComboBox", { metadata : {

	// ---- object ----
	interfaces : [
		"sap.ui.commons.ToolbarItem"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"maxPopupItems" : {type : "int", group : "Behavior", defaultValue : 10},
		"displaySecondaryValues" : {type : "boolean", group : "Misc", defaultValue : false},
		"selectedKey" : {type : "string", group : "Data", defaultValue : null},
		"selectedItemId" : {type : "string", group : "Data", defaultValue : null}
	},
	defaultAggregation : "items",
	aggregations : {
    	"items" : {type : "sap.ui.core.ListItem", multiple : true, singularName : "item", bindable : "bindable"}
	},
	associations : {
		"listBox" : {type : "sap.ui.commons.ListBox", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.ComboBox with name <code>sClassName</code> 
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
 * @name sap.ui.commons.ComboBox.extend
 * @function
 */


/**
 * Getter for property <code>maxPopupItems</code>.
 * 
 * Defines the number of items that shall be displayed at once. If the overall number of list items is higher than the setting, a scrollbar is provided.
 * 
 *
 * Default value is <code>10</code>
 *
 * @return {int} the value of property <code>maxPopupItems</code>
 * @public
 * @name sap.ui.commons.ComboBox#getMaxPopupItems
 * @function
 */


/**
 * Setter for property <code>maxPopupItems</code>.
 *
 * Default value is <code>10</code> 
 *
 * @param {int} iMaxPopupItems  new value for property <code>maxPopupItems</code>
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ComboBox#setMaxPopupItems
 * @function
 */

/**
 * Getter for property <code>displaySecondaryValues</code>.
 * Indicates whether the "additionalText" property that is available for sap.ui.core.ListItem shall be displayed in the list.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>displaySecondaryValues</code>
 * @public
 * @name sap.ui.commons.ComboBox#getDisplaySecondaryValues
 * @function
 */


/**
 * Setter for property <code>displaySecondaryValues</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bDisplaySecondaryValues  new value for property <code>displaySecondaryValues</code>
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ComboBox#setDisplaySecondaryValues
 * @function
 */

/**
 * Getter for property <code>selectedKey</code>.
 * Key of the selected item.
 * If the value has no corresponding item the key is empty.
 * If douplicate keys exists the first item matching the key is used.
 * If the key is set to a not existing value it will not be changed.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>selectedKey</code>
 * @public
 * @name sap.ui.commons.ComboBox#getSelectedKey
 * @function
 */


/**
 * Setter for property <code>selectedKey</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSelectedKey  new value for property <code>selectedKey</code>
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ComboBox#setSelectedKey
 * @function
 */

/**
 * Getter for property <code>selectedItemId</code>.
 * Id of Selected item. If the value has no corresponding item, the selected item id is empty.
 * If the selected item id is set to an not existing item, it will not be changed.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>selectedItemId</code>
 * @public
 * @name sap.ui.commons.ComboBox#getSelectedItemId
 * @function
 */


/**
 * Setter for property <code>selectedItemId</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSelectedItemId  new value for property <code>selectedItemId</code>
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ComboBox#setSelectedItemId
 * @function
 */
	
/**
 * Getter for aggregation <code>items</code>.<br/>
 * 
 * Getter for aggregation items. Allows setting ListItems (see sap.ui.core.ListBox) that shall be displayed in the list.
 * 
 * 
 * @return {sap.ui.core.ListItem[]}
 * @public
 * @name sap.ui.commons.ComboBox#getItems
 * @function
 */

/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.ListItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ComboBox#insertItem
 * @function
 */


/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.ListItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ComboBox#addItem
 * @function
 */


/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.core.ListItem} vItem the item to remove or its index or id
 * @return {sap.ui.core.ListItem} the removed item or null
 * @public
 * @name sap.ui.commons.ComboBox#removeItem
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.ListItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.ComboBox#removeAllItems
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.core.ListItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.ListItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.ComboBox#indexOfItem
 * @function
 */


/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ComboBox#destroyItems
 * @function
 */

/**
 * Binder for aggregation <code>items</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ComboBox#bindItems
 * @function
 */


/**
 * Unbinder for aggregation <code>items</code>.
 *
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ComboBox#unbindItems
 * @function
 */

/**
 * 
 * Using this method, you provide a listbox control. This allows reuse of item lists in different controls. Either a control id can be used as new target, or a control instance.
 * 
 *
 * @return {string} Id of the element which is the current target of the <code>listBox</code> association, or null
 * @public
 * @name sap.ui.commons.ComboBox#getListBox
 * @function
 */


/**
 * 
 * Using this method, you provide a listbox control. This allows reuse of item lists in different controls. Either a control id can be used as new target, or a control instance.
 * 
 *
 * @param {string | sap.ui.commons.ListBox} vListBox 
 *    Id of an element which becomes the new target of this <code>listBox</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ComboBox#setListBox
 * @function
 */

// Start of sap/ui/commons/ComboBox.js
jQuery.sap.require("jquery.sap.strings");
jQuery.sap.require("sap.ui.core.Popup");

//Provide information for validation for used undeclared aggregations
sap.ui.commons.ComboBox.getMetadata()._mHiddenAggregations = {"myListBox": {multiple: false, type: "sap.ui.commons.ListBox"}};

/**
 * Initializes the control.
 * It is called from the constructor.
 * @private
 */
sap.ui.commons.ComboBox.prototype.init = function(){
	this._iClosedUpDownIdx = -1;
	this._sCloseId = null;
	this.setAccessibleRole(sap.ui.core.AccessibleRole.Combobox);

	if (jQuery.device.is.ipad || jQuery.device.is.iphone || jQuery.os.os == "android") {
		this.mobile = true;
	}
};

/**
 * Destroy the private ListBox if it exists.
 * @private
 */
sap.ui.commons.ComboBox.prototype.exit = function() {
	if ( this._oListBox ) {
		this._oListBoxDelegate && this._oListBox.removeDelegate(this._oListBoxDelegate);
		if (this.getAggregation("myListBox")) {
			this.destroyAggregation("myListBox", true);
		}else{
			this._oListBox.destroy();
		}
		this._oListBox = null;
	}
	this._sWantedSelectedKey = undefined;
	this._sWantedSelectedItemId = undefined;
};


//***********************************************************
// Mouse handling...
//***********************************************************

/*
 * Handle click events triggered on the control and if triggered on F4-button open or close the proposal list
 *
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.ComboBox.prototype.onclick = function(oEvent){
	if(this.getEnabled && this.getEnabled() && this.getEditable() && oEvent.target === this.getF4ButtonDomRef()){
		if(this.oPopup && this.oPopup.isOpen()){
			this._close();
		} else if(!this._F4ForClose) {
			this._open();
		}
		this.focus();
	}
	this._F4ForClose = false;
};

/*
 * Handle mousedown events triggered on the control
 *
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.ComboBox.prototype.onmousedown = function(oEvent){
	if(oEvent.target !== this.getF4ButtonDomRef() || !this.getEnabled() || !this.getEditable()) {
		if (this.oPopup && this.oPopup.isOpen()) {
			// stop propagation of event, otherwise if the ComboBox is in a dialog (popup) this will move in front of the listbox
			oEvent.stopPropagation();
		}
		return;
	}

	if(this.oPopup && this.oPopup.isOpen()){
		this._F4ForClose = true;
	} else {
		this._F4ForOpen = true;
	}
};


//***********************************************************
// Keyboard handling...
//***********************************************************

/**
 * Handle sapshow pseudo events on the control
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.ComboBox.prototype.onsapshow = function(oEvent){

	if (this.mobile) {
		return;
	}

	if(this.oPopup && this.oPopup.isOpen()) {
		this._close();
	}
	else {
		this._open();
	}
	oEvent.preventDefault();
	oEvent.stopImmediatePropagation();
};

/**
 * Handle sapnextmodifiers pseudo events on the control
 * if in toolbar prevent item navigation if popup is opened.
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.ComboBox.prototype.onsapnextmodifiers = function(oEvent){
	sap.ui.commons.TextField.prototype.onsapnextmodifiers.apply(this, arguments);
	if( oEvent.keyCode == jQuery.sap.KeyCodes.ARROW_DOWN && oEvent.altKey ){
		this.onsapshow(oEvent);
		oEvent.stopPropagation();
	}
};

/**
 * Handle saphide pseudo events on the control
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.ComboBox.prototype.onsaphide = function(oEvent){

	if (this.mobile) {
		return;
	}

	this._close();
	oEvent.stopPropagation(); // prevent item navigation in toolbar
};

/**
 * Handle sapescape pseudo events on the control
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.ComboBox.prototype.onsapescape = function(oEvent) {
	this._close();
	// standard behavior of TextField
	sap.ui.commons.TextField.prototype.onsapescape.apply(this, arguments);
};

/**
 * Handle sapenter pseudo events on the control
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.ComboBox.prototype.onsapenter = function(oEvent) {
	this._close();
	this._checkChange(oEvent, true);
};


//***********************************************************
//Focus handling...
//***********************************************************

/**
 * Handle the sapfocusleave pseudo event and ensure that when the focus moves to the list box,
 * the check change functionality (incl. fireChange) is not triggered.
 * @protected
 */
sap.ui.commons.ComboBox.prototype.onsapfocusleave = function(oEvent) {
	this._resetCheck();
	var oLB = this._getListBox();
	if(oEvent.relatedControlId && jQuery.sap.containsOrEquals(oLB.getFocusDomRef(), sap.ui.getCore().byId(oEvent.relatedControlId).getFocusDomRef())){
		this.focus();
	} else {
		// we left the ComboBox to another (unrelated) control and thus have to fire the change (if needed).
		this._checkChange(oEvent, true);
	}
};

//***********************************************************
// Change handling and related event firing
//***********************************************************

/**
 * Compares the previous value with the current value and fires the "Change" event
 * if the ComboBox is editable and the value has changed or whether the value has been changed
 * e.g. via up/down or auto-complete feature
 *
 * @param {jQuery.Event} oEvent
 * @param {boolean} [bImmediate] indicate whether the check should happen immediately or delayed (e.g. to avoid focusout / click double event processing)
 * @protected
 */
sap.ui.commons.ComboBox.prototype._checkChange = function(oEvent, bImmediate) {
	this._resetCheck();
	if(!bImmediate){
		// in case there is no sapfocusleave (i.e. core does not know where the focus went to)
		// we still fire this event (as obviously it cannot be in the Combo and related control(s) anymore)
		this._sCheckId = jQuery.sap.delayedCall(50,this, "_checkChange", [oEvent, true]);
		return;
	}

	var oInput = this.getInputDomRef();
	if (!oInput) {
		// to be save if some one deletes field from DOM during delayed call
		return;
	}

	var newVal = jQuery(oInput).val(),
		oldVal = this.getValue();

	if(!this._F4ForOpen && (
			this.getEditable() && this.getEnabled() && (oldVal != newVal))){
		this.setValue(newVal, true);
		var aItems = this.getItems(),
			oItem = null,
			oText,
			sKey,
			sId,
			iIndex;
		for(var i = 0, l = aItems.length; i < l; i++){
			oText = aItems[i].getText();
			if(oText === newVal) {
				oItem = aItems[i];
				sKey = oItem.getKey();
				sId  = oItem.getId();
				iIndex = i;
				break;
			}
		}
		this.setProperty("selectedKey", sKey, true); // no rerendering needed
		this.setProperty("selectedItemId", sId, true); // no rerendering needed
		if (this.mobile) {
			if (!sId) {
				// no list item entered (free text) => add one dummy item to the select box
				this._addDummyOption(newVal);
			}else{
				this._removeDummyOption();
				jQuery.sap.domById(this.getId()+"-select").selectedIndex = iIndex;
			}
		}
		this._sWantedSelectedKey = undefined;
		this._sWantedSelectedItemId = undefined;
		this.fireChange({newValue:newVal, selectedItem: oItem});
	}
};


/**
 * Resets check for changes in case there is a delayed one pending.
 * @private
 */
sap.ui.commons.ComboBox.prototype._resetCheck = function() {
	if(!this._sCheckId) {
		return;
	}
	jQuery.sap.clearDelayedCall(this._sCheckId);
	this._sCheckId = null;
};

//***********************************************************
// Advanced keyboard handling... type ahead, up / down navigation, ...
//***********************************************************

/**
 * Handle the keypress event
 * @param {jQuery.Event} oEvent the event that occurred on the ComboBox
 * @private
 */
sap.ui.commons.ComboBox.prototype.onkeypress = function(oEvent) {

	if (oEvent.target.id == this.getId()+"-select") {
		// on native dropdown -> no implemented typeAhead
		return;
	}

	if (!this.getEnabled() || !this.getEditable()) {
		return;
	}

	if(this._sTypeAhead) {
		jQuery.sap.clearDelayedCall(this._sTypeAhead);
	}

	var oKC = jQuery.sap.KeyCodes;
	if(sap.ui.commons.ComboBox._isHotKey(oEvent) || oEvent.keyCode === oKC.F4 && oEvent.which === 0 /*this is the Firefox case and ensures 's' with same charCode is accepted*/) {
		return;
	}

	var iKC = oEvent.which || oEvent.keyCode;
	if(iKC !== oKC.DELETE && iKC !== oKC.BACKSPACE && iKC !== oKC.ESCAPE){
		this._sTypeAhead = jQuery.sap.delayedCall(200, this, "_doTypeAhead");
	} else{
		// standard behavior of TextField
		sap.ui.commons.TextField.prototype.onkeypress.apply(this, arguments);
		jQuery(this.getInputDomRef()).removeAttr("aria-posinset");
	}
	// Do not cancel the event as this would prevent typing in the field.
};

/**
 * Handle the sapup event
 * TODO How do we enable switching this off? e.g. in table case, arrow keys might trigger
 *      cell navigation instead of this one? is there a special key to 're-enable' again? like right-Alt key?
 *
 * @param {jQuery.Event} oEvent the event that occurred on the ComboBox
 * @private
 */
sap.ui.commons.ComboBox.prototype.onsapup = function(oEvent) {

	if (oEvent.target.id == this.getId()+"-select") {
		// on native dropdown -> no implemented typeAhead
		return;
	}

	if (!this.getEnabled() || !this.getEditable()) {
		return;
	}

	if (jQuery(this.getFocusDomRef()).data("sap.InNavArea")) {
		// parent handles arrow navigation
		return;
	}

	var oListBox = this._getListBox(),
		aItems = oListBox.getItems(),
		oDomRef = this.getInputDomRef(),
		oValue = jQuery(oDomRef).val();

	var i = this._prepareUpDown(aItems, oValue);
	i = this._updateIdx(aItems, oDomRef, i-1, i);

	oEvent.preventDefault();
	oEvent.stopPropagation(); // prevent itemNavigation if ComboBox is in toolbar
};

/**
 * Handle the sapdown event.
 * TODO How do we enable switching this off? e.g. in table case, arrow keys might trigger
 *      cell navigation instead of this one? is there a special key to 're-enable' again? like right-Alt key?
 *
 * @param {jQuery.Event} oEvent the event that occurred on the ComboBox
 * @private
 */
sap.ui.commons.ComboBox.prototype.onsapdown = function(oEvent) {

	if (oEvent.target.id == this.getId()+"-select") {
		// on native dropdown -> no implemented typeAhead
		return;
	}

	if (!this.getEnabled() || !this.getEditable()) {
		return;
	}

	if (jQuery(this.getFocusDomRef()).data("sap.InNavArea")) {
		// parent handles arrow navigation
		return;
	}

	var oListBox = this._getListBox(),
		aItems = oListBox.getItems(),
		oDomRef = this.getInputDomRef(),
		oValue = jQuery(oDomRef).val();

	var i = this._prepareUpDown(aItems, oValue);
	i = this._updateIdx(aItems, oDomRef, i+1, i);

	oEvent.preventDefault();
	oEvent.stopPropagation(); // prevent itemNavigation if ComboBox is in toolbar
};

/**
 * Handle the saphome event.
 * TODO How do we enable switching this off? e.g. in table case, arrow keys might trigger
 *      cell navigation instead of this one? is there a special key to 're-enable' again? like right-Alt key?
 *
 * @param {jQuery.Event} oEvent the event that occurred on the ComboBox
 * @private
 */

sap.ui.commons.ComboBox.prototype.onsaphome = function(oEvent) {
	sap.ui.commons.TextField.prototype.onsaphome.apply(this, arguments);

	if (oEvent.target.id == this.getId()+"-select") {
		// on native dropdown -> no implemented typeAhead
		return;
	}

	if(!this.getEditable() || !this.getEnabled() || !this.oPopup || !this.oPopup.isOpen()) {
		return;
	}

	var oListBox = this._getListBox(),
		aItems = oListBox.getItems(),
		oDomRef = this.getInputDomRef();

	var i = this._updateIdx(aItems, oDomRef,0);

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Handle the sapend event.
 * TODO How do we enable switching this off? e.g. in table case, arrow keys might trigger
 *      cell navigation instead of this one? is there a special key to 're-enable' again? like right-Alt key?
 *
 * @param {jQuery.Event} oEvent the event that occurred on the ComboBox
 * @private
 */

sap.ui.commons.ComboBox.prototype.onsapend = function(oEvent) {
	sap.ui.commons.TextField.prototype.onsapend.apply(this, arguments);

	if (oEvent.target.id == this.getId()+"-select") {
		// on native dropdown -> no implemented typeAhead
		return;
	}

	if(!this.getEditable() || !this.getEnabled() || !this.oPopup || !this.oPopup.isOpen()) {
		return;
	}

	var oListBox = this._getListBox(),
		aItems = oListBox.getItems(),
		oDomRef = this.getInputDomRef();

	var i = aItems.length - 1;
	i = this._updateIdx(aItems, oDomRef, i);

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * method for delayed handle of type ahead in closed combobox
 * @private
 */
sap.ui.commons.ComboBox.prototype._doTypeAhead = function(){
	this._sTypeAhead = null;
	this._sWantedSelectedKey = undefined; // something typed -> do not search again for not existing items
	this._sWantedSelectedItemId = undefined;
	var oLB = this._getListBox(),
		aItems = oLB.getItems(),
		oItem,
		oText,
		$Ref = jQuery(this.getInputDomRef()),
		oValue = $Ref.val(),
		startsWith = jQuery.sap.startsWithIgnoreCase;
	this._sTypedChars = oValue;
	var bFound = false;
	var i = 0;
	for (var l = aItems.length; i < l; i++){
		oItem = aItems[i];
		oText = "" + oItem.getText();
		if(startsWith(oText, oValue) && oItem.getEnabled()) {
			$Ref.attr("aria-posinset", i+1);
			$Ref.val(oText);
			this._doSelect(oValue.length, oText.length);

			oLB.setSelectedIndex(i);
			oLB.scrollToIndex(i, true);
			bFound = true;
			if(this.mobile){
				this._removeDummyOption();
				jQuery.sap.domById(this.getId()+"-select").selectedIndex = i;
			}
			return;
		}
	}
	oLB.clearSelection();
	oLB.scrollToIndex(i, true);
	if (!bFound) {
		$Ref.removeAttr("aria-posinset");
		if(this.mobile){
			this._addDummyOption(oValue);
		}
	}
};

/**
 * Prepares for the up and down arrow handling.
 * Checks whether there is a set index and this still matches the given value
 * @param {sap.ui.core.ListItem[]} aItems array of listitems that should be used.
 * @param {string} oValue
 * @type int
 * @return the new index
 * @private
 */
sap.ui.commons.ComboBox.prototype._prepareUpDown = function(aItems, oValue){
	var oText;
	if(this._iClosedUpDownIdx >= 0 && aItems[this._iClosedUpDownIdx] && aItems[this._iClosedUpDownIdx].getText() !== oValue) {
		this._iClosedUpDownIdx = -1;
	}

	if(this._iClosedUpDownIdx === -1){
		for(var i = 0, l = aItems.length; i < l; i++){
			oText = aItems[i].getText();
			if(oText === oValue) {
				this._iClosedUpDownIdx = i;
				break;
			}
		}
	}
	return this._iClosedUpDownIdx;
};

/**
 * Updates the value of the comboBox taking the given idx into account.
 *
 * @param {sap.ui.core.ListItem[]} aItems the items belonging to this ComboBox
 * @param {string} oDomRef the dom ref of the inputField to update
 * @param {int} iNewIdx the index to set
 * @param {int} [iCurIdx] The index to 'fall back to'.
 *						  Leave blank in case of navigation to 'first' (home-key) or 'last' (end-key). Will ensure 'first' or 'last' selectable item will be selected.
 * @return {int} the actually set index (which might have been corrected)
 * @private
 */
sap.ui.commons.ComboBox.prototype._updateIdx = function(aItems, oDomRef, iNewIdx, iCurIdx){
	var l = aItems.length,
		bFirst = iNewIdx === 0 && iCurIdx === undefined,
		bLast = iNewIdx === l-1 && iCurIdx === undefined,
		bDown = iCurIdx !== undefined && iCurIdx < iNewIdx || bFirst,
		i = (iNewIdx < 0 ? 0 : (iNewIdx < l ? iNewIdx: l - 1)),
		$Ref = jQuery(oDomRef);
	var oItem,
		bValid = false;
	do {
		iNewIdx = bDown ? i++ : i--;
		oItem = aItems[iNewIdx];
		bValid = oItem && oItem.getEnabled() && !(oItem instanceof sap.ui.core.SeparatorItem) && oItem.getId() !== this.getId() + "_shi";
	} while(!bValid && i < l && i >= 0);
	if(bValid){
		var oText = oItem.getText();
		var iPos = iNewIdx + 1;
		if (this._determinePosinset) {
			iPos = this._determinePosinset(aItems, iNewIdx); //in DropdownBox separators must be removed from Posinset
		}
		$Ref.attr("aria-posinset", iPos);
		$Ref.val(oText);
		this._doSelect();

		var oListBox = this._getListBox();
		oListBox.setSelectedIndex(iNewIdx);
		oListBox.scrollToIndex(iNewIdx, true);
	} else {
		iNewIdx = iCurIdx;
	}
	this._iClosedUpDownIdx = iNewIdx;
	return iNewIdx;
};

/**
 * Selects the text of the InputDomRef in the given range
 * @param {int} [iStart=0] start position of the text selection
 * @param {int} [iEnd=<length of text>] end position of the text selection
 * @return {sap.ui.commons.ComboBox} this DropdownBox instance
 * @private
 */
sap.ui.commons.ComboBox.prototype._doSelect = function(iStart, iEnd){

	var oDomRef =this.getInputDomRef();

	if (oDomRef) {
		//if no Dom-Ref - no selection (Maybe popup closed)
		var $Ref = jQuery(oDomRef);
		oDomRef.focus();
		$Ref.selectText(iStart?iStart:0, iEnd?iEnd:$Ref.val().length);
	}

	return this;

};


//***********************************************************
// DOM Ref handling
//***********************************************************

/**
 * Returns the DomRef that should get the focus.
 * @see sap.ui.core.Element#getDomRef
 * @return {DOMNode} The element's DOM reference or null
 * @protected
 */
sap.ui.commons.ComboBox.prototype.getFocusDomRef = function() {
	return this.getInputDomRef();
};

/**
 * Returns the DomRef that allows input.
 * Could be overwritten in child-classes
 *
 * @return {DOMNode} The input element's DOM reference or null
 * @protected
 */
sap.ui.commons.ComboBox.prototype.getInputDomRef = function() {
//	return this.$().find("input").get(0);
	return jQuery.sap.domById(this.getId() + "-input");
};

/**
 * Returns the DomRef which represents the icon for value help.
 * Could be overwritten in child-classes
 *
 * @return {DOMNode} The F4-element's DOM reference or null
 * @protected
 */
sap.ui.commons.ComboBox.prototype.getF4ButtonDomRef = function() {
	return jQuery.sap.domById(this.getId() + "-icon");
};


//***********************************************************
// List Box handling (incl. creation of 'private one')
//***********************************************************

/**
 * Returns the private listbox.
 * Creates a new one if not yet done.
 * @type sap.ui.commons.ListBox
 * @return the private listbox
 * @private
 */
sap.ui.commons.ComboBox.prototype._getPrivateListBox = function(){
	if(this._oListBox) {
		return this._oListBox;
	}
	// else
	this._oListBox = new sap.ui.commons.ListBox(this.getId() + "-lb", {allowMultiSelect:false});
	this.setAggregation("myListBox", this._oListBox, true);
	this._oListBox.attachEvent("itemsChanged",this._handleItemsChanged, this);
	this._oListBox.attachEvent("itemInvalidated",this._handleItemInvalidated, this);

	return this._oListBox;
};

/**
 * Returns the listbox that should be used.
 * This is either the one set from outside or the one created as 'private'
 * @type sap.ui.commons.ListBox
 * @param {boolean} bUpdateListBox indicate whether the ListBox should be updated for rerendering
 * @return the listbox that should be used
 * @private
 */
sap.ui.commons.ComboBox.prototype._getListBox = function(bUpdateListBox){
	var sListBox = this.getListBox(),
		oListBox;
	if(sListBox) {
		oListBox = sap.ui.getCore().getControl(sListBox);
	} else {
		oListBox = this._getPrivateListBox();
	}
	if(bUpdateListBox){
		oListBox.setAllowMultiSelect(false);
		oListBox.setDisplaySecondaryValues(this.getDisplaySecondaryValues());

		var oDomRef = this.getDomRef();
		if(oDomRef) {
			oListBox.setMinWidth(jQuery(oDomRef).rect().width + "px");
		}
	}
	return oListBox;
};


//***********************************************************
// Closing and opening the drop down
//***********************************************************

/**
 * Opens the proposal list of the ComboBox
 * @private
 */
sap.ui.commons.ComboBox.prototype._open = function(iDuration){

	if(this.mobile) {
		return; // on mobile devices use native dropdown.
	}

	if(iDuration === undefined){
		iDuration = -1;
	}

	if(!this.getEditable() || !this.getEnabled()) {
		return;
	}

	if(!this.oPopup) {
		this.oPopup = new sap.ui.core.Popup();
	}

	this._F4ForOpen = false;

	var oListBox = this._getListBox(!this.oPopup.isOpen());
	var oPopup = this.oPopup;
	this._prepareOpen(oListBox);
	if(!this._oListBoxDelegate) {
		this._oListBoxDelegate = {oCombo: this, onclick: function(oEvent){ // FIXME: is this code ever executed? ListBox selection triggers _handleSelect which closes the Popup and removes this delegate again before the delegates for onclick are called
			// cover also the case of 'confirm initial proposal'
			var itemId = jQuery(oEvent.target).closest("li").attr("id");
			// could also be done via EventPool... but whose to use? Combo's? ListBox'?
			var oEvent = new sap.ui.base.Event("_internalSelect", this.oCombo, {selectedId: itemId});
			this.oCombo._handleSelect(oEvent);
		}};
	}
	oListBox.addDelegate(this._oListBoxDelegate);

	// and update the given popup instance
	oPopup.setContent(oListBox);
	oPopup.setAutoClose(true);
	oPopup.setAutoCloseAreas([this.getDomRef()]);
	oPopup.setDurations(0, 0); // no animations
	oPopup.setInitialFocusId(this.getId()+'-input'); // to prevent popup to set focus to the ListBox -> stay in input field

	// now, as everything is set, ensure HTML is up-to-date
	// This is separated in a function because controls which inherit the Combobox (e.g. SearchField) might overriden this
	// Here is also the possibility to interrupt the open procedure of the list (e.g. when the list is empty)
	var bSkipOpen = this._rerenderListBox(oListBox);
	if(bSkipOpen) {
		return;
	}

	oPopup.attachOpened(this._handleOpened, this);
	// attachClosed moved to _handleOpened

	var eDock = sap.ui.core.Popup.Dock;
	oPopup.open(iDuration, eDock.BeginTop, eDock.BeginBottom, this/*.getDomRef()*/, null, null, true);
	jQuery(oListBox.getFocusDomRef()).attr("tabIndex", "-1");
	//attachSelect moved to _handleOpened

	jQuery(this.getDomRef()).attr("aria-expanded", true);

};

/**
 * Rerenders the attached Listbox
 * @private
 */
sap.ui.commons.ComboBox.prototype._rerenderListBox = function(oListBox){
//	do not use oListBox.rerender(); because this not deletes rerender-timer. So it will be rerendered
//  twice in DropdownBox.
	sap.ui.getCore().applyChanges();
	return false;
};

/**
 * Walks over the list of available items in the given oListBox and updates the visual selection.
 * Also updates the Popup to show the right content.
 *
 * @param {sap.ui.commons.ListBox} oListBox listBox belonging to this ComboBox instance.
 * @private
 */
sap.ui.commons.ComboBox.prototype._prepareOpen = function(oListBox) {
	// update the list and the input field
	var $Ref = jQuery(this.getInputDomRef()),
		oValue = $Ref.val(),
		aItems = oListBox.getItems(),
		oText,
		startsWith = jQuery.sap.startsWithIgnoreCase,
		bSelected = false,
		bEmptyString = oValue === "",
		oItem;
	var i = 0;
	for (var l = aItems.length; i < l; i++){
		oItem = aItems[i];
		if(!oItem.getEnabled()) {
			continue;
		}
		oText = "" + oItem.getText();
		if(bEmptyString || startsWith(oText, oValue)) {
			bSelected = true;
			// ensure to mark pending only when set anew
			this._iClosedUpDownIdx = i;
			$Ref.attr("aria-posinset", i+1);
			$Ref.val(oText);
			this._doSelect();
			break;
		}
	}
	if(!bSelected){
		i = -1;
	}
	var iItemsLength = oListBox.getItems().length;
	var iMaxPopupItems = this.getMaxPopupItems();
	oListBox.setVisibleItems(iMaxPopupItems < iItemsLength ? iMaxPopupItems : iItemsLength);
	oListBox.setSelectedIndex(i);

	// preparation of Popup moved to _open method again to allow cleaner implementation in dropdown box
};

/**
 * Once the ListBox is opened, we can update the scroll position
 * @private
 */
sap.ui.commons.ComboBox.prototype._handleOpened = function(){
	this.oPopup.detachOpened(this._handleOpened, this);
	var oListBox = this._getListBox();
	oListBox.scrollToIndex(this._iClosedUpDownIdx, true);
	oListBox.attachSelect(this._handleSelect, this);
	// and also ensure we get to know it closes / gets closed via automatic-close again
	this.oPopup.attachClosed(this._handleClosed, this);

	if (jQuery.browser.msie) {
		// as IE just ignores syncron focus() called from popup by opening it must be called asynchron
		// otherwise onfocusin is not executed.
		jQuery.sap.delayedCall(0, this, function(){
			jQuery(this.getInputDomRef()).focus();
		});
	}

	// if ComboBox is open -> switch to action mode
	if (jQuery(this.getFocusDomRef()).data("sap.InNavArea")) {
		jQuery(this.getFocusDomRef()).data("sap.InNavArea", false);
	}

};

/**
 * Closes  the proposal list of the ComboBox
 * @private
 */
sap.ui.commons.ComboBox.prototype._close = function(oEvent){
	if(this.oPopup) { // only if there is a Popup, the list box might have been used
		this.oPopup.close(0);
	}
};

/**
 * As there might also be situation where the auto-close functionality triggers the close,
 * ensure to handle everything in the event listener
 * @private
 */
sap.ui.commons.ComboBox.prototype._handleClosed = function(){
	this.oPopup.detachClosed(this._handleClosed, this);
	var oListBox = this._getListBox();
	oListBox.removeDelegate(this._oListBoxDelegate);
	oListBox.detachSelect(this._handleSelect, this);
	jQuery(this.getDomRef()).attr("aria-expanded", false);

	if(this._cleanupClose) {
		this._cleanupClose(oListBox);
	}
};

/**
 * This method is attached to the ListBox instance when it is open
 * to handle the click event occurring in the ListBox.
 * It additionally closes the Popup.
 * @param {sap.ui.base.Event} oControlEvent The event that was raised by the Listbox
 * @private
 */
sap.ui.commons.ComboBox.prototype._handleSelect = function(oControlEvent) {
	this._resetCheck();
	var iSelected = oControlEvent.getParameter("selectedIndex"),
		iSelectedId = oControlEvent.getParameter("selectedId"),
		oItem = oControlEvent.getParameter("selectedItem");

	if(!oItem && iSelectedId){
		oItem = sap.ui.getCore().byId(iSelectedId);
		if(oItem.getParent() !== this._getListBox(false)) {// can this happen?
			oItem = null;
		}
		iSelected = jQuery.inArray(oItem, this._getListBox().getItems());
	}
	if(oItem && oItem.getEnabled()) {
		this._close();
		var oTmpValue = oItem.getText();
		this._iClosedUpDownIdx = iSelected;
		jQuery(this.getInputDomRef()).attr("aria-posinset", this._getListBox().getSelectedIndex()+1);
		this.setValue(oTmpValue, true);
		this.setProperty("selectedKey", oItem.getKey(), true); // no rerendering needed
		this.setProperty("selectedItemId", oItem.getId(), true); // no rerendering needed
		this._sTypedChars = oTmpValue;
		this._sWantedSelectedKey = undefined;
		this._sWantedSelectedItemId = undefined;
		this.fireChange({newValue: oTmpValue, selectedItem: oItem});
	}
	this._doSelect();
	return oItem;
};


//***********************************************************
// Handle aggregation and association
//***********************************************************

//Handle items aggregation
sap.ui.commons.ComboBox.prototype.getItems = function(){
	return this._getListBox()?this._getListBox().getItems():[];
};
sap.ui.commons.ComboBox.prototype.insertItem = function(oItem, iIndex){
	this._getListBox().insertItem(oItem, iIndex);
	return this;
};
sap.ui.commons.ComboBox.prototype.addItem = function(oItem){
	this._getListBox().addItem(oItem);
	return this;
};
sap.ui.commons.ComboBox.prototype.removeItem = function(vElement) {
	return this._getListBox().removeItem(vElement);
};
sap.ui.commons.ComboBox.prototype.removeAllItems = function() {
	return this._getListBox().removeAllItems();
};
sap.ui.commons.ComboBox.prototype.indexOfItem = function(oItem){
	return this._getListBox().indexOfItem(oItem);
};
sap.ui.commons.ComboBox.prototype.destroyItems = function(){
	this._getListBox().destroyItems();
	return this;
};

sap.ui.commons.ComboBox.prototype.updateItems = function(){

	this.bNoItemCheck = true;

	this.updateAggregation("items");

	this.bNoItemCheck = undefined;
	this._handleItemsChanged();

};

// handle listBox association
sap.ui.commons.ComboBox.prototype.setListBox = function(sListBox) {

	var oOldListBox = sap.ui.getCore().byId(this.getListBox());
	if (oOldListBox) {
		oOldListBox.detachEvent("itemsChanged", this._handleItemsChanged, this);
		oOldListBox.detachEvent("itemInvalidated",this._handleItemInvalidated, this);
	}

	// if we created our own listBox beforehand, destroy it as the newly set one should win.
	if (this._oListBox) {
		this._oListBox.detachEvent("itemsChanged", this._handleItemsChanged, this);
		this._oListBox.detachEvent("itemInvalidated",this._handleItemInvalidated, this);
		if (this.getAggregation("myListBox")) {
			this.destroyAggregation("myListBox", true);
		}else{
			this._oListBox.destroy();
		}
		this._oListBox = null;
	}
	this.setAssociation("listBox", sListBox);

	var oListBox = typeof sListBox === "string" ? sap.ui.getCore().byId(sListBox) : sListBox; 
	if (oListBox && oListBox.attachEvent) {
		oListBox.attachEvent("itemsChanged",this._handleItemsChanged, this);
		oListBox.attachEvent("itemInvalidated",this._handleItemInvalidated, this);
	}
	// else: FIXME what if the listbox does not exist yet?

	return this;
};

sap.ui.commons.ComboBox.prototype._handleItemsChanged = function(oEvent){

	if (this.bNoItemCheck) {
		return;
	}

	// check if selected item is still valid
	var aItems = this._getListBox().getItems();
	var sSelectedKey = this.getSelectedKey();
	var sSelectedItemId = this.getSelectedItemId();
	var sNewKey, sNewId;
	var sValue = this.getValue();
	var iIndex;

	for ( var i = 0; i < aItems.length; i++) {
		var oItem= aItems[i];
		if ((this._sWantedSelectedKey || this._sWantedSelectedItemId)
		     && (oItem.getKey() == this._sWantedSelectedKey || oItem.getId() == this._sWantedSelectedItemId)
		     && oItem.getEnabled()) {
			// Item set before exist - now it exist
			sNewKey = oItem.getKey();
			sNewId = oItem.getId();
			sValue = oItem.getText();
			this.setProperty("value", sValue, true); // no rerendering needed
			jQuery(this.getInputDomRef()).val(sValue);
			iIndex = i;
			this._sWantedSelectedKey = undefined;
			this._sWantedSelectedItemId = undefined;
			break;
		}else if (oItem.getText() == sValue && oItem.getEnabled()) {
			// Value found
			// remember key/id for case value not appears again
			sNewKey = oItem.getKey();
			sNewId = oItem.getId();
			iIndex = i;
			if (oItem.getKey() == sSelectedKey && oItem.getId() == sSelectedItemId 
			    && !this._sWantedSelectedKey  && !this._sWantedSelectedItemId) {
				// value, id and key still the same and no not items searched for existence
				break;
			}
		}
	}
	this.setProperty("selectedKey", sNewKey, true); // no rerendering needed
	this.setProperty("selectedItemId", sNewId, true); // no rerendering needed
	var oDomRef = this.getDomRef();
	if ( oDomRef ) {
		jQuery(this.getInputDomRef()).attr("aria-setsize", aItems.length);
		if (sNewId) {
			jQuery(this.getInputDomRef()).attr("aria-posinset", iIndex+1);
		}else{
			jQuery(this.getInputDomRef()).removeAttr("aria-posinset");
		}
		if (this.mobile) {
			// refresh und rebulid select options because not ever known what exactly changed
			var oSelect = jQuery.sap.domById(this.getId()+"-select");
			while (oSelect.length > 0) {
				oSelect.remove(0);
			}
			for ( var i = 0; i < aItems.length; i++) {
				var oItem= aItems[i];
				var oOption = document.createElement("option");
				oOption.text = oItem.getText();
				oOption.id = this.getId()+oItem.getId();
				oSelect.add(oOption, null);
			}
			oSelect.selectedIndex = iIndex;
		}
	}

};

sap.ui.commons.ComboBox.prototype._handleItemInvalidated = function(oEvent){

	// an Item had changed -> check if text or key must be changed
	var oItem = oEvent.getParameter("item");
	if (oItem.getId() == this.getSelectedItemId()) {
		if (oItem.getKey() != this.getSelectedKey()) {
			this.setProperty("selectedKey", oItem.getKey(), true); // no rerendering needed
		}
		if (oItem.getText() != this.getValue()) {
			this.setValue(oItem.getText(), true);
		}
	}

};

//***********************************************************
// Focus information handling and rendering related
//***********************************************************

/**
 * Returns an object representing the serialized focus information
 * To be overwritten by the specific control method
 * @return {object} an object representing the serialized focus information
 * @private
 */
sap.ui.commons.ComboBox.prototype.getFocusInfo = function(){
	return {id: this.getId(), sTypedChars: this._sTypedChars};
};

/**
 * Applies the focus info
 * To be overwritten by the specific control method
 * @param {object} oFocusInfo
 * @private
 */
sap.ui.commons.ComboBox.prototype.applyFocusInfo = function(oFocusInfo){
	jQuery(this.getInputDomRef()).val(oFocusInfo.sTypedChars);
	this._doTypeAhead();
	return this;
};

/**
 * Ensure that handed in ListBoxes are taken from the visible UI immediately.
 * @protected
 */
sap.ui.commons.ComboBox.prototype.onAfterRendering = function(oEvent){
	this._getListBox().$().appendTo(sap.ui.getCore().getStaticAreaRef());

	if (this.mobile) {
		var that = this;
		jQuery.sap.byId(this.getId()+"-select").bind("change", function(){
			var newVal = jQuery.sap.byId(that.getId()+"-select").attr("value");
			//as iPad ignores disabled attibute on option - check if item is enabled -> otherwise ignore
			var aItems = that._getListBox().getItems();
			var bEnabled = true;
			var iOldIndex = 0;
			var sOldValue = that.getValue();

			for ( var i = 0; i < aItems.length; i++) {
				if (aItems[i].getText() == newVal) {
					// Value found
					bEnabled = aItems[i].getEnabled();
				}
				if (aItems[i].getText() == sOldValue) {
					// old Value found
					iOldIndex = i;
				}
			}
			if (bEnabled) {
				that.setValue(newVal);
				that.fireChange({newValue:newVal, selectedItem: sap.ui.getCore().byId(that.getSelectedItemId())});
			}else{
				jQuery.sap.domById(that.getId()+"-select").selectedIndex = iOldIndex;
			}
		});
		// set initial selected item
		if(this.getSelectedItemId()){
			for ( var i = 0; i < this.getItems().length; i++) {
				var oItem = this.getItems()[i];
				if (this.getSelectedItemId() == oItem.getId()) {
					jQuery.sap.domById(this.getId()+"-select").selectedIndex = i;
					break;
				}
			}
		}else {
			this._addDummyOption(this.getValue());
		}
	}
};


//***********************************************************
// Misc.
//***********************************************************

/**
 * Figure out whether the triggered key was a hotkey
 * @param {jQuery.Event} oEvent the event fired on the ComboBox
 * @private
 * @static
 */
sap.ui.commons.ComboBox._isHotKey = function(oEvent){
	if(oEvent.altKey || oEvent.ctrlKey || oEvent.metaKey) {
		return true;
	}

	var iKeyCode = oEvent.keyCode || oEvent.which,
		eKC = jQuery.sap.KeyCodes;

	switch(iKeyCode){
		// some keys can be identified as hotkey 'all alone'
		case eKC.ENTER:
		case eKC.SHIFT:
		case eKC.TAB:
		case eKC.ALT:
		case eKC.CONTROL:
			return true;
		// as  some keys share the keycode with standard characters (only in keypress event), ensure that which equals 0
		case eKC.END:
		case eKC.HOME:
		case eKC.ARROW_LEFT:
		case eKC.ARROW_UP:
		case eKC.ARROW_RIGHT:
		case eKC.ARROW_DOWN:
		case eKC.F1:
		case eKC.F2:
		case eKC.F3:
		case eKC.F4:
		case eKC.F5:
		case eKC.F6:
		case eKC.F7:
		case eKC.F8:
		case eKC.F9:
		case eKC.F10:
		case eKC.F11:
		case eKC.F12:
			if (oEvent.type == "keypress") {
				return oEvent.which === 0;
			} else {
				return true;
			}
		default:
			return false;
	}
};

/*
 * Overwrite of standard function
 */
sap.ui.commons.ComboBox.prototype.setSelectedKey = function(sSelectedKey) {

	if (this.getSelectedKey() == sSelectedKey) {
		// not changed
		return this;
	}

	if (!sSelectedKey) {
		// selectedKey explicit not set -> select no item and initialize value
		this.setProperty("selectedKey", sSelectedKey, true); // no rerendering needed
		this.setProperty("selectedItemId", "", true); // no rerendering needed
		this.setValue("", true);
		return this;
	}

	// find corresponding item
	var aItems = this._getListBox().getItems();
	var bNotFound = true;
	var sSelectedItemId;
	var iIndex;

	for ( var i = 0; i < aItems.length; i++) {
		if (aItems[i].getKey() == sSelectedKey && aItems[i].getEnabled()) {
			// key found -> set corresponding value
			var oSelectedItem = aItems[i];
			sSelectedItemId = oSelectedItem.getId();
			var sValue = oSelectedItem.getText();
			this.setValue(sValue, true);
			this._sTypedChars = sValue;
			iIndex = i;

			bNotFound = false;
			break;
		}
	}
	if (!bNotFound) {
		this.setProperty("selectedKey", sSelectedKey, true); // no rerendering needed
		this.setProperty("selectedItemId", sSelectedItemId, true); // no rerendering needed
		var oDomRef = this.getDomRef();
		if ( oDomRef ) {
			jQuery(this.getInputDomRef()).attr("aria-posinset", iIndex+1);
			if (this.mobile) {
				jQuery.sap.domById(this.getId()+"-select").selectedIndex = iIndex;
			}
		}
		this._sWantedSelectedKey = undefined;
	}else{
		// remember key to set later if items are updated
		this._sWantedSelectedKey = sSelectedKey;
	}
	this._sWantedSelectedItemId = undefined; // delete wanted ID, because key was used later
	return this;
};

/*
 * Overwrite of standard function
 */
sap.ui.commons.ComboBox.prototype.setSelectedItemId = function(sSelectedItemId) {

	if (this.getSelectedItemId() == sSelectedItemId) {
		// not changed
		return this;
	}

	if (!sSelectedItemId) {
		// selectedKey explicit not set -> select no item and initialize value
		this.setProperty("selectedKey", "", true); // no rerendering needed
		this.setProperty("selectedItemId", sSelectedItemId, true); // no rerendering needed
		this.setValue("", true);
		return this;
	}

	//find corresponding item
	var aItems = this._getListBox().getItems();
	var bNotFound = true;
	var sKey;
	var iIndex;

	for ( var i = 0; i < aItems.length; i++) {
		if (aItems[i].getId() == sSelectedItemId && aItems[i].getEnabled()) {
			// key found -> set corresponding value
			var oSelectedItem = aItems[i];
			sKey = oSelectedItem.getKey();
			var sValue = oSelectedItem.getText();
			this.setValue(sValue, true);
			this._sTypedChars = sValue;
			iIndex = i;

			bNotFound = false;
			break;
		}
	}
	if (!bNotFound) {
		this.setProperty("selectedItemId", sSelectedItemId, true); // no rerendering needed
		this.setProperty("selectedKey", sKey, true); // no rerendering needed
		var oDomRef = this.getDomRef();
		if ( oDomRef ) {
			jQuery(this.getInputDomRef()).attr("aria-posinset", iIndex+1);
			if (this.mobile) {
				jQuery.sap.domById(this.getId()+"-select").selectedIndex = iIndex;
			}
		}
		this._sWantedSelectedItemId = undefined;
	}else{
		// remember ID to set later if items are updated
		this._sWantedSelectedItemId = sSelectedItemId;
	}
	this._sWantedSelectedKey = undefined; // delete wanted key, because ID was used later
	return this;
};

/*
 * Overwrite of TextField function
 * additional parameter bNotSetSelectedKey to not set selected key because set
 * from calling function
 */
sap.ui.commons.ComboBox.prototype.setValue = function(sValue, bNotSetSelectedKey) {

	if (!bNotSetSelectedKey) {
		// find key for value
		var aItems = this._getListBox().getItems();
		var sKey;
		var sSelectedItemId;
		var iIndex;

		for ( var i = 0; i < aItems.length; i++) {
			if (aItems[i].getText() == sValue && aItems[i].getEnabled()) {
				// Value found -> set corresponding key
				var oSelectedItem = aItems[i];
				sSelectedItemId = oSelectedItem.getId();
				sKey = oSelectedItem.getKey();
				iIndex = i;
				break;
			}
		}
		this.setProperty("selectedKey", sKey, true); // no rerendering needed
		this.setProperty("selectedItemId", sSelectedItemId, true); // no rerendering needed
		var oDomRef = this.getDomRef();
		if ( oDomRef ) {
			if (sSelectedItemId) {
				jQuery(this.getInputDomRef()).attr("aria-posinset", iIndex+1);
			}else{
				jQuery(this.getInputDomRef()).removeAttr("aria-posinset");
			}
			if (this.mobile) {
				if (!sSelectedItemId) {
					// no list item entered (free text) => add one dummy item to the select box
					this._addDummyOption(sValue);
				}else{
					this._removeDummyOption();
					jQuery.sap.domById(this.getId()+"-select").selectedIndex = iIndex;
				}
			}
		}
	}

	// call standard TextField function
	sap.ui.commons.TextField.prototype.setValue.apply(this, [sValue]);
	this._sTypedChars = this.getValue();
	this._sWantedSelectedKey = undefined;
	this._sWantedSelectedItemId = undefined;
	return this;
};

/*
 * Overwite of INVALIDATE
 * do not invalidate ComboBox if only ListBox is changed
*/
sap.ui.commons.ComboBox.prototype.invalidate = function(oOrigin) {

	if(!oOrigin || oOrigin != this._getListBox()){
		sap.ui.core.Control.prototype.invalidate.apply(this, arguments);
	}else{
		// register ListBox as invalidated
		if(this.getUIArea()){
			this.getUIArea().addInvalidatedControl(oOrigin);
		}
	}

};

/*
 * Overwrite CLONE to set aggregation of ListBox
 */
sap.ui.commons.ComboBox.prototype.clone = function(sIdSuffix){

	var oClone = sap.ui.core.Control.prototype.clone.apply(this, arguments),
		oListBox = this.getAggregation("myListBox"),
		oListBoxClone;

	// if listbox exists, clone it and add it to the combobox clone
	// FIX 20120905 FWE when items is fully bound for this ComboBox, _oListBox exists already in the clone and must not be cloned again  
	if (oListBox && !oClone._oListBox) { 
		oListBoxClone = oListBox.clone(sIdSuffix);
		oClone.setAggregation("myListBox", oListBoxClone, true);
		oClone._oListBox = oListBoxClone;
	}

	return oClone;

};

sap.ui.commons.ComboBox.prototype._addDummyOption = function(sValue){

	var oOption = jQuery.sap.domById(this.getId()+"-dummyOption");
	if(!oOption){
		var aItems = this._getListBox().getItems();
		oOption = document.createElement("option");
		oOption.text = sValue;
		oOption.id = this.getId()+"-dummyOption";
		if (aItems.length > 0) {
			jQuery.sap.domById(this.getId()+"-select").add(oOption, jQuery.sap.domById(this.getId()+"-"+aItems[0].getId()));
		}else{
			jQuery.sap.domById(this.getId()+"-select").add(oOption, null);
		}
	}else{
		oOption.text = sValue;
	}
	jQuery.sap.domById(this.getId()+"-select").selectedIndex = 0;

};

sap.ui.commons.ComboBox.prototype._removeDummyOption = function(){

	var oOption = jQuery.sap.domById(this.getId()+"-dummyOption");
	if (oOption) {
		jQuery.sap.domById(this.getId()+"-select").remove(0);
	}

};

/*
 * Overwrites default implementation
 * the label must point to the input tag
 * @public
 */
sap.ui.commons.ComboBox.prototype.getIdForLabel = function () {
	return this.getId()+'-input';
};

// to overwrite JS doc with new event parameter

/**
 * Fire event change to attached listeners.
 *
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> The new / changed value of the textfield.</li>
 * <li>'selectedItem' of type <code>sap.ui.core/ListItem</code> selected item </li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.ComboBox#fireChange
 * @function
 */

/**
 * Event is fired when the text in the field has changed AND the focus leaves the ComboBox or the Enter key is pressed.
 *
 * @name sap.ui.commons.ComboBox#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.newValue The new / changed value of the ComboBox.
 * @param {sap.ui.core/ListItem} oControlEvent.getParameters.selectedItem The new / changed item of the ComboBox.
 * @public
 */
