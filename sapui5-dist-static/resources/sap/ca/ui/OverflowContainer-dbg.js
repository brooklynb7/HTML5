/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.OverflowContainer.
jQuery.sap.declare("sap.ca.ui.OverflowContainer");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new OverflowContainer.
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
 * <li>{@link #getOverflowHeight overflowHeight} : sap.ui.core.CSSSize (default: '200px')</li>
 * <li>{@link #getExpanded expanded} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
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
 * 
 * The OverflowContainer allows the content of a control to be partially displayed before being fully expanded.
 * It will cut its content to a fixed height that can be defined. It is fully suitable within an IconTabBar.
 * 
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.OverflowContainer
 */
sap.ui.core.Control.extend("sap.ca.ui.OverflowContainer", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"overflowHeight" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '200px'},
		"expanded" : {type : "boolean", group : "Behavior", defaultValue : false}
	},
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.OverflowContainer with name <code>sClassName</code> 
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
 * @name sap.ca.ui.OverflowContainer.extend
 * @function
 */


/**
 * Getter for property <code>overflowHeight</code>.
 * 
 * The height of the container when not expanded. It should be determined by the application.
 * The default value is set to 200px.
 * 
 *
 * Default value is <code>200px</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>overflowHeight</code>
 * @public
 * @name sap.ca.ui.OverflowContainer#getOverflowHeight
 * @function
 */

/**
 * Setter for property <code>overflowHeight</code>.
 *
 * Default value is <code>200px</code> 
 *
 * @param {sap.ui.core.CSSSize} sOverflowHeight  new value for property <code>overflowHeight</code>
 * @return {sap.ca.ui.OverflowContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.OverflowContainer#setOverflowHeight
 * @function
 */


/**
 * Getter for property <code>expanded</code>.
 * 
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>expanded</code>
 * @public
 * @name sap.ca.ui.OverflowContainer#getExpanded
 * @function
 */

/**
 * Setter for property <code>expanded</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bExpanded  new value for property <code>expanded</code>
 * @return {sap.ca.ui.OverflowContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.OverflowContainer#setExpanded
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * Controls to be embedded.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ca.ui.OverflowContainer#getContent
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
 * @return {sap.ca.ui.OverflowContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.OverflowContainer#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ca.ui.OverflowContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.OverflowContainer#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ca.ui.OverflowContainer#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ca.ui.OverflowContainer#removeAllContent
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
 * @name sap.ca.ui.OverflowContainer#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ca.ui.OverflowContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.OverflowContainer#destroyContent
 * @function
 */


// Start of sap\ca\ui\OverflowContainer.js
///**
// * This file defines behavior for the control,
// */

sap.ca.ui.OverflowContainer.prototype.init = function(){
    this._oExpandCollapseBtn = new sap.m.Button({
        icon: "sap-icon://slim-arrow-down",
        type: sap.m.ButtonType.Unstyled,
        tap: jQuery.proxy(this._toggleExpandCollapse, this)
    }).addStyleClass("sapCaUiOCBtn");
    this._oExpandCollapseBtn.setParent(this);
};

sap.ca.ui.OverflowContainer.prototype._toggleExpandCollapse = function(){
    var $container = this.$();
    var $content = jQuery.sap.byId(this.getId() + "-content");
    this.setProperty("expanded", !this.getExpanded(), true);
    var $overlay = jQuery.sap.byId(this.getId() + "-overlay");
    var bIsExpanded = this.getExpanded();
    if(bIsExpanded){
        // Expanded: no overlay
        $overlay.hide();
        this._oExpandCollapseBtn.setProperty("icon", "sap-icon://slim-arrow-up", false);
        $container.height($content.outerHeight(true));
    }
    else{
        // Collapse
        this._oExpandCollapseBtn.setProperty("icon","sap-icon://slim-arrow-down", false);
        $container.css("height", this.getOverflowHeight());
        $overlay.show();
    }
};

sap.ca.ui.OverflowContainer.prototype.onAfterRendering = function(){
    this._renderButtonVisibility();
    var buttonIcon = this.getExpanded() ? "sap-icon://slim-arrow-up" : "sap-icon://slim-arrow-down";
    this._oExpandCollapseBtn.setProperty("icon", buttonIcon, false);
};

sap.ca.ui.OverflowContainer.prototype._renderButtonVisibility = function(){
    var $content = jQuery.sap.byId(this.getId() + "-content");
    var $overlay = jQuery.sap.byId(this.getId() + "-overlay");
    var iContentHeight = $content.outerHeight(true);
    if (iContentHeight > this.$().outerHeight(true)){
        this._oExpandCollapseBtn.setVisible(true);
        $overlay.show();
    }
    else{
        $overlay.hide();
        var $container = this.$();
        if(iContentHeight > 0){
            $container.css("height", iContentHeight);
            if(!this.getExpanded()){
                this._oExpandCollapseBtn.setVisible(false);
            }
        }
        else{ // the current content height is zero
            this.invalidate();
        }
    }
};

sap.ca.ui.OverflowContainer.prototype._getButton = function(){
    return this._oExpandCollapseBtn;
};

sap.ca.ui.OverflowContainer.prototype.exit = function() {
    this._oExpandCollapseBtn.destroy();
};
