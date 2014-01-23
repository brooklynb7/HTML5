/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ushell.ui.footerbar.AddBookmarkButton.
jQuery.sap.declare("sap.ushell.ui.footerbar.AddBookmarkButton");
jQuery.sap.require("sap.ushell.library");
jQuery.sap.require("sap.m.Button");


/**
 * Constructor for a new ui/footerbar/AddBookmarkButton.
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
 * <li>{@link #getAppData appData} : object</li></ul>
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
 * Add your documentation for the newui/footerbar/AddBookmarkButton
 * @extends sap.m.Button
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ushell.ui.footerbar.AddBookmarkButton
 */
sap.m.Button.extend("sap.ushell.ui.footerbar.AddBookmarkButton", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ushell",
	properties : {
		"beforePressHandler" : {type : "any", group : "Misc", defaultValue : null},
		"afterPressHandler" : {type : "any", group : "Misc", defaultValue : null},
		"appData" : {type : "object", group : "Misc", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.ushell.ui.footerbar.AddBookmarkButton with name <code>sClassName</code> 
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
 * @name sap.ushell.ui.footerbar.AddBookmarkButton.extend
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
 * @name sap.ushell.ui.footerbar.AddBookmarkButton#getBeforePressHandler
 * @function
 */

/**
 * Setter for property <code>beforePressHandler</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oBeforePressHandler  new value for property <code>beforePressHandler</code>
 * @return {sap.ushell.ui.footerbar.AddBookmarkButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.footerbar.AddBookmarkButton#setBeforePressHandler
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
 * @name sap.ushell.ui.footerbar.AddBookmarkButton#getAfterPressHandler
 * @function
 */

/**
 * Setter for property <code>afterPressHandler</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oAfterPressHandler  new value for property <code>afterPressHandler</code>
 * @return {sap.ushell.ui.footerbar.AddBookmarkButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.footerbar.AddBookmarkButton#setAfterPressHandler
 * @function
 */


/**
 * Getter for property <code>appData</code>.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>appData</code>
 * @public
 * @name sap.ushell.ui.footerbar.AddBookmarkButton#getAppData
 * @function
 */

/**
 * Setter for property <code>appData</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oAppData  new value for property <code>appData</code>
 * @return {sap.ushell.ui.footerbar.AddBookmarkButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ushell.ui.footerbar.AddBookmarkButton#setAppData
 * @function
 */


// Start of sap/ushell/ui/footerbar/AddBookmarkButton.js
// Copyright (c) 2013 SAP AG, All Rights Reserved
/*global jQuery, sap*/

(function () {
    "use strict";
    /*global sap, window, location */

    /**
     * AddBookmarkButton
     * 
     * @name sap.ushell.ui.footerbar.AddBookmarkButton
     * @private
     * @since 1.15.0
     */
    jQuery.sap.require("sap.ui.layout.form.SimpleForm");
    jQuery.sap.require("sap.m.Label");
    jQuery.sap.require("sap.m.Input");
    jQuery.sap.require("sap.m.Dialog");
    jQuery.sap.require("sap.m.Button");
    jQuery.sap.require("sap.ushell.resources");

    jQuery.sap.declare("sap.ushell.ui.footerbar.AddBookmarkButton");

    sap.ushell.ui.footerbar.AddBookmarkButton.prototype.init = function () {

        this.setIcon('sap-icon://add-favorite');
        this.setWidth('100%');
        this.setText(sap.ushell.resources.i18n.getText("addToHomePageBtn"));

        var self = this;

        this.attachPress(function () {
            if (self.getBeforePressHandler()) {
                self.getBeforePressHandler()();
            }

            this.showAddBookmarkDialog(function () {
                if (self.getAfterPressHandler()) {
                    self.getAfterPressHandler()();
                }
            });
        });
    };

    sap.ushell.ui.footerbar.AddBookmarkButton.prototype.showAddBookmarkDialog = function (cb) {

        var oResourceBundle = sap.ushell.resources.i18n,
            oBookmarkService = sap.ushell.Container.getService("Bookmark"),
            appData = this.getAppData() || {},
            oDialog = new sap.m.Dialog({ title: oResourceBundle.getText('addToHomePageBtn'), contentWidth: '300px', afterClose : function () { oDialog.destroy(); } }),
            oTitle = new sap.m.Label({text: oResourceBundle.getText('titleFld')}),
            oTitleInput = new sap.m.Input({value: appData.title || ''}),
            oSubTitle = new sap.m.Label({text: oResourceBundle.getText('subtitleFld')}),
            oSubTitleInput = new sap.m.Input({value: appData.subtitle || ''}),
            oIconImage = new sap.ui.core.Icon({src: appData.icon || 'sap-icon://home', size: '32px'}),
            oInfo = new sap.m.Label({text: oResourceBundle.getText('infoMsg')}),
            oInfoInput = new sap.m.Input({value: appData.info || ''}),
            oSimpleForm = new sap.ui.layout.form.SimpleForm({
                content: [
                    oIconImage,
                    oTitle,
                    oTitleInput,
                    oSubTitle,
                    oSubTitleInput,
                    oInfo,
                    oInfoInput
                ]
            }),
            okButton = new sap.m.Button({
                text: oResourceBundle.getText('okBtn'),
                press: function () {
                    oBookmarkService.addBookmark({
                        title: oTitleInput.getValue(),
                        subtitle: oSubTitleInput.getValue(),
                        url: location.hash || window.location.href,
                        icon: appData.icon,
                        info: oInfoInput.getValue(),
                        numberUnit: appData.numberUnit,
                        serviceUrl: appData.serviceUrl,
                        serviceRefreshInterval: appData.serviceRefreshInterval
                    });
                    oDialog.close();
                    cb();
                }
            }),
            cancelButton = new sap.m.Button({
                text: oResourceBundle.getText('cancelBtn'),
                press: function () {
                    oDialog.close();
                    cb();
                }
            });

        oDialog.setLeftButton(okButton);
        oDialog.setRightButton(cancelButton);

        oDialog.addContent(oSimpleForm);
        oDialog.open();
    };
}());