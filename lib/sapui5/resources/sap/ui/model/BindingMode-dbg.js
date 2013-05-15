/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides enumeration sap.ui.model.FilterOperator
jQuery.sap.declare("sap.ui.model.BindingMode");

/**
* @class
* Binding type definitions.
*
* @static
* @public
*/
sap.ui.model.BindingMode = {

		/**
		 * BindingMode default means that the binding mode of the model is used
		 * @public
		 */
		Default: "Default",

		/**
		 * BindingMode one time means value is only read from the model once
		 * @public
		 */
		OneTime: "OneTime",

		/**
		 * BindingMode one way means from model to view
		 * @public
		 */
		OneWay: "OneWay",

		/**
		 * BindingMode two way means from model to view and vice versa
		 * @public
		 */
		TwoWay: "TwoWay"

};