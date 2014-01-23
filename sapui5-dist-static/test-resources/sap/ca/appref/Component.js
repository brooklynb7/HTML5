// define a root UIComponent which exposes the main view
jQuery.sap.declare("i2d.qm.qualityissue.confirm.appref.Component");
jQuery.sap.require("sap.ui.core.UIComponent");
jQuery.sap.require("sap.ca.scfld.md.ConfigurationBase");
jQuery.sap.require("i2d.qm.qualityissue.confirm.appref.Configuration");
jQuery.sap.require("sap.ui.core.routing.Router");
jQuery.sap.require("sap.ui.core.routing.History");
jQuery.sap.require("sap.ca.scfld.md.ComponentBase");

sap.ca.scfld.md.ComponentBase.extend("i2d.qm.qualityissue.confirm.appref.Component", {
	metadata : sap.ca.scfld.md.ComponentBase.createMetaData("MD", {
        "name": "Quality Issue",
        "version" : "1.0.0",
        "library" : "i2d.qm.qualityissue.confirm.appref",
            "viewPath" : "i2d.qm.qualityissue.confirm.appref.view",
        "includes" : [],
        "dependencies" : {
            "libs" : [ "sap.m"],
                "components" : [ ]
        },
            "masterPageRoutes" : {
                "master" : {
                    pattern : "master",
                    "view" : "S2"
                }
            },
            "detailPageRoutes" : {

                },
            "fullScreenPageRoutes" : {
                IssueForm : {
                    pattern:"",
                    view : "IssueForm"
            }
        },
        "config" : {
            /* replace F0316 with your app id */
            resourceBundle : "i18n/i18n.properties",
            titleResource : "shellTitle",
            icon : "sap-icon://Fiori2/F0316",
            favIcon                    : "./resources/sap/ca/ui/themes/base/img/favicon/F0316_My_Accounts.ico",
            homeScreenIconPhone        : "./resources/sap/ca/ui/themes/base/img/launchicon/F0316_My_Accounts/57_iPhone_Desktop_Launch.png",
            "homeScreenIconPhone@2"    : "./resources/sap/ca/ui/themes/base/img/launchicon/F0316_My_Accounts/114_iPhone-Retina_Web_Clip.png",
            homeScreenIconTablet       : "./resources/sap/ca/ui/themes/base/img/launchicon/F0316_My_Accounts/72_iPad_Desktop_Launch.png",
            "homeScreenIconTablet@2"   : "./resources/sap/ca/ui/themes/base/img/launchicon/F0316_My_Accounts/144_iPad_Retina_Web_Clip.png",
            // The following examples for startup images start in the "resources" folder as well, but
            // (unlike icons) most likely these images have to be contained in the app itself, so the
            // remaining paths are different.


            startupImage320x460        : "./resources/img/themes/base/startupImages/startup-image-320x460.png",
            startupImage640x920        : "./resources/img/themes/base/startupImages/startup-image-640x920.png",
            startupImage640x1096       : "./resources/img/themes/base/startupImages/startup-image-640x1096.png",
            startupImage768x1004       : "./resources/img/themes/base/startupImages/startup-image-768x1004.png",
            startupImage748x1024       : "./resources/img/themes/base/startupImages/startup-image-748x1024.png",
            startupImage1536x2008      : "./resources/img/themes/base/startupImages/startup-image-1536x2008.png",
            startupImage1496x2048      : "./resources/img/themes/base/startupImages/startup-image-1496x2048.png"
        }
    }),
    /**
     * Initialize the application
     *
     * @returns {sap.ui.core.Control} the content
     */
    createContent : function() {
        var oViewData = {component: this};

        return sap.ui.view({
            viewName : "i2d.qm.qualityissue.confirm.appref.Main",
            type : sap.ui.core.mvc.ViewType.XML,
            viewData : oViewData
        });
    },

    exit : function() {

    }
});
