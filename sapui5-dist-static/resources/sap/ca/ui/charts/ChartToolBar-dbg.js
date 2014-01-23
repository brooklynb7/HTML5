/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.charts.ChartToolBar.
jQuery.sap.declare("sap.ca.ui.charts.ChartToolBar");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new charts/ChartToolBar.
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
 * <li>{@link #getShowPersonalization showPersonalization} : boolean (default: false)</li>
 * <li>{@link #getShowFullScreen showFullScreen} : boolean (default: false)</li>
 * <li>{@link #getShowLegend showLegend} : boolean (default: true)</li>
 * <li>{@link #getChartTitle chartTitle} : string (default: '')</li>
 * <li>{@link #getFirstDimensionPath firstDimensionPath} : string (default: '')</li>
 * <li>{@link #getFirstDimensionKeyPath firstDimensionKeyPath} : string (default: '')</li>
 * <li>{@link #getFirstDimensionTextPath firstDimensionTextPath} : string (default: '')</li>
 * <li>{@link #getSecondDimensionPath secondDimensionPath} : string (default: '')</li>
 * <li>{@link #getSecondDimensionKeyPath secondDimensionKeyPath} : string (default: '')</li>
 * <li>{@link #getSecondDimensionTextPath secondDimensionTextPath} : string (default: '')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCharts charts} : sap.ui.core.Control[]</li>
 * <li>{@link #getToolBar toolBar} : sap.m.Bar</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedChart selectedChart} : string | sap.ui.core.Control</li>
 * <li>{@link #getFirstDimensionSelect firstDimensionSelect} : string | sap.m.Select</li>
 * <li>{@link #getSecondDimensionSelect secondDimensionSelect} : string | sap.m.Select</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.charts.ChartToolBar#event:personalizationPressed personalizationPressed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.charts.ChartToolBar#event:firstDimensionKeySelected firstDimensionKeySelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.charts.ChartToolBar#event:secondDimensionKeySelected secondDimensionKeySelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * ToolBar used for displaying one chart amongst several and provide additional features:
 * - 2 select boxes for selecting dimensions
 * - fullscreen toggle
 * - personalization icon
 * - showLegend toggle
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.charts.ChartToolBar
 */
sap.ui.core.Control.extend("sap.ca.ui.charts.ChartToolBar", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"showPersonalization" : {type : "boolean", group : "Misc", defaultValue : false},
		"showFullScreen" : {type : "boolean", group : "Misc", defaultValue : false},
		"showLegend" : {type : "boolean", group : "Misc", defaultValue : true},
		"chartTitle" : {type : "string", group : "Misc", defaultValue : ''},
		"firstDimensionPath" : {type : "string", group : "Misc", defaultValue : ''},
		"firstDimensionKeyPath" : {type : "string", group : "Misc", defaultValue : ''},
		"firstDimensionTextPath" : {type : "string", group : "Misc", defaultValue : ''},
		"secondDimensionPath" : {type : "string", group : "Misc", defaultValue : ''},
		"secondDimensionKeyPath" : {type : "string", group : "Misc", defaultValue : ''},
		"secondDimensionTextPath" : {type : "string", group : "Misc", defaultValue : ''}
	},
	aggregations : {
    	"charts" : {type : "sap.ui.core.Control", multiple : true, singularName : "chart"}, 
    	"toolBar" : {type : "sap.m.Bar", multiple : false}
	},
	associations : {
		"selectedChart" : {type : "sap.ui.core.Control", multiple : false}, 
		"firstDimensionSelect" : {type : "sap.m.Select", multiple : false}, 
		"secondDimensionSelect" : {type : "sap.m.Select", multiple : false}
	},
	events : {
		"personalizationPressed" : {}, 
		"firstDimensionKeySelected" : {}, 
		"secondDimensionKeySelected" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.charts.ChartToolBar with name <code>sClassName</code> 
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
 * @name sap.ca.ui.charts.ChartToolBar.extend
 * @function
 */

sap.ca.ui.charts.ChartToolBar.M_EVENTS = {'personalizationPressed':'personalizationPressed','firstDimensionKeySelected':'firstDimensionKeySelected','secondDimensionKeySelected':'secondDimensionKeySelected'};


/**
 * Getter for property <code>showPersonalization</code>.
 * Display or not the personalization icon into the ChartToolBar
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showPersonalization</code>
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#getShowPersonalization
 * @function
 */

/**
 * Setter for property <code>showPersonalization</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowPersonalization  new value for property <code>showPersonalization</code>
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#setShowPersonalization
 * @function
 */


/**
 * Getter for property <code>showFullScreen</code>.
 * Display or not the personalization icon into the ChartToolBar
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showFullScreen</code>
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#getShowFullScreen
 * @function
 */

/**
 * Setter for property <code>showFullScreen</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowFullScreen  new value for property <code>showFullScreen</code>
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#setShowFullScreen
 * @function
 */


/**
 * Getter for property <code>showLegend</code>.
 * Display or not the legend on the contained charts.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showLegend</code>
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#getShowLegend
 * @function
 */

/**
 * Setter for property <code>showLegend</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowLegend  new value for property <code>showLegend</code>
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#setShowLegend
 * @function
 */


/**
 * Getter for property <code>chartTitle</code>.
 * The string to display instead of the select boxes if there are no dimensions to display
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>chartTitle</code>
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#getChartTitle
 * @function
 */

/**
 * Setter for property <code>chartTitle</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sChartTitle  new value for property <code>chartTitle</code>
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#setChartTitle
 * @function
 */


/**
 * Getter for property <code>firstDimensionPath</code>.
 * Model path to the dimensions to display into the first select box
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>firstDimensionPath</code>
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#getFirstDimensionPath
 * @function
 */

/**
 * Setter for property <code>firstDimensionPath</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFirstDimensionPath  new value for property <code>firstDimensionPath</code>
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#setFirstDimensionPath
 * @function
 */


/**
 * Getter for property <code>firstDimensionKeyPath</code>.
 * Model path to the first select box items key
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>firstDimensionKeyPath</code>
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#getFirstDimensionKeyPath
 * @function
 */

/**
 * Setter for property <code>firstDimensionKeyPath</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFirstDimensionKeyPath  new value for property <code>firstDimensionKeyPath</code>
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#setFirstDimensionKeyPath
 * @function
 */


/**
 * Getter for property <code>firstDimensionTextPath</code>.
 * Model path to the first select box items displayed text
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>firstDimensionTextPath</code>
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#getFirstDimensionTextPath
 * @function
 */

/**
 * Setter for property <code>firstDimensionTextPath</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFirstDimensionTextPath  new value for property <code>firstDimensionTextPath</code>
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#setFirstDimensionTextPath
 * @function
 */


/**
 * Getter for property <code>secondDimensionPath</code>.
 * Model path to the dimensions to display into the second select box
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>secondDimensionPath</code>
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#getSecondDimensionPath
 * @function
 */

/**
 * Setter for property <code>secondDimensionPath</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSecondDimensionPath  new value for property <code>secondDimensionPath</code>
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#setSecondDimensionPath
 * @function
 */


/**
 * Getter for property <code>secondDimensionKeyPath</code>.
 * Model path to the second select box items key
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>secondDimensionKeyPath</code>
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#getSecondDimensionKeyPath
 * @function
 */

/**
 * Setter for property <code>secondDimensionKeyPath</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSecondDimensionKeyPath  new value for property <code>secondDimensionKeyPath</code>
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#setSecondDimensionKeyPath
 * @function
 */


/**
 * Getter for property <code>secondDimensionTextPath</code>.
 * Model path to the displayed select box items displayed text
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>secondDimensionTextPath</code>
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#getSecondDimensionTextPath
 * @function
 */

/**
 * Setter for property <code>secondDimensionTextPath</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSecondDimensionTextPath  new value for property <code>secondDimensionTextPath</code>
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#setSecondDimensionTextPath
 * @function
 */


/**
 * Getter for aggregation <code>charts</code>.<br/>
 * The charts to display. Theses charts are sap.ui.core/Control that implements the following properties:
 * - showLegend: boolean
 * - icon: string (expected a string such as "sap-icon://line-chart")
 * 
 * If the inserted control is an sap.m.Table, the icon is automatically set to "sap-icon://table-chart"
 * 
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#getCharts
 * @function
 */


/**
 * Inserts a chart into the aggregation named <code>charts</code>.
 *
 * @param {sap.ui.core.Control}
 *          oChart the chart to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the chart should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the chart is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the chart is inserted at 
 *             the last position        
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#insertChart
 * @function
 */

/**
 * Adds some chart <code>oChart</code> 
 * to the aggregation named <code>charts</code>.
 *
 * @param {sap.ui.core.Control}
 *            oChart the chart to add; if empty, nothing is inserted
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#addChart
 * @function
 */

/**
 * Removes an chart from the aggregation named <code>charts</code>.
 *
 * @param {int | string | sap.ui.core.Control} vChart the chart to remove or its index or id
 * @return {sap.ui.core.Control} the removed chart or null
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#removeChart
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>charts</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#removeAllCharts
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>charts</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oChart the chart whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#indexOfChart
 * @function
 */
	

/**
 * Destroys all the charts in the aggregation 
 * named <code>charts</code>.
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#destroyCharts
 * @function
 */


/**
 * Getter for aggregation <code>toolBar</code>.<br/>
 * The composite sap.m.Bar used for rendering select boxes and icons.
 * 
 * @return {sap.m.Bar}
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#getToolBar
 * @function
 */


/**
 * Setter for the aggregated <code>toolBar</code>.
 * @param oToolBar {sap.m.Bar}
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#setToolBar
 * @function
 */
	

/**
 * Destroys the toolBar in the aggregation 
 * named <code>toolBar</code>.
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#destroyToolBar
 * @function
 */


/**
 * The ui5 control displayed
 *
 * @return {string} Id of the element which is the current target of the <code>selectedChart</code> association, or null
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#getSelectedChart
 * @function
 */

/**
 * The ui5 control displayed
 *
 * @param {string | sap.ui.core.Control} vSelectedChart 
 *    Id of an element which becomes the new target of this <code>selectedChart</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#setSelectedChart
 * @function
 */


	
/**
 * The sap.m.Select inserted into the toolBar for handling the firstDimension selection
 *
 * @return {string} Id of the element which is the current target of the <code>firstDimensionSelect</code> association, or null
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#getFirstDimensionSelect
 * @function
 */

/**
 * The sap.m.Select inserted into the toolBar for handling the firstDimension selection
 *
 * @param {string | sap.m.Select} vFirstDimensionSelect 
 *    Id of an element which becomes the new target of this <code>firstDimensionSelect</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#setFirstDimensionSelect
 * @function
 */


	
/**
 * The sap.m.Select inserted into the toolBar for handling the secondDimension selection
 *
 * @return {string} Id of the element which is the current target of the <code>secondDimensionSelect</code> association, or null
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#getSecondDimensionSelect
 * @function
 */

/**
 * The sap.m.Select inserted into the toolBar for handling the secondDimension selection
 *
 * @param {string | sap.m.Select} vSecondDimensionSelect 
 *    Id of an element which becomes the new target of this <code>secondDimensionSelect</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#setSecondDimensionSelect
 * @function
 */


	
/**
 * Event fired when a user clicks on the personalization icon 
 *
 * @name sap.ca.ui.charts.ChartToolBar#personalizationPressed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'personalizationPressed' event of this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/> itself. 
 *  
 * Event fired when a user clicks on the personalization icon 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/> itself.
 *
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#attachPersonalizationPressed
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'personalizationPressed' event of this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#detachPersonalizationPressed
 * @function
 */

/**
 * Fire event personalizationPressed to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.charts.ChartToolBar#firePersonalizationPressed
 * @function
 */


/**
 * Event fired when a user selects an item from the first select box.
 * This event is providing the item selectedKey as parameter 
 *
 * @name sap.ca.ui.charts.ChartToolBar#firstDimensionKeySelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'firstDimensionKeySelected' event of this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/> itself. 
 *  
 * Event fired when a user selects an item from the first select box.
 * This event is providing the item selectedKey as parameter 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/> itself.
 *
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#attachFirstDimensionKeySelected
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'firstDimensionKeySelected' event of this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#detachFirstDimensionKeySelected
 * @function
 */

/**
 * Fire event firstDimensionKeySelected to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.charts.ChartToolBar#fireFirstDimensionKeySelected
 * @function
 */


/**
 * Event fired when a user selects an item from the second select box.
 * This event is providing the item selectedKey as parameter 
 *
 * @name sap.ca.ui.charts.ChartToolBar#secondDimensionKeySelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'secondDimensionKeySelected' event of this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/> itself. 
 *  
 * Event fired when a user selects an item from the second select box.
 * This event is providing the item selectedKey as parameter 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/> itself.
 *
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#attachSecondDimensionKeySelected
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'secondDimensionKeySelected' event of this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.charts.ChartToolBar#detachSecondDimensionKeySelected
 * @function
 */

/**
 * Fire event secondDimensionKeySelected to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.charts.ChartToolBar#fireSecondDimensionKeySelected
 * @function
 */


// Start of sap\ca\ui\charts\ChartToolBar.js
jQuery.sap.declare("sap.ca.ui.charts.ChartToolBar");
jQuery.sap.require("sap.m.Popover");
jQuery.sap.require("sap.m.Button");
jQuery.sap.require("sap.m.Bar");
jQuery.sap.require("sap.m.Select");
jQuery.sap.require("sap.m.Dialog");
jQuery.sap.require("sap.ca.ui.Overlay");
jQuery.sap.require("sap.ca.ui.utils.resourcebundle");

//called right after Control instantiation
sap.ca.ui.charts.ChartToolBar.prototype.init = function () {

    /*
    chart icons are stored so they are created onces, used several times
     */
    this._aChartIcons = [];

    /*
    buttons that are always there
     */
    this._oShowLegendButton = new sap.m.Button({
        icon: "sap-icon://menu",
        type: sap.m.ButtonType.Transparent,
        press: jQuery.proxy(this._onLegendButtonPress, this)
    }).addStyleClass("legendIcon");

    this._oShowAllChartButton = new sap.m.Button({
        type: sap.m.ButtonType.Transparent,
        press: jQuery.proxy(this._onShowAllChartPress, this)
    }).addStyleClass("allChartsIcon");

    this._oChartTitle = new sap.m.Label();

    /*
     buttons that depends on the control configuration
     */

    this._oPersonalizationButton = null;                //will be created if personalization is set to true
    this._oShowLegendAndPersonalizationPopover = null;  //will be created if personalization is set to true
    this._oShowLegendButtonSmall = null;                //will be created when personalization status is known
    this._oShowLegendButtonClone = null;                //will be created when personalization status is known
    this._oFullScreenButton =  null;                    //will be created if fullscreen is set to true
    this._oFullScreenExitButton =  null;                //will be created if fullscreen is set to true
    this._oFullScreenDialog =  null;                    //will be created if fullscreen is set to true

    /*
    buttons references
     */
    this._oActiveChartButton = null;

    /*
     dimension switch
     */
    this._oFirstDimensionSelect =  new sap.m.Select({
        width:"auto",
        change : jQuery.proxy(function (oEvent) {
        this.fireEvent("firstDimensionKeySelected", {
            selectedKey: oEvent.getParameter("selectedItem").getKey()
        });
    }, this)});
    this.setAssociation("firstDimensionSelect", this._oFirstDimensionSelect, false);

    this._oSecondDimensionSelect =  new sap.m.Select({
        width:"auto",
        change : jQuery.proxy(function (oEvent) {
        this.fireEvent("secondDimensionKeySelected", {
            selectedKey: oEvent.getParameter("selectedItem").getKey()
        });
    }, this)});
    this.setAssociation("secondDimensionSelect", this._oSecondDimensionSelect, false);

    this._oSecondDimensionTemplate = new sap.ui.core.Item();
    this._oFirstDimensionTemplate = new sap.ui.core.Item();

    /*
    containers
     */
    this._oAllChartList = new sap.m.List({
        mode: sap.m.ListMode.SingleSelectMaster,
        showSeparators: sap.m.ListSeparators.None,
        includeItemInSelection: true,
        width:"20em",
        select: jQuery.proxy(function (oEvent) {
            var sChartId = oEvent.getParameter("listItem").getCustomData()[0].getValue();
            this._switchChart(sChartId);
        }, this)
    });

    this._oShowAllChartPopover = new sap.m.Popover({
        placement: sap.m.PlacementType.Bottom,
        showHeader: false,
        content: [this._oAllChartList]
    }).addStyleClass("sapCaUiChartToolBarShowAllChartListPopover");

    this._oToolBar = new sap.m.Bar({
        translucent: true,
        width:"100%",
        contentLeft: [this._oChartTitle, this._oFirstDimensionSelect, this._oSecondDimensionSelect]
    }).addStyleClass("iconBar");

    //for binding propagation
    this.setAggregation("toolBar", this._oToolBar);

    /*
    resize handler
     */
    this.sResizeListenerId = null;
    if (jQuery.device.is.desktop) {
        this.sResizeListenerId = sap.ui.core.ResizeHandler.register(this, jQuery.proxy(this._setSelectMaxWidth, this));
    } else {
        sap.ui.Device.orientation.attachHandler(this._setSelectMaxWidth, this);
        sap.ui.Device.resize.attachHandler(this._setSelectMaxWidth, this);
    }
};

sap.ca.ui.charts.ChartToolBar.prototype.setToolBar = function (oObject, bSuppressInvalidate) {
   this.setAggregation("toolBar", oObject, bSuppressInvalidate);
   jQuery.sap.log.warning("ChartToolBar: the built-in toolBar aggregation content should not be overridden");
};

sap.ca.ui.charts.ChartToolBar.prototype.setChartTitle = function (sValue) {

    this._oChartTitle.setText(sValue);

    this.setProperty("chartTitle", sValue);
};

sap.ca.ui.charts.ChartToolBar.prototype.setShowLegend = function (bValue) {
    this.setProperty("showLegend", bValue);

    //propagate to all charts
    var aCharts = this.getAggregation("charts");

  if (aCharts) {
    for (var i = 0; i < aCharts.length; i++) {
        if (aCharts[i].setShowLegend)  {
            aCharts[i].setShowLegend(bValue);
            jQuery.sap.log.info("ChartToolBar: propagate showLegend to chart id " + aCharts[i].getId());
        }
        else {
            jQuery.sap.log.info("ChartToolBar: chart id " + aCharts[i].getId()+" is missing the showLegend property");
        }
    }
  }
};

sap.ca.ui.charts.ChartToolBar.prototype.setShowFullScreen = function (bValue) {
   if (bValue && ! this._oFullScreenButton && ! this._oFullScreenExitButton ) {
      this._oFullScreenButton =  new sap.m.Button({
          icon: "sap-icon://full-screen",
          type: sap.m.ButtonType.Transparent,
          visible:true,
          press: jQuery.proxy(this._onFullScreenPress, this)
      });

       this._oFullScreenExitButton =  new sap.m.Button({
           icon: "sap-icon://exit-full-screen",
           type: sap.m.ButtonType.Transparent,
           visible: false,
           press: jQuery.proxy(this._onFullScreenExitPress, this)
       });
   }

    this.setProperty("showFullScreen", bValue);
};

sap.ca.ui.charts.ChartToolBar.prototype.setFirstDimensionPath = function (sValue, bInvalidate) {
    this._oFirstDimensionSelect.bindAggregation("items", {path:sValue, template: this._oFirstDimensionTemplate});
    this.setProperty("firstDimensionPath", sValue);
};

sap.ca.ui.charts.ChartToolBar.prototype.setFirstDimensionKeyPath = function (sValue, bInvalidate) {
    this._oFirstDimensionTemplate.bindProperty("key", {path: sValue});
    this.setProperty("firstDimensionKeyPath", sValue);
};

sap.ca.ui.charts.ChartToolBar.prototype.setFirstDimensionTextPath = function (sValue, bInvalidate) {
    this._oFirstDimensionTemplate.bindProperty("text", {path: sValue});
    this.setProperty("firstDimensionTextPath", sValue);
};


sap.ca.ui.charts.ChartToolBar.prototype.setSecondDimensionPath = function (sValue, bInvalidate) {
    this._oSecondDimensionSelect.bindAggregation("items", {path:sValue, template: this._oSecondDimensionTemplate});
    this.setProperty("secondDimensionPath", sValue);
};

sap.ca.ui.charts.ChartToolBar.prototype.setSecondDimensionKeyPath = function (sValue, bInvalidate) {
    this._oSecondDimensionTemplate.bindProperty("key", {path: sValue});
    this.setProperty("secondDimensionKeyPath", sValue);
};

sap.ca.ui.charts.ChartToolBar.prototype.setSecondDimensionTextPath = function (sValue, bInvalidate) {
    this._oSecondDimensionTemplate.bindProperty("text", {path: sValue});
    this.setProperty("secondDimensionTextPath", sValue);
};

sap.ca.ui.charts.ChartToolBar.prototype.setShowPersonalization = function (bValue) {

    //there is some personalization
    //display the personalization button
    //creates the personalizationAndLegend popover (for S sizes)
    //creates the _oShowLegendButtonSmall button (for S sizes)
    if (bValue) {
        if (! this._oPersonalizationButton) {
            this._oPersonalizationButton = new sap.m.Button({
                icon: "sap-icon://person-placeholder",
                type: sap.m.ButtonType.Transparent,
                press: jQuery.proxy(this.firePersonalizationPressed, this)
            }).addStyleClass("personalizationIcon");
        }

        if (! this._oShowLegendAndPersonalizationPopover) {
            if (!  this._oShowLegendButtonClone) {
                this._oShowLegendButtonClone = this._oShowLegendButton.clone();
            }

            this._oShowLegendAndPersonalizationPopover = new sap.m.Popover({
                placement: sap.m.PlacementType.Bottom,
                showHeader: false,
                content: [this._oShowLegendButtonClone, this._oPersonalizationButton.clone()]
            });
        }

        if (! this._oShowLegendButtonSmall) {
            this._oShowLegendButtonSmall = new sap.m.Button({
                icon: "sap-icon://overflow",
                type: sap.m.ButtonType.Transparent,
                press: jQuery.proxy(function () {
                    this._oShowLegendAndPersonalizationPopover.openBy(this._oShowLegendButtonSmall)
                }, this)
            }).addStyleClass("legendSmallIcon");
        }
    }

    //no personalization
    //creates the _oShowLegendButtonSmall button (for S sizes)
    else if (! this._oShowLegendButtonSmall) {
            this._oShowLegendButtonSmall = this._oShowLegendButton.clone()
                .removeStyleClass("legendIcon")
                .addStyleClass("legendSmallIcon");
    }

    this.setProperty("showPersonalization", bValue);
};

sap.ca.ui.charts.ChartToolBar.prototype.onBeforeRendering = function () {
  //todo should be optimized
    /*
     Chart Tool Bar
     contentLeft:
          | FirstDimensionSelect
          | SecondDimensionSelect
          OR
          | chartTitle if there are no dimensions provided
     contentMiddle:
        nothing
     contentRight
         0 - 2: chart/table icons
         3: show all charts icon (hidden by default)
         4: showLegend
         5: showLegend Small
         6: personalisation (optional)
         7: fullScreen (optional)
     */

    //content left management
    this._oFirstDimensionSelect.setVisible(this._oFirstDimensionSelect.getItems().length > 0);
    this._oSecondDimensionSelect.setVisible(this._oSecondDimensionSelect.getItems().length > 0);
    this._oChartTitle.setVisible(this._oFirstDimensionSelect.getItems().length == 0 && this._oSecondDimensionSelect.getItems().length == 0);

    //content right management
    this._oToolBar.removeContentRight();
    var iChart = 0;

    //first insert the chart icons if there are more than 1 chart
    if (this._aChartIcons.length >  1) {
        for (iChart = 0; iChart < this._aChartIcons.length; iChart++) {
            this._oToolBar.insertContentRight(this._aChartIcons[iChart], iChart);
        }

        this._oToolBar.insertContentRight(this._oShowAllChartButton, iChart++);
    }

    //then the behavior handling icons are displayed if there are some charts
    if (this._aChartIcons.length >  0) {
        this._oToolBar.insertContentRight(this._oShowLegendButton, iChart++);
        this._oToolBar.insertContentRight(this._oShowLegendButtonSmall, iChart++);
    }

    if (this.getShowPersonalization()) {
        this._oToolBar.insertContentRight(this._oPersonalizationButton, iChart++);
    }
    if (this.getShowFullScreen()) {
        this._oToolBar.insertContentRight(this._oFullScreenButton, iChart++);
        this._oToolBar.insertContentRight(this._oFullScreenExitButton, iChart++);
    }
};

sap.ca.ui.charts.ChartToolBar.prototype.onAfterRendering = function () {
    this._setSelectMaxWidth();
};

sap.ca.ui.charts.ChartToolBar.prototype.exit = function () {

    //remove resize handler
    if (jQuery.device.is.desktop && this.sResizeListenerId) {
        sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
        this.sResizeListenerId = null;
    }
    else {
        sap.ui.Device.orientation.detachHandler(this._setSelectMaxWidth, this);
        sap.ui.Device.resize.detachHandler(this._setSelectMaxWidth, this);
    }

    if (this._oFirstDimensionTemplate) {
        this._oFirstDimensionTemplate.destroy();
        this._oFirstDimensionTemplate = null;
    }

    if (this._oSecondDimensionTemplate) {
        this._oSecondDimensionTemplate.destroy();
        this._oSecondDimensionTemplate = null;
    }

    //containers last
    if (this._oShowAllChartPopover) {
        this._oShowAllChartPopover.destroy();
        this._oShowAllChartPopover = null;
    }

    if (this._oShowLegendAndPersonalizationPopover) {
        this._oShowLegendAndPersonalizationPopover.destroy();
        this._oShowLegendAndPersonalizationPopover = null;
    }

    if (this._oFullScreenDialog) {
        this._oFullScreenDialog.destroy();
        this._oFullScreenDialog = null;
    }

   if (jQuery.device.is.desktop) {
        if (this.sResizeListenerId) {
            sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
            this.sResizeListenerId = null;
        }
    }
    else {
        sap.ui.Device.orientation.detachHandler(this._setSelectMaxWidth, this);
        sap.ui.Device.resize.detachHandler(this._setSelectMaxWidth, this);
    }
};

//@overrides insert a chart into the charts aggregation
sap.ca.ui.charts.ChartToolBar.prototype.addChart = function (oObject, bSuppressInvalidate) {
    this._onAddingChart(oObject);
};

//@overrides remove all charts from the charts aggregation
sap.ca.ui.charts.ChartToolBar.prototype.removeAllCharts = function () {
    for (var i = 0; i < this._aChartIcons.length; i++) {
        if (this._aChartIcons.destroy) {
            this._aChartIcons.destroy();
        }
    }

    this._aChartIcons = [];
    this._oAllChartList.removeAllItems();

    return this.removeAllAggregation("charts");
};


//@overrides remove all charts from the charts aggregation
sap.ca.ui.charts.ChartToolBar.prototype.removeChart = function (iIndex) {
    jQuery.sap.log.error("ChartToolBar: removeChart method is not supported, doing removeAllCharts instead");
    return this.removeAllCharts();
};


//@overrides insert a chart into the charts aggregation
sap.ca.ui.charts.ChartToolBar.prototype.insertChart = function (oObject, iIndex, bSuppressInvalidate) {
    jQuery.sap.log.error("ChartToolBar: insertChart method is not supported, doing addChart instead");
    this._onAddingChart(oObject);
};

//@overrides insert a chart into the charts aggregation
sap.ca.ui.charts.ChartToolBar.prototype.insertChart = function (oObject, iIndex, bSuppressInvalidate) {
    this._onAddingChart(oObject);
};


//@overrides insert a chart into the charts association
//set the icon of the showAllChart button to the last selected Chart
sap.ca.ui.charts.ChartToolBar.prototype.setSelectedChart = function (sId, bSuppressInvalidate) {
    var oChart = null;

    if (sId instanceof sap.ui.core.Control) {
        oChart = sId;
    }
    else {
        oChart = this._findChartById(sId);
    }

    //show/hide the showLegend buttons
    var bShowTable = ! (oChart instanceof sap.m.Table);             //hide if table, show if chart
    this._oShowLegendButton.setEnabled(bShowTable);                 //XL-L cases
    if (this.getShowPersonalization()) {
        if (this._oShowLegendButtonClone) {
            this._oShowLegendButtonClone.setEnabled(bShowTable);    //S case with personalization
        }
    }
    else {
        if (this._oShowLegendButtonSmall) {
            this._oShowLegendButtonSmall.setEnabled(bShowTable);    //S case without personalization
        }
    }

    if (oChart instanceof sap.m.Table) {
        this._oShowAllChartButton.setIcon("sap-icon://table-chart");
    }
    else if (oChart.getIcon) {
            this._oShowAllChartButton.setIcon(oChart.getIcon());
    }
    else {
        jQuery.sap.log.error("ChartToolBar:control id "+ oChart.getId() +" is not a sap.m.Table and has no getIcon method");
    }
    this.setAssociation("selectedChart", oChart, bSuppressInvalidate);
};

//@overrides set the firstDimensionSelect control
sap.ca.ui.charts.ChartToolBar.prototype.setFirstDimensionSelect = function (sId, bSuppressInvalidate) {
    jQuery.sap.log.error("ChartToolBar: setFirstDimensionSelect method is not supported");
};

//@overrides set the secondDimensionSelect control
sap.ca.ui.charts.ChartToolBar.prototype.setSecondDimensionSelect = function (sId, bSuppressInvalidate) {
    jQuery.sap.log.error("ChartToolBar: setSecondDimensionSelect method is not supported");
};

//private methods  ------------------------------------------------------------------------------------//
//if the 2 selects are filled they should take 50% of the available space, or 100% if only 1 selector is filled
sap.ca.ui.charts.ChartToolBar.prototype._setSelectMaxWidth = function () {
    if (this._oFirstDimensionSelect.getItems().length > 0) {
        var $toolbar = this._oToolBar.$();
        var availableSpace = $toolbar.width() - $toolbar.find(".sapMBarRight").width();

        if (this._oSecondDimensionSelect.getItems().length > 0) {
            availableSpace = Math.floor(availableSpace / 2);
            this._oFirstDimensionSelect.setMaxWidth(availableSpace+"px");
            this._oSecondDimensionSelect.setMaxWidth(availableSpace+"px");
        }
        else {
            this._oFirstDimensionSelect.setMaxWidth(availableSpace+"px");
        }
    }
};

//takes the icon from the inserted chart
sap.ca.ui.charts.ChartToolBar.prototype._onAddingChart = function (oChart) {

  //overrides the chart showLegend property with the control one
  if (oChart.setShowLegend) {
      oChart.setShowLegend(this.getShowLegend());
  }

    this.addAggregation("charts", oChart);

    //creates the icon button
    var oButtonIcon = new sap.m.Button({
        type: sap.m.ButtonType.Transparent,
        customData: [
            new sap.ui.core.CustomData({
                key : 'chartId',
                value : oChart.getId()
            })
        ],
        press: jQuery.proxy(function (oEvent) {
            var sChartId = oEvent.getSource().getCustomData()[0].getValue();
            this._switchChart(sChartId);
        }, this)
    }).addStyleClass("chartIcon");

     //if this is a table, then creates the icon on the fly
    if (oChart instanceof sap.m.Table) {
        oButtonIcon.setIcon("sap-icon://table-chart");
    }
    else  if (oChart.getIcon) {
        oButtonIcon.setIcon(oChart.getIcon());
    }
    else {
        jQuery.sap.log.error("ChartToolBar: inserted control id "+ oChart.getId() +" is not a sap.m.Table and has no getIcon method");
    }

    //add  the icon to the icon bar
    this._aChartIcons.push(oButtonIcon);

    //add the icon to the chart icon list (into the showAllChart popover)
    var oShowAllItem = new sap.m.StandardListItem({
        icon: oButtonIcon.getIcon(),
        title: this._findChartName(oChart),
        customData: [
            new sap.ui.core.CustomData({
                key : 'chartId',
                value : oChart.getId()
            })
        ]
    });
    this._oAllChartList.addItem(oShowAllItem);

    //the first added chart is the selected and active one
    if (this.getAggregation("charts").length == 1) {
        this.setSelectedChart(oChart);
        this._oActiveChartButton = oButtonIcon.addStyleClass("activeButton");
    }
};

sap.ca.ui.charts.ChartToolBar.prototype._findChartName = function (oChart) {

    var sLabel = "";

    //ideal case
    if (oChart.getLabel) {
        sLabel = oChart.getLabel();
    }
    //table case
    else if (oChart instanceof sap.m.Table) {
        sLabel = sap.ca.ui.utils.resourcebundle.getText("ChartToolBar.ChartName.Table");
    }
    else {
        jQuery.sap.log.error("ChartToolBar: can't find chart label for chart id "+oChart.getId())
    }

    return sLabel;
};

//retrieve the chart from the charts aggregation which id match the give sId
sap.ca.ui.charts.ChartToolBar.prototype._findChartById = function (sId) {
    var oChart = null;

    var aCharts =  this.getAggregation("charts");

    if (aCharts) {
        for (var i = 0; ! oChart &&  i < aCharts.length; i++) {
            if (aCharts[i].getId() === sId) {
                oChart = aCharts[i];
            }
        }
    }

    return oChart;
};

//fired on press on the showLegend button: toggle showLegend property
sap.ca.ui.charts.ChartToolBar.prototype._onLegendButtonPress = function (oEvent) {
    this.setShowLegend(! this.getShowLegend());

    //fix: on tablet, the popover remains open, thus close it
    if (this._oShowLegendAndPersonalizationPopover && this._oShowLegendAndPersonalizationPopover.isOpen()) {
        this._oShowLegendAndPersonalizationPopover.close();
    }
};

//fired on press on the showLegend button: toggle showLegend property
sap.ca.ui.charts.ChartToolBar.prototype._onFullScreenExitPress = function (oEvent) {
    jQuery.sap.log.info("ChartToolBar: exiting fullscreen");

    this._oFullScreenButton.setVisible(true);
    this._oFullScreenExitButton.setVisible(false);

    this._oFullScreenDialog.close();
    this.invalidate();
};

//fired on press on the showLegend button: toggle showLegend property
sap.ca.ui.charts.ChartToolBar.prototype._onFullScreenPress = function (oEvent) {
    jQuery.sap.log.info("ChartToolBar: toggle to fullscreen");

    this._oFullScreenButton.setVisible(false);
    this._oFullScreenExitButton.setVisible(true);
    this._oToolBar.rerender();

    if (!this._oFullScreenDialog) {
    	this._oFullScreenDialog = new sap.ca.ui.Overlay();
    }

    this._oFullScreenDialog.open( this );
    this.invalidate();
};

//when a user is pressing on an chat icon either from the bar or from the all charts popover
//can be called either from the button icon (toolbar) or from the showAllChart popover (standardListItem)
//the origin is abstracted by using only the chartId
sap.ca.ui.charts.ChartToolBar.prototype._switchChart = function (sChartId) {

    //find the corresponding pressed chart icon from the toolbar
    var oRelatedButton = null;
    for (var i = 0; ! oRelatedButton && i < this._aChartIcons.length; i++) {
        if (this._aChartIcons[i].getCustomData()[0].getValue() === sChartId) {
            oRelatedButton = this._aChartIcons[i];
        }
    }

    if (oRelatedButton) {
        if (this._oActiveChartButton) {
            this._oActiveChartButton.removeStyleClass("activeButton");
        }

        this._oActiveChartButton = oRelatedButton;
        this._oActiveChartButton.addStyleClass("activeButton");
    }

    var oChart = this._findChartById(sChartId);

    this.setSelectedChart(oChart);

    //fix: on tablet, the popover remains open, thus close it
    if (this._oShowAllChartPopover.isOpen()) {
        this._oShowAllChartPopover.close();
    }

    jQuery.sap.log.info("ChartToolBar: switch to chart id "+sChartId);
};

//fired when a user clicks on the showAllChart button
sap.ca.ui.charts.ChartToolBar.prototype._onShowAllChartPress = function (oEvent) {
   this._oShowAllChartPopover.openBy(this._oShowAllChartButton);
};
