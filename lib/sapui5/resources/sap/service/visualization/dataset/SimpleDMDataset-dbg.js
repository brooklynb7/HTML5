/*!
 * CVOM HTML5 charts
 * 
 * 	(c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.service.visualization.dataset.SimpleDMDataset.
jQuery.sap.declare("sap.service.visualization.dataset.SimpleDMDataset");
jQuery.sap.require("sap.service.visualization.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new dataset/SimpleDMDataset.
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
 * <li>{@link #getDimensionName dimensionName} : string</li>
 * <li>{@link #getDimensionItems dimensionItems} : string[]</li>
 * <li>{@link #getMeasureNames measureNames} : string[]</li>
 * <li>{@link #getData data} : object[]</li>
 * <li>{@link #getTabularData tabularData} : object[]</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * the element used for feeding dataset for all kinds of charts.
 * @extends sap.ui.core.Element
 *
 * @author sap visualization 
 * @version 1.10.0
 *
 * @constructor   
 * @public
 * @deprecated Since version 1.7.2. 
 * This library has been deprecated in favor of the new charting library sap.viz. Please migrate as soon as possible as this older library will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.service.visualization.dataset.SimpleDMDataset
 */
sap.ui.core.Element.extend("sap.service.visualization.dataset.SimpleDMDataset", { metadata : {

	// ---- object ----
	deprecated : true,
	publicMethods : [
		// methods
		"setDataTable"
	],

	// ---- control specific ----
	library : "sap.service.visualization",
	properties : {
		"dimensionName" : {type : "string", group : "Data", defaultValue : null, bindable : "bindable"},
		"dimensionItems" : {type : "string[]", group : "Data", defaultValue : null, bindable : "bindable"},
		"measureNames" : {type : "string[]", group : "Data", defaultValue : null, bindable : "bindable"},
		"data" : {type : "object[]", group : "Data", defaultValue : null, bindable : "bindable"},
		"tabularData" : {type : "object[]", group : "Data", defaultValue : null, bindable : "bindable"}
	}
}});


/**
 * Creates a new subclass of class sap.service.visualization.dataset.SimpleDMDataset with name <code>sClassName</code> 
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
 * @name sap.service.visualization.dataset.SimpleDMDataset.extend
 * @function
 */


/**
 * Getter for property <code>dimensionName</code>.
 * A name for the dimension (index into measures array)
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>dimensionName</code>
 * @public
 * @name sap.service.visualization.dataset.SimpleDMDataset#getDimensionName
 * @function
 */


/**
 * Setter for property <code>dimensionName</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDimensionName  new value for property <code>dimensionName</code>
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.dataset.SimpleDMDataset#setDimensionName
 * @function
 */

/**
 * Binder for property <code>dimensionName</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.dataset.SimpleDMDataset#bindDimensionName
 * @function
 */


/**
 * Unbinder for property <code>dimensionName</code>.
 *
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.dataset.SimpleDMDataset#unbindDimensionName
 * @function

 */

/**
 * Getter for property <code>dimensionItems</code>.
 * An array of dimension items.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string[]} the value of property <code>dimensionItems</code>
 * @public
 * @name sap.service.visualization.dataset.SimpleDMDataset#getDimensionItems
 * @function
 */


/**
 * Setter for property <code>dimensionItems</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string[]} aDimensionItems  new value for property <code>dimensionItems</code>
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.dataset.SimpleDMDataset#setDimensionItems
 * @function
 */

/**
 * Binder for property <code>dimensionItems</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.dataset.SimpleDMDataset#bindDimensionItems
 * @function
 */


/**
 * Unbinder for property <code>dimensionItems</code>.
 *
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.dataset.SimpleDMDataset#unbindDimensionItems
 * @function

 */

/**
 * Getter for property <code>measureNames</code>.
 * An array of measures names.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string[]} the value of property <code>measureNames</code>
 * @public
 * @name sap.service.visualization.dataset.SimpleDMDataset#getMeasureNames
 * @function
 */


/**
 * Setter for property <code>measureNames</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string[]} aMeasureNames  new value for property <code>measureNames</code>
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.dataset.SimpleDMDataset#setMeasureNames
 * @function
 */

/**
 * Binder for property <code>measureNames</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.dataset.SimpleDMDataset#bindMeasureNames
 * @function
 */


/**
 * Unbinder for property <code>measureNames</code>.
 *
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.dataset.SimpleDMDataset#unbindMeasureNames
 * @function

 */

/**
 * Getter for property <code>data</code>.
 * An array of measures, with each measure as an array.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object[]} the value of property <code>data</code>
 * @public
 * @name sap.service.visualization.dataset.SimpleDMDataset#getData
 * @function
 */


/**
 * Setter for property <code>data</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object[]} aData  new value for property <code>data</code>
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.dataset.SimpleDMDataset#setData
 * @function
 */

/**
 * Binder for property <code>data</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.dataset.SimpleDMDataset#bindData
 * @function
 */


/**
 * Unbinder for property <code>data</code>.
 *
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.dataset.SimpleDMDataset#unbindData
 * @function

 */

/**
 * Getter for property <code>tabularData</code>.
 * An array of objects of equal structure, each containing a dimension label and a set of measures.
 * When this property is used, the values of the other properties are determined automatically:
 * the dimensionName is derived from the first property name in the first measure object,
 * the measureNames are derived from the remaining property names of the same object,
 * the dimensionItems (labels) are determined from the values of the property named after the dimensionName
 * and the data (measures) are determined from the remaining properties of all measure objects
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object[]} the value of property <code>tabularData</code>
 * @public
 * @name sap.service.visualization.dataset.SimpleDMDataset#getTabularData
 * @function
 */


/**
 * Setter for property <code>tabularData</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object[]} aTabularData  new value for property <code>tabularData</code>
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.dataset.SimpleDMDataset#setTabularData
 * @function
 */

/**
 * Binder for property <code>tabularData</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.dataset.SimpleDMDataset#bindTabularData
 * @function
 */


/**
 * Unbinder for property <code>tabularData</code>.
 *
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * @name sap.service.visualization.dataset.SimpleDMDataset#unbindTabularData
 * @function

 */

/**
 * setDataTable(dataTable) dataTable the control contains all the data set.
 *
 * @name sap.service.visualization.dataset.SimpleDMDataset.prototype.setDataTable
 * @function

 * @type void
 * @public
 */


// Start of sap/service/visualization/dataset/SimpleDMDataset.js
/*!
 * @copyright@
 */ 
jQuery.sap.require("sap.service.visualization.chart.ChartSourceCode.libs.json2");
jQuery.sap.require("sap.service.visualization.chart.ChartSourceCode.libs.saprivbase");
jQuery.sap.require("sap.service.visualization.chart.ChartSourceCode.libs.sapcommonglobalization");
jQuery.sap.require("sap.service.visualization.chart.ChartSourceCode.libs.saprivmodules");


sap.service.visualization.dataset.SimpleDMDataset.prototype.init = function() {
	// do something for initialization...
	this.dataset = new sap.riv.viz.shared.dataConverter.SimpleDMDataset();
};

sap.service.visualization.dataset.SimpleDMDataset.prototype.setDimensionItems = function(dimensionItems) {
	this.setProperty("dimensionItems", dimensionItems);
	this.dataset.dimensionLabels(dimensionItems);
};

sap.service.visualization.dataset.SimpleDMDataset.prototype.setDimensionName = function(dimensionName) {
    this.setProperty("dimensionName", dimensionName);
	this.dataset.dimensionName(dimensionName);
};

sap.service.visualization.dataset.SimpleDMDataset.prototype.setData = function(data) {
	this.setProperty("data", data);
	this.dataset.data(data);
};

sap.service.visualization.dataset.SimpleDMDataset.prototype.setMeasureNames = function(measureNames) {
	this.setProperty("measureNames", measureNames);
	this.dataset.measureNames(measureNames);
};

sap.service.visualization.dataset.SimpleDMDataset.prototype.setTabularData = function(tabularData) {
    this.setProperty("tabularData", tabularData);
	var dimensionLabelarr = new Array();
	var modelData = tabularData;
	var JSONObjkeys = new Array();

    var firstObjOfModelData= modelData[0];
    for(var key in firstObjOfModelData){
    	if(firstObjOfModelData.hasOwnProperty(key)){
    		JSONObjkeys.push(key);
    	}
     };
	var dimensionName = JSONObjkeys[0];
	for (var i = 0; i < modelData.length; i++) {
		if(typeof modelData[i]!=='undefined')
         dimensionLabelarr.push(modelData[i][dimensionName]);
	};

	var measureNamesArr = JSONObjkeys.slice(1);
	var dataArr = this.getMeasureValueNameArr(JSONObjkeys, modelData);
	this.setDimensionName(dimensionName);
	this.setData(dataArr);
	this.setMeasureNames(measureNamesArr);
	this.setDimensionItems(dimensionLabelarr);
};

sap.service.visualization.dataset.SimpleDMDataset.prototype.setDataTable = function(dataTable) {
       
       var tableData = dataTable.getModel().getData();
       if( !tableData ||  typeof tableData === "undefined") return;
       var modelData;
       for(prop in tableData){
    	   modelData = tableData[prop];
       }
       this.setTabularData(modelData);
   };

sap.service.visualization.dataset.SimpleDMDataset.prototype.getMeasureValueNameArr = function(JSONObjkeys, modelData) {
	var dataArr = new Array();
	for (var j = 1; j < JSONObjkeys.length; j++) {
		var tempMeasureValue = new Array();
		var measureName = JSONObjkeys[j];
		for (var i = 0; i < modelData.length; i++) {
		    for (var i = 0; i < modelData.length; i++) {
		    	if(typeof modelData[i]!=='undefined')
		        tempMeasureValue.push(modelData[i][measureName]);
			}
		}
		dataArr.push(tempMeasureValue);
	}

	return dataArr;
};

