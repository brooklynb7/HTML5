sap.ui.controller("view.detail.Mail", {
	onNavButtonTap: function(){
		sap.ui.getCore().getEventBus().publish("nav", "back");
	},
	
	onBeforeFirstShow: function(oEvent){
		if(oEvent.data.bindingContext){
			this.getView().setBindingContext(oEvent.data.bindingContext);
		}
	}
});