jQuery.sap.require("sap.ui.core.mvc.Controller");
jQuery.sap.require("sap.m.MessageToast");
jQuery.sap.require("sap.ca.scfld.md.controller.BaseFullscreenController");

jQuery.sap.require("sap.ca.ui.dialog.factory");

sap.ca.scfld.md.controller.BaseFullscreenController.extend("i2d.qm.qualityissue.confirm.appref.view.IssueForm", {

    /**
     * Called by the UI5 runtime to init this controller
     */

    onInit : function () {
        //get the application bundle
        this.resourceBundle = this.oApplicationFacade.getResourceBundle();

        // Listener for navigation
        this.isRoot = true;
        var view = this.getView();

        this.isRoot = true;

        //Create the model
        this.createModel();
        this.getView().setModel(this.creationModel, "creationModel");

        //Required by addpicture component

        // get the page
        var page = view.byId("page");

        // get the addPicture control
        this.addPicture = view.byId("addPicture");

        // Model for addPicture component
        this.pictureModel = new sap.ui.model.json.JSONModel({Pictures:[
        ]});

        //the form displayed in this page
        this.form = view.byId("form");
        this.bIsFormVAligned = false;

        view.setModel(this.pictureModel,"picture");

        
        this.oViewerView = sap.ui.xmlview("viewer-view", "i2d.qm.qualityissue.confirm.appref.view.Viewer");
        this.oViewerView.setHeight("100%");
        this.oViewerView.setModel(this.pictureModel,"picture");
        this.oViewerDialog = new sap.m.Dialog("viewer-dialog", {

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
            "editable" : true
        });
        this.oViewerView.setModel(this.editModel,"edit");
    },

    /**
     * Called by the UI5 runtime to cleanup this controller
     */

    onExit : function () {

        // destroy the control if needed
        if (this._defectSelectDialog) {
            this._defectSelectDialog.destroy();
            this._defectSelectDialog = null;
        }
        // destroy the control if needed
        if (this._categorySelectDialog) {
            this._categorySelectDialog.destroy();
            this._categorySelectDialog = null;
        }
    },

    /**
     * Called by submit button
     */

    onSubmit : function () {

        // Handling the OK button
        var fnClose = jQuery.proxy(function(oResult) {
            if (oResult.isConfirmed) {

                // Call your post from there

                // clean the model
                this.cleanModel();

                // Navigate to S2
                this.oRouter.navTo("master");

                // Validation message
                var validationMessage = this.resourceBundle.getText("TXT_VALIDATION");
                sap.m.MessageToast.show(validationMessage, {
                    duration : 100000
                });
            }
        }, this);

        //open the confirmation dialog
        sap.ca.ui.dialog.confirmation.open({
            question : this.resourceBundle.getText("SUBMIT_VALIDATION"),
            showNote : false,
            title : this.resourceBundle.getText("SUBMIT"),
            confirmButtonLabel : this.resourceBundle.getText("OK")
        }, fnClose);

    },

    /**
     * Select defects in a selectDialog control
     */

    displayDefect : function (oEvent) {

        // Create dialog if does not exist
        if (!this._defectSelectDialog) {
            this._defectSelectDialog = sap.ui.xmlfragment("i2d.qm.qualityissue.confirm.appref.view.DefectSelectDialog", this);
            this._defectSelectDialog.setModel(this.oApplicationFacade.getODataModel());
            this._defectSelectDialog.setModel(this.oApplicationFacade.getODataModel("i18n"),"i18n");
        }
        // Open the dialog
        this._defectSelectDialog.open();
    },

    /**
     * Select an item in the selectDialog and close it
     */

    closeDefectSelectDialog : function (oEvent) {
        //Retrieve the selected item and update the creation model
        var selectedItem = oEvent.getParameter("selectedItem");
        if (selectedItem) {
            this.creationModel.setProperty("/SelectedDefect", selectedItem.getTitle());
            this.onCheckStatusSubmit();
        }

    },

    /**
     * Display categories  in a selectDialog control
     */

    displayCategory : function (oEvent) {
        // Create dialog if does not exist
        if (!this._categorySelectDialog) {
            this._categorySelectDialog = sap.ui.xmlfragment("i2d.qm.qualityissue.confirm.appref.view.CategorySelectDialog", this);
            this._categorySelectDialog.setModel(this.oApplicationFacade.getODataModel());
            this._categorySelectDialog.setModel(this.oApplicationFacade.getODataModel("i18n"),"i18n");
        }
        // Open the dialog
        this._categorySelectDialog.open();
    },

    /**
     * Select an item in the selectDialog and close it
     */

    closeCategorySelectDialog : function (oEvent) {
        //Retrieve the selected item and update the creation model
        var selectedItem = oEvent.getParameter("selectedItem");
        if (selectedItem) {
            this.creationModel.setProperty("/SelectedCategory", selectedItem.getTitle());
            this.onCheckStatusSubmit();
        }

    },

    /**
     * Cancel the creation of issue and navigate to master/detail
     */

    onCancel : function () {

        // Confirmation box only if one value has changed
        if (this.hasChanged()){
            // Handling the OK button
            var fnClose = jQuery.proxy(function(oResult) {
                if (oResult.isConfirmed) {

                    this.cancelAction();
                }
            }, this);

            //open the confirmation dialog
            sap.ca.ui.dialog.confirmation.open({
                question : this.resourceBundle.getText("SUBMIT_CANCEL"),
                showNote : false,
                title : this.resourceBundle.getText("CANCEL"),
                confirmButtonLabel : this.resourceBundle.getText("OK")
            }, fnClose);
        }
        else{
            this.cancelAction();
        }

    },

    /**
     * Reset the model and navigate to master
     */

    cancelAction : function () {

        // reset of the model
        this.cleanModel();

        // Navigate to S2
        this.oRouter.navTo("master");

    },

    /**
     * Check if the submit button should be available
     */

    onCheckStatusSubmit : function (oEvent) {

        //Check properties size
        if (!this.creationModel.getProperty("/Description").length === 0 &&
            !this.creationModel.getProperty("/SelectedDefect").length === 0 &&
            !this.creationModel.getProperty("/Reference").length === 0 &&
            !this.creationModel.getProperty("/SelectedCategory").length === 0) {
            //Enable the button when all mandatory fields are not empty
            this.creationModel.setProperty("/toggleSubmit", true);
        }
    },

    /**
     * Check if the user has entered at least one value
     */

    hasChanged : function () {

        var status = false;
        //Check properties size
        if (!this.creationModel.getProperty("/Attachments").length === 0 ||
            !this.creationModel.getProperty("/DetailedDescription").length === 0 ||
            !this.creationModel.getProperty("/Description").length === 0 ||
            !this.creationModel.getProperty("/SelectedDefect").length === 0 ||
            !this.creationModel.getProperty("/Reference").length === 0 ||
            !this.creationModel.getProperty("/SelectedCategory").length === 0) {
            //Check if one the value has changed
            status = true;
        }
        return status;
    },

    /**
     * Create the model
     */

    createModel : function () {


        //creating a model for binding data to send to server
        this.creationModel = new sap.ui.model.json.JSONModel({
            "Attachments" : "",
            "Description" : "",
            "SelectedDefect" : "",
            "Reference" : "",
            "SelectedCategory" : "",
            "DetailedDescription" : "",
            "toggleSubmit" : false
        });
    },

    /**
     * Clean the model
     */

    cleanModel : function () {

        //reset the model to initial state
        this.pictureModel.setProperty("/Pictures", null);
        this.creationModel.setProperty("/Attachments", "");
        this.creationModel.setProperty("/Description", "");
        this.creationModel.setProperty("/SelectedDefect", "");
        this.creationModel.setProperty("/Reference", "");
        this.creationModel.setProperty("/SelectedCategory", "");
        this.creationModel.setProperty("/DetailedDescription", "");
        this.creationModel.setProperty("/toggleSubmit", false);

    } ,
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

    onPictureAdded: function(oEvent){
        var oItem = oEvent.getParameters().pictureItem;

        var aPictures = this.pictureModel.getData().Pictures || [];
        aPictures.push({source: oItem.getSource(), name: oItem.getName(), status: oItem.getStatus()});

        this.pictureModel.setData({Pictures: aPictures});

    },

    /**
     * Handler for close action
     */
    onClose : function () {
        this.oViewerDialog.close();
    },


    /**
     *  Needed for addpicture component : Handler for limit reached
     * @param event{object} the event data
     */
    onLimitReached : function (event) {
        sap.ca.ui.message.showMessageToast(
            this.resourceBundle.getText("LIMIT_MESSAGE")
        );
    },

    /**
     * sets the form labels in the middle vertical alignement of their related input field
     */
    onAfterRendering: function () {

        if (! this.bIsFormVAligned && this.form) {     //so we update the dom once
            var items = this.form.getContent();
            var i, sControlId, oControl, iCalculatedHeight;

            for (i = 0; i < items.length; i++) {
                if (items[i] instanceof sap.m.Label) {
                    //find related control
                    sControlId = items[i].getLabelFor();
                    if (sControlId) {
                        oControl = this.getView().byId(sControlId);

                        if (oControl) {
                            //first: inner padding+margin from the div wrapper (parent) and the html control itself (first children)
                            iCalculatedHeight = Math.ceil(oControl.$().children().first().offset().top - oControl.$().parent().offset().top);

                            if (oControl instanceof sap.m.TextArea) {
                                //then either: only text - label alignment
                                iCalculatedHeight += parseInt(oControl.$().children().first().css("padding-top"));
                                items[i].$().css("margin-top", iCalculatedHeight+"px");
                            }
                            else {
                                //then or: full vertical alignment
                                iCalculatedHeight += 4; //borders
                                iCalculatedHeight += oControl.$().height();

                                items[i].$().parent().css("line-height", iCalculatedHeight + "px"); //vertical alignment
                                items[i].$().css("vertical-align", "middle");
                            }
                        }
                    }
                }
            }

            this.bIsFormVAligned = true;
        }

    }
});
