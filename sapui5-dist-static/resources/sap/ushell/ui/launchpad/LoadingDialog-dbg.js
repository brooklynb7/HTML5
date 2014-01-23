/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ushell.ui.launchpad.LoadingDialog.
jQuery.sap.declare("sap.ushell.ui.launchpad.LoadingDialog");
jQuery.sap.require("sap.ushell.library");
jQuery.sap.require("sap.m.BusyDialog");


/**
 * Constructor for a new ui/launchpad/LoadingDialog.
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
 * <li>{@link #getIconUri iconUri} : sap.ui.core.URI</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.m.BusyDialog#constructor sap.m.BusyDialog}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Displays a loading dialog with an indicator that an app is loading
 * @extends sap.m.BusyDialog
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ushell.ui.launchpad.LoadingDialog
 */
sap.m.BusyDialog.extend("sap.ushell.ui.launchpad.LoadingDialog", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ushell",
	properties : {
		"iconUri" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.ushell.ui.launchpad.LoadingDialog with name <code>sClassName</code> 
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
 * @name sap.ushell.ui.launchpad.LoadingDialog.extend
 * @function
 */


/**
 * Getter for property <code>iconUri</code>.
 * the sap-icon://-style URI of an icon
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconUri</code>
 * @public
 * @name sap.ushell.ui.launchpad.LoadingDialog#getIconUri
 * @function
 */

/**
 * Setter for property <code>iconUri</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconUri  new value for property <code>iconUri</code>
 * @return {sap.ushell.ui.launchpad.LoadingDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.launchpad.LoadingDialog#setIconUri
 * @function
 */


// Start of sap/ushell/ui/launchpad/LoadingDialog.js
// Copyright (c) 2013 SAP AG, All Rights Reserved
(function () {
    "use strict";
    /*global jQuery, sap, window */
    /*jslint nomen: true*/
    jQuery.sap.require("sap.ui.core.Icon");

    sap.ushell.ui.launchpad.LoadingDialog.prototype.init = function () {
        // call parent
        sap.m.BusyDialog.prototype.init.call(this, arguments);
        this.oIcon = new sap.ui.core.Icon();
    };

    sap.ushell.ui.launchpad.LoadingDialog.prototype.exit = function () {
        // call parent
        sap.m.BusyDialog.prototype.exit.call(this, arguments);
        if (this.oIcon) {
            this.oIcon.destroy();
            this.oIcon = null;
        }
    };

    sap.ushell.ui.launchpad.LoadingDialog.prototype.isOpen = function () {
        var oPopup = this._oPopup;
        return oPopup.isOpen();
    };

    sap.ushell.ui.launchpad.LoadingDialog.prototype.setPopupVisible = function (visible) {
        this.toggleStyleClass("sapUshellLoadingDialogInvisible", !visible);
    };

    sap.ushell.ui.launchpad.LoadingDialog.prototype.setAppInfoVisible = function (visible) {
        this.toggleStyleClass("sapUshellLoadingDialogAppDataInvisible", !visible);
    };

    sap.ushell.ui.launchpad.LoadingDialog.prototype.openLoadingScreen = function () {
        if (!this._oPopup.isOpen()) {
            this.setPopupVisible(true);
            this.open();
        }
    };

    sap.ushell.ui.launchpad.LoadingDialog.prototype.showAppInfo = function (sAppTitle, sIconUri) {
        var that = this,
            fTimeoutHelper = function (that) {
                that.setAppInfoVisible(true);
            };
        this.setText(sAppTitle);
        this.setIconUri(sIconUri);
        this.oIcon.setSrc(sIconUri);
        window.setTimeout(function () {
            fTimeoutHelper(that);
        }, 50);
    };

    sap.ushell.ui.launchpad.LoadingDialog.prototype.closeLoadingScreen = function () {
        var that = this,
            fTimeoutHelper = function (that) {
                that.setText(null);
                that.setIconUri(null);
                that.setAppInfoVisible(false);
                that.close();
            };
        if (this._oPopup.isOpen()) {
            this.setPopupVisible(false);
            window.setTimeout(function () {
                fTimeoutHelper(that);
            }, 300);
        }
    };
}());