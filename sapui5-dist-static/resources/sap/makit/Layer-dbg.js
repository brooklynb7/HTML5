/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.makit.Layer.
jQuery.sap.declare("sap.makit.Layer");
jQuery.sap.require("sap.makit.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new Layer.
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
 * <li>{@link #getType type} : sap.makit.ChartType (default: sap.makit.ChartType.Column)</li>
 * <li>{@link #getLineThickness lineThickness} : float (default: 1)</li>
 * <li>{@link #getPrimaryColorPalette primaryColorPalette} : any</li>
 * <li>{@link #getDrawOnSecondaryAxis drawOnSecondaryAxis} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getRows rows} : sap.makit.Row[]</li>
 * <li>{@link #getColumns columns} : sap.makit.Column[]</li>
 * <li>{@link #getSeries series} : sap.makit.Series</li>
 * <li>{@link #getValues values} : sap.makit.Value[]</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Layer represent a chart in the CombinationChart
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @since 1.12
 * @name sap.makit.Layer
 */
sap.ui.core.Element.extend("sap.makit.Layer", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"getSelectedSeries"
	],

	// ---- control specific ----
	library : "sap.makit",
	properties : {
		"type" : {type : "sap.makit.ChartType", group : "Appearance", defaultValue : sap.makit.ChartType.Column},
		"lineThickness" : {type : "float", group : "Appearance", defaultValue : 1},
		"primaryColorPalette" : {type : "any", group : "Misc", defaultValue : null},
		"drawOnSecondaryAxis" : {type : "boolean", group : "Misc", defaultValue : false}
	},
	aggregations : {
    	"rows" : {type : "sap.makit.Row", multiple : true, singularName : "row", bindable : "bindable"}, 
    	"columns" : {type : "sap.makit.Column", multiple : true, singularName : "column", bindable : "bindable"}, 
    	"series" : {type : "sap.makit.Series", multiple : false}, 
    	"values" : {type : "sap.makit.Value", multiple : true, singularName : "value"}
	}
}});


/**
 * Creates a new subclass of class sap.makit.Layer with name <code>sClassName</code> 
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
 * @name sap.makit.Layer.extend
 * @function
 */


/**
 * Getter for property <code>type</code>.
 * Chart type
 *
 * Default value is <code>Column</code>
 *
 * @return {sap.makit.ChartType} the value of property <code>type</code>
 * @public
 * @name sap.makit.Layer#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>Column</code> 
 *
 * @param {sap.makit.ChartType} oType  new value for property <code>type</code>
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Layer#setType
 * @function
 */


/**
 * Getter for property <code>lineThickness</code>.
 * Specify the line thickness of the line graph. Only applies to Line chart type.
 *
 * Default value is <code>1</code>
 *
 * @return {float} the value of property <code>lineThickness</code>
 * @public
 * @name sap.makit.Layer#getLineThickness
 * @function
 */

/**
 * Setter for property <code>lineThickness</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {float} fLineThickness  new value for property <code>lineThickness</code>
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Layer#setLineThickness
 * @function
 */


/**
 * Getter for property <code>primaryColorPalette</code>.
 * Allow a layer’s primary axis color palette to be modified without affecting other charts in the same screen. If not set, the chart will use the default color palette defined in the theme. This property will take precedence over other CombinationChart's color palette properties.
 * Accept an array of color in string format or hex format. e.g.
 * 0xff0000
 * "red"
 * "rgb(255,0,0)"
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>primaryColorPalette</code>
 * @public
 * @name sap.makit.Layer#getPrimaryColorPalette
 * @function
 */

/**
 * Setter for property <code>primaryColorPalette</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oPrimaryColorPalette  new value for property <code>primaryColorPalette</code>
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Layer#setPrimaryColorPalette
 * @function
 */


/**
 * Getter for property <code>drawOnSecondaryAxis</code>.
 * Specifiy whether this layer should be drawn on the secondary axis.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>drawOnSecondaryAxis</code>
 * @public
 * @name sap.makit.Layer#getDrawOnSecondaryAxis
 * @function
 */

/**
 * Setter for property <code>drawOnSecondaryAxis</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bDrawOnSecondaryAxis  new value for property <code>drawOnSecondaryAxis</code>
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Layer#setDrawOnSecondaryAxis
 * @function
 */


/**
 * Getter for aggregation <code>rows</code>.<br/>
 * The data rows of the chart. User should bind these to their data source
 * 
 * @return {sap.makit.Row[]}
 * @public
 * @name sap.makit.Layer#getRows
 * @function
 */


/**
 * Inserts a row into the aggregation named <code>rows</code>.
 *
 * @param {sap.makit.Row}
 *          oRow the row to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the row should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the row is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the row is inserted at 
 *             the last position        
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Layer#insertRow
 * @function
 */

/**
 * Adds some row <code>oRow</code> 
 * to the aggregation named <code>rows</code>.
 *
 * @param {sap.makit.Row}
 *            oRow the row to add; if empty, nothing is inserted
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Layer#addRow
 * @function
 */

/**
 * Removes an row from the aggregation named <code>rows</code>.
 *
 * @param {int | string | sap.makit.Row} vRow the row to remove or its index or id
 * @return {sap.makit.Row} the removed row or null
 * @public
 * @name sap.makit.Layer#removeRow
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>rows</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.makit.Row[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.makit.Layer#removeAllRows
 * @function
 */

/**
 * Checks for the provided <code>sap.makit.Row</code> in the aggregation named <code>rows</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.makit.Row}
 *            oRow the row whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.makit.Layer#indexOfRow
 * @function
 */
	

/**
 * Destroys all the rows in the aggregation 
 * named <code>rows</code>.
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Layer#destroyRows
 * @function
 */


/**
 * Binder for aggregation <code>rows</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Layer#bindRows
 * @function
 */

/**
 * Unbinder for aggregation <code>rows</code>.
 *
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Layer#unbindRows
 * @function
 */


/**
 * Getter for aggregation <code>columns</code>.<br/>
 * The data column map of the chart.
 * 
 * @return {sap.makit.Column[]}
 * @public
 * @name sap.makit.Layer#getColumns
 * @function
 */


/**
 * Inserts a column into the aggregation named <code>columns</code>.
 *
 * @param {sap.makit.Column}
 *          oColumn the column to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the column should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the column is inserted at 
 *             the last position        
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Layer#insertColumn
 * @function
 */

/**
 * Adds some column <code>oColumn</code> 
 * to the aggregation named <code>columns</code>.
 *
 * @param {sap.makit.Column}
 *            oColumn the column to add; if empty, nothing is inserted
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Layer#addColumn
 * @function
 */

/**
 * Removes an column from the aggregation named <code>columns</code>.
 *
 * @param {int | string | sap.makit.Column} vColumn the column to remove or its index or id
 * @return {sap.makit.Column} the removed column or null
 * @public
 * @name sap.makit.Layer#removeColumn
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>columns</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.makit.Column[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.makit.Layer#removeAllColumns
 * @function
 */

/**
 * Checks for the provided <code>sap.makit.Column</code> in the aggregation named <code>columns</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.makit.Column}
 *            oColumn the column whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.makit.Layer#indexOfColumn
 * @function
 */
	

/**
 * Destroys all the columns in the aggregation 
 * named <code>columns</code>.
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Layer#destroyColumns
 * @function
 */


/**
 * Binder for aggregation <code>columns</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Layer#bindColumns
 * @function
 */

/**
 * Unbinder for aggregation <code>columns</code>.
 *
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Layer#unbindColumns
 * @function
 */


/**
 * Getter for aggregation <code>series</code>.<br/>
 * Data region property of the chart's Series
 * 
 * @return {sap.makit.Series}
 * @public
 * @name sap.makit.Layer#getSeries
 * @function
 */


/**
 * Setter for the aggregated <code>series</code>.
 * @param oSeries {sap.makit.Series}
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Layer#setSeries
 * @function
 */
	

/**
 * Destroys the series in the aggregation 
 * named <code>series</code>.
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Layer#destroySeries
 * @function
 */


/**
 * Getter for aggregation <code>values</code>.<br/>
 * Data region property of the chart's Values
 * 
 * @return {sap.makit.Value[]}
 * @public
 * @name sap.makit.Layer#getValues
 * @function
 */


/**
 * Inserts a value into the aggregation named <code>values</code>.
 *
 * @param {sap.makit.Value}
 *          oValue the value to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the value should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the value is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the value is inserted at 
 *             the last position        
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Layer#insertValue
 * @function
 */

/**
 * Adds some value <code>oValue</code> 
 * to the aggregation named <code>values</code>.
 *
 * @param {sap.makit.Value}
 *            oValue the value to add; if empty, nothing is inserted
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Layer#addValue
 * @function
 */

/**
 * Removes an value from the aggregation named <code>values</code>.
 *
 * @param {int | string | sap.makit.Value} vValue the value to remove or its index or id
 * @return {sap.makit.Value} the removed value or null
 * @public
 * @name sap.makit.Layer#removeValue
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>values</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.makit.Value[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.makit.Layer#removeAllValues
 * @function
 */

/**
 * Checks for the provided <code>sap.makit.Value</code> in the aggregation named <code>values</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.makit.Value}
 *            oValue the value whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.makit.Layer#indexOfValue
 * @function
 */
	

/**
 * Destroys all the values in the aggregation 
 * named <code>values</code>.
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.Layer#destroyValues
 * @function
 */


/**
 * Get the value of the currently highlighted series
 *
 * @name sap.makit.Layer.prototype.getSelectedSeries
 * @function

 * @type string
 * @public
 */


// Start of sap/makit/Layer.js
/*!
* @copyright@
 */
jQuery.sap.require("sap.makit.MakitLib");

/**
 * @override
 */
sap.makit.Layer.prototype.init = function() {
	this._datarows = [];
	this._lineType = null;
};

/**
 * @override
 */
sap.makit.Layer.prototype.addValue= function(oValue){
	sap.ui.core.Element.prototype.addAggregation.call(this, "values", oValue, false);
	oValue.attachEvent("_change", {type: "values"}, this._onDataRegionPropChanged, this);
	return this;
};

/**
 * @override
 */
sap.makit.Chart.prototype.insertValue= function(oValue, iIndex){
	sap.ui.core.Element.prototype.insertAggregation.call(this, "values", oValue, iIndex, false);
	oValue.attachEvent("_change", {type: "values"}, this._onDataRegionPropChanged, this);
	return this;
};

/**
 * @override
 */
sap.makit.Chart.prototype.removeValue= function(oValue){
	var removedObj = sap.ui.core.Element.prototype.removeAggregation.call(this, "values", oValue, false);
	if(removedObj != null) {
		removedObj.detachEvent("_change", this._onDataRegionPropChanged, this);
	}
	return removedObj;
};

/**
 * @override
 */
sap.makit.Chart.prototype.removeAllValues = function(){
	var removedObjs = sap.ui.core.Element.prototype.removeAllAggregation.call(this, "values", false);
	var len = removedObjs.length;
	var i;
	for( i = 0; i < len; i++){ 
		removedObjs[i].detachEvent("_change", this._onDataRegionPropChanged, this);
	}
	return removedObjs;
};

/**
 * @override
 */
sap.makit.Layer.prototype.setSeries = function(oSeries){
	sap.ui.core.Element.prototype.setAggregation.call(this, "series", oSeries, false);
	oSeries.attachEvent("_change", {type: "series"}, this._onDataRegionPropChanged, this);
	return this;
};

/**
 * @override
 */
sap.makit.Layer.prototype.bindAggregation = function(sName, oBindingInfo) {
	// special handling for the rows aggregation
	if (sName === "rows") {
		// old API compatibility (sName, sPath, oTemplate, oSorter, aFilters)
		if (typeof oBindingInfo == "string") {
			oBindingInfo = {
				path: arguments[1],
				template: arguments[2],
				sorter: arguments[3], 
				filters: arguments[4]
			};
		}
		// the rows aggregation has neither a template nor a factory function!
		oBindingInfo.template = undefined;
		oBindingInfo.factory = function() {};
		// call the real bindAggregation method
		return sap.ui.core.Element.prototype.bindAggregation.call(this, sName, oBindingInfo); 
	}
	// call the real bindAggregation method
	return sap.ui.core.Element.prototype.bindAggregation.apply(this, arguments);
};

/** 
 * User should not use these API programmatically.
 * @override
 */
sap.makit.Layer.prototype.addRow = function(oRow){
	jQuery.sap.log.error("The control manages the rows aggregation. The method \"addRow\" cannot be used programmatically!");
};

/**
 * @override
 */
sap.makit.Layer.prototype.insertRow = function(oRow, iIndex){
	jQuery.sap.log.error("The control manages the rows aggregation. The method \"insertRow\" cannot be used programmatically!");
};

/**
 * @override
 */
sap.makit.Layer.prototype.removeRow = function(vRow){
	jQuery.sap.log.error("The control manages the rows aggregation. The method \"removeRow\" cannot be used programmatically!");
};

/**
 * @override
 */
sap.makit.Layer.prototype.removeAllRows = function(){
	jQuery.sap.log.error("The control manages the rows aggregation. The method \"removeAllRows\" cannot be used programmatically!");
};

/**
 * @override
 */
sap.makit.Layer.prototype.destroyRows = function(vRow){
	jQuery.sap.log.error("The control manages the rows aggregation. The method \"destroyRows\" cannot be used programmatically!");
};

/**
 * @override
 */
sap.makit.Layer.prototype.updateRows = function(){
	this.fireEvent("_startUpdateRows", this);
	this._createRows();
	this.fireEvent("rowsUpdated");
	this.fireEvent("_endUpdateRows", this);
};

/**
 * @override
 */
sap.makit.CombinationChart.prototype.setType = function(oType){
	if(oType == sap.makit.ChartType.Pie || oType == sap.makit.ChartType.Donut || oType == sap.makit.ChartType.Bubble){
		throw new Error("Combination Chart does not support " + oType + " chart type");
		return;
	} else {
		sap.ui.core.Element.prototype.setProperty.call(this, "type", oType, false);
	}
	return this;
};

/*=================================================================================
 *== PRIVATE METHODS
 *=================================================================================
 **/

/**
 * Handler for Value and Series data region property change 
 * 
 * @private
 * 
 * */
sap.makit.Layer.prototype._onDataRegionPropChanged = function(oEvent, oData){
	jQuery.sap.assert(oData, "oData is expected to be set in _onDataRegionPropChanged");
	var oParams = oEvent.mParameters;
	oParams["type"] = oData["type"];
	if (oData["type"] == "values") {
		var valObj = oEvent.oSource;
		var idx = this.indexOfValue(valObj);
		oParams["index"] = idx;
	}
	this.fireEvent("dataRegionChanged", oParams);
};

/**
 * We will construct the row aggregation in this function
 * 
 * @private
 * 
 * */
sap.makit.Layer.prototype._createRows = function() {
	var oTemplate = new sap.makit.Row(this.getId() + "-dummyrows");
	var aCols = this.getColumns();
	for (var i = 0, l = aCols.length; i < l; i++) {
		var oColTemplate = aCols[i];
		if (oColTemplate) {
			var name = aCols[i].getName();
			var oClone = oColTemplate.clone("col" + i);
			oClone.data("sap-ui-colindex", i);
			oTemplate.addAggregation("cells",oClone);
		}
	}

	this.destroyAggregation("rows");
	var aContexts = undefined;
	var oBinding = this.getBinding("rows");
	if (oBinding) {
		aContexts = oBinding.getContexts();
	}
	var totalRows = oBinding.getLength();
	this._datarows = [];
	for (var i = 0; i < totalRows; i++) {
		if (aContexts && aContexts[i]) {
			var oClone = oTemplate.clone("row" + i);
			oClone.setBindingContext(aContexts[i]);
			this.addAggregation("rows", oClone);
			this._datarows.push(oClone._datarow);
		}
	}

	// destroy the template
	oTemplate.destroy();
};

/**
 * Set the line type, verticaline or line.
 * 
 * @internal
 * */
sap.makit.Layer.prototype.setLineType = function(sLineType) {
	this._lineType = sLineType;
};

/**
 * return the line type
 * 
 * @internal
 */
sap.makit.Layer.prototype.getLineType = function() {
	return this._lineType;
};

/**
 * Generate the MAKit chart metadata syntax based on the sap.makit.Chart properties.
 * To be used to create the MAKit chart.
 * Should only be accessed by CombinationChart
 * @internal
 * 
 * */
sap.makit.Layer.prototype.getSyntax = function(primaryValueAxisObj, secondaryValueAxisObj) {
	var seriesObj = this.getSeries();
	var seriesSyntax = '';
	if (seriesObj) {
		seriesSyntax = '<Series Column="' + seriesObj.getColumn() + '"';
		if (seriesObj.getFormat()) {
			seriesSyntax += ' format="' + seriesObj.getFormat() + '"';
		}
		if (seriesObj.getDisplayName()) {
			seriesSyntax += ' displayname="' + seriesObj.getDisplayName() + '"';
		}
		seriesSyntax += '/>';
	}

	var drawOnSecondaryAxis = this.getDrawOnSecondaryAxis();
	var valuesSyntax = '<Values>';
	var valueAxisObj = drawOnSecondaryAxis? secondaryValueAxisObj : primaryValueAxisObj;
	if(valueAxisObj) {
		valuesSyntax = '<Values';
		if (drawOnSecondaryAxis) {
			valuesSyntax += ' SecondaryAxis="'+ drawOnSecondaryAxis +'"';
		}
		valuesSyntax += ' showprimaryline="'+ valueAxisObj.getShowPrimaryLine() +'"';
		valuesSyntax += ' showgrid="'+ valueAxisObj.getShowGrid() +'"';
		valuesSyntax += ' showlabel="'+ valueAxisObj.getShowLabel() +'"';
		valuesSyntax += ' thickness="'+ valueAxisObj.getThickness() +'"';
		valuesSyntax += ' color="'+ valueAxisObj.getColor() +'"';
		if(valueAxisObj.getMin() !== "") {
			valuesSyntax += ' min="'+ valueAxisObj.getMin() +'"';
		}
		if(valueAxisObj.getMax() !== "") {
			valuesSyntax += ' max="'+ valueAxisObj.getMax() +'"';
		}
		valuesSyntax += '>';
	}

	var valuesObj = this.getValues();
	var length = valuesObj.length;
	if (length == 0) {
		throw new Error("Chart '"+ this.getId() +"' needs at least one Value data region");
	}
	var valueObj;
	for (var i = 0; i < length; i++) {
		valueObj = valuesObj[i];
		valuesSyntax += '<Value Expression="' + valueObj.getExpression() + '"';
		if (valueObj.getFormat()) {
			valuesSyntax += ' format="' + valueObj.getFormat() + '"';
		}
		if (valueObj.getDisplayName()) {
			valuesSyntax += ' displayname="' + valueObj.getDisplayName() + '"';
		}
		if(valueObj.getLocale() !== "") {
			valuesSyntax += ' Locale="'+ valueObj.getLocale() +'"';
		}
		valuesSyntax += '/>';
	}
	valuesSyntax += '</Values>';

	var type = this.getType().toLowerCase();
	var lineType = this.getLineType();
	var pieStyle = null;
	if (type === "donut" || type === "pie"){
		pieStyle = type; // it's the pieStyle that can be pie or donut
		type = "pie"; // in MAKit the chart's type is always pie for Pie/Donut chart
	}
	else if (type === "line" && lineType){
		type = lineType;
	}
	var chartSyntax = '<Layer Name="' + this.getId() + '" ChartType="' + type + '"';
	if(pieStyle !== null) {
		chartSyntax += ' PieStyle="' + pieStyle + '"';
	}
	chartSyntax += ' >';

	if (seriesObj) {
		chartSyntax += seriesSyntax;
	}
	chartSyntax += valuesSyntax;
	chartSyntax += '</Layer>';

	return chartSyntax;
};

/*=================================================================================
 *== PUBLIC METHODS
 *=================================================================================
 **/

/**
 * Update the data table of MAKit chart. 
 * 
 * @private
 * 
 * */
sap.makit.Layer.prototype.getDataTable = function() {
	if(this._datarows && this._datarows.length > 0){
		var data = this._datarows;
		var dataTable = new window.$MA.DataTable();
		var columns = this.getColumns();
		var colLen = columns.length;
		if (colLen == 0) {
			columns = this.getRows()[0].getCells();
			colLen = columns.length;
		}
		for (var i = 0; i < colLen; i++){
			dataTable.addColumn(columns[i].getName(), columns[i].getType());
		}

		dataTable.addRows(data);
		return dataTable;
	}
	
	return null;
};

sap.makit.Layer.prototype.getSelectedSeries = function(){
	var parent = this.getParent();
	if( parent ) {
		return parent._getSelectedSeries(this);
	}
};

