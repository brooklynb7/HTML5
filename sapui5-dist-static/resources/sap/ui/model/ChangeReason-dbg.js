/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides enumeration for changes in model
jQuery.sap.declare("sap.ui.model.ChangeReason");

/**
* @class
* Change Reason for ListBindings.
*
* @static
* @public
*/
sap.ui.model.ChangeReason = {

		/**
		 * The list was sorted
		 * @public
		 */
		Sort: "sort",

		/**
		 * The List was filtered
		 * @public
		 */
		Filter: "filter",

		/**
		 * The list has changed
		 * @public
		 */
		Change: "change",

		/**
		 * The list context has changed
		 * @public
		 */
		Context: "context",
		/**
		 * The list was refreshed
		 * @public
		 */
		Refresh: "refresh"
};