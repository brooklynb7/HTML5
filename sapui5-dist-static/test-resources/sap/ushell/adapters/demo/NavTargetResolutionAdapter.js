// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The NavTargetResolution adapter for the demo platform.
 *
 * @version @version@
 */
(function () {
    "use strict";
    /*global jQuery, sap */
    jQuery.sap.declare("sap.ushell.adapters.demo.NavTargetResolutionAdapter");

    jQuery.sap.require("sap.ui.thirdparty.datajs");
    jQuery.sap.require("sap.ushell.shells.demo.fioriDemoConfig");
    
    /**
     * This demo adapter reads its configuration from the demo config, where the target applications are defined.
     * 
     * @param oSystem
     * @returns {sap.ushell.adapters.abap.NavTargetResolutionAdapter}
     */
    sap.ushell.adapters.demo.NavTargetResolutionAdapter = function (oSystem) {
    	
    	var oApplications = sap.ushell.shells.demo.fioriDemoConfig.applications;
    	
        this.resolveHashFragment = function (sHashFragment) {
            var oDeferred = new jQuery.Deferred();

            if (sHashFragment && sHashFragment.charAt(0) !== "#") {
                throw new sap.ushell.utils.Error("Hash fragment expected",
                        "sap.ushell.renderers.minimal.Shell");
            }
            sHashFragment = sHashFragment.substring(1);
            if (!sHashFragment) {
                oDeferred.resolve(undefined);
            } else {
            	console.info("Hash Fragment: " + sHashFragment);
            	window.setTimeout(function () {
            		var oResult = oApplications[sHashFragment];
            		if (oResult) {
            			oDeferred.resolve(oResult);
            		} else {
            			oDeferred.reject("Could not resolve link '" + sHashFragment + "'");
            		}
            	}, 1);
            }
            return oDeferred.promise();
        };
    };
}());
