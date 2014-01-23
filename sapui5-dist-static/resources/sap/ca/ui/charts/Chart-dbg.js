/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.charts.Chart.
jQuery.sap.declare("sap.ca.ui.charts.Chart");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new charts/Chart.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getDataset dataset} : object</li>
 * <li>{@link #getChartType chartType} : string (default: 'Bar')</li>
 * <li>{@link #getMinShapeSize minShapeSize} : sap.ui.core.CSSSize (default: '48px')</li>
 * <li>{@link #getLabel label} : string (default: '')</li>
 * <li>{@link #getTitle title} : string (default: 'Chart')</li>
 * <li>{@link #getIcon icon} : string (default: '')</li>
 * <li>{@link #getSecondAxisVisible secondAxisVisible} : boolean (default: true)</li>
 * <li>{@link #getShowLegend showLegend} : boolean (default: true)</li>
 * <li>{@link #getSelectionMode selectionMode} : sap.ca.ui.charts.ChartSelectionMode (default: sap.ca.ui.charts.ChartSelectionMode.Multiple)</li>
 * <li>{@link #getShowHoverBackground showHoverBackground} : boolean (default: false)</li>
 * <li>{@link #getShowTooltip showTooltip} : boolean (default: false)</li>
 * <li>{@link #getShowPopover showPopover} : boolean (default: true)</li>
 * <li>{@link #getShowDataLabel showDataLabel} : boolean (default: true)</li>
 * <li>{@link #getYAxisLabelFormatter yAxisLabelFormatter} : string</li>
 * <li>{@link #getYAxis2LabelFormatter yAxis2LabelFormatter} : string</li>
 * <li>{@link #getXAxisLabelFormatter xAxisLabelFormatter} : string</li>
 * <li>{@link #getXAxis2LabelFormatter xAxis2LabelFormatter} : string</li>
 * <li>{@link #getPlotAreaAxisTooltipFormatter plotAreaAxisTooltipFormatter} : object</li>
 * <li>{@link #getTooltipFormatter tooltipFormatter} : object</li>
 * <li>{@link #getDataLabelFormatter dataLabelFormatter} : object</li>
 * <li>{@link #getPopoverFormatter popoverFormatter} : object</li>
 * <li>{@link #getChartSemanticColorFormatter chartSemanticColorFormatter} : object</li>
 * <li>{@link #getInternalVizChart internalVizChart} : sap.ui.core.Control</li>
 * <li>{@link #getPopoverSubHeader popoverSubHeader} : sap.ui.core.Control</li>
 * <li>{@link #getPopoverFooter popoverFooter} : sap.ui.core.Control</li>
 * <li>{@link #getAdvancedChartSettings advancedChartSettings} : object</li>
 * <li>{@link #getNoData noData} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.charts.Chart#event:selectDataPoint selectDataPoint} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.charts.Chart#event:popoverBeforeOpen popoverBeforeOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.charts.Chart#event:popoverAfterOpen popoverAfterOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Chart implementation on top of sap.viz that takes care of common functionality.
 * - Embedding in a scroll container
 * - Common color palette
 * - Minimum bar / dot / blip ... size
 * - Integration with ChartToolbar and ChartPopover
 * 
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.charts.Chart
 */
sap.ui.core.Control.extend("sap.ca.ui.charts.Chart", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"dataset" : {type : "object", group : "Data", defaultValue : null},
		"chartType" : {type : "string", group : "Data", defaultValue : 'Bar'},
		"minShapeSize" : {type : "sap.ui.core.CSSSize", group : "Data", defaultValue : '48px'},
		"label" : {type : "string", group : "Data", defaultValue : ''},
		"title" : {type : "string", group : "Appearance", defaultValue : 'Chart'},
		"icon" : {type : "string", group : "Appearance", defaultValue : ''},
		"secondAxisVisible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"showLegend" : {type : "boolean", group : "Behavior", defaultValue : true},
		"selectionMode" : {type : "sap.ca.ui.charts.ChartSelectionMode", group : "Behavior", defaultValue : sap.ca.ui.charts.ChartSelectionMode.Multiple},
		"showHoverBackground" : {type : "boolean", group : "Behavior", defaultValue : false},
		"showTooltip" : {type : "boolean", group : "Behavior", defaultValue : false},
		"showPopover" : {type : "boolean", group : "Behavior", defaultValue : true},
		"showDataLabel" : {type : "boolean", group : "Behavior", defaultValue : true},
		"yAxisLabelFormatter" : {type : "string", group : "Data", defaultValue : null},
		"yAxis2LabelFormatter" : {type : "string", group : "Data", defaultValue : null},
		"xAxisLabelFormatter" : {type : "string", group : "Data", defaultValue : null},
		"xAxis2LabelFormatter" : {type : "string", group : "Data", defaultValue : null},
		"plotAreaAxisTooltipFormatter" : {type : "object", group : "Data", defaultValue : null},
		"tooltipFormatter" : {type : "object", group : "Data", defaultValue : null},
		"dataLabelFormatter" : {type : "object", group : "Data", defaultValue : null},
		"popoverFormatter" : {type : "object", group : "Data", defaultValue : null},
		"chartSemanticColorFormatter" : {type : "object", group : "Data", defaultValue : null},
		"internalVizChart" : {type : "sap.ui.core.Control", group : "Data", defaultValue : null},
		"popoverSubHeader" : {type : "sap.ui.core.Control", group : "Appearance", defaultValue : null},
		"popoverFooter" : {type : "sap.ui.core.Control", group : "Appearance", defaultValue : null},
		"advancedChartSettings" : {type : "object", group : "Appearance", defaultValue : null},
		"noData" : {type : "sap.ui.core.Control", group : "Appearance", defaultValue : null}
	},
	aggregations : {
    	"internalContent" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}, 
    	"chartPopover" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}
	},
	events : {
		"selectDataPoint" : {}, 
		"popoverBeforeOpen" : {}, 
		"popoverAfterOpen" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.charts.Chart with name <code>sClassName</code> 
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
 * @name sap.ca.ui.charts.Chart.extend
 * @function
 */

sap.ca.ui.charts.Chart.M_EVENTS = {'selectDataPoint':'selectDataPoint','popoverBeforeOpen':'popoverBeforeOpen','popoverAfterOpen':'popoverAfterOpen'};


/**
 * Getter for property <code>width</code>.
 * Target width for the charting area
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * Target height for the charting area
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setHeight
 * @function
 */


/**
 * Getter for property <code>dataset</code>.
 * Viz Dataset that will hold the data to be displayed.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>dataset</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getDataset
 * @function
 */

/**
 * Setter for property <code>dataset</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oDataset  new value for property <code>dataset</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setDataset
 * @function
 */


/**
 * Getter for property <code>chartType</code>.
 * Type of viz chart that will be displayed.
 *
 * Default value is <code>Bar</code>
 *
 * @return {string} the value of property <code>chartType</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getChartType
 * @function
 */

/**
 * Setter for property <code>chartType</code>.
 *
 * Default value is <code>Bar</code> 
 *
 * @param {string} sChartType  new value for property <code>chartType</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setChartType
 * @function
 */


/**
 * Getter for property <code>minShapeSize</code>.
 * Minimum shape size for touch enabled actions, default and minimum to 48px !
 *
 * Default value is <code>48px</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>minShapeSize</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getMinShapeSize
 * @function
 */

/**
 * Setter for property <code>minShapeSize</code>.
 *
 * Default value is <code>48px</code> 
 *
 * @param {sap.ui.core.CSSSize} sMinShapeSize  new value for property <code>minShapeSize</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setMinShapeSize
 * @function
 */


/**
 * Getter for property <code>label</code>.
 * User friendly name for the current chart type
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>label</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getLabel
 * @function
 */

/**
 * Setter for property <code>label</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLabel  new value for property <code>label</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setLabel
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * Title of the chart
 *
 * Default value is <code>Chart</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is <code>Chart</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setTitle
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * Icon of the Chart
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>icon</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setIcon
 * @function
 */


/**
 * Getter for property <code>secondAxisVisible</code>.
 * Flag to show the second axis. Default is true
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>secondAxisVisible</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getSecondAxisVisible
 * @function
 */

/**
 * Setter for property <code>secondAxisVisible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bSecondAxisVisible  new value for property <code>secondAxisVisible</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setSecondAxisVisible
 * @function
 */


/**
 * Getter for property <code>showLegend</code>.
 * Hide / Show the legend of the chart
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showLegend</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getShowLegend
 * @function
 */

/**
 * Setter for property <code>showLegend</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowLegend  new value for property <code>showLegend</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setShowLegend
 * @function
 */


/**
 * Getter for property <code>selectionMode</code>.
 * Define the selection mode for the chart
 *
 * Default value is <code>Multiple</code>
 *
 * @return {sap.ca.ui.charts.ChartSelectionMode} the value of property <code>selectionMode</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getSelectionMode
 * @function
 */

/**
 * Setter for property <code>selectionMode</code>.
 *
 * Default value is <code>Multiple</code> 
 *
 * @param {sap.ca.ui.charts.ChartSelectionMode} oSelectionMode  new value for property <code>selectionMode</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setSelectionMode
 * @function
 */


/**
 * Getter for property <code>showHoverBackground</code>.
 * Hide / Show the hover background
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showHoverBackground</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getShowHoverBackground
 * @function
 */

/**
 * Setter for property <code>showHoverBackground</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowHoverBackground  new value for property <code>showHoverBackground</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setShowHoverBackground
 * @function
 */


/**
 * Getter for property <code>showTooltip</code>.
 * Hide / Show the CVOM tooltip
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showTooltip</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getShowTooltip
 * @function
 */

/**
 * Setter for property <code>showTooltip</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowTooltip  new value for property <code>showTooltip</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setShowTooltip
 * @function
 */


/**
 * Getter for property <code>showPopover</code>.
 * Hide / Show the sap.ca popover that gives information about what is available
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showPopover</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getShowPopover
 * @function
 */

/**
 * Setter for property <code>showPopover</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowPopover  new value for property <code>showPopover</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setShowPopover
 * @function
 */


/**
 * Getter for property <code>showDataLabel</code>.
 * Flag to display data values on the bar, default is set to true
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showDataLabel</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getShowDataLabel
 * @function
 */

/**
 * Setter for property <code>showDataLabel</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowDataLabel  new value for property <code>showDataLabel</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setShowDataLabel
 * @function
 */


/**
 * Getter for property <code>yAxisLabelFormatter</code>.
 * Formatter for Y Axis Label
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>yAxisLabelFormatter</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getYAxisLabelFormatter
 * @function
 */

/**
 * Setter for property <code>yAxisLabelFormatter</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sYAxisLabelFormatter  new value for property <code>yAxisLabelFormatter</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setYAxisLabelFormatter
 * @function
 */


/**
 * Getter for property <code>yAxis2LabelFormatter</code>.
 * Formatter for Y Axis 2 Label
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>yAxis2LabelFormatter</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getYAxis2LabelFormatter
 * @function
 */

/**
 * Setter for property <code>yAxis2LabelFormatter</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sYAxis2LabelFormatter  new value for property <code>yAxis2LabelFormatter</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setYAxis2LabelFormatter
 * @function
 */


/**
 * Getter for property <code>xAxisLabelFormatter</code>.
 * Formatter for X Axis Label
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>xAxisLabelFormatter</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getXAxisLabelFormatter
 * @function
 */

/**
 * Setter for property <code>xAxisLabelFormatter</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sXAxisLabelFormatter  new value for property <code>xAxisLabelFormatter</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setXAxisLabelFormatter
 * @function
 */


/**
 * Getter for property <code>xAxis2LabelFormatter</code>.
 * Formatter for X Axis 2 Label
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>xAxis2LabelFormatter</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getXAxis2LabelFormatter
 * @function
 */

/**
 * Setter for property <code>xAxis2LabelFormatter</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sXAxis2LabelFormatter  new value for property <code>xAxis2LabelFormatter</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setXAxis2LabelFormatter
 * @function
 */


/**
 * Getter for property <code>plotAreaAxisTooltipFormatter</code>.
 * Formatter for plotArea Axis Tooltip in bubble charts
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>plotAreaAxisTooltipFormatter</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getPlotAreaAxisTooltipFormatter
 * @function
 */

/**
 * Setter for property <code>plotAreaAxisTooltipFormatter</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oPlotAreaAxisTooltipFormatter  new value for property <code>plotAreaAxisTooltipFormatter</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setPlotAreaAxisTooltipFormatter
 * @function
 */


/**
 * Getter for property <code>tooltipFormatter</code>.
 * Formatter for toolTip
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>tooltipFormatter</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getTooltipFormatter
 * @function
 */

/**
 * Setter for property <code>tooltipFormatter</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oTooltipFormatter  new value for property <code>tooltipFormatter</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setTooltipFormatter
 * @function
 */


/**
 * Getter for property <code>dataLabelFormatter</code>.
 * Formatter for Data Label
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>dataLabelFormatter</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getDataLabelFormatter
 * @function
 */

/**
 * Setter for property <code>dataLabelFormatter</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oDataLabelFormatter  new value for property <code>dataLabelFormatter</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setDataLabelFormatter
 * @function
 */


/**
 * Getter for property <code>popoverFormatter</code>.
 * Formatter for popover
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>popoverFormatter</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getPopoverFormatter
 * @function
 */

/**
 * Setter for property <code>popoverFormatter</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oPopoverFormatter  new value for property <code>popoverFormatter</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setPopoverFormatter
 * @function
 */


/**
 * Getter for property <code>chartSemanticColorFormatter</code>.
 * Function that will be called when the chart is rendered in order to let the
 * application decide which color should be use for each bar.
 * The method should take the following parameter as input :
 * - The data context of the current datashape
 * And as output :
 * - One of sap.ca.ui.charts.ChartSemanticColor type
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>chartSemanticColorFormatter</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getChartSemanticColorFormatter
 * @function
 */

/**
 * Setter for property <code>chartSemanticColorFormatter</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oChartSemanticColorFormatter  new value for property <code>chartSemanticColorFormatter</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setChartSemanticColorFormatter
 * @function
 */


/**
 * Getter for property <code>internalVizChart</code>.
 * Retrieve the internal viz chart to allow some operation on it.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.Control} the value of property <code>internalVizChart</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getInternalVizChart
 * @function
 */

/**
 * Setter for property <code>internalVizChart</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.Control} oInternalVizChart  new value for property <code>internalVizChart</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setInternalVizChart
 * @function
 */


/**
 * Getter for property <code>popoverSubHeader</code>.
 * custom subHeader for popover
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.Control} the value of property <code>popoverSubHeader</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getPopoverSubHeader
 * @function
 */

/**
 * Setter for property <code>popoverSubHeader</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.Control} oPopoverSubHeader  new value for property <code>popoverSubHeader</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setPopoverSubHeader
 * @function
 */


/**
 * Getter for property <code>popoverFooter</code>.
 * custom footer for popover
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.Control} the value of property <code>popoverFooter</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getPopoverFooter
 * @function
 */

/**
 * Setter for property <code>popoverFooter</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.Control} oPopoverFooter  new value for property <code>popoverFooter</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setPopoverFooter
 * @function
 */


/**
 * Getter for property <code>advancedChartSettings</code>.
 * You can specify here any advanced viz chart settings that have not been exposed as a chart property.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>advancedChartSettings</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getAdvancedChartSettings
 * @function
 */

/**
 * Setter for property <code>advancedChartSettings</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oAdvancedChartSettings  new value for property <code>advancedChartSettings</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setAdvancedChartSettings
 * @function
 */


/**
 * Getter for property <code>noData</code>.
 * Control tree to display when there is no data available
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.Control} the value of property <code>noData</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getNoData
 * @function
 */

/**
 * Setter for property <code>noData</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.Control} oNoData  new value for property <code>noData</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setNoData
 * @function
 */


/**
 * Event is fired when the data point is selected/unselected on the chart 
 *
 * @name sap.ca.ui.charts.Chart#selectDataPoint
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'selectDataPoint' event of this <code>sap.ca.ui.charts.Chart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.charts.Chart</code>.<br/> itself. 
 *  
 * Event is fired when the data point is selected/unselected on the chart 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.charts.Chart</code>.<br/> itself.
 *
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#attachSelectDataPoint
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'selectDataPoint' event of this <code>sap.ca.ui.charts.Chart</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#detachSelectDataPoint
 * @function
 */

/**
 * Fire event selectDataPoint to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.charts.Chart#fireSelectDataPoint
 * @function
 */


/**
 * Event is fired before the popover is opened 
 *
 * @name sap.ca.ui.charts.Chart#popoverBeforeOpen
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'popoverBeforeOpen' event of this <code>sap.ca.ui.charts.Chart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.charts.Chart</code>.<br/> itself. 
 *  
 * Event is fired before the popover is opened 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.charts.Chart</code>.<br/> itself.
 *
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#attachPopoverBeforeOpen
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'popoverBeforeOpen' event of this <code>sap.ca.ui.charts.Chart</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#detachPopoverBeforeOpen
 * @function
 */

/**
 * Fire event popoverBeforeOpen to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.charts.Chart#firePopoverBeforeOpen
 * @function
 */


/**
 * Event is fired after the popover is opened 
 *
 * @name sap.ca.ui.charts.Chart#popoverAfterOpen
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'popoverAfterOpen' event of this <code>sap.ca.ui.charts.Chart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.charts.Chart</code>.<br/> itself. 
 *  
 * Event is fired after the popover is opened 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.charts.Chart</code>.<br/> itself.
 *
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#attachPopoverAfterOpen
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'popoverAfterOpen' event of this <code>sap.ca.ui.charts.Chart</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#detachPopoverAfterOpen
 * @function
 */

/**
 * Fire event popoverAfterOpen to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.charts.Chart#firePopoverAfterOpen
 * @function
 */


// Start of sap\ca\ui\charts\Chart.js
jQuery.sap.require("sap.m.ScrollContainer");
jQuery.sap.require("sap.m.ScrollContainer");
jQuery.sap.require("sap.ca.ui.charts.ChartType");
jQuery.sap.require("sap.ca.ui.charts.ChartSemanticColor");
jQuery.sap.require("sap.ca.ui.charts.ChartColor");
jQuery.sap.require("sap.ca.ui.charts.ClusterList");
jQuery.sap.require("sap.ca.ui.charts.ChartFormatter");
/**
 * Prepare the creation of the chart layout by creating the internal scroll container that will be displayed
 *
 */
sap.ca.ui.charts.Chart.prototype.init = function () {
    this._oScrollContainer = new sap.m.ScrollContainer(this._createId("scroll"), {
        width:"100%",
        height:"100%"
    });
    this.setAggregation("internalContent", this._oScrollContainer);

    this._oSelectedDataList = new sap.ca.ui.charts.ClusterList(this._createId("clusterList"));
    this._createPopover();
    this.oChartFormatter = sap.ca.ui.charts.ChartFormatter.getInstance();

    this._oMinimumShapeSizes = {
        desktop: 24,
        mobile: 48,
        desktop_px: jQuery.proxy( function() { return this._oMinimumShapeSizes.desktop + "px"; }, this),
        mobile_px: jQuery.proxy( function() { return this._oMinimumShapeSizes.mobile + "px"; }, this)
    };
};

/**
 * create the responsive popover for the chart
 */
sap.ca.ui.charts.Chart.prototype._createPopover = function () {
    var oCustomHeader = new sap.m.Bar(this._createId("popoverHeaderBar"), {
        contentMiddle:[ new sap.m.Label(this._createId("--popoverLabel"), {
            text:sap.ca.ui.utils.resourcebundle.getText("ChartPopover.title")
        })],
        contentRight:(jQuery.device.is.phone) ? [] :
            [new sap.m.Button(this._createId("--popoverCloseButton"), {
                icon:"sap-icon://decline",
                width:"22px",
                press:jQuery.proxy(this._closePopover, this)
            })]
    });
    this._oChartPopover = new sap.m.ResponsivePopover(this._createId("popover"), {
        modal:false,
        enableScrolling:true,
        verticalScrolling:true,
        horizontalScrolling:false,
        placement:sap.m.PlacementType.Auto,
        contentWidth:"100%",
        contentHeight:"100%",
        customHeader:oCustomHeader,
        content:[this._oSelectedDataList.getControl()]
    });
    this._oChartPopover.addStyleClass('sapCaUiChartPopOver');
    this.setAggregation("chartPopover", this._oChartPopover);
    if (!jQuery.device.is.phone) {
        this._oChartPopover._oControl.oPopup.setAutoClose(false);
    }
    //The content of the popover is added in the static UIArea.
    //Thus the first time the popup is opened we avoid a re-renderer.
    var oStatic = sap.ui.getCore().getStaticAreaRef();
    oStatic = sap.ui.getCore().getUIArea(oStatic);
    oStatic.addContent(this._oChartPopover, true);
    this._oChartPopover._bAppendedToUIArea = true;
    this._oChartPopover.attachAfterOpen(null, jQuery.proxy(this._afterOpenPopover, this));
};

/**
 * close the popover for the chart
 */
sap.ca.ui.charts.Chart.prototype._closePopover = function () {
    if (this._oChartPopover) {
        if (this._oChartPopover.isOpen()) {
            this._oChartPopover.close();
        }
    }
};

/**
 * handle the afterOpen event in the popover
 */
sap.ca.ui.charts.Chart.prototype._afterOpenPopover = function () {
    this.firePopoverAfterOpen();
};
/**
 * Make sure that every object that was created and not added to any aggregation are destroyed.
 * Also remove all the handler that were created.
 */
sap.ca.ui.charts.Chart.prototype.exit = function () {
    this._deregisterEvent();
    this._closePopover();
    if (this._oSelectedDataList) {
        this._oSelectedDataList.destroy();
        this._oSelectedDataList = null;
    }
};

/**
 * Remove all event listeners for the resize / orientation change
 *
 * @private
 */
sap.ca.ui.charts.Chart.prototype._deregisterEvent = function () {
    if (jQuery.device.is.desktop) {
        jQuery(window).unbind("resize", jQuery.proxy(this._onResize, this));
    } else {
        sap.ui.Device.orientation.detachHandler(this._onOrientationChange, this);
        sap.ui.Device.resize.detachHandler(this._onResize, this);
    }
};

/**
 * Creates an id for an Element prefixed with the control id
 *
 * @return {string} id
 * @public
 */
sap.ca.ui.charts.Chart.prototype._createId = function (sId) {
    return this.getId() + "-" + sId;
};

sap.ca.ui.charts.Chart.prototype._findInCss = function (rClassName) {
    var matchingRules = [];
    if (!this._sapCaStylesheet) {
        var sapCaStylesheet = null;
        jQuery.each(document.styleSheets, function (iIndex, oStyleSheet) {
            //ie8 doesn't know ownerNode
            if ((!!oStyleSheet.ownerNode && /sap.ca.ui/.test(oStyleSheet.ownerNode.id))
                || (!!oStyleSheet.owningElement && /sap.ca.ui/.test(oStyleSheet.owningElement.id))) {
                sapCaStylesheet = oStyleSheet;
            }
        });
        // In some cases the sap.ca.ui stylesheet is merged with other stylesheet, so in order to find the style
        // we need to be a little bit more aggressive with our search....
        if(sapCaStylesheet == null) {
            // Let's find the node that contain the rule we want as this will be the correct one
            jQuery.each(document.styleSheets, function (iIndex, oStyleSheet) {
                if (oStyleSheet.rules && oStyleSheet.rules.length > 0) {
                    jQuery.each(oStyleSheet.rules, function (iIndexRule, oRule) {
                        if (rClassName.test(oRule.selectorText)) {
                            sapCaStylesheet = oStyleSheet;
                            return false;
                        }
                    });
                } else if (oStyleSheet.cssRules && oStyleSheet.cssRules.length > 0) {
                    jQuery.each(oStyleSheet.cssRules, function (iIndexRule, oRule) {
                        if (rClassName.test(oRule.selectorText)) {
                            sapCaStylesheet = oStyleSheet;
                            return false;
                        }
                    });
                }
                if(sapCaStylesheet) {
                    return false;
                }
            });
        }
        this._sapCaStylesheet = sapCaStylesheet;
    }
    if (this._sapCaStylesheet) {
        if (this._sapCaStylesheet.rules && this._sapCaStylesheet.rules.length > 0) {
            jQuery.each(this._sapCaStylesheet.rules, function (iIndexRule, oRule) {
                if (rClassName.test(oRule.selectorText)) {
                    matchingRules.push(oRule);

                }
            });
        } else if (this._sapCaStylesheet.cssRules && this._sapCaStylesheet.cssRules.length > 0) {
            jQuery.each(this._sapCaStylesheet.cssRules, function (iIndexRule, oRule) {
                if (rClassName.test(oRule.selectorText)) {
                    matchingRules.push(oRule);

                }
            });
        }
    }
    return matchingRules;

};
/**
 * Read the color palette from the css files directly, this is done to allow
 * easy modification depending on the used theme
 *
 * @returns {Array} the color palette for this chart
 * @private
 */
sap.ca.ui.charts.Chart.prototype._getColorPalette = function () {
    if ((!this._aColorPalette) || this._aColorPalette.length === 0) {
        var colorPalette = [];

        var paletteRules = this._findInCss(/.sapCaUiChartColorPalette-/);
        jQuery.each(paletteRules, function (iIndex, oRule) {
            colorPalette.push(oRule.style.color);
        });
        this._aColorPalette = colorPalette;
    }
    return this._aColorPalette;
};

/**
 * Read the color palette from the css files directly, this is done to allow
 * easy modification depending on the used theme
 *
 * @returns {Array} the color palette for this chart
 * @private
 */
sap.ca.ui.charts.Chart.prototype._getSemanticPalette = function () {
    if (!this._aSemanticPalette || !this._aSemanticPalette.length) {
        var semanticPalette = [];
        var that = this;

        function addToPalette(colorType, cssClass) {
            var paletteRule = that._findInCss(cssClass);
            if (paletteRule.length > 0) {
                var oRule = paletteRule[0];
                semanticPalette[colorType] = oRule.style.color;
            }
        }

        addToPalette(sap.ca.ui.charts.ChartSemanticColor.NeutralDark, /.sapCaUiChartSemanticColor-Neutral-Dark/);
        addToPalette(sap.ca.ui.charts.ChartSemanticColor.Neutral, /.sapCaUiChartSemanticColor-Neutral/);
        addToPalette(sap.ca.ui.charts.ChartSemanticColor.NeutralLight, /.sapCaUiChartSemanticColor-Neutral-Light/);
        addToPalette(sap.ca.ui.charts.ChartSemanticColor.GoodDark, /.sapCaUiChartSemanticColor-Good-Dark/);
        addToPalette(sap.ca.ui.charts.ChartSemanticColor.Good, /.sapCaUiChartSemanticColor-Good/);
        addToPalette(sap.ca.ui.charts.ChartSemanticColor.GoodLight, /.sapCaUiChartSemanticColor-Good-Light/);
        addToPalette(sap.ca.ui.charts.ChartSemanticColor.CriticalDark, /.sapCaUiChartSemanticColor-Critical-Dark/);
        addToPalette(sap.ca.ui.charts.ChartSemanticColor.Critical, /.sapCaUiChartSemanticColor-Critical/);
        addToPalette(sap.ca.ui.charts.ChartSemanticColor.CriticalLight, /.sapCaUiChartSemanticColor-Critical-Light/);
        addToPalette(sap.ca.ui.charts.ChartSemanticColor.BadDark, /.sapCaUiChartSemanticColor-Bad-Dark/);
        addToPalette(sap.ca.ui.charts.ChartSemanticColor.Bad, /.sapCaUiChartSemanticColor-Bad/);
        addToPalette(sap.ca.ui.charts.ChartSemanticColor.BadLight, /.sapCaUiChartSemanticColor-Bad-Light/);

        this._aSemanticPalette = semanticPalette;
    }
    return this._aSemanticPalette;
};
/**
 * Return the secondary color palette based on the first and the number of measure in the measure group
 *
 * @returns {Array} the color palette for this chart
 * @private
 */
sap.ca.ui.charts.Chart.prototype._getSecondaryColorPalette = function (colorPalette) {
    var dataset = this.getDataset();
    var secondaryColorPaletteArr = [];
    if (dataset && dataset.getVIZDataset()) {
        var startIndexSecondaryColorPalette = dataset.getVIZDataset().getMeasureValuesGroupByIdx(0).getMeasureValues().length;
        $.extend(secondaryColorPaletteArr, colorPalette);
        secondaryColorPaletteArr.splice(0, startIndexSecondaryColorPalette);
    }
    return secondaryColorPaletteArr;
};

/**
 * Read the v-datalabel css property from the stylesheet
 *
 * @returns {string} the v-datalabel rule
 * @private
 */
sap.ca.ui.charts.Chart.prototype._getDataLabelCss = function () {
    if (!this._sDataLabelRule) {
        var dataLabelRule = "";
        var dataLabelRules = this._findInCss(/.sapCaUiChart .v-datalabel/);
        if (dataLabelRules.length > 0) {
            var oRule = dataLabelRules[0];
            dataLabelRule = ".v-datalabel {";
            for (var i = 0; i < oRule.style.length; i++) {
                dataLabelRule += oRule.style[i] + ": " + oRule.style[oRule.style[i]] + "; ";
            }
            dataLabelRule += "}";
        }
        this._sDataLabelRule = dataLabelRule;
    }
    return this._sDataLabelRule;
};

sap.ca.ui.charts.Chart.prototype._getDataPointCss = function () {
    if (!this._sDataPointRule) {
        var dataPointRule = "";
        var dataPointRules = this._findInCss(/.sapCaUiChart .v-datapoint/);
        if (dataPointRules.length > 0) {
            var oRule = dataPointRules[0];
            dataPointRule = ".v-datapoint {";
            for (var i = 0; i < oRule.style.length; i++) {
                dataPointRule += oRule.style[i] + ": " + oRule.style[oRule.style[i]] + "; ";
            }
            dataPointRule += "}";
        }
        this._sDataPointRule = dataPointRule;
    }
    return this._sDataPointRule;
};

sap.ca.ui.charts.Chart.prototype._getEMSize = function (input) {
    if (!this._emSize) {
        this._emSize = parseFloat($("body").css("font-size"));
    }
    var pxSize;
    if (jQuery.sap.endsWith(input, "em") || jQuery.sap.endsWith(input, "rem")) {
        pxSize = this._emSize * parseFloat(input);
    } else {
        pxSize = parseFloat(input);
    }
    return pxSize
};

sap.ca.ui.charts.Chart.prototype._getMarkerSize = function () {
    if (!this._iMarkerSize) {
        var iMarkerSize = 0;
        var markerSizeRules = this._findInCss(/.sapCaUiChartMarkerSize/);
        if (markerSizeRules.length > 0) {
            var oRule = markerSizeRules[0];
            var fontSize = oRule.style['font-size'];
            if (fontSize == null) { // IE, Firefox
                fontSize = oRule.style['fontSize']
            }
            iMarkerSize = parseInt(this._getEMSize(fontSize));
        }
        this._iMarkerSize = iMarkerSize;
    }
    return this._iMarkerSize;
};


sap.ca.ui.charts.Chart.prototype._getAlignedScale = function () {
    var scaleMin = 0;
    var scaleMax;
    var scale = null;
    if (this.getDataset()) {
        var crossData = this.getDataset().getVIZDataset();
        var measureGroup = [];

        for (var j = 0; j < crossData.getMeasureValuesGroupByIdx(1).getMeasureValues()[0]._values[0].length; j++) {
            measureGroup.push(crossData.getMeasureValuesGroupByIdx(1).getMeasureValues()[0]._values[0][j] + crossData.getMeasureValuesGroupByIdx(1).getMeasureValues()[1]._values[0][j])
        }

        var measureGroupMax = Math.max.apply(Math, measureGroup);
        var measureGroupMin = Math.min.apply(Math, measureGroup);

        for (var i = 0; i < crossData.getMeasureValuesGroupCount(); i++) {

            var tempMax = Math.max(Math.max.apply(Math, crossData.getMeasureValuesGroupByIdx(i).getMeasureValues()[0]._values[0]), measureGroupMax);
            var tempMin = Math.min(Math.min.apply(Math, crossData.getMeasureValuesGroupByIdx(i).getMeasureValues()[0]._values[0]), measureGroupMin);
            if (!scaleMax) {
                scaleMax = tempMax;
            }
            scaleMin = (scaleMin < tempMin) ? scaleMin : tempMin;
            scaleMax = (scaleMax > tempMax) ? scaleMax : tempMax;
        }

        scaleMax = (scaleMax > 0) ? parseInt(1.05 * scaleMax) : parseInt(0.95 * scaleMax);
        scale = {fixedRange:true, minValue:scaleMin, maxValue:scaleMax};
    }
    return scale;

};

/*
 * Merge the chart settings with the "advanced" chart settings defined by the app
 */
sap.ca.ui.charts.Chart.prototype._getMergedChartSettings = function () {
    var chartSettings = this._getChartSettings();
    return jQuery.extend(true, chartSettings, this.getAdvancedChartSettings());
};


sap.ca.ui.charts.Chart.prototype._getChartSettings = function () {
    // Prepare chart settings
    var colorPalette = this._getColorPalette().concat();
    if (this.getDataset()) {
        var semanticChartPalette = this._getSemanticPalette();
        if (this._vizChartType.name != sap.ca.ui.charts.ChartType.Bubble) {

            var measures = this.getDataset().getMeasures();
            for (var i = 0; i < measures.length; i++) {
                var fillColor = measures[i].data("fillColor");
                if (fillColor != null && semanticChartPalette.hasOwnProperty(fillColor)) {
                    colorPalette.splice(i, 0, semanticChartPalette[fillColor]);
                }
            }
        }
        else {
            var dimensions = this.getDataset().getDimensions();
            var analysisAxis = this.getDataset().getVIZDataset()._dataSet.analysisAxis[0].data;
            var colorPaletteMap = {};
            for (var i = 0; i < dimensions.length; i++) {
                // Map of the color per value
                var fillColors = dimensions[i].data("fillColors");
                if(fillColors != null) {

                    for(var j = 0; j < analysisAxis.length; j++) {
                        if(analysisAxis[j].name == dimensions[i].getName()) {
                            var values = analysisAxis[j].values;
                            var uniqueValues = [];
                            jQuery.each(values, function(i, el){
                                if(jQuery.inArray(el, uniqueValues) === -1) uniqueValues.push(el);
                            });
                            for(var k = 0; k < uniqueValues.length; k++) {
                                if(fillColors.hasOwnProperty(uniqueValues[k])) {
                                    colorPaletteMap[k] = sap.ui.core.theming.Parameters.get(fillColors[uniqueValues[k]]);
                                    var colorPaletteIdx = jQuery.inArray(colorPaletteMap[k], colorPalette);
                                    if(colorPaletteIdx != -1) {
                                        colorPalette.splice(colorPaletteIdx, 1);
                                    }
                                }
                            }
                        }
                    }

                }
            }
            for(var paletteIdx in colorPaletteMap) {
                colorPalette.splice(paletteIdx, 0, colorPaletteMap[paletteIdx]);
            }

        }

    }
    var chartSettings = {
        width:"100%",
        height:"100%",
        general : {
            layout : {
                padding : 0
            }
        },
        plotArea:{
            colorPalette:colorPalette,
            marker:{
                visible:true,
                size:this._getMarkerSize()
            },
            axisTooltip:{
                formatString:this.getProperty("plotAreaAxisTooltipFormatter")
            },
            animation:{
                dataLoading:true,
                dataUpdating:true,
                resizing:false
            }
        },
        title:{
            visible:false
        },
        dataLabel:{
            visible:this.getProperty("showDataLabel"),
            position:this._vizChartType.dataLabelPosition,
            formatString:this.getProperty("dataLabelFormatter")
        },
        legend:{
            visible:this.getShowLegend(),
            isScrollable : true
        },
        tooltip:{
            visible:this.getShowTooltip(),
            formatString:this.getProperty("tooltipFormatter")
        },

        hoverline:{
            visible:this._vizChartType.showHoverLine
        },
        interaction:{
            supportLassoEvent:false,
            selectability:{
                mode:this.getSelectionMode().toLowerCase()
            }
        },
        background:{
            visible:true,
            border:{
                left:{
                    visible:false
                },
                right:{
                    visible:false
                },
                bottom:{
                    visible:true
                },
                top:{
                    visible:true
                }
            }
        },
        xAxis:{
            label:{
                formatString:this.getProperty("xAxisLabelFormatter")
            }
        },
        xAxis2:{
            label:{
                formatString:this.getProperty("xAxis2LabelFormatter")
            },
            visible:this.getProperty("secondAxisVisible")
        },
        yAxis:{
            label:{
                formatString:this.getProperty("yAxisLabelFormatter")
            }
        },
        yAxis2:{
            label:{
                formatString:this.getProperty("yAxis2LabelFormatter")
            },
            visible:this.getProperty("secondAxisVisible")
        }
    };
    if (this._vizChartType.dualAxis) {
        chartSettings.plotArea.primaryValuesColorPalette = colorPalette;
        chartSettings.plotArea.secondaryValuesColorPalette = this._getSecondaryColorPalette(colorPalette);
        if (!this.getProperty("secondAxisVisible") && this._vizChartType.alignScales) {
            var alignedScales = this._getAlignedScale();
            chartSettings.yAxis2.scale = alignedScales;
            chartSettings.yAxis.scale = alignedScales;
        }
    }
    return chartSettings;
};

/**
 * This is called after all the properties are set on the control.
 * At this point we can initalize the internal chart without any problem
 *
 * @inherit
 */
sap.ca.ui.charts.Chart.prototype.applySettings = function (mSettings, oScope) {
    sap.ui.core.Control.prototype.applySettings.apply(this, arguments);
    this._initChart();
};

sap.ca.ui.charts.Chart.prototype._initChart = function () {
    this._vizChartType = sap.ca.ui.charts.ChartType.getChartProperties(this.getChartType());

    var chartSettings = this._getMergedChartSettings();

    if (this._vizChartType != null) {
        this.setLabel(this._vizChartType.displayLabel);

        // If the icon has not been set, use the default one for this chart type
        if (this.getIcon() == "") {
            this.setProperty("icon", this._vizChartType.icon);
        }
        if (this._oInternalVizChart != null) {
            this._oInternalVizChart.destroy();
        }
        // Tooltip is reserved in UI5 naming so doing that create issue for us
        chartSettings.tooltip = null;
        this._oInternalVizChart = new sap.viz.ui5[this._vizChartType.name](this._createId("vizChart"), chartSettings);
        this._oInternalVizChart.addDelegate({
            onAfterRendering:function () {
                this._onResizeInt();
            }
        }, true, this);

        this._oInternalVizChart.attachBeforeCreateViz(function (oEvent) {
            var oUsrOptions = oEvent.getParameter("usrOptions");
            if (this._vizChartType.vizType) {
                oUsrOptions.type = this._vizChartType.vizType;
            }
            oUsrOptions.css = this._getDataLabelCss() + this._getDataPointCss();
            oUsrOptions.options = this._getMergedChartSettings();
        }, this);

        this._oScrollContainer.addContent(this._oInternalVizChart);

        this._oScrollContainer.setVertical(this._vizChartType.scroll.vertical);
        this._oScrollContainer.setHorizontal(this._vizChartType.scroll.horizontal);

        this._oInternalVizChart.attachInitialized(this.onChartInitialized, this);
        this._oInternalVizChart.attachSelectData(this.onSelectData, this);
        this._oInternalVizChart.attachDeselectData(this.onDeselectData, this);
        if (jQuery.sap.touchEventMode == "ON" && jQuery.device.is.tablet) {
            //Close the popover when we scroll on a tablet
            this._oInternalVizChart.attachBrowserEvent("touchmove",jQuery.proxy(this._closePopover, this));
        }
        this.setMinShapeSize();
    } else {
        jQuery.sap.log.error("Cannot instantiate the Chart control, " + this.getVizType() + " is not a recognized type");
    }
};

/**
 * Create or update local bindings.
 *
 * Called when model or binding contexts have changed. Creates bindings when the model was not available
 * at the time bindProperty or bindAggregation was called. Recreates the bindings when they exist already
 * and when the model has changed.
 *
 * @param {boolean} bUpdateAll forces an update of all bindings, sModelName will be ignored
 * @param {string|undefined} sModelName name of a model whose bindings should be updated
 *
 * @private
 */
sap.ca.ui.charts.Chart.prototype.updateBindings = function (bUpdateAll, sModelName) {
    sap.ui.core.Control.prototype.updateBindings.apply(this, arguments);
};

sap.ca.ui.charts.Chart.prototype.invalidate = function (oOrigin, bInvalidateSize) {
    if (bInvalidateSize) {
        // Delay the invalidation for a few second in case of subsequent resize
        if (this._sInvalidateDelay) {
            jQuery.sap.clearDelayedCall(this._sInvalidateDelay);
        }
        this._sInvalidateDelay = jQuery.sap.delayedCall(200, this, sap.ui.core.Control.prototype.invalidate, arguments);
    } else {
        sap.ui.core.Control.prototype.invalidate.apply(this, arguments);
    }
};

sap.ca.ui.charts.Chart.prototype.setChartType = function (oType) {
    this.setProperty("chartType", oType);
    this.setProperty("icon", "");
    this._vizChartType = sap.ca.ui.charts.ChartType.getChartProperties(this.getChartType());
    this._initChart();

    return this;
};

/**
 * Setter for property <code>title</code>.
 *
 * Default value is <code>Chart</code>
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setTitle
 * @function
 */
sap.ca.ui.charts.Chart.prototype.setTitle = function (sTitle) {
    this.setProperty("title", sTitle);
    return this;
};

/**
 * Setter for property <code>internalVizChart</code>.
 *
 * Default value is <code>oChart</code>
 *
 * @param {sap.viz.ui5.BaseChart} oInternalVizChart  new value for property <code>title</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setTitle
 * @function
 */
sap.ca.ui.charts.Chart.prototype.setInternalVizChart = function (oInternalVizChart) {
    // We don't accept public setter
    jQuery.sap.log.warning("InternalVizChart cannot be set from outside a sap.ca.ui.chart.Chart class.");
    return this;
};

/**
 * Setter for property <code>dataset</code>.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @param {sap.viz.ui5.data.Dataset} oDataset  new value for property <code>dataset</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setDataset
 * @function
 */
sap.ca.ui.charts.Chart.prototype.setDataset = function (oDataset) {
    this._oInternalVizChart.setDataset(oDataset);
    this.setProperty("dataset", oDataset);
    return this;
};

/**
 * Getter for property <code>dataset</code>.
 * Viz Dataset that will hold the data to be displayed.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} oDataset the value of property <code>dataset</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getDataset
 * @function
 */
sap.ca.ui.charts.Chart.prototype.getDataset = function () {
    var dataset = null;
    if (this._oInternalVizChart) {
        dataset = this._oInternalVizChart.getDataset();
    }
    return dataset;
};
/**
 * Getter for property <code>internalVizChart</code>.
 * internal Viz Chart
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} oInternalVizChart the value of property <code>internalVizChart</code>
 * @public
 * @name sap.ca.ui.charts.Chart#getInternalVizChart
 * @function
 */
sap.ca.ui.charts.Chart.prototype.getInternalVizChart = function () {
    return this._oInternalVizChart;
};

/**
 * Catch the setModel call and make sure we refresh the size of the chart.
 *
 * @param {sap.ui.model.Model} oModel the model to be set or <code>null</code> or <code>undefined</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setModel
 * @function
 */
sap.ca.ui.charts.Chart.prototype.setModel = function (oModel) {
    if (this._oSelectedDataList) {
        this._oSelectedDataList.reset();
    }
    sap.ui.core.Control.prototype.setModel.apply(this, arguments);
    return this;
};


/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>100%</code>
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setHeight
 * @function
 */
sap.ca.ui.charts.Chart.prototype.setHeight = function (sHeight) {
    this.setProperty("height", sHeight);
    return this;
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code>
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setWidth
 * @function
 */
sap.ca.ui.charts.Chart.prototype.setWidth = function (sWidth) {
    this.setProperty("width", sWidth);
    return this;
};

/**
 * Setter for property <code>showLegend</code>.
 *
 * Default value is <code>true</code>
 *
 * @param {boolean} bShowLegend  new value for property <code>showLegend</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setShowLegend
 * @function
 */
sap.ca.ui.charts.Chart.prototype.setShowLegend = function (bShowLegend) {
    this.setProperty("showLegend", bShowLegend);
    if (this._oInternalVizChart) {
        this._oInternalVizChart.getLegend().setVisible(bShowLegend)
    }
    return this;
};

sap.ca.ui.charts.Chart.prototype.setShowTooltip = function (bShowTooltip) {
    this.setProperty("showTooltip", bShowTooltip);
    if (this._oInternalVizChart) {
        var tooltip = this._oInternalVizChart.getTooltip();
        if (tooltip.setVisible) {
            tooltip.setVisible(bShowTooltip);
        }
        if (tooltip.setEnabled) {
            tooltip.setEnabled(bShowTooltip);
        }
    }
    return this;
};

/**
 * Setter for property <code>selectionMode</code>.
 *
 * Default value is <code>Multi</code>
 *
 * @param {sap.ca.ui.charts.ChartSelectionMode} oSelectionMode  new value for property <code>selectionMode</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setSelectionMode
 * @function
 */
sap.ca.ui.charts.Chart.prototype.setSelectionMode = function (oSelectionMode) {
    this.setProperty("selectionMode", oSelectionMode);
    if (this._oInternalVizChart) {
        this._oInternalVizChart.getInteraction().getSelectability().setSelectionMode(oSelectionMode.toLowerCase())
    }
    return this;
};

/**
 * Setter for property <code>xAxisLabelFormatter</code>.
 *
 *
 * @param {object} formatter  new value for property <code>xAxisLabelFormatter</code>
 *        formatter can be:
 *          - a custom formatting function
 *          - a value of enum sap.ca.ui.charts.DefaultFormatterFunction
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#xAxisLabelFormatter
 * @function
 */
sap.ca.ui.charts.Chart.prototype.setXAxisLabelFormatter = function (formatter) {
    var formatString = this.oChartFormatter.addFormatter(this._oInternalVizChart, "xAxisLabelFormatter", formatter);
    this.setProperty("xAxisLabelFormatter", formatString);
    return this;
};

/**
 * Setter for property <code>xAxis2LabelFormatter</code>.
 *
 *
 * @param {object} formatter  new value for property <code>xAxis2LabelFormatter</code>
 *        formatter can be:
 *          - a custom formatting function
 *          - a value of enum sap.ca.ui.charts.DefaultFormatterFunction
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#xAxis2LabelFormatter
 * @function
 */
sap.ca.ui.charts.Chart.prototype.setXAxis2LabelFormatter = function (formatter) {
    var formatString = this.oChartFormatter.addFormatter(this._oInternalVizChart, "xAxis2LabelFormatter", formatter);
    this.setProperty("xAxis2LabelFormatter", formatString);
    return this;
};

/**
 * Setter for property <code>yAxisLabelFormatter</code>.
 *
 *
 * @param {object} formatter  new value for property <code>yAxisLabelFormatter</code>
 *        formatter can be:
 *          - a custom formatting function
 *          - a value of enum sap.ca.ui.charts.DefaultFormatterFunction
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#yAxisLabelFormatter
 * @function
 */
sap.ca.ui.charts.Chart.prototype.setYAxisLabelFormatter = function (formatter) {
    var formatString = this.oChartFormatter.addFormatter(this._oInternalVizChart, "yAxisLabelFormatter", formatter);
    this.setProperty("yAxisLabelFormatter", formatString);
    return this;
};

/**
 * Setter for property <code>yAxis2LabelFormatter</code>.
 *
 *
 * @param {object} formatter  new value for property <code>yAxis2LabelFormatter</code>
 *        formatter can be:
 *          - a custom formatting function
 *          - a value of enum sap.ca.ui.charts.DefaultFormatterFunction
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#yAxis2LabelFormatter
 * @function
 */
sap.ca.ui.charts.Chart.prototype.setYAxis2LabelFormatter = function (formatter) {
    var formatString = this.oChartFormatter.addFormatter(this._oInternalVizChart, "yAxis2LabelFormatter", formatter);
    this.setProperty("yAxis2LabelFormatter", formatString);
    return this;
};

/**
 * Setter for property <code>dataLabelFormatter</code>.
 *
 *
 * @param {object} formatterArray  new value for property <code>dataLabelFormatter</code>
 *        [formatterArray] must be a 2 dimensions array of formatters.
 *            [  [ measure 1 of X Axis , ...,  [measure n of X Axis] ],
 *               [ measure 1 of X Axis 2 , ...,  [measure n of X Axis 2] ]
 *        Each of these formatters can be:
 *          - a custom formatting function
 *          - a value of enum sap.ca.ui.charts.DefaultFormatterFunction
 *        If for an axis, formatters count < measures count, then first formatter of axis will be used
 *        for other measures.

 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#dataLabelFormatter
 * @function
 */
sap.ca.ui.charts.Chart.prototype.setDataLabelFormatter = function (formatterArray) {
    var formatString;
    var formatStringArray = [
        []
    ];
    if (Array.isArray(formatterArray)) {
        for (var i = 0; i < formatterArray.length; i++) {
            if (Array.isArray(formatterArray[i])) {
                if (i > 0) {
                    formatStringArray.push([]);
                }
                for (var j = 0; j < formatterArray[i].length; j++) {
                    formatString = this.oChartFormatter.addFormatter(this._oInternalVizChart, "dataLabelFormatter" + i + "-" + j, formatterArray[i][j]);
                    formatStringArray[i][j] = formatString;
                }
            }
            else {
                jQuery.sap.log.error("dataLabelFormatter must be an array of arrays");
                return this;
            }
        }
    }
    else {
        jQuery.sap.log.error("dataLabelFormatter must be an array of arrays");
        return this;
    }
    this.setProperty("dataLabelFormatter", formatStringArray);
    return this;
};


/**
 * Setter for property <code>plotAreaAxisTooltipFormatter</code>.
 *
 *
 * @param {object} [formatterArray] new value for property <code>plotAreaAxisTooltipFormatter</code>
 *        This is the tooltip for "bubbles" of bubble chart.
 *        [formatterArray] must be an array of 2 formatters (one for X Axis, one for Y axis).
 *        Each of these formatters can be:
 *          - a custom formatting function
 *          - a value of enum sap.ca.ui.charts.DefaultFormatterFunction
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#setPlotAreaAxisTooltipFormatter
 * @function
 */
sap.ca.ui.charts.Chart.prototype.setPlotAreaAxisTooltipFormatter = function (formatterArray) {
    var formatString;
    var formatStringArray = [];
    if (Array.isArray(formatterArray)) {
        for (var i = 0; i < formatterArray.length; i++) {
            formatString = this.oChartFormatter.addFormatter(this._oInternalVizChart, "plotAreaAxisTooltipFormatter" + i, formatterArray[i]);
            formatStringArray[i] = formatString;
        }
    }
    else {
        jQuery.sap.log.error("plotAreaAxisTooltipFormatter must be an array");
        return this;
    }
    this.setProperty("plotAreaAxisTooltipFormatter", formatStringArray);
    return this;
};

/**
 * Setter for property <code>tooltipFormatter</code>.
 *
 *
 * @param {object} formatterArray  new value for property <code>tooltipFormatter</code>
 *        [formatterArray] must be a 2 dimensions array of formatters.
 *            [  [ measure 1 of X Axis , ...,  [measure n of X Axis] ],
 *               [ measure 1 of X Axis 2 , ...,  [measure n of X Axis 2] ]
 *        Each of these formatters can be:
 *          - a custom formatting function
 *          - a value of enum sap.ca.ui.charts.DefaultFormatterFunction
 *        If for an axis, formatters count < measures count, then first formatter of axis will be used
 *        for other measures.
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#tooltipFormatter
 * @function
 */
sap.ca.ui.charts.Chart.prototype.setTooltipFormatter = function (formatterArray) {
    var formatString;
    var formatStringArray = [
        []
    ];
    if (Array.isArray(formatterArray)) {
        for (var i = 0; i < formatterArray.length; i++) {
            if (Array.isArray(formatterArray[i])) {
                if (i > 0) {
                    formatStringArray.push([]);
                }
                for (var j = 0; j < formatterArray[i].length; j++) {
                    formatString = this.oChartFormatter.addFormatter(this._oInternalVizChart, "tooltipFormatter" + i + "-" + j, formatterArray[i][j]);
                    formatStringArray[i][j] = formatString;
                }
            }
            else {
                jQuery.sap.log.error("tooltipFormatter must be an array of arrays");
                return this;
            }
        }
    }
    else {
        jQuery.sap.log.error("tooltipFormatter must be an array of arrays");
        return this;
    }
    this.setProperty("tooltipFormatter", formatStringArray);
    return this;
};

/**
 * Setter for property <code>popoverFormatter</code>.
 *
 *
 * @param {object} formatterArray  new value for property <code>popoverFormatter</code>
 *        [formatterArray] must be a 2 dimensions array of formatters.
 *            [  [ measure 1 of X Axis , ...,  [measure n of X Axis] ],
 *               [ measure 1 of X Axis 2 , ...,  [measure n of X Axis 2] ]
 *        Each of these formatters can be:
 *          - a custom formatting function
 *          - a value of enum sap.ca.ui.charts.DefaultFormatterFunction
 *        If for an axis, formatters count < measures count, then first formatter of axis will be used
 *        for other measures.

 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#popoverFormatter
 * @function
 */
sap.ca.ui.charts.Chart.prototype.setPopoverFormatter = function (formatterArray) {
    var formatString;
    var formatStringArray = [
        []
    ];
    if (Array.isArray(formatterArray)) {
        for (var i = 0; i < formatterArray.length; i++) {
            if (Array.isArray(formatterArray[i])) {
                if (i > 0) {
                    formatStringArray.push([]);
                }
                for (var j = 0; j < formatterArray[i].length; j++) {
                    formatString = this.oChartFormatter.addFormatter(this._oInternalVizChart, "popoverFormatter" + i + "-" + j, formatterArray[i][j]);
                    formatStringArray[i][j] = formatString;
                }
            }
            else {
                jQuery.sap.log.error("popoverFormatter must be an array of arrays");
                return this;
            }
        }
    }
    else {
        jQuery.sap.log.error("popoverFormatter must be an array of arrays");
        return this;
    }
    this.setProperty("popoverFormatter", formatStringArray);
    return this;
};

/**
 * Setter for property <code>advancedChartSettings</code>.
 *
 *
 * @param {object} settings
 * You can specify here any advanced viz chart settings that have not been exposed as a chart property.
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#advancedChartSettings
 * @function
 */
sap.ca.ui.charts.Chart.prototype.setAdvancedChartSettings = function (settings) {
    this.setProperty("advancedChartSettings", settings);
    return this;
};

/**
 * Setter for property <code>minShapeSize</code>.
 * Note: doesn't work for the bubble chart's bubbles sizes.
 *
 * @param {string} sMinShapeSize Minimum shape size in pixels.
 *
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.Chart#minShapeSize
 * @function
 */
sap.ca.ui.charts.Chart.prototype.setMinShapeSize = function (sMinShapeSize) {

    if (jQuery.device.is.desktop) {
        if(typeof sMinShapeSize !== "undefined")jQuery.sap.log.warning("MinShapeSize must be 24px for desktop. Forcing to 24px.");
        sMinShapeSize = this._oMinimumShapeSizes.desktop_px();
    } else {
        if(typeof sMinShapeSize !== "undefined")jQuery.sap.log.warning("MinShapeSize must be 48px to be clickable on mobile. Forcing to 48px.");
        sMinShapeSize = this._oMinimumShapeSizes.mobile_px();
    }
    this.setProperty("minShapeSize", sMinShapeSize);
    return this;
};

/**
 *  =============
 *  Event Handling
 *  =============
 **/

/**
 * Function that is called after the chart has been rendered
 *
 * @param oEvent viz initialized event that is triggered when the chart has been rendered
 */
sap.ca.ui.charts.Chart.prototype.onChartInitialized = function (oEvent) {
//    Using a code like this we can ask the team to implement a simple callback that would
//    take the datapoint details (with the context / values etc) return us a semantic color value from the type
//    and use this to color the datashape.


    var semanticCallback = this.getChartSemanticColorFormatter();
    if (semanticCallback != null) {
        var chart = d3.select(this._oInternalVizChart.getDomRef()).select('.v-m-root');
        var semanticPalette = this._getSemanticPalette();
        chart.selectAll('g.v-datashape').selectAll('rect').attr('fill', function (d) {
            var semanticColorType = semanticCallback(d);
            var fillColor = d.fillColor;
            if (semanticPalette.hasOwnProperty(semanticColorType)) {
                fillColor = semanticPalette[semanticColorType]
            }
            return fillColor;
        })
        chart.selectAll('g.v-datashape').selectAll('path').attr('fill', function (d) {
            var semanticColorType = semanticCallback(d);
            var fillColor = d.fillColor;
            if (semanticPalette.hasOwnProperty(semanticColorType)) {
                fillColor = semanticPalette[semanticColorType]
            }
            return fillColor;
        })
    }
};

/**
 * Function that is called after a shape has been selected
 *
 * @param oEvent viz selectData event that is triggered when the chart has been rendered
 */
sap.ca.ui.charts.Chart.prototype.onSelectData = function (oEvent) {
    var aSelection = this._oInternalVizChart.selection();
    var selectedItem = null;
    if (aSelection.length > 0) {
        selectedItem = aSelection[aSelection.length - 1];
    }
    if (this.getShowPopover()) {
        var oData = oEvent.getParameter("data");
        var oTarget = oData[oData.length - 1].target;
        for (var p = 0; p < oData.length; p++) {
            for (var q = 0; q < oData[p].data.length; q++) {
                if (!oData[p].data[q] || !oData[p].data[q].ctx || !oData[p].data[q].val) {
                    continue;
                }
                var oContext = oData[p].data[q].ctx;
                var oColor = oData[p].target.attributes.fill.value;

                var sValue = oData[p].data[q].val;
                var vizDataset = this._oInternalVizChart.getDataset().getVIZDataset();
                var dimAxis1 = vizDataset._analysisAxis[0]._dimensionLabels;
                var measureValuesGroup = vizDataset._measureValuesGroup;
                var measures = measureValuesGroup[oContext.path.mg].getMeasureValues();
                var sMeasureName = measures[oContext.path.mi]._uId;
                var sAxisName = "";
                var aGroupKey = [];
                if (oContext.type === 'Measure') {
                    var path = oContext.path;
                    var sKey = path.dii_a1.toString();
                    sKey += path.dii_a2.toString();
                    sKey += path.mg.toString();
                    sKey += path.mi.toString();
                    var that = this;
                    jQuery.each(dimAxis1, function (i, dimension) {
                        sAxisName = dimension._values[oContext.path.dii_a1];
                        aGroupKey.push(sAxisName);
                        if (that._oSelectedDataList.getGroupIndexFor(aGroupKey) === -1) {
                            that._oSelectedDataList.addGroup({
                                key:aGroupKey,
                                title:sAxisName
                            });
                        }
                    });
                    var formatString = "";
                    if (!this.getProperty("popoverFormatter") || !Array.isArray(this.getProperty("popoverFormatter")) ||
                        this.getProperty("popoverFormatter").length < oContext.path.mg || !this.getProperty("popoverFormatter")[oContext.path.mg] || !Array.isArray(this.getProperty("popoverFormatter")[oContext.path.mg]) ||
                        this.getProperty("popoverFormatter")[oContext.path.mg].length == 0) {
                        formatString = sap.ca.ui.charts.DefaultFormatterFunction.STANDARDNUMBER;
                    }
                    else {
                        if (this.getProperty("popoverFormatter")[oContext.path.mg].length < oContext.path.mi) {
                            formatString = this.getProperty("popoverFormatter")[oContext.path.mg][0];
                        }
                        else {
                            formatString = this.getProperty("popoverFormatter")[oContext.path.mg][oContext.path.mi];
                        }
                    }

                    if (this._oSelectedDataList.getItemIndexFor(aGroupKey, sKey) === -1) {
                        this._oSelectedDataList.addItemTo(aGroupKey, [
                            {
                                key:sKey,
                                color:oColor,
                                label:sMeasureName,
                                value:this.oChartFormatter.format(sValue.toString(), formatString)
                            }
                        ]);
                    }
                }
            }
        }
        this.firePopoverBeforeOpen({isOpen: this._oChartPopover.isOpen(), openBy: oTarget, selection:aSelection});
        if (!this._oChartPopover.isOpen()) {
            if (oTarget.width != null) {
                this._oChartPopover.setOffsetX(Math.floor(oTarget.width.baseVal.value));
                this._oChartPopover.setOffsetY(Math.floor((oTarget.height.baseVal.value / 2)));
            }

            if (this._vizChartType.name == sap.ca.ui.charts.ChartType.Bubble) {
                if (oTarget && oTarget.getBoundingClientRect()) {
                    var iBoundingWidth = oTarget.getBoundingClientRect().width;
                    var iBoundingHeight = oTarget.getBoundingClientRect().height;
                    if (iBoundingWidth) {
                        this._oChartPopover.setOffsetX(Math.floor(iBoundingWidth / 2));
                        this._oChartPopover.setOffsetY(Math.floor(iBoundingHeight / 2));
                    }
                }
            }
            if (!jQuery.device.is.phone) {
                this._oChartPopover._oControl.$().css("max-height:" + this._oInternalVizChart.getHeight());
            }
            this._oChartPopover.openBy(oTarget);
        }
    }
    this.fireSelectDataPoint({
        popover:this._oChartPopover,
        srcEvent:oEvent,
        selection:aSelection,
        selectedItem:selectedItem
    });
};

/**
 * Function that is called after a shape has been deselected
 *
 * @param oEvent viz deselectData event that is triggered when the chart has been rendered
 */
sap.ca.ui.charts.Chart.prototype.onDeselectData = function (oEvent) {
    var aSelection = this._oInternalVizChart.selection();
    if (this.getShowPopover()) {
        if (aSelection.length == 0) {
            this._oSelectedDataList.reset();
            this._closePopover();
        } else {
            var oData = oEvent.getParameter("data");
            for (var p = 0; p < oData.length; p++) {
                for (var q = 0; q < oData[p].data.length; q++) {
                    if (!oData[p].data[q] || !oData[p].data[q].ctx || !oData[p].data[q].val) {
                        continue;
                    }

                    var oContext = oData[p].data[q].ctx;
                    if (oContext.type == 'Measure') {
                        var path = oContext.path;
                        var sKey = path.dii_a1.toString();
                        sKey += path.dii_a2.toString();
                        sKey += path.mg.toString();
                        sKey += path.mi.toString();
                        var vizDataset = this._oInternalVizChart.getDataset().getVIZDataset();
                        var dimAxis1 = vizDataset._analysisAxis[0]._dimensionLabels;
                        var sAxisName = "";

                        var aGroupKey = [];
                        jQuery.each(dimAxis1, function (i, dimension) {
                            aGroupKey.push(dimension._values[oContext.path.dii_a1]);
                        });

                        if (this._oSelectedDataList.getItemIndexFor(aGroupKey, sKey) !== -1) {
                            this._oSelectedDataList.removeItemFrom(aGroupKey, sKey);
                        }
                        if (this._oSelectedDataList.getNumberOfItemsFor(aGroupKey) === 0) {
                            this._oSelectedDataList.removeGroup(aGroupKey);
                        }
                    }
                }
            }
        }
    }
    this.fireSelectDataPoint({
        popover:this._oChartPopover,
        srcEvent:oEvent,
        selection:this._oInternalVizChart.selection(),
        selectedItem:null
    });
};

/**
 * Function is called before the rendering of the control is started.
 *
 * Applications must not call this hook method directly, it is called by the framework.
 *
 * Subclasses of Control should override this hook to implement any necessary actions before the rendering.
 *
 * @function
 * @name sap.ui.core.Control.prototype.onBeforeRendering
 * @protected
 */
sap.ca.ui.charts.Chart.prototype.onBeforeRendering = function () {
    this._deregisterEvent();

};

/**
 * Function is called when the rendering of the control is completed.
 *
 * Applications must not call this hook method directly, it is called by the framework.
 *
 * Subclasses of Control should override this hook to implement any necessary actions after the rendering.
 *
 * @function
 * @name sap.ui.core.Control.prototype.onAfterRendering
 * @protected
 */
sap.ca.ui.charts.Chart.prototype.onAfterRendering = function () {

    if (jQuery.device.is.desktop) {
        jQuery(window).bind("resize", jQuery.proxy(this._onResize, this));
    } else {
        sap.ui.Device.orientation.attachHandler(this._onOrientationChange, this);
        sap.ui.Device.resize.attachHandler(this._onResize, this);
    }

};

/**
 * Function to calculate the size of the chart to display.
 * It is based on the vizdataset by looking at the dimension in each analysis axis.
 *
 * The size of the chart is also defined based on the available space in the chart or its container.
 * Special handling is done for the ChartToolbar integration case.
 *
 * @private
 */
sap.ca.ui.charts.Chart.prototype._onResize = function () {
    if (this._sDelayedResize) {
        jQuery.sap.clearIntervalCall(this._sDelayedResize);
    }
    this._sDelayedResize = jQuery.sap.delayedCall(200, this, this._onResizeInt);
};

sap.ca.ui.charts.Chart.prototype._onResizeInt = function () {
    this._closePopover();
    var dataset = this._oInternalVizChart.getDataset();
    if (!dataset) {
        return;
    }
    var vizDataset = dataset.getVIZDataset();
    var iShapeSize = parseInt(this.getMinShapeSize());
    if (vizDataset && !vizDataset._emptyDataset && vizDataset._analysisAxis.length > 0) {
        // Number of data point is derived from the multiplication of both analysis axises length.
        var iShapeCount = vizDataset._analysisAxis[0]._dimensionLabels[0]._values.length;
        var iPaddingCount = iShapeCount;
        var iSpacingCount = 0;

        // Handle the rare case where we are in a stacked chart but don't have multiple measure to display...
        if (vizDataset._analysisAxis[1] != null) {
            iShapeCount *= vizDataset._analysisAxis[1]._dimensionLabels[0]._values.length;
            iSpacingCount = iShapeCount;
        }
        if (!this._vizChartType.stacked) {
            iShapeCount *= vizDataset._measures.length;
            iSpacingCount = iShapeCount * (vizDataset._measures.length - 1)
        }
        var calculatedSize = (iShapeCount * iShapeSize) + (iPaddingCount * iShapeSize) + (iSpacingCount * 4);

        var initialWidth = this.getWidth();
        var initialHeight = this.getHeight();
        var initialWidthI = parseInt(initialWidth);
        var initialHeightI = parseInt(initialHeight);

        if (jQuery.sap.endsWith(initialWidth, "%") || initialWidth == "auto") {
            // Try to read from DomRef if possible at that point
            // Either the domRef exists (cool), or its parent has already been rendered (also cool)
            // Or we need to get the size from the UIArea...
            if (this.getParent() != null && this.getParent().getDomRef() != null) {
                var $DomRef = this.$();
                var $PageSection = $DomRef.parents('.sapMPage').first();
                var $ParentSection = $PageSection.children('section').first();
                var hiddenSection = $ParentSection.parents('.sapMNavItemHidden');
                if(hiddenSection.length != 0) {
                    hiddenSection.removeClass('sapMNavItemHidden');
                }
                if ($ParentSection.length == 0) {
                    $ParentSection = this.getParent().$().parents('section').first();
                }
                if ($ParentSection.length == 0) {
                    $ParentSection = $DomRef.parents('body').first();
                }


                var iSectionWidth = $ParentSection.width();
                var iSectionOffsetLeft = 0;
                if ($ParentSection && $ParentSection.offset()) {
                    iSectionOffsetLeft = $ParentSection.offset().left;
                }
                var iEltOffsetLeft = 0;
                if ($DomRef && $DomRef.offset()) {
                    iEltOffsetLeft = $DomRef.offset().left;
                }

                var iEltOffsetRight = 1;
                // try to find out if there is a padding-bottom / margin-bottom in between here and the section
                var $ParentDom = $DomRef;//this.getParent().$();
                while ($ParentDom != null && $ParentDom.length != 0 && $ParentDom.attr("id") != $ParentSection.attr("id")) {
                    var marginRight = parseInt($ParentDom.css("margin-right"));
                    var paddingRight = parseInt($ParentDom.css("padding-right"));
                    var borderRight = parseInt($ParentDom.css("border-right-width"));
                    if (!isNaN(marginRight)) {
                        iEltOffsetRight += marginRight;
                    }
                    if (!isNaN(paddingRight)) {
                        iEltOffsetRight += paddingRight;
                    }
                    if (!isNaN(borderRight)) {
                        iEltOffsetRight += borderRight;
                    }
                    $ParentDom = $ParentDom.parent();
                }
                if(hiddenSection.length != 0) {
                    hiddenSection.addClass('sapMNavItemHidden');
                }
                initialWidthI = (iSectionWidth - (iEltOffsetLeft - iSectionOffsetLeft) - iEltOffsetRight);
            } else if (this.getUIArea()) {
                initialWidthI = jQuery(this.getUIArea().oRootNode).width();
            } else {
                initialWidthI = "800";
            }

            // Apply the actual percent to the size
            initialWidthI = (initialWidthI * parseInt(initialWidth)) / 100;
        }
        if (jQuery.sap.endsWith(initialHeight, "%") || initialHeight == "auto") {
            // Try to read from DomRef if possible at that point
            // Either the domRef exists (cool), or its parent has already been rendered (also cool)
            // When the parent is a VBox though the height will never be set prior to rendering...
            // Or we need to get the size from the UIArea...
            if (this.getParent() != null && this.getParent().getDomRef() != null) {
                var $DomRef = this.$();
                var $PageSection = $DomRef.parents('.sapMPage').first();
                var $ParentSection = $PageSection.children('section').first();
                var hiddenSection = $ParentSection.parents('.sapMNavItemHidden');
                if(hiddenSection.length != 0) {
                    hiddenSection.removeClass('sapMNavItemHidden');
                }
                if ($ParentSection.length == 0) {
                    $ParentSection = this.getParent().$().parents('section').first();
                }
                if ($ParentSection.length == 0) {
                    $ParentSection = $DomRef.parents('body').first();
                }

                var iSectionHeight = $ParentSection.height();
                var iSectionOffsetTop = 0;
                if ($ParentSection && $ParentSection.offset()) {
                    iSectionOffsetTop = $ParentSection.offset().top;
                }
                var iEltOffsetTop = 0;
                if ($DomRef && $DomRef.offset()) {
                    iEltOffsetTop = $DomRef.offset().top;
                }

                var iEltOffsetBottom = 0;
                // try to find out if there is a padding-bottom / margin-bottom in between here and the section
                var $ParentDom = $DomRef;
                while ($ParentDom != null && $ParentDom.length != 0 && $ParentDom.attr("id") != $ParentSection.attr("id")) {
                    var marginBottom = parseInt($ParentDom.css("margin-bottom"));
                    var paddingBottom = parseInt($ParentDom.css("padding-bottom"));
                    var borderBottom = parseInt($ParentDom.css("border-bottom-width"));
                    if (!isNaN(marginRight)) {
                        iEltOffsetBottom += marginBottom;
                    }
                    if (!isNaN(paddingBottom)) {
                        iEltOffsetBottom += paddingBottom;
                    }
                    if (!isNaN(borderBottom)) {
                        iEltOffsetBottom += borderBottom;
                    }
                    $ParentDom = $ParentDom.parent();
                }
                if(hiddenSection.length != 0) {
                    hiddenSection.addClass('sapMNavItemHidden');
                }
                initialHeightI = (iSectionHeight - (iEltOffsetTop - iSectionOffsetTop) - iEltOffsetBottom);
            } else if (this.getUIArea()) {
                initialHeightI = jQuery(this.getUIArea().oRootNode).height();
            } else {
                initialHeightI = "480";
            }

            // Apply the actual percent to the size
            if (this.getParent() && this.getParent() instanceof sap.ca.ui.charts.ChartToolBar
                && parseInt(initialHeight) != 100) {
                // In case the parent is a chart toolbar we need to take that into account when calculating the percentage if different from 100%
                var toolbarHeight = this.getParent().$().find(".sapMBar").height();
                initialHeightI = (((initialHeightI + toolbarHeight) * parseInt(initialHeight)) / 100) - toolbarHeight;
            } else {
                initialHeightI = (initialHeightI * parseInt(initialHeight)) / 100;
            }

        }

        var iScrollbarSize = { height:0, width:0};
        if (initialHeightI == 0)
        {
            // In the event the page does not exist or something go wrong we can have a 0 height, in that case we need to try again.
            initialHeightI = 100;
            // Force rerendering when the page is available
            jQuery.sap.delayedCall(200, this, this.invalidate);
        }
        if (this._vizChartType.scroll.horizontal) {
            if (calculatedSize > initialWidthI) {
                this._oInternalVizChart.setWidth(calculatedSize + "px");
                iScrollbarSize = jQuery.sap.scrollbarSize();
            } else {
                this._oInternalVizChart.setWidth(initialWidthI + "px");
            }

            this._oInternalVizChart.setHeight((initialHeightI - iScrollbarSize.height) + "px");
        } else if (this._vizChartType.scroll.vertical) {
            if (calculatedSize > initialHeightI) {
                this._oInternalVizChart.setHeight(calculatedSize + "px");
                this._oScrollContainer.setHeight(initialHeightI + "px");
                //For the first resize in order to avoid invalidating everything...
                if (this._oScrollContainer.$()) {
                    this._oScrollContainer.$().height(initialHeightI + "px");
                }

                iScrollbarSize = jQuery.sap.scrollbarSize();
            } else {
                this._oInternalVizChart.setHeight(initialHeightI + "px");
                this._oScrollContainer.setHeight("100%");
                //For the first resize in order to avoid invalidating everything...
                if (this._oScrollContainer.$()) {
                    this._oScrollContainer.$().height("100%");
                }
            }
            this._oInternalVizChart.setWidth((initialWidthI - iScrollbarSize.width) + "px");
        } else { // No scrolling but we still need to give in a correct height
            this._oInternalVizChart.setWidth(initialWidthI + "px");
            this._oInternalVizChart.setHeight(initialHeightI + "px");
        }
        if (this._oInternalVizChart.$()) {
            this._oInternalVizChart.$().height(this._oInternalVizChart.getHeight());
            this._oInternalVizChart.$().width(this._oInternalVizChart.getWidth());
        }
    } else if (!vizDataset || vizDataset._emptyDataset){ // if there is no data, then there must be no VIZDataset. Charts will render "no data" then.
        this._oScrollContainer.setHeight("100%");
        this._oScrollContainer.setWidth("100%");
        if (this._oScrollContainer.$()) {
            this._oScrollContainer.$().height("100%");
            this._oScrollContainer.$().width("100%");
        }
    }

};

/**
 * Handler for the mobile orientationchange.
 * We just make sure that the chart is being resized properly !
 * @private
 */
sap.ca.ui.charts.Chart.prototype._onOrientationChange = function () {
    // For the moment only call onResize
    this._onResize();
};

/**
 * setter for subHeader in the Popover.
 *
 * @param {sap.m.Bar} oSubHeader new value for sub header
 * @public
 * @name sap.ca.ui.charts.Chart#setPopoverSubHeader
 * @function
 */
sap.ca.ui.charts.Chart.prototype.setPopoverSubHeader = function (oSubHeader) {
    if (oSubHeader && oSubHeader instanceof sap.m.Bar) {
        this._oChartPopover.setSubHeader(oSubHeader);
    }
};

/**
 * setter for footer in the Popover.
 *
 * @param {sap.m.Bar} oFooter new value for footer
 * @public
 * @name sap.ca.ui.charts.Chart#setPopoverFooter
 * @function
 */
sap.ca.ui.charts.Chart.prototype.setPopoverFooter = function (oFooter) {
    if (oFooter) {
        if (oFooter instanceof sap.m.Bar) {
            if (!jQuery.device.is.phone) {
                this._oChartPopover._oControl.setFooter(oFooter);
            } else {
                var oPage = new sap.m.Page({
                    showHeader:false,
                    showFooter:true,
                    footer:oFooter,
                    content:[this._oSelectedDataList.getControl()]
                });
                this._oChartPopover.destroyContent();
                this._oChartPopover.addContent(oPage);
            }
        }
        else if (oFooter instanceof sap.ui.core.Control){
            if (!jQuery.device.is.phone) {
                this._oChartPopover.addContent(oFooter);
            }else {
                oFooter.addStyleClass('sapCaUiPopOverFooter');
                var oPage = new sap.m.Page({
                    showHeader:false,
                    showFooter:false,
                    content:[this._oSelectedDataList.getControl(),oFooter]
                });
                this._oChartPopover.destroyContent();
                this._oChartPopover.addContent(oPage);
            }
        }
    }
};


/**
 * setter for aggregation noData in Viz Chart.
 *Control tree to display when there is no data available
 * @param {sap.ui.core.Control} oControl new value for aggregation noData
 * @public
 * @name sap.ca.ui.charts.Chart#setNoData
 * @function
 */
sap.ca.ui.charts.Chart.prototype.setNoData = function (oControl) {
    this._oInternalVizChart.setNoData(oControl);
    return this;
};
/**
 * Getter for aggregation noData in Viz Chart.
 * Control tree to display when there is no data available
 *
 * @return {sap.ui.core.Control} the value for aggregation noData
 * @public
 * @name sap.ca.ui.charts.Chart#getNoData
 * @function
 */
sap.ca.ui.charts.Chart.prototype.getNoData = function () {
    return this._oInternalVizChart.getNoData();
};

