/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.AutoComplete.
jQuery.sap.declare("sap.ui.commons.AutoComplete");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.commons.ComboBox");

/**
 * Constructor for a new AutoComplete.
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
 * <li>{@link #getEnableScrolling enableScrolling} : boolean (default: true)</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.commons.ComboBox#constructor sap.ui.commons.ComboBox}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * 
 * Textfield with list based text completion.
 * 
 * @extends sap.ui.commons.ComboBox
 * @implements sap.ui.commons.ToolbarItem
 *
 * @author SAP AG 
 * @version 1.10.0
 *
 * @constructor   
 * @public
 * @since 1.10.0
 * @name sap.ui.commons.AutoComplete
 */
sap.ui.commons.ComboBox.extend("sap.ui.commons.AutoComplete", { metadata : {

	// ---- object ----
	interfaces : [
		"sap.ui.commons.ToolbarItem"
	],
	publicMethods : [
		// methods
		"setFilterFunction"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"enableScrolling" : {type : "boolean", group : "Misc", defaultValue : true}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.AutoComplete with name <code>sClassName</code> 
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
 * @name sap.ui.commons.AutoComplete.extend
 * @function
 */


/**
 * Getter for property <code>enableScrolling</code>.
 * Whether scrolling should be enabled when the number of items is higher than maxPopupItems.
 * If set to false only the first n items (n=maxPopupItems) are shown.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableScrolling</code>
 * @public
 * @name sap.ui.commons.AutoComplete#getEnableScrolling
 * @function
 */


/**
 * Setter for property <code>enableScrolling</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableScrolling  new value for property <code>enableScrolling</code>
 * @return {sap.ui.commons.AutoComplete} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.AutoComplete#setEnableScrolling
 * @function
 */

/**
 * Sets a custom filter function for items. Default is to check whether the item text begins with the typed value.
 *
 * @name sap.ui.commons.AutoComplete.prototype.setFilterFunction
 * @function

 * @type boolean
 * @public
 */


// Start of sap/ui/commons/AutoComplete.js
jQuery.sap.require("jquery.sap.strings");

sap.ui.commons.AutoComplete._DEFAULTFILTER = function(sValue, oItem){
	return jQuery.sap.startsWithIgnoreCase(oItem.getText(), sValue);
};

sap.ui.commons.AutoComplete.prototype.init = function(){
	sap.ui.commons.ComboBox.prototype.init.apply(this, arguments);
	this.mobile = false;
	this._filter = sap.ui.commons.AutoComplete._DEFAULTFILTER;
};

/**
 * Sets a custom filter function for items. Default is to check whether the item text begins with the typed value.
 * 
 * Example:
 * <code>
 * function(sValue, oItem){
 *	  return jQuery.sap.startsWithIgnoreCase(oItem.getText(), sValue);
 * }
 * </code>
 *
 * @param {function} [fFilter] The filter function. If not set the default filter function will be used.
 * 
 * @name sap.ui.commons.AutoComplete.prototype.setFilterFunction
 * @function
 * @public
 */
sap.ui.commons.AutoComplete.prototype.setFilterFunction = function(fFilter) {
	if(typeof(fFilter) == "function"){
		this._filter = fFilter;
	}else{
		this._filter = sap.ui.commons.AutoComplete._DEFAULTFILTER;
	}
};


sap.ui.commons.AutoComplete.prototype.onkeypress = function(oEvent) {
	var iKC = oEvent.which || oEvent.keyCode;
	if(iKC === jQuery.sap.KeyCodes.ESCAPE){
		sap.ui.commons.TextField.prototype.onkeypress.apply(this, arguments);
		jQuery(this.getInputDomRef()).removeAttr("aria-posinset");
	}
};


sap.ui.commons.AutoComplete.prototype._handleClosed = function(){
	sap.ui.commons.ComboBox.prototype._handleClosed.apply(this, arguments);
	//No posinset and setsize set when popup closed
	jQuery(this.getInputDomRef()).removeAttr("aria-posinset");
	jQuery(this.getInputDomRef()).removeAttr("aria-setsize");
};


sap.ui.commons.AutoComplete.prototype.onAfterRendering = function(){
	sap.ui.commons.ComboBox.prototype.onAfterRendering.apply(this, arguments);
	jQuery(this.getInputDomRef()).removeAttr("aria-setsize"); // No initial setsize
};


sap.ui.commons.AutoComplete.prototype._prepareOpen = function(oListBox) {
	jQuery(this.getInputDomRef()).removeAttr("aria-posinset"); //No posinset set when popup opens
};


(function(){

sap.ui.commons.AutoComplete.prototype._fireLiveChange = function(oEvent) {
	if (!this.getEnabled() || !this.getEditable()) {
		this._close();
	}else{
		this._sTypedChars = jQuery(this.getInputDomRef()).val();
		
		switch(oEvent.type){
			case "keyup":
				if(!sap.ui.commons.ComboBox._isHotKey(oEvent)){
					var iKC = oEvent.which || oEvent.keyCode;
					if(iKC === jQuery.sap.KeyCodes.ESCAPE){
						this.close();
						break;
					}
				}else{
					break;
				}
			default: //paste or no hotkey or not escape
				refreshListBoxItems(this);
		}
	}

	sap.ui.commons.ComboBox.prototype._fireLiveChange.apply(this, arguments);
};


sap.ui.commons.AutoComplete.prototype._doTypeAhead = function(){
	this._sTypeAhead = null;
	this._sWantedSelectedKey = undefined;
	this._sWantedSelectedItemId = undefined;
	this._sTypedChars = jQuery(this.getInputDomRef()).val();

	refreshListBoxItems(this);
};


sap.ui.commons.AutoComplete.prototype.getItems = function(){
	return this.getAggregation("items", []);
};
sap.ui.commons.AutoComplete.prototype.insertItem = function(oItem, iIndex){
	this.insertAggregation("items", iIndex, oItem, true);
	refreshListBoxItems(this);
	return this;
};
sap.ui.commons.AutoComplete.prototype.addItem = function(oItem){
	this.addAggregation("items", oItem, true);
	refreshListBoxItems(this);
	return this;
};
sap.ui.commons.AutoComplete.prototype.removeItem = function(oItem) {
	var res = this.removeAggregation("items", oItem, true);
	refreshListBoxItems(this);
	return res;
};
sap.ui.commons.AutoComplete.prototype.removeAllItems = function() {
	var res = this.removeAllAggregation("items");
	refreshListBoxItems(this);
	return res;
};
sap.ui.commons.AutoComplete.prototype.indexOfItem = function(oItem){
	return this.indexOfAggregation("items", oItem);
};
sap.ui.commons.AutoComplete.prototype.destroyItems = function(){
	this.destroyAggregation("items", true);
	refreshListBoxItems(this);
	return this;
};

sap.ui.commons.AutoComplete.prototype.setEnableScrolling = function(bEnableScrolling){
	this.setProperty("enableScrolling", bEnableScrolling, true);
	if(this.oPopup && this.oPopup.isOpen()){
		refreshListBoxItems(this);
	}
	return this;
};

function refreshListBoxItems(oAuto){
	if(!oAuto.getDomRef() || !oAuto.$().hasClass("sapUiTfFoc")){ //Nothing to do if not rendered or the TF does not have the focus
		return false;
	}
	
	var oItem,
		aItems = oAuto.getItems(),
		bFilter = oAuto._sTypedChars && oAuto._sTypedChars.length > 0,
		oLB = oAuto._getListBox(),
		iMaxPopupItems = oAuto.getMaxPopupItems(),
		bScroll = oAuto.getEnableScrolling(),
		aHitItems = [];
		
	if(!bFilter){
		oAuto._close();
		return;
	}
	
	oLB.removeAllItems();
	oLB.clearSelection();
	
	for(var i=0; i<aItems.length; i++){
		oItem = aItems[i];
		if(!oItem.__CLONE){
			oItem.__CLONE = oItem.clone(oItem.getId()+"-CLONE", null, {cloneBindings: false});
			oItem.__origexit = typeof(oItem.exit) == "function" ? oItem.exit : function(){};
			oItem.exit = function(){
				oItem.__CLONE.destroy();
				oItem.__CLONE = undefined;
				oItem.__origexit.apply(this, arguments);
				oItem.exit = oItem.__origexit;
				oItem.__origexit = undefined;
			};
		}

		if((!bFilter || oAuto._filter(oAuto._sTypedChars, oItem)) && (bScroll || (!bScroll && aHitItems.length < iMaxPopupItems))){
			aHitItems.push(oItem.__CLONE);
		}
	}
	
	var iItemsLength = aHitItems.length;
	
	if(iItemsLength > 0){
		
		if(oAuto._sort){
			aHitItems.sort(function(oItem1, oItem2){
				if (oItem1.getText() > oItem2.getText()) 
					return 1;
				if (oItem1.getText() < oItem2.getText())
					return -1; 
				return 0;
			});
		}
		
		for(var i=0; i<iItemsLength; i++){
			oLB.addItem(aHitItems[i]);
		}
		
		oLB.setVisibleItems(iMaxPopupItems < iItemsLength ? iMaxPopupItems : iItemsLength);
		
		if(!oAuto.oPopup || !oAuto.oPopup.isOpen()){
			oAuto._open();
		}
	}else{
		oAuto._close();
	}
};

})();


/**
 * @deprecated NOT SUPPORTED
 * @public
 * @name sap.ui.commons.AutoComplete#getListBox
 * @function
 */


/**
 * @deprecated NOT SUPPORTED
 * @public
 * @name sap.ui.commons.AutoComplete#setListBox
 * @function
 */
sap.ui.commons.AutoComplete.prototype.setListBox = function(){
	return this;
};


/**
 * @deprecated NOT SUPPORTED
 * @public
 * @name sap.ui.commons.AutoComplete#getSelectedKey
 * @function
 */


/**
 * @deprecated NOT SUPPORTED
 * @public
 * @name sap.ui.commons.AutoComplete#setSelectedKey
 * @function
 */
sap.ui.commons.AutoComplete.prototype.setSelectedKey = function(){
	return this;
};


/**
 * @deprecated NOT SUPPORTED
 * @public
 * @name sap.ui.commons.AutoComplete#getSelectedItemId
 * @function
 */


/**
 * @deprecated NOT SUPPORTED
 * @public
 * @name sap.ui.commons.AutoComplete#setSelectedItemId
 * @function
 */
sap.ui.commons.AutoComplete.prototype.setSelectedItemId = function(){
	return this;
};