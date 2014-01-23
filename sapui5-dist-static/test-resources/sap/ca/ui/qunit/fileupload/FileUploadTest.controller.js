sap.ui.controller("fileupload.FileUploadTest", {


/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
*/
    onInit : function() {
        var page = this.getView().byId("page");
        //util.UiFactory.fillPageHeader(page, this.getView(), util.Title.FILE_UPLOAD);

//        var that = this;
//            $.ajax({
//                type: "GET",
//                url: "upload",
//                async : false,
//                //data: "{param1ID:"+ param1Val+"}",
//                contentType: "application/json; charset=utf-8",
//                dataType: "json",
//                success: function(mockData) {
//                    var mockDataModel = new sap.ui.model.json.JSONModel(mockData);
//                    that.getView().setModel(mockDataModel);
//                },
//                error: function(err) {
//                    alert(err.toString());
//                }
//            });

        var mockData = {

            dataitems : [ {
                filename : 'selected file.xls',
                url : 'http://localhost/test',
                size : '912 KB',
                uploaded : 'Jan 1, 2013',
                contributor : 'You'
            }, {
                filename : 'word_document_01.doc',
                size : '912 KB',
                url : 'http://localhost/test',
                uploaded : 'Jan 1, 2013',
                contributor : 'You'
            }, {
                filename : 'picture.jpg',
                size : '23 KB',
                url : 'http://localhost/test',
                uploaded : 'Jan 1, 2013',
                contributor : 'You'
            }, {
                filename : 'powerpoint_document.ppt',
                size : '1.23 MB',
                url : 'http://localhost/test',
                uploaded : 'Jan 8, 2013',
                contributor : 'You'
            }, {
                filename : 'excel_file.xls',
                size : '2.41 MB',
                url : 'http://localhost/test',
                uploaded : 'Jan 9, 2013',
                contributor : 'Alex Manchewski'
            },

            ]
        };

        var mockDataModel = new sap.ui.model.json.JSONModel(mockData);
        this.getView().setModel(mockDataModel);

    },


    onDeleteFile : function(oEventData) {
    	this.byId("fileupload").removeFile([oEventData.mParameters.filename]);
    }

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
*/
//   onBeforeRendering: function() {
//
//   },

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
*/
//   onAfterRendering: function() {
//
//   },

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
*/
//   onExit: function() {
//
//   }

});