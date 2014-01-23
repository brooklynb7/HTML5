// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The Unified Shell's bootstrap code for development sandbox scenarios.
 *
 * @version @version@
 */
(function () {
    "use strict";
    /*global jQuery, sap, window */

    window['sap-ui-config'] = {
        "xx-bootTask": function (fnCallback) {
        	// SH: configuration for local deployment; ABAP config would require mappings in proxy servlet
        	// But since the major purpose of the sandbox platform is local deployment, we use this for now. Adaptive behavior might be optimal.
          //  jQuery.sap.registerModulePath("sap.ushell", "/ushell/");
            jQuery.sap.registerModulePath("sap.ushell.shells.sandbox", ".");
            jQuery.sap.registerModulePath("sap.ushell.adapters.sandbox", "../../adapters/sandbox/");
            jQuery.sap.registerModulePath("sap.ushell.renderers.fiorisandbox", "../../renderers/fiorisandbox/");
                                    
            jQuery.sap.require("sap.ushell.services.Container");
            // tell SAPUI5 that this boot task is done once the container has loaded
            sap.ushell.bootstrap("sandbox").done(fnCallback);
            //TODO what about .fail()?
        }
    };
}());
