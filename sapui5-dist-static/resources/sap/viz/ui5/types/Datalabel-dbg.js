/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Datalabel.
jQuery.sap.declare("sap.viz.ui5.types.Datalabel");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");


/**
 * Constructor for a new ui5/types/Datalabel.
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
 * <li>{@link #getVisible visible} : boolean (default: false)</li>
 * <li>{@link #getIsDonut isDonut} : boolean (default: false)</li>
 * <li>{@link #getType type} : string (default: 'value')</li>
 * <li>{@link #getAutomaticInOutside automaticInOutside} : boolean (default: true)</li>
 * <li>{@link #getShowZero showZero} : boolean (default: true)</li>
 * <li>{@link #getIsGeoChart isGeoChart} : boolean (default: false)</li>
 * <li>{@link #getIsStackMode isStackMode} : boolean (default: false)</li>
 * <li>{@link #getIsPercentMode isPercentMode} : boolean (default: false)</li>
 * <li>{@link #getPositionPreference positionPreference} : boolean (default: false)</li>
 * <li>{@link #getOutsideVisible outsideVisible} : boolean (default: true)</li>
 * <li>{@link #getOutsidePosition outsidePosition} : sap.viz.ui5.types.Datalabel_outsidePosition (default: sap.viz.ui5.types.Datalabel_outsidePosition.up)</li>
 * <li>{@link #getPaintingMode paintingMode} : sap.viz.ui5.types.Datalabel_paintingMode (default: sap.viz.ui5.types.Datalabel_paintingMode.rectCoordinate)</li>
 * <li>{@link #getPosition position} : sap.viz.ui5.types.Datalabel_position (default: sap.viz.ui5.types.Datalabel_position.inside)</li>
 * <li>{@link #getOrientation orientation} : sap.viz.ui5.types.Datalabel_orientation (default: sap.viz.ui5.types.Datalabel_orientation.vertical)</li>
 * <li>{@link #getFormatString formatString} : any[][] (default: [[null]])</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.viz.ui5.core.BaseStructuredType#constructor sap.viz.ui5.core.BaseStructuredType}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Module ui5/types/Datalabel
 * @extends sap.viz.ui5.core.BaseStructuredType
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 * @name sap.viz.ui5.types.Datalabel
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Datalabel", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"visible" : {type : "boolean", group : "", defaultValue : false},
		"isDonut" : {type : "boolean", group : "", defaultValue : false, deprecated: true},
		"type" : {type : "string", group : "", defaultValue : 'value', deprecated: true},
		"automaticInOutside" : {type : "boolean", group : "", defaultValue : true, deprecated: true},
		"showZero" : {type : "boolean", group : "", defaultValue : true, deprecated: true},
		"isGeoChart" : {type : "boolean", group : "", defaultValue : false, deprecated: true},
		"isStackMode" : {type : "boolean", group : "", defaultValue : false, deprecated: true},
		"isPercentMode" : {type : "boolean", group : "", defaultValue : false, deprecated: true},
		"positionPreference" : {type : "boolean", group : "", defaultValue : false, deprecated: true},
		"outsideVisible" : {type : "boolean", group : "", defaultValue : true, deprecated: true},
		"outsidePosition" : {type : "sap.viz.ui5.types.Datalabel_outsidePosition", group : "", defaultValue : sap.viz.ui5.types.Datalabel_outsidePosition.up, deprecated: true},
		"paintingMode" : {type : "sap.viz.ui5.types.Datalabel_paintingMode", group : "", defaultValue : sap.viz.ui5.types.Datalabel_paintingMode.rectCoordinate, deprecated: true},
		"position" : {type : "sap.viz.ui5.types.Datalabel_position", group : "", defaultValue : sap.viz.ui5.types.Datalabel_position.inside, deprecated: true},
		"orientation" : {type : "sap.viz.ui5.types.Datalabel_orientation", group : "", defaultValue : sap.viz.ui5.types.Datalabel_orientation.vertical, deprecated: true},
		"formatString" : {type : "any[][]", group : "", defaultValue : [[null]]}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Datalabel with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.types.Datalabel.extend
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Set whether data label is visible.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.viz.ui5.types.Datalabel#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.viz.ui5.types.Datalabel} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Datalabel#setVisible
 * @function
 */


/**
 * Getter for property <code>isDonut</code>.
 * Set for donut chart only.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>isDonut</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#getIsDonut
 * @function
 */

/**
 * Setter for property <code>isDonut</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bIsDonut  new value for property <code>isDonut</code>
 * @return {sap.viz.ui5.types.Datalabel} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#setIsDonut
 * @function
 */


/**
 * Getter for property <code>type</code>.
 * Set the type of label
 *
 * Default value is <code>value</code>
 *
 * @return {string} the value of property <code>type</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>value</code> 
 *
 * @param {string} sType  new value for property <code>type</code>
 * @return {sap.viz.ui5.types.Datalabel} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#setType
 * @function
 */


/**
 * Getter for property <code>automaticInOutside</code>.
 * if it is true, the data label will be automatically placed outside when data label postion property is inside and vice versa.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>automaticInOutside</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#getAutomaticInOutside
 * @function
 */

/**
 * Setter for property <code>automaticInOutside</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bAutomaticInOutside  new value for property <code>automaticInOutside</code>
 * @return {sap.viz.ui5.types.Datalabel} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#setAutomaticInOutside
 * @function
 */


/**
 * Getter for property <code>showZero</code>.
 * if it is true, the value zero will be shown in data label.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showZero</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#getShowZero
 * @function
 */

/**
 * Setter for property <code>showZero</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowZero  new value for property <code>showZero</code>
 * @return {sap.viz.ui5.types.Datalabel} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#setShowZero
 * @function
 */


/**
 * Getter for property <code>isGeoChart</code>.
 * if it is true, it is a geo chart.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>isGeoChart</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#getIsGeoChart
 * @function
 */

/**
 * Setter for property <code>isGeoChart</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bIsGeoChart  new value for property <code>isGeoChart</code>
 * @return {sap.viz.ui5.types.Datalabel} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#setIsGeoChart
 * @function
 */


/**
 * Getter for property <code>isStackMode</code>.
 * Set for stack chart only.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>isStackMode</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#getIsStackMode
 * @function
 */

/**
 * Setter for property <code>isStackMode</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bIsStackMode  new value for property <code>isStackMode</code>
 * @return {sap.viz.ui5.types.Datalabel} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#setIsStackMode
 * @function
 */


/**
 * Getter for property <code>isPercentMode</code>.
 * Set for percent chart only.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>isPercentMode</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#getIsPercentMode
 * @function
 */

/**
 * Setter for property <code>isPercentMode</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bIsPercentMode  new value for property <code>isPercentMode</code>
 * @return {sap.viz.ui5.types.Datalabel} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#setIsPercentMode
 * @function
 */


/**
 * Getter for property <code>positionPreference</code>.
 * If it is true, the data label position is defined by property outsidePosition no matter whether data label value is negative.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>positionPreference</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#getPositionPreference
 * @function
 */

/**
 * Setter for property <code>positionPreference</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bPositionPreference  new value for property <code>positionPreference</code>
 * @return {sap.viz.ui5.types.Datalabel} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#setPositionPreference
 * @function
 */


/**
 * Getter for property <code>outsideVisible</code>.
 * when data label is oustide, it can control whether it is visible or not.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>outsideVisible</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#getOutsideVisible
 * @function
 */

/**
 * Setter for property <code>outsideVisible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bOutsideVisible  new value for property <code>outsideVisible</code>
 * @return {sap.viz.ui5.types.Datalabel} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#setOutsideVisible
 * @function
 */


/**
 * Getter for property <code>outsidePosition</code>.
 * when data label is oustide, its position is above the element.
 *
 * Default value is <code>up</code>
 *
 * @return {sap.viz.ui5.types.Datalabel_outsidePosition} the value of property <code>outsidePosition</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#getOutsidePosition
 * @function
 */

/**
 * Setter for property <code>outsidePosition</code>.
 *
 * Default value is <code>up</code> 
 *
 * @param {sap.viz.ui5.types.Datalabel_outsidePosition} oOutsidePosition  new value for property <code>outsidePosition</code>
 * @return {sap.viz.ui5.types.Datalabel} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#setOutsidePosition
 * @function
 */


/**
 * Getter for property <code>paintingMode</code>.
 * Set painting mode of data labels.
 *
 * Default value is <code>rectCoordinate</code>
 *
 * @return {sap.viz.ui5.types.Datalabel_paintingMode} the value of property <code>paintingMode</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#getPaintingMode
 * @function
 */

/**
 * Setter for property <code>paintingMode</code>.
 *
 * Default value is <code>rectCoordinate</code> 
 *
 * @param {sap.viz.ui5.types.Datalabel_paintingMode} oPaintingMode  new value for property <code>paintingMode</code>
 * @return {sap.viz.ui5.types.Datalabel} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#setPaintingMode
 * @function
 */


/**
 * Getter for property <code>position</code>.
 * Set position of data labels.
 *
 * Default value is <code>inside</code>
 *
 * @return {sap.viz.ui5.types.Datalabel_position} the value of property <code>position</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#getPosition
 * @function
 */

/**
 * Setter for property <code>position</code>.
 *
 * Default value is <code>inside</code> 
 *
 * @param {sap.viz.ui5.types.Datalabel_position} oPosition  new value for property <code>position</code>
 * @return {sap.viz.ui5.types.Datalabel} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#setPosition
 * @function
 */


/**
 * Getter for property <code>orientation</code>.
 * Set orientation of data labels.
 *
 * Default value is <code>vertical</code>
 *
 * @return {sap.viz.ui5.types.Datalabel_orientation} the value of property <code>orientation</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#getOrientation
 * @function
 */

/**
 * Setter for property <code>orientation</code>.
 *
 * Default value is <code>vertical</code> 
 *
 * @param {sap.viz.ui5.types.Datalabel_orientation} oOrientation  new value for property <code>orientation</code>
 * @return {sap.viz.ui5.types.Datalabel} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Datalabel#setOrientation
 * @function
 */


/**
 * Getter for property <code>formatString</code>.
 * Set format string of datalabel.As we may have dual axis with serveral measures,the first array is applied to primary axis and the second one is applied to the second axis.If the length of format string list is less than the length of data series, the last format string in the list will be applied to exceeded data series.Any character in "MDYHSAmdyhsa#?%0@" is reserved as a token for format code. A simple sample is like this [["0.00%"],["0.00%"]].
 *
 * Default value is <code>null</code>
 *
 * @return {any[][]} the value of property <code>formatString</code>
 * @public
 * @name sap.viz.ui5.types.Datalabel#getFormatString
 * @function
 */

/**
 * Setter for property <code>formatString</code>.
 *
 * Default value is <code>null</code> 
 *
 * @param {any[][]} aFormatString  new value for property <code>formatString</code>
 * @return {sap.viz.ui5.types.Datalabel} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Datalabel#setFormatString
 * @function
 */


// Start of sap/viz/ui5/types/Datalabel.js
