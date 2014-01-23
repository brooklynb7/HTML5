jQuery.sap.require("util.Const");
jQuery.sap.require("sap.m.MessageToast");
jQuery.sap.require("util.Formatter");

sap.ui.controller("view.Detail", {

	onInit : function() {
		// subscribe to onBeforeShow events
		this.getView().addEventDelegate({
			onBeforeShow : jQuery.proxy(function(evt) {
				this.onBeforeShow(evt);
			}, this)
		});
	},
	
	onBeforeShow : function(evt) {
		if (evt.data.context) {
			this.getView().setBindingContext(evt.data.context);
		}
	},
	
	navButtonPress : function(evt) {
		sap.ui.getCore().getEventBus().publish("nav", "back");
	},
	
	updateButtonPress : function(evt) {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", {
			id : "Update",
			data : this.getView().getBindingContext().getObject()
		});
	},
	
	washButtonPress : function(evt) {
		
		var view = this.getView();
		
		// update model
		var fruit = view.getBindingContext().getObject();
		fruit.state = util.Const.state.CLEAN;
		sap.ui.getCore().getModel().updateBindings();
		
		// show message
		sap.m.MessageToast.show("The fruit has been succesfully washed.");
	},
	
	deleteButtonPress : function(evt) {
		
		// nav virtual
		sap.ui.getCore().getEventBus().publish("nav", "virtual");
		
		// show confirmation dialog
		sap.m.MessageBox.show(
			"Do you really want to delete this fruit?",
			sap.m.MessageBox.Icon.QUESTION,
			"Confirmation",
			[sap.m.MessageBox.Action.CANCEL, sap.m.MessageBox.Action.DELETE],
			jQuery.proxy(function(oAction) {
				
				if (sap.m.MessageBox.Action.CANCEL === oAction) {
				
					// remove virtual state if dialog not closed by browser history
					sap.ui.getCore().getEventBus().publish("nav", "back");
				
				} else if (sap.m.MessageBox.Action.DELETE === oAction) {
					
					// update model
					var view = this.getView();
					var id = view.getBindingContext().getObject().id;
					var oModel = sap.ui.getCore().getModel();
					var fruits = oModel.getData().fruits;
					var newFruits = jQuery.grep(fruits, function(n){
						return n.id != id;
					});
					oModel.setData({fruits : newFruits });
					
					// update ui
					view.setBindingContext(undefined);
					sap.ui.getCore().getEventBus().publish("nav", "back", { step : 2});
				}
			}, this)
		);
	}
});