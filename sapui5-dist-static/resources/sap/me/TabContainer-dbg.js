/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.me.TabContainer.
jQuery.sap.declare("sap.me.TabContainer");
jQuery.sap.require("sap.me.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new TabContainer.
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
 * <li>{@link #getSelectedTab selectedTab} : int</li>
 * <li>{@link #getBadgeInfo badgeInfo} : int</li>
 * <li>{@link #getBadgeNotes badgeNotes} : int</li>
 * <li>{@link #getBadgeAttachments badgeAttachments} : int</li>
 * <li>{@link #getBadgePeople badgePeople} : int</li>
 * <li>{@link #getExpandable expandable} : boolean (default: true)</li>
 * <li>{@link #getExpanded expanded} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContentInfo contentInfo} : sap.ui.core.Control</li>
 * <li>{@link #getContentAttachments contentAttachments} : sap.ui.core.Control</li>
 * <li>{@link #getContentNotes contentNotes} : sap.ui.core.Control</li>
 * <li>{@link #getContentPeople contentPeople} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.me.TabContainer#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.me.TabContainer#event:expand expand} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.me.TabContainer#event:collapse collapse} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The TabContainer allow to stack 1 to 4 contents in a
 * view with corresponding icons
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @experimental Since version 1.12. 
 * API is not yet finished and might change completely
 * @name sap.me.TabContainer
 */
sap.ui.core.Control.extend("sap.me.TabContainer", { metadata : {

	// ---- object ----
	deprecated : true,

	// ---- control specific ----
	library : "sap.me",
	properties : {
		"selectedTab" : {type : "int", group : "Data", defaultValue : null},
		"badgeInfo" : {type : "int", group : "Data", defaultValue : null},
		"badgeNotes" : {type : "int", group : "Data", defaultValue : null},
		"badgeAttachments" : {type : "int", group : "Data", defaultValue : null},
		"badgePeople" : {type : "int", group : "Data", defaultValue : null},
		"expandable" : {type : "boolean", group : "Misc", defaultValue : true},
		"expanded" : {type : "boolean", group : "Misc", defaultValue : true},
		"visible" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	aggregations : {
    	"tabs" : {type : "sap.ui.core.Icon", multiple : true, singularName : "tab", visibility : "hidden"}, 
    	"contentInfo" : {type : "sap.ui.core.Control", multiple : false}, 
    	"contentAttachments" : {type : "sap.ui.core.Control", multiple : false}, 
    	"contentNotes" : {type : "sap.ui.core.Control", multiple : false}, 
    	"contentPeople" : {type : "sap.ui.core.Control", multiple : false}, 
    	"badges" : {type : "sap.ui.core.Control", multiple : true, singularName : "badge", visibility : "hidden"}
	},
	events : {
		"select" : {allowPreventDefault : true}, 
		"expand" : {}, 
		"collapse" : {}
	}
}});


/**
 * Creates a new subclass of class sap.me.TabContainer with name <code>sClassName</code> 
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
 * @name sap.me.TabContainer.extend
 * @function
 */

sap.me.TabContainer.M_EVENTS = {'select':'select','expand':'expand','collapse':'collapse'};


/**
 * Getter for property <code>selectedTab</code>.
 * Return the index of the selected tab
 *
 * Default value is <code></code>
 *
 * @return {int} the value of property <code>selectedTab</code>
 * @public
 * @name sap.me.TabContainer#getSelectedTab
 * @function
 */

/**
 * Setter for property <code>selectedTab</code>.
 *
 * Default value is <code></code> 
 *
 * @param {int} iSelectedTab  new value for property <code>selectedTab</code>
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.TabContainer#setSelectedTab
 * @function
 */


/**
 * Getter for property <code>badgeInfo</code>.
 * The number to display in the badge for the info tab
 *
 * Default value is <code></code>
 *
 * @return {int} the value of property <code>badgeInfo</code>
 * @public
 * @name sap.me.TabContainer#getBadgeInfo
 * @function
 */

/**
 * Setter for property <code>badgeInfo</code>.
 *
 * Default value is <code></code> 
 *
 * @param {int} iBadgeInfo  new value for property <code>badgeInfo</code>
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.TabContainer#setBadgeInfo
 * @function
 */


/**
 * Getter for property <code>badgeNotes</code>.
 * The number to display in the badge for the notes tab
 *
 * Default value is <code></code>
 *
 * @return {int} the value of property <code>badgeNotes</code>
 * @public
 * @name sap.me.TabContainer#getBadgeNotes
 * @function
 */

/**
 * Setter for property <code>badgeNotes</code>.
 *
 * Default value is <code></code> 
 *
 * @param {int} iBadgeNotes  new value for property <code>badgeNotes</code>
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.TabContainer#setBadgeNotes
 * @function
 */


/**
 * Getter for property <code>badgeAttachments</code>.
 * The number to display in the badge for the attachments tab
 *
 * Default value is <code></code>
 *
 * @return {int} the value of property <code>badgeAttachments</code>
 * @public
 * @name sap.me.TabContainer#getBadgeAttachments
 * @function
 */

/**
 * Setter for property <code>badgeAttachments</code>.
 *
 * Default value is <code></code> 
 *
 * @param {int} iBadgeAttachments  new value for property <code>badgeAttachments</code>
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.TabContainer#setBadgeAttachments
 * @function
 */


/**
 * Getter for property <code>badgePeople</code>.
 * The number to display in the badge for the people tab
 *
 * Default value is <code></code>
 *
 * @return {int} the value of property <code>badgePeople</code>
 * @public
 * @name sap.me.TabContainer#getBadgePeople
 * @function
 */

/**
 * Setter for property <code>badgePeople</code>.
 *
 * Default value is <code></code> 
 *
 * @param {int} iBadgePeople  new value for property <code>badgePeople</code>
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.TabContainer#setBadgePeople
 * @function
 */


/**
 * Getter for property <code>expandable</code>.
 * Indicates if the tab can be collapsed and expanded
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>expandable</code>
 * @public
 * @name sap.me.TabContainer#getExpandable
 * @function
 */

/**
 * Setter for property <code>expandable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bExpandable  new value for property <code>expandable</code>
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.TabContainer#setExpandable
 * @function
 */


/**
 * Getter for property <code>expanded</code>.
 * Indicates if the actual tab is expanded or not
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>expanded</code>
 * @public
 * @name sap.me.TabContainer#getExpanded
 * @function
 */

/**
 * Setter for property <code>expanded</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bExpanded  new value for property <code>expanded</code>
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.TabContainer#setExpanded
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * setter for visible property
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.me.TabContainer#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.TabContainer#setVisible
 * @function
 */


/**
 * Getter for aggregation <code>contentInfo</code>.<br/>
 * The info tab
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.me.TabContainer#getContentInfo
 * @function
 */


/**
 * Setter for the aggregated <code>contentInfo</code>.
 * @param oContentInfo {sap.ui.core.Control}
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.TabContainer#setContentInfo
 * @function
 */
	

/**
 * Destroys the contentInfo in the aggregation 
 * named <code>contentInfo</code>.
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.TabContainer#destroyContentInfo
 * @function
 */


/**
 * Getter for aggregation <code>contentAttachments</code>.<br/>
 * The attachments tab
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.me.TabContainer#getContentAttachments
 * @function
 */


/**
 * Setter for the aggregated <code>contentAttachments</code>.
 * @param oContentAttachments {sap.ui.core.Control}
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.TabContainer#setContentAttachments
 * @function
 */
	

/**
 * Destroys the contentAttachments in the aggregation 
 * named <code>contentAttachments</code>.
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.TabContainer#destroyContentAttachments
 * @function
 */


/**
 * Getter for aggregation <code>contentNotes</code>.<br/>
 * The notes tab
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.me.TabContainer#getContentNotes
 * @function
 */


/**
 * Setter for the aggregated <code>contentNotes</code>.
 * @param oContentNotes {sap.ui.core.Control}
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.TabContainer#setContentNotes
 * @function
 */
	

/**
 * Destroys the contentNotes in the aggregation 
 * named <code>contentNotes</code>.
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.TabContainer#destroyContentNotes
 * @function
 */


/**
 * Getter for aggregation <code>contentPeople</code>.<br/>
 * The people tab
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.me.TabContainer#getContentPeople
 * @function
 */


/**
 * Setter for the aggregated <code>contentPeople</code>.
 * @param oContentPeople {sap.ui.core.Control}
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.TabContainer#setContentPeople
 * @function
 */
	

/**
 * Destroys the contentPeople in the aggregation 
 * named <code>contentPeople</code>.
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.TabContainer#destroyContentPeople
 * @function
 */


/**
 * Indicates that the selected tab has changed
 *  
 *
 * @name sap.me.TabContainer#select
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.me.TabContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.me.TabContainer</code>.<br/> itself. 
 *  
 * Indicates that the selected tab has changed
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.me.TabContainer</code>.<br/> itself.
 *
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.TabContainer#attachSelect
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.me.TabContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.TabContainer#detachSelect
 * @function
 */

/**
 * Fire event select to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.me.TabContainer#fireSelect
 * @function
 */


/**
 * Indicates that the tab will expand 
 *
 * @name sap.me.TabContainer#expand
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'expand' event of this <code>sap.me.TabContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.me.TabContainer</code>.<br/> itself. 
 *  
 * Indicates that the tab will expand 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.me.TabContainer</code>.<br/> itself.
 *
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.TabContainer#attachExpand
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'expand' event of this <code>sap.me.TabContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.TabContainer#detachExpand
 * @function
 */

/**
 * Fire event expand to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.me.TabContainer#fireExpand
 * @function
 */


/**
 * Indicates that the tab will collapse 
 *
 * @name sap.me.TabContainer#collapse
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'collapse' event of this <code>sap.me.TabContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.me.TabContainer</code>.<br/> itself. 
 *  
 * Indicates that the tab will collapse 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.me.TabContainer</code>.<br/> itself.
 *
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.TabContainer#attachCollapse
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'collapse' event of this <code>sap.me.TabContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.TabContainer#detachCollapse
 * @function
 */

/**
 * Fire event collapse to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.me.TabContainer#fireCollapse
 * @function
 */


// Start of sap/me/TabContainer.js
///**
// * This file defines behavior for the control,
// */
jQuery.sap.require("sap.ui.core.IconPool");
jQuery.sap.require("sap.ui.core.theming.Parameters");

sap.me.TabContainer.prototype.init = function() {
	this.addAggregation("tabs",this._createButton("Info"));
	this.addAggregation("tabs",this._createButton("Notes"));
	this.addAggregation("tabs",this._createButton("Attachments"));
	this.addAggregation("tabs",this._createButton("People"));
	sap.ui.core.IconPool.insertFontFaceStyle();
	this._bFirstRendering = true;
};

sap.me.TabContainer.prototype.setBadgeInfo = function( iValue ){
	this._setBadgeLabelByName("badgeInfo",iValue);
};

sap.me.TabContainer.prototype.setBadgeAttachments = function( iValue ){
	this._setBadgeLabelByName("badgeAttachments",iValue);
};
sap.me.TabContainer.prototype.setBadgeNotes = function( iValue ){
	this._setBadgeLabelByName("badgeNotes",iValue);
};
sap.me.TabContainer.prototype.setBadgePeople = function( iValue ){
	this._setBadgeLabelByName("badgePeople",iValue);
};
sap.me.TabContainer.prototype.onBeforeRendering = function() {
	if (this.getSelectedTab() == undefined) {
		this.setProperty("selectedTab", 0, true); // no invalidation when rendering phase has started
	}
};


sap.me.TabContainer.prototype._setBadgeLabelByName = function(iName,iValue){
	var label = sap.ui.getCore().byId(this.getId()+"-"+iName);
	label.setText(iValue);
	this.setProperty(iName,iValue);
	label.toggleStyleClass("sapUIMeTabContainerHiddenBadges" , (iValue == 0) );
};
sap.me.TabContainer.prototype._placeElements = function(){
	// Place the arrow
	var $arrow = jQuery.sap.byId(this.getId() + "-arrow");
	var oBtn = this.getAggregation("tabs")[this.getSelectedTab()];
	if (oBtn && (oBtn.$().outerWidth() > 8)) {
		var iLeft = parseFloat(oBtn.$()[0].offsetLeft) + parseFloat(oBtn.$().outerWidth() / 2) - parseFloat($arrow.width() / 2);
		$arrow.css("left", iLeft + "px");
	}
};


sap.me.TabContainer.prototype.onAfterRendering = function() {
	this.setProperty("expanded", true, true);
	if( this._bFirstRendering){
		this._bFirstRendering = false;
		setTimeout(jQuery.proxy(this._placeElements,this),300); // Timeout to make sure the icon are placed
	} else {
		this._placeElements();
	}
};

sap.me.TabContainer.prototype.onThemeChanged  = function() {
	this._placeElements();
};


sap.me.TabContainer.prototype.onTransitionEnded = function() {
	var $container = jQuery.sap.byId(this.getId() + "-container");
	if( this.getExpanded()){ // expanding
		jQuery.sap.byId(this.getId() + "-arrow").show();
		$container.css("display" , "block");
		this.$().find(".sapUIMeTabContainerContent").removeClass("sapUIMeTabContainerContentClosed");
	}else{ // collapsing
		$container.css("display" , "none");
		this.$().find(".sapUIMeTabContainerContent").addClass("sapUIMeTabContainerContentClosed");
	}
};

sap.me.TabContainer.prototype.toggleExpandCollapse = function() {
	var bExpand = !this.getExpanded();
	var $container = jQuery.sap.byId(this.getId() + "-container");

	var $arrow = jQuery.sap.byId(this.getId() + "-arrow");
	if (bExpand) {
		this.$().find(".sapUIMeTabContainerButtons").children().filter(":eq(" + this.getSelectedTab() + ")").addClass("sapUIMeTabContainerTabSelected");
		$container.slideDown('400', jQuery.proxy(this.onTransitionEnded, this));
		this.fireExpand();
	} else {
		$arrow.hide();
		this.$().find(".sapUIMeTabContainerTabSelected").removeClass("sapUIMeTabContainerTabSelected");
		$container.slideUp('400', jQuery.proxy(this.onTransitionEnded, this));
		this.fireCollapse();
	}
	this.setProperty("expanded", bExpand, true);
};

sap.me.TabContainer.prototype.onButtonTap = function(oEvent) {
	var oBtn = oEvent.getSource();
	var iIndex = this.indexOfAggregation("tabs", oBtn);
	if (iIndex == this.getSelectedTab() && this.getExpandable()) {

		this.toggleExpandCollapse();
	} else {

		this.setProperty("expanded", true, true);

		var oBtnID = oBtn.getId();
		var oContent = this._getContentForBtn(oBtnID);
		if (oContent) {

			if (this.fireSelect()) {
				this.setSelectedTab(iIndex); // note: this currently rerenders. When this is changed not to rerender, then remember to also update the selected-tab CSS class!
			}
		}

	}

};

sap.me.TabContainer.prototype._getContentForBtn = function(oBtnID) {
	var id = this.getId() + "-";
	var contentName = oBtnID.substr(oBtnID.indexOf(id) + id.length);
	return this.getAggregation(contentName);
};
sap.me.TabContainer.prototype._getBagdeForBtn = function(oBtnID) {
	var id = this.getId() + "-content";
	var badgeName = oBtnID.substr(oBtnID.indexOf(id) + id.length);
	badgeName.charAt(0).toUpperCase();
	badgeName = "badge"+badgeName;
	return this.getProperty(badgeName);
};


sap.me.TabContainer.prototype._getScrollContainer = function(oContent) {
	return new sap.m.ScrollContainer({
		content : oContent
	});
};
sap.me.TabContainer.prototype._createButton = function(sId) {
	var sIconName = sap.ui.core.theming.Parameters.get("sapMeTabIcon"+sId);
	var sURI = sap.ui.core.IconPool.getIconURI(sIconName);
	var sColor = sap.ui.core.theming.Parameters.get("sapMeTabColor"+sId);
	var oBtn = new sap.ui.core.Icon(this.getId() + '-content' + sId,{
	       src: sURI,
	       backgroundColor: sColor,
	       activeColor :  sap.ui.core.theming.Parameters.get("sapUiIconInverted")
	});
	oBtn.addStyleClass("sapUIMeTabContainerBtn");
	oBtn.addStyleClass("sapUIMeTabContainerBtn"+sId);
	oBtn.attachPress(this.onButtonTap, this);
	
	var oLabel = new sap.m.Label(this.getId() + '-badge' + sId,{
		textAlign:"Center"

	});
	oLabel.addStyleClass("sapUIMeTabContainerBadge");
	oLabel.addStyleClass("sapUIMeTabContainerBadge"+sId);
	this.addAggregation("badges",oLabel);
	return oBtn;
};
