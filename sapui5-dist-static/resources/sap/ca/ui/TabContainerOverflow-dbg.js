/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.TabContainerOverflow.
jQuery.sap.declare("sap.ca.ui.TabContainerOverflow");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new TabContainerOverflow.
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
 * <li>{@link #getShowSelection showSelection} : boolean (default: true)</li>
 * <li>{@link #getExpandable expandable} : boolean (default: true)</li>
 * <li>{@link #getExpanded expanded} : boolean (default: true)</li>
 * <li>{@link #getFullyExpanded fullyExpanded} : boolean (default: false)</li>
 * <li>{@link #getSelectedKey selectedKey} : string (default: 'null')</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getOverflowHeight overflowHeight} : string (default: "50px")</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.m.IconTab[]</li>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.TabContainerOverflow#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.TabContainerOverflow#event:expand expand} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Add your documentation for the newTabContainerOverflow
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.TabContainerOverflow
 */
sap.ui.core.Control.extend("sap.ca.ui.TabContainerOverflow", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"showSelection" : {type : "boolean", group : "Misc", defaultValue : true, deprecated: true},
		"expandable" : {type : "boolean", group : "Misc", defaultValue : true},
		"expanded" : {type : "boolean", group : "Misc", defaultValue : true},
		"fullyExpanded" : {type : "boolean", group : "Misc", defaultValue : false},
		"selectedKey" : {type : "string", group : "Data", defaultValue : 'null'},
		"visible" : {type : "boolean", group : "Behavior", defaultValue : true},
		"overflowHeight" : {type : "string", group : "Misc", defaultValue : "50px"}
	},
	aggregations : {
    	"items" : {type : "sap.m.IconTab", multiple : true, singularName : "item"}, 
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}
	},
	events : {
		"select" : {}, 
		"expand" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.TabContainerOverflow with name <code>sClassName</code> 
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
 * @name sap.ca.ui.TabContainerOverflow.extend
 * @function
 */

sap.ca.ui.TabContainerOverflow.M_EVENTS = {'select':'select','expand':'expand'};


/**
 * Getter for property <code>showSelection</code>.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showSelection</code>
 * @public
 * @deprecated Since version 7.20.0. 
 * 
 * [Enter additional information for deprecation of showSelection]
 * @name sap.ca.ui.TabContainerOverflow#getShowSelection
 * @function
 */

/**
 * Setter for property <code>showSelection</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowSelection  new value for property <code>showSelection</code>
 * @return {sap.ca.ui.TabContainerOverflow} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * 
 * [Enter additional information for deprecation of showSelection]
 * @name sap.ca.ui.TabContainerOverflow#setShowSelection
 * @function
 */


/**
 * Getter for property <code>expandable</code>.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>expandable</code>
 * @public
 * @name sap.ca.ui.TabContainerOverflow#getExpandable
 * @function
 */

/**
 * Setter for property <code>expandable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bExpandable  new value for property <code>expandable</code>
 * @return {sap.ca.ui.TabContainerOverflow} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.TabContainerOverflow#setExpandable
 * @function
 */


/**
 * Getter for property <code>expanded</code>.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>expanded</code>
 * @public
 * @name sap.ca.ui.TabContainerOverflow#getExpanded
 * @function
 */

/**
 * Setter for property <code>expanded</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bExpanded  new value for property <code>expanded</code>
 * @return {sap.ca.ui.TabContainerOverflow} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.TabContainerOverflow#setExpanded
 * @function
 */


/**
 * Getter for property <code>fullyExpanded</code>.
 * 
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>fullyExpanded</code>
 * @public
 * @name sap.ca.ui.TabContainerOverflow#getFullyExpanded
 * @function
 */

/**
 * Setter for property <code>fullyExpanded</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bFullyExpanded  new value for property <code>fullyExpanded</code>
 * @return {sap.ca.ui.TabContainerOverflow} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.TabContainerOverflow#setFullyExpanded
 * @function
 */


/**
 * Getter for property <code>selectedKey</code>.
 * 
 *
 * Default value is <code>null</code>
 *
 * @return {string} the value of property <code>selectedKey</code>
 * @public
 * @name sap.ca.ui.TabContainerOverflow#getSelectedKey
 * @function
 */

/**
 * Setter for property <code>selectedKey</code>.
 *
 * Default value is <code>null</code> 
 *
 * @param {string} sSelectedKey  new value for property <code>selectedKey</code>
 * @return {sap.ca.ui.TabContainerOverflow} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.TabContainerOverflow#setSelectedKey
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ca.ui.TabContainerOverflow#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ca.ui.TabContainerOverflow} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.TabContainerOverflow#setVisible
 * @function
 */


/**
 * Getter for property <code>overflowHeight</code>.
 * 
 *
 * Default value is <code>"50px"</code>
 *
 * @return {string} the value of property <code>overflowHeight</code>
 * @public
 * @name sap.ca.ui.TabContainerOverflow#getOverflowHeight
 * @function
 */

/**
 * Setter for property <code>overflowHeight</code>.
 *
 * Default value is <code>"50px"</code> 
 *
 * @param {string} sOverflowHeight  new value for property <code>overflowHeight</code>
 * @return {sap.ca.ui.TabContainerOverflow} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.TabContainerOverflow#setOverflowHeight
 * @function
 */


/**
 * Getter for aggregation <code>items</code>.<br/>
 * 
 * 
 * @return {sap.m.IconTab[]}
 * @public
 * @name sap.ca.ui.TabContainerOverflow#getItems
 * @function
 */


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.m.IconTab}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ca.ui.TabContainerOverflow} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.TabContainerOverflow#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.m.IconTab}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ca.ui.TabContainerOverflow} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.TabContainerOverflow#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.m.IconTab} vItem the item to remove or its index or id
 * @return {sap.m.IconTab} the removed item or null
 * @public
 * @name sap.ca.ui.TabContainerOverflow#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.IconTab[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ca.ui.TabContainerOverflow#removeAllItems
 * @function
 */

/**
 * Checks for the provided <code>sap.m.IconTab</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.m.IconTab}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ca.ui.TabContainerOverflow#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ca.ui.TabContainerOverflow} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.TabContainerOverflow#destroyItems
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * 
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ca.ui.TabContainerOverflow#getContent
 * @function
 */


/**
 * Inserts a content into the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ca.ui.TabContainerOverflow} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.TabContainerOverflow#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ca.ui.TabContainerOverflow} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.TabContainerOverflow#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ca.ui.TabContainerOverflow#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ca.ui.TabContainerOverflow#removeAllContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ca.ui.TabContainerOverflow#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ca.ui.TabContainerOverflow} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.TabContainerOverflow#destroyContent
 * @function
 */


/**
 *  
 *
 * @name sap.ca.ui.TabContainerOverflow#select
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ca.ui.TabContainerOverflow</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.TabContainerOverflow</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.TabContainerOverflow</code>.<br/> itself.
 *
 * @return {sap.ca.ui.TabContainerOverflow} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.TabContainerOverflow#attachSelect
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ca.ui.TabContainerOverflow</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.TabContainerOverflow} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.TabContainerOverflow#detachSelect
 * @function
 */

/**
 * Fire event select to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.TabContainerOverflow} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.TabContainerOverflow#fireSelect
 * @function
 */


/**
 *  
 *
 * @name sap.ca.ui.TabContainerOverflow#expand
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'expand' event of this <code>sap.ca.ui.TabContainerOverflow</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.TabContainerOverflow</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.TabContainerOverflow</code>.<br/> itself.
 *
 * @return {sap.ca.ui.TabContainerOverflow} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.TabContainerOverflow#attachExpand
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'expand' event of this <code>sap.ca.ui.TabContainerOverflow</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.TabContainerOverflow} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.TabContainerOverflow#detachExpand
 * @function
 */

/**
 * Fire event expand to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.TabContainerOverflow} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.TabContainerOverflow#fireExpand
 * @function
 */


// Start of sap\ca\ui\TabContainerOverflow.js


// Provides control sap.ca.ui.TabContainerOverflow.
jQuery.sap.declare("sap.ca.ui.TabContainerOverflow");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");



/*sap.ui.core.Control.extend("sap.ca.ui.TabContainerOverflow", { metadata : {

	// ---- object ----

	// ---- control specific ----
	//library : "sap.m",
	properties : {
		"showSelection" : {type : "boolean", group : "Misc", defaultValue : true, deprecated: true},
		"expandable" : {type : "boolean", group : "Misc", defaultValue : true},
		"expanded" : {type : "boolean", group : "Misc", defaultValue : true},
		"fullyExpanded" : {type : "boolean", group : "Misc", defaultValue : false},
		"selectedKey" : {type : "string", group : "Data", defaultValue : null},
		"visible" : {type : "boolean", group : "Behavior", defaultValue : true},
		"overflowHeight" : {type : "string", group : "Misc", defaultValue : "50px"}
	},
	aggregations : {
    	"items" : {type : "sap.m.IconTab", multiple : true, singularName : "item"}, 
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}
	},
	events : {
		"select" : {}, 
		"expand" : {}
	}
}});


sap.ca.ui.TabContainerOverflow.M_EVENTS = {'select':'select','expand':'expand'};*/

sap.ca.ui.TabContainerOverflow.prototype.init = function() {
	this.moreLessButton = new sap.m.Button({
		 id: this.getId() + "-overlayButton",
			icon: "sap-icon://slim-arrow-down",
			type: sap.m.ButtonType.Unstyled,
			press: jQuery.proxy(this.partialToggleExpandCollapse,this)
		});
	
};

/**
 * Exit
 */
sap.ca.ui.TabContainerOverflow.prototype.exit = function() {

};

sap.ca.ui.TabContainerOverflow.prototype.onBeforeRendering = function() {
	if (this.getItems().length > 0) {
		if (!this.oSelectedItem) {
			this.oSelectedItem = this.getItems()[0];
		}
		this.setProperty("selectedKey", this.oSelectedItem.getKey(), true);
	}
};

/**
 * setSelectedItem
 */
sap.ca.ui.TabContainerOverflow.prototype.setSelectedItem = function(oItem) {

	if (!oItem.getEnabled()) {
		return;
	}
	var $content = jQuery.sap.byId(this.getId() + "-content");
	
	this.oSelectedItem.$().removeClass("sapMITSelected");

	//click on already selected item leads to expanding/collapsing of the content (if expandable enabled)
	if (this.oSelectedItem === oItem && this.getExpandable()) {
		this.toggleExpandCollapse();
	//click on other item leads to showing the right content of this item
	} else {
		this.setFullyExpanded(false);
		this.moreLessButton.setIcon("sap-icon://slim-arrow-down");
		if ($content.length > 0) {
			$content.empty();
		}
		this.oSelectedItem = oItem;
		var oSelectedItemContent = this.oSelectedItem.getContent();
		this.oSelectedItem.$().addClass("sapMITSelected");

		//if item has own content, this content is shown
		if (oSelectedItemContent.length > 0) {
			this._rerenderContent(oSelectedItemContent);
		//if item has not own content, general content of the icontabbar is shown
		} else {
			this._rerenderContent(this.getContent());
		}
		//if content is not expanded, content will be expanded (first click on item always leads to expanding the right content)
		if (this.getExpanded() === false) {
			this.toggleExpandCollapse();
		}
		this.adjustArrow();
		this.moreLessButton.rerender();
		this.onTransitionEnded();
	}

	this.setProperty("selectedKey", this.oSelectedItem.getKey(), true);

	this.fireSelect({
		selectedItem: this.oSelectedItem,
		selectedKey: this.oSelectedItem.getKey(),
		item: this.oSelectedItem,
		key: this.oSelectedItem.getKey()
	});

};

sap.ca.ui.TabContainerOverflow.prototype._rerenderContent = function(oContent) {
	var $content = jQuery.sap.byId(this.getId() + "-content");
	if (oContent.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		for (var i = 0; i < oContent.length; i++) {
			rm.renderControl(oContent[i]);
		}
		rm.flush($content[0]);
		rm.destroy();
	}
};

/**
 * adjustArrow
 */
sap.ca.ui.TabContainerOverflow.prototype.adjustArrow = function(){
	var $arrow = jQuery.sap.byId(this.getId() + "-arrow"),
		$item;
	if (this.oSelectedItem) {
		$item = this.oSelectedItem.$();
		if ($item.length > 0) {
			$item.siblings().removeClass("sapMITSelected");
			$item.addClass("sapMITSelected");
			var iLeft = $item[0].offsetLeft + $item.outerWidth() / 2 - $arrow.width() / 2;
			$arrow.css("left", iLeft + "px");
		}
	}
};

sap.ca.ui.TabContainerOverflow.prototype.renderButtonVisibility = function(){
	var $content = jQuery.sap.byId(this.getId() + "-content");
	var $overlay = jQuery.sap.byId(this.getId() + "-overlay");
	var $overlayButton = jQuery.sap.byId(this.getId() + "-overlayButton");
	var oldHeight=$content.height();
	$content.css({height:"auto"});
	var autoHeight=$content.height();
	$content.css({height:this.getOverflowHeight()});
	var overflowHeight=$content.height();
	$content.css({height: oldHeight});
	if (autoHeight>overflowHeight){
		$overlay.show();
		$overlayButton.show();
	}
	else{
		$overlay.hide();
		$overlayButton.hide();
	}
};

/**
 * afterRendering
 */
sap.ca.ui.TabContainerOverflow.prototype.onAfterRendering = function(){
	this.adjustArrow();
	this.onTransitionEnded();
	var $content = jQuery.sap.byId(this.getId() + "-content");
	$content.css({overflow:"hidden"});
	this.renderButtonVisibility();
};

sap.ca.ui.TabContainerOverflow.prototype.destroyItems = function() {
	this.oSelectedItem = null;
	this.destroyAggregation("items");
};

/**
 * Called after the theme has been switched, required for new width calc
 * @private
 */
sap.ca.ui.TabContainerOverflow.prototype.onThemeChanged = function(oEvent){
	this.adjustArrow();
};

sap.ca.ui.TabContainerOverflow.prototype.onTransitionEnded = function() {
	var $content = jQuery.sap.byId(this.getId() + "-content");
	var $container = jQuery.sap.byId(this.getId() + "-containerContent");
	var $overlay = jQuery.sap.byId(this.getId() + "-overlay");
	var $overlayButton = jQuery.sap.byId(this.getId() + "-overlayButton");
	var bExpanded = this.getExpanded();
	var bFullyExpanded = this.getFullyExpanded();
	if (bExpanded) { // expanding
		this.renderButtonVisibility();
		jQuery.sap.byId(this.getId() + "-arrow").show();
		$content.css("display", "block");
		if(bFullyExpanded){
			$content.css({height:"auto"});
		}
		else{
			$content.css({height:this.getOverflowHeight()});
		}
	} else { // collapsing
		$content.css("display", "none");
	}
	$overlay.css("bottom","0px");
	$overlayButton.css("bottom","0px");
	$container.toggleClass("sapMITBContentClosed", !bExpanded);

};

sap.ca.ui.TabContainerOverflow.prototype.toggleExpandCollapse = function() {
	var bExpand = !this.getExpanded();
	var bFullyExpanded = this.getFullyExpanded();
	var $content = jQuery.sap.byId(this.getId() + "-content");
	var $overlay = jQuery.sap.byId(this.getId() + "-overlay");
	var $overlayButton = jQuery.sap.byId(this.getId() + "-overlayButton");
	var $arrow = jQuery.sap.byId(this.getId() + "-arrow");
	var $selectedTab = jQuery.sap.byId(this._getItemByKey(this.getItems(), this.getSelectedKey()).getId());
	$selectedTab.toggleClass("sapMITBContentTabSelected", bExpand);
	$selectedTab.toggleClass("sapMITSelected", bExpand);
	if (bExpand) {
		if (!bFullyExpanded){
			$content.show();
			$content.animate({height:this.getOverflowHeight()},400);
			this.renderButtonVisibility();
		}
		else{
			$content.slideDown('400', jQuery.proxy(this.onTransitionEnded, this));
		}
		$arrow.show();
		
	} else {
		$arrow.hide();
		$overlayButton.hide();
		$overlay.hide();
		$content.slideUp('400', jQuery.proxy(this.onTransitionEnded, this));
	}
	this.setProperty("expanded", bExpand, true);
	
	
	this.fireExpand({
		expand: bExpand,
		collapse: !bExpand
	});

};

sap.ca.ui.TabContainerOverflow.prototype._getItemByKey = function(aItems, sKey) {
	for (var i = 0; i < aItems.length; i++) {
		if (aItems[i] instanceof sap.m.IconTabFilter) {
			if (aItems[i].getKey() === sKey) {
			return aItems[i];
			}
		}
		
	}
};


sap.ca.ui.TabContainerOverflow.prototype._checkTextOnly = function(aItems) {
	if (aItems.length > 0) {
		for (var i = 0; i < aItems.length; i++) {
			if (aItems[i] instanceof sap.m.IconTabFilter) {
				if (aItems[i].getIcon()) {
					return false;
				}
			}
		}
	}
	return true;
};

sap.ca.ui.TabContainerOverflow.prototype._checkNoText = function(aItems) {
	if (aItems.length > 0) {
		for (var i = 0; i < aItems.length; i++) {
			if (aItems[i] instanceof sap.m.IconTabFilter) {
				if (aItems[i].getText().length > 0) {
					return false;
				}
			}
		}
	}
	return true;
};

//Item23 specific
sap.ca.ui.TabContainerOverflow.prototype.partialToggleExpandCollapse = function() {
	var $content = jQuery.sap.byId(this.getId() + "-content");
	var bFullyExpanded = this.getFullyExpanded();
	
	if (!bFullyExpanded) {
		this.moreLessButton.setIcon("sap-icon://slim-arrow-up");
		$content.css({height:"auto"});
		var oldHeight=$content.height();
		$content.css({height:this.getOverflowHeight()});
		$content.animate({height: oldHeight},400);
		this.moreLessButton.rerender();
		this.setProperty("fullyExpanded", true, true);
	} else {
		this.moreLessButton.setIcon("sap-icon://slim-arrow-down");
		$content.animate({height:this.getOverflowHeight()},400);
		this.moreLessButton.rerender();
		this.setProperty("fullyExpanded", false, true);
	}


};


