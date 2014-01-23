/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.DualCombination.
jQuery.sap.declare("sap.viz.ui5.DualCombination");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseChart");


/**
 * Constructor for a new ui5/DualCombination.
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
 * <li>{@link #getGeneral general} : sap.viz.ui5.types.RootContainer</li>
 * <li>{@link #getInteraction interaction} : sap.viz.ui5.types.controller.Interaction</li>
 * <li>{@link #getTitle title} : sap.viz.ui5.types.Title</li>
 * <li>{@link #getLegendGroup legendGroup} : sap.viz.ui5.types.Legend</li>
 * <li>{@link #getLegend legend} : sap.viz.ui5.types.legend.Common</li>
 * <li>{@link #getToolTip toolTip} : sap.viz.ui5.types.Tooltip</li>
 * <li>{@link #getDataLabel dataLabel} : sap.viz.ui5.types.Datalabel</li>
 * <li>{@link #getYAxis yAxis} : sap.viz.ui5.types.Axis</li>
 * <li>{@link #getXAxis xAxis} : sap.viz.ui5.types.Axis</li>
 * <li>{@link #getBackground background} : sap.viz.ui5.types.Background</li>
 * <li>{@link #getPlotArea plotArea} : sap.viz.ui5.types.Combination</li>
 * <li>{@link #getYAxis2 yAxis2} : sap.viz.ui5.types.Axis</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.viz.ui5.DualCombination#event:selectData selectData} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.viz.ui5.DualCombination#event:deselectData deselectData} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.viz.ui5.DualCombination#event:showTooltip showTooltip} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.viz.ui5.DualCombination#event:hideTooltip hideTooltip} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.viz.ui5.DualCombination#event:initialized initialized} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.viz.ui5.core.BaseChart#constructor sap.viz.ui5.core.BaseChart}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Chart ui5/DualCombination
 * @extends sap.viz.ui5.core.BaseChart
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 * @name sap.viz.ui5.DualCombination
 */
sap.viz.ui5.core.BaseChart.extend("sap.viz.ui5.DualCombination", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	aggregations : {
    	"general" : {type : "sap.viz.ui5.types.RootContainer", multiple : false}, 
    	"interaction" : {type : "sap.viz.ui5.types.controller.Interaction", multiple : false}, 
    	"title" : {type : "sap.viz.ui5.types.Title", multiple : false}, 
    	"legendGroup" : {type : "sap.viz.ui5.types.Legend", multiple : false}, 
    	"legend" : {type : "sap.viz.ui5.types.legend.Common", multiple : false}, 
    	"toolTip" : {type : "sap.viz.ui5.types.Tooltip", multiple : false}, 
    	"dataLabel" : {type : "sap.viz.ui5.types.Datalabel", multiple : false}, 
    	"yAxis" : {type : "sap.viz.ui5.types.Axis", multiple : false}, 
    	"xAxis" : {type : "sap.viz.ui5.types.Axis", multiple : false}, 
    	"background" : {type : "sap.viz.ui5.types.Background", multiple : false}, 
    	"plotArea" : {type : "sap.viz.ui5.types.Combination", multiple : false}, 
    	"yAxis2" : {type : "sap.viz.ui5.types.Axis", multiple : false}
	},
	events : {
		"selectData" : {}, 
		"deselectData" : {}, 
		"showTooltip" : {}, 
		"hideTooltip" : {}, 
		"initialized" : {}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.DualCombination with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.DualCombination.extend
 * @function
 */

sap.viz.ui5.DualCombination.M_EVENTS = {'selectData':'selectData','deselectData':'deselectData','showTooltip':'showTooltip','hideTooltip':'hideTooltip','initialized':'initialized'};


/**
 * Getter for aggregation <code>general</code>.<br/>
 * Module sap.viz.modules.rootContainer
 * 
 * @return {sap.viz.ui5.types.RootContainer}
 * @public
 * @name sap.viz.ui5.DualCombination#getGeneral
 * @function
 */


/**
 * Setter for the aggregated <code>general</code>.
 * @param oGeneral {sap.viz.ui5.types.RootContainer}
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#setGeneral
 * @function
 */
	

/**
 * Destroys the general in the aggregation 
 * named <code>general</code>.
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#destroyGeneral
 * @function
 */


/**
 * Getter for aggregation <code>interaction</code>.<br/>
 * Module sap.viz.modules.controller.interaction
 * 
 * @return {sap.viz.ui5.types.controller.Interaction}
 * @public
 * @name sap.viz.ui5.DualCombination#getInteraction
 * @function
 */


/**
 * Setter for the aggregated <code>interaction</code>.
 * @param oInteraction {sap.viz.ui5.types.controller.Interaction}
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#setInteraction
 * @function
 */
	

/**
 * Destroys the interaction in the aggregation 
 * named <code>interaction</code>.
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#destroyInteraction
 * @function
 */


/**
 * Getter for aggregation <code>title</code>.<br/>
 * Module sap.viz.modules.title
 * 
 * @return {sap.viz.ui5.types.Title}
 * @public
 * @name sap.viz.ui5.DualCombination#getTitle
 * @function
 */


/**
 * Setter for the aggregated <code>title</code>.
 * @param oTitle {sap.viz.ui5.types.Title}
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#setTitle
 * @function
 */
	

/**
 * Destroys the title in the aggregation 
 * named <code>title</code>.
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#destroyTitle
 * @function
 */


/**
 * Getter for aggregation <code>legendGroup</code>.<br/>
 * Module sap.viz.modules.legend
 * 
 * @return {sap.viz.ui5.types.Legend}
 * @public
 * @name sap.viz.ui5.DualCombination#getLegendGroup
 * @function
 */


/**
 * Setter for the aggregated <code>legendGroup</code>.
 * @param oLegendGroup {sap.viz.ui5.types.Legend}
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#setLegendGroup
 * @function
 */
	

/**
 * Destroys the legendGroup in the aggregation 
 * named <code>legendGroup</code>.
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#destroyLegendGroup
 * @function
 */


/**
 * Getter for aggregation <code>legend</code>.<br/>
 * Module sap.viz.modules.legend.common
 * 
 * @return {sap.viz.ui5.types.legend.Common}
 * @public
 * @name sap.viz.ui5.DualCombination#getLegend
 * @function
 */


/**
 * Setter for the aggregated <code>legend</code>.
 * @param oLegend {sap.viz.ui5.types.legend.Common}
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#setLegend
 * @function
 */
	

/**
 * Destroys the legend in the aggregation 
 * named <code>legend</code>.
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#destroyLegend
 * @function
 */


/**
 * Getter for aggregation <code>toolTip</code>.<br/>
 * Module sap.viz.modules.tooltip
 * 
 * @return {sap.viz.ui5.types.Tooltip}
 * @public
 * @name sap.viz.ui5.DualCombination#getToolTip
 * @function
 */


/**
 * Setter for the aggregated <code>toolTip</code>.
 * @param oToolTip {sap.viz.ui5.types.Tooltip}
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#setToolTip
 * @function
 */
	

/**
 * Destroys the toolTip in the aggregation 
 * named <code>toolTip</code>.
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#destroyToolTip
 * @function
 */


/**
 * Getter for aggregation <code>dataLabel</code>.<br/>
 * Module sap.viz.modules.datalabel
 * 
 * @return {sap.viz.ui5.types.Datalabel}
 * @public
 * @name sap.viz.ui5.DualCombination#getDataLabel
 * @function
 */


/**
 * Setter for the aggregated <code>dataLabel</code>.
 * @param oDataLabel {sap.viz.ui5.types.Datalabel}
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#setDataLabel
 * @function
 */
	

/**
 * Destroys the dataLabel in the aggregation 
 * named <code>dataLabel</code>.
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#destroyDataLabel
 * @function
 */


/**
 * Getter for aggregation <code>yAxis</code>.<br/>
 * Module sap.viz.modules.axis
 * 
 * @return {sap.viz.ui5.types.Axis}
 * @public
 * @name sap.viz.ui5.DualCombination#getYAxis
 * @function
 */


/**
 * Setter for the aggregated <code>yAxis</code>.
 * @param oYAxis {sap.viz.ui5.types.Axis}
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#setYAxis
 * @function
 */
	

/**
 * Destroys the yAxis in the aggregation 
 * named <code>yAxis</code>.
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#destroyYAxis
 * @function
 */


/**
 * Getter for aggregation <code>xAxis</code>.<br/>
 * Module sap.viz.modules.axis
 * 
 * @return {sap.viz.ui5.types.Axis}
 * @public
 * @name sap.viz.ui5.DualCombination#getXAxis
 * @function
 */


/**
 * Setter for the aggregated <code>xAxis</code>.
 * @param oXAxis {sap.viz.ui5.types.Axis}
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#setXAxis
 * @function
 */
	

/**
 * Destroys the xAxis in the aggregation 
 * named <code>xAxis</code>.
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#destroyXAxis
 * @function
 */


/**
 * Getter for aggregation <code>background</code>.<br/>
 * Module sap.viz.modules.background
 * 
 * @return {sap.viz.ui5.types.Background}
 * @public
 * @name sap.viz.ui5.DualCombination#getBackground
 * @function
 */


/**
 * Setter for the aggregated <code>background</code>.
 * @param oBackground {sap.viz.ui5.types.Background}
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#setBackground
 * @function
 */
	

/**
 * Destroys the background in the aggregation 
 * named <code>background</code>.
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#destroyBackground
 * @function
 */


/**
 * Getter for aggregation <code>plotArea</code>.<br/>
 * Module sap.viz.modules.combination
 * 
 * @return {sap.viz.ui5.types.Combination}
 * @public
 * @name sap.viz.ui5.DualCombination#getPlotArea
 * @function
 */


/**
 * Setter for the aggregated <code>plotArea</code>.
 * @param oPlotArea {sap.viz.ui5.types.Combination}
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#setPlotArea
 * @function
 */
	

/**
 * Destroys the plotArea in the aggregation 
 * named <code>plotArea</code>.
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#destroyPlotArea
 * @function
 */


/**
 * Getter for aggregation <code>yAxis2</code>.<br/>
 * Module sap.viz.modules.axis
 * 
 * @return {sap.viz.ui5.types.Axis}
 * @public
 * @name sap.viz.ui5.DualCombination#getYAxis2
 * @function
 */


/**
 * Setter for the aggregated <code>yAxis2</code>.
 * @param oYAxis2 {sap.viz.ui5.types.Axis}
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#setYAxis2
 * @function
 */
	

/**
 * Destroys the yAxis2 in the aggregation 
 * named <code>yAxis2</code>.
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#destroyYAxis2
 * @function
 */


/**
 * Event fires when certain data point(s) is(are) selected, data context of selected item(s) would be passed in accordance with the following format.<code>{name: "selectData",data:[{
 * //selected element's detail
 * target:"Dom Element",//an object pointed to corresponding dom element
 * data:[{val: "...",//value of this element
 * ctx:{type:"Dimension"||"Measure"||"MND",
 * //for Dimension
 * path:{aa:"...",di:"...",dii:"..."},
 * //for Measure
 * path:{mg:"...",mi:"...",dii_a1:"...",dii_a2:"..."},
 * //for MND
 * path:{mg:"...",mi:"..."}
 * //path: analysis path
 * //aa: analysis axis index // 0 for analysis axis 1, 1 for analysis 2
 * //di: dimension index //zero based
 * //dii: dimension item index //zero based
 * //mg: measure group index // 0 for measure group 1,1 for measure group 2
 * //mi: measure index // measure index in measure group zero based
 * //dii_a1: each dii of di in analysis axis 1 index
 * //dii_a2: each dii of di in analysis axis 2 index
 * }},{
 * //for bubble, tagcloud and scatter, there will be more than one values in one selected element.
 * var:"...",ctx:"..."}]},{
 * //if under multi selection, there will be more than one selected elements
 * target:"...",data:["..."]}]} 
 *
 * @name sap.viz.ui5.DualCombination#selectData
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'selectData' event of this <code>sap.viz.ui5.DualCombination</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.viz.ui5.DualCombination</code>.<br/> itself. 
 *  
 * Event fires when certain data point(s) is(are) selected, data context of selected item(s) would be passed in accordance with the following format.<code>{name: "selectData",data:[{
 * //selected element's detail
 * target:"Dom Element",//an object pointed to corresponding dom element
 * data:[{val: "...",//value of this element
 * ctx:{type:"Dimension"||"Measure"||"MND",
 * //for Dimension
 * path:{aa:"...",di:"...",dii:"..."},
 * //for Measure
 * path:{mg:"...",mi:"...",dii_a1:"...",dii_a2:"..."},
 * //for MND
 * path:{mg:"...",mi:"..."}
 * //path: analysis path
 * //aa: analysis axis index // 0 for analysis axis 1, 1 for analysis 2
 * //di: dimension index //zero based
 * //dii: dimension item index //zero based
 * //mg: measure group index // 0 for measure group 1,1 for measure group 2
 * //mi: measure index // measure index in measure group zero based
 * //dii_a1: each dii of di in analysis axis 1 index
 * //dii_a2: each dii of di in analysis axis 2 index
 * }},{
 * //for bubble, tagcloud and scatter, there will be more than one values in one selected element.
 * var:"...",ctx:"..."}]},{
 * //if under multi selection, there will be more than one selected elements
 * target:"...",data:["..."]}]} 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.viz.ui5.DualCombination</code>.<br/> itself.
 *
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#attachSelectData
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'selectData' event of this <code>sap.viz.ui5.DualCombination</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#detachSelectData
 * @function
 */

/**
 * Fire event selectData to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @protected
 * @name sap.viz.ui5.DualCombination#fireSelectData
 * @function
 */


/**
 * Event fires when certain data point(s) is(are) deselected, data context of deselected item(s) would be passed in accordance with the following format.<code>{name: "deselectData",data:["---the same as selectedData---"]} 
 *
 * @name sap.viz.ui5.DualCombination#deselectData
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'deselectData' event of this <code>sap.viz.ui5.DualCombination</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.viz.ui5.DualCombination</code>.<br/> itself. 
 *  
 * Event fires when certain data point(s) is(are) deselected, data context of deselected item(s) would be passed in accordance with the following format.<code>{name: "deselectData",data:["---the same as selectedData---"]} 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.viz.ui5.DualCombination</code>.<br/> itself.
 *
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#attachDeselectData
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'deselectData' event of this <code>sap.viz.ui5.DualCombination</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#detachDeselectData
 * @function
 */

/**
 * Fire event deselectData to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @protected
 * @name sap.viz.ui5.DualCombination#fireDeselectData
 * @function
 */


/**
 * Event fires when the mouse hover onto the specific part of chart, data context of tooltip would be passed in accordance with the following format.<code>{name:"showTooltip",data:{body:[{
 * //data of one group
 * name:"...",val:[{
 * //data of one row
 * color:"...",label:"...",shape:"...",value:"..."},"..."]},"..."],footer:[{label:"...",value:"..."},"..."],plotArea:{
 * //this object specifies the plot area of the chart
 * height:"...",width:"...",x:"...",y:"..."},point:{
 * //this object specifies a point which affects the position of tooltip
 * x:"...",y:"..."}}} 
 *
 * @name sap.viz.ui5.DualCombination#showTooltip
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'showTooltip' event of this <code>sap.viz.ui5.DualCombination</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.viz.ui5.DualCombination</code>.<br/> itself. 
 *  
 * Event fires when the mouse hover onto the specific part of chart, data context of tooltip would be passed in accordance with the following format.<code>{name:"showTooltip",data:{body:[{
 * //data of one group
 * name:"...",val:[{
 * //data of one row
 * color:"...",label:"...",shape:"...",value:"..."},"..."]},"..."],footer:[{label:"...",value:"..."},"..."],plotArea:{
 * //this object specifies the plot area of the chart
 * height:"...",width:"...",x:"...",y:"..."},point:{
 * //this object specifies a point which affects the position of tooltip
 * x:"...",y:"..."}}} 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.viz.ui5.DualCombination</code>.<br/> itself.
 *
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#attachShowTooltip
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'showTooltip' event of this <code>sap.viz.ui5.DualCombination</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#detachShowTooltip
 * @function
 */

/**
 * Fire event showTooltip to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @protected
 * @name sap.viz.ui5.DualCombination#fireShowTooltip
 * @function
 */


/**
 * Event fires when the mouse hover out of the specific part of chart, no data is passed. 
 *
 * @name sap.viz.ui5.DualCombination#hideTooltip
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'hideTooltip' event of this <code>sap.viz.ui5.DualCombination</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.viz.ui5.DualCombination</code>.<br/> itself. 
 *  
 * Event fires when the mouse hover out of the specific part of chart, no data is passed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.viz.ui5.DualCombination</code>.<br/> itself.
 *
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#attachHideTooltip
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'hideTooltip' event of this <code>sap.viz.ui5.DualCombination</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#detachHideTooltip
 * @function
 */

/**
 * Fire event hideTooltip to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @protected
 * @name sap.viz.ui5.DualCombination#fireHideTooltip
 * @function
 */


/**
 * Event fires when the loading ends. To use the event listener when creating charts, you must use an event that is passed by the events option. For more information on events options, see the usrOptions section of the <a href="sap.viz.core.html#createViz" target="_blank">createViz</a> function in the API document. 
 *
 * @name sap.viz.ui5.DualCombination#initialized
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'initialized' event of this <code>sap.viz.ui5.DualCombination</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.viz.ui5.DualCombination</code>.<br/> itself. 
 *  
 * Event fires when the loading ends. To use the event listener when creating charts, you must use an event that is passed by the events option. For more information on events options, see the usrOptions section of the <a href="sap.viz.core.html#createViz" target="_blank">createViz</a> function in the API document. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.viz.ui5.DualCombination</code>.<br/> itself.
 *
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#attachInitialized
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'initialized' event of this <code>sap.viz.ui5.DualCombination</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.DualCombination#detachInitialized
 * @function
 */

/**
 * Fire event initialized to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.viz.ui5.DualCombination} <code>this</code> to allow method chaining
 * @protected
 * @name sap.viz.ui5.DualCombination#fireInitialized
 * @function
 */


// Start of sap/viz/ui5/DualCombination.js
sap.viz.ui5.DualCombination.prototype.getVIZChartType = function() {
  return "viz/dual_combination";
};

sap.viz.ui5.DualCombination.prototype.getGeneral = function() {
  return this._getOrCreate("general");
}
sap.viz.ui5.DualCombination.prototype.getInteraction = function() {
  return this._getOrCreate("interaction");
}
sap.viz.ui5.DualCombination.prototype.getTitle = function() {
  return this._getOrCreate("title");
}
sap.viz.ui5.DualCombination.prototype.getLegendGroup = function() {
  return this._getOrCreate("legendGroup");
}
sap.viz.ui5.DualCombination.prototype.getLegend = function() {
  return this._getOrCreate("legend");
}
sap.viz.ui5.DualCombination.prototype.getToolTip = function() {
  return this._getOrCreate("toolTip");
}
sap.viz.ui5.DualCombination.prototype.getDataLabel = function() {
  return this._getOrCreate("dataLabel");
}
sap.viz.ui5.DualCombination.prototype.getYAxis = function() {
  return this._getOrCreate("yAxis");
}
sap.viz.ui5.DualCombination.prototype.getXAxis = function() {
  return this._getOrCreate("xAxis");
}
sap.viz.ui5.DualCombination.prototype.getBackground = function() {
  return this._getOrCreate("background");
}
sap.viz.ui5.DualCombination.prototype.getPlotArea = function() {
  return this._getOrCreate("plotArea");
}
sap.viz.ui5.DualCombination.prototype.getYAxis2 = function() {
  return this._getOrCreate("yAxis2");
}
sap.viz.ui5.DualCombination.prototype.attachSelectData = function(oData, fnHandler, oListener) {
  return this._attachVIZEvent("selectData", oData, fnHandler, oListener);
};

sap.viz.ui5.DualCombination.prototype.detachSelectData = function(fnHandler, oListener) {
  return this._detachVIZEvent("selectData", fnHandler, oListener);
};

sap.viz.ui5.DualCombination.prototype.attachDeselectData = function(oData, fnHandler, oListener) {
  return this._attachVIZEvent("deselectData", oData, fnHandler, oListener);
};

sap.viz.ui5.DualCombination.prototype.detachDeselectData = function(fnHandler, oListener) {
  return this._detachVIZEvent("deselectData", fnHandler, oListener);
};

sap.viz.ui5.DualCombination.prototype.attachShowTooltip = function(oData, fnHandler, oListener) {
  return this._attachVIZEvent("showTooltip", oData, fnHandler, oListener);
};

sap.viz.ui5.DualCombination.prototype.detachShowTooltip = function(fnHandler, oListener) {
  return this._detachVIZEvent("showTooltip", fnHandler, oListener);
};

sap.viz.ui5.DualCombination.prototype.attachHideTooltip = function(oData, fnHandler, oListener) {
  return this._attachVIZEvent("hideTooltip", oData, fnHandler, oListener);
};

sap.viz.ui5.DualCombination.prototype.detachHideTooltip = function(fnHandler, oListener) {
  return this._detachVIZEvent("hideTooltip", fnHandler, oListener);
};

sap.viz.ui5.DualCombination.prototype.attachInitialized = function(oData, fnHandler, oListener) {
  return this._attachVIZEvent("initialized", oData, fnHandler, oListener);
};

sap.viz.ui5.DualCombination.prototype.detachInitialized = function(fnHandler, oListener) {
  return this._detachVIZEvent("initialized", fnHandler, oListener);
};

