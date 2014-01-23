sap.ui.controller("sap.ushell.components.factsheet.views.ThingViewer", {
	
	setService : function(sUri) {
		this.getView().setModel(new sap.ui.model.odata.ODataModel(sUri));
	}

});