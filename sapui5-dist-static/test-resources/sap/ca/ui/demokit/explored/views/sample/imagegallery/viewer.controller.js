sap.ui.controller("views.sample.imagegallery.viewer", {

    /**
     * Initialisation of the view
     */
    onInit : function() {
        var page = this.getView();
        
        this.pictureViewer = page.byId("pictureViewer");
        
        this.removeButton = page.byId("removeButton");

        var oImage = new sap.m.Image({src:"{Source}"});
       	var oItemTemplate = new sap.ca.ui.PictureTile({content: oImage});

        this.pictureViewer.bindAggregation("tiles", {path: "/Pictures",  template:oItemTemplate});
        
     },


    /**
     * Called before the page is shown
     */
    onBeforeShow:function (event) {
        // event information is passed from the home page
        this.galleryItems = event.data.galleryItems;
        
        this.selectedIndex =  event.data.selectedIndex;
        this.pictureViewer.selectPicture(this.selectedIndex);
        
        this.pictureViewer.setEditable(event.data.isEditable);
        this.byId("modeLabel").setText(event.data.isEditable);
    },

    /**
     * Called after the page is shown
     */
    onAfterShow:function (event) {
        // update the page
        //this.updatePage();
        // set the selected image, it needs a while to initialise
        //setTimeout(this.selectImage(), 0);
    	this.pictureViewer.scrollIntoView(this.selectedIndex, false);
    	this.pictureViewer.removeStyleClass("sapCaPWRendering");
    },





    /**
     * Handler for remove action
     */
    onRemove : function (oEvent) {
        // get current index of visible picture
        var pictureIndex = oEvent.getParameters().index;


        // update model
        var oModel = this.getView().getModel();
        var aPictures = oModel.getData().Pictures;
        aPictures.splice(pictureIndex, 1);

        oModel.setData({Pictures: aPictures});
    },



    /**
     * Helper function to create a function for the setTimeout - new set the visible picture
     * @private
     */
    selectImage : function () {
        return jQuery.proxy(function () {
            // show selected picture
            this.pictureViewer.selectPicture(this.selectedIndex);
        }, this);
    },

    /**
     * Helper function to switch between readonly mode and showing the delete button
     * @private
     */
    onSwitch: function(){
        this.pictureViewer.setRemovable( !this.pictureViewer.getRemovable() );
        this.byId("modeLabel").setText(this.pictureViewer.getRemovable() ) ;
    },

    onConfirmSwitch: function(){

        this.pictureViewer.setConfirmActive( !this.pictureViewer.getConfirmActive() );
        this.byId("confirmLabel").setText(this.pictureViewer.getConfirmActive() ) ;
    },

    setConfirmText: function(){
        this.pictureViewer.setConfirmText("Custom Question : Are you sure?");
    }
}); 