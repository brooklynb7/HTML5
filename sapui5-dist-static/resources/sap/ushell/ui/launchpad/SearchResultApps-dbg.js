/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ushell.ui.launchpad.SearchResultApps.
jQuery.sap.declare("sap.ushell.ui.launchpad.SearchResultApps");
jQuery.sap.require("sap.ushell.library");
jQuery.sap.require("sap.m.Table");


/**
 * Constructor for a new ui/launchpad/SearchResultApps.
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
 * <li>{@link #getResults results} : sap.ui.core.Control[]</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.m.Table#constructor sap.m.Table}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A list containing all app search results
 * @extends sap.m.Table
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ushell.ui.launchpad.SearchResultApps
 */
sap.m.Table.extend("sap.ushell.ui.launchpad.SearchResultApps", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"resetGrowing"
	],

	// ---- control specific ----
	library : "sap.ushell",
	aggregations : {
    	"results" : {type : "sap.ui.core.Control", multiple : true, singularName : "result"}
	}
}});


/**
 * Creates a new subclass of class sap.ushell.ui.launchpad.SearchResultApps with name <code>sClassName</code> 
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
 * @name sap.ushell.ui.launchpad.SearchResultApps.extend
 * @function
 */


/**
 * Getter for aggregation <code>results</code>.<br/>
 * all found Applications
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ushell.ui.launchpad.SearchResultApps#getResults
 * @function
 */


/**
 * Inserts a result into the aggregation named <code>results</code>.
 *
 * @param {sap.ui.core.Control}
 *          oResult the result to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the result should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the result is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the result is inserted at 
 *             the last position        
 * @return {sap.ushell.ui.launchpad.SearchResultApps} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchResultApps#insertResult
 * @function
 */

/**
 * Adds some result <code>oResult</code> 
 * to the aggregation named <code>results</code>.
 *
 * @param {sap.ui.core.Control}
 *            oResult the result to add; if empty, nothing is inserted
 * @return {sap.ushell.ui.launchpad.SearchResultApps} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchResultApps#addResult
 * @function
 */

/**
 * Removes an result from the aggregation named <code>results</code>.
 *
 * @param {int | string | sap.ui.core.Control} vResult the result to remove or its index or id
 * @return {sap.ui.core.Control} the removed result or null
 * @public
 * @name sap.ushell.ui.launchpad.SearchResultApps#removeResult
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>results</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ushell.ui.launchpad.SearchResultApps#removeAllResults
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>results</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oResult the result whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ushell.ui.launchpad.SearchResultApps#indexOfResult
 * @function
 */
	

/**
 * Destroys all the results in the aggregation 
 * named <code>results</code>.
 * @return {sap.ushell.ui.launchpad.SearchResultApps} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.SearchResultApps#destroyResults
 * @function
 */


/**
 * 
 *
 * @name sap.ushell.ui.launchpad.SearchResultApps.prototype.resetGrowing
 * @function

 * @type void
 * @public
 */


// Start of sap/ushell/ui/launchpad/SearchResultApps.js
// Copyright (c) 2013 SAP AG, All Rights Reserved
(function () {
    "use strict";
    /*global jQuery, sap, window */
    /*jslint nomen: true */

    sap.ushell.ui.launchpad.SearchResultApps.RANGESET = "SearchResultApps";
    sap.ushell.ui.launchpad.SearchResultApps._columns = {
        Phone : 1,
        Tablet : 2,
        Desktop : 3
    };

    sap.ushell.ui.launchpad.SearchResultApps.prototype.init = function () {
        if (sap.m.Table.prototype.init) {
            sap.m.Table.prototype.init.call(this);
        }
        this._internalModel = new sap.ui.model.json.JSONModel({items: []});
        this.setModel(this._internalModel, "internalModel");

        this._oColumnList = new sap.m.ColumnListItem({
            cells: {
                path: "internalModel>cells",
                factory : function (sId, oContext) {
                    return new sap.ushell.ui.launchpad.SearchResultAppItem({
                        icon: oContext.getProperty("icon"),
                        text: oContext.getProperty("text"),
                        targetUrl: oContext.getProperty("targetUrl")
                    });
                }
            }
        });
        this.bindItems({path : "internalModel>/items", template : this._oColumnList});

        sap.ui.Device.media.initRangeSet(
            sap.ushell.ui.launchpad.SearchResultApps.RANGESET,
            [500, 1024],
            "px",
            ["Phone", "Tablet", "Desktop"]
        );
        sap.ui.Device.media.attachHandler(this._handleMediaChange, this, sap.ushell.ui.launchpad.SearchResultApps.RANGESET);
    };

    sap.ushell.ui.launchpad.SearchResultApps.prototype.exit = function () {
        sap.ui.Device.media.detachHandler(this._handleMediaChange, this, sap.ushell.ui.launchpad.SearchResultApps.RANGESET);
        if (sap.m.Table.prototype.exit) {
            sap.m.Table.prototype.exit.call(this);
        }
        if (this._oColumnList) {
            this._oColumnList.destroy();
        }
    };

    sap.ushell.ui.launchpad.SearchResultApps.prototype.resetGrowing = function () {
        this._internalModel.setData({items: []});
        if (this._oGrowingDelegate) {
            this._oGrowingDelegate.reset();
        }
    };

    sap.ushell.ui.launchpad.SearchResultApps.prototype.setGrowing = function (bGrowing) {
        sap.m.Table.prototype.setGrowing.apply(this, [bGrowing]);
        if (bGrowing && this._oGrowingDelegate) {
            this._oGrowingDelegate._getTrigger = this._getTrigger;
        }
        return this;
    };

    sap.ushell.ui.launchpad.SearchResultApps.prototype._handleMediaChange = function (event) {
        this.rerender();
    };

    sap.ushell.ui.launchpad.SearchResultApps.prototype._getTrigger = function (sId) {
        if (!this._oTrigger) {
            this._oTrigger = new sap.m.CustomListItem({
                id : sId,
                content : new sap.m.Button({
                    type: sap.m.ButtonType.Transparent,
                    text: this._oControl.getGrowingTriggerText(),
                    press: [this.requestNewPage, this]
                }).addStyleClass("sapUshellSearchResultAppsGrowingTriggerBtn")
            });
            this._oTrigger
                .setParent(this._oControl, null, true)
                .addStyleClass("sapUshellSearchResultAppsGrowingTrigger");
        }
        return this._oTrigger;
    };

    sap.ushell.ui.launchpad.SearchResultApps.prototype.onBeforeRendering = function () {
        var sDevice = sap.ui.Device.media.getCurrentRange(sap.ushell.ui.launchpad.SearchResultApps.RANGESET),
            iColumns = sap.ushell.ui.launchpad.SearchResultApps._columns[sDevice.name],
            aItems = [],
            aResults = this.getResults(),
            iMaxColumns = aResults.length < iColumns ? aResults.length : iColumns,
            oLineItem,
            i,
            j;

        // reset columns
        this.destroyAggregation("columns", true);
        for (i = 0; i < iMaxColumns; i = i + 1) {
            this.addColumn(new sap.m.Column());
        }

        // build new columns from "results"
        for (i = 0; i < aResults.length; i = i + iColumns) {
            oLineItem = {cells: []};
            for (j = 0; j < iColumns; j = j + 1) {
                if (aResults[i + j]) {
                    oLineItem.cells.push({
                        icon: aResults[i + j].getIcon(),
                        text: aResults[i + j].getText(),
                        targetUrl: aResults[i + j].getTargetUrl()
                    });
                } else {
                    // fill empty columns
                    oLineItem.cells.push({});
                }
            }
            aItems.push(oLineItem);
        }

        this._internalModel.setProperty("/items", aItems);
    };
}());