/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.GrowingTileContainer.
jQuery.sap.declare("sap.ca.ui.GrowingTileContainer");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.m.ScrollContainer");


/**
 * Constructor for a new GrowingTileContainer.
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
 * <li>{@link #getGrowing growing} : boolean (default: false)</li>
 * <li>{@link #getGrowingThreshold growingThreshold} : int (default: 20)</li>
 * <li>{@link #getGrowingScrollToLoad growingScrollToLoad} : boolean (default: false)</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.m.ScrollContainer#constructor sap.m.ScrollContainer}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A Tile container for the Overview tile with growing capapilities
 * @extends sap.m.ScrollContainer
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.GrowingTileContainer
 */
sap.m.ScrollContainer.extend("sap.ca.ui.GrowingTileContainer", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"growing" : {type : "boolean", group : "Misc", defaultValue : false},
		"growingThreshold" : {type : "int", group : "Misc", defaultValue : 20},
		"growingScrollToLoad" : {type : "boolean", group : "Misc", defaultValue : false}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.GrowingTileContainer with name <code>sClassName</code> 
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
 * @name sap.ca.ui.GrowingTileContainer.extend
 * @function
 */


/**
 * Getter for property <code>growing</code>.
 * growing enablement
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>growing</code>
 * @public
 * @name sap.ca.ui.GrowingTileContainer#getGrowing
 * @function
 */

/**
 * Setter for property <code>growing</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bGrowing  new value for property <code>growing</code>
 * @return {sap.ca.ui.GrowingTileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.GrowingTileContainer#setGrowing
 * @function
 */


/**
 * Getter for property <code>growingThreshold</code>.
 * growing Threshold
 *
 * Default value is <code>20</code>
 *
 * @return {int} the value of property <code>growingThreshold</code>
 * @public
 * @name sap.ca.ui.GrowingTileContainer#getGrowingThreshold
 * @function
 */

/**
 * Setter for property <code>growingThreshold</code>.
 *
 * Default value is <code>20</code> 
 *
 * @param {int} iGrowingThreshold  new value for property <code>growingThreshold</code>
 * @return {sap.ca.ui.GrowingTileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.GrowingTileContainer#setGrowingThreshold
 * @function
 */


/**
 * Getter for property <code>growingScrollToLoad</code>.
 * load when scrolling
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>growingScrollToLoad</code>
 * @public
 * @name sap.ca.ui.GrowingTileContainer#getGrowingScrollToLoad
 * @function
 */

/**
 * Setter for property <code>growingScrollToLoad</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bGrowingScrollToLoad  new value for property <code>growingScrollToLoad</code>
 * @return {sap.ca.ui.GrowingTileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.GrowingTileContainer#setGrowingScrollToLoad
 * @function
 */


// Start of sap\ca\ui\GrowingTileContainer.js
///**
//* This file defines behavior for the control,
//*/
jQuery.sap.require("sap.ui.layout.Grid");
sap.ca.ui.GrowingTileContainer.prototype.init = function() {
    sap.m.ScrollContainer.prototype.init.call(this);
    this._iItemCount = 0;
};

sap.ca.ui.GrowingTileContainer.prototype.destroy = function() {
    if (this._oBusyIndicator) {
	this._oBusyIndicator.destroy();
	delete this._oBusyIndicator;
    }
    if (this._oGridLayout) {
	this._oGridLayout.destroy();
	delete this._oGridLayout;
    }
    if (this._oScrollDelegate) {
	this._unbindGrowingDelegate();
	this._oScrollDelegate = null;
    }
    this._unbindDataEvents();
};

sap.ca.ui.GrowingTileContainer.prototype.onBeforRendering = function() {
    this._unbindDataEvents();
};

/**
 * Called after rendering phase of the given control
 */
sap.ca.ui.GrowingTileContainer.prototype.onAfterRendering = function() {
    this._bCountChecked = false;
    this._bindGrowingDelegate();
    this._bindDataEvents();
};

/**
 * add dataRequested and dataRecived listeners
 */
sap.ca.ui.GrowingTileContainer.prototype._bindDataEvents = function() {
    var oBinding = this.getBinding("content");
    if (oBinding) {
	oBinding.attachDataRequested(this._onDataRequested, this);
	oBinding.attachDataReceived(this._onDataReceived, this);
    }
};

/**
 * remove dataRequested and dataRecived listeners
 */
sap.ca.ui.GrowingTileContainer.prototype._unbindDataEvents = function() {
    var oBinding = this.getBinding("content");
    if (oBinding) {
	oBinding.detachDataRequested(this._onDataRequested, this);
	oBinding.detachDataReceived(this._onDataReceived, this);
    }
};
/**
 * on data requested
 */
sap.ca.ui.GrowingTileContainer.prototype._onDataRequested = function() {
    this._getBusyIndicator().setVisible(true);
};
/**
 * on data received
 */
sap.ca.ui.GrowingTileContainer.prototype._onDataReceived = function() {
    this._getBusyIndicator().setVisible(false);
};

sap.ca.ui.GrowingTileContainer.prototype._getBusyIndicator = function() {
    if (!this._oBusyIndicator) {
	this._oBusyIndicator = new sap.m.BusyIndicator({
	    size : "2.0rem"
	});

    }
    if (!this._oBusyIndicator.getDomRef()) {
	this._renderAndFlushLayoutItem(this._oBusyIndicator);
    }
    return this._oBusyIndicator;
};
/**
 * this method will be called by the model ... used to update the content
 * aggregation
 */
sap.ca.ui.GrowingTileContainer.prototype.updateContent = function(sChangeReason) {
    var oBindingInfo = this.getBindingInfo("content");
    if (this.getGrowing() && oBindingInfo) {
	if (this._iItemCount == 0 || sChangeReason == sap.ui.model.ChangeReason.Filter) {
	    this._iItemCount = this.getGrowingThreshold();
	}
	var fnFactory = oBindingInfo.factory, oBinding = oBindingInfo.binding, fnODataListBinding = sap.ui.model && sap.ui.model.odata && sap.ui.model.odata.ODataListBinding, bODataListBinding = fnODataListBinding
	&& oBinding instanceof fnODataListBinding, aContexts = oBinding ? oBinding.getContexts(0, this._iItemCount) : [];

	if (aContexts.length > 0) {
	    var sListId = this.getId() + "-scroll";
	    if (jQuery.sap.domById(sListId) != null) {
		// check if model diff-array exists and execute
		if (aContexts.diff) {
		    var aItems, oClone;
		    for ( var i = 0, l = aContexts.diff.length; i < l; i++) {
			aItems = this.getContent();
			if (aContexts.diff[i].type === "delete") {
			    this.deleteListItem(aItems[aContexts.diff[i].index]);
			}
			if (aContexts.diff[i].type === "insert") {
			    oClone = fnFactory("", aContexts[aContexts.diff[i].index]);
			    oClone.setBindingContext(aContexts[aContexts.diff[i].index], oBindingInfo.model);
			    this.insertListItem(oClone, aContexts.diff[i].index);
			}
		    }
		    // update context on all items after applying diff
		    aItems = this.getContent();
		    for ( var i = 0, l = aContexts.length; i < l; i++) {
			if (aItems[i]) {
			    aItems[i].setBindingContext(aContexts[i], oBindingInfo.model);
			}
		    }
		} else {
		    // most likely a new binding is set in this case - therefore
		    // remove all items and aggregations
		    this._iRenderedDataItems = 0;
		    this.destroyAggregation("content");
		    // renderer available - fill the aggregation and render list
		    // items
		    for ( var i = 0, l = aContexts.length; i < l; i++) {
			var oClone = fnFactory("", aContexts[i]);
			oClone.setBindingContext(aContexts[i], oBindingInfo.model);
			this.addListItem(oClone, false);
		    }
		}
	    } else {
		// no renderer - fill only the aggregation
		for ( var i = 0, l = aContexts.length; i < l; i++) {
		    var oClone = fnFactory("", aContexts[i]);
		    oClone.setBindingContext(aContexts[i], oBindingInfo.model);
		    this.addListItem(oClone, true);
		}
	    }
	} else {
	    this.destroyAggregation("content");
	    this._getGridLayout().destroyAggregation("content");
	    this._iRenderedDataItems = 0;
	}
    } else { // if no growing update aggregation
	this.updateAggregation("content");
	this._getGridLayout().updateAggregation("content");
    }

};

/**
 * Function is called to add single list item or row
 */
sap.ca.ui.GrowingTileContainer.prototype.addListItem = function(oItem, bSuppressInvalidate) {
    if (!this._bCountChecked) {
	this._bCountChecked = true;
	// TODO: handle no data add/remove text info
	// if (this._oControl.getShowNoData()) {
	// jQuery.sap.byId(this.getId() + "-NoData").remove();
	// }
    }

    this._iRenderedDataItems++;
    var oBinding = this.getBinding("content");
    this.addAggregation("content", oItem, bSuppressInvalidate);
    if (bSuppressInvalidate) {
	this._renderAndFlushLayoutItem(oItem);
    }
    return this;
};

/**
 * Function is called to insert single list item or row
 */
sap.ca.ui.GrowingTileContainer.prototype.insertListItem = function(oItem, iIndex) {
    if (!this._bCountChecked) {
	this._bCountChecked = true;
    }
    this.insertAggregation("content", oItem, iIndex, true);
    this._iRenderedDataItems++;
    this._renderAndFlushLayoutItem(oItem, iIndex)
    return this;
};

/**
 * function is called to remove single list item or row
 */
sap.ca.ui.GrowingTileContainer.prototype.deleteListItem = function(oItem) {

    if (oItem) {
	this._iRenderedDataItems--;
	this.removeAggregation("content", oItem, true);
	jQuery.sap.byId(this._getItemWrapperId(oItem)).remove();
	oItem.destroy();
	return this;
    }

},
/**
 * return the id of item wrapper element
 * 
 * @param oItem
 */
sap.ca.ui.GrowingTileContainer.prototype._getItemWrapperId = function(oItem) {
    if (oItem) {
	return oItem.getId() + "_wrapper";
    }
    return "";
},

sap.ca.ui.GrowingTileContainer.prototype._getDomIndex = function(iIndex) {

    return (typeof iIndex === "number") ? iIndex : true;
};

sap.ca.ui.GrowingTileContainer.prototype._getItemsContainer = function() {
    // return jQuery.sap.domById(this.getId() + "-scroll");
    if (!this._oGridLayout) {
	var gridLayout = this._getGridLayout();
	return gridLayout.getDomRef();
    }
    return this._oGridLayout.getDomRef();

};
sap.ca.ui.GrowingTileContainer.prototype._getGridLayout = function() {
    // return jQuery.sap.domById(this.getId() + "-scroll");
    if (!this._oGridLayout) {
	this._oGridLayout = new sap.ui.layout.Grid({
	    id : this.getId() + "-grid", // sap.ui.core.ID
	    width : 'auto',
	    inContainer : true,
	    vSpacing : 1, // int
	    hSpacing : 1, // int
	    position : sap.ui.layout.GridPosition.Center, // sap.ui.layout.GridPosition
	    defaultSpan : "L4 M6 S12", // sap.ui.layout.GridSpan
	    defaultIndent : "L0 M0 S0", // sap.ui.layout.GridIndent
	});

    }
    return this._oGridLayout;

};

sap.ca.ui.GrowingTileContainer.prototype.onLoadMorePressed = function() {
    // this._showIndicator();
    jQuery.sap.delayedCall(0, this, function() {
	this._iItemCount += this.getGrowingThreshold();
	this.updateContent();
    });
},

sap.ca.ui.GrowingTileContainer.prototype.setGrowing = function(bGrowing) {
    if (this.getGrowing() != bGrowing) {
	this.setProperty("growing", bGrowing);
	if (bGrowing) {
	    this._iItemCount += this.getGrowingThreshold();
	    // important parameter to make the model calcutalte the contexts
	    // diff
	    this.bUseExtendedChangeDetection = true;

	} else if (this._oGrowingDelegate) {
	    this._oGrowingDelegate.destroy();
	    this._oGrowingDelegate = null;
	}
    }
    return this;
};

/**
 * Returns the content items count. If aggregation content is bound the count
 * will be the length of the binding, otherwise the count of the list items
 * aggregation will be returned
 */
sap.ca.ui.GrowingTileContainer.prototype._getListItemCount = function() {
    var oBinding = this.getBinding("content");
    if (oBinding) {
	return oBinding.getLength() || 0;
    }
    return this.getContent().length;
},

/**
 * ScrollDelegate call this method to inform new page needs to load
 */
sap.ca.ui.GrowingTileContainer.prototype._triggerLoadingByScroll = function(oEvent) {
    if (this._iItemCount < this._getListItemCount()) {
	// handle correctly very fast scrolling case
	jQuery.sap.clearDelayedCall(this._delayCallId);
	this._delayCallId = jQuery.sap.delayedCall(1000, this, function() {
	    jQuery.sap.log.info("loading elements triggered on scroll");
	    this._iItemCount += this.getGrowingThreshold();
	    this.updateContent();
	});
    }
};

sap.ca.ui.GrowingTileContainer.prototype._unbindGrowingDelegate = function(){
    if (this._oScrollDelegate) {
	jQuery.sap.log.debug("unbinding scroll delegate");
	delete this._fnProxytriggerLoadingByScroll;
	this._oScrollDelegate.setGrowingList(null);
    } 
};

sap.ca.ui.GrowingTileContainer.prototype._bindGrowingDelegate = function(){
    var oScrollDelegate = sap.m.getScrollDelegate(this);
    if (oScrollDelegate) {
	jQuery.sap.log.debug("binding scroll delegate");
	this._oScrollDelegate = oScrollDelegate;
	this._fnProxytriggerLoadingByScroll = jQuery.proxy(this._triggerLoadingByScroll, this);

	oScrollDelegate.setGrowingList(this, this._fnProxytriggerLoadingByScroll);
    }
};

sap.ca.ui.GrowingTileContainer.prototype._renderAndFlushLayoutItem = function(oItem, iIndex) {
    var INDENTPATTERN = /^([L](?:[0-9]|1[0-1]))? ?([M](?:[0-9]|1[0-1]))? ?([S](?:[0-9]|1[0-1]))?$/i;
    var SPANPATTERN = /^([L](?:[1-9]|1[0-2]))? ?([M](?:[1-9]|1[0-2]))? ?([S](?:[1-9]|1[0-2]))?$/i;
    var oGridLayout = this._getGridLayout();
    var defaultSpan = oGridLayout.getDefaultSpan();
    var defaultIndent = oGridLayout.getDefaultIndent();
    var aDIndent = INDENTPATTERN.exec(defaultIndent);

    // Default Span if nothing is specified at all, not on Grid , not on the
    // cell.
    var aDefColSpan = [ "", "L3", "M6", "S12" ];

    // Default Span values defined on the whole Grid, that is used if there is
    // no individual span defined for the cell.
    var aDSpan = SPANPATTERN.exec(defaultSpan);

    var oDomRef = this._getItemsContainer();
    if (oDomRef) {
	var oRm = sap.ui.getCore().createRenderManager();

	oRm.write("<div id=" + this._getItemWrapperId(oItem));
	var oLay = oGridLayout._getLayoutDataForControl(oItem);

	if (oLay) {

	    // Line break
	    if (oLay.getLinebreak() === true) {
		oRm.addClass("sapUiRespGridBreak");
	    } else {
		if (oLay.getLinebreakL() === true) {
		    oRm.addClass("sapUiRespGridBreakL");
		}
		if (oLay.getLinebreakM() === true) {
		    oRm.addClass("sapUiRespGridBreakM");
		}
		if (oLay.getLinebreakS() === true) {
		    oRm.addClass("sapUiRespGridBreakS");
		}
	    }

	    // Span
	    var aSpan;
	    var sSpan = oLay.getSpan();
	    if (!sSpan || !sSpan.length == 0) {
		aSpan = aDSpan;
	    } else {
		aSpan = SPANPATTERN.exec(sSpan);
	    }

	    if (aSpan) {
		for ( var j = 1; j < aSpan.length; j++) {
		    var span = aSpan[j];
		    if (!span) {
			span = aDSpan[j];
			if (!span) {
			    span = aDefColSpan[j];
			}
		    }

		    // Catch the Individual Spans
		    var iSpanLarge = oLay.getSpanLarge();
		    var iSpanMedium = oLay.getSpanMedium();
		    var iSpanSmall = oLay.getSpanSmall();

		    span = span.toUpperCase();
		    if ((span.substr(0, 1) === "L") && (iSpanLarge > 0) && (iSpanLarge < 13)) {
			oRm.addClass("sapUiRespGridSpanL" + iSpanLarge);
		    } else if ((span.substr(0, 1) === "M") && (iSpanMedium > 0) && (iSpanMedium < 13)) {
			oRm.addClass("sapUiRespGridSpanM" + iSpanMedium);
		    } else if ((span.substr(0, 1) === "S") && (iSpanSmall > 0) && (iSpanSmall < 13)) {
			oRm.addClass("sapUiRespGridSpanS" + iSpanSmall);
		    } else {
			oRm.addClass("sapUiRespGridSpan" + span);
		    }
		}
	    }

	    // Indent
	    var aIndent;

	    var sIndent = oLay.getIndent();
	    if (!sIndent || sIndent.length == 0) {
		aIndent = aDIndent;
	    } else {
		aIndent = INDENTPATTERN.exec(sIndent);
	    }

	    if (!aIndent) {
		aIndent = aDIndent;
		if (!aIndent) {
		    aIndent = undefined; // no indent
		}
	    }

	    if (aIndent) {
		for ( var j = 1; j < aIndent.length; j++) {
		    var indent = aIndent[j];
		    if (!indent) {
			if (aDIndent && aDIndent[j]) {
			    indent = aDIndent[j];
			}
		    }
		    if (indent) {
			indent = indent.toUpperCase();
			if (!(/^(L0)? ?(M0)? ?(S0)?$/.exec(indent))) {

			    // Catch the Individual Indents
			    var iIndentLarge = oLay.getIndentLarge();
			    var iIndentMedium = oLay.getIndentMedium();
			    var iIndentSmall = oLay.getIndentSmall();

			    if ((indent.substr(0, 1) === "L") && (iIndentLarge > 0) && (iIndentLarge < 12)) {
				oRm.addClass("sapUiRespGridIndentL" + iIndentLarge);
			    } else if ((indent.substr(0, 1) === "M") && (iIndentMedium > 0) && (iIndentMedium < 12)) {
				oRm.addClass("sapUiRespGridIndentM" + iIndentMedium);
			    } else if ((indent.substr(0, 1) === "S") && (iIndentSmall > 0) && (iIndentSmall < 12)) {
				oRm.addClass("sapUiRespGridIndentS" + iIndentSmall);
			    } else {
				oRm.addClass("sapUiRespGridIndent" + indent);
			    }
			}
		    }
		}
	    }

	    // Visibility
	    var l = oLay.getVisibleOnLarge(), m = oLay.getVisibleOnMedium(), s = oLay.getVisibleOnSmall();

	    if (!l && m && s) {
		oRm.addClass("sapUiRespGridHiddenL");
	    } else if (!l && !m && s) {
		oRm.addClass("sapUiRespGridVisibleS");
	    } else if (l && !m && !s) {
		oRm.addClass("sapUiRespGridVisibleL");
	    } else if (!l && m && !s) {
		oRm.addClass("sapUiRespGridVisibleM");
	    } else if (l && !m && s) {
		oRm.addClass("sapUiRespGridHiddenM");
	    } else if (l && m && !s) {
		oRm.addClass("sapUiRespGridHiddenS");
	    }

	    // Move - moveBwd shifts a grid element to the left in LTR mode and
	    // opposite in RTL mode

	    var sMoveB = oLay.getMoveBackwards();

	    if (sMoveB && sMoveB.length > 0) {
		var aMoveB = INDENTPATTERN.exec(sMoveB);
		if (aMoveB) {
		    for ( var j = 1; j < aMoveB.length; j++) {
			var moveB = aMoveB[j];
			if (moveB) {
			    oRm.addClass("sapUiRespGridBwd" + moveB.toUpperCase());
			}
		    }
		}
	    }
	    // ... while moveFwd shifts it to the right in LTR mode and opposite
	    // in RTL
	    var sMoveF = oLay.getMoveForward();

	    if (sMoveF && sMoveF.length > 0) {
		var aMoveF = INDENTPATTERN.exec(sMoveF);
		if (aMoveF) {
		    for ( var j = 1; j < aMoveF.length; j++) {
			var moveF = aMoveF[j];
			if (moveF) {
			    oRm.addClass("sapUiRespGridFwd" + moveF.toUpperCase());
			}
		    }
		}
	    }

	    // Internal additional classes
	    if (oLay._sStylesInternal) {
		oRm.addClass(oLay._sStylesInternal);
	    }
	}

	// No layoutData - just apply defaults
	if (!oLay) {
	    var span = "";
	    if (aDSpan) {
		for ( var j = 1; j < aDSpan.length; j++) {
		    span = aDSpan[j];
		    if (!span) {
			span = aDefColSpan[j];
		    }
		    oRm.addClass("sapUiRespGridSpan" + span.toUpperCase());
		}
	    } else {
		for ( var j = 1; j < aDefColSpan.length; j++) {
		    span = aDefColSpan[j];
		    oRm.addClass("sapUiRespGridSpan" + span.toUpperCase());
		}
	    }
	}

	oRm.writeClasses();
	oRm.write(">");

	oRm.renderControl(oItem); // render the child control (could even
	// be a big control tree, but you don't
	// need to care)

	oRm.write("</div>"); // end of the box around the respective child
	oRm.flush(oDomRef, false, this._getDomIndex(iIndex));
	oRm.destroy();
    }
};

sap.ca.ui.GrowingTileContainer.prototype.getHorizontal = function() {
    return false;
}
