sap.ui.controller("sap.ca.scfld.md.view.MainSplitContainer", {

	onInit : function() {
		sap.ca.scfld.md.app.Application.getImpl().setSplitContainer(this.byId("MainSplitContainer"));
	}

});