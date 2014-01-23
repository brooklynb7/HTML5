// Copyright (c) 2013 SAP AG, All Rights Reserved

    jQuery.sap.require("sap.ushell.services.ShellNavigation");
    jQuery.sap.require("sap.ushell.services.NavTargetResolution");        
(function () {
    "use strict";
    /*global document, external, jQuery, location, OData, open, sap, window */

    jQuery.sap.require("sap.ui.core.IconPool");
    jQuery.sap.require("sap.ui.thirdparty.datajs");
    jQuery.sap.require("sap.ushell.components.container.ApplicationContainer");


    /**
     * @name sap.ushell.renderers.fiorisandbox.Shell
     * @extends sap.ui.core.mvc.Controller
     */
    sap.ui.controller("sap.ushell.renderers.fiorisandbox.Shell", {

        /**
         * Set application container based on information in URL hash.
         */
        doHashChange : function (sShellHash) {
            var sHsh;
            if (!sShellHash) {
                sShellHash =  "";
            }
            if( sShellHash.charAt(0) !== '#'){
                sShellHash = '#' + sShellHash;
            }
            var oView = this.getView();

            //TODO factor out this callback and add tests for it
            sap.ushell.Container.getService("NavTargetResolution")
            .resolveHashFragment(sShellHash)
            .done(function (oApplication, sParameters) {
                var oContainer = oView.byId("container");
                if (oApplication) {
                	var url = oApplication.url;
                	if (url && sParameters) {
                		if (url.indexOf("?") > 0) {
                			url += "&" + sParameters;
                		} else {
                			url += "?" + sParameters;
                		}
                	}

                    oContainer.setAdditionalInformation(oApplication.additionalInformation);
                    oContainer.setApplicationType(oApplication.applicationType);
                    oContainer.setUrl(url);
                }
                oContainer.setVisible(true);
            });
        },

        /**
         * SAPUI5 lifecycle hook.
         */
        onInit: function () {
            var that = this;

            // dynamically load additional style sheet
            jQuery.sap.includeStyleSheet(jQuery.sap.getModulePath(
                "sap.ushell.renderers.fiorisandbox.styles.minimal",
                ".css"
            ));
            
            // initialize the shell navigation service; also triggers the doHashChange callback for the initial load (or an empty hash)
            sap.ushell.services.ShellNavigation.init(jQuery.proxy(this.doHashChange, this));
        },

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
        resolveHashFragment: function (sHashFragment) {
            var oApplication,
                oDeferred = new jQuery.Deferred(),
                iIndex,
                sParameters = "",
                oSandboxApplications =
                    jQuery.sap.getObject("sap.ushell.fiorisandbox.configuration.applications");

            if (sHashFragment && sHashFragment.charAt(0) !== "#") {
                throw new sap.ushell.utils.Error("Hash fragment expected",
                        "sap.ushell.renderers.fiorisandbox.Shell");
            }
            // TODO: use NavTargetResolution service and move this code to an adapter for the sandbox platform
            sHashFragment = sHashFragment.substring(1);
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
    });
}());
