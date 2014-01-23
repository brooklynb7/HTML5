// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The Unified Shell's bootstrap code for standalone demos.
 *
 * @version @version@
 */
(function () {
    "use strict";
    /*global jQuery, sap, window */

    window['sap-ui-config'] = {
        "xx-bootTask": function (fnCallback) {
            jQuery.sap.registerModulePath("sap.ushell.shells.demo", ".");
            jQuery.sap.registerModulePath("sap.ushell.adapters.demo", "../../adapters/demo/");

            //Load configuration for fiori demo
            jQuery.sap.require("sap.ushell.shells.demo.fioriDemoConfig");

            jQuery.sap.require("sap.ushell.services.Container");

            // tell SAPUI5 that this boot task is done once the container has loaded
            sap.ushell.bootstrap("demo").done(fnCallback);
            //TODO what about .fail()?
        }
    };
}());
