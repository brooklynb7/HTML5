// define a root UIComponent which exposes the main view
jQuery.sap.declare("AppNavSample.Component");
jQuery.sap.require("sap.ui.core.UIComponent");
jQuery.sap.require("sap.ui.core.routing.Router");

// new Component
sap.ui.core.UIComponent.extend("AppNavSample.Component", {

    oMainView : null,

    // use inline declaration instead of component.json to save 1 round trip
    metadata : {

        version : "@version@",

        library : "AppNavSample",

        includes : [ "css/custom.css" ],

        dependencies : {
            libs : [ "sap.m" ],
            components : []
        },

        "config" : {
            "title": "App Navigation Sample",
            //"resourceBundle" : "i18n/i18n.properties",
            //"titleResource" : "shellTitle",
            "icon" : "sap-icon://Fiori2/F0003",
            // In real Fiori apps, don't use absolute paths, but reference your icons/images
            // as shown in sap.ca's scfld.md.sample app.
            "favIcon" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/favicon/F0003_Manage_Tasks.ico",
            "homeScreenIconPhone" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/launchicon/F0003_Manage_Tasks/57_iPhone_Desktop_Launch.png",
            "homeScreenIconPhone@2" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/launchicon/F0003_Manage_Tasks/114_iPhone-Retina_Web_Clip.png",
            "homeScreenIconTablet" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/launchicon/F0003_Manage_Tasks/72_iPad_Desktop_Launch.png",
            "homeScreenIconTablet@2" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/launchicon/F0003_Manage_Tasks/144_iPad_Retina_Web_Clip.png",
            "startupImage320x460" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/splashscreen/320_x_460.png",
            "startupImage640x920" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/splashscreen/640_x_920.png",
            "startupImage640x1096" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/splashscreen/640_x_1096.png",
            "startupImage768x1004" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/splashscreen/768_x_1004.png",
            "startupImage748x1024" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/splashscreen/1024_x_748.png",
            "startupImage1536x2008" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/splashscreen/1536_x_2008.png",
            "startupImage1496x2048" : "/sap/public/bc/ui5_ui5/resources/sap/ca/ui/themes/base/img/splashscreen/2048_x_1496.png"
        },
    },

    getInnerAppRouter : function() { return this.oRouter; },

    createContent : function() {

        jQuery.sap.log.info("AppNavSample: Component.createContent");

        /* *Nav* (1)  declare a route config  */
        /* this example separate the actual view management from the route dispatch */
        /* we only specify route names and encoding here
         * we do not specify view names or model bindings
         * */
        var aRoutes =  [
                        {
                            /* we encode the viewname in the path */
                            pattern : "{viewName}/",
                            name : "toaView", // name of the single route
                        },
                        {
                            /* we encode the viewname in the path */
                            pattern : ":all*:", //catchall
                            name : "_home", // name of the single route
                        }
                       ];

        /* *Nav* (2) and construct the router instance */
        var oRouter = new sap.ui.core.routing.Router(aRoutes);
        this.oRouter = oRouter;
        oRouter.register("AppNavSample");  // unique name of router (!)

        this.oMainView = sap.ui.view({
            type: sap.ui.core.mvc.ViewType.XML,
            viewName:  "AppNavSample.MainXML",
            id: this.createId("MainView")
        });
        oRouter.initialize(); // router initialization must be done after view construction

        var oModel = new sap.ui.model.json.JSONModel();

        /* *StartupParameters* (2)   */
        /* http://localhost:8080/ushell/test-resources/sap/ushell/shells/sandbox/fioriSandbox.html#UI2Fiori2SampleApps-appnavsample?AAA=BBB&DEF=HIJ */
        /* results in   { AAA : [ "BBB"], DEF: ["HIJ"] }  */
        var oComponentData = this.getComponentData && this.getComponentData();
        jQuery.sap.log.info("AppNavSample: app was started with parameters " + JSON.stringify(oComponentData.startupParameters || {}));

        oModel.setData( this.createStartupParametersData(oComponentData.startupParameters || {}));
        this.oMainView.setModel(oModel, "startupParameters");

        return this.oMainView;
    },

    createStartupParametersData : function(oComponentData) {
        // convert the raw componentData into a model that is consumed by the UI
        var aParameters = [], sKey = null;
        if (oComponentData) {
            for (sKey in oComponentData) {
                aParameters.push({
                    key : sKey,
                    value : oComponentData[sKey].toString()
                });
            }
        }
        return {
            "parameters" : aParameters
        };
    },

    exit : function() {
        jQuery.sap.log.info("AppNavSample: Component.js exit called : this.getId():" + this.getId() );

        this.oMainView = null;
    }
});
