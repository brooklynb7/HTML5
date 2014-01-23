/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.OverviewTile.
jQuery.sap.declare("sap.ca.ui.OverviewTile");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.m.Tile");


/**
 * Constructor for a new OverviewTile.
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
 * <li>{@link #getTitle title} : string (default: 'null')</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI (default: 'null')</li>
 * <li>{@link #getContact contact} : string (default: 'null')</li>
 * <li>{@link #getAddress address} : string (default: 'null')</li>
 * <li>{@link #getOpportunities opportunities} : string (default: 'null')</li>
 * <li>{@link #getRating rating} : string (default: 'null')</li>
 * <li>{@link #getLastContact lastContact} : string (default: 'null')</li>
 * <li>{@link #getNextContact nextContact} : string (default: 'null')</li>
 * <li>{@link #getRevenue revenue} : string (default: 'null')</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getContactActive contactActive} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.OverviewTile#event:contactPress contactPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Tile#constructor sap.m.Tile}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Display aTile that presents an overview of a customer
 * @extends sap.m.Tile
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.OverviewTile
 */
sap.m.Tile.extend("sap.ca.ui.OverviewTile", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"init"
	],

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : 'null'},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : 'null'},
		"contact" : {type : "string", group : "Misc", defaultValue : 'null'},
		"address" : {type : "string", group : "Misc", defaultValue : 'null'},
		"opportunities" : {type : "string", group : "Misc", defaultValue : 'null'},
		"rating" : {type : "string", group : "Misc", defaultValue : 'null'},
		"lastContact" : {type : "string", group : "Misc", defaultValue : 'null'},
		"nextContact" : {type : "string", group : "Misc", defaultValue : 'null'},
		"revenue" : {type : "string", group : "Misc", defaultValue : 'null'},
		"visible" : {type : "boolean", group : "Misc", defaultValue : true},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"contactActive" : {type : "boolean", group : "Behavior", defaultValue : false}
	},
	events : {
		"contactPress" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.OverviewTile with name <code>sClassName</code> 
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
 * @name sap.ca.ui.OverviewTile.extend
 * @function
 */

sap.ca.ui.OverviewTile.M_EVENTS = {'contactPress':'contactPress'};


/**
 * Getter for property <code>title</code>.
 * This property is used to set the title of the tile
 *
 * Default value is <code>null</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.ca.ui.OverviewTile#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is <code>null</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.OverviewTile#setTitle
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * This property is used to set the image of the tile
 *
 * Default value is <code>null</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.ca.ui.OverviewTile#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is <code>null</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.OverviewTile#setIcon
 * @function
 */


/**
 * Getter for property <code>contact</code>.
 * This property is used to set the contact of the tile
 *
 * Default value is <code>null</code>
 *
 * @return {string} the value of property <code>contact</code>
 * @public
 * @name sap.ca.ui.OverviewTile#getContact
 * @function
 */

/**
 * Setter for property <code>contact</code>.
 *
 * Default value is <code>null</code> 
 *
 * @param {string} sContact  new value for property <code>contact</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.OverviewTile#setContact
 * @function
 */


/**
 * Getter for property <code>address</code>.
 * This property is used to set the adress field in the form of the tile
 *
 * Default value is <code>null</code>
 *
 * @return {string} the value of property <code>address</code>
 * @public
 * @name sap.ca.ui.OverviewTile#getAddress
 * @function
 */

/**
 * Setter for property <code>address</code>.
 *
 * Default value is <code>null</code> 
 *
 * @param {string} sAddress  new value for property <code>address</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.OverviewTile#setAddress
 * @function
 */


/**
 * Getter for property <code>opportunities</code>.
 * This property is used to set the opportunitiesfield in the form of the tile
 *
 * Default value is <code>null</code>
 *
 * @return {string} the value of property <code>opportunities</code>
 * @public
 * @name sap.ca.ui.OverviewTile#getOpportunities
 * @function
 */

/**
 * Setter for property <code>opportunities</code>.
 *
 * Default value is <code>null</code> 
 *
 * @param {string} sOpportunities  new value for property <code>opportunities</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.OverviewTile#setOpportunities
 * @function
 */


/**
 * Getter for property <code>rating</code>.
 * This property is used to set the rating field in the form of the tile
 *
 * Default value is <code>null</code>
 *
 * @return {string} the value of property <code>rating</code>
 * @public
 * @name sap.ca.ui.OverviewTile#getRating
 * @function
 */

/**
 * Setter for property <code>rating</code>.
 *
 * Default value is <code>null</code> 
 *
 * @param {string} sRating  new value for property <code>rating</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.OverviewTile#setRating
 * @function
 */


/**
 * Getter for property <code>lastContact</code>.
 * This property is used to set the last contact field in the form of the tile
 *
 * Default value is <code>null</code>
 *
 * @return {string} the value of property <code>lastContact</code>
 * @public
 * @name sap.ca.ui.OverviewTile#getLastContact
 * @function
 */

/**
 * Setter for property <code>lastContact</code>.
 *
 * Default value is <code>null</code> 
 *
 * @param {string} sLastContact  new value for property <code>lastContact</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.OverviewTile#setLastContact
 * @function
 */


/**
 * Getter for property <code>nextContact</code>.
 * This property is used to set the next contact field in the form of the tile
 *
 * Default value is <code>null</code>
 *
 * @return {string} the value of property <code>nextContact</code>
 * @public
 * @name sap.ca.ui.OverviewTile#getNextContact
 * @function
 */

/**
 * Setter for property <code>nextContact</code>.
 *
 * Default value is <code>null</code> 
 *
 * @param {string} sNextContact  new value for property <code>nextContact</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.OverviewTile#setNextContact
 * @function
 */


/**
 * Getter for property <code>revenue</code>.
 * This property is used to set the revenue to date field in the form of the tile
 *
 * Default value is <code>null</code>
 *
 * @return {string} the value of property <code>revenue</code>
 * @public
 * @name sap.ca.ui.OverviewTile#getRevenue
 * @function
 */

/**
 * Setter for property <code>revenue</code>.
 *
 * Default value is <code>null</code> 
 *
 * @param {string} sRevenue  new value for property <code>revenue</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.OverviewTile#setRevenue
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
 * @name sap.ca.ui.OverviewTile#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.OverviewTile#setVisible
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ca.ui.OverviewTile#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.OverviewTile#setWidth
 * @function
 */


/**
 * Getter for property <code>contactActive</code>.
 * 
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>contactActive</code>
 * @public
 * @name sap.ca.ui.OverviewTile#getContactActive
 * @function
 */

/**
 * Setter for property <code>contactActive</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bContactActive  new value for property <code>contactActive</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.OverviewTile#setContactActive
 * @function
 */


/**
 * This event is fired when the end user clicks on the contact link. 
 *
 * @name sap.ca.ui.OverviewTile#contactPress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'contactPress' event of this <code>sap.ca.ui.OverviewTile</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.OverviewTile</code>.<br/> itself. 
 *  
 * This event is fired when the end user clicks on the contact link. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.OverviewTile</code>.<br/> itself.
 *
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.OverviewTile#attachContactPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'contactPress' event of this <code>sap.ca.ui.OverviewTile</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.OverviewTile#detachContactPress
 * @function
 */

/**
 * Fire event contactPress to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.OverviewTile#fireContactPress
 * @function
 */


/**
 * 
 *
 * @name sap.ca.ui.OverviewTile.prototype.init
 * @function

 * @type void
 * @public
 */


// Start of sap\ca\ui\OverviewTile.js
///**
// * This file defines behavior for the control,
// */

jQuery.sap.require("sap.ui.core.IconPool");
jQuery.sap.require("sap.ca.ui.utils.resourcebundle");


sap.ca.ui.OverviewTile.prototype.init = function(){
   this._address=new sap.m.Text({ maxLines: 1 });
   this._address.setParent(this);
   this._address.addStyleClass("sapCaUiOTAddress");

   this._oppLabel= new sap.m.Label();
   this._opp=new sap.m.Text({maxLines: 1});
   this._createFormLine(this._oppLabel, this._opp, "OverviewTile.opportunities");

   this._revenueLabel= new sap.m.Label();
   this._revenue=new sap.m.Text({maxLines: 1});
   this._createFormLine(this._revenueLabel, this._revenue, "OverviewTile.revenue");
    
    this._ratingLabel= new sap.m.Label();
    this._rating=new sap.m.Text({maxLines: 1});
    this._createFormLine(this._ratingLabel, this._rating, "OverviewTile.rating");

    this._lastCtxLabel= new sap.m.Label();
    this._lastCtx=new sap.m.Text({maxLines: 1});
    this._createFormLine(this._lastCtxLabel, this._lastCtx, "OverviewTile.lastAppointment");

    this._nextCtxLabel= new sap.m.Label();
    this._nextCtx=new sap.m.Text({maxLines: 1});
    this._createFormLine(this._nextCtxLabel, this._nextCtx, "OverviewTile.nextAppointment");
	this._title = new sap.m.Text({maxLines: 2});
	this._title.setParent(this);
    this._title.addStyleClass("sapCaUiOverviewTileTitle");

	this._ctxlink = new sap.m.Link(this.getId() + "-link");
	this._ctxlink.setParent(this);
    this._ctxlink.addStyleClass("sapCaUiOverviewTileContact");
	
	this._sapCaUiPath = jQuery.sap.getModulePath("sap.ca.ui");

    this._ctxlink.setEnabled(false);

};

sap.ca.ui.OverviewTile.prototype._createFormLine = function(oLabelCtrl, oTextCtrl, sLabelTextKey) {
    oLabelCtrl.setText(sap.ca.ui.utils.resourcebundle.getText(sLabelTextKey));
    oLabelCtrl.setParent(this);
    oLabelCtrl.addStyleClass("sapCaUiOTFormLbl");
    oLabelCtrl.setTextAlign(sap.ui.core.TextAlign.Right);
    oTextCtrl.setParent(this);
    oTextCtrl.addStyleClass("sapCaUiOTFormVal");
    oLabelCtrl.setLabelFor(oTextCtrl);
};

sap.ca.ui.OverviewTile.prototype._getImageCtrl = function() {
	return this._image;
};

sap.ca.ui.OverviewTile.prototype._getTitleCtrl = function() {
	return this._title;
};

sap.ca.ui.OverviewTile.prototype._getContactCtrl = function() {
	return this._ctxlink;
};

sap.ca.ui.OverviewTile.prototype._getAddressCtrl = function() {
	return this._address;
};

sap.ca.ui.OverviewTile.prototype._getOppLabelCtrl = function() {
	return this._oppLabel;
};

sap.ca.ui.OverviewTile.prototype._getOppCtrl = function() {
	return this._opp;
};

sap.ca.ui.OverviewTile.prototype._getRevenueLabelCtrl = function() {
	return this._revenueLabel;
};

sap.ca.ui.OverviewTile.prototype._getRevenueCtrl = function() {
	return this._revenue;
};

sap.ca.ui.OverviewTile.prototype._getRatingLabelCtrl = function() {
	return this._ratingLabel;
};

sap.ca.ui.OverviewTile.prototype._getRatingCtrl = function() {
	return this._rating;
};

sap.ca.ui.OverviewTile.prototype._getLastCtxCtrl = function() {
	return this._lastCtx;
};

sap.ca.ui.OverviewTile.prototype._getLastCtxLabelCtrl = function() {
	return this._lastCtxLabel;
};

sap.ca.ui.OverviewTile.prototype._getNextCtxCtrl = function() {
	return this._nextCtx;
};

sap.ca.ui.OverviewTile.prototype._getNextCtxLabelCtrl = function() {
	return this._nextCtxLabel;
};

/**
 * Called when the control is destroyed.
 * 
 * @private
 */
sap.ca.ui.OverviewTile.prototype.exit = function() {
	if (this._image) {
		this._image.destroy();
		this._image = null;
	}
	this._ctxlink.destroy();
	this._ctxlink =null;
	this._title.destroy();
	this._title= null;
	
	this._address.destroy();
	this._address=null;
	this._oppLabel.destroy();
	this._oppLabel=null;
	this._opp.destroy();
	this._opp=null;
	this._revenueLabel.destroy();
	this._revenueLabel=null;	
	this._revenue.destroy();
	this._revenue=null;
	this._ratingLabel.destroy();
	this._ratingLabel=null;
	this._rating.destroy();
	this._rating=null;
	this._lastCtxLabel.destroy();
	this._lastCtxLabel=null;
	this._lastCtx.destroy();
	this._lastCtx=null;
	this._nextCtxLabel.destroy();
	this._nextCtxLabel=null;
	this._nextCtx.destroy();
	this._nextCtx=null;
};
/**
 * Overrides the icon property of the Tile Control
 */
sap.ca.ui.OverviewTile.prototype.getIcon = function() {
	if(!this.getProperty("icon")) {
		this.setProperty("icon", this._sapCaUiPath + "/images/placeholder.png");
    }
	return this.getProperty("icon");

};

sap.ca.ui.OverviewTile.prototype.setTitle = function(iTitle){
	this.setProperty("title", iTitle);
	this._title.setText(iTitle);
};

sap.ca.ui.OverviewTile.prototype.setContact = function(iContact){
	this.setProperty("contact", iContact);
	this._ctxlink.setText(iContact);
};

sap.ca.ui.OverviewTile.prototype.setAddress = function(iAddress){
	this.setProperty("address", iAddress);
	this._address.setText(iAddress);
};

sap.ca.ui.OverviewTile.prototype.setOpportunities = function(iOpportunities){
	this.setProperty("opportunities", iOpportunities);
	this._opp.setText(iOpportunities);
};

sap.ca.ui.OverviewTile.prototype.setRevenue = function(iRevenue){
	this.setProperty("revenue", iRevenue);
	this._revenue.setText(iRevenue);
};

sap.ca.ui.OverviewTile.prototype.setRating = function(iRating){
	this.setProperty("rating", iRating);
	this._rating.setText(iRating);
};

sap.ca.ui.OverviewTile.prototype.setLastContact = function(iLastContact){
	this.setProperty("lastContact", iLastContact);
	this._lastCtx.setText(iLastContact);
};

sap.ca.ui.OverviewTile.prototype.setNextContact = function(iNextContact){
	this.setProperty("nextContact", iNextContact);
	this._nextCtx.setText(iNextContact);
};

sap.ca.ui.OverviewTile.prototype.setContactActive = function(bContactActive){
	var bActive = (bContactActive === true); // else undefined or null -> enabled
    this.setProperty("contactActive", bActive);
    this._ctxlink.setEnabled(bActive);
};

sap.ca.ui.OverviewTile.prototype.onBeforeRendering = function(){
	var mProperties = { 
			src : this.getIcon(),
            padding : "0 0 0 0",
			height : "3rem",
			width : "3rem",
			size : "3rem"
		};
	this._image = sap.m.ImageHelper.getImageControl(this.getId() + "-img", this._image, null , mProperties);
	//this._image.setParent(this);

};

sap.ca.ui.OverviewTile.prototype.ontap = function(oEvent){
	if(oEvent.target && oEvent.target.id === this._ctxlink.getId() && this.getContactActive()){
		this.fireContactPress(this._ctxlink);
	} else {
		sap.m.Tile.prototype.ontap.call(this);
	}
	
};

