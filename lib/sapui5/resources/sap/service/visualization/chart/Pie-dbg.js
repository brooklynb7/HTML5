/*!
 * CVOM HTML5 charts
 * 
 * 	(c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.service.visualization.chart.Pie.
jQuery.sap.declare("sap.service.visualization.chart.Pie");
jQuery.sap.require("sap.service.visualization.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new chart/Pie.
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
 * <li>{@link #getAllDeSelectable allDeSelectable} : boolean (default: true)</li>
 * <li>{@link #getAllSelectable allSelectable} : boolean (default: true)</li>
 * <li>{@link #getSelectionMode selectionMode} : string (default: 'single')</li>
 * <li>{@link #getLegendFirst legendFirst} : boolean (default: false)</li>
 * <li>{@link #getLegendDirection legendDirection} : string (default: 'right')</li>
 * <li>{@link #getLegendVerticalOffset legendVerticalOffset} : int (default: 0)</li>
 * <li>{@link #getLegendHorizontalOffset legendHorizontalOffset} : int (default: 0)</li>
 * <li>{@link #getDefaultSelectedSliceIndexes defaultSelectedSliceIndexes} : int[]</li>
 * <li>{@link #getSectorColors sectorColors} : string[] (default: ['#748CB2','#9CC677','#EACF5E','#F9AD79','#D16A7C','#8873A2','#3A95B3','#B6D949','#FDD36C','#F47958','#A65084','#0063B1','#0DA841','#FCB71D','#F05620','#B22D6E','#3C368E','\'#8FB2CF'])</li>
 * <li>{@link #getShowLegend showLegend} : boolean (default: true)</li>
 * <li>{@link #getLegendFormatString legendFormatString} : string[] (default: [''])</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getTitleHorizontalAlign titleHorizontalAlign} : string (default: 'center')</li>
 * <li>{@link #getSubTitle subTitle} : string</li>
 * <li>{@link #getSubTitleHorizontalAlign subTitleHorizontalAlign} : string (default: 'center')</li>
 * <li>{@link #getShowTitle showTitle} : boolean (default: true)</li>
 * <li>{@link #getTitleFormatString titleFormatString} : string (default: '')</li>
 * <li>{@link #getSubTitleFormatString subTitleFormatString} : string (default: '')</li>
 * <li>{@link #getTooltipTextFormatString tooltipTextFormatString} : string[]</li>
 * <li>{@link #getTooltipMainValueFormatString tooltipMainValueFormatString} : string[]</li>
 * <li>{@link #getTooltipSubValueFormatString tooltipSubValueFormatString} : string[]</li>
 * <li>{@link #getPieType pieType} : string (default: 'pie')</li></ul>
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
 * <li>{@link sap.service.visualization.chart.Pie#event:selectData selectData} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * 
 * Is used for show a Pie chart with feeding data. The API
 * provides data feeding, and a set of behavior of the pie chart.
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
 * @name sap.service.visualization.chart.Pie
 */
sap.ui.core.Control.extend("sap.service.visualization.chart.Pie", { metadata : {

	// ---- object ----
	deprecated : true,

	// ---- control specific ----
	library : "sap.service.visualization",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"height" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"allDeSelectable" : {type : "boolean", group : "Misc", defaultValue : true},
		"allSelectable" : {type : "boolean", group : "Misc", defaultValue : true},
		"selectionMode" : {type : "string", group : "Misc", defaultValue : 'single'},
		"legendFirst" : {type : "boolean", group : "Misc", defaultValue : false},
		"legendDirection" : {type : "string", group : "Misc", defaultValue : 'right'},
		"legendVerticalOffset" : {type : "int", group : "Misc", defaultValue : 0},
		"legendHorizontalOffset" : {type : "int", group : "Misc", defaultValue : 0},
		"defaultSelectedSliceIndexes" : {type : "int[]", group : "Misc", defaultValue : null},
		"sectorColors" : {type : "string[]", group : "Misc", defaultValue : ['#748CB2','#9CC677','#EACF5E','#F9AD79','#D16A7C','#8873A2','#3A95B3','#B6D949','#FDD36C','#F47958','#A65084','#0063B1','#0DA841','#FCB71D','#F05620','#B22D6E','#3C368E','\'#8FB2CF']},
		"showLegend" : {type : "boolean", group : "Misc", defaultValue : true},
		"legendFormatString" : {type : "string[]", group : "Misc", defaultValue : ['']},
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"titleHorizontalAlign" : {type : "string", group : "Misc", defaultValue : 'center'},
		"subTitle" : {type : "string", group : "Misc", defaultValue : null},
		"subTitleHorizontalAlign" : {type : "string", group : "Misc", defaultValue : 'center'},
		"showTitle" : {type : "boolean", group : "Misc", defaultValue : true},
		"titleFormatString" : {type : "string", group : "Misc", defaultValue : ''},
		"subTitleFormatString" : {type : "string", group : "Misc", defaultValue : ''},
		"tooltipTextFormatString" : {type : "string[]", group : "Misc", defaultValue : null},
		"tooltipMainValueFormatString" : {type : "string[]", group : "Misc", defaultValue : null},
		"tooltipSubValueFormatString" : {type : "string[]", group : "Misc", defaultValue : null},
		"pieType" : {type : "string", group : "Misc", defaultValue : 'pie'}
	},
	aggregations : {
    	"dataset" : {type : "sap.service.visualization.dataset.SimpleDMDataset", multiple : false}
	},
	events : {
		"selectData" : {}
	}
}});


/**
 * Creates a new subclass of class sap.service.visualization.chart.Pie with name <code>sClassName</code> 
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
 * @name sap.service.visualization.chart.Pie.extend
 * @function
 */

sap.service.visualization.chart.Pie.M_EVENTS = {'selectData':'selectData'};


/**
 * Getter for property <code>width</code>.
 * the chart width.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.service.visualization.chart.Pie#getWidth
 * @function
 */


/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setWidth
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
 * @name sap.service.visualization.chart.Pie#getHeight
 * @function
 */


/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setHeight
 * @function
 */

/**
 * Getter for property <code>allDeSelectable</code>.
 * deselect enabled, first click the slice it will break away from the pie, then click other place the slice will be back. To be deprecated.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>allDeSelectable</code>
 * @public
 * @name sap.service.visualization.chart.Pie#getAllDeSelectable
 * @function
 */


/**
 * Setter for property <code>allDeSelectable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bAllDeSelectable  new value for property <code>allDeSelectable</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setAllDeSelectable
 * @function
 */

/**
 * Getter for property <code>allSelectable</code>.
 * the sectors selectable or not. To be deprecated.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>allSelectable</code>
 * @public
 * @name sap.service.visualization.chart.Pie#getAllSelectable
 * @function
 */


/**
 * Setter for property <code>allSelectable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bAllSelectable  new value for property <code>allSelectable</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setAllSelectable
 * @function
 */

/**
 * Getter for property <code>selectionMode</code>.
 * supported value: (single|multiple), single: you can just select one slice; multiple : multiple slices can be selected. To be deprecated.
 *
 * Default value is <code>single</code>
 *
 * @return {string} the value of property <code>selectionMode</code>
 * @public
 * @name sap.service.visualization.chart.Pie#getSelectionMode
 * @function
 */


/**
 * Setter for property <code>selectionMode</code>.
 *
 * Default value is <code>single</code> 
 *
 * @param {string} sSelectionMode  new value for property <code>selectionMode</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setSelectionMode
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
 * @name sap.service.visualization.chart.Pie#getLegendFirst
 * @function
 */


/**
 * Setter for property <code>legendFirst</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bLegendFirst  new value for property <code>legendFirst</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setLegendFirst
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
 * @name sap.service.visualization.chart.Pie#getLegendDirection
 * @function
 */


/**
 * Setter for property <code>legendDirection</code>.
 *
 * Default value is <code>right</code> 
 *
 * @param {string} sLegendDirection  new value for property <code>legendDirection</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setLegendDirection
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
 * @name sap.service.visualization.chart.Pie#getLegendVerticalOffset
 * @function
 */


/**
 * Setter for property <code>legendVerticalOffset</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iLegendVerticalOffset  new value for property <code>legendVerticalOffset</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setLegendVerticalOffset
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
 * @name sap.service.visualization.chart.Pie#getLegendHorizontalOffset
 * @function
 */


/**
 * Setter for property <code>legendHorizontalOffset</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iLegendHorizontalOffset  new value for property <code>legendHorizontalOffset</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setLegendHorizontalOffset
 * @function
 */

/**
 * Getter for property <code>defaultSelectedSliceIndexes</code>.
 * the default selected slice index.To be deprecated.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int[]} the value of property <code>defaultSelectedSliceIndexes</code>
 * @public
 * @name sap.service.visualization.chart.Pie#getDefaultSelectedSliceIndexes
 * @function
 */


/**
 * Setter for property <code>defaultSelectedSliceIndexes</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int[]} aDefaultSelectedSliceIndexes  new value for property <code>defaultSelectedSliceIndexes</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setDefaultSelectedSliceIndexes
 * @function
 */

/**
 * Getter for property <code>sectorColors</code>.
 * for example['#000000','#000000','#000000'],//array of color string, if supply not enough, reuse the laset one.
 *
 * Default value is <code>['#748CB2','#9CC677','#EACF5E','#F9AD79','#D16A7C','#8873A2','#3A95B3','#B6D949','#FDD36C','#F47958','#A65084','#0063B1','#0DA841','#FCB71D','#F05620','#B22D6E','#3C368E','#8FB2CF]</code>
 *
 * @return {string[]} the value of property <code>sectorColors</code>
 * @public
 * @name sap.service.visualization.chart.Pie#getSectorColors
 * @function
 */


/**
 * Setter for property <code>sectorColors</code>.
 *
 * Default value is <code>['#748CB2','#9CC677','#EACF5E','#F9AD79','#D16A7C','#8873A2','#3A95B3','#B6D949','#FDD36C','#F47958','#A65084','#0063B1','#0DA841','#FCB71D','#F05620','#B22D6E','#3C368E','#8FB2CF]</code> 
 *
 * @param {string[]} aSectorColors  new value for property <code>sectorColors</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setSectorColors
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
 * @name sap.service.visualization.chart.Pie#getShowLegend
 * @function
 */


/**
 * Setter for property <code>showLegend</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowLegend  new value for property <code>showLegend</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setShowLegend
 * @function
 */

/**
 * Getter for property <code>legendFormatString</code>.
 * the format style for legend. the format for legend default is [''], numeric :'0.00', Currency: '$"#,##0.00"' ,percent:'0.00%',Date:'M/dd/yyyy', time:'h:mm:ss A/P'. If feed not enough then reuse the last one.
 *
 * Default value is <code>['']</code>
 *
 * @return {string[]} the value of property <code>legendFormatString</code>
 * @public
 * @name sap.service.visualization.chart.Pie#getLegendFormatString
 * @function
 */


/**
 * Setter for property <code>legendFormatString</code>.
 *
 * Default value is <code>['']</code> 
 *
 * @param {string[]} aLegendFormatString  new value for property <code>legendFormatString</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setLegendFormatString
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
 * @name sap.service.visualization.chart.Pie#getTitle
 * @function
 */


/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setTitle
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
 * @name sap.service.visualization.chart.Pie#getTitleHorizontalAlign
 * @function
 */


/**
 * Setter for property <code>titleHorizontalAlign</code>.
 *
 * Default value is <code>center</code> 
 *
 * @param {string} sTitleHorizontalAlign  new value for property <code>titleHorizontalAlign</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setTitleHorizontalAlign
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
 * @name sap.service.visualization.chart.Pie#getSubTitle
 * @function
 */


/**
 * Setter for property <code>subTitle</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSubTitle  new value for property <code>subTitle</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setSubTitle
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
 * @name sap.service.visualization.chart.Pie#getSubTitleHorizontalAlign
 * @function
 */


/**
 * Setter for property <code>subTitleHorizontalAlign</code>.
 *
 * Default value is <code>center</code> 
 *
 * @param {string} sSubTitleHorizontalAlign  new value for property <code>subTitleHorizontalAlign</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setSubTitleHorizontalAlign
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
 * @name sap.service.visualization.chart.Pie#getShowTitle
 * @function
 */


/**
 * Setter for property <code>showTitle</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowTitle  new value for property <code>showTitle</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setShowTitle
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
 * @name sap.service.visualization.chart.Pie#getTitleFormatString
 * @function
 */


/**
 * Setter for property <code>titleFormatString</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sTitleFormatString  new value for property <code>titleFormatString</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setTitleFormatString
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
 * @name sap.service.visualization.chart.Pie#getSubTitleFormatString
 * @function
 */


/**
 * Setter for property <code>subTitleFormatString</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sSubTitleFormatString  new value for property <code>subTitleFormatString</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setSubTitleFormatString
 * @function
 */

/**
 * Getter for property <code>tooltipTextFormatString</code>.
 * the format style for text tool tip. same with legend.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string[]} the value of property <code>tooltipTextFormatString</code>
 * @public
 * @name sap.service.visualization.chart.Pie#getTooltipTextFormatString
 * @function
 */


/**
 * Setter for property <code>tooltipTextFormatString</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string[]} aTooltipTextFormatString  new value for property <code>tooltipTextFormatString</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setTooltipTextFormatString
 * @function
 */

/**
 * Getter for property <code>tooltipMainValueFormatString</code>.
 * the format style for main tool tip. same with legend.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string[]} the value of property <code>tooltipMainValueFormatString</code>
 * @public
 * @name sap.service.visualization.chart.Pie#getTooltipMainValueFormatString
 * @function
 */


/**
 * Setter for property <code>tooltipMainValueFormatString</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string[]} aTooltipMainValueFormatString  new value for property <code>tooltipMainValueFormatString</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setTooltipMainValueFormatString
 * @function
 */

/**
 * Getter for property <code>tooltipSubValueFormatString</code>.
 * the format style for sub tool tip. same with legend.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string[]} the value of property <code>tooltipSubValueFormatString</code>
 * @public
 * @name sap.service.visualization.chart.Pie#getTooltipSubValueFormatString
 * @function
 */


/**
 * Setter for property <code>tooltipSubValueFormatString</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string[]} aTooltipSubValueFormatString  new value for property <code>tooltipSubValueFormatString</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setTooltipSubValueFormatString
 * @function
 */

/**
 * Getter for property <code>pieType</code>.
 * pie|donut
 *
 * Default value is <code>pie</code>
 *
 * @return {string} the value of property <code>pieType</code>
 * @public
 * @name sap.service.visualization.chart.Pie#getPieType
 * @function
 */


/**
 * Setter for property <code>pieType</code>.
 *
 * Default value is <code>pie</code> 
 *
 * @param {string} sPieType  new value for property <code>pieType</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setPieType
 * @function
 */
	
/**
 * Getter for aggregation <code>dataset</code>.<br/>
 * chart use this aggregation to get data feed.
 * 
 * @return {sap.service.visualization.dataset.SimpleDMDataset}
 * @public
 * @name sap.service.visualization.chart.Pie#getDataset
 * @function
 */

/**
 * Setter for the aggregated <code>dataset</code>.
 * @param oDataset {sap.service.visualization.dataset.SimpleDMDataset}
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#setDataset
 * @function
 */


/**
 * Destroys  in the aggregation 
 * named <code>dataset</code>.
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#destroyDataset
 * @function
 */

/**
 * this event is bind to chart, the chart will response all the information of the slice of you selected on pie. 
 *
 * @name sap.service.visualization.chart.Pie#selectData
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'selectData' event of this <code>sap.service.visualization.chart.Pie</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.service.visualization.chart.Pie</code>.<br/> itself. 
 *  
 * this event is bind to chart, the chart will response all the information of the slice of you selected on pie. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.service.visualization.chart.Pie</code>.<br/> itself.
 *
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#attachSelectData
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'selectData' event of this <code>sap.service.visualization.chart.Pie</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.chart.Pie#detachSelectData
 * @function
 */


/**
 * Fire event selectData to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @protected
 * @name sap.service.visualization.chart.Pie#fireSelectData
 * @function
 */

// Start of sap/service/visualization/chart/Pie.js
/*!
 * @copyright@
 */
jQuery.sap.require("sap.service.visualization.chart.ChartSourceCode.libs.json2");
jQuery.sap.require("sap.service.visualization.chart.ChartSourceCode.libs.saprivbase");
jQuery.sap.require("sap.service.visualization.chart.ChartSourceCode.libs.sapcommonglobalization");
jQuery.sap.require("sap.service.visualization.chart.ChartSourceCode.libs.saprivmodules");
jQuery.sap.require("sap.ui.core.theming.Parameters");

sap.service.visualization.chart.Pie.prototype.isNumber = function(value){
	var patt = /^(0|-?[1-9]\d*)$|^(0|-?[1-9]\d*)\.(\d+)$/;
	return patt.exec(value);
};

sap.service.visualization.chart.Pie.prototype.setWidth = function(width) {

	this.setProperty("width", width);
	return this;
};

sap.service.visualization.chart.Pie.prototype.setHeight = function(height) {

	this.setProperty("height", height);
	
	return this;
};

sap.service.visualization.chart.Pie.prototype.setAllSelectable = function(allSelectable) {

	this.setProperty("allSelectable", allSelectable);
	
	if (this.pie != undefined) {
		
		var chartOption = {
			allSelectable : allSelectable
		};
		
		this.pie.updateProperties(chartOption);
	}
	
	return this;
};

sap.service.visualization.chart.Pie.prototype.setAllDeSelectable = function(allDeSelectable) {

	this.setProperty("allDeSelectable", allDeSelectable);
	
	if (this.pie != undefined) {
		
		var chartOption = {
			allDeSelectable : allDeSelectable
		};
		
		this.pie.updateProperties(chartOption);
	}
	
	return this;
};

sap.service.visualization.chart.Pie.prototype.setSelectionMode = function(selectionMode) {
	
	this.setProperty("selectionMode", selectionMode);
	
	if (this.pie != undefined) {
	
		if ((selectionMode != 'multiple') && (selectionMode != 'single')) {
			selectionMode = 'single';
		}
		var chartOption = {
			selectionMode : selectionMode,
		};
		
		this.pie.updateProperties(chartOption);
	}
	
	return this;
};

sap.service.visualization.chart.Pie.prototype.setLegendFirst = function(legendFirst) {

	this.setProperty("legendFirst", legendFirst);
	
	if (this.pie != undefined) {
		
		var chartOption = {
			layout:{
				legendFirst: legendFirst
			} 
		};
		
		this.pie.updateProperties(chartOption);
	}
	
	return this;
};

sap.service.visualization.chart.Pie.prototype.setLegendDirection = function(legendDirection) {

	this.setProperty("legendDirection", legendDirection);

	if (this.pie != undefined) {
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

		this.pie.updateProperties(chartOption);
	}

	return this;
};

sap.service.visualization.chart.Pie.prototype.setLegendVerticalOffset = function(legendVerticalOffset) {

	this.setProperty("legendVerticalOffset", legendVerticalOffset);
	
	if (this.pie != undefined) {
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
		this.pie.updateProperties(chartOption);
	}
	
	return this;
};

sap.service.visualization.chart.Pie.prototype.setLegendHorizontalOffset = function(legendHorizontalOffset) {

	this.setProperty("legendHorizontalOffset", legendHorizontalOffset);
	
	if (this.pie != undefined) {
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
		this.pie.updateProperties(chartOption);
	}
	
	return this;
};

sap.service.visualization.chart.Pie.prototype.setDefaultSelectedSliceIndexes = function(defaultSelectedSliceIndexes) {
	
	this.setProperty("defaultSelectedSliceIndexes", defaultSelectedSliceIndexes);
	
	if (this.pie != undefined) {
		
		var chartOption = {
			defaultSelectedSectorIndexes : defaultSelectedSliceIndexes
		};
		
		this.pie.updateProperties(chartOption);
	}
	
	return this;
};

sap.service.visualization.chart.Pie.prototype.setSectorColors = function(sectorColors) {
	
	this.setProperty("sectorColors", sectorColors);
	
	if (this.pie != undefined) {
		
		var chartOption = {
			measures:[{
				sectorColors:sectorColors
			}]
		};
		
		this.pie.updateProperties(chartOption);
	}
	
	return this;
};

sap.service.visualization.chart.Pie.prototype.setLegendFormatString = function(legendFormatString) {
	
	this.setProperty("legendFormatString", legendFormatString);
	
	if (this.pie != undefined) {
		
		var chartOption = {
			legend:{
				legendFormatString : legendFormatString
			}
		};
		
		this.pie.updateProperties(chartOption);
	}
	
	return this;
};

sap.service.visualization.chart.Pie.prototype.setTitleFormatString = function(titleFormatString) {
	
	this.setProperty("titleFormatString", titleFormatString);
	
	if (this.pie != undefined) {
		
		var chartOption = {
			title:{
				main:{
				 	formatString : titleFormatString
				}
			}
		};
		
		this.pie.updateProperties(chartOption);
	}
	
	return this;
};

sap.service.visualization.chart.Pie.prototype.setSubTitleFormatString = function(subTitleFormatString) {
	
	this.setProperty("subTitleFormatString", subTitleFormatString);
	
	if (this.pie != undefined) {
		
		var chartOption = {
			title:{
				main:{
				 	formatString : subTitleFormatString
				}
			}
		};
		
		this.pie.updateProperties(chartOption);
	}
	
	return this;
};

sap.service.visualization.chart.Pie.prototype.setTooltipTextFormatString = function(tooltipTextFormatString) {
	
	this.setProperty("tooltipTextFormatString", tooltipTextFormatString);
	
	if (this.pie != undefined) {
		
		var chartOption = {
			tooltip:{
				text:{
					formatSting :tooltipTextFormatString
			    }
			}
		};
		
		this.pie.updateProperties(chartOption);
	}
	
	return this;
};


sap.service.visualization.chart.Pie.prototype.setTooltipMainValueFormatString = function(tooltipMainValueFormatString) {
	
	this.setProperty("tooltipMainValueFormatString", tooltipMainValueFormatString);
	
	if (this.pie != undefined) {
		
		var chartOption = {
			tooltip:{
				mainValue:{
				 	formatSting :tooltipMainValueFormatString
				}
			}
		};
		
		this.pie.updateProperties(chartOption);
	}
	
	return this;
};


sap.service.visualization.chart.Pie.prototype.setTooltipSubValueFormatString = function(tooltipSubValueFormatString) {
	
	this.setProperty("tooltipSubValueFormatString", tooltipSubValueFormatString);
	
	if (this.pie != undefined) {
		
		var chartOption = {
			tooltip:{
				subValue:{
					formatSting :tooltipSubValueFormatString
				}
			}
		};
		
		this.pie.updateProperties(chartOption);
	}
	
	return this;
};


sap.service.visualization.chart.Pie.prototype.setShowLegend = function(showLegend) {
	
	this.setProperty("showLegend", showLegend);
	
	if (this.pie != undefined) {
		
		var chartOption = {
			legend: {
				visible: (showLegend != undefined) ? showLegend : true
			},
		};
		
		this.pie.updateProperties(chartOption);
	}
	
	return this;
};

sap.service.visualization.chart.Pie.prototype.setLegendFirst = function(legendFirst) {
	
	this.setProperty("legendFirst", legendFirst);
	
	if (this.pie != undefined) {
		
		var chartOption = {
			layout: {
				legendFirst : (legendFirst != undefined) ? legendFirst : true
			},
		};
		
		this.pie.updateProperties(chartOption);
	}
	
	return this;
};

sap.service.visualization.chart.Pie.prototype.setTitle = function(title) {
	
	this.setProperty("title", title);
	
	if (this.pie != undefined) {
	
		var chartOption = {
			title: {
				main: {
					text: title
				}
			}
		};
		
		this.pie.updateProperties(chartOption);
	}
	
	return this;
};

sap.service.visualization.chart.Pie.prototype.setSubTitle = function(subTitle) {

	this.setProperty("subTitle", subTitle);
	
	if (this.pie != undefined) {
		
		var chartOption = {
			title: {
				sub: {
					text: subTitle
				}
			}
		};
		
		this.pie.updateProperties(chartOption);
	}
	
	return this;
};

sap.service.visualization.chart.Pie.prototype.setShowTitle = function(showTitle) {

	this.setProperty("showTitle", showTitle);

	if (this.pie != undefined) {

		var chartOption = {
			title : {
				main : {
					visible:(showTitle != undefined) ? showTitle : true
				},
				sub:{
					visible:(showTitle != undefined) ? showTitle : true
				}
			}
		};

		this.pie.updateProperties(chartOption);
	}

	return this;
};

sap.service.visualization.chart.Pie.prototype.setTitleHorizontalAlign = function(titleHorizontalAlign) {

	this.setProperty("titleHorizontalAlign", titleHorizontalAlign);

	if (this.pie != undefined) {

		var chartOption = {
			title : {
				mian : {
					HorizontalAlign: titleHorizontalAlign
				}
			}
		};

		this.pie.updateProperties(chartOption);
	}

	return this;
};

sap.service.visualization.chart.Pie.prototype.setSubTitleHorizontalAlign = function(subTitleHorizontalAlign) {

	this.setProperty("subTitleHorizontalAlign", subTitleHorizontalAlign);

	if (this.pie != undefined) {

		var chartOption = {
			title : {
				sub:{
					HorizontalAlign: subTitleHorizontalAlign
				}
			}
		};

		this.pie.updateProperties(chartOption);
	}

	return this;
};

sap.service.visualization.chart.Pie.prototype.setPieType= function(pieType) {

	this.setProperty("pieType", pieType);
	
	if (this.pie != undefined) {
		
		var chartOption = {
				pieType : pieType
		};
		
		this.pie.updateProperties(chartOption);
	}
	
	return this;
};
			
sap.service.visualization.chart.Pie.prototype.onAfterRendering = function(oEvent) {

	var Environment = sap.riv.viz.Environment;
		
	// Create chart after lazy load finishes
	var dataset = this.getDataset().dataset;
	var control = this; 
	var renderTo = this.getId(); 

	var selectionMode = this.getSelectionMode();
	var allDeSelectable = this.getAllDeSelectable();
	var allSelectable = this.getAllSelectable();
	var legendDirection = this.getLegendDirection();
	var legendVerticalOffset = this.getLegendVerticalOffset();
	var legendHorizontalOffset = this.getLegendHorizontalOffset();
	var showLegend = this.getShowLegend();
	var legendFirst = this.getLegendFirst();
	var legendFormatString = this.getLegendFormatString();
	var defaultSelectedSliceIndexes = this.getDefaultSelectedSliceIndexes();
	var sectorColors = this.getSectorColors();
	var title = this.getTitle();
	var titleHorizontalAlign = this.getTitleHorizontalAlign();
	var subTitle = this.getSubTitle();
	var subTitleHorizontalAlign = this.getSubTitleHorizontalAlign();
	var showTitle= this.getShowTitle();
	var titleFormatString = this.getTitleFormatString();
	var subTitleFormatString = this.getSubTitleFormatString();
	var tooltipTextFormatString = this.getTooltipTextFormatString();
	var tooltipMainValueFormatString = this.getTooltipMainValueFormatString();
	var tooltipSubValueFormatString = this.getTooltipSubValueFormatString();
	
	var pieType = this.getPieType();
	this.pie = null;

	var themes = new sap.service.visualization.Themings().getCorrespondingThemings("Pie");
	var bgColor = themes.bgColor;
	var chartPadding = themes.chartPadding;

	// legend properties
	var legendObj = {};
	legendObj.visible = showLegend;
	legendObj.position = legendDirection;
	legendObj.verticalOffset = legendVerticalOffset;
	legendObj.horizontalOffset = legendHorizontalOffset;
	legendObj.formatString = legendFormatString;
	legendObj.titleFont = themes.legendTitleFont;
	legendObj.titleColor = themes.legendTitleFontColor;
	legendObj.labelFont = themes.legendFont;
	legendObj.labelColor = themes.legendColor;

	// main title properties
	var mainTitle = {};
	mainTitle.text = title;
	mainTitle.visible = showTitle;
	mainTitle.font  = themes.mainTitleFont;
	mainTitle.color = themes.mainTitleColor;
	mainTitle.horizontalAlign = titleHorizontalAlign;
	mainTitle.formatString = titleFormatString;

	// sub title properties
	var subTitleObj = {};
	subTitleObj.text = subTitle;
	subTitleObj.visible = showTitle;
	subTitleObj.font  = themes.subTitleFont;
	subTitleObj.color = themes.subTitleColor;
	subTitleObj.horizontalAlign = subTitleHorizontalAlign;
	subTitleObj.formatString = subTitleFormatString;

	// tool tip themes
	var toolTipMainValueFont = themes.toolTipMainValueFont;
	var toolTipMainValueColor = themes.toolTipMainValueColor;
	var toolTipSubValueFont = themes.toolTipSubValueFont;
	var toolTipSubValueColor = themes.toolTipSubValueColor;
	var toolTipTextFont = themes.toolTipTextFont;
	var toolTipTextColor = themes.toolTipTextColor;
	
	Environment.initialize({
		'locale' : 'en_US',
		'log' : 'debug'
	});
	var chartOption = {
		layout:{
				legendFirst: legendFirst,
				padding : chartPadding
			}, 
		background: {
			color: bgColor
		},
		tooltip: {
			mainValue: {
				font: toolTipMainValueFont,
				color: toolTipMainValueColor,
				formatString: tooltipMainValueFormatString
			},
			subValue: {
				font: toolTipSubValueFont,
				color: toolTipSubValueColor,
				formatString: tooltipSubValueFormatString
			},
			text: {
				font: toolTipTextFont,
				color: toolTipTextColor,
				formatString: tooltipTextFormatString
			}
		},
		legend:legendObj,
		title: {
			main: mainTitle,
			sub: subTitleObj
		},
		sort : 'asc',
		selectionMode : selectionMode,
		allSelectable : allSelectable,
		allDeSelectable : allDeSelectable,
		selectedDataIndexes : defaultSelectedSliceIndexes,
		pieType : (pieType == undefined) ? 'pie' : pieType,
		measures:[{
		 sectorColors:sectorColors
		}]
	};
    control.pie = new sap.riv.viz.PieChart(jQuery.sap.byId(renderTo), chartOption, dataset);
	control.pie.addListener('selectData', function(evt){
		control.fireSelectData({
			Id: renderTo,
			Data: evt.data,
			EventName: evt.name
		});
	});
	// Apply new theme when theme changes	
	var applyCurrentThemeToChart = function(pie){
	
		var themes = new sap.service.visualization.Themings().getCorrespondingThemings("Pie");
		var bgColor = themes.bgColor;
		
		//title theme
		var mainTitleFont = themes.mainTitleFont;
		var mainTitleColor = themes.mainTitleColor;
		var subTitleObjFont = themes.subTitleFont;
		var subTitleObjColor = themes.subTitleColor;
		
		//legend theme
		var legendTitleFont = themes.legendTitleFont;
		var legendTitleFontColor = themes.legendTitleFontColor;
		var legendFont = themes.legendFont;
		var legendColor = themes.legendColor;
		
		//tooltip theme
			// tool tip themes
		var toolTipMainValueFont = themes.toolTipMainValueFont;
		var toolTipMainValueColor = themes.toolTipMainValueColor;
		var toolTipSubValueFont = themes.toolTipSubValueFont;
		var toolTipSubValueColor = themes.toolTipSubValueColor;
		var toolTipTextFont = themes.toolTipTextFont;
		var toolTipTextColor = themes.toolTipTextColor;
	
		var chartOption = {
			background: {
				color: bgColor
			},
			tooltip: {
				text: {
					font: toolTipTextFont,
					color: toolTipTextColor
				},
				mainValue: {
					font: toolTipMainValueFont,
					color: toolTipMainValueColor
				},
				subValue: {
					font: toolTipSubValueFont,
					color: toolTipSubValueColor
				}
			},
			legend : {
			    labelFont: legendFont,
			    labelColor: legendColor,
			    titleFont: legendTitleFont,
			    titleColor: legendTitleFontColor
			},
			title:{
				main:{
				        color: mainTitleColor,
				        font: mainTitleFont
				},
			    sub:{
				        color: subTitleObjColor,
				        font: subTitleObjFont
			    }
			}	
		};
		pie.updateProperties(chartOption);
    };
    sap.ui.getCore().attachThemeChanged(function(evt){
        applyCurrentThemeToChart(control.pie);
    });
};