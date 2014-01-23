jQuery.sap.require("sap.ca.ui.dialog.factory");

sap.ui.controller("sap.ca.ui.sample.views.dialogs.LoginDetails", {
    onInit:function () {
    },

    onPress:function (e) {
        // show the logindetails dialog
        sap.ca.ui.dialog.loginDetails.open({
            user: "Vivek Vishal (VISHAL)",
            server: "usciu3e.wdf.sap.corp:50026",
            language: "English (United States)"
        });
    }
})
;
