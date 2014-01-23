/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.charts.LineChart.
jQuery.sap.declare("sap.ca.ui.charts.LineChart");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.ca.ui.charts.Chart");


/**
 * Constructor for a new charts/LineChart.
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
 * <li>{@link #getChartTitle chartTitle} : string (default: 'Line Chart')</li>
 * <li>{@link #getDataLabelFormat dataLabelFormat} : any (default: '#0')</li>
 * <li>{@link #getMinTouchSize minTouchSize} : string (default: '48px')</li>
 * <li>{@link #getMinTouchWidth minTouchWidth} : string (default: '48px')</li>
 * <li>{@link #getShowLabel showLabel} : boolean (default: true)</li>
 * <li>{@link #getShowScrollContext showScrollContext} : boolean (default: false)</li>
 * <li>{@link #getChartDataset chartDataset} : any</li>
 * <li>{@link #getDatasetSettings datasetSettings} : any</li>
 * <li>{@link #getChartDatasetSettings chartDatasetSettings} : any</li>
 * <li>{@link #getDataPath dataPath} : string</li>
 * <li>{@link #getData data} : any</li>
 * <li>{@link #getChartBusinessData chartBusinessData} : any</li>
 * <li>{@link #getUseDelayedResize useDelayedResize} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getVertical vertical} : sap.m.VBox</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.charts.LineChart#event:onDetailsSelected onDetailsSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * Line Chart for the Fiori Project
 * @extends sap.ca.ui.charts.Chart
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @since 1.0.0
 * @name sap.ca.ui.charts.LineChart
 */
sap.ca.ui.charts.Chart.extend("sap.ca.ui.charts.LineChart", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"chartTitle" : {type : "string", group : "Data", defaultValue : 'Line Chart', deprecated: true},
		"dataLabelFormat" : {type : "any", group : "Appearance", defaultValue : '#0'},
		"minTouchSize" : {type : "string", group : "Behavior", defaultValue : '48px', deprecated: true},
		"minTouchWidth" : {type : "string", group : "Behavior", defaultValue : '48px', deprecated: true},
		"showLabel" : {type : "boolean", group : "Appearance", defaultValue : true, deprecated: true},
		"showScrollContext" : {type : "boolean", group : "Appearance", defaultValue : false, deprecated: true},
		"chartDataset" : {type : "any", group : "Data", defaultValue : null, deprecated: true},
		"datasetSettings" : {type : "any", group : "Data", defaultValue : null, deprecated: true},
		"chartDatasetSettings" : {type : "any", group : "Data", defaultValue : null, deprecated: true},
		"dataPath" : {type : "string", group : "Data", defaultValue : null, deprecated: true},
		"data" : {type : "any", group : "Data", defaultValue : null, deprecated: true},
		"chartBusinessData" : {type : "any", group : "Data", defaultValue : null, deprecated: true},
		"useDelayedResize" : {type : "boolean", group : "Behavior", defaultValue : false, deprecated: true}
	},
	aggregations : {
    	"vertical" : {type : "sap.m.VBox", multiple : false, deprecated: true}
	},
	events : {
		"onDetailsSelected" : {deprecated: true}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.charts.LineChart with name <code>sClassName</code> 
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
 * @name sap.ca.ui.charts.LineChart.extend
 * @function
 */

sap.ca.ui.charts.LineChart.M_EVENTS = {'onDetailsSelected':'onDetailsSelected'};


/**
 * Getter for property <code>chartTitle</code>.
 * The title to display on the chart
 *
 * Default value is <code>Line Chart</code>
 *
 * @return {string} the value of property <code>chartTitle</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * This is a copy of the 'title' property, do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#getChartTitle
 * @function
 */

/**
 * Setter for property <code>chartTitle</code>.
 *
 * Default value is <code>Line Chart</code> 
 *
 * @param {string} sChartTitle  new value for property <code>chartTitle</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * This is a copy of the 'title' property, do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#setChartTitle
 * @function
 */


/**
 * Getter for property <code>dataLabelFormat</code>.
 * The data format string to use to display the data labels on the graph, this is an array of arrays of Format String following the 'sap.viz.ui5.Line' documentation
 * 
 *
 * Default value is <code>'#0'</code>
 *
 * @return {any} the value of property <code>dataLabelFormat</code>
 * @public
 * @name sap.ca.ui.charts.LineChart#getDataLabelFormat
 * @function
 */

/**
 * Setter for property <code>dataLabelFormat</code>.
 *
 * Default value is <code>'#0'</code> 
 *
 * @param {any} oDataLabelFormat  new value for property <code>dataLabelFormat</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.LineChart#setDataLabelFormat
 * @function
 */


/**
 * Getter for property <code>minTouchSize</code>.
 * The minimum size (width for a line chart) that a point has to be, so as to be able to touch on a mobile device, only applies if the chart width is not set
 * 
 *
 * Default value is <code>48px</code>
 *
 * @return {string} the value of property <code>minTouchSize</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * Please use the 'dataLabelFormatter' property, do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#getMinTouchSize
 * @function
 */

/**
 * Setter for property <code>minTouchSize</code>.
 *
 * Default value is <code>48px</code> 
 *
 * @param {string} sMinTouchSize  new value for property <code>minTouchSize</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * Please use the 'dataLabelFormatter' property, do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#setMinTouchSize
 * @function
 */


/**
 * Getter for property <code>minTouchWidth</code>.
 * The minimum size (width for a line chart) that a point has to be, so as to be able to touch on a mobile device, only applies if the chart width is not set
 * 
 *
 * Default value is <code>48px</code>
 *
 * @return {string} the value of property <code>minTouchWidth</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * Please use the 'minShapeSize' property, do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#getMinTouchWidth
 * @function
 */

/**
 * Setter for property <code>minTouchWidth</code>.
 *
 * Default value is <code>48px</code> 
 *
 * @param {string} sMinTouchWidth  new value for property <code>minTouchWidth</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * Please use the 'minShapeSize' property, do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#setMinTouchWidth
 * @function
 */


/**
 * Getter for property <code>showLabel</code>.
 * Show the data label value on the chart
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showLabel</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * This is a copy of the 'showDataLabel' property, do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#getShowLabel
 * @function
 */

/**
 * Setter for property <code>showLabel</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowLabel  new value for property <code>showLabel</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * This is a copy of the 'showDataLabel' property, do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#setShowLabel
 * @function
 */


/**
 * Getter for property <code>showScrollContext</code>.
 * Show the chart scroll context, (the preview of the whole chart as a small image when scrolling)
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showScrollContext</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * Feature does not work correctly yet.
 * @name sap.ca.ui.charts.LineChart#getShowScrollContext
 * @function
 */

/**
 * Setter for property <code>showScrollContext</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowScrollContext  new value for property <code>showScrollContext</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * Feature does not work correctly yet.
 * @name sap.ca.ui.charts.LineChart#setShowScrollContext
 * @function
 */


/**
 * Getter for property <code>chartDataset</code>.
 * Allow the Dataset for the chart to be set, includes the dimensions, and measures, any data binding is removed, this will disable the chart scroll context view,
 * use the dataset settings if you want the
 * scroll context to work
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>chartDataset</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * This is a copy of the 'dataset' property, do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#getChartDataset
 * @function
 */

/**
 * Setter for property <code>chartDataset</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oChartDataset  new value for property <code>chartDataset</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * This is a copy of the 'dataset' property, do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#setChartDataset
 * @function
 */


/**
 * Getter for property <code>datasetSettings</code>.
 * Allow the Dataset for the chart to be set by providing the settings for the dataset creation, (internally two datasets are created, one for the main chart and
 * one
 * for the scroll context)
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>datasetSettings</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * This is property is not needed any more, do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#getDatasetSettings
 * @function
 */

/**
 * Setter for property <code>datasetSettings</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oDatasetSettings  new value for property <code>datasetSettings</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * This is property is not needed any more, do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#setDatasetSettings
 * @function
 */


/**
 * Getter for property <code>chartDatasetSettings</code>.
 * Allow the Dataset for the chart to be set by providing the settings for the dataset creation, (internally two datasets are created, one for the main chart and
 * one for the scroll context)
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>chartDatasetSettings</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * This is a copy of the 'datasetSettings' property, do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#getChartDatasetSettings
 * @function
 */

/**
 * Setter for property <code>chartDatasetSettings</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oChartDatasetSettings  new value for property <code>chartDatasetSettings</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * This is a copy of the 'datasetSettings' property, do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#setChartDatasetSettings
 * @function
 */


/**
 * Getter for property <code>dataPath</code>.
 * Allow the data path for binding the model to the dimensions and measures to be set
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>dataPath</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * Please use the binding on 'dataset', do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#getDataPath
 * @function
 */

/**
 * Setter for property <code>dataPath</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDataPath  new value for property <code>dataPath</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * Please use the binding on 'dataset', do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#setDataPath
 * @function
 */


/**
 * Getter for property <code>data</code>.
 * Allow the chart data to be set, that is the measure and dimension values
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>data</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * Please use the binding on 'dataset', do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#getData
 * @function
 */

/**
 * Setter for property <code>data</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oData  new value for property <code>data</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * Please use the binding on 'dataset', do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#setData
 * @function
 */


/**
 * Getter for property <code>chartBusinessData</code>.
 * Allow the chart data to be set, that is the measure and dimension values
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>chartBusinessData</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * This is a copy of the 'data' property, do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#getChartBusinessData
 * @function
 */

/**
 * Setter for property <code>chartBusinessData</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oChartBusinessData  new value for property <code>chartBusinessData</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * This is a copy of the 'data' property, do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#setChartBusinessData
 * @function
 */


/**
 * Getter for property <code>useDelayedResize</code>.
 * Use a delayed resize event to cause the chart to render when navigated to after resize when in the background
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>useDelayedResize</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * Do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#getUseDelayedResize
 * @function
 */

/**
 * Setter for property <code>useDelayedResize</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bUseDelayedResize  new value for property <code>useDelayedResize</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * Do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#setUseDelayedResize
 * @function
 */


/**
 * Getter for aggregation <code>vertical</code>.<br/>
 * The vertical layout
 * 
 * @return {sap.m.VBox}
 * @public
 * @deprecated Since version 1.0.0. 
 * Do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#getVertical
 * @function
 */


/**
 * Setter for the aggregated <code>vertical</code>.
 * @param oVertical {sap.m.VBox}
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * Do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#setVertical
 * @function
 */
	

/**
 * Destroys the vertical in the aggregation 
 * named <code>vertical</code>.
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * Do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#destroyVertical
 * @function
 */


/**
 * Event fired when the details button is pressed on the selected Datapoint Popover 
 *
 * @name sap.ca.ui.charts.LineChart#onDetailsSelected
 * @event
 * @deprecated Since version 1.0.0. 
 * Do not use as it will be removed in a future release.
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'onDetailsSelected' event of this <code>sap.ca.ui.charts.LineChart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.charts.LineChart</code>.<br/> itself. 
 *  
 * Event fired when the details button is pressed on the selected Datapoint Popover 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.charts.LineChart</code>.<br/> itself.
 *
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * Do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#attachOnDetailsSelected
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'onDetailsSelected' event of this <code>sap.ca.ui.charts.LineChart</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * Do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#detachOnDetailsSelected
 * @function
 */

/**
 * Fire event onDetailsSelected to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @protected
 * @deprecated Since version 1.0.0. 
 * Do not use as it will be removed in a future release.
 * @name sap.ca.ui.charts.LineChart#fireOnDetailsSelected
 * @function
 */


// Start of sap\ca\ui\charts\LineChart.js
/**
 * This file defines behavior for the control,
 */
sap.ca.ui.charts.LineChart.prototype.init = function() {
    sap.ca.ui.charts.Chart.prototype.init.apply(this);
    this.setChartType("Line");
};
/* Deprecated Aggregations */
sap.ca.ui.charts.LineChart.prototype.setVertical = function( args ){
    jQuery.sap.log.warning("Vertical aggregation is deprecated");
};
sap.ca.ui.charts.LineChart.prototype.getVertical = function() {
    jQuery.sap.log.warning("Vertical aggregation is deprecated");
    return null;
};
/* Deprecated events */
sap.ca.ui.charts.LineChart.prototype.attachOnDetailsSelected = function(){
    jQuery.sap.log.warning("onDetailsSelected event is deprecated");
};
/* Deprecated properties */
sap.ca.ui.charts.LineChart.prototype.setUseDelayedResize = function( args ){
    jQuery.sap.log.warning("UseDelayedResize property is deprecated");
};
sap.ca.ui.charts.LineChart.prototype.getUseDelayedResize = function() {
    jQuery.sap.log.warning("UseDelayedResize property is deprecated");
    return null;
};

sap.ca.ui.charts.LineChart.prototype.setChartBusinessData = function( args ){
    jQuery.sap.log.warning("ChartBusinessData property is deprecated");
};
sap.ca.ui.charts.LineChart.prototype.getChartBusinessData = function() {
    jQuery.sap.log.warning("ChartBusinessData property is deprecated");
    return null;
};

sap.ca.ui.charts.LineChart.prototype.setData = function( args ){
    jQuery.sap.log.warning("Data property is deprecated");
};
sap.ca.ui.charts.LineChart.prototype.getData = function() {
    jQuery.sap.log.warning("Data property is deprecated");
    return null;
};


sap.ca.ui.charts.LineChart.prototype.setDataPath = function( args ){
    jQuery.sap.log.warning("DataPath property is deprecated");
};
sap.ca.ui.charts.LineChart.prototype.getDataPath = function() {
    jQuery.sap.log.warning("DataPath property is deprecated");
    return null;
};


sap.ca.ui.charts.LineChart.prototype.setChartDatasetSettings = function( args ){
    jQuery.sap.log.warning("ChartDatasetSettings property is deprecated");
};
sap.ca.ui.charts.LineChart.prototype.getChartDatasetSettings = function() {
    jQuery.sap.log.warning("ChartDatasetSettings property is deprecated");
    return null;
};


sap.ca.ui.charts.LineChart.prototype.setDatasetSettings = function( args ){
    jQuery.sap.log.warning("DatasetSettings property is deprecated");
};
sap.ca.ui.charts.LineChart.prototype.getDatasetSettings = function() {
    jQuery.sap.log.warning("DatasetSettings property is deprecated");
    return null;
};

sap.ca.ui.charts.LineChart.prototype.setChartDataset = function( args ){
    jQuery.sap.log.warning("ChartDataset property is deprecated");
};
sap.ca.ui.charts.LineChart.prototype.getChartDataset = function() {
    jQuery.sap.log.warning("ChartDataset property is deprecated");
    return null;
};

sap.ca.ui.charts.LineChart.prototype.setShowScrollContext = function( args ){
    jQuery.sap.log.warning("Vertical property is deprecated");
};
sap.ca.ui.charts.LineChart.prototype.getVertical = function() {
    jQuery.sap.log.warning("Vertical property is deprecated");
    return null;
};

sap.ca.ui.charts.LineChart.prototype.setShowLabel = function( args ){
    jQuery.sap.log.warning("ShowLabel property is deprecated");
};
sap.ca.ui.charts.LineChart.prototype.getShowLabel = function() {
    jQuery.sap.log.warning("ShowLabel property is deprecated");
    return null;
};

sap.ca.ui.charts.LineChart.prototype.setMinTouchWidth = function( args ){
    jQuery.sap.log.warning("MinTouchWidth property is deprecated");
};
sap.ca.ui.charts.LineChart.prototype.getMinTouchWidth = function() {
    jQuery.sap.log.warning("MinTouchWidth property is deprecated");
    return null;
};

sap.ca.ui.charts.LineChart.prototype.setMinTouchSize = function( args ){
    jQuery.sap.log.warning("MinTouchSize property is deprecated");
};
sap.ca.ui.charts.LineChart.prototype.getMinTouchSize = function() {
    jQuery.sap.log.warning("MinTouchSize property is deprecated");
    return null;
};

sap.ca.ui.charts.LineChart.prototype.setDataLabelFormat = function( args ){
    jQuery.sap.log.warning("DataLabelFormat property is deprecated");
};
sap.ca.ui.charts.LineChart.prototype.getDataLabelFormat = function() {
    jQuery.sap.log.warning("DataLabelFormat property is deprecated");
    return null;
};

sap.ca.ui.charts.LineChart.prototype.setChartTitle = function( args ){
    jQuery.sap.log.warning("ChartTitle property is deprecated");
};
sap.ca.ui.charts.LineChart.prototype.getChartTitle = function() {
    jQuery.sap.log.warning("ChartTitle property is deprecated");
    return null;
};