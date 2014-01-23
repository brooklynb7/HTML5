/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.makit.CombinationChart.
jQuery.sap.declare("sap.makit.CombinationChart");
jQuery.sap.require("sap.makit.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new CombinationChart.
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
 * <li>{@link #getCategoryAxis categoryAxis} : object</li>
 * <li>{@link #getPrimaryValueAxis primaryValueAxis} : object</li>
 * <li>{@link #getSecondaryValueAxis secondaryValueAxis} : object</li>
 * <li>{@link #getValueBubble valueBubble} : object</li>
 * <li>{@link #getShowRangeSelector showRangeSelector} : boolean (default: true)</li>
 * <li>{@link #getLegendPosition legendPosition} : sap.makit.LegendPosition (default: sap.makit.LegendPosition.Left)</li>
 * <li>{@link #getPrimaryColorPalette primaryColorPalette} : any</li>
 * <li>{@link #getSecondaryColorPalette secondaryColorPalette} : any</li>
 * <li>{@link #getShowTableValue showTableValue} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCategoryRegions categoryRegions} : sap.makit.Category[]</li>
 * <li>{@link #getLayers layers} : sap.makit.Layer[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.makit.CombinationChart#event:doubletap doubletap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.makit.CombinationChart#event:tap tap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.makit.CombinationChart#event:longpress longpress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The CombinationChart control.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @since 1.12
 * @name sap.makit.CombinationChart
 */
sap.ui.core.Control.extend("sap.makit.CombinationChart", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"getSelectedCategory", "getNumberOfCategories", "getSelectedCategoryGroup"
	],

	// ---- control specific ----
	library : "sap.makit",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"categoryAxis" : {type : "object", group : "Misc", defaultValue : null},
		"primaryValueAxis" : {type : "object", group : "Misc", defaultValue : null},
		"secondaryValueAxis" : {type : "object", group : "Misc", defaultValue : null},
		"valueBubble" : {type : "object", group : "Misc", defaultValue : null},
		"showRangeSelector" : {type : "boolean", group : "Appearance", defaultValue : true},
		"legendPosition" : {type : "sap.makit.LegendPosition", group : "Misc", defaultValue : sap.makit.LegendPosition.Left},
		"primaryColorPalette" : {type : "any", group : "Misc", defaultValue : null},
		"secondaryColorPalette" : {type : "any", group : "Misc", defaultValue : null},
		"showTableValue" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	aggregations : {
    	"categoryRegions" : {type : "sap.makit.Category", multiple : true, singularName : "categoryRegion"}, 
    	"layers" : {type : "sap.makit.Layer", multiple : true, singularName : "layer"}
	},
	events : {
		"doubletap" : {}, 
		"tap" : {}, 
		"longpress" : {}
	}
}});


/**
 * Creates a new subclass of class sap.makit.CombinationChart with name <code>sClassName</code> 
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
 * @name sap.makit.CombinationChart.extend
 * @function
 */

sap.makit.CombinationChart.M_EVENTS = {'doubletap':'doubletap','tap':'tap','longpress':'longpress'};


/**
 * Getter for property <code>width</code>.
 * The width of the Chart
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.makit.CombinationChart#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * The height of the Chart
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.makit.CombinationChart#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#setHeight
 * @function
 */


/**
 * Getter for property <code>categoryAxis</code>.
 * Category Axis property of the Chart. Accepts only an instance of CategoryAxis element.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>categoryAxis</code>
 * @public
 * @name sap.makit.CombinationChart#getCategoryAxis
 * @function
 */

/**
 * Setter for property <code>categoryAxis</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oCategoryAxis  new value for property <code>categoryAxis</code>
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#setCategoryAxis
 * @function
 */


/**
 * Getter for property <code>primaryValueAxis</code>.
 * Property of the Combination Chart's primary Value Axis. Accept only an instance of ValueAxis element.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>primaryValueAxis</code>
 * @public
 * @name sap.makit.CombinationChart#getPrimaryValueAxis
 * @function
 */

/**
 * Setter for property <code>primaryValueAxis</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oPrimaryValueAxis  new value for property <code>primaryValueAxis</code>
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#setPrimaryValueAxis
 * @function
 */


/**
 * Getter for property <code>secondaryValueAxis</code>.
 * Property of the Combination Chart's secondary Value Axis. Accept only an instance of ValueAxis element.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>secondaryValueAxis</code>
 * @public
 * @name sap.makit.CombinationChart#getSecondaryValueAxis
 * @function
 */

/**
 * Setter for property <code>secondaryValueAxis</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oSecondaryValueAxis  new value for property <code>secondaryValueAxis</code>
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#setSecondaryValueAxis
 * @function
 */


/**
 * Getter for property <code>valueBubble</code>.
 * Value Bubble property of the Chart. Accept only an instance of ValueBubble element.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>valueBubble</code>
 * @public
 * @name sap.makit.CombinationChart#getValueBubble
 * @function
 */

/**
 * Setter for property <code>valueBubble</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oValueBubble  new value for property <code>valueBubble</code>
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#setValueBubble
 * @function
 */


/**
 * Getter for property <code>showRangeSelector</code>.
 * Specify whether the range selector should be visible.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showRangeSelector</code>
 * @public
 * @name sap.makit.CombinationChart#getShowRangeSelector
 * @function
 */

/**
 * Setter for property <code>showRangeSelector</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowRangeSelector  new value for property <code>showRangeSelector</code>
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#setShowRangeSelector
 * @function
 */


/**
 * Getter for property <code>legendPosition</code>.
 * Legend position for Pie /Donut chart only.
 *
 * Default value is <code>Left</code>
 *
 * @return {sap.makit.LegendPosition} the value of property <code>legendPosition</code>
 * @public
 * @name sap.makit.CombinationChart#getLegendPosition
 * @function
 */

/**
 * Setter for property <code>legendPosition</code>.
 *
 * Default value is <code>Left</code> 
 *
 * @param {sap.makit.LegendPosition} oLegendPosition  new value for property <code>legendPosition</code>
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#setLegendPosition
 * @function
 */


/**
 * Getter for property <code>primaryColorPalette</code>.
 * Allow a combination chart’s primary axis color palette to be modified without affecting other charts' color palette. If not set, the chart will use the default color palette defined in the theme.
 * Accept an array of color in string format or hex format. e.g.
 * 0xff0000
 * "red"
 * "rgb(255,0,0)"
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>primaryColorPalette</code>
 * @public
 * @name sap.makit.CombinationChart#getPrimaryColorPalette
 * @function
 */

/**
 * Setter for property <code>primaryColorPalette</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oPrimaryColorPalette  new value for property <code>primaryColorPalette</code>
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#setPrimaryColorPalette
 * @function
 */


/**
 * Getter for property <code>secondaryColorPalette</code>.
 * Allow a combination chart’s secondary axis color palette to be modified without affecting other charts' color palette. If not set, the chart will use the default color palette defined in the theme.
 * Accept an array of color in string format or hex format. e.g.
 * 0xff0000
 * "red"
 * "rgb(255,0,0)"
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>secondaryColorPalette</code>
 * @public
 * @name sap.makit.CombinationChart#getSecondaryColorPalette
 * @function
 */

/**
 * Setter for property <code>secondaryColorPalette</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oSecondaryColorPalette  new value for property <code>secondaryColorPalette</code>
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#setSecondaryColorPalette
 * @function
 */


/**
 * Getter for property <code>showTableValue</code>.
 * Toggle to display the table value on a Bar chart. Only applies to Bar chart.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showTableValue</code>
 * @public
 * @name sap.makit.CombinationChart#getShowTableValue
 * @function
 */

/**
 * Setter for property <code>showTableValue</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowTableValue  new value for property <code>showTableValue</code>
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#setShowTableValue
 * @function
 */


/**
 * Getter for aggregation <code>categoryRegions</code>.<br/>
 * Data region property of the chart's Categories
 * 
 * @return {sap.makit.Category[]}
 * @public
 * @name sap.makit.CombinationChart#getCategoryRegions
 * @function
 */


/**
 * Inserts a categoryRegion into the aggregation named <code>categoryRegions</code>.
 *
 * @param {sap.makit.Category}
 *          oCategoryRegion the categoryRegion to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the categoryRegion should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the categoryRegion is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the categoryRegion is inserted at 
 *             the last position        
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#insertCategoryRegion
 * @function
 */

/**
 * Adds some categoryRegion <code>oCategoryRegion</code> 
 * to the aggregation named <code>categoryRegions</code>.
 *
 * @param {sap.makit.Category}
 *            oCategoryRegion the categoryRegion to add; if empty, nothing is inserted
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#addCategoryRegion
 * @function
 */

/**
 * Removes an categoryRegion from the aggregation named <code>categoryRegions</code>.
 *
 * @param {int | string | sap.makit.Category} vCategoryRegion the categoryRegion to remove or its index or id
 * @return {sap.makit.Category} the removed categoryRegion or null
 * @public
 * @name sap.makit.CombinationChart#removeCategoryRegion
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>categoryRegions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.makit.Category[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.makit.CombinationChart#removeAllCategoryRegions
 * @function
 */

/**
 * Checks for the provided <code>sap.makit.Category</code> in the aggregation named <code>categoryRegions</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.makit.Category}
 *            oCategoryRegion the categoryRegion whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.makit.CombinationChart#indexOfCategoryRegion
 * @function
 */
	

/**
 * Destroys all the categoryRegions in the aggregation 
 * named <code>categoryRegions</code>.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#destroyCategoryRegions
 * @function
 */


/**
 * Getter for aggregation <code>layers</code>.<br/>
 * The collection of charts
 * 
 * @return {sap.makit.Layer[]}
 * @public
 * @name sap.makit.CombinationChart#getLayers
 * @function
 */


/**
 * Inserts a layer into the aggregation named <code>layers</code>.
 *
 * @param {sap.makit.Layer}
 *          oLayer the layer to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the layer should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the layer is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the layer is inserted at 
 *             the last position        
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#insertLayer
 * @function
 */

/**
 * Adds some layer <code>oLayer</code> 
 * to the aggregation named <code>layers</code>.
 *
 * @param {sap.makit.Layer}
 *            oLayer the layer to add; if empty, nothing is inserted
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#addLayer
 * @function
 */

/**
 * Removes an layer from the aggregation named <code>layers</code>.
 *
 * @param {int | string | sap.makit.Layer} vLayer the layer to remove or its index or id
 * @return {sap.makit.Layer} the removed layer or null
 * @public
 * @name sap.makit.CombinationChart#removeLayer
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>layers</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.makit.Layer[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.makit.CombinationChart#removeAllLayers
 * @function
 */

/**
 * Checks for the provided <code>sap.makit.Layer</code> in the aggregation named <code>layers</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.makit.Layer}
 *            oLayer the layer whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.makit.CombinationChart#indexOfLayer
 * @function
 */
	

/**
 * Destroys all the layers in the aggregation 
 * named <code>layers</code>.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#destroyLayers
 * @function
 */


/**
 * Double tap event on the chart 
 *
 * @name sap.makit.CombinationChart#doubletap
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'doubletap' event of this <code>sap.makit.CombinationChart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.makit.CombinationChart</code>.<br/> itself. 
 *  
 * Double tap event on the chart 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.makit.CombinationChart</code>.<br/> itself.
 *
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#attachDoubletap
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'doubletap' event of this <code>sap.makit.CombinationChart</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#detachDoubletap
 * @function
 */

/**
 * Fire event doubletap to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @protected
 * @name sap.makit.CombinationChart#fireDoubletap
 * @function
 */


/**
 * Single tap event on the chart 
 *
 * @name sap.makit.CombinationChart#tap
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'tap' event of this <code>sap.makit.CombinationChart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.makit.CombinationChart</code>.<br/> itself. 
 *  
 * Single tap event on the chart 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.makit.CombinationChart</code>.<br/> itself.
 *
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#attachTap
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'tap' event of this <code>sap.makit.CombinationChart</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#detachTap
 * @function
 */

/**
 * Fire event tap to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @protected
 * @name sap.makit.CombinationChart#fireTap
 * @function
 */


/**
 * Long press event on the chart 
 *
 * @name sap.makit.CombinationChart#longpress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'longpress' event of this <code>sap.makit.CombinationChart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.makit.CombinationChart</code>.<br/> itself. 
 *  
 * Long press event on the chart 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.makit.CombinationChart</code>.<br/> itself.
 *
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#attachLongpress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'longpress' event of this <code>sap.makit.CombinationChart</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.makit.CombinationChart#detachLongpress
 * @function
 */

/**
 * Fire event longpress to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @protected
 * @name sap.makit.CombinationChart#fireLongpress
 * @function
 */


/**
 * Get the value of the currently highlighted category
 *
 * @name sap.makit.CombinationChart.prototype.getSelectedCategory
 * @function

 * @type string
 * @public
 */


/**
 * Get the number of distinct category values
 *
 * @name sap.makit.CombinationChart.prototype.getNumberOfCategories
 * @function

 * @type int
 * @public
 */


/**
 * Return an array of categories value that is currently selected.
 *
 * @name sap.makit.CombinationChart.prototype.getSelectedCategoryGroup
 * @function

 * @type object
 * @public
 */


// Start of sap/makit/CombinationChart.js
/*!
 * @copyright@
 */

//jQuery.sap.require("sap.makit.js.SybaseMA");
//jQuery.sap.declare("sap.makit.js.SybaseMA");
jQuery.sap.require("sap.makit.MakitLib");

/**
 * @override
 */
sap.makit.CombinationChart.prototype.init = function() {
	//Private variable
	this._makitChart = null;
	
	this._parentCurrentHeight = 0;
	this._selectedCatIdx = 0;
	
	this._datarows = []; //This is the placeholder for the Chart's data row it's a 1-to-1 mapping to rows aggregation.
	this._styleClasses = []; //workaround for custom classes

	this.setCategoryAxis(new sap.makit.CategoryAxis());
	this.setPrimaryValueAxis(new sap.makit.ValueAxis());
	this.setSecondaryValueAxis(new sap.makit.ValueAxis());
	this.setValueBubble(new sap.makit.ValueBubble());
	
	this.attachEvent("_change", this._onPropertyChanged);
	sap.ui.getCore().attachThemeChanged(this._applyCSS, this);
};

/**
 * Attempt to preserve the chart's DOM reference before re-rendering it
 * @override
 */
sap.makit.CombinationChart.prototype.onBeforeRendering = function(oEvent) {
	this.fireEvent("_beforeRendering", this);
	if(this.getDomRef() && !sap.ui.core.RenderManager.isPreservedContent(this.getDomRef())){
		sap.ui.core.RenderManager.preserveContent(this.getDomRef(), /* bPreserveRoot */ true, /* bPreserveNodesWithId */ false);
	}
};

/**
 * Once the place holder is rendered, we will create the MAKit chart object or 
 * retrieve the preserved chart DOM reference if exists.
 * @override
 */
sap.makit.CombinationChart.prototype.onAfterRendering = function(oEvent) {
	this.fireEvent("_afterRendering", this);
	var $placeholder = jQuery(jQuery.sap.domById("sap-ui-dummy-" + this.getId()));
	var $oldContent = sap.ui.core.RenderManager.findPreservedContent(this.getId());
	var $newContent = null;
	if (this.getLayers().length > 0) {
		if ($oldContent.size() == 0) {
			this.fireEvent("_createMAKitObject", this);
			$newContent = new jQuery(this.getDomRef());
			$placeholder.replaceWith($newContent);
			this._createChartObject();
			var parent = this.getParent();
			var parentId = parent.getId();
			var parentDom = jQuery.sap.domById(parentId);
			this._parentCurrentHeight = parentDom.offsetHeight;
			sap.ui.core.ResizeHandler.register(parentDom, jQuery.proxy(this._onResize, this));
		} else if ( $oldContent.size() > 0 ) {
			this.fireEvent("_restoreMAKitObject", this);
			// replace dummy with old content
			$placeholder.replaceWith($oldContent);
		}
		
		if($newContent) {
			//this._makitChart.showRangeSelectorView(this.getShowRangeSelector());
			this._makitChart.setPalette(this.getPrimaryColorPalette(), "primaryaxis");
			this._makitChart.setPalette(this.getSecondaryColorPalette(), "secondaryaxis");
			//this._makitChart.showTableValue(this.getShowTableValue());
			this._setDataTable();
		}
	}
};

/** 
 * WORKAROUND: MAKit chart current behavior overwrite the div's css class when it's created
 *				So we need to intercept addition of custom style classes before
 *				this._makitChart is created.
 * @override
 */
sap.makit.CombinationChart.prototype.addStyleClass = function(sStyleClass, bSuppressRerendering) {
	 //If it's already in the control, then it is in the _styleClasses array
	if (this._styleClasses.indexOf(sStyleClass) === -1) {
		this._styleClasses.push(sStyleClass);
	}

	if(this._makitChart) {
		sap.ui.core.Control.prototype.addStyleClass.call(this, sStyleClass, bSuppressRerendering);
	}
	return this;
};

/**
 * @override
 */
sap.makit.CombinationChart.prototype.removeStyleClass = function(sStyleClass, bSuppressRerendering) {
	var idx = this._styleClasses.indexOf(sStyleClass);
	if (idx > -1) {
		this._styleClasses.splice(idx, 1);
	}

	if(this._makitChart) {
		sap.ui.core.Control.prototype.removeStyleClass.call(this, sStyleClass, bSuppressRerendering);
	}
	return this;
};

/**
 * @override
 */
sap.makit.CombinationChart.prototype.addLayer= function(oLayer){
	if(this._makitChart) {
		throw new Error("Cannot add layer once the chart has been rendered");
	}
	this._checkLayer(oLayer);
	
	sap.ui.core.Element.prototype.addAggregation.call(this, "layers", oLayer, false);
	oLayer.attachEvent("rowsUpdated", this._setDataTable, this);
	oLayer.attachEvent("dataRegionChanged", this._onDataRegionPropChanged, this);
	oLayer.attachEvent("_change", this._onLayerPropertyChanged, this);
	return this;
};

/**
 * @override
 */
sap.makit.CombinationChart.prototype.insertLayer= function(oLayer, iIndex){
	if(this._makitChart) {
		throw new Error("Cannot add layer once the chart has been rendered");
	}
	this._checkLayer(oLayer);
	
	sap.ui.core.Element.prototype.insertAggregation.call(this, "layers", oLayer, iIndex, false);
	oLayer.attachEvent("rowsUpdated", this._setDataTable, this);
	oLayer.attachEvent("dataRegionChanged", this._onDataRegionPropChanged, this);
	oLayer.attachEvent("_change", this._onLayerPropertyChanged, this);
	return this;
};

/**
 * @override
 */
sap.makit.CombinationChart.prototype.removeLayer = function(oLayer){
	if(this._makitChart) {
		throw new Error("Cannot remove layer once the chart has been rendered");
	}
	var removedObj = sap.ui.core.Element.prototype.removeAggregation.call(this, "layers", oLayer, false);
	if(removedObj != null) {
		removedObj.detachEvent("rowsUpdated", this._setDataTable, this);
		removedObj.detachEvent("dataRegionChanged", this._onDataRegionPropChanged, this);
		removedObj.detachEvent("_change", this._onLayerPropertyChanged, this);
	}
	return removedObj;
};

/**
 * @override
 */
sap.makit.CombinationChart.prototype.removeAllLayers = function(){
	if(this._makitChart) {
		throw new Error("Cannot remove layers once the chart has been rendered");
	}
	var removedObjs = sap.ui.core.Element.prototype.removeAllAggregation.call(this, "layers", false);
	var len = removedObjs.length;
	var i;
	for( i = 0; i < len; i++){ 
		removedObjs[i].detachEvent("rowsUpdated", this._setDataTable, this);
		removedObjs[i].detachEvent("dataRegionChanged", this._onDataRegionPropChanged, this);
		removedObjs[i].detachEvent("_change", this._onLayerPropertyChanged, this);
	}
	return removedObjs;
};

sap.makit.CombinationChart.prototype._checkLayer= function(oLayer){
	var layers = this.getLayers();
	var layersCount = layers.length;
	var i;
	if(oLayer.getType() == sap.makit.ChartType.Line){
		for (i = 0; i < layersCount; i++) {
			if (layers[i].getType() == sap.makit.ChartType.Bar){
				oLayer.setLineType("verticalline");
				break;
			}
			else {
				oLayer.setLineType("line");
			}
		}
	}
	else {
		for (i = 0; i < layersCount; i++) {
			if (layers[i].getType() != sap.makit.ChartType.Line){
				throw new Error("Cannot combine 2 different non-line chart type");
			}
		}
		
		for (i = 0; i < layersCount; i++) {
			if (layers[i].getType() == sap.makit.ChartType.Line){
				if (oLayer.getType() == sap.makit.ChartType.Bar){
					layers[i].setLineType("verticalline");
				}
				else {
					layers[i].setLineType("line");
				}
			}
		}
	}
}

/**
 * @override
 */
sap.makit.CombinationChart.prototype.setValueBubble = function(oValueBubble){
	if (oValueBubble instanceof sap.makit.ValueBubble) {
		sap.ui.core.Element.prototype.setProperty.call(this, "valueBubble", oValueBubble, false);
		oValueBubble.attachEvent("_change", this._onValueBubbleChanged, this);
		if (this._makitChart) {
			var valueBubbleObj = oValueBubble.toObject();
			this._makitChart.setValueBubbleStyle(valueBubbleObj);
			if (this._makitChart.isValueBubbleVisible() != valueBubbleObj.visible) {
				this._makitChart.showValueBubble(valueBubbleObj.visible);
			}
		}
	}
	else {
		throw new Error("valueBubble property must be of type sap.makit.ValueBubble");
	}
	return this;
};

/**
 * @override
 */
sap.makit.CombinationChart.prototype.addCategoryRegion= function(oCategory){
	sap.ui.core.Element.prototype.addAggregation.call(this, "categoryRegions", oCategory, false);
	oCategory.attachEvent("_change", {type: "categories"}, this._onDataRegionPropChanged, this);
	return this;
};

/**
 * @override
 */
sap.makit.CombinationChart.prototype.insertCategoryRegion= function(oCategory, iIndex){
	sap.ui.core.Element.prototype.insertAggregation.call(this, "categoryRegions", oCategory, iIndex, false);
	oCategory.attachEvent("_change", {type: "categories"}, this._onDataRegionPropChanged, this);
	return this;
};

/**
 * @override
 */
sap.makit.CombinationChart.prototype.removeCategoryRegion= function(oCategory){
	var removedObj = sap.ui.core.Element.prototype.removeAggregation.call(this, "categoryRegions", oCategory, false);
	if(removedObj != null) {
		oCategory.detachEvent("_change", this._onDataRegionPropChanged, this);
	}
	return removedObj;
};

/**
 * @override
 */
sap.makit.CombinationChart.prototype.removeAllCategoryRegions = function(){
	var removedObjs = sap.ui.core.Element.prototype.removeAllAggregation.call(this, "categoryRegions", false);
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
sap.makit.CombinationChart.prototype.setPrimaryValueAxis = function (oValueAxis){
	if (oValueAxis instanceof sap.makit.ValueAxis) {
		sap.ui.core.Element.prototype.setProperty.call(this, "primaryValueAxis", oValueAxis, false);
		oValueAxis.attachEvent("_change", { axis:"values", secondaryAxis: false }, this._onAxisPropChanged, this);
	}
	else {
		throw new Error("primaryValueAxis property must be of type sap.makit.ValueAxis");
	}
	return this;
};

/**
 * @override
 */
sap.makit.CombinationChart.prototype.setSecondaryValueAxis = function (oValueAxis){
	if (oValueAxis instanceof sap.makit.ValueAxis) {
		sap.ui.core.Element.prototype.setProperty.call(this, "secondaryValueAxis", oValueAxis, false);
		oValueAxis.attachEvent("_change", { axis:"values", secondaryAxis: true }, this._onAxisPropChanged, this);
	}
	else {
		throw new Error("secondaryValueAxis property must be of type sap.makit.ValueAxis");
	}
	return this;
};

/**
 * @override
 */
sap.makit.CombinationChart.prototype.setCategoryAxis = function (oCategoryAxis){
	if (oCategoryAxis instanceof sap.makit.CategoryAxis) {
		sap.ui.core.Element.prototype.setProperty.call(this, "categoryAxis", oCategoryAxis, false);
		oCategoryAxis.attachEvent("_change", { axis:"category" }, this._onAxisPropChanged, this);
	}
	else {
		throw new Error("categoryAxis property must be of type sap.makit.CategoryAxis");
	}
	return this;
};

/*=================================================================================
 *== PRIVATE METHODS
 *=================================================================================
 **/

/**
 * Set the Chart's height. Canvas does not support % height, 
 * so it need to have an absolute height
 * 
 * @return true, if the height is using % value, false otherwise
 * 
 * @private
 * 
 * */
sap.makit.CombinationChart.prototype._setRealHeight = function(height){
	var elem = this.getDomRef();
	var prevHeight = elem.style.height;
	var newHeight = "0px";
	if(height.indexOf("%") > -1) {
		var parent = this.getParent();
		var parentId = parent.getId();
		var parentDom = jQuery.sap.domById(parentId);
		var intHeight = parseInt(height, 10);
		var realHeight = Math.ceil(parentDom.offsetHeight * (intHeight / 100));
		newHeight = realHeight + "px";
	}
	else {
		newHeight = height;
	}
	
	if (prevHeight != newHeight){
		elem.style.height = newHeight;
	}
};

/**
 * Create and initialize the MAKit $MA.Chart object
 * 
 * @private
 * 
 * */
sap.makit.CombinationChart.prototype._createChartObject = function (){
	var elem = this.getDomRef();
	jQuery.sap.assert(elem, "Chart's DomRef is not ready");
	
	elem.style.width = this.getWidth();
	this._setRealHeight(this.getHeight());

	this._makitChart = new window.$MA.Chart(this.getId(), true);
	var that = this;
	this._makitChart.bind("initialized", function() {
		that._makitChart.showToolBar(false);
		that._setMakitChartProperties();
	});
	
	this._makitChart.bind("beforerender", function() {
		that.fireEvent("_makitBeforeRender", that);
	});
	
	this._makitChart.bind("renderstart", function() {
		that.fireEvent("_makitRenderStart", that);
	});
	
	this._makitChart.bind("renderend", function() {
		that.fireEvent("_makitRenderEnd", that);
	});
	
	this._makitChart.bind("animationend", function() {
		that.fireEvent("_makitAnimationEnd", that);
	});

	var syntax = this._getChartSyntax();
	
	this._makitChart.create(syntax);
	this._makitChart.bind("tap", function(id, param) {
		that._selectedCatIdx = that._makitChart.getSelectedCategoryIndex();
		that.fireTap(param);
	});
	this._makitChart.bind("doubletap", function(id, param) {
		that.fireEvent("doubletap", param);
	});
	this._makitChart.bind("longpress", function(id, param) {
		that._selectedCatIdx = that._makitChart.getSelectedCategoryIndex();
		that.fireEvent("longpress", param);
	});

	//workaround for overwritten classes
	var len = this._styleClasses.length;
	for (var i = 0; i < len; i++ ){
		this.addStyleClass(this._styleClasses[i]);
	}
	
	this._applyCSS();
};

/**
 * This function is used to apply the Makit properties that will be reset when changing chart type. 
 * 
 * @private
 * 
 * */
sap.makit.CombinationChart.prototype._setMakitChartProperties = function() {
	if (!this._makitChart) {
		return;
	}
	this._makitChart.setLegend(this.getLegendPosition().toLowerCase());
	// We should only apply this if the chart's data has been initialised at least once
	//if(this._dataInitialized){
		this._makitChart.setPalette(this.getPrimaryColorPalette(), "primaryaxis");
		this._makitChart.setPalette(this.getSecondaryColorPalette(), "secondaryaxis");
		this._makitChart.showRangeSelectorView(this.getShowRangeSelector());
		this._makitChart.showTableValue(this.getShowTableValue());
	//}

	var valueBubble = this.getValueBubble();
	if (valueBubble) {
		var valueBubbleObj = valueBubble.toObject();
		this._makitChart.setValueBubbleStyle(valueBubbleObj);
		if (this._makitChart.isValueBubbleVisible() != valueBubbleObj.visible) {
			this._makitChart.showValueBubble(valueBubbleObj.visible);
		}
	}
	
	var layersArr = this.getLayers();
	var len = layersArr.length;
	for(var i = 0; i < len; i++) {
		var layer = layersArr[i];
		if(layer.getType() == sap.makit.ChartType.Line) {
			this._makitChart.setGraphLineWidth(layer.getLineThickness(), layer.getId());
		}
		
		var pcp = layer.getPrimaryColorPalette();
		if (pcp) {
			this._makitChart.setPalette(pcp, layer.getId());
		}
		this._makitChart.setProperty(layer.getId() + ".values.SecondaryAxis", layer.getDrawOnSecondaryAxis());
	}
};

/**
 * Generate the MAKit chart metadata syntax based on the sap.makit.Chart properties.
 * To be used to create the MAKit chart.
 * 
 * @private
 * 
 * */
sap.makit.CombinationChart.prototype._getChartSyntax = function() {
	var categoryAxisObj = this.getCategoryAxis();
	var categoryObjs = this.getCategoryRegions();
	var catLen = categoryObjs.length;
	if (catLen > 0){
		var i;
		var categorySyntax = "<Categories";
		if(categoryAxisObj) { 
			if(categoryAxisObj.getDisplayAll()) {
				categorySyntax += ' display="' + categoryAxisObj.getDisplayAll() + '"';
			}
		}
		categorySyntax += ">";
		var displayNames = "";
		for (i = catLen - 1; i >= 0; i--) {
			var temp = categoryObjs[i].getDisplayName();
			if(temp && temp.length > 0 ){
				displayNames += temp + " | ";
			}
		}
		displayNames = displayNames.substr(0, displayNames.length - 3);
		
		for (i = 0; i < catLen; i++){
			var categoryObj = categoryObjs[i];
			categorySyntax += '<Category column="' + categoryObj.getColumn() + '"';
			if (categoryObj.getFormat()) {
					categorySyntax += ' format="' + categoryObj.getFormat() + '"';
			}
			if (i == 0) {
				categorySyntax += ' displayname="' + displayNames + '"';
			}
			if(categoryAxisObj) {
				categorySyntax += ' showprimaryline="'+ categoryAxisObj.getShowPrimaryLine() +'"';
				categorySyntax += ' showgrid="'+ categoryAxisObj.getShowGrid() +'"';
				categorySyntax += ' showlabel="'+ categoryAxisObj.getShowLabel() +'"';
				categorySyntax += ' thickness="'+ categoryAxisObj.getThickness() +'"';
				categorySyntax += ' color="'+ categoryAxisObj.getColor() +'"';
				categorySyntax += ' sortorder="'+ categoryAxisObj.getSortOrder().toLowerCase() +'"';
				categorySyntax += ' displaylastlabel="'+ categoryAxisObj.getDisplayLastLabel() +'"';
			}
			categorySyntax += ' />';
		}
		categorySyntax += "</Categories>";
	}
	else {
		throw new Error("CombinationChart '"+ this.getId() +"' needs at least one Category data region");
	}
	
	var layersArr = this.getLayers();
	var len = layersArr.length;
	var layersSyntax = "";
	
	for(var i = 0; i < len; i++) {
		var layer = layersArr[i];
		layersSyntax += layer.getSyntax(this.getPrimaryValueAxis(), this.getSecondaryValueAxis() );
	}
	
	var overlayGroupSyntax = '<OverlayGroup>';
	overlayGroupSyntax += categorySyntax;
	overlayGroupSyntax += layersSyntax;
	overlayGroupSyntax += '</OverlayGroup>';

	return overlayGroupSyntax;
};

/**
 * Update the data table of MAKit chart. 
 * 
 * @private
 * 
 * */
sap.makit.CombinationChart.prototype._setDataTable = function() {
	//Use delayed call to prevent setDataTable to be called too fast and too many times in a short period.
	if(this._makitChart){
		this._setDataTableTimer = this._setDataTableTimer || jQuery.sap.delayedCall(150, this, function(){
			jQuery.sap.assert(this._makitChart, "_makitChart is not initialized");
			this.fireEvent("_createDataTable", this);
			var layersArr = this.getLayers();
			var len = layersArr.length;
			
			this.fireEvent("_beforeSetDataTable", this);
			for(var i = 0; i < len; i++) {
				var layer = layersArr[i];
				//layersSyntax += layer.getSyntax();
				this._makitChart.setDataTable(layer.getDataTable(), layer.getId());
			}
			
			//this._makitChart.setDataTable(dataTable);
			this._dataInitialize = true;
	
			this._setDataTableTimer = undefined;
		});
	}
};


/** 
 * Read and parse the css classes in the document and apply those style to the MAKit Chart 
 * 
 * @private
 */
sap.makit.CombinationChart.prototype._applyCSS = function(oEvent) {
	if (this._makitChart){
		this._makitChart.applyCSS();
	}
};

/** 
 * Retrieve selected series value of the layer 
 * 
 * @private
 */
sap.makit.CombinationChart.prototype._getSelectedSeries = function(oLayer) {
	var index = this.indexOfLayer(oLayer);
	if (index >= 0 && this._makitChart){
		return this._makitChart.getSelectedSeries(oLayer.getId());
	}
};

/*===================================================================================
 *=	PRIVATE EVENT HANDLERS
 *===================================================================================
 **/

/**
 * Handler for onresize event. 
 * 
 * @private
 * 
 * */
sap.makit.CombinationChart.prototype._onResize = function(oEvent) {
	var parent = this.getParent();
	var parentId = parent.getId();
	var parentDom = jQuery.sap.domById(parentId);
	var parentDomCurHeight = parentDom.offsetHeight;
	var parentDomCurWidth = parentDom.offsetWidth;
	
	if (this._parentCurrentHeight != parentDomCurHeight && parentDomCurHeight > 0 ) {
		this._setRealHeight(this.getHeight());
		this._parentCurrentHeight = parentDom.offsetHeight;
	}
	if(this._makitChart != null && parentDomCurHeight > 0 && parentDomCurWidth > 0) {
		this._makitChart.refresh();
	}
};

/**
 * Handler for properties change. 
 * 
 * @private
 * 
 * */
sap.makit.CombinationChart.prototype._onPropertyChanged = function(oEvent){
	if (!this._makitChart) {
		return;
	}
	var name = oEvent.mParameters["name"];
	var newVal = oEvent.mParameters["newValue"];
	if(this._makitChart){
		if (name === "showRangeSelector") {
			this._makitChart.showRangeSelectorView(newVal);
		}
		else if (name === "legendPosition") {
			this._makitChart.setLegend(newVal.toLowerCase());
		}
		else if(name === "width") {
			this.getDomRef().style.width = this.getWidth();
		}
		else if(name === "height") {
			this._setRealHeight(newVal);
		}
		else if(name === "showTableValue") {
			this._makitChart.showTableValue(newVal);
		}
		else if (name === "primaryColorPalette") {
			this._makitChart.setPalette(newVal, "primaryaxis");
		}
		else if (name === "secondaryColorPalette") {
			this._makitChart.setPalette(newVal, "secondaryaxis");
		}
		
		this._makitChart.setSelectedCategoryIndex(this._selectedCatIdx);
		this._makitChart.refresh();
	}
}

/**
 * Handler for Layer's properties change. 
 * 
 * @private
 * 
 * */
sap.makit.CombinationChart.prototype._onLayerPropertyChanged = function(oEvent){
	if (!this._makitChart) {
		return;
	}
	var name = oEvent.mParameters["name"];
	var newVal = oEvent.mParameters["newValue"];
	var oldVal = oEvent.mParameters["oldValue"];
	if(this._makitChart){
		if (name === "type") {
			var layer = oEvent.getSource();
			var index = this.indexOfLayer(layer);
			
			var layers = this.getLayers();
			var layersCount = layers.length;
			
			var i;
			//If the new chart type is not Line we need to check and make sure it does not conflict
			if (newVal != sap.makit.ChartType.Line) {
				//First check for conflict type
				for (i = 0; i < layersCount; i++) {
					var chartType = layers[i].getType();
					if(index != i && chartType != sap.makit.ChartType.Line) {
						layer.setType(oldVal); //set it back to old value;
						throw new Error("CombinationChart : " + newVal + " chart type cannot be combine with " + chartType + " chart type"); 
					}
				}
			}
			//We need to find what is the major chart type to determine which orientation the line should be
			// 	(i.e. vertical line or horizontal line)
			
			var mainChartType = newVal;
			//If the mainChartType is Line, find out what type of chart 
			// is the main type (i.e. or Vertical or Horizontal)
			if (mainChartType == sap.makit.ChartType.Line) {
				for (i = 0; i < layersCount; i++) {
					if(layers[i].getType() != sap.makit.ChartType.Line) {
						mainChartType = layers[i].getType();
						break;
					}
				}
			}
			
			//Determine which type of line it should be
			var lineType = "line";
			if(mainChartType == sap.makit.ChartType.Bar) {
				lineType = "verticalline";
			}
			
			var type = newVal;
			if(newVal == sap.makit.ChartType.Line) {
				type = lineType;
			}
			
			this._makitChart.setProperty(layer.getId() + ".ChartType", type);

			//Set the rest of the Line chart layers to the correct type (vertical or not), if required.
			for (i = 0; i < layersCount; i++) {
				if(layers[i].getType() == sap.makit.ChartType.Line && layers[i].getLineType() != lineType && layer != layers[i]) {
					layers[i].setLineType(lineType);
					this._makitChart.setProperty(layers[i].getId() + ".ChartType", lineType);
				}
			}
		}
		else if (name === "lineThickness") {
			this._makitChart.setGraphLineWidth(newVal, oEvent.getSource().getId());
		}
		else if (name === "primaryColorPalette") {
			this._makitChart.setPalette(newVal, oEvent.getSource().getId());
		}
		else if(name === "drawOnSecondaryAxis") {
			this._makitChart.setProperty(oEvent.getSource().getId() + ".values.SecondaryAxis", newVal);
		}
		this._makitChart.setSelectedCategoryIndex(this._selectedCatIdx);
		this._makitChart.refresh();
	}
}

/**
 * Handler for Category, Value and Series data region property change 
 * 
 * @private
 * 
 * */
sap.makit.CombinationChart.prototype._onDataRegionPropChanged = function(oEvent, oData){
	if (!this._makitChart) {
		return;
	}
	
	var oParams = oEvent.mParameters;
	if (oParams["type"] == "values") {
		var id = oEvent.getSource().getId();
		var idx = oParams["index"];
		if(idx > -1){
			this._makitChart.setProperty(id + "." + oParams["type"] + "["+idx+"]." + oParams["name"], oParams["newValue"]);
		}
	}
	else if (oParams["type"] == "series") {
		var id = oEvent.getSource().getId();
		var idx = oParams["index"];
		this._makitChart.setProperty(id + "." + oParams["type"] + "["+idx+"]." + oParams["name"], oParams["newValue"]);
	}
	else if (oData != undefined){
		this._makitChart.setProperty(oData["type"] + "." + oParams["name"], oParams["newValue"]);
	}
};

/**
 * Handler for CategoryAxis and ValueAxis change 
 * 
 * @private
 * 
 * */
sap.makit.CombinationChart.prototype._onAxisPropChanged = function(oEvent, oData){
	jQuery.sap.assert(oData, "oData is expected to be set in _onAxisPropChanged");
	if (!this._makitChart) {
		return;
	}
	var oParams = oEvent.mParameters;
	var sName =  oParams["name"].toLowerCase();
	var value =  oParams["newValue"];
	// Sortorder in makit only accepts lowercase value 
	if (sName === "sortorder") {
		value = value.toLowerCase();
	}
	if(oData["axis"] == "values"){
		var whichAxis = "primaryaxis";
		if (oData["secondaryAxis"]) {
			whichAxis = "secondaryaxis"
		}
		this._makitChart.setProperty(whichAxis + "." + oData["axis"] + "." + sName, value);
	}
	else {
		var axis = oData["axis"];
		if (sName === "displayall") {
			axis = "categories";
			sName = "display";
			if(!value){
				value = "";
			}
		}
		this._makitChart.setProperty(axis + "." + sName, value);
	}
	
	this._makitChart.refresh();
	
	if (sName === "sortorder" || sName == "display") {
		this._setDataTable();
	}
	
};

/**
 * Handler for ValueBubble properties change 
 * 
 * @private
 * 
 * */
sap.makit.CombinationChart.prototype._onValueBubbleChanged = function (oEvent){
	if (!this._makitChart) {
		return;
	}
	var valueBubbleObj = this.getValueBubble().toObject();
	this._makitChart.setValueBubbleStyle(valueBubbleObj);
	if (this._makitChart.isValueBubbleVisible() != valueBubbleObj.visible) {
		this._makitChart.showValueBubble(valueBubbleObj.visible);
	}
	this._makitChart.refresh();
};

/*=================================================================================
 *== PUBLIC METHODS
 *=================================================================================
 **/

/**
 * See the generated JSDoc for the documentation of this public function
 * 
 * @public
 * */
sap.makit.CombinationChart.prototype.getSelectedCategory = function() {
	var selectedCategory = undefined;
	if (this._makitChart){
		selectedCategory = this._makitChart.getSelectedCategory();
	}
	return selectedCategory;
};

/**
 * See the generated JSDoc for the documentation of this public function
 * 
 * @public
 * */
sap.makit.CombinationChart.prototype.getNumberOfCategories = function() {
	var numOfCat = undefined;
	if (this._makitChart){
		numOfCat = this._makitChart.getNumberOfCategories();
	}
	return numOfCat;
};

/**
 * See the generated JSDoc for the documentation of this public function
 * 
 * @public
 * */
sap.makit.CombinationChart.prototype.getSelectedCategoryGroup = function() {
	var selectedCategoryGroup = undefined;
	if (this._makitChart){
		selectedCategoryGroup = this._makitChart.getSelectedCategoryGroup();
	}
	return selectedCategoryGroup;
};