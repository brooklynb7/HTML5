/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.charts.VerticalBarChart.
jQuery.sap.declare("sap.ca.ui.charts.VerticalBarChart");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.ca.ui.charts.Chart");


/**
 * Constructor for a new charts/VerticalBarChart.
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
 * <li>{@link #getBarWidth barWidth} : int (default: 48)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * <li>{@link #getScroll scroll} : sap.m.ScrollContainer</li>
 * <li>{@link #getVerticalBarChart verticalBarChart} : sap.viz.ui5.Column</li>
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
 * Allows you to create a chart using vertical bars to represent the data
 * @extends sap.ca.ui.charts.Chart
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.charts.VerticalBarChart
 */
sap.ca.ui.charts.Chart.extend("sap.ca.ui.charts.VerticalBarChart", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"data" : {type : "object", group : "Data", defaultValue : null},
		"container" : {type : "string", group : "Identification", defaultValue : 'chart'},
		"barWidth" : {type : "int", group : "Appearance", defaultValue : 48}
	},
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}, 
    	"scroll" : {type : "sap.m.ScrollContainer", multiple : false}, 
    	"verticalBarChart" : {type : "sap.viz.ui5.Column", multiple : false}, 
    	"verticalArea" : {type : "sap.m.VBox", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.charts.VerticalBarChart with name <code>sClassName</code> 
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
 * @name sap.ca.ui.charts.VerticalBarChart.extend
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
 * @name sap.ca.ui.charts.VerticalBarChart#getData
 * @function
 */

/**
 * Setter for property <code>data</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oData  new value for property <code>data</code>
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.VerticalBarChart#setData
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
 * @name sap.ca.ui.charts.VerticalBarChart#getContainer
 * @function
 */

/**
 * Setter for property <code>container</code>.
 *
 * Default value is <code>chart</code> 
 *
 * @param {string} sContainer  new value for property <code>container</code>
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.VerticalBarChart#setContainer
 * @function
 */


/**
 * Getter for property <code>barWidth</code>.
 * Minimum shape size for touch enabled actions, default and minimum to 48px !
 *
 * Default value is <code>48</code>
 *
 * @return {int} the value of property <code>barWidth</code>
 * @public
 * @name sap.ca.ui.charts.VerticalBarChart#getBarWidth
 * @function
 */

/**
 * Setter for property <code>barWidth</code>.
 *
 * Default value is <code>48</code> 
 *
 * @param {int} iBarWidth  new value for property <code>barWidth</code>
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.VerticalBarChart#setBarWidth
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * 
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ca.ui.charts.VerticalBarChart#getContent
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
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.VerticalBarChart#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.VerticalBarChart#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ca.ui.charts.VerticalBarChart#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ca.ui.charts.VerticalBarChart#removeAllContent
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
 * @name sap.ca.ui.charts.VerticalBarChart#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.VerticalBarChart#destroyContent
 * @function
 */


/**
 * Getter for aggregation <code>scroll</code>.<br/>
 * 
 * 
 * @return {sap.m.ScrollContainer}
 * @public
 * @name sap.ca.ui.charts.VerticalBarChart#getScroll
 * @function
 */


/**
 * Setter for the aggregated <code>scroll</code>.
 * @param oScroll {sap.m.ScrollContainer}
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.VerticalBarChart#setScroll
 * @function
 */
	

/**
 * Destroys the scroll in the aggregation 
 * named <code>scroll</code>.
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.VerticalBarChart#destroyScroll
 * @function
 */


/**
 * Getter for aggregation <code>verticalBarChart</code>.<br/>
 * 
 * 
 * @return {sap.viz.ui5.Column}
 * @public
 * @name sap.ca.ui.charts.VerticalBarChart#getVerticalBarChart
 * @function
 */


/**
 * Setter for the aggregated <code>verticalBarChart</code>.
 * @param oVerticalBarChart {sap.viz.ui5.Column}
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.VerticalBarChart#setVerticalBarChart
 * @function
 */
	

/**
 * Destroys the verticalBarChart in the aggregation 
 * named <code>verticalBarChart</code>.
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.VerticalBarChart#destroyVerticalBarChart
 * @function
 */


/**
 * Getter for aggregation <code>verticalArea</code>.<br/>
 * The vertical layout
 * 
 * @return {sap.m.VBox}
 * @public
 * @name sap.ca.ui.charts.VerticalBarChart#getVerticalArea
 * @function
 */


/**
 * Setter for the aggregated <code>verticalArea</code>.
 * @param oVerticalArea {sap.m.VBox}
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.VerticalBarChart#setVerticalArea
 * @function
 */
	

/**
 * Destroys the verticalArea in the aggregation 
 * named <code>verticalArea</code>.
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.VerticalBarChart#destroyVerticalArea
 * @function
 */


// Start of sap\ca\ui\charts\VerticalBarChart.js
jQuery.sap.declare("sap.ca.ui.charts.VerticalBarChart");


/**
 * @name ap.ca.ui.charts.VerticalBarChart#init
 * @function
 */
sap.ca.ui.charts.VerticalBarChart.prototype.init = function() {
    sap.ca.ui.charts.Chart.prototype.init.apply(this);
    this.setChartType("Column");
}

sap.ca.ui.charts.VerticalBarChart.prototype.setData = function(oData){
    this._oInternalVizChart.setModel(oData);
}

sap.ca.ui.charts.VerticalBarChart.prototype.getContainer = function(){
    return this.getId();
}

sap.ca.ui.charts.VerticalBarChart.prototype.setContainer = function(sId){
    jQuery.sap.log.warning("Usage of deprecated feature, please use instead the generated ID : "+ this.getId());
}
sap.ca.ui.charts.VerticalBarChart.prototype.setBarWidth = function(iBarWidth){
    this.setProperty("minShapeSize", iBarWidth);
}

sap.ca.ui.charts.VerticalBarChart.prototype.getBarWidth = function(){
    return this.getProperty("minShapeSize");
}

sap.ca.ui.charts.VerticalBarChart.prototype.setContent = function(oContent){
    jQuery.sap.log.warning("Usage of deprecated feature, please use setAggregation('internalContent')");
}
sap.ca.ui.charts.VerticalBarChart.prototype.getContent = function(){
    jQuery.sap.log.warning("Usage of deprecated feature please use getAggregation('internalContent')");
    return null;
}
sap.ca.ui.charts.VerticalBarChart.prototype.setScroll = function(oScroll){
    jQuery.sap.log.warning("Usage of deprecated feature please use setAggregation('internalContent')");
}
sap.ca.ui.charts.VerticalBarChart.prototype.getScroll = function(){
    return this.getAggregation("internalContent");
}

sap.ca.ui.charts.VerticalBarChart.prototype.getVerticalBarChart = function(){
    return this.getAggregation("internalVizChart");
}
sap.ca.ui.charts.VerticalBarChart.prototype.setVerticalBarChart = function(oVerticalBarChart){
    this.setAggregation("internalVizChart", oVerticalBarChart);
}

sap.ca.ui.charts.VerticalBarChart.prototype.getVerticalArea = function(){
    jQuery.sap.log.warning("Usage of deprecated feature please use getAggregation('internalContent')");
    return null;
}

sap.ca.ui.charts.VerticalBarChart.prototype.setVerticalArea = function(oVerticalArea){
    jQuery.sap.log.warning("Usage of deprecated feature, please use setAggregation('internalContent')");
}







