/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.charts.StackedVerticalColumnChart.
jQuery.sap.declare("sap.ca.ui.charts.StackedVerticalColumnChart");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.ca.ui.charts.Chart");


/**
 * Constructor for a new charts/StackedVerticalColumnChart.
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
 * <li>{@link #getType type} : string (default: 'StackedColumn')</li>
 * <li>{@link #getMinTouchSize minTouchSize} : sap.ui.core.CSSSize (default: '48px')</li>
 * <li>{@link #getDataLabelFormat dataLabelFormat} : any (default: [["##"]])</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
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
 * Stacked Vertical Column Chart wrapper around the viz StackedColumnChart / MultipleStackedColumnChart.
 * To be used in conjunction with the chart toolbar.
 * @extends sap.ca.ui.charts.Chart
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.charts.StackedVerticalColumnChart
 */
sap.ca.ui.charts.Chart.extend("sap.ca.ui.charts.StackedVerticalColumnChart", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"type" : {type : "string", group : "Designtime", defaultValue : 'StackedColumn', deprecated: true},
		"minTouchSize" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '48px', deprecated: true},
		"dataLabelFormat" : {type : "any", group : "Appearance", defaultValue : [["##"]], deprecated: true}
	},
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content", deprecated: true}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.charts.StackedVerticalColumnChart with name <code>sClassName</code> 
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
 * @name sap.ca.ui.charts.StackedVerticalColumnChart.extend
 * @function
 */


/**
 * Getter for property <code>type</code>.
 * Mapped to charType property.
 *
 * Default value is <code>StackedColumn</code>
 *
 * @return {string} the value of property <code>type</code>
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * type has been deprecated since 1.16.3. Please use the chartType instead.
 * 
 * @name sap.ca.ui.charts.StackedVerticalColumnChart#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>StackedColumn</code> 
 *
 * @param {string} sType  new value for property <code>type</code>
 * @return {sap.ca.ui.charts.StackedVerticalColumnChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * type has been deprecated since 1.16.3. Please use the chartType instead.
 * 
 * @name sap.ca.ui.charts.StackedVerticalColumnChart#setType
 * @function
 */


/**
 * Getter for property <code>minTouchSize</code>.
 * Mapped to minShapeSize property.
 *
 * Default value is <code>'48px'</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>minTouchSize</code>
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * minTouchSize has been deprecated since 1.16.3. Please use the minShapeSize instead.
 * 
 * @name sap.ca.ui.charts.StackedVerticalColumnChart#getMinTouchSize
 * @function
 */

/**
 * Setter for property <code>minTouchSize</code>.
 *
 * Default value is <code>'48px'</code> 
 *
 * @param {sap.ui.core.CSSSize} sMinTouchSize  new value for property <code>minTouchSize</code>
 * @return {sap.ca.ui.charts.StackedVerticalColumnChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * minTouchSize has been deprecated since 1.16.3. Please use the minShapeSize instead.
 * 
 * @name sap.ca.ui.charts.StackedVerticalColumnChart#setMinTouchSize
 * @function
 */


/**
 * Getter for property <code>dataLabelFormat</code>.
 * Does not do anything anymore
 *
 * Default value is <code>[["##"]]</code>
 *
 * @return {any} the value of property <code>dataLabelFormat</code>
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * dataLabelFormat has been deprecated since 1.16.3. Please use the dataLabelFormatter instead.
 * 
 * @name sap.ca.ui.charts.StackedVerticalColumnChart#getDataLabelFormat
 * @function
 */

/**
 * Setter for property <code>dataLabelFormat</code>.
 *
 * Default value is <code>[["##"]]</code> 
 *
 * @param {any} oDataLabelFormat  new value for property <code>dataLabelFormat</code>
 * @return {sap.ca.ui.charts.StackedVerticalColumnChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * dataLabelFormat has been deprecated since 1.16.3. Please use the dataLabelFormatter instead.
 * 
 * @name sap.ca.ui.charts.StackedVerticalColumnChart#setDataLabelFormat
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * 
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * content has been deprecated since 1.16.3. The only visible content in the chart now is the internalVizChart.
 * 
 * @name sap.ca.ui.charts.StackedVerticalColumnChart#getContent
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
 * @return {sap.ca.ui.charts.StackedVerticalColumnChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * content has been deprecated since 1.16.3. The only visible content in the chart now is the internalVizChart.
 * 
 * @name sap.ca.ui.charts.StackedVerticalColumnChart#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ca.ui.charts.StackedVerticalColumnChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * content has been deprecated since 1.16.3. The only visible content in the chart now is the internalVizChart.
 * 
 * @name sap.ca.ui.charts.StackedVerticalColumnChart#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * content has been deprecated since 1.16.3. The only visible content in the chart now is the internalVizChart.
 * 
 * @name sap.ca.ui.charts.StackedVerticalColumnChart#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * content has been deprecated since 1.16.3. The only visible content in the chart now is the internalVizChart.
 * 
 * @name sap.ca.ui.charts.StackedVerticalColumnChart#removeAllContent
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
 * @deprecated Since version 1.16.3. 
 * 
 * content has been deprecated since 1.16.3. The only visible content in the chart now is the internalVizChart.
 * 
 * @name sap.ca.ui.charts.StackedVerticalColumnChart#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ca.ui.charts.StackedVerticalColumnChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * content has been deprecated since 1.16.3. The only visible content in the chart now is the internalVizChart.
 * 
 * @name sap.ca.ui.charts.StackedVerticalColumnChart#destroyContent
 * @function
 */


// Start of sap\ca\ui\charts\StackedVerticalColumnChart.js
jQuery.sap.require("sap.ca.ui.charts.ChartType");

sap.ca.ui.charts.StackedVerticalColumnChart.prototype.setType = function (sValue){
    var sChartType = "";
    switch (sValue) {
        case "viz/stacked_column":
            sChartType = sap.ca.ui.charts.ChartType.StackedColumn;
            break;
        case "viz/100_stacked_column":
            sChartType = sap.ca.ui.charts.ChartType.StackedColumn100;
            break;
        case "viz/dual_stacked_column":
            sChartType = sap.ca.ui.charts.ChartType.DualStackedColumn;
            break;
        case "viz/100_dual_stacked_column":
            sChartType = sap.ca.ui.charts.ChartType.DualStackedColumn100;
            break;

    }
    this.setProperty("chartType", sChartType);
    return this;
}

sap.ca.ui.charts.StackedVerticalColumnChart.prototype.getType = function (){
    return this.getChartType();
}

sap.ca.ui.charts.StackedVerticalColumnChart.prototype.setMinTouchSize = function (sValue){
    this.setMinShapeSize(sValue);
    return this;
}

sap.ca.ui.charts.StackedVerticalColumnChart.prototype.getMinTouchSize = function (){
    return this.getMinShapeSize();
}


sap.ca.ui.charts.StackedVerticalColumnChart.prototype.setDataLabelFormat = function (oFormat) {
	jQuery.sap.log.warning("This method has been deprectated. Please use dataLabelFormatter");
};