jQuery.sap.require("sap.ca.ui.message.message");
jQuery.sap.require("sap.ca.ui.sample.images.base64");

sap.ui.controller("views.sample.imagegallery.home", {

    /**
     * Initialisation of the view
     */
    onInit : function() {
        // get the page
        var view = this.getView();
        this.page = view.byId("page");
        util.UiFactory.fillPageHeader(this.page, view, util.Title.IMAGE_GALLERY);

        // get the addPicture control
        this.addPicture = view.byId("addPicture");

        // get the addOnePicture control
        this.addOnePicture = view.byId("addOnePicture");
        this.buttonDelete = view.byId("buttonDelete");



        // the pre-existing images
        this.model = new sap.ui.model.json.JSONModel({Pictures:[
            {
                "Name" : "Computer",
                "Source" : "images/72_iPad_Desktop_Launch.png"
            },
            {
                "Name" : "Light bulb",
                "Source": IMAGE_LIGHT_BULB
            },
            {
                "Name" : "Invoices",
                "Source": IMAGE_INVOICES
            },
            {
                "Name" : "Spiral",
                "Source": IMAGE_SPIRAL
            },
            {
                "Name" : "Building",
                "Source": IMAGE_BUILDING
            }
        ]});

        // add the model to the view for binding
        view.setModel(this.model);

        // list of deleted pictures
        this.deletedIndexes = [];

        var afterShowHandler = jQuery.proxy(this.onAfterShow, this);
        view.addEventDelegate({
            onAfterShow: afterShowHandler
        });


        this.oViewerView = sap.ui.xmlview("viewer-view", "views.sample.imagegallery.viewer");
        this.oViewerView.setHeight("100%");
        this.oViewerView.setModel(this.model);
        this.oViewerDialog = new sap.m.Dialog("viewer-dialog", {

            showHeader: false,
            content:[this.oViewerView],
            stretch: true,
            verticalScrolling: false,
            horizontalScrolling: false,
            endButton: new sap.m.Button({text:"Close", press: jQuery.proxy(this.onClose, this)})
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
        
    },



    /**
     * Handler for limit reached
     * @param event{object} the event data
     */
    onLimitReached : function (event) {
        sap.ca.ui.message.showMessageToast(
            "The limit for adding pictures has been reached!"
        );
    },


    /**
     * Handler for picture pressed action.  Launches the PictureViewer
     * @param event{object} the event data
     */
    onItemPress : function (event) {

        var selectedImage = event.getParameters().pictureItem._oImage;
        this.showGallery(selectedImage, event.getSource().getPictures(), false);
    },

    onPictureAddedAddOne: function(){
        this.addOnePicture.setEditable(false);
        this.buttonDelete.setVisible(true);
    },

    /**
     * Handler for picture added action.
     * @param event{object} the event data
     */
    onPictureAdded : function (oEvent) {

        var oItem = oEvent.getParameters().pictureItem;

        var aPictures = this.model.getData().Pictures || [];
        aPictures.push({Source: oItem.getSource(), Name: oItem.getName(), Status: oItem.getStatus()});

        this.model.setData({Pictures: aPictures});
    },


    /**
     * Handler for delete button press.
     * @param event{object} the event data
     */
    onDeletePress : function (event) {

        this.addOnePicture.removePicture(0);
        this.addOnePicture.setEditable(true);
        this.buttonDelete.setVisible(false);
    },



    /**
     * Creates the model which is passed to the PictureViewer page after navigation
     * @param selectedImage {object} sap.m.Image - the image that should be shown first
     * @private
     */
    showGallery : function (selectedImage, gallery, editable) {

        // create model
        var images = [];
        var selectedImageIndex = 0;

        // loop through the pictures, add reference to sap.m.Images, get the index of image
        for (var i=0; i<gallery.length; i++) {
            images.push(gallery[i]._oImage);
            if (gallery[i]._oImage === selectedImage)
                selectedImageIndex = i;
        }
        
        this.oViewerView.byId("pictureViewer").setSelectedIndex(selectedImageIndex);
        this.oViewerDialog.open();
    },

    /**
     * Handler for close action
     */
    onClose : function () {
        this.oViewerDialog.close();
    },
}); 