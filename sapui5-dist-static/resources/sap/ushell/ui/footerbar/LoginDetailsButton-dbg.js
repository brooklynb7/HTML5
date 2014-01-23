/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ushell.ui.footerbar.LoginDetailsButton.
jQuery.sap.declare("sap.ushell.ui.footerbar.LoginDetailsButton");
jQuery.sap.require("sap.ushell.library");
jQuery.sap.require("sap.m.Button");


/**
 * Constructor for a new ui/footerbar/LoginDetailsButton.
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
 * <ul></ul>
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
 * Add your documentation for the newui/footerbar/LoginDetailsButton
 * @extends sap.m.Button
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ushell.ui.footerbar.LoginDetailsButton
 */
sap.m.Button.extend("sap.ushell.ui.footerbar.LoginDetailsButton", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ushell"
}});


/**
 * Creates a new subclass of class sap.ushell.ui.footerbar.LoginDetailsButton with name <code>sClassName</code> 
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
 * @name sap.ushell.ui.footerbar.LoginDetailsButton.extend
 * @function
 */


// Start of sap/ushell/ui/footerbar/LoginDetailsButton.js
// Copyright (c) 2013 SAP AG, All Rights Reserved
/*global jQuery, sap*/

(function () {
    "use strict";
    /*global jQuery, sap, window*/

    jQuery.sap.require("sap.ui.layout.form.SimpleForm");
    jQuery.sap.require("sap.m.Label");
    jQuery.sap.require("sap.m.Text");
    jQuery.sap.require("sap.m.Input");
    jQuery.sap.require("sap.m.Dialog");
    jQuery.sap.require("sap.m.Button");
    jQuery.sap.require("sap.ushell.resources");
    jQuery.sap.require("sap.ushell.services.Container");

    jQuery.sap.declare("sap.ushell.ui.footerbar.LoginDetailsButton");

    /**
     * LoginDetailsButton
     *
     * @name sap.ushell.ui.footerbar.LoginDetailsButton
     * @private
     * @since 1.16.0
     */
    sap.ushell.ui.footerbar.LoginDetailsButton.prototype.init = function () {
        this.setIcon('sap-icon://person-placeholder');
        this.setWidth('100%');
        this.setText(sap.ushell.resources.i18n.getText("loginDetails"));
        this.attachPress(this.showLoginDetailsDialog);
        this.setEnabled(!!sap.ushell.Container);
    };

    sap.ushell.ui.footerbar.LoginDetailsButton.prototype.showLoginDetailsDialog = function () {
        var user = sap.ushell.Container.getUser() || {},
            translationBundle = sap.ushell.resources.i18n,
            oSimpleForm = new sap.ui.layout.form.SimpleForm({
                editable : false,
                content : [
                    new sap.m.Label({text: translationBundle.getText("userFld")}),
                    new sap.m.Text({text: user.getFullName() || ''}),
                    new sap.m.Label({text: translationBundle.getText("serverFld")}),
                    new sap.m.Text({text: window.location.host }),
                    new sap.m.Label({text: translationBundle.getText("languageFld")}),
                    new sap.m.Text({text: user.getLanguage() || ''})
                ]
            }),
            oDialog,
            okButton = new sap.m.Button({
                text : translationBundle.getText("okBtn"),
                press : function () {
                    oDialog.close();
                }
            });

        oDialog = new sap.m.Dialog({
            title: translationBundle.getText("loginDetails"),
            contentWidth : "300px",
            leftButton: okButton,
            afterClose : function () {
                oDialog.destroy();
            }
        });

        oDialog.addContent(oSimpleForm);
        oDialog.open();
    };
}());