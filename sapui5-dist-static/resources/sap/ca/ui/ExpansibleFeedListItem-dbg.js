/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.ExpansibleFeedListItem.
jQuery.sap.declare("sap.ca.ui.ExpansibleFeedListItem");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.m.FeedListItem");


/**
 * Constructor for a new ExpansibleFeedListItem.
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
 * <li>{@link #getMaxLines maxLines} : int (default: 5)</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.m.FeedListItem#constructor sap.m.FeedListItem}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Extends the FeedListItem to hide text when it is longer than maxLines. When text is hidden a See more link is displayed, clicking on the link displays the entire text.
 * @extends sap.m.FeedListItem
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.ExpansibleFeedListItem
 */
sap.m.FeedListItem.extend("sap.ca.ui.ExpansibleFeedListItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"maxLines" : {type : "int", group : "Misc", defaultValue : 5}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.ExpansibleFeedListItem with name <code>sClassName</code> 
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
 * @name sap.ca.ui.ExpansibleFeedListItem.extend
 * @function
 */


/**
 * Getter for property <code>maxLines</code>.
 * The maximum number of lines to display before adding the "See more" link.
 *
 * Default value is <code>5</code>
 *
 * @return {int} the value of property <code>maxLines</code>
 * @public
 * @name sap.ca.ui.ExpansibleFeedListItem#getMaxLines
 * @function
 */

/**
 * Setter for property <code>maxLines</code>.
 *
 * Default value is <code>5</code> 
 *
 * @param {int} iMaxLines  new value for property <code>maxLines</code>
 * @return {sap.ca.ui.ExpansibleFeedListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.ExpansibleFeedListItem#setMaxLines
 * @function
 */


// Start of sap\ca\ui\ExpansibleFeedListItem.js
///**
// * This file defines behavior for the control,
// */
jQuery.sap.require("sap.ca.ui.utils.resourcebundle");

sap.ca.ui.ExpansibleFeedListItem.prototype._getSeeMoreLink = function() {
    if(!this._oSeeMoreLink) {
        jQuery.sap.require("sap.m.Link");
        this._oSeeMoreLink =  new sap.m.Link({
                text: sap.ca.ui.utils.resourcebundle.getText("extensiblefeedlistitem.seeMore"),
                press : jQuery.proxy(function() {
                    if (this.$().hasClass("sapCaUiExpansibleFeedListItemSeeLess")) {
                        this._collapseText();
                        this._oSeeMoreLink.setText(sap.ca.ui.utils.resourcebundle.getText("extensiblefeedlistitem.seeMore"));
                    } else {
                        var $text = jQuery.sap.byId(this.getId() + "-text");
                        $text.height("auto");
                        this._oSeeMoreLink.setText(sap.ca.ui.utils.resourcebundle.getText("extensiblefeedlistitem.seeLess"));
                    }
                    this.$().toggleClass("sapCaUiExpansibleFeedListItemSeeLess");
                }, this)
            });
        //Necessary so this gets garbage collected
        this._oSeeMoreLink.setParent(this, null, true);
    }
        
    return this._oSeeMoreLink;
};

sap.ca.ui.ExpansibleFeedListItem.prototype._collapseText = function() {
    var iMaxLines = this.getMaxLines();
    var $text = jQuery.sap.byId(this.getId() + "-text");
    var sLineHeight = $text.css("lineHeight");
    var fLineHeight;
    if (sLineHeight.indexOf("px") != -1)
        fLineHeight = parseFloat(sLineHeight);
    else { //if this is just a number or expressed in em
        var fRelativeLineHeight = this._convertRelativeCSSSizeToFloat(sLineHeight) || 1.2; //if the line-height equals to "normal" lineheight is 1.2ish in most browsers according to: https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
        var sFontSize = $text.css("font-size");
        var iFontSize;
        if (sFontSize.indexOf("px") != -1)
            iFontSize = parseInt(sFontSize);
        else { //let's have some fun to compute the font-size depending on the parent's font-size
            var fRelativeFontSize = this._convertRelativeCSSSizeToFloat(sFontSize) || 1; //if the font-size is expressed as small/large etc. we'd need a map to convert "word" values to relative values
            var $parent = $text.parent();
            var sParentsFontSize = "19px"; //if we could not find a valid value at the end of the parent's chain, we use 19 as a defualt value...
            while ($parent != null) {
                sParentsFontSize = $parent.css("font-size");
                if (sParentsFontSize.indexOf("px") != -1)
                    break;
                $parent = $parent.parent();
            }
            iFontSize = parseInt(sParentsFontSize)*fRelativeFontSize; //this is not completely correct, as we should consider intermediate font-sizes expressed in %/em etc
        }
        fLineHeight = iFontSize * fRelativeLineHeight;
    }

    var iLineCount = $text.height()/fLineHeight;
    var iMaxHeight = fLineHeight*iMaxLines;

    if (iLineCount > iMaxLines) {
        this.addStyleClass("sapCaUiExpansibleFeedListItemSeeMore");
        $text.height(iMaxHeight);
    } else { //we should not need to remove this class, but something seems to have changed in the rendering/cloning of elements in a list. For security reasons I'm clearing this class now.
        this.removeStyleClass("sapCaUiExpansibleFeedListItemSeeMore");
    }
};

sap.ca.ui.ExpansibleFeedListItem.prototype._convertRelativeCSSSizeToFloat = function(sSize) {
    var fRelativeFontSize = Number.NaN;
    if (jQuery.isNumeric(sSize) || sSize.indexOf("em") != -1)
        fRelativeFontSize = parseFloat(sSize);
    else if (sSize.indexOf("%") != -1)
        fRelativeFontSize = parseInt(sSize)/100;
    return fRelativeFontSize;
};

sap.ca.ui.ExpansibleFeedListItem.prototype.onAfterRendering = function() {
    if (sap.m.FeedListItem.prototype.onAfterRendering) {
        sap.m.FeedListItem.prototype.onAfterRendering.apply(this);
    }

    this._collapseText();
};