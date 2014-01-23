/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.Hierarchy.
jQuery.sap.declare("sap.ca.ui.Hierarchy");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Hierarchy.
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
 * <li>{@link #getHideOptionalLevels hideOptionalLevels} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ca.ui.HierarchyItem[]</li></ul>
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
 * Display the Hierarchy of an item. Useful to indicates where an object stand in a chain of hierarchical data. The emphasized item shows the one item to display. Optional item can be hidden using the hideOptionalLevels property. Hidden items will stay accessible with an expand button.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.Hierarchy
 */
sap.ui.core.Control.extend("sap.ca.ui.Hierarchy", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"hideOptionalLevels" : {type : "boolean", group : "Appearance", defaultValue : true}
	},
	aggregations : {
    	"items" : {type : "sap.ca.ui.HierarchyItem", multiple : true, singularName : "item", bindable : "bindable"}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.Hierarchy with name <code>sClassName</code> 
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
 * @name sap.ca.ui.Hierarchy.extend
 * @function
 */


/**
 * Getter for property <code>hideOptionalLevels</code>.
 * Hide the levels marked optional. An expand button will appear
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>hideOptionalLevels</code>
 * @public
 * @name sap.ca.ui.Hierarchy#getHideOptionalLevels
 * @function
 */

/**
 * Setter for property <code>hideOptionalLevels</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bHideOptionalLevels  new value for property <code>hideOptionalLevels</code>
 * @return {sap.ca.ui.Hierarchy} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.Hierarchy#setHideOptionalLevels
 * @function
 */


/**
 * Getter for aggregation <code>items</code>.<br/>
 * The array of HierarchyItem ordered and starting from the root hierarchy
 * 
 * @return {sap.ca.ui.HierarchyItem[]}
 * @public
 * @name sap.ca.ui.Hierarchy#getItems
 * @function
 */


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.ca.ui.HierarchyItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ca.ui.Hierarchy} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.Hierarchy#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ca.ui.HierarchyItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ca.ui.Hierarchy} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.Hierarchy#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ca.ui.HierarchyItem} vItem the item to remove or its index or id
 * @return {sap.ca.ui.HierarchyItem} the removed item or null
 * @public
 * @name sap.ca.ui.Hierarchy#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ca.ui.HierarchyItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ca.ui.Hierarchy#removeAllItems
 * @function
 */

/**
 * Checks for the provided <code>sap.ca.ui.HierarchyItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ca.ui.HierarchyItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ca.ui.Hierarchy#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ca.ui.Hierarchy} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.Hierarchy#destroyItems
 * @function
 */


/**
 * Binder for aggregation <code>items</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ca.ui.Hierarchy} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.Hierarchy#bindItems
 * @function
 */

/**
 * Unbinder for aggregation <code>items</code>.
 *
 * @return {sap.ca.ui.Hierarchy} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.Hierarchy#unbindItems
 * @function
 */


// Start of sap\ca\ui\Hierarchy.js
///**
// * This file defines behavior for the control,
// */

sap.ca.ui.Hierarchy.prototype._getExpandButton = function () {
    return new sap.m.Link({text:"...", press:jQuery.proxy(this.expand,this)});
};

sap.ca.ui.Hierarchy.prototype.expand = function (e) {
    var oBtn = e.getSource();
    var $expandedLine = oBtn.$().parent();
    var $lineContent = $expandedLine.children(".sapCaUiHierarchyItem");
    oBtn.$().remove();
    jQuery($lineContent).removeClass("sapCaUiHierarchyHidden");
    var aLines = jQuery(".sapCaUiHierarchyItemLine");
    var bShow = false;
    jQuery.each(aLines, function (i, $line) {
        // We found the expanded line so we will start display the hidden lines
        if ($line == $expandedLine[0]) {
            bShow = true;
            return;
        }
        if (bShow) {
            if (jQuery($line).hasClass("sapCaUiHierarchyHidden")) {
                jQuery($line).removeClass("sapCaUiHierarchyHidden");
            } else {
                // No more hidden lines so we stop to not display other lines that are not directly related
                bShow = false;
                return;
            }
        }
    });
    this.indent();
};

sap.ca.ui.Hierarchy.prototype.onAfterRendering = function () {
    this.indent();
    jQuery(window).resize(jQuery.proxy(this.indent, this));
};

sap.ca.ui.Hierarchy.prototype.exit = function () {
    jQuery(window).unbind("resize", jQuery.proxy(this.indent, this));
};

// We handle the indentation here to handle the 50% limit of indentation
sap.ca.ui.Hierarchy.prototype.indent = function () {
    var step = 20;
    var minIndent = 8;
    var minWidth = step;
    var lines = jQuery(".sapCaUiHierarchyItemLine").not(".sapCaUiHierarchyHidden");
    var maxWidth = this.$().width() * 0.5;
    var maxIndent = (step * lines.length) + minIndent;
    if (maxIndent > maxWidth) {
        step = Math.floor(maxWidth / lines.length);
    }
    jQuery.each(lines, function (i, line) {
        // When it's the first line we don't have an icon so we don't bother doing the work
        if (i > 0) {
            var $iconDiv = jQuery(line).children(".sapCaUiHierarchyIconContainer");
            var w = i * step;
            if (w < minWidth) {
                w = minWidth;
            }
            jQuery($iconDiv).width(w + minIndent + "px").css("min-width", w + minIndent + "px");
        }
    });
};



