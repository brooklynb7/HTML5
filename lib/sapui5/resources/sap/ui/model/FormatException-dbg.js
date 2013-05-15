/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides a filter for list bindings
jQuery.sap.declare("sap.ui.model.FormatException");
jQuery.sap.require("sap.ui.base.Exception");

/**
 * FormatException class
 *
 * This exception is thrown, when an error occurs while trying to convert a value of the model to
 * a specific property value in the UI.
 *
 */
sap.ui.model.FormatException = function(message) {
	this.name = "FormatException";
	this.message = message;
};
sap.ui.model.FormatException.prototype = jQuery.sap.newObject(sap.ui.base.Exception.prototype);