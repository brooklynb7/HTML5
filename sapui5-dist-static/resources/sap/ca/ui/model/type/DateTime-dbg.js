/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides the base implementation for all model implementations
jQuery.sap.declare("sap.ca.ui.model.type.DateTime");
jQuery.sap.require("sap.ca.ui.model.type.Date");

/**
 * Constructor for a DateTime type.
 *
 * @class
 * This class represents datetime simple types.
 *
 * @extends sap.ca.ui.model.type.Date
 *
 * @author SAP AG
 *
 * @constructor
 * @public
 * @param {object} [oFormatOptions] options used to create a DateFormat for formatting / parsing to/from external values and 
 *           optionally for a second DateFormat to convert between the data source format (Model) and the internally used JavaScript Date.format. 
 *           For both DateFormat objects, the same options are supported as for {@link sap.ca.ui.model.format.DateFormat.getDateTimeInstance DateFormat.getDateTimeInstance}.
 *           You can use an extra boolean option UTC to format in UTC ({style: "short", UTC: true}).

 *           Note that this differs from the base type.
 * @param {object} [oConstraints] value constraints. Supports the same kind of constraints as its base type Date, but note the different format options (Date vs. DateTime) 
 * @name sap.ca.ui.model.type.DateTime
 */
sap.ca.ui.model.type.Date.extend("sap.ca.ui.model.type.DateTime", /** @lends sap.ca.ui.model.type.DateTime */ {
	
	constructor : function () {
		sap.ca.ui.model.type.Date.apply(this, arguments);
		this.sName = "DateTime";
	}

});

/**
 * Creates a new subclass of class sap.ca.ui.model.type.DateTime with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.ca.ui.model.type.DateTime.extend
 * @function
 */

/**
 * Called by the framework when any localization setting changed
 * @see sap.ui.model.Date.prototype._handleLocalizationChange
 * @private
 */
sap.ca.ui.model.type.DateTime.prototype._handleLocalizationChange = function() {
	this.oOutputFormat = sap.ca.ui.model.format.DateFormat.getDateTimeInstance(this.oFormatOptions);
	if (this.oFormatOptions.source) {
		this.oInputFormat = sap.ca.ui.model.format.DateFormat.getDateTimeInstance(this.oFormatOptions.source);
	}
};

