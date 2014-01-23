jQuery.sap.require("sap.ca.scfld.md.controller.BaseFullscreenController");

sap.ca.scfld.md.controller.BaseFullscreenController.extend("i2d.qm.qualityissue.confirm.appref.view.Viewer", {

    /**
     * Initialisation of the view
     */
    onInit : function() {


    },

    /**
     * Override to get rid of Scaffolding
     *
     * @param oOptions
     */
    setHeaderFooterOptions : function(oOptions){


    },



    /**
     * Handler for remove action
     */
    onRemove : function (oEvent) {
        // get current index of visible picture
        var pictureIndex = oEvent.getParameters().index;


        // update model
        var oModel = this.getView().getModel("picture");
        var aPictures = oModel.getData().Pictures;
        aPictures.splice(pictureIndex, 1);

        oModel.setData({Pictures: aPictures});

    },


    /**
     * Helper function to create a function for the setTimeout - new set the visible picture
     * @private
     */
    _selectImage : function () {

    }
});
