jQuery.sap.require("sap.ca.ui.model.format.FileSizeFormat");
jQuery.sap.require("sap.ca.ui.model.type.FileSize");

sap.ui.controller("sap.ca.ui.sample.views.type.FileSize", {

    onInit : function() {
        var page = this.getView().byId("page");
        util.UiFactory.fillPageHeader(page, this.getView(), util.Title.FILE_SIZE);

        var model = new sap.ui.model.json.JSONModel({Files:[
            {
                "Name" : "Readme.txt",
                "Size" : "1.22",
                "Modified" : "Wed, 7th of Aug, 2012, 10:45 am"
            },
            {
                "Name" : "command.com",
                "Size" : "666",
                "Modified" : "Wed, 7th of Aug, 2012, 10:45 am"
            },
            {
                "Name" : "Hamster on a piano.avi",
                "Size" : "15031975",
                "Modified" : "Wed, 7th of Aug, 2012, 10:45 am"
            },
            {
                "Name" : "git.exe",
                "Size" : "250",
                "Modified" : "Wed, 7th of Aug, 2012, 10:45 am"
            },
            {
                "Name" : "SAP Logon.exe",
                "Size" : "500",
                "Modified" : "Wed, 7th of Aug, 2012, 10:45 am"
            },
            {
                "Name" : "Profile.jpg",
                "Size" : "123456",
                "Modified" : "Wed, 7th of Aug, 2012, 10:45 am"
            }]});

        this.getView().setModel(model);
    },


    formatFileSize : function (oValue) {

        var formatter = sap.ca.ui.model.format.FileSizeFormat.getInstance();
        return formatter.format(oValue);
    }
});