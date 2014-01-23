sap.ui.controller("view.PoForwardSearch", {

	onInit : function() {

	},

	onExit : function() {
		
	},
	
	search : function(evt) {
		var searchValue = evt.getSource().getValue();
		var binding = this.getView().byId("contactList").getBinding("items");
		var filter = new sap.ui.model.Filter("name",
				sap.ui.model.FilterOperator.Contains,
				searchValue);
		binding.filter([ filter ]);
	},
	
});