jQuery.sap.require("sap.ca.ui.quickoverview.EmployeeLaunch");

sap.ui.controller("sap.ca.ui.sample.views.control.Quickoverview", {
    onInit:function () {
    },

    onPress:function (e) {
        var oEmpData = {
            name:"Mr. Frank Schmitt",
            imgurl:"xxx",
            department:"Corporate Functions",
            mobilephone:"01718484845",
            officephone:"06222 854568483S",
            email:"Frank.S@company.com",
            companyname:"00014812",
            companyaddress:"Dietmar Hopp Allee 1-3, 1234 Walldorf",
        };

        // get control that triggers the BusinessCard
        var oControl = this.byId("theButton");

        // call 'Business Card' reuse component
        var oEmployeeLaunch = new sap.ca.ui.quickoverview.EmployeeLaunch(oEmpData);
        oEmployeeLaunch.openBy(oControl);
    }
})
;
