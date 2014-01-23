/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.HierarchicalSelectDialog.
jQuery.sap.declare("sap.ca.ui.HierarchicalSelectDialog");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.m.Dialog");


/**
 * Constructor for a new HierarchicalSelectDialog.
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
 * <ul>
 * <li>{@link #getItems items} : sap.ca.ui.HierarchicalSelectDialogItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.HierarchicalSelectDialog#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.HierarchicalSelectDialog#event:cancel cancel} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Dialog#constructor sap.m.Dialog}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Select an item in a dialog from a hierarchical list
 * @extends sap.m.Dialog
 *
 * @author Bruno Vicente 
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.HierarchicalSelectDialog
 */
sap.m.Dialog.extend("sap.ca.ui.HierarchicalSelectDialog", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ca.ui",
	defaultAggregation : "items",
	aggregations : {
    	"items" : {type : "sap.ca.ui.HierarchicalSelectDialogItem", multiple : true, singularName : "item"}
	},
	events : {
		"select" : {}, 
		"cancel" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.HierarchicalSelectDialog with name <code>sClassName</code> 
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
 * @name sap.ca.ui.HierarchicalSelectDialog.extend
 * @function
 */

sap.ca.ui.HierarchicalSelectDialog.M_EVENTS = {'select':'select','cancel':'cancel'};


/**
 * Getter for aggregation <code>items</code>.<br/>
 * Type checker, only HierarchicalSelectDialogItem are allowed. Please do NOT use the "content" aggregation of the dialog
 * 
 * @return {sap.ca.ui.HierarchicalSelectDialogItem[]}
 * @public
 * @name sap.ca.ui.HierarchicalSelectDialog#getItems
 * @function
 */


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.ca.ui.HierarchicalSelectDialogItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ca.ui.HierarchicalSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.HierarchicalSelectDialog#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ca.ui.HierarchicalSelectDialogItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ca.ui.HierarchicalSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.HierarchicalSelectDialog#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ca.ui.HierarchicalSelectDialogItem} vItem the item to remove or its index or id
 * @return {sap.ca.ui.HierarchicalSelectDialogItem} the removed item or null
 * @public
 * @name sap.ca.ui.HierarchicalSelectDialog#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ca.ui.HierarchicalSelectDialogItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ca.ui.HierarchicalSelectDialog#removeAllItems
 * @function
 */

/**
 * Checks for the provided <code>sap.ca.ui.HierarchicalSelectDialogItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ca.ui.HierarchicalSelectDialogItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ca.ui.HierarchicalSelectDialog#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ca.ui.HierarchicalSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.HierarchicalSelectDialog#destroyItems
 * @function
 */


/**
 * Thrown when user selects an item 
 *
 * @name sap.ca.ui.HierarchicalSelectDialog#select
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ca.ui.HierarchicalSelectDialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.HierarchicalSelectDialog</code>.<br/> itself. 
 *  
 * Thrown when user selects an item 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.HierarchicalSelectDialog</code>.<br/> itself.
 *
 * @return {sap.ca.ui.HierarchicalSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.HierarchicalSelectDialog#attachSelect
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ca.ui.HierarchicalSelectDialog</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.HierarchicalSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.HierarchicalSelectDialog#detachSelect
 * @function
 */

/**
 * Fire event select to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.HierarchicalSelectDialog} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.HierarchicalSelectDialog#fireSelect
 * @function
 */


/**
 * Thrown when user clicks cancel 
 *
 * @name sap.ca.ui.HierarchicalSelectDialog#cancel
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'cancel' event of this <code>sap.ca.ui.HierarchicalSelectDialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.HierarchicalSelectDialog</code>.<br/> itself. 
 *  
 * Thrown when user clicks cancel 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.HierarchicalSelectDialog</code>.<br/> itself.
 *
 * @return {sap.ca.ui.HierarchicalSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.HierarchicalSelectDialog#attachCancel
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'cancel' event of this <code>sap.ca.ui.HierarchicalSelectDialog</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.HierarchicalSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.HierarchicalSelectDialog#detachCancel
 * @function
 */

/**
 * Fire event cancel to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.HierarchicalSelectDialog} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.HierarchicalSelectDialog#fireCancel
 * @function
 */


// Start of sap\ca\ui\HierarchicalSelectDialog.js
jQuery.sap.require("sap.ca.ui.utils.resourcebundle");
jQuery.sap.require("sap.m.NavContainer");

sap.ca.ui.HierarchicalSelectDialog.prototype.init = function() {

	sap.m.Dialog.prototype.init.apply(this);
    this.addStyleClass("sapCaUiHSD");

	// internal Navigation Container
	this._oNavContainer = new sap.m.NavContainer(this.getId() + 'hsAppContainer', {
		pages : []
	});
	this._pageIdx = 0;

	sap.m.Dialog.prototype.addContent.apply(this, [this._oNavContainer]);

	// create Cancel button
	this.setEndButton(new sap.m.Button({
		text : sap.ca.ui.utils.resourcebundle.getText("hsd.cancelButton"),
		press : jQuery.proxy(function() {

			// close the ResponsivePopover
			this.close();

			// fire cancel event
			this.fireCancel();
		}, this) ,
        width: "100%"
	}));

	this.setShowHeader(false);
	this.setContentWidth('250px');
	this.setContentHeight('350px');

    // "beforeOpen", "afterClose" and "beforeClose" does *NOT* work
    // because the transition never ends and then the NavContainer is
    // in a instable state
    this.attachAfterOpen(function(){

        this._oNavContainer.backToTop();

        // iterate through every pages to clean the search
        var aPages = this._oNavContainer.getPages();
        for (var i = 0; i < aPages.length; ++i){
            var page = aPages[i];
            var oSearchField = sap.ui.getCore().byId(page.getId()+"-searchfield");
            if (oSearchField){
                oSearchField.clear();
            }
        }
    });
};


/**
 * "content" is an aggregation of the ResponsivePopover, we override it to add the content
 * the "items" aggregation but only if the instance is a @see sap.ca.ui.HierarchicalSelectDialogItem
 *
 * Otherwise nothing is done
 *
 * @override
 *
 * @param oContent
 */
sap.ca.ui.HierarchicalSelectDialog.prototype.addContent = function(oContent) {
	if (oContent instanceof sap.ca.ui.HierarchicalSelectDialogItem) {
		this.addItem(oContent);
	} else {
		jQuery.sap.log.error("Only sap.ca.ui.HierarchicalSelectDialogItem are authorized in HierarchicalSelectDialog, also please use the items aggregation")
	}
};
sap.ca.ui.HierarchicalSelectDialog.prototype.addItem = function(oItem) {
	this.insertItem(oItem, this.getItems().length)
}

/**
 * When adding a new item to the aggregation, a sap.m.Page is actually created
 * with its own ID and added to the internal NavContainer.
 *
 * This method calls @see _getPageContent() to build the page content
 *
 * Unless it is the first page, a back button is added
 *
 * @override
 *
 * @param oItem
 * @returns this
 */
sap.ca.ui.HierarchicalSelectDialog.prototype.insertItem = function(oItem, iIndex) {
	// Read the content to parse the HierarchicalSelectDialogItem
	// Generate the pages of the sap.m.App based on those item

	var pageId = "p" + this._pageIdx;
	var pageTitle = oItem.getTitle();
	var entityToBind = oItem.getEntityName();
	var itemTemplate = oItem.getListItemTemplate();
	var nextPageId = "p" + (this._pageIdx + 1);
	// Page Creation
	var list = this._getPageContent(pageId, nextPageId, entityToBind, itemTemplate);
	var page = new sap.m.Page(pageId, {
		title : pageTitle,
		content : list
	});

	var listData = new sap.ui.core.CustomData({
		key : 'list',
		value : list
	});

	var itemTemplateData = new sap.ui.core.CustomData({
		key : 'itemTemplate',
		value : itemTemplate
	});
	// create searchField
	page.setSubHeader(new sap.m.Bar({
		contentMiddle : [new sap.m.SearchField(page.getId() + "-searchfield", {
			placeholder : sap.ca.ui.utils.resourcebundle.getText("hsd.searchTextField"),
			width : "100%",
			liveChange : this._onSearchItem,
			customData : [listData, itemTemplateData]
		})]
	}));

	if (this._pageIdx != 0) {
		page.setShowNavButton(true);
		page.attachNavButtonPress(jQuery.proxy(this._onNavigateBack, this));
		page.onBeforeShow = function(oEvent) {
			jQuery.each(oEvent.data, function(modelName, context) {
				page.setBindingContext(context, modelName);
			})

		};
	}
    else{
        this._oNavContainer.setInitialPage(page);
    }
	if (this._pageIdx > 0) {
		var items = this.getItems();
		items[items.length - 1].getListItemTemplate().setType(sap.m.ListType.Navigation);
	}

	this._oNavContainer.addPage(page);
	this._pageIdx++;

    this.insertAggregation("items", oItem, iIndex);

	return this;
};

/**
 * Adds filter from the searchfield to the list. This is liveSearch (as you type)
 *
 * @param evt
 * @private
 */
sap.ca.ui.HierarchicalSelectDialog.prototype._onSearchItem = function(evt) {
	var searchValue = evt.getParameter("newValue");
	var itemTemplate = evt.getSource().data("itemTemplate");

    var aListItems = evt.getSource().data("list").getBinding("items");
	if (searchValue !== null && searchValue !== "") {
        var availableProperties = itemTemplate.getMetadata().getProperties();
        var aFilterList = [];
        jQuery.each(availableProperties, function(propName, propValue) {
            var bindingInfo = itemTemplate.getBindingInfo(propName);
            if(bindingInfo != null) {
                aFilterList.push(new sap.ui.model.Filter(bindingInfo.binding.getPath(), sap.ui.model.FilterOperator.Contains, searchValue));
             }
        })

		aListItems.filter(new sap.ui.model.Filter(aFilterList, false));
	}
    else {
        aListItems.filter(null);
    }
}

/**
 *
 * Takes the pageId and the nextPageId (for navigation purpose) and creates
 * a sap.m.List bound to the data defined by the user
 *
 * When clicking a item, the navigation is triggered
 *
 * @param pageId
 * @param nextPageId
 * @param entityToBind
 * @param itemTemplate
 * @returns {sap.m.List}
 * @private
 */
sap.ca.ui.HierarchicalSelectDialog.prototype._getPageContent = function(pageId, nextPageId, entityToBind, itemTemplate) {
	var list = new sap.m.List(pageId + "list");
	var data = new sap.ui.core.CustomData({
		key : 'pageId',
		value : nextPageId
	});

	itemTemplate.setType(sap.m.ListType.Active);

	itemTemplate.setIconInset(true);
	itemTemplate.attachPress(jQuery.proxy(this._onItemSelected, this));
	itemTemplate.addCustomData(data);
	list.bindItems(entityToBind, itemTemplate);

	return list;
};

/**
 * Navigates one page back
 *
 * @param channelId
 * @param eventId
 * @param data
 * @private
 */
sap.ca.ui.HierarchicalSelectDialog.prototype._onNavigateBack = function(channelId, eventId, data) {
	this._oNavContainer.back();
};

/**
 * Navigates to the next page
 *
 * @param evt
 * @private
 */
sap.ca.ui.HierarchicalSelectDialog.prototype._onItemSelected = function(evt) {
	var item = evt.getSource();
	var nextPageId = item.data("pageId");
	var nextPage = this._oNavContainer.getPage(nextPageId);
	if (nextPage) {
		//Show Selected Item Label in page header
		nextPage.setTitle(item.getTitle());
		//Navigate
		this._oNavContainer.to(nextPageId, "slide", item.oBindingContexts);
	}
    else {
		this.fireSelect({ selectedItem : item});
		this.close();
	}

};