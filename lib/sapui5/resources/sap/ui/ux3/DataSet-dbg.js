/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.DataSet.
jQuery.sap.declare("sap.ui.ux3.DataSet");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new DataSet.
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
 * <li>{@link #getShowToolbar showToolbar} : boolean (default: true)</li>
 * <li>{@link #getShowFilter showFilter} : boolean (default: true)</li>
 * <li>{@link #getShowSearchField showSearchField} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.ux3.DataSetItem[]</li>
 * <li>{@link #getViews views} : sap.ui.ux3.DataSetView[]</li>
 * <li>{@link #getFilter filter} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedView selectedView} : string | sap.ui.ux3.DataSetView</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.DataSet#event:selectionChanged selectionChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.DataSet#event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * DataSet
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.10.0
 *
 * @constructor   
 * @public
 * @name sap.ui.ux3.DataSet
 */
sap.ui.core.Control.extend("sap.ui.ux3.DataSet", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"setLeadSelection", "getLeadSelection", "addToolbarItem", "removeToolbarItem"
	],

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"showToolbar" : {type : "boolean", group : "Misc", defaultValue : true},
		"showFilter" : {type : "boolean", group : "Misc", defaultValue : true},
		"showSearchField" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	aggregations : {
    	"items" : {type : "sap.ui.ux3.DataSetItem", multiple : true, singularName : "item", bindable : "bindable"}, 
    	"views" : {type : "sap.ui.ux3.DataSetView", multiple : true, singularName : "view"}, 
    	"filter" : {type : "sap.ui.core.Control", multiple : true, singularName : "filter"}
	},
	associations : {
		"selectedView" : {type : "sap.ui.ux3.DataSetView", multiple : false}
	},
	events : {
		"selectionChanged" : {}, 
		"search" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.DataSet with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.DataSet.extend
 * @function
 */

sap.ui.ux3.DataSet.M_EVENTS = {'selectionChanged':'selectionChanged','search':'search'};


/**
 * Getter for property <code>showToolbar</code>.
 * show Toolbar
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showToolbar</code>
 * @public
 * @name sap.ui.ux3.DataSet#getShowToolbar
 * @function
 */


/**
 * Setter for property <code>showToolbar</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowToolbar  new value for property <code>showToolbar</code>
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#setShowToolbar
 * @function
 */

/**
 * Getter for property <code>showFilter</code>.
 * show filter
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showFilter</code>
 * @public
 * @name sap.ui.ux3.DataSet#getShowFilter
 * @function
 */


/**
 * Setter for property <code>showFilter</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowFilter  new value for property <code>showFilter</code>
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#setShowFilter
 * @function
 */

/**
 * Getter for property <code>showSearchField</code>.
 * Show/hide SearchField in Toolbar
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showSearchField</code>
 * @public
 * @name sap.ui.ux3.DataSet#getShowSearchField
 * @function
 */


/**
 * Setter for property <code>showSearchField</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowSearchField  new value for property <code>showSearchField</code>
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#setShowSearchField
 * @function
 */
	
/**
 * Getter for aggregation <code>items</code>.<br/>
 * Aggregation of DataSetItems
 * 
 * @return {sap.ui.ux3.DataSetItem[]}
 * @public
 * @name sap.ui.ux3.DataSet#getItems
 * @function
 */

/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.ui.ux3.DataSetItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#insertItem
 * @function
 */


/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ui.ux3.DataSetItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#addItem
 * @function
 */


/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.ux3.DataSetItem} vItem the item to remove or its index or id
 * @return {sap.ui.ux3.DataSetItem} the removed item or null
 * @public
 * @name sap.ui.ux3.DataSet#removeItem
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.DataSetItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.DataSet#removeAllItems
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.ux3.DataSetItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.DataSetItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.DataSet#indexOfItem
 * @function
 */


/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#destroyItems
 * @function
 */

/**
 * Binder for aggregation <code>items</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#bindItems
 * @function
 */


/**
 * Unbinder for aggregation <code>items</code>.
 *
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#unbindItems
 * @function
 */
	
/**
 * Getter for aggregation <code>views</code>.<br/>
 * views
 * 
 * @return {sap.ui.ux3.DataSetView[]}
 * @public
 * @name sap.ui.ux3.DataSet#getViews
 * @function
 */

/**
 * Inserts a view into the aggregation named <code>views</code>.
 *
 * @param {sap.ui.ux3.DataSetView}
 *          oView the view to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the view should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the view is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the view is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#insertView
 * @function
 */


/**
 * Adds some view <code>oView</code> 
 * to the aggregation named <code>views</code>.
 *
 * @param {sap.ui.ux3.DataSetView}
 *            oView the view to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#addView
 * @function
 */


/**
 * Removes an view from the aggregation named <code>views</code>.
 *
 * @param {int | string | sap.ui.ux3.DataSetView} vView the view to remove or its index or id
 * @return {sap.ui.ux3.DataSetView} the removed view or null
 * @public
 * @name sap.ui.ux3.DataSet#removeView
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>views</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.DataSetView[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.DataSet#removeAllViews
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.ux3.DataSetView</code> in the aggregation named <code>views</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.DataSetView}
 *            oView the view whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.DataSet#indexOfView
 * @function
 */


/**
 * Destroys all the views in the aggregation 
 * named <code>views</code>.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#destroyViews
 * @function
 */
	
/**
 * Getter for aggregation <code>filter</code>.<br/>
 * Filter control (e.g. a FacetFilter) for the DataSet
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.ux3.DataSet#getFilter
 * @function
 */

/**
 * Inserts a filter into the aggregation named <code>filter</code>.
 *
 * @param {sap.ui.core.Control}
 *          oFilter the filter to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the filter should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the filter is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the filter is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#insertFilter
 * @function
 */


/**
 * Adds some filter <code>oFilter</code> 
 * to the aggregation named <code>filter</code>.
 *
 * @param {sap.ui.core.Control}
 *            oFilter the filter to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#addFilter
 * @function
 */


/**
 * Removes an filter from the aggregation named <code>filter</code>.
 *
 * @param {int | string | sap.ui.core.Control} vFilter the filter to remove or its index or id
 * @return {sap.ui.core.Control} the removed filter or null
 * @public
 * @name sap.ui.ux3.DataSet#removeFilter
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>filter</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.DataSet#removeAllFilter
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>filter</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oFilter the filter whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.DataSet#indexOfFilter
 * @function
 */


/**
 * Destroys all the filter in the aggregation 
 * named <code>filter</code>.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#destroyFilter
 * @function
 */

/**
 * Selected view of the Dataset
 *
 * @return {string} Id of the element which is the current target of the <code>selectedView</code> association, or null
 * @public
 * @name sap.ui.ux3.DataSet#getSelectedView
 * @function
 */


/**
 * Selected view of the Dataset
 *
 * @param {string | sap.ui.ux3.DataSetView} vSelectedView 
 *    Id of an element which becomes the new target of this <code>selectedView</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#setSelectedView
 * @function
 */

/**
 * selection Changed 
 *
 * @name sap.ui.ux3.DataSet#selectionChanged
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.oldLeadSelectedIndex Old lead selected index
 * @param {int} oControlEvent.getParameters.newLeadSelectedIndex New lead selected index
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'selectionChanged' event of this <code>sap.ui.ux3.DataSet</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.DataSet</code>.<br/> itself. 
 *  
 * selection Changed 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.DataSet</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#attachSelectionChanged
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'selectionChanged' event of this <code>sap.ui.ux3.DataSet</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#detachSelectionChanged
 * @function
 */


/**
 * Fire event selectionChanged to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'oldLeadSelectedIndex' of type <code>int</code> Old lead selected index</li>
 * <li>'newLeadSelectedIndex' of type <code>int</code> New lead selected index</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.DataSet#fireSelectionChanged
 * @function
 */

/**
 * Event which is fired when the user triggers a search 
 *
 * @name sap.ui.ux3.DataSet#search
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.query The search query
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'search' event of this <code>sap.ui.ux3.DataSet</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.DataSet</code>.<br/> itself. 
 *  
 * Event which is fired when the user triggers a search 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.DataSet</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#attachSearch
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'search' event of this <code>sap.ui.ux3.DataSet</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSet#detachSearch
 * @function
 */


/**
 * Fire event search to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'query' of type <code>string</code> The search query</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.DataSet#fireSearch
 * @function
 */

/**
 * Set LeadSelection index
 *
 * @name sap.ui.ux3.DataSet.prototype.setLeadSelection
 * @function
 * @param {int} 
 *         iIIndex
 *         

 * @type void
 * @public
 */


/**
 * Get LeadSelection index
 *
 * @name sap.ui.ux3.DataSet.prototype.getLeadSelection
 * @function

 * @type int
 * @public
 */


/**
 * add a toolbarItem to the toolbar
 *
 * @name sap.ui.ux3.DataSet.prototype.addToolbarItem
 * @function
 * @param {sap.ui.commons.ToolbarItem} 
 *         oOToolbarItem
 *         ToolbarItem

 * @type void
 * @public
 */


/**
 * remove a toolbarItem to the toolbar
 *
 * @name sap.ui.ux3.DataSet.prototype.removeToolbarItem
 * @function
 * @param {sap.ui.commons.ToolbarItem} 
 *         oOToolbarItem
 *         

 * @type void
 * @public
 */


// Start of sap/ui/ux3/DataSet.js
///**
//* This file defines behavior for the DataSet control,
//*/

//Provide information for validation for used undeclared aggregations
sap.ui.ux3.DataSet.getMetadata()._mHiddenAggregations = {
	"_viewSwitches": {multiple: true, type: "sap.ui.core.Control"},
	"_toolbar": {multiple: false, type: "sap.ui.commons.Toolbar"}
};

sap.ui.ux3.DataSet.prototype.init = function() {
	var that = this, oToolbar;
	//each DS needs a selectionModel for its items
	jQuery.sap.require("sap.ui.model.SelectionModel");
	this.selectionModel = new sap.ui.model.SelectionModel(sap.ui.model.SelectionModel.SINGLE_SELECTION);
	// init toolbar
	this._oSegBut = new sap.ui.commons.SegmentedButton();
	this._oSegBut.attachSelect(function(oEvent){that.press(oEvent);}, that);
	this._oSegBut.show = false;
	this._oSearchField = new sap.ui.commons.SearchField(this.getId()+"-searchValue");
	this._oSearchField.setShowListExpander(false);
	this._oSearchField.setEnableListSuggest(false);
	this._oSearchField.setEnableFilterMode(true);
	this._oSearchField.setEnableClear(true);
	this._oSearchField.show = false;
	that = this;
	this._oSearchField.attachSearch(function(oEvent) {
		that.fireSearch(oEvent.getParameters());
	});
	oToolbar = new sap.ui.commons.Toolbar();
	this._setToolbar(oToolbar);
};

sap.ui.ux3.DataSet.prototype.exit = function() {
	this._oSegBut.destroy();
	this._oSearchField.destroy()
	this.destroyAggregation("_toolbar");
};

sap.ui.ux3.DataSet.prototype._prepareToolbar = function() {
	var iViewCount = this.getViews().length,
		oToolbar = this._getToolbar();
		
	if(iViewCount > 1 && this._oSegBut.show == false) {
		oToolbar.insertItem(this._oSegBut,0);
			this._oSegBut.show = true; 
	} else if (iViewCount <= 1 && this._oSegBut.show) {
		oToolbar.removeItem(this._oSegBut);
		this._oSegBut.show = false;
	}
	if (this.getShowSearchField() && this._oSearchField.show == false) {
		oToolbar.insertRightItem(this._oSearchField,oToolbar.getRightItems().length);
		this._oSearchField.show = true;
	} else if (!this.getShowSearchField() && this._oSearchField.show == true){
		oToolbar.removeRightItem(this._oSearchField);
		this._oSearchField.show = false;
	}
};

/**
 * Press handler for the view selection buttons
 *
 * @param {sap.ui.base.Event} oEvent Press event
 * @private
*/
sap.ui.ux3.DataSet.prototype.press = function(oEvent,iSelectedViewIndex) {
	var oButtonID = oEvent.getParameters().selectedButtonId,
		viewId = oButtonID.substring(oButtonID.lastIndexOf('-')+1),
		oldView = sap.ui.getCore().byId(this.getSelectedView());
	oldView.exitView(this.getItems());
	this.setSelectedView(viewId);
};

/**
 * Fire filter event
 *
 * @private
*/
sap.ui.ux3.DataSet.prototype.filter = function() {
	this.fireFilter({
					filterValue : this.getFilterValue()
				});
};
/**
 * Fire sort event
 *
 * @private
*/
sap.ui.ux3.DataSet.prototype.sort = function() {
	this.fireSort();
};

/**
 * Selection handler for the DataSetItem selection event.
 *
 * @param {string} sItemId Id of the selected DataSetItem
 * @private
*/
sap.ui.ux3.DataSet.prototype.selectItem = function(oEvent) {
	var sItemId = oEvent.getParameters().itemId;
	var oItem = sap.ui.getCore().byId(sItemId);
	var oldSelectedIndex = this.selectionModel.getLeadSelectedIndex();
	if (oldSelectedIndex == oItem._index) {
		this.selectionModel.setLeadSelectedIndex(-1);
	} else {
		this.selectionModel.setLeadSelectedIndex(oItem._index);
	}
	var newSelectedIndex = this.selectionModel.getLeadSelectedIndex();
	this.fireSelectionChanged({
				oldLeadSelectedIndex: oldSelectedIndex,
				newLeadSelectedIndex: newSelectedIndex});
};

/**
 * Prepare rendering: Calls init end exit hooks on the selected view instance. Necessary to keep the view
 * consistent to the DataSet state.
 *
 * @param {string} sItemId Id of the selected DataSetItem
 * @private
*/
sap.ui.ux3.DataSet.prototype.prepareRendering = function() {
	var oView, iViewCount = this.getViews().length;
	if (iViewCount == 0) {
		return;
	} 
	this._prepareToolbar();
	if (this._bDirty) {
		oView = sap.ui.getCore().byId(this.getSelectedView());
		if (oView.exitView) {
			oView.exitView(this.getItems());
		}
		if (oView.initView) {
			oView.initView(this.getItems());
		}
		this._bDirty = false;
	}
};

//*** Selection Model methods ***

/**
 * Returns the LeadSelection index
 *
 * @param {string} sItemId Id of the selected DataSetItem
 * @return {int} selected index
 * @protected
*/
sap.ui.ux3.DataSet.prototype.getLeadSelection = function() {
	return this.selectionModel.getLeadSelectedIndex();
};

/**
 * Set the LeadSelection index
 *
 * @param {int} iIndex set LeadSelection index
 * @protected
*/
sap.ui.ux3.DataSet.prototype.setLeadSelection = function(iIndex) {
	this.selectionModel.setLeadSelectedIndex(iIndex);
};

/**
 * Returns true if iIndex is selected
 *
 * @param {int} iIndex index of selection
 * @return {boolean} index selected true/false
 * @protected
*/
sap.ui.ux3.DataSet.prototype.isSelectedIndex = function(iIndex) {
	return (this.selectionModel.getLeadSelectedIndex() == iIndex);
};

/**
 * Returns id of selected Item from given index
 *
 * @param {int} iIndex index of selection
 * @return {string} id of selected item
 * @protected
*/
sap.ui.ux3.DataSet.prototype.getSelectedItemId = function(iIndex) {
	 return this.getItems()[iIndex].getId();
};

/**
 * Creates a view switch button
 *
 * @param {object} oView View
 * @param {int} iIndex Index of view
 * @return {object} viewSwitch instance
 * @protected
*/
sap.ui.ux3.DataSet.prototype.createViewSwitch = function(oView, iIndex) {
	 var that = this, oViewSwitch;

	 if (oView.getIcon()) {
		 oViewSwitch = new sap.ui.commons.Button({
			 id : this.getId()+"-view-"+oView.getId(),
			 lite: true,
			 icon:oView.getIcon(),
			 iconHovered: oView.getIconHovered(),
			 iconSelected: oView.getIconSelected()
		 });
	 } else if (oView.getName()) {
		 oViewSwitch = new sap.ui.commons.Button({
			 id : this.getId()+"-view-"+oView.getId(),
			 text : oView.getName(),
			 lite: true
		 });
	 } else {
		 oViewSwitch = new sap.ui.commons.Button({
			 id : this.getId()+"-view-"+oView.getId(),
			 text : oView.getId(),
			 lite: true
		 });
	 }
	 oViewSwitch._viewIndex = iIndex;
	 //oViewSwitch.attachPress(function(oEvent){that.press(oEvent,iIndex);}, that);
	 return oViewSwitch;
};

/**
 * Rerendering of the Toolbar
 *
 * @protected
*/
sap.ui.ux3.DataSet.prototype._rerenderToolbar = function() {
	var $content = jQuery.sap.byId(this.getId() + "-toolbar");
	this._prepareToolbar();
	if ($content.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		sap.ui.ux3.DataSetRenderer.renderToolbar(rm, this);
		rm.flush($content[0]);
		rm.destroy();
	}
};
/**
 * Rerendering of the FilterArea
 *
 * @protected
*/
sap.ui.ux3.DataSet.prototype._rerenderFilter = function() {
	var $content = jQuery.sap.byId(this.getId() + "-filter");
	if ($content.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		sap.ui.ux3.DataSetRenderer.renderFilterArea(rm, this);
		rm.flush($content[0]);
		if (this.getShowFilter()) {
			$content.removeClass("noPadding");
		} else {
			$content.addClass("noPadding");
		}
		rm.destroy();
	}
};
//*** override API methods ***

sap.ui.ux3.DataSet.prototype.removeItem = function(oItem) {
	var result = this.removeAggregation("items", oItem);
	if (result) {
		result.detachSelected(this.selectItem,this);
		result._destroyTemplate();
		this._bDirty = true;
	}
	return result;
};

sap.ui.ux3.DataSet.prototype.removeAllItems = function() {
	var aItems = this.getItems(), result;
	jQuery.each(aItems,function(i,oItem) {
		oItem._destroyTemplate();
		oItem.detachSelected(this.selectItem,this);
	});
	result = this.removeAllAggregation("items");
	this._bDirty = true;
	return result;
};

sap.ui.ux3.DataSet.prototype.destroyItems = function() {
	var result = this.destroyAggregation("items");
	this._bDirty = true;
	return result;
};

sap.ui.ux3.DataSet.prototype.addItem = function(oItem) {
	this.addAggregation("items", oItem);
	oItem.attachSelected(this.selectItem,this);
	oItem._index = this.getItems().length - 1;
	this._bDirty = true;
	return this;
};

sap.ui.ux3.DataSet.prototype.insertItem = function(oItem, iIndex) {
	this.insertAggregation("items", oItem, iIndex);
	oItem.attachSelected(this.selectItem,this);
	oItem._index = iIndex;
	this._bDirty = true;
	return this;
};

sap.ui.ux3.DataSet.prototype.setFilterValue = function(sFilterValue) {
	this.setProperty("filterValue",sFilterValue, true);
	return this;
};

sap.ui.ux3.DataSet.prototype.getFilterValue = function() {
	return this.getProperty("filterValue");
};

sap.ui.ux3.DataSet.prototype.insertView = function(oView, iIndex) {
	var oViewSwitch = this.createViewSwitch(oView,iIndex,true);
	if (!this.getSelectedView()) {
		this.setSelectedView(oView);
	}
	this.insertAggregation("views", oView, iIndex);
	this._oSegBut.insertButton(oViewSwitch,iIndex);
	this._rerenderToolbar();
	return this;
};

sap.ui.ux3.DataSet.prototype.addView = function(oView) {
	var iIndex = this.getViews().length,
		oViewSwitch = this.createViewSwitch(oView,iIndex);
	if (!this.getSelectedView()) {
		this.setSelectedView(oView);
	}
	this.addAggregation("views", oView, true);
	this._oSegBut.addButton(oViewSwitch);
	this._rerenderToolbar();
	return this;
};

sap.ui.ux3.DataSet.prototype.removeView = function(oView) {
	var result = this.removeAggregation("views", oView, true);
	
	if (result) {
		if (this.getSelectedView() == result.getId()) {
			this.setSelectedView(this.getViews()[0]);
			this._bDirty = true;
			result.invalidate();
		} else {
			this._rerenderToolbar();
		}
	
		this._oSegBut.removeButton(this.getId()+"-view-"+result.getId()).destroy();
	}
	return result;
};

sap.ui.ux3.DataSet.prototype.destroyViews = function() {
	this._oSegBut.destroyButtons();
	this.destroyAggregation("views");
	return this;
};

sap.ui.ux3.DataSet.prototype.removeAllViews = function() {
	var result = this.removeAllAggregation("views");
	this._oSegBut.destroyButtons();
	return result;
};

sap.ui.ux3.DataSet.prototype.setEnableSorting = function(bEnableSorting) {
	//suppress rerendering ofDataSet. Rerender only the toolbar.
	this.setProperty("enableSorting", bEnableSorting, true);
	this._rerenderToolbar();
	return this;
};

sap.ui.ux3.DataSet.prototype.setEnableFiltering = function(bEnableFiltering) {
	//suppress rerendering ofDataSet. Rerender only the toolbar.
	this.setProperty("enableFiltering", bEnableFiltering, true);
	this._rerenderToolbar();
	return this;
};

sap.ui.ux3.DataSet.prototype.setSelectedView = function(vView) {
	this.setAssociation("selectedView", vView);
	if (this._oSegBut.getSelectedButton() == this.getId()+"-view-"+this.getSelectedView()) {
		this._bDirty = true;
	}
	this._oSegBut.setSelectedButton(this.getId()+"-view-"+this.getSelectedView());
	return this;
};

sap.ui.ux3.DataSet.prototype.addToolbarItem = function(oToolbarItem) {
	this._getToolbar().addItem(oToolbarItem);
	this._rerenderToolbar();
};

sap.ui.ux3.DataSet.prototype.removeToolbarItem = function(oToolbarItem) {
	this._getToolbar().removeItem(oToolbarItem);
	this._rerenderToolbar();
};

sap.ui.ux3.DataSet.prototype.setShowToolbar = function(bShow) {
	this.setProperty("showToolbar",bShow, true);
	this._rerenderToolbar();
};

sap.ui.ux3.DataSet.prototype.setShowFilter = function(bShow) {
	this.setProperty("showFilter",bShow, true);
	this._rerenderFilter();
};

sap.ui.ux3.DataSet.prototype.setShowSearchField = function(bShow) {
	this.setProperty("showSearchField",bShow, true);
	this._rerenderToolbar();
};
/**
* @private
*/
sap.ui.ux3.DataSet.prototype._setToolbar = function(oToolbar) {
	this.setAggregation("_toolbar",oToolbar,true);
	this._rerenderToolbar();
};
/**
* @private
*/
sap.ui.ux3.DataSet.prototype._getToolbar = function() {
	return this.getAggregation("_toolbar");
};
