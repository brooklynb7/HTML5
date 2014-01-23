// Copyright (c) 2013 SAP AG, All Rights Reserved
// define a root UIComponent which exposes the main view
jQuery.sap.declare("AppPersSample2.Component");
jQuery.sap.require("sap.ui.core.UIComponent");

// new Component
sap.ui.core.UIComponent.extend("AppPersSample2.Component", {

    oMainView : null,

    // use inline declaration instead of component.json to save 1 round trip
    metadata : {

        version : "1.0",

        library : "AppPersSample2",

        dependencies : {
            libs : [ "sap.m" ],
            components : [],
            ui5version : "1.16.0"
        },
        config: {
            "title": "App Pers Sample 2",
            //"resourceBundle" : "i18n/i18n.properties",
            //"titleResource" : "shellTitle",
            "icon" : "sap-icon://Fiori2/F002"
        }
    // properties : {
    // // the shell passes application startup parameters using the
    // // componentData object
    // componentData : {
    // type : "object"
    // }
    // }
    },

    createContent : function() {
        this.oMainView = sap.ui.xmlview("AppPersSample2.App");
        return this.oMainView;
    },

});

