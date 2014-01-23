// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview This file handles the resource bundles.
 */

(function () {
    "use strict";
    /*global jQuery, sap */

    // ensure that sap.ushell exists
    jQuery.sap.declare("sap.ushell.resources");

    jQuery.sap.require("sap.ui.model.resource.ResourceModel");

    sap.ushell.resources = {};

    sap.ushell.resources.getTranslationModel = function () {
     // create translation resource model
        var oTranslationModel = new sap.ui.model.resource.ResourceModel({
            bundleUrl : jQuery.sap.getModulePath(
                "sap.ushell.renderers.fiori2.resources.resources",
                ".properties"
            ),
            bundleLocale : sap.ui.getCore().getConfiguration().getLanguage()
        });
        return oTranslationModel;
    }

    sap.ushell.resources.i18nModel = sap.ushell.resources.getTranslationModel();
    sap.ushell.resources.i18n = sap.ushell.resources.i18nModel.getResourceBundle();
}());