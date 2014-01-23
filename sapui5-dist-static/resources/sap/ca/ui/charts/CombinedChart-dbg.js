/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.charts.CombinedChart.
jQuery.sap.declare("sap.ca.ui.charts.CombinedChart");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.ca.ui.charts.Chart");


/**
 * Constructor for a new charts/CombinedChart.
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
 * <li>{@link #getData data} : any</li>
 * <li>{@link #getPrimaryAxis primaryAxis} : string[]</li>
 * <li>{@link #getSecondAxis secondAxis} : string[]</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getScrollArea scrollArea} : sap.m.ScrollContainer</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ca.ui.charts.Chart#constructor sap.ca.ui.charts.Chart}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Allows you to create a chart using vertical bars and lines to represent the data
 * @extends sap.ca.ui.charts.Chart
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.charts.CombinedChart
 */
sap.ca.ui.charts.Chart.extend("sap.ca.ui.charts.CombinedChart", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"data" : {type : "any", group : "Data", defaultValue : null},
		"primaryAxis" : {type : "string[]", group : "Appearance", defaultValue : null},
		"secondAxis" : {type : "string[]", group : "Appearance", defaultValue : null}
	},
	aggregations : {
    	"scrollArea" : {type : "sap.m.ScrollContainer", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.charts.CombinedChart with name <code>sClassName</code> 
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
 * @name sap.ca.ui.charts.CombinedChart.extend
 * @function
 */


/**
 * Getter for property <code>data</code>.
 * Data of the Chart
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>data</code>
 * @public
 * @name sap.ca.ui.charts.CombinedChart#getData
 * @function
 */

/**
 * Setter for property <code>data</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oData  new value for property <code>data</code>
 * @return {sap.ca.ui.charts.CombinedChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.CombinedChart#setData
 * @function
 */


/**
 * Getter for property <code>primaryAxis</code>.
 * Shapes for the internal viz chart primary axis. It will be an array of strings, one for each measure. Could be "line" or "bar".
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string[]} the value of property <code>primaryAxis</code>
 * @public
 * @name sap.ca.ui.charts.CombinedChart#getPrimaryAxis
 * @function
 */

/**
 * Setter for property <code>primaryAxis</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string[]} aPrimaryAxis  new value for property <code>primaryAxis</code>
 * @return {sap.ca.ui.charts.CombinedChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.CombinedChart#setPrimaryAxis
 * @function
 */


/**
 * Getter for property <code>secondAxis</code>.
 * Shapes for the internal viz chart secondary axis. It will be an array of strings, one for each measure. Could be "line" or "bar".
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string[]} the value of property <code>secondAxis</code>
 * @public
 * @name sap.ca.ui.charts.CombinedChart#getSecondAxis
 * @function
 */

/**
 * Setter for property <code>secondAxis</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string[]} aSecondAxis  new value for property <code>secondAxis</code>
 * @return {sap.ca.ui.charts.CombinedChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.CombinedChart#setSecondAxis
 * @function
 */


/**
 * Getter for aggregation <code>scrollArea</code>.<br/>
 * scroll area that contains the graph plot
 * 
 * @return {sap.m.ScrollContainer}
 * @public
 * @name sap.ca.ui.charts.CombinedChart#getScrollArea
 * @function
 */


/**
 * Setter for the aggregated <code>scrollArea</code>.
 * @param oScrollArea {sap.m.ScrollContainer}
 * @return {sap.ca.ui.charts.CombinedChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.CombinedChart#setScrollArea
 * @function
 */
	

/**
 * Destroys the scrollArea in the aggregation 
 * named <code>scrollArea</code>.
 * @return {sap.ca.ui.charts.CombinedChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.CombinedChart#destroyScrollArea
 * @function
 */


// Start of sap\ca\ui\charts\CombinedChart.js
jQuery.sap.declare("sap.ca.ui.charts.CombinedChart");


sap.ca.ui.charts.CombinedChart.prototype.init = function () {
    sap.ca.ui.charts.Chart.prototype.init.apply(this);
    this.setChartType("Combination");
};

sap.ca.ui.charts.CombinedChart.prototype._getChartSettings = function () {
    var chartSettings = sap.ca.ui.charts.Chart.prototype._getChartSettings.call(this);
    if (typeof chartSettings.plotArea === "undefined") {
        chartSettings.plotArea = {};
    }
    if( this.getPrimaryAxis() != null  ){
        if (typeof chartSettings.plotArea.dataShape === "undefined") {
            chartSettings.plotArea.dataShape = {};
        }
        chartSettings.plotArea.dataShape.primaryAxis = this.getPrimaryAxis();
    }
    if( this.getSecondAxis() != null  ){
        if (typeof chartSettings.plotArea.dataShape === "undefined") {
            chartSettings.plotArea.dataShape = {};
        }
        chartSettings.plotArea.dataShape.secondAxis = this.getSecondAxis();
    } // Line settings
    chartSettings.plotArea.line = {
        marker: {
            visible: true,
            size: this._getMarkerSize()
        }
    };
    return chartSettings;
};

sap.ca.ui.charts.CombinedChart.prototype.setData = function (oData) {
    this._oInternalVizChart.setModel(oData);
};

sap.ca.ui.charts.CombinedChart.prototype.getScrollArea = function () {
    return this.getAggregation("internalContent");
};

sap.ca.ui.charts.CombinedChart.prototype.setScrollArea = function (oScrollArea) {
    jQuery.sap.log.warning("Usage of deprecated feature, please use instead : this.setAggregation('internalContent')");
};






