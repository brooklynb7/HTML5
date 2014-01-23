// define a root UIComponent which exposes the main view
jQuery.sap.declare("AppNavSample2.Component");
jQuery.sap.require("sap.ui.core.UIComponent");

// new Component
sap.ui.core.UIComponent.extend("AppNavSample2.Component", {

    metadata : {

        "library": "AppNavSample2",

        "version" : "@version@",

        "includes" : [

        ],

        "dependencies" : {
            "libs" : [
                "sap.m"
            ],
            "components" : [
            ]
        },

        "config" : {
            "title": "App Navigation Sample 2",
            //"resourceBundle" : "i18n/i18n.properties",
            //"titleResource" : "shellTitle",
            "icon" : "sap-icon://Fiori2/F0002",
            // In real Fiori apps, don't use absolute paths, but reference your icons/images
            // as shown in sap.ca's scfld.md.sample app.
            "favIcon" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/favicon/F0002_My_Accounts.ico",
            "homeScreenIconPhone" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/launchicon/F0002_My_Accounts/57_iPhone_Desktop_Launch.png",
            "homeScreenIconPhone@2" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/launchicon/F0002_My_Accounts/114_iPhone-Retina_Web_Clip.png",
            "homeScreenIconTablet" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/launchicon/F0002_My_Accounts/72_iPad_Desktop_Launch.png",
            "homeScreenIconTablet@2" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/launchicon/F0002_My_Accounts/144_iPad_Retina_Web_Clip.png",
            "startupImage320x460" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/splashscreen/320_x_460.png",
            "startupImage640x920" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/splashscreen/640_x_920.png",
            "startupImage640x1096" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/splashscreen/640_x_1096.png",
            "startupImage768x1004" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/splashscreen/768_x_1004.png",
            "startupImage748x1024" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/splashscreen/1024_x_748.png",
            "startupImage1536x2008" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/splashscreen/1536_x_2008.png",
            "startupImage1496x2048" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/splashscreen/2048_x_1496.png"
        },

        routing: {
            config: {
                viewType : "XML",
                viewPath: "",  // leave empty, common prefix
                targetControl: "app",
                targetAggregation: "detailPages",
                clearTarget: false,
                callback: function(oRoute, oArguments, oConfig, oControl, oView) {
                    oControl.toDetail(oView.getId());
                }
            },
            routes: [
                     {
                         pattern : "ShowView1", // will be the url and from has to be provided in the data
                         view : "AppNavSample2.view.View1",
                         name : "toView1" // name used for listening or navigating to this route
                     },
                     {
                         pattern : "ShowView2", // will be the url and from has to be provided in the data
                         view : "AppNavSample2.view.View2",
                         name : "toView2" // name used for listening or navigating to this route
                     },
                     {
                         pattern : "ShowDetail", // will be the url and from has to be provided in the data
                         view : "AppNavSample2.view.Detail",
                         name : "toDetail" // name used for listening or navigating to this route
                     },
                     {
                         pattern : ":all*:", // catchall
                         view : "AppNavSample2.view.Detail",
                         name : "catchall", // name used for listening or navigating to this route
                     }
            ]
        }
    },

    getAutoPrefixId : function() {
        return true;
    },

    createContent : function() {

        var oMainView = sap.ui.view({
            type : sap.ui.core.mvc.ViewType.XML,
            viewName : "AppNavSample2.MainXML",
        });

        return oMainView;
    },

    init : function() {
        sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

        // this component should automatically initialize the router!
        this.getRouter().initialize();
    }

});

