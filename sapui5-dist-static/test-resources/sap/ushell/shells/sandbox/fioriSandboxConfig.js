// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview This file contains a sample Fiori sandbox application
 *               configuration.
 *
 * The Sandbox shell attempts to load three files in the following order:
 *
 * ./fioriSandboxConfig.js
 * /ushell/staging/shells/sandbox/fioriSandboxConfig.json
 * /appconfig/fioriSandboxConfig.json
 *
 * Entries in the latter ( lower ) files may be used to override settings from
 * the first file
 */

this.sap = this.sap || {};

(function() {
    "use strict";

    /* global sap */

    // namespace "sap.ushell.fiorisandbox"
    // **************************************************
    sap.ushell = sap.ushell || {};
    sap.ushell.fiorisandbox = sap.ushell.fiorisandbox || {};

    // default configuration
    // can be extended or overridden by a local JSON configuration file which has to be exposed by the server on path /appconfig/fioriSandboxConfig.json
    sap.ushell.fiorisandbox.configuration = {
        applications : {
            // for your applications, better use absolute pathes to the url to
            // test it!
            // e.g. /ushell/

            // we use relative pathes to be able to run the application on a
            // central server
            //
            // map of applications keyed by URL fragment used for navigation
            //

            // default application - empty URL hash
            "" : {
                additionalInformation : "SAPUI5.Component=sap.ushell.demoapps.FioriSandboxDefaultApp",
                applicationType : "URL",
                url : "../../../../../test-resources/sap/ushell/demoapps/FioriSandboxDefaultApp"
            },

            // default application as explicit navigation target
            "UI2Fiori2SampleApps-defaultapp" : {
                additionalInformation : "SAPUI5.Component=sap.ushell.demoapps.FioriSandboxDefaultApp",
                applicationType : "URL",
                url : "../../../../../test-resources/sap/ushell/demoapps/FioriSandboxDefaultApp",
                description : "Default App : shows statically registered apps (fioriSandboxConfig.js) "
            },

            /*
             * Demonstrates resource-based navigation inside a shell runtime
             * with a simple inner-app routing sample using explicit event
             * handlers
             *
             * Run e.g. as :
             * http://localhost:8080/ushell/test-resources/sap/ushell/shells/sandbox/fioriSandbox.html#AppNavSample-display&/Detail
             * http://localhost:8080/ushell/test-resources/sap/ushell/shells/sandbox/fioriSandbox.html#AppNavSample-display&/View1
             *
             */
            "UI2Fiori2SampleApps-appnavsample" : {

                additionalInformation : "SAPUI5.Component=AppNavSample",
                applicationType : "URL",
                // absolute would be: url:
                // "/ushell/test-resources/sap/ushell/demoapps/AppNavSample?fixed-param1=value1&array-param1=value1&array-param1=value2",
                url : "../../../../../test-resources/sap/ushell/demoapps/AppNavSample?fixed-param1=value1&array-param1=value1&array-param1=value2",
                description : "Navigation Sample 1: demo for startup parameter passing and routing with event handlers"
            },

            /*
             * Demonstrates resource-based navigation inside a shell runtime
             * with an advanced inner-app routing sample using framework-based
             * view creation
             *
             * Run e.g. as :
             * http://localhost:8080/ushell/test-resources/sap/ushell/shells/sandbox/fioriSandbox.html#AppNavSample2-display&/Detail
             * http://localhost:8080/ushell/test-resources/sap/ushell/shells/sandbox/fioriSandbox.html#AppNavSample2-display&/View1
             *
             */
            "UI2Fiori2SampleApps-appnavsample2" : {
                additionalInformation : "SAPUI5.Component=AppNavSample2",
                applicationType : "URL",
                url : "../../../../../test-resources/sap/ushell/demoapps/AppNavSample2",
                description : "Navigation Sample 2: demo for declarative routing"
            },

            /*
             * Sample app for personalization service
             */
            "UI2Fiori2SampleApps-appperssample" : {
                additionalInformation : "SAPUI5.Component=AppPersSample",
                applicationType : "URL",
                url : "../../../../../test-resources/sap/ushell/demoapps/AppPersSample",
                description : "Personalization Sample 1: demo for generic personalization service"
            },

            /*
             * Sample app for table personalization
             */
            "UI2Fiori2SampleApps-appperssample2" : {
                additionalInformation : "SAPUI5.Component=AppPersSample2",
                applicationType : "URL",
                url : "../../../../../test-resources/sap/ushell/demoapps/AppPersSample2",
                description : "Personalization Sample 2: demo for personalization of tables"
            },
        }
    };

    function ConfigReader(oDefaultConfig) {
        this.oConfig = oDefaultConfig;
    }

    ConfigReader.prototype.read = function(sUrlPrefix) {

        // try with JSON - fallback to script, if not found
        if ( this.readJSON(sUrlPrefix) == false ) {
            this.readScript(sUrlPrefix);
        }
    }

    ConfigReader.prototype.readJSON = function(sUrlPrefix) {

        var sUrl = sUrlPrefix + ".json";
        var oConfigJSON;

        jQuery.sap.log.info("Mixing/Overwriting sandbox configuration from " + sUrl + "; failed requests (status 404) can be ignored, default configuration is used then.");
        var oXHRResponse = jQuery.sap.sjax({
            url: sUrl,
            dataType: "json"
            });
        if (oXHRResponse.success) {
            oConfigJSON = oXHRResponse.data;
            jQuery.sap.log.debug("Evaluating fiori launchpad sandbox config JSON: " + JSON.stringify(oConfigJSON));
            this.addConfig(oConfigJSON);

            return true;
        } else {
            if (oXHRResponse.statusCode != 404){
                jQuery.sap.log.error("Failed to load Fiori Launchpad Sandbox configuration from " + sUrl + ": status: " + oXHRResponse.status + "; error: " + oXHRResponse.error);
            }
            return false;
        }
    }

    ConfigReader.prototype.readScript = function(sUrlPrefix) {

        var sUrl = sUrlPrefix + ".js",
            sConfigScript;

        jQuery.sap.log.info("Mixing/Overwriting sandbox configuration from " + sUrl + "; failed requests (status 404) can be ignored, default configuration is used then.");
        var oXHRResponse = jQuery.sap.sjax({
            url: sUrl,
            dataType: "script"
        });
        if (oXHRResponse.success) {
            sConfigScript = oXHRResponse.data;
            jQuery.sap.log.debug("Loaded fiori launchpad sandbox config script: " + sConfigScript);

            // script already executed by sjax call (using dataType script)
            // should have created new instance of sap.ushell.fiorisandbox.configuration
            if (sap.ushell.fiorisandbox.configuration) {
                jQuery.sap.log
                        .warning("Fiori Launchpad configuration file '"
                                + sUrl
                                + "' is deprecated. Please use file '"
                                + sUrlPrefix
                                + ".json' with the following contents: \n"
                                + JSON
                                        .stringify(sap.ushell.fiorisandbox.configuration, null, 4));

            }

            this.addConfig(sap.ushell.fiorisandbox.configuration);

            return true;
        } else {
            if (oXHRResponse.statusCode != 404){
                jQuery.sap.log.error("Failed to load Fiori Launchpad Sandbox configuration from " + sUrl + ": status: " + oXHRResponse.status + "; error: " + oXHRResponse.error);
            }
            return false;
        }
    }

    ConfigReader.prototype.addConfig = function(oNewConfig) {
        var application;
        for( application in oNewConfig.applications) {
           this.oConfig.applications[application] = oNewConfig.applications[application];
        }
    }

    ConfigReader.prototype.getMergedConfig = function() {
        // do we have to sort?
        return this.oConfig;
    }

    sap.ushell.fiorisandbox.readSandboxConfig = function() {

        if (!jQuery && !jQuery.sap) {
            // no UI5 bootstrap yet!
            if (window.console) {
                window.console.log("Function sap.ushell.fiorisandbox.readSandboxConfig() must be called after the SAPUI5 bootstrap!");
            };

            return;
        };

        var configReader = new ConfigReader(sap.ushell.fiorisandbox.configuration);

        // no js fallback for the config from staging
        configReader.readJSON("/ushell/staging/shells/sandbox/fioriSandboxConfig");

        // always try to read from local appconfig
        configReader.read("/appconfig/fioriSandboxConfig");

        sap.ushell.fiorisandbox.configuration = configReader.getMergedConfig();
    }

}());
