/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ushell.ui.footerbar.JamDiscussButton.
jQuery.sap.declare("sap.ushell.ui.footerbar.JamDiscussButton");
jQuery.sap.require("sap.ushell.library");
jQuery.sap.require("sap.m.Button");


/**
 * Constructor for a new ui/footerbar/JamDiscussButton.
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
 * Add your documentation for the newui/footerbar/JamDiscussButton
 * @extends sap.m.Button
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ushell.ui.footerbar.JamDiscussButton
 */
sap.m.Button.extend("sap.ushell.ui.footerbar.JamDiscussButton", { metadata : {

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
 * Creates a new subclass of class sap.ushell.ui.footerbar.JamDiscussButton with name <code>sClassName</code> 
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
 * @name sap.ushell.ui.footerbar.JamDiscussButton.extend
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
 * @name sap.ushell.ui.footerbar.JamDiscussButton#getBeforePressHandler
 * @function
 */

/**
 * Setter for property <code>beforePressHandler</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oBeforePressHandler  new value for property <code>beforePressHandler</code>
 * @return {sap.ushell.ui.footerbar.JamDiscussButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.footerbar.JamDiscussButton#setBeforePressHandler
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
 * @name sap.ushell.ui.footerbar.JamDiscussButton#getAfterPressHandler
 * @function
 */

/**
 * Setter for property <code>afterPressHandler</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oAfterPressHandler  new value for property <code>afterPressHandler</code>
 * @return {sap.ushell.ui.footerbar.JamDiscussButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.footerbar.JamDiscussButton#setAfterPressHandler
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
 * @name sap.ushell.ui.footerbar.JamDiscussButton#getJamData
 * @function
 */

/**
 * Setter for property <code>jamData</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oJamData  new value for property <code>jamData</code>
 * @return {sap.ushell.ui.footerbar.JamDiscussButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.footerbar.JamDiscussButton#setJamData
 * @function
 */


// Start of sap/ushell/ui/footerbar/JamDiscussButton.js
// Copyright (c) 2013 SAP AG, All Rights Reserved

(function () {
    "use strict";
    /*global jQuery, sap*/

    jQuery.sap.require("sap.ushell.resources");

    jQuery.sap.declare("sap.ushell.ui.footerbar.JamDiscussButton");

    /**
     * JamDiscussButton
     * 
     * @name sap.ushell.ui.footerbar.JamDiscussButton
     * @private
     * @since 1.15.0
     */
    sap.ushell.ui.footerbar.JamDiscussButton.prototype.init = function () {        
        jQuery.sap.require("sap.ushell.services.Container");

        var user = sap.ushell.Container && sap.ushell.Container.getUser(),
            self = this;

        this.setEnabled(user && user.isJamActive());        
        this.setIcon('sap-icon://discussion-2');
        this.setText(sap.ushell.resources.i18n.getText("discussBtn"));

        this.attachPress(function () {
            if (self.getBeforePressHandler()) {
                self.getBeforePressHandler()();
            }
            this.showDiscussDialog(function () {
                if (self.getAfterPressHandler()) {
                    self.getAfterPressHandler()();
                }
            });
        });
    };

    sap.ushell.ui.footerbar.JamDiscussButton.prototype.showDiscussDialog = function (cb) {
        jQuery.sap.require('sap.collaboration.components.fiori.feed.dialog.Component');
        if (!this.discussComponent) {
            this.discussComponent = sap.ui.getCore().createComponent({
                name: "sap.collaboration.components.fiori.feed.dialog"
            });
        }
        this.discussComponent.setSettings(this.getJamData());
        this.discussComponent.open();
        //TODO: call callback after dialog vanishes
        cb();
    };
}());