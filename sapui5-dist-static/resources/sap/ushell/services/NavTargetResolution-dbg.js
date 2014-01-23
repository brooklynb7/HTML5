// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The NavTargetResolution service.
 */
(function () {
    "use strict";
    /*global jQuery, sap, localStorage, window */
    jQuery.sap.declare("sap.ushell.services.NavTargetResolution");

    /**
     * This method MUST be called by the Unified Shell's container only, others MUST call
     * <code>sap.ushell.Container.getService("NavTargetResolution")</code>.
     * Constructs a new instance of the navigation target resolution service.
     *
     * @class The Unified Shell's internal navigation target resolution service
     *        
     * @constructor
     * @see sap.ushell.services.Container#getService
     * @since 1.15.0
     * @private
     */
    sap.ushell.services.NavTargetResolution = function (oAdapter, oContainerInterface) {


        this.mCustomResolvers = [];
        /**
         * Resolves the URL hash fragment.
         * The hash fragment is resolved with the /sap/opu/odata/UI2/INTEROP/ResolveLink oData
         * function import. This is an asynchronous operation.
         * @param {string} sHashFragment
         *     The URL hash fragment as given in <code>location.hash</code>
         * @returns {object}
         *     A jQuery.Promise. Its <code>done()</code> function gets an object that you can use
         *     to create a {@link sap.ushell.renderers.minimal.embed.ApplicationContainer}
         *     or <code>undefined</code> in case the hash fragment was empty.
         * @private
         */
        this.resolveHashFragment = function (sHashFragment) {
            var i, oResolver;
            for (i = 0; i < this.mCustomResolvers.length; i = i + 1) {
                oResolver = this.mCustomResolvers[i];
                if (oResolver.isApplicable(sHashFragment)) {
                    jQuery.sap.log.info("NavTargetResolution: custom resolver " + oResolver.name + " resolves " + sHashFragment);
                    return oResolver.resolveHashFragment(sHashFragment);
                }
            }
            return oAdapter.resolveHashFragment(sHashFragment);
        };

        this.baseResolveHashFragment = function (sHashFragment) {
            return oAdapter.resolveHashFragment(sHashFragment);
        };

        /** is chaining platform dependent?
         *  => no,
         *
         */
        this.registerCustomResolver = function (oObject) {
            // verify oObject
            if (typeof oObject.name !== "string") {
                jQuery.sap.log.info("NavTargetResolution: Custom Resolver must have name {string} member");
            }
            if (typeof oObject.isApplicable !== "function") {
                jQuery.sap.log.info("NavTargetResolution: Custom Resolver must have isApplicable member");
            }
            if (typeof oObject.resolveHashFragment !== "function") {
                jQuery.sap.log.info("NavTargetResolution: Custom Resolver must have \"resolveHashFragment\" member");
            }
            this.mCustomResolvers.push(oObject);
        };

        // register one fixed resolver

        // this resolver
        // a) demonstrates a sample resolver
        // b) implements resolution of the following targets:
        //       #Test-test =>  url:  /test/test      Component.js
        //       #Test-test2 => url:  /test2/test2   Component.js
        //       #Test-local1 => local storage key  "sap.ushell#Test-local1"
        //       #Test-local2 => local storage key  "sap.ushell#Test-local1"
        //       #Test-url1 => sap-ushell-test-local1 , sap-ushell-test-url1-additionalInformation



        this.registerCustomResolver({ name : "MyFixedResolver",
            cleanHash : function (sHashFragment) {
                if (sHashFragment === "") {
                    return undefined;
                }
                var res = sap.ushell.Container.getService("URLParsing").parseShellHash(sHashFragment.substring(1));
                if (!res) {
                    return undefined;
                }
                sHashFragment = "#" + res.semanticObject + "-" + res.action;
                return sHashFragment;
            },
            isApplicable: function (sHashFragment) {
                sHashFragment = this.cleanHash(sHashFragment);
                if (!sHashFragment) {
                    return false;
                }
                return sHashFragment === "#Test-test"
                    || sHashFragment === "#Test-test2"
                    || sHashFragment === "#Test-local1"
                    || sHashFragment === "#Test-local2"
                    || sHashFragment === "#Test-config"
                    || sHashFragment === "#Test-clear";
            },
            resolveHashFragment : function (sHashFragment) {
                var oDeferred = new jQuery.Deferred(),
                    hardCoded = null,
                    res,
                    oLocalx,
                    additionalInformation,
                    sPrefix,
                    url;
                sHashFragment = this.cleanHash(sHashFragment);
                if (!sHashFragment) {
                    return false;
                }
                hardCoded = {
                    "#Test-config" : {
                        applicationType: "URL",
                        url: "/sap/bc/ui5_ui5/ui2/ushell/test-resources/sap/ushell/demoapps/FioriSandboxConfigApp",
                        additionalInformation : //"SAPUI5.Component=AppNavSample"
                            "SAPUI5.Component=sap.ushell.demoapps.FioriSandboxConfigApp"
                    },
                    "#Test-test" : {
                        applicationType: "URL",
                        url : "/sap/bc/ui5_ui5/ui2/ushell/test-resources/sap/ushell/demoapps/AppNavSample?AA=BBB",
                        additionalInformation :  "SAPUI5.Component=AppNavSample"
                    },
                    "#Test-test2 " : {
                        applicationType: "URL",
                        url: "/sap/bc/ui5_ui5/ui2/ushell/test-resources/sap/ushell/demoapps/FioriSandboxDefaultApp",
                        additionalInformation : "SAPUI5.Component=sap.ushell.demoapps.FioriSandboxDefaultApp"
                    }
                };

                function getFromLocalStorage(sKey) {
                    if (localStorage) {
                        return localStorage[sKey];
                    }
                    return undefined;
                }


                function getURLParameter(sKey) {
                    return jQuery.sap.getUriParameters().get(sKey);
                }

                function addToLocalStorage(sKey, sValue) {
                    if (localStorage) {
                        localStorage[sKey] = sValue;
                    }
                }

                if (hardCoded[sHashFragment]) {
                    res = hardCoded[sHashFragment];
                } else if (sHashFragment === "#Test-clean") {
                    addToLocalStorage("sap.ushell.#Test-local1", undefined);
                    addToLocalStorage("sap.ushell.#Test-local2", undefined);
                    jQuery.sap.log.info("NavTargetResolution: Local storage keys for #Test have been cleared");
                    res = hardCoded["#Test-config"];
                } else if (sHashFragment === "#Test-local1" || sHashFragment === "#Test-local2") {
                    res = getFromLocalStorage("sap.ushell." + sHashFragment);
                    if (!res) {
                        oLocalx = { applicationType : "URL" };
                    } else {
                        oLocalx = JSON.parse(res);
                    }
                    // Configuring an app via url parameters is restricted to localhost for security reasons
                    if (window.location.hostname === "localhost") {
                        sPrefix = "sap-ushell-test-" + sHashFragment.substring(6);
                        additionalInformation = getURLParameter(sPrefix + "-additionalInformation");
                        if (additionalInformation) {
                            oLocalx.additionalInformation = additionalInformation;
                        }
                        url = getURLParameter(sPrefix + "-url");
                        if (url) {
                            oLocalx.url = url;
                        }
                    }
                    if (!oLocalx.url) {
                        jQuery.sap.log.info("NavTargetResolution: No configured app for " + sHashFragment + " found ( local storage or url params sap-ushell-test-local1-url  sap-ushell-test-local1-additionalInfo  not supplied? ");
                        jQuery.sap.log.info("NavTargetResolution: Defaulting to config app ...\n");
                        oDeferred.resolve(hardCoded["#Test-config"]);
                    }
                    res = oLocalx;
                }
                jQuery.sap.log.info("NavTargetResolution: As URL:  http://localhost:8080/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html?sap-ushell-test-local1-url=" + encodeURIComponent(res.url) + "&sap-ushell-test-local1-additionalInformation=" + encodeURIComponent(res.additionalInfo) + "#Test-local1");
                jQuery.sap.log.info("NavTargetResolution: Resolving " + sHashFragment + " to "  + JSON.stringify(res));
                oDeferred.resolve(res);
                return oDeferred.promise();
            }
             });
    };
}());
