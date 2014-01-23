jQuery.sap.require("sap.ca.ui.dialog.factory");

sap.ui.controller("sap.ca.ui.sample.views.dialogs.About", {
    onInit:function () {
    },

    onPress:function (e) {
        // show the about dialog
        sap.ca.ui.dialog.about.open({
            appIcon: "images/72_iPad_Desktop_Launch.png",
            appName: "Approve Shopping Cart",
            artefact: "sap.srm.shoppingcart.approve",
            version: "1.0.0",
            build: "234567 (2013-08-08_14-00-30)",
            ui5Version: "1.15.0"
       });
    }
})
;
