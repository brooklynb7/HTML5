sap.ui.controller("view.Update", {

	onInit : function() {
		// subscribe to onBeforeShow events
		this.getView().addEventDelegate({
			onBeforeShow : jQuery.proxy(function(evt) {
				this.onBeforeShow(evt);
			}, this)
		});
	},
	
	onBeforeShow : function(evt) {
		this.byId("inputView").getController().setResultFruit(evt.data);
		this.byId("inputView").getController().validate();
		this.byId("image").setSrc(evt.data.imgL);
	},
	
	updateFruit : function(updatedFruit) {
		var oModel = sap.ui.getCore().getModel();
		var fruits = oModel.getData().fruits;
		for (var i = 0 ; i < fruits.length ; i++ ) {
			if (fruits[i].id === updatedFruit.id) {
				fruits[i] = updatedFruit;
			}
		}
		oModel.setData({fruits : fruits });
	},
	
	cancelButtonPress : function() {
		sap.ui.getCore().getEventBus().publish("nav", "back");
	},
	
	doneButtonPress : function() {
		var inputUpdateController = this.byId("inputView").getController();
		var valid = inputUpdateController.validate();
		if (valid) {
			var resultFruit = inputUpdateController.getResultFruit();
			this.updateFruit(resultFruit);
			sap.ui.getCore().getEventBus().publish("nav", "back");
		}
	}
});