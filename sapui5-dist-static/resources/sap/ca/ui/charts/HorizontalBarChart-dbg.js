/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.charts.HorizontalBarChart.
jQuery.sap.declare("sap.ca.ui.charts.HorizontalBarChart");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.ca.ui.charts.Chart");


/**
 * Constructor for a new charts/HorizontalBarChart.
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
 * <li>{@link #getData data} : object</li>
 * <li>{@link #getContainer container} : string (default: 'chart')</li>
 * <li>{@link #getBarHeight barHeight} : int (default: 48)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getScroll scroll} : sap.m.ScrollContainer</li>
 * <li>{@link #getHorizontalBarChart horizontalBarChart} : sap.viz.ui5.Bar</li>
 * <li>{@link #getVerticalArea verticalArea} : sap.m.VBox</li></ul>
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
 * Allows you to create a chart using horizontal bars to represent the data
 * @extends sap.ca.ui.charts.Chart
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.charts.HorizontalBarChart
 */
sap.ca.ui.charts.Chart.extend("sap.ca.ui.charts.HorizontalBarChart", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"data" : {type : "object", group : "Misc", defaultValue : null},
		"container" : {type : "string", group : "Misc", defaultValue : 'chart'},
		"barHeight" : {type : "int", group : "Misc", defaultValue : 48}
	},
	aggregations : {
    	"scroll" : {type : "sap.m.ScrollContainer", multiple : false}, 
    	"horizontalBarChart" : {type : "sap.viz.ui5.Bar", multiple : false}, 
    	"verticalArea" : {type : "sap.m.VBox", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.charts.HorizontalBarChart with name <code>sClassName</code> 
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
 * @name sap.ca.ui.charts.HorizontalBarChart.extend
 * @function
 */


/**
 * Getter for property <code>data</code>.
 * The data to be used by the chart
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>data</code>
 * @public
 * @name sap.ca.ui.charts.HorizontalBarChart#getData
 * @function
 */

/**
 * Setter for property <code>data</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oData  new value for property <code>data</code>
 * @return {sap.ca.ui.charts.HorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.HorizontalBarChart#setData
 * @function
 */


/**
 * Getter for property <code>container</code>.
 * The DOM ID where the chart will be added. Deprecated
 *
 * Default value is <code>chart</code>
 *
 * @return {string} the value of property <code>container</code>
 * @public
 * @name sap.ca.ui.charts.HorizontalBarChart#getContainer
 * @function
 */

/**
 * Setter for property <code>container</code>.
 *
 * Default value is <code>chart</code> 
 *
 * @param {string} sContainer  new value for property <code>container</code>
 * @return {sap.ca.ui.charts.HorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.HorizontalBarChart#setContainer
 * @function
 */


/**
 * Getter for property <code>barHeight</code>.
 * Minimum shape size for touch enabled actions, default and minimum to 48px !
 *
 * Default value is <code>48</code>
 *
 * @return {int} the value of property <code>barHeight</code>
 * @public
 * @name sap.ca.ui.charts.HorizontalBarChart#getBarHeight
 * @function
 */

/**
 * Setter for property <code>barHeight</code>.
 *
 * Default value is <code>48</code> 
 *
 * @param {int} iBarHeight  new value for property <code>barHeight</code>
 * @return {sap.ca.ui.charts.HorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.HorizontalBarChart#setBarHeight
 * @function
 */


/**
 * Getter for aggregation <code>scroll</code>.<br/>
 * 
 * 
 * @return {sap.m.ScrollContainer}
 * @public
 * @name sap.ca.ui.charts.HorizontalBarChart#getScroll
 * @function
 */


/**
 * Setter for the aggregated <code>scroll</code>.
 * @param oScroll {sap.m.ScrollContainer}
 * @return {sap.ca.ui.charts.HorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.HorizontalBarChart#setScroll
 * @function
 */
	

/**
 * Destroys the scroll in the aggregation 
 * named <code>scroll</code>.
 * @return {sap.ca.ui.charts.HorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.HorizontalBarChart#destroyScroll
 * @function
 */


/**
 * Getter for aggregation <code>horizontalBarChart</code>.<br/>
 * 
 * 
 * @return {sap.viz.ui5.Bar}
 * @public
 * @name sap.ca.ui.charts.HorizontalBarChart#getHorizontalBarChart
 * @function
 */


/**
 * Setter for the aggregated <code>horizontalBarChart</code>.
 * @param oHorizontalBarChart {sap.viz.ui5.Bar}
 * @return {sap.ca.ui.charts.HorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.HorizontalBarChart#setHorizontalBarChart
 * @function
 */
	

/**
 * Destroys the horizontalBarChart in the aggregation 
 * named <code>horizontalBarChart</code>.
 * @return {sap.ca.ui.charts.HorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.HorizontalBarChart#destroyHorizontalBarChart
 * @function
 */


/**
 * Getter for aggregation <code>verticalArea</code>.<br/>
 * 
 * 
 * @return {sap.m.VBox}
 * @public
 * @name sap.ca.ui.charts.HorizontalBarChart#getVerticalArea
 * @function
 */


/**
 * Setter for the aggregated <code>verticalArea</code>.
 * @param oVerticalArea {sap.m.VBox}
 * @return {sap.ca.ui.charts.HorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.HorizontalBarChart#setVerticalArea
 * @function
 */
	

/**
 * Destroys the verticalArea in the aggregation 
 * named <code>verticalArea</code>.
 * @return {sap.ca.ui.charts.HorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.HorizontalBarChart#destroyVerticalArea
 * @function
 */


// Start of sap\ca\ui\charts\HorizontalBarChart.js
jQuery.sap.declare("sap.ca.ui.charts.HorizontalBarChart");


/**
 * @name ap.ca.ui.charts.HorizontalBarChart#init
 * @function
 */
sap.ca.ui.charts.HorizontalBarChart.prototype.init = function() {
    sap.ca.ui.charts.Chart.prototype.init.apply(this);
    this.setChartType("Bar");
}

sap.ca.ui.charts.HorizontalBarChart.prototype.setData = function(oData){
    this._oInternalVizChart.setModel(oData);
}

sap.ca.ui.charts.HorizontalBarChart.prototype.getContainer = function(){
    return this.getId();
}

sap.ca.ui.charts.HorizontalBarChart.prototype.setContainer = function(sId){
    jQuery.sap.log.warning("Usage of deprecated feature, please use instead the generated ID : "+ this.getId());
}
sap.ca.ui.charts.HorizontalBarChart.prototype.setBarHeight = function(iBarHeight){
    this.setProperty("minShapeSize", iBarHeight);
}

sap.ca.ui.charts.HorizontalBarChart.prototype.getBarHeight = function(){
    return this.getProperty("minShapeSize");
}

sap.ca.ui.charts.HorizontalBarChart.prototype.setContent = function(oContent){
    jQuery.sap.log.warning("Usage of deprecated feature, please use setAggregation('internalContent')");
}
sap.ca.ui.charts.HorizontalBarChart.prototype.getContent = function(){
    jQuery.sap.log.warning("Usage of deprecated feature please use getAggregation('internalContent')");
    return null;

}
sap.ca.ui.charts.HorizontalBarChart.prototype.setScroll = function(oScroll){
    jQuery.sap.log.warning("Usage of deprecated feature please use setAggregation('internalContent')");
}
sap.ca.ui.charts.HorizontalBarChart.prototype.getScroll = function(){
    return this.getAggregation("internalContent");
}

sap.ca.ui.charts.HorizontalBarChart.prototype.getHorizontalBarChart = function(){
    return this.getAggregation("internalVizChart");
}
sap.ca.ui.charts.HorizontalBarChart.prototype.setHorizontalBarChart = function(oHorizontalBarChart){
    this.setAggregation("internalVizChart", oHorizontalBarChart);
}

sap.ca.ui.charts.HorizontalBarChart.prototype.getVerticalArea = function(){
    jQuery.sap.log.warning("Usage of deprecated feature please use getAggregation('internalContent')");
    return null;
}

sap.ca.ui.charts.HorizontalBarChart.prototype.setVerticalArea = function(oVerticalArea){
    jQuery.sap.log.warning("Usage of deprecated feature, please use setAggregation('internalContent')");
}





