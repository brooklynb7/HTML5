jQuery.sap.require("sap.ca.ui.model.format.FormattingLibrary");

sap.ui.controller("sap.ca.ui.sample.views.format.Library", {

    onInit : function() {
        var page = this.getView().byId("page");
        util.UiFactory.fillPageHeader(page, this.getView(), util.Title.LIBRARY);

        var model = new sap.ui.model.json.JSONModel({Files:[
            {
                "Description" : "Flange which accepts Screw 06",
                "ID" : "F06",
                "Comment" : "Model has both Description and ID fields = displays both",

                "FileName" : "My SpreadSheet",
                "FileType" : "Excel Document",
                "MimeType" : "application/msexcel",
                "FileExt" : ".txt",
                "Status" : 1,
                "Help" : "Model has both FileName and FileType fields = displays FileName"
            },
            {
                "Description" : "Flange which accepts Screw 06",
                "ID" : null,
                "Comment" : "Model has only Description field = displays Description",

                // missing name
                "FileType" : "Excel Document",
                "MimeType" : "application/msexcel",
                "FileExt" : ".xslm",
                "Status" : 2,
                "Help" : "Model has only FileType field = displays FileType"
            },
            {
                "Description" : null,
                "ID" : "F06",
                "Comment" : "Model has only ID field = displays ID",

                "FileName" : "My SpreadSheet",
                // missing type
                "MimeType" : "application/msexcel",
                "FileExt" : ".docx",
                "Status" : 3,
                "Help" : "Model has only FileName field = displays FileName"
            }
        ]});

        this.getView().setModel(model);
    }

}



);