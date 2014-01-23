jQuery.sap.require("sap.ca.scfld.md.controller.BaseDetailController");
jQuery.sap.require("sap.ca.ui.quickoverview.EmployeeLaunch");
jQuery.sap.require("sap.ca.ui.model.type.Date");
jQuery.sap.require("i2d.qm.qualityissue.confirm.appref.util.Formatter");

// This is just to have some pictures in example
jQuery.sap.require("i2d.qm.qualityissue.confirm.appref.model.image64");

sap.ca.scfld.md.controller.BaseDetailController.extend("i2d.qm.qualityissue.confirm.appref.view.S3", {

    /**
     * @override
     *
     * Called by the UI5 runtime to init this controller
     *
     */
    onInit: function () {
        //Execute onInit for the base class BaseMasterController
        sap.ca.scfld.md.controller.BaseDetailController.prototype.onInit.call(this);

        //get the application bundle
        this.resourceBundle = this.oApplicationFacade.getResourceBundle();

        var self = this;
        var view = this.getView();

        this.oRouter.attachRouteMatched(function(oEvent) {
            if (oEvent.getParameter("name") === "detail") {
            var oModel = this.oApplicationFacade.getODataModel();
			var context = new sap.ui.model.Context(oModel, '/' + oEvent.getParameter("arguments").contextPath);
                view.setBindingContext(context);
                // Make sure the master is here
            }
        }, this);



        // get the addPicture control
        this.addPicture = this.getView().byId("addPicture");

        /* Example to laod pictures in addpicture */
        this.model = new sap.ui.model.json.JSONModel({Pictures:[
            {
                "Name" : "Computer",
                "source" : IMAGE_COMPUTER
            },
            {
                "Name" : "Light bulb",
                "source": IMAGE_LIGHT_BULB
            },
            {
                "Name" : "Invoices",
                "source": IMAGE_INVOICES
            },
            {
                "Name" : "Spiral",
                "source": IMAGE_SPIRAL
            },
            {
                "Name" : "Building",
                "source": IMAGE_BUILDING
            }
        ]});

        //HOOK IN S3 CONTROLLER
        //CAN BE USED TO HANDLE DATA OBJECTS OR ANYTHING EXPLICIT WHICH A BASE APP WANTS TO DEFINE
        //THIS MAKES EXTENSIONS PLUGGIN INTO SPECIFIC HOOKS AND DO THE CHANGES
        if (this.onDataReceived) {         // check whether any extension has implemented the hook...
            this.onDataReceived(this.model); // ...and call it
        }

        // add the model to the view for binding
        this.getView().setModel(this.model,"picture");
        /* END Example*/


        this.oViewerView = sap.ui.xmlview(view.getId()+"-viewer-view", "i2d.qm.qualityissue.confirm.appref.view.Viewer");
        this.oViewerView.setHeight("100%");
        this.oViewerView.setModel(this.model,"picture");
        this.oViewerDialog = new sap.m.Dialog(view.getId()+"-viewer-dialog", {

            showHeader: false,
            content:[this.oViewerView],
            stretch: true,
            verticalScrolling: false,
            horizontalScrolling: false,
            endButton: new sap.m.Button({text:this.resourceBundle.getText("CLOSE"), press: jQuery.proxy(this.onClose, this)})
        });
        var oViewer = this.oViewerView.byId("pictureViewer");
        var fnApplyPosition = this.oViewerDialog.oPopup._applyPosition;
        this.oViewerDialog.oPopup._applyPosition = function(oPosition){

            var oPopup = this;
            oViewer.showBlockerLayer(function(){

                fnApplyPosition.call(oPopup, oPosition);
                oViewer._resize();
            });
        };
        var that = this;
        // bug with Dialog to calculate width & height of container
        // needs to trigger the rendering after the Dialog is actually opened
        var fnTrick = function(){
            that.oViewerView.rerender();
        };
        this.oViewerDialog.attachAfterOpen(fnTrick);

        this.editModel = new sap.ui.model.json.JSONModel({
            "editable" : false
        });
        this.oViewerView.setModel(this.editModel,"edit");

    },


    /**
     * Open business card
     * @param oEvent
     */
    openBusinessCard:function (oEvent) {
        var oEmpData = {};

        if (oEvent) {
            var oSource = oEvent.getSource();
            if (oSource) {

                //retrieve employee information
                var oContext = oSource.getBindingContext();
                var oModel = this.oApplicationFacade.getODataModel();
                if (oContext && oModel) {
                    oEmpData = {
                        name:oModel.getProperty("Name", oContext),
                        imgurl:"img/home/default_contact_picture.png",
                        department:oModel.getProperty("Department", oContext),
                        contactmobile:oModel.getProperty("MobilePhone", oContext),
                        contactphone:oModel.getProperty("OfficePhone", oContext),
                        contactemail:oModel.getProperty("EMail", oContext),
                        companyname:oModel.getProperty("CompanyName", oContext),
                        companyaddress:oModel.getProperty("CompanyAddress", oContext)
                    };

                    //call 'Business Card'
                    var oEmployeeLaunch = new sap.ca.ui.quickoverview.EmployeeLaunch(oEmpData);
                    oEmployeeLaunch.openBy(oSource);
                }
            }
        }
    },

    /**
     * @override
     * HACK for Full Screen & Master Detail Navigation
     * @param oItem
     */
    navBack : function() {
        window.history.back();
    },

    /**
     * Needed for addpicture component : Handler for picture pressed action.  Launches the PictureViewer
     * @param event{object} the event data
     */
    onItemPress : function (event) {

        var selectedImage = event.mParameters.pictureItem._oImage;
        this.showGallery(selectedImage);
    },

    /**
     * Needed for addpicture component : Creates the model which is passed to the PictureViewer page after navigation
     * @param selectedImage {object} sap.m.Image - the image that should be shown first
     * @private
     */
    showGallery : function (selectedImage) {

        // create model
        var images = [];
        var selectedImageIndex = 0;
        var gallery = this.addPicture.getPictures();

        // loop through the pictures, add reference to sap.m.Images, get the index of image
        for (var i=0; i<gallery.length; i++) {
            images.push(gallery[i]._oImage);
            if (gallery[i]._oImage === selectedImage)
                selectedImageIndex = i;
        }

        this.oViewerView.byId("pictureViewer").setSelectedIndex(selectedImageIndex);
        this.oViewerDialog.open();
    },
    onClose : function () {
        this.oViewerDialog.close();
    }
});
