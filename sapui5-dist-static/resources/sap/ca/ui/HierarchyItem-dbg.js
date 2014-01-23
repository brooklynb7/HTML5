/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.HierarchyItem.
jQuery.sap.declare("sap.ca.ui.HierarchyItem");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new HierarchyItem.
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
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getLevelType levelType} : string</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getIdentifier identifier} : string</li>
 * <li>{@link #getLink link} : string</li>
 * <li>{@link #getEmphasized emphasized} : boolean (default: false)</li>
 * <li>{@link #getOptional optional} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.HierarchyItem#event:linkPress linkPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Item that represent a line of the Hierarchy control. The emphasized property should apply to the item that we want to represent in his hierarchy. Optionals item will be hidden if the option is true on the Hierarchy control.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.HierarchyItem
 */
sap.ui.core.Control.extend("sap.ca.ui.HierarchyItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"icon" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : null},
		"levelType" : {type : "string", group : "Data", defaultValue : null},
		"title" : {type : "string", group : "Data", defaultValue : null},
		"identifier" : {type : "string", group : "Data", defaultValue : null},
		"link" : {type : "string", group : "Data", defaultValue : null},
		"emphasized" : {type : "boolean", group : "Data", defaultValue : false},
		"optional" : {type : "boolean", group : "Data", defaultValue : false}
	},
	aggregations : {
    	"_iconControl" : {type : "sap.ui.core.Icon", multiple : false, visibility : "hidden"}, 
    	"_levelTypeLabel" : {type : "sap.m.Label", multiple : false, visibility : "hidden"}, 
    	"_identifierLabel" : {type : "sap.m.Label", multiple : false, visibility : "hidden"}, 
    	"_titleLabel" : {type : "sap.m.Label", multiple : false, visibility : "hidden"}, 
    	"_linkControl" : {type : "sap.m.Link", multiple : false, visibility : "hidden"}
	},
	events : {
		"linkPress" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.HierarchyItem with name <code>sClassName</code> 
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
 * @name sap.ca.ui.HierarchyItem.extend
 * @function
 */

sap.ca.ui.HierarchyItem.M_EVENTS = {'linkPress':'linkPress'};


/**
 * Getter for property <code>icon</code>.
 * Icon for the item
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.ca.ui.HierarchyItem#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ca.ui.HierarchyItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.HierarchyItem#setIcon
 * @function
 */


/**
 * Getter for property <code>levelType</code>.
 * Level type
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>levelType</code>
 * @public
 * @name sap.ca.ui.HierarchyItem#getLevelType
 * @function
 */

/**
 * Setter for property <code>levelType</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLevelType  new value for property <code>levelType</code>
 * @return {sap.ca.ui.HierarchyItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.HierarchyItem#setLevelType
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * Title
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.ca.ui.HierarchyItem#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ca.ui.HierarchyItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.HierarchyItem#setTitle
 * @function
 */


/**
 * Getter for property <code>identifier</code>.
 * Identifier text
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>identifier</code>
 * @public
 * @name sap.ca.ui.HierarchyItem#getIdentifier
 * @function
 */

/**
 * Setter for property <code>identifier</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIdentifier  new value for property <code>identifier</code>
 * @return {sap.ca.ui.HierarchyItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.HierarchyItem#setIdentifier
 * @function
 */


/**
 * Getter for property <code>link</code>.
 * Text of the link
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>link</code>
 * @public
 * @name sap.ca.ui.HierarchyItem#getLink
 * @function
 */

/**
 * Setter for property <code>link</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLink  new value for property <code>link</code>
 * @return {sap.ca.ui.HierarchyItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.HierarchyItem#setLink
 * @function
 */


/**
 * Getter for property <code>emphasized</code>.
 * Does the item looks emphasized
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>emphasized</code>
 * @public
 * @name sap.ca.ui.HierarchyItem#getEmphasized
 * @function
 */

/**
 * Setter for property <code>emphasized</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bEmphasized  new value for property <code>emphasized</code>
 * @return {sap.ca.ui.HierarchyItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.HierarchyItem#setEmphasized
 * @function
 */


/**
 * Getter for property <code>optional</code>.
 * Is the item optional, so we hide it if option is set on the Hierarchy control
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>optional</code>
 * @public
 * @name sap.ca.ui.HierarchyItem#getOptional
 * @function
 */

/**
 * Setter for property <code>optional</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bOptional  new value for property <code>optional</code>
 * @return {sap.ca.ui.HierarchyItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.HierarchyItem#setOptional
 * @function
 */


/**
 * Event when a link is pressed 
 *
 * @name sap.ca.ui.HierarchyItem#linkPress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'linkPress' event of this <code>sap.ca.ui.HierarchyItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.HierarchyItem</code>.<br/> itself. 
 *  
 * Event when a link is pressed 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.HierarchyItem</code>.<br/> itself.
 *
 * @return {sap.ca.ui.HierarchyItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.HierarchyItem#attachLinkPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'linkPress' event of this <code>sap.ca.ui.HierarchyItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.HierarchyItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.HierarchyItem#detachLinkPress
 * @function
 */

/**
 * Fire event linkPress to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.HierarchyItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.HierarchyItem#fireLinkPress
 * @function
 */


// Start of sap\ca\ui\HierarchyItem.js
///**
// * This file defines behavior for the control,
// */

jQuery.sap.require("sap.ui.layout.VerticalLayout");


sap.ca.ui.HierarchyItem.prototype.init = function () {
};

sap.ca.ui.HierarchyItem.prototype._getIconControl = function () {
    var oIcon = this.getAggregation("_iconControl");
    if (oIcon == undefined) {
        oIcon = new sap.ui.core.Icon({
            src:this.getProperty("icon"),
            color:sap.ui.core.theming.Parameters.get("sapUiLightText")
        }).addStyleClass("sapCaUiHierarchyItemIcon");
        this.setAggregation("_iconControl", oIcon);
    }
    return oIcon;
};
sap.ca.ui.HierarchyItem.prototype._getLevelTypeLabel = function () {
    var oLevelTypeLabel = this.getAggregation("_levelTypeLabel");
    if (oLevelTypeLabel == undefined) {
        oLevelTypeLabel = new sap.m.Label({
            text:this.getProperty("levelType")
        }).addStyleClass("sapCaUiHierarchyItemLevelTypeLbl");
        this.setAggregation("_levelTypeLabel", oLevelTypeLabel);
    }
    return oLevelTypeLabel;
};
sap.ca.ui.HierarchyItem.prototype._getIdentifierLabel = function () {
    var oIdentifierLabel = this.getAggregation("_identifierLabel");
    if (oIdentifierLabel == undefined) {
        oIdentifierLabel = new sap.m.Label({
            text:this.getProperty("identifier")
        }).addStyleClass("sapCaUiHierarchyItemIdentifierLbl");
        this.setAggregation("_identifierLabel", oIdentifierLabel);
    }
    return oIdentifierLabel;
};
sap.ca.ui.HierarchyItem.prototype._getTitleLabel = function () {
    var oTitleLabel = this.getAggregation("_titleLabel");
    if (oTitleLabel == undefined) {
        oTitleLabel = new sap.m.Label({
            text:this.getProperty("title")
        }).addStyleClass("sapCaUiHierarchyItemTitleLbl");
        this.setAggregation("_titleLabel", oTitleLabel);
    }
    return oTitleLabel;
};
sap.ca.ui.HierarchyItem.prototype._getLinkControl = function () {
    var oLinkControl = this.getAggregation("_linkControl");
    if (oLinkControl == undefined) {
        oLinkControl = new sap.m.Link({
            text:this.getProperty("link")
        }).addStyleClass("sapCaUiHierarchyItemLink");
        oLinkControl.attachPress(this.fireLinkPress, this);
        this.setAggregation("_linkControl", oLinkControl);
    }
    return oLinkControl;
};


