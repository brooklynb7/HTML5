/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ushell.ui.footerbar.JamShareButton.
jQuery.sap.declare("sap.ushell.ui.footerbar.JamShareButton");
jQuery.sap.require("sap.ushell.library");
jQuery.sap.require("sap.m.Button");


/**
 * Constructor for a new ui/footerbar/JamShareButton.
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
 * <li>{@link #getBeforePressHandler beforePressHandler} : any</li>
 * <li>{@link #getAfterPressHandler afterPressHandler} : any</li>
 * <li>{@link #getJamData jamData} : object</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.m.Button#constructor sap.m.Button}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Add your documentation for the newui/footerbar/JamShareButton
 * @extends sap.m.Button
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ushell.ui.footerbar.JamShareButton
 */
sap.m.Button.extend("sap.ushell.ui.footerbar.JamShareButton", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ushell",
	properties : {
		"beforePressHandler" : {type : "any", group : "Misc", defaultValue : null},
		"afterPressHandler" : {type : "any", group : "Misc", defaultValue : null},
		"jamData" : {type : "object", group : "Misc", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.ushell.ui.footerbar.JamShareButton with name <code>sClassName</code> 
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
 * @name sap.ushell.ui.footerbar.JamShareButton.extend
 * @function
 */


/**
 * Getter for property <code>beforePressHandler</code>.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>beforePressHandler</code>
 * @public
 * @name sap.ushell.ui.footerbar.JamShareButton#getBeforePressHandler
 * @function
 */

/**
 * Setter for property <code>beforePressHandler</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oBeforePressHandler  new value for property <code>beforePressHandler</code>
 * @return {sap.ushell.ui.footerbar.JamShareButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.footerbar.JamShareButton#setBeforePressHandler
 * @function
 */


/**
 * Getter for property <code>afterPressHandler</code>.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>afterPressHandler</code>
 * @public
 * @name sap.ushell.ui.footerbar.JamShareButton#getAfterPressHandler
 * @function
 */

/**
 * Setter for property <code>afterPressHandler</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oAfterPressHandler  new value for property <code>afterPressHandler</code>
 * @return {sap.ushell.ui.footerbar.JamShareButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.footerbar.JamShareButton#setAfterPressHandler
 * @function
 */


/**
 * Getter for property <code>jamData</code>.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>jamData</code>
 * @public
 * @name sap.ushell.ui.footerbar.JamShareButton#getJamData
 * @function
 */

/**
 * Setter for property <code>jamData</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oJamData  new value for property <code>jamData</code>
 * @return {sap.ushell.ui.footerbar.JamShareButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.footerbar.JamShareButton#setJamData
 * @function
 */


// Start of sap/ushell/ui/footerbar/JamShareButton.js
// Copyright (c) 2013 SAP AG, All Rights Reserved

(function () {
    "use strict";
    /*global jQuery, sap*/

    jQuery.sap.declare("sap.ushell.ui.footerbar.JamShareButton");

    jQuery.sap.require("sap.ushell.resources");

    /**
     * JamShareButton
     *
     * @name sap.ushell.ui.footerbar.JamShareButton
     * @private
     * @since 1.15.0
     */
    sap.ushell.ui.footerbar.JamShareButton.prototype.init = function () {
        jQuery.sap.require("sap.ushell.services.Container");

        var user = sap.ushell.Container && sap.ushell.Container.getUser(),
            self = this;

        this.setEnabled(user && user.isJamActive());
        this.setIcon('sap-icon://share-2');
        this.setText(sap.ushell.resources.i18n.getText("shareBtn"));

        this.attachPress(function () {
            if (self.getBeforePressHandler()) {
                self.getBeforePressHandler()();
            }
            this.showShareDialog(function () {
                if (self.getAfterPressHandler()) {
                    self.getAfterPressHandler()();
                }
            });
        });
    };

    sap.ushell.ui.footerbar.JamShareButton.prototype.showShareDialog = function () {
        jQuery.sap.require('sap.collaboration.components.fiori.sharing.dialog.Component');
        if (!this.shareComponent) {
            this.shareComponent = sap.ui.getCore().createComponent({
                name: "sap.collaboration.components.fiori.sharing.dialog"
            });
        }
        this.shareComponent.setSettings(this.getJamData());
        this.shareComponent.open();

        //TODO: call callback after dialog vanishes
        cb();
    };

    sap.ushell.ui.footerbar.JamShareButton.prototype.exit = function () {
        if (this.shareComponent) {
            this.shareComponent.destroy();
        }
    };
}());