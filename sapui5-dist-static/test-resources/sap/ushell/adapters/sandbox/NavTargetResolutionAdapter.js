// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The NavTargetResolution adapter for the ABAP platform.
 *
 * @version @version@
 */
(function () {
    "use strict";
    /*global jQuery, sap */
    jQuery.sap.declare("sap.ushell.adapters.sandbox.NavTargetResolutionAdapter");

    jQuery.sap.require("sap.ui.thirdparty.datajs");
    
    /**
     * THIS ADAPTER IS NOT FINAL - should be (re-)implemented by UI2Services.
     * 
     * @param oSystem
     * @returns {sap.ushell.adapters.sandbox.NavTargetResolutionAdapter}
     */
    sap.ushell.adapters.sandbox.NavTargetResolutionAdapter = function (oSystem) {    	
        /**
         * Resolves the URL hash fragment.
         * The hash fragment is resolved locally from sap.ushell.fiorisandbox.configuration.applications.
         * @param {string} sHashFragment
         *     The URL hash fragment as given in <code>location.hash</code>
         * @returns {object}
         *     A jQuery.Promise. Its <code>done()</code> function gets an object that you can use
         *     to create a {@link sap.ushell.components.container.ApplicationContainer}
         *     or <code>undefined</code> in case the hash fragment was empty.
         */        
        this.resolveHashFragment = function (sHashFragment) {         
            var oApplication,
            oDeferred = new jQuery.Deferred(),
            iIndex,
            sParameters = "",
            oSandboxApplications =
                jQuery.sap.getObject("sap.ushell.fiorisandbox.configuration.applications");


            if (sHashFragment && sHashFragment.charAt(0) !== "#") {
                throw new sap.ui2.srvc.Error("Hash fragment expected",
                        "sap.ushell.renderers.minimal.Shell");
            }
            sHashFragment = sHashFragment.substring(1);
            {
                iIndex = sHashFragment.indexOf("?");
                if (iIndex >= 0) {
                    sParameters = sHashFragment.slice(iIndex +1);
                    sHashFragment = sHashFragment.slice(0, iIndex);
                }
                oApplication = oSandboxApplications[sHashFragment];
                if (!oApplication) { //URL hash not defined
                    jQuery.sap.log.error("No application for URL hash", sHashFragment,
                    "sap.ushell.renderers.fiorisandbox.Shell.controller");
                }
             oDeferred.resolve(oApplication, sParameters);
             return oDeferred.promise();
           }
        }        
    };
}());
