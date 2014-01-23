sap.ui.controller("i2d.qm.qualityissue.confirm.appref.Main", {

	onInit : function() {

		jQuery.sap.require("sap.ca.scfld.md.Startup");

		sap.ca.scfld.md.Startup.init('i2d.qm.qualityissue.confirm.appref', this);

	},
    /**
     * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
     *
     * @memberOf MainXML
     */
    onExit : function() {
        if (this.oAppNavigator) {
            // Destroy the navigation again
            this.oAppNavigator.destroy();
        }
	}
});