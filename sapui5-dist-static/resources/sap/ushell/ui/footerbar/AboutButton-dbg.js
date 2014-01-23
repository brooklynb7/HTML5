/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ushell.ui.footerbar.AboutButton.
jQuery.sap.declare("sap.ushell.ui.footerbar.AboutButton");
jQuery.sap.require("sap.ushell.library");
jQuery.sap.require("sap.m.Button");


/**
 * Constructor for a new ui/footerbar/AboutButton.
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
 * Add your documentation for the newui/footerbar/AboutButton
 * @extends sap.m.Button
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ushell.ui.footerbar.AboutButton
 */
sap.m.Button.extend("sap.ushell.ui.footerbar.AboutButton", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ushell"
}});


/**
 * Creates a new subclass of class sap.ushell.ui.footerbar.AboutButton with name <code>sClassName</code> 
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
 * @name sap.ushell.ui.footerbar.AboutButton.extend
 * @function
 */


// Start of sap/ushell/ui/footerbar/AboutButton.js
// Copyright (c) 2013 SAP AG, All Rights Reserved

(function () {
    "use strict";
    /*global jQuery, sap, navigator*/

    jQuery.sap.require("sap.ui.layout.form.SimpleForm");
    jQuery.sap.require("sap.m.ObjectHeader");
    jQuery.sap.require("sap.m.VBox");
    jQuery.sap.require("sap.m.Dialog");
    jQuery.sap.require("sap.m.Button");
    jQuery.sap.require("sap.ushell.resources");

    jQuery.sap.declare("sap.ushell.ui.footerbar.AboutButton");

    /**
     * AboutButton
     *
     * @name sap.ushell.ui.footerbar.AboutButton
     * @private
     * @since 1.16.0
     */
    sap.ushell.ui.footerbar.AboutButton.prototype.init = function () {
        this.setIcon('sap-icon://hint');
        this.setWidth('100%');
        this.setText(sap.ushell.resources.i18n.getText("about"));
        this.attachPress(this.showAboutDialog);
    };

    sap.ushell.ui.footerbar.AboutButton.prototype.showAboutDialog = function () {

        jQuery.sap.require("sap.ushell.services.AppConfiguration");

        var translationBundle = sap.ushell.resources.i18n,
            metaData = sap.ushell.services.AppConfiguration.getMetadata(),
            oSimpleForm = new sap.ui.layout.form.SimpleForm({
                editable: false,
                content : [
                    new sap.m.Label({text : translationBundle.getText("technicalName")}),
                    new sap.m.Text({text : metaData.libraryName || ''}),
                    new sap.m.Label({text : translationBundle.getText("fioriVersionFld")}),
                    new sap.m.Text({text : metaData.version || ''}),
//                    new sap.m.Label({text : translationBundle.getText("fioriBuildFld")}),
//                    new sap.m.Text({text : sap.ui.buildinfo.buildtime || ''}),
                    new sap.m.Label({text : translationBundle.getText("sapui5Fld")}),
                    new sap.m.Text({text : (sap.ui.version || "") + (' (' + (sap.ui.buildinfo.buildtime || "") + ')') || ''}),
                    new sap.m.Label({text : translationBundle.getText("userAgentFld")}),
                    new sap.m.Text({text : navigator.userAgent || ''}),
                    new sap.m.Label({text : ''}),
                    //TODO hardcoded!! Where to get this from?
                    new sap.m.Link("sapUshellUiFooterbarAboutButtonCopyright", {
                        //TODO still hardcoded!
                        text : "© 2013 SAP AG. All rights reserved.",
                        href : "http://www.sap.com/corporate-en/legal/copyright/index.epx",
                        target: '_blank'
                    })
                ]
            }),
            oHeader = new sap.m.ObjectHeader({
                title : metaData.title,
                icon : metaData.icon
            }).addStyleClass('sapUshellAboutDialogHeader'),
            oVBox = new sap.m.VBox({
                items: [oHeader, oSimpleForm]
            }),
            oDialog,
            okButton = new sap.m.Button({
                text : translationBundle.getText("okBtn"),
                press : function () {
                    oDialog.close();
                }
            });

        oDialog = new sap.m.Dialog({
            title: translationBundle.getText("about"),
            contentWidth : "250px",
            leftButton: okButton,
            afterClose : function () {
                oDialog.destroy();
            }
        });

        oDialog.addContent(oVBox);
        oDialog.open();
    };
}());