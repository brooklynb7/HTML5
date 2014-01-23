/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides a bridge between the SAPUI5 runtime and the SAPUI5 Eclipse Tooling.
jQuery.sap.declare("sap.ui.test.TestEnv");
jQuery.sap.require("sap.ui.test.ControlTree");
jQuery.sap.require("sap.ui.debug.Highlighter");

/*global selectControl *///declare unusual global vars for JSLint/SAPUI5 validation

/**
 * Creates an instance of the class <code>sap.ui.debug.TestEnv</code>
 *
 * @class Central Class for the Test Environment
 *
 * @author SAPUI5 Designtime
 * @version 1.16.4
 * @constructor
 * @private
 */
sap.ui.test.TestEnv = function() {
};

/**
 * Will be invoked by <code>sap.ui.core.Core</code> to notify the plugin to start
 * @param {sap.ui.core.Core} oCore reference to the Core
 * @public
 */
sap.ui.test.TestEnv.prototype.startPlugin = function(oCore) {
	this.oCoreOther = oCore;
	this.oCore = oCore;
	this.oCore.attachControlEvent(this.onControlEvent, this);
	this.oWindow = window;
	this.oControlTree = new sap.ui.test.ControlTree(this.oCore, window);
};

/**
 * Will be invoked by <code>sap.ui.core.Core</code> to notify the plugin to start
 * @param {sap.ui.core.Core} oCore reference to the Core
 * @public
 */
sap.ui.test.TestEnv.prototype.stopPlugin = function() {
	this.oCore.detachControlEvent(this.onControlEvent, this);
	this.oCore = null;
};


/**
 * Callback method for listening to any event
 * @param {sap.ui.base.Event} oEvent event object
 * @private
 */
sap.ui.test.TestEnv.prototype.onControlEvent = function(oEvent) {

	// logging for testing!
//	jQuery.sap.log.info(oEvent.getParameter("browserEvent").getName() + " - " + this.oCore.isLocked());

	// special handling only if the Core is locked
	if (this.oCore.isLocked()) {

		// get the ref to the browser event
		var oBrowserEvent = oEvent.getParameter("browserEvent");

		// only act for click events
		if (oBrowserEvent.type == "click") {

			// determine the clicked element
			var oElement = oBrowserEvent.srcControl;
			if (oElement) {

//				// show the dimension rect and select the control
				var oSelectionHighlighter = new sap.ui.debug.Highlighter('sap-ui-testsuite-SelectionHighlighter');
				oSelectionHighlighter.highlight(oElement.getDomRef());

				// (TODO: function selectControl needs to be implemented by DesignTime!)
				if (selectControl) {
					selectControl(oElement.getId());
				}

			}

		}

	}

};

/**
 * Create the <code>sap.ui.test.TestEnv</code> plugin and register
 * it within the <code>sap.ui.core.Core</code>.
 */
(function(){
	var oThis = new sap.ui.test.TestEnv();
	sap.ui.getCore().registerPlugin(oThis);
}());