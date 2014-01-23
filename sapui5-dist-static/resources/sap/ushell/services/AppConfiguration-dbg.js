// Copyright (c) 2013 SAP AG, All Rights Reserved

(function () {
    "use strict";
    /*global jQuery, sap */
    jQuery.sap.declare("sap.ushell.services.AppConfiguration");
    jQuery.sap.require("sap.ushell.ui.footerbar.SettingsButton");

    /**
     * AppConfiguration service.
     *
     * @private
     */
    function AppConfiguration() {
        var oMetadata = {},
            oCurrentApplication = null;

        /**
         * Returns the current metadata.
         * 
         * {
         *      title: {string}
         *      library: {string}
         *      version: {string}
         *      fullWidth: {boolean}
         * }  
         * 
         * @returns {object}
         *   a copy of the metadata object
         *
         * @private
         */
        this.getMetadata = function (oApplication) {
            if (!oApplication) {
                oApplication = oCurrentApplication;
            }

            if (oApplication) {
                var sKey = this.getApplicationUrl(oApplication);
                if (!(oMetadata.hasOwnProperty(sKey))) {
                    this.addMetadata(oApplication);
                }
                return oMetadata[sKey] || {};
            }
            return {};
        };

        /**
         * @private
         */
        this.setCurrentApplication = function (oApplication) {
            oCurrentApplication = oApplication;
        };

        /**
         * Get a settings control to display about dialog and system infos.
         *
         * @returns {sap.ushell.ui.footerbar.SettingsButton}
         *      a settings control which can be embedded where ever its needed
         * @private
         */
        this.getSettingsControl = function () {
            return new sap.ushell.ui.footerbar.SettingsButton();
        };

        /**
         * @private
         */
        this.getApplicationName = function (oApplication) {
            /*jslint regexp: true */
            var aMatches,
                sAdditionalInformation = (oApplication && oApplication.additionalInformation) || null;

            if (sAdditionalInformation) {
                // SAPUI5.Component=<fully-qualified-component-name>
                aMatches = /^SAPUI5\.Component=(.+)$/i.exec(sAdditionalInformation);
                if (aMatches) {
                    // determine namespace, view name, and view type
                    return aMatches[1];
                }
            }
            return null;
        };
        /**
         * @private
         */
        this.getApplicationUrl = function (oApplication) {
            var sUrl = (oApplication && oApplication.url) || null,
                iIndex;

            if (sUrl) {
                iIndex = sUrl.indexOf("?");
                if (iIndex >= 0) {
                    // pass GET parameters of URL via component data
                    // as member startupParameters  ( to allow blending with other oComponentData usage, e.g.
                    // extensibility use case
                    sUrl = sUrl.slice(0, iIndex);
                }
                if (sUrl.slice(-1) !== '/') {
                    sUrl += '/'; // ensure URL ends with a slash
                }
            }
            return sUrl;
        };
        /**
         * @private
         */
        this.addMetadata = function (oApplication) {
            try {
                var sComponentName = this.getApplicationName(oApplication),
                    sUrl = this.getApplicationUrl(oApplication),
                    sComponentFile,
                    oComponent,
                    oResourceBundle,
                    sResourceUrl,
                    oLocalMetadata,
                    oConfig,
                    iIndex,
                    oProperty,
                    oValue,
                    aProperties = [ "libraryName", "version", "fullWidth",
                                    "title",
                                    "icon",
                                    "favIcon",
                                    "homeScreenIconPhone",
                                    "homeScreenIconPhone@2",
                                    "homeScreenIconTablet",
                                    "homeScreenIconTablet@2",
                                    "startupImage320x460",
                                    "startupImage640x920",
                                    "startupImage640x1096",
                                    "startupImage768x1004",
                                    "startupImage748x1024",
                                    "startupImage1536x2008",
                                    "startupImage1496x2048"
                                ],
                    potentiallyRelativeUrls,
                    sComponentUrl,
                    isUrlRelative;


                if (sUrl && !(oMetadata.hasOwnProperty(sUrl))) {
                    oMetadata[sUrl] = {};
                    oComponent = sap.ui.component.load({ url : sUrl, name : sComponentName });
                    oLocalMetadata = oComponent.getMetadata();
                    if (oLocalMetadata) {
                        oConfig = oLocalMetadata && oLocalMetadata.getConfig();
                        if (oConfig) {
                            sResourceUrl = oConfig.resourceBundle || "";
                            if (sResourceUrl) {
                                if (sResourceUrl.slice(0, 1) !== '/') {
                                    sResourceUrl = sUrl + sResourceUrl;
                                }
                                oResourceBundle = jQuery.sap.resources({
                                    url: sResourceUrl,
                                    locale : sap.ui.getCore().getConfiguration().getLanguage()
                                });
                            }
                        }

                        for (iIndex = 0; iIndex < aProperties.length; iIndex = iIndex + 1) {
                            oProperty = aProperties[iIndex];
                            if (oResourceBundle && oConfig.hasOwnProperty(oProperty + "Resource")) {
                                oValue = oResourceBundle.getText(oConfig[oProperty + "Resource"]);
                            } else if (oConfig.hasOwnProperty(oProperty)) {
                                oValue = oConfig[oProperty];
                            } else {
                                oValue = oLocalMetadata["_s" + oProperty.substring(0, 1).toUpperCase() + oProperty.slice(1)];
                            }

                            oMetadata[sUrl][oProperty] = oValue;
                        }
                    }

                    /*
                     * Special behavior for relative URLs:
                     * Relative URLs are considered relative to the folder containing the Component.js,
                     * which requires adjustments here. Otherwise the browser would interpret them as
                     * relative to the location of the HTML file, which might be different and also
                     * hard to guess for app developers.
                     */
                    potentiallyRelativeUrls = [
                        "favIcon",
                        "homeScreenIconPhone",
                        "homeScreenIconPhone@2",
                        "homeScreenIconTablet",
                        "homeScreenIconTablet@2",
                        "startupImage320x460",
                        "startupImage640x920",
                        "startupImage640x1096",
                        "startupImage768x1004",
                        "startupImage748x1024",
                        "startupImage1536x2008",
                        "startupImage1496x2048"
                    ];

                    sComponentUrl = (sUrl && sUrl[sUrl.length - 1] === '/') ?
                            sUrl.substring(0, sUrl.length - 1) : sUrl;

                    isUrlRelative = function (sUrl) {
                        /*jslint regexp : true*/
                        if (sUrl.match(/^https?:\/\/.*/)) {
                            return false;
                        }
                        return sUrl && sUrl[0] !== '/';
                    };

                    potentiallyRelativeUrls.forEach(function (sPropName) {
                        var sOrigValue = oMetadata[sUrl][sPropName],
                            sFinalValue = null;
                        // Some URL properties might not be defined.
                        if (sOrigValue) {
                            sFinalValue = isUrlRelative(sOrigValue) ?
                                    sComponentUrl + "/" + sOrigValue : sOrigValue;
                        }
                        oMetadata[sUrl][sPropName] = sFinalValue;
                    });
                }
            } catch (err) {
                jQuery.sap.log.warning("Application configuration could not be parsed");
            }
        };

    } // Metadata

    /**
     * The Unified Shell App configuration service as a singleton object. 
     * 
     * @class The unified shell's AppConfiguration service.
     * 
     * @name sap.ushell.services.AppConfiguration
     * @since 1.15.0
     * @private
     */
    sap.ushell.services.AppConfiguration = new AppConfiguration();

}());
