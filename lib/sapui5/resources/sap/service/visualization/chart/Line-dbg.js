/*!
 * CVOM HTML5 charts
 * 
 * 	(c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.service.visualization.chart.Line.
jQuery.sap.declare("sap.service.visualization.chart.Line");
jQuery.sap.require("sap.service.visualization.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new chart/Line.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getDeselectEnabled deselectEnabled} : boolean (default: true)</li>
 * <li>{@link #getSelectionMode selectionMode} : string (default: 'single')</li>
 * <li>{@link #getDefaultSelectedItems defaultSelectedItems} : object[]</li>
 * <li>{@link #getLegendFirst legendFirst} : boolean (default: false)</li>
 * <li>{@link #getLegendDirection legendDirection} : string (default: 'right')</li>
 * <li>{@link #getLegendVerticalOffset legendVerticalOffset} : int (default: 0)</li>
 * <li>{@link #getLegendHorizontalOffset legendHorizontalOffset} : int (default: 0)</li>
 * <li>{@link #getMeasures measures} : object[]</li>
 * <li>{@link #getLineMarkerAndThickness lineMarkerAndThickness} : object (default: { lineMarkerSize: 10,lineThickness: 1})</li>
 * <li>{@link #getShowLegend showLegend} : boolean (default: true)</li>
 * <li>{@link #getLegendFormatString legendFormatString} : string[] (default: [''])</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getTitleHorizontalAlign titleHorizontalAlign} : string (default: 'center')</li>
 * <li>{@link #getSubTitle subTitle} : string</li>
 * <li>{@link #getSubTitleHorizontalAlign subTitleHorizontalAlign} : string (default: 'center')</li>
 * <li>{@link #getShowTitle showTitle} : boolean (default: true)</li>
 * <li>{@link #getTitleFormatString titleFormatString} : string (default: '')</li>
 * <li>{@link #getSubTitleFormatString subTitleFormatString} : string (default: '')</li>
 * <li>{@link #getXAxis xAxis} : object[]</li>
 * <li>{@link #getYAxis yAxis} : object[]</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getDataset dataset} : sap.service.visualization.dataset.SimpleDMDataset</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.service.visualization.chart.Line#event:selectData selectData} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * 
 * Is used for show a Line chart with feeding data. The API
 * provides data feeding, and a set of behavior of the line chart.
 * 
 * @extends sap.ui.core.Control
 *
 * @author sap visualization 
 * @version 1.10.0
 *
 * @constructor   
 * @public
 * @deprecated Since version 1.7.2. 
 * This library has been deprecated in favor of the new charting library sap.viz. Please migrate as soon as possible as this older library will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.service.visualization.chart.Line
 */
sap.ui.core.Control.extend("sap.service.visualization.chart.Line", { metadata : {

	// ---- object ----
	deprecated : true,

	// ---- control specific ----
	library : "sap.service.visualization",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"height" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"deselectEnabled" : {type : "boolean", group : "Misc", defaultValue : true},
		"selectionMode" : {type : "string", group : "Misc", defaultValue : 'single'},
		"defaultSelectedItems" : {type : "object[]", group : "Misc", defaultValue : null},
		"legendFirst" : {type : "boolean", group : "Misc", defaultValue : false},
		"legendDirection" : {type : "string", group : "Misc", defaultValue : 'right'},
		"legendVerticalOffset" : {type : "int", group : "Misc", defaultValue : 0},
		"legendHorizontalOffset" : {type : "int", group : "Misc", defaultValue : 0},
		"measures" : {type : "object[]", group : "Misc", defaultValue : null},
		"lineMarkerAndThickness" : {type : "object", group : "Misc", defaultValue : { lineMarkerSize: 10,lineThickness: 1}},
		"showLegend" : {type : "boolean", group : "Misc", defaultValue : true},
		"legendFormatString" : {type : "string[]", group : "Misc", defaultValue : ['']},
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"titleHorizontalAlign" : {type : "string", group : "Misc", defaultValue : 'center'},
		"subTitle" : {type : "string", group : "Misc", defaultValue : null},
		"subTitleHorizontalAlign" : {type : "string", group : "Misc", defaultValue : 'center'},
		"showTitle" : {type : "boolean", group : "Misc", defaultValue : true},
		"titleFormatString" : {type : "string", group : "Misc", defaultValue : ''},
		"subTitleFormatString" : {type : "string", group : "Misc", defaultValue : ''},
		"xAxis" : {type : "object[]", group : "Misc", defaultValue : null},
		"yAxis" : {type : "object[]", group : "Misc", defaultValue : null}
	},
	aggregations : {
    	"dataset" : {type : "sap.service.visualization.dataset.SimpleDMDataset", multiple : false}
	},
	events : {
		"selectData" : {}
	}
}});


/**
 * Creates a new subclass of class sap.service.visualization.chart.Line with name <code>sClassName</code> 
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
 * @name sap.service.visualization.chart.Line.extend
 * @function
 */

sap.service.visualization.chart.Line.M_EVENTS = {'selectData':'selectData'};


/**
 * Getter for property <code>width</code>.
 * the chart width.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.service.visualization.chart.Line#getWidth
 * @function
 */


/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setWidth
 * @function
 */

/**
 * Getter for property <code>height</code>.
 * the chart height.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.service.visualization.chart.Line#getHeight
 * @function
 */


/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setHeight
 * @function
 */

/**
 * Getter for property <code>deselectEnabled</code>.
 * deselect enabled, first click the slice it will break away from the pie, then click other place the slice will be back.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>deselectEnabled</code>
 * @public
 * @name sap.service.visualization.chart.Line#getDeselectEnabled
 * @function
 */


/**
 * Setter for property <code>deselectEnabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bDeselectEnabled  new value for property <code>deselectEnabled</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setDeselectEnabled
 * @function
 */

/**
 * Getter for property <code>selectionMode</code>.
 * default value is false, single: you can just select one slice; none : no slice can be selected.
 *
 * Default value is <code>single</code>
 *
 * @return {string} the value of property <code>selectionMode</code>
 * @public
 * @name sap.service.visualization.chart.Line#getSelectionMode
 * @function
 */


/**
 * Setter for property <code>selectionMode</code>.
 *
 * Default value is <code>single</code> 
 *
 * @param {string} sSelectionMode  new value for property <code>selectionMode</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setSelectionMode
 * @function
 */

/**
 * Getter for property <code>defaultSelectedItems</code>.
 * the default selected item index. for each object should be like: {measureIndex: 0, dimensionItemIndex : 3}
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object[]} the value of property <code>defaultSelectedItems</code>
 * @public
 * @name sap.service.visualization.chart.Line#getDefaultSelectedItems
 * @function
 */


/**
 * Setter for property <code>defaultSelectedItems</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object[]} aDefaultSelectedItems  new value for property <code>defaultSelectedItems</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setDefaultSelectedItems
 * @function
 */

/**
 * Getter for property <code>legendFirst</code>.
 * first ensure to plot legend, then the chart area plot.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>legendFirst</code>
 * @public
 * @name sap.service.visualization.chart.Line#getLegendFirst
 * @function
 */


/**
 * Setter for property <code>legendFirst</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bLegendFirst  new value for property <code>legendFirst</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setLegendFirst
 * @function
 */

/**
 * Getter for property <code>legendDirection</code>.
 * the position of legend located at, left|right|top|bottom.
 *
 * Default value is <code>right</code>
 *
 * @return {string} the value of property <code>legendDirection</code>
 * @public
 * @name sap.service.visualization.chart.Line#getLegendDirection
 * @function
 */


/**
 * Setter for property <code>legendDirection</code>.
 *
 * Default value is <code>right</code> 
 *
 * @param {string} sLegendDirection  new value for property <code>legendDirection</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setLegendDirection
 * @function
 */

/**
 * Getter for property <code>legendVerticalOffset</code>.
 * the offset of the legend, used to adjust the position of legend.if left or right, positive, legend will move up,minus down.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>legendVerticalOffset</code>
 * @public
 * @name sap.service.visualization.chart.Line#getLegendVerticalOffset
 * @function
 */


/**
 * Setter for property <code>legendVerticalOffset</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iLegendVerticalOffset  new value for property <code>legendVerticalOffset</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setLegendVerticalOffset
 * @function
 */

/**
 * Getter for property <code>legendHorizontalOffset</code>.
 * the offset of the legend, used to adjust the position of legend. if position top or bottom, positive, legend will move right, minus left.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>legendHorizontalOffset</code>
 * @public
 * @name sap.service.visualization.chart.Line#getLegendHorizontalOffset
 * @function
 */


/**
 * Setter for property <code>legendHorizontalOffset</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iLegendHorizontalOffset  new value for property <code>legendHorizontalOffset</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setLegendHorizontalOffset
 * @function
 */

/**
 * Getter for property <code>measures</code>.
 * for each object:{ valueAxis: 0, should be valid index in your value axis (can be xAxis or yAxis),markerSymbol:circle,// circle|| triangle||diamond, lineThickness: 3, // Set the line size of measure member.}.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object[]} the value of property <code>measures</code>
 * @public
 * @name sap.service.visualization.chart.Line#getMeasures
 * @function
 */


/**
 * Setter for property <code>measures</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object[]} aMeasures  new value for property <code>measures</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setMeasures
 * @function
 */

/**
 * Getter for property <code>lineMarkerAndThickness</code>.
 * for each object:{ lineMarkerSize: 0,It is for all measures in line chart. When it is too large, it can only draw limited size. The default value is undefined means that the size is auto-calculated by viz chart. lineThickness: It is for all measures in line chart.}.
 *
 * Default value is <code>{ lineMarkerSize: 10,lineThickness: 1}</code>
 *
 * @return {object} the value of property <code>lineMarkerAndThickness</code>
 * @public
 * @name sap.service.visualization.chart.Line#getLineMarkerAndThickness
 * @function
 */


/**
 * Setter for property <code>lineMarkerAndThickness</code>.
 *
 * Default value is <code>{ lineMarkerSize: 10,lineThickness: 1}</code> 
 *
 * @param {object} oLineMarkerAndThickness  new value for property <code>lineMarkerAndThickness</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setLineMarkerAndThickness
 * @function
 */

/**
 * Getter for property <code>showLegend</code>.
 * show/hide legend.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showLegend</code>
 * @public
 * @name sap.service.visualization.chart.Line#getShowLegend
 * @function
 */


/**
 * Setter for property <code>showLegend</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowLegend  new value for property <code>showLegend</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setShowLegend
 * @function
 */

/**
 * Getter for property <code>legendFormatString</code>.
 * the format style for legend. the format for title number default is [''], numeric :'0.00', Currency: '$"#,##0.00"' ,percent:'0.00%',Date:'M/dd/yyyy', time:'h:mm:ss A/P'. If feed not enough then reuse the last one.
 *
 * Default value is <code>['']</code>
 *
 * @return {string[]} the value of property <code>legendFormatString</code>
 * @public
 * @name sap.service.visualization.chart.Line#getLegendFormatString
 * @function
 */


/**
 * Setter for property <code>legendFormatString</code>.
 *
 * Default value is <code>['']</code> 
 *
 * @param {string[]} aLegendFormatString  new value for property <code>legendFormatString</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setLegendFormatString
 * @function
 */

/**
 * Getter for property <code>title</code>.
 * title text.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.service.visualization.chart.Line#getTitle
 * @function
 */


/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setTitle
 * @function
 */

/**
 * Getter for property <code>titleHorizontalAlign</code>.
 * the title align left|center|right.
 *
 * Default value is <code>center</code>
 *
 * @return {string} the value of property <code>titleHorizontalAlign</code>
 * @public
 * @name sap.service.visualization.chart.Line#getTitleHorizontalAlign
 * @function
 */


/**
 * Setter for property <code>titleHorizontalAlign</code>.
 *
 * Default value is <code>center</code> 
 *
 * @param {string} sTitleHorizontalAlign  new value for property <code>titleHorizontalAlign</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setTitleHorizontalAlign
 * @function
 */

/**
 * Getter for property <code>subTitle</code>.
 * sub title text.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>subTitle</code>
 * @public
 * @name sap.service.visualization.chart.Line#getSubTitle
 * @function
 */


/**
 * Setter for property <code>subTitle</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSubTitle  new value for property <code>subTitle</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setSubTitle
 * @function
 */

/**
 * Getter for property <code>subTitleHorizontalAlign</code>.
 * the title align left|center|right.
 *
 * Default value is <code>center</code>
 *
 * @return {string} the value of property <code>subTitleHorizontalAlign</code>
 * @public
 * @name sap.service.visualization.chart.Line#getSubTitleHorizontalAlign
 * @function
 */


/**
 * Setter for property <code>subTitleHorizontalAlign</code>.
 *
 * Default value is <code>center</code> 
 *
 * @param {string} sSubTitleHorizontalAlign  new value for property <code>subTitleHorizontalAlign</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setSubTitleHorizontalAlign
 * @function
 */

/**
 * Getter for property <code>showTitle</code>.
 * show/hide title.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showTitle</code>
 * @public
 * @name sap.service.visualization.chart.Line#getShowTitle
 * @function
 */


/**
 * Setter for property <code>showTitle</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowTitle  new value for property <code>showTitle</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setShowTitle
 * @function
 */

/**
 * Getter for property <code>titleFormatString</code>.
 * the format style for main title. numeric :'0.00', Currency: '$"#,##0.00"' ,percent:'0.00%',Date:'M/dd/yyyy', time:'h:mm:ss A/P'.
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>titleFormatString</code>
 * @public
 * @name sap.service.visualization.chart.Line#getTitleFormatString
 * @function
 */


/**
 * Setter for property <code>titleFormatString</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sTitleFormatString  new value for property <code>titleFormatString</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setTitleFormatString
 * @function
 */

/**
 * Getter for property <code>subTitleFormatString</code>.
 * the format style for sub title. numeric :'0.00', Currency: '$"#,##0.00"' ,percent:'0.00%',Date:'M/dd/yyyy', time:'h:mm:ss A/P'.
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>subTitleFormatString</code>
 * @public
 * @name sap.service.visualization.chart.Line#getSubTitleFormatString
 * @function
 */


/**
 * Setter for property <code>subTitleFormatString</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sSubTitleFormatString  new value for property <code>subTitleFormatString</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setSubTitleFormatString
 * @function
 */

/**
 * Getter for property <code>xAxis</code>.
 * for each object:{
 * showMajorTicks : true,// default value = undefined,show/hide major grid line and only works on value axis
 * showMinorTicks : true,// default value = false,show/hide minor grid line and only works on value axis. If showMajor is false, this option will not work
 * title : 'X Axis Title',
 * titleFormatString : '', //refer to legend number format.
 * labelsFormatString : [''],//refer to legend number format.
 * showTitle : true,//show or hide title showLabels : true, show or hide labels
 * gridLine : {
 * showMajor : false, //the major grid line
 * majorThickness : 1, the thickness for major tick.
 * showMinor : false, //the minor grid line.
 * minorThickness : 1, the thickness of minor tick.
 * showSub : true, //default value=false, show/hide sub grid line and only works on dimension axis }
 * }.
 * For major and minor ticks, they only works on value axis, it takes effect but the behavior is unexpected.
 * Set the grid line releated properties.For value axis, only showMajor and showMinor options work.
 * If showSub is set to true on value axis, it takes effect but the behavior is unexpected.
 * For dimension axis, only showSub option works.
 * If showMajor and showMinor options are set to true on dimension axis, it takes effect but the behavior is unexpected.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object[]} the value of property <code>xAxis</code>
 * @public
 * @name sap.service.visualization.chart.Line#getXAxis
 * @function
 */


/**
 * Setter for property <code>xAxis</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object[]} aXAxis  new value for property <code>xAxis</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setXAxis
 * @function
 */

/**
 * Getter for property <code>yAxis</code>.
 * the same as xAxis.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object[]} the value of property <code>yAxis</code>
 * @public
 * @name sap.service.visualization.chart.Line#getYAxis
 * @function
 */


/**
 * Setter for property <code>yAxis</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object[]} aYAxis  new value for property <code>yAxis</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setYAxis
 * @function
 */
	
/**
 * Getter for aggregation <code>dataset</code>.<br/>
 * chart use this aggregation to get data feed.
 * 
 * @return {sap.service.visualization.dataset.SimpleDMDataset}
 * @public
 * @name sap.service.visualization.chart.Line#getDataset
 * @function
 */

/**
 * Setter for the aggregated <code>dataset</code>.
 * @param oDataset {sap.service.visualization.dataset.SimpleDMDataset}
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#setDataset
 * @function
 */


/**
 * Destroys  in the aggregation 
 * named <code>dataset</code>.
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#destroyDataset
 * @function
 */

/**
 * this event is bind to chart, the chart will response all the information of the rectangle of you selected on column. 
 *
 * @name sap.service.visualization.chart.Line#selectData
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'selectData' event of this <code>sap.service.visualization.chart.Line</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.service.visualization.chart.Line</code>.<br/> itself. 
 *  
 * this event is bind to chart, the chart will response all the information of the rectangle of you selected on column. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.service.visualization.chart.Line</code>.<br/> itself.
 *
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#attachSelectData
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'selectData' event of this <code>sap.service.visualization.chart.Line</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Line#detachSelectData
 * @function
 */


/**
 * Fire event selectData to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @protected
 * @name sap.service.visualization.chart.Line#fireSelectData
 * @function
 */

// Start of sap/service/visualization/chart/Line.js
/*!
 * @copyright@
 */
jQuery.sap.require("sap.service.visualization.chart.ChartSourceCode.libs.json2");
jQuery.sap.require("sap.service.visualization.chart.ChartSourceCode.libs.saprivbase");
jQuery.sap.require("sap.service.visualization.chart.ChartSourceCode.libs.sapcommonglobalization");
jQuery.sap.require("sap.service.visualization.chart.ChartSourceCode.libs.saprivmodules");

jQuery.sap.require("sap.ui.core.theming.Parameters");

sap.service.visualization.chart.Line.prototype.isNumber = function(value) {
	var patt = /^(0|-?[1-9]\d*)$|^(0|-?[1-9]\d*)\.(\d+)$/;
	return patt.exec(value);
};

sap.service.visualization.chart.Line.prototype.setWidth = function(width) {

	this.setProperty("width", width);
	return this;
};

sap.service.visualization.chart.Line.prototype.setHeight = function(height) {

	this.setProperty("height", height);
	return this;
};

sap.service.visualization.chart.Line.prototype.setDeselectEnabled = function(deselectEnabled) {

	this.setProperty("deselectEnabled", deselectEnabled);

	if (this.line != undefined) {

		var chartOption = {
			selectbility : {
				deSelectable : (deselectEnabled != undefined) ? deselectEnabled : true
			}
		};

		this.line.updateProperties(chartOption);
	}

	return this;
};

sap.service.visualization.chart.Line.prototype.setSelectionMode = function(selectionMode) {

	this.setProperty("selectionMode", selectionMode);

	if (this.line != undefined) {
		if ((selectionMode != 'multiple') && (selectionMode != 'single')) {
			selectionMode = 'single';
		}
		var chartOption = {
			selectbility : {
				selectionMode : selectionMode,
			}
		};

		this.line.updateProperties(chartOption);
	}

	return this;
};

sap.service.visualization.chart.Line.prototype.setDefaultSelectedItems = function(defaultSelectedItems) {

	this.setProperty("defaultSelectedItems", defaultSelectedItems);

	if (this.line != undefined) {

		var chartOption = {
			selectability : {
				defaultSelectedItems : defaultSelectedItems
			},
		};

		this.line.updateProperties(chartOption);
	}

	return this;
};

sap.service.visualization.chart.Line.prototype.setLegendDirection = function(legendDirection) {

	this.setProperty("legendDirection", legendDirection);

	if (this.line != undefined) {
		var legendVerticalOffset = this.getLegendVerticalOffset();
		var legendHorizontalOffset = this.getLegendHorizontalOffset();
		if (legendDirection == 'left'||legendDirection == 'right') {
			legendVerticalOffset = (this.isNumber(legendVerticalOffset)) ? parseInt(legendVerticalOffset) : 0;;
		} else{
			legendHorizontalOffset = (this.isNumber(legendHorizontalOffset)) ? parseInt(legendHorizontalOffset) : 0;
		}

		var chartOption = {
			legend : {
				position : legendDirection,
				verticalOffset : legendVerticalOffset,
				horizontalOffset : legendHorizontalOffset
			}
		};

		this.line.updateProperties(chartOption);
	}

	return this;
};

sap.service.visualization.chart.Line.prototype.setLegendVerticalOffset = function(legendVerticalOffset) {

	this.setProperty("legendVerticalOffset", legendVerticalOffset);
	
	if (this.line != undefined) {
		var legendDirection = this.getLegendDirection();
		var legendVerticalOffset = 0;
		var chartOption;
		if (legendDirection == 'left'|| legendDirection=='right'){
			legendVerticalOffset = (this.isNumber(legendVerticalOffset))? parseInt(legendVerticalOffset) : 0;
			chartOption = {
				legend: {
					verticalOffset: legendVerticalOffset,
				}
			};
		}
		this.line.updateProperties(chartOption);
	}
	
	return this;
};

sap.service.visualization.chart.Line.prototype.setLegendHorizontalOffset = function(legendHorizontalOffset) {

	this.setProperty("legendHorizontalOffset", legendHorizontalOffset);
	
	if (this.line != undefined) {
		var legendDirection = this.getLegendDirection();
		var legendHorizontalOffset = 0;
		var chartOption;
		if (legendDirection == 'top'|| legendDirection=='left'){
			legendHorizontalOffset = (this.isNumber(legendHorizontalOffset))? parseInt(legendHorizontalOffset) : 0;
			chartOption = {
				legend: {
					horizontalOffset: legendHorizontalOffset,
				}
			};
		}
		this.line.updateProperties(chartOption);
	}
	
	return this;
};

sap.service.visualization.chart.Line.prototype.setLegendFirst = function(legendFirst) {

	this.setProperty("legendFirst", legendFirst);

	if (this.line != undefined) {

		var legendFirst = this.getLegendFirst();

		var chartOption = {
			layout : {
				legendFirst : (legendFirst != undefined) ? legendFirst : true
			}
		};
		this.line.updateProperties(chartOption);
	}

	return this;

};

sap.service.visualization.chart.Line.prototype.setLegendFormatString = function(legendFormatString) {
	
	this.setProperty("legendFormatString", legendFormatString);
	
	if (this.line != undefined) {
		
		var chartOption = {
			legend:{
				legendFormatString : legendFormatString
			}
		};
		
		this.line.updateProperties(chartOption);
	}
	
	return this;
};

sap.service.visualization.chart.Line.prototype.setTitleFormatString = function(titleFormatString) {
	
	this.setProperty("titleFormatString", titleFormatString);
	
	if (this.line != undefined) {
		
		var chartOption = {
			title:{
				main:{
				 	formatString : titleFormatString
				}
			}
		};
		
		this.line.updateProperties(chartOption);
	}
	
	return this;
};

sap.service.visualization.chart.Line.prototype.setSubTitleFormatString = function(subTitleFormatString) {
	
	this.setProperty("subTitleFormatString", subTitleFormatString);
	
	if (this.line != undefined) {
		
		var chartOption = {
			title:{
				main:{
				 	formatString : subTitleFormatString
				}
			}
		};
		
		this.line.updateProperties(chartOption);
	}
	
	return this;
};

sap.service.visualization.chart.Line.prototype.setMeasures = function(measures) {

	this.setProperty("measures", measures);

	if (this.line != undefined) {

		var chartOption = {
			measures : measures
		};

		this.line.updateProperties(chartOption);
	}

	return this;
};

sap.service.visualization.chart.Line.prototype.setLineMarkerAndThickness = function(lineMarkerAndThickness) {

	this.setProperty("lineMarkerAndThickness", lineMarkerAndThickness);

	if (this.line != undefined) {

		var chartOption = {
			line : lineMarkerAndThickness
		};

		this.line.updateProperties(chartOption);
	}

	return this;
};

sap.service.visualization.chart.Line.prototype.setShowLegend = function(showLegend) {

	this.setProperty("showLegend", showLegend);

	if (this.line != undefined) {

		var chartOption = {
			legend : {
				visible : (showLegend != undefined) ? showLegend : true
			},
		};

		this.line.updateProperties(chartOption);
	}

	return this;
};

sap.service.visualization.chart.Line.prototype.setTitle = function(title) {

	this.setProperty("title", title);

	if (this.line != undefined) {

		var chartOption = {
			title : {
				main : {
					text : title
				}
			}
		};

		this.line.updateProperties(chartOption);
	}

	return this;
};

sap.service.visualization.chart.Line.prototype.setSubTitle = function(subTitle) {

	this.setProperty("subTitle", subTitle);

	if (this.line != undefined) {

		var chartOption = {
			title : {
				sub : {
					text : subTitle
				}
			}
		};

		this.line.updateProperties(chartOption);
	}

	return this;
};


sap.service.visualization.chart.Line.prototype.setShowTitle = function(showTitle) {

	this.setProperty("showTitle", showTitle);

	if (this.line != undefined) {

		var chartOption = {
			title:{
				main:{
					visible: showTitle
				},
				sub:{
					visible: showTitle
				}
			}
		};

		this.line.updateProperties(chartOption);
	}

	return this;
};


sap.service.visualization.chart.Line.prototype.setXAxis = function(xAxis) {

	this.setProperty("xAxis", xAxis);

	if (this.line != undefined) {

		var chartOption = {

			xAxis : xAxis
		};

		this.line.updateProperties(chartOption);
	}

	return this;
};

sap.service.visualization.chart.Line.prototype.setYAxis = function(yAxis) {

	this.setProperty("yAxis", yAxis);

	if (this.line != undefined) {

		var chartOption = {

			yAxis : yAxis
		};

		this.line.updateProperties(chartOption);
	}

	return this;
};

sap.service.visualization.chart.Line.prototype.setTitleHorizontalAlign = function(titleHorizontalAlign) {

	this.setProperty("titleHorizontalAlign", titleHorizontalAlign);

	if (this.line != undefined) {

		var chartOption = {
			title : {
				main : {
					HorizontalAlign: titleHorizontalAlign
				}
			}
		};

		this.line.updateProperties(chartOption);
	}

	return this;
};

sap.service.visualization.chart.Line.prototype.setSubTitleHorizontalAlign = function(subTitleHorizontalAlign) {

	this.setProperty("subTitleHorizontalAlign", subTitleHorizontalAlign);

	if (this.line != undefined) {

		var chartOption = {
			title : {
				sub:{
					HorizontalAlign: subTitleHorizontalAlign
				}
			}
		};

		this.line.updateProperties(chartOption);
	}

	return this;
};

sap.service.visualization.chart.Line.prototype.onAfterRendering = function(oEvent) {

	var control = this;
	var renderTo = this.getId();	
	//aggregations
	var dataset = this.getDataset().dataset;
    //get line options for line chart
    var option = new sap.service.visualization.ChartOption();
    var chartOption= option.getXYChartOption(control, 'Line');
    
    sap.riv.viz.Environment.initialize({
			'locale' : 'en_US',
			'log' : 'debug'
	});
   
    control.line = new sap.riv.viz.LineChart(jQuery.sap.byId(renderTo), chartOption, dataset);
	control.line.addListener('selectData', function(evt) {
		control.fireSelectData({
			Id : renderTo,
			Data : evt.data,
			EventName : evt.name
		});
	});

	sap.ui.getCore().attachThemeChanged(function(evt) {
		var themes = new sap.service.visualization.Themings();
		themes.applyCurrentThemeToXYChart(control,'Line');
	});
};