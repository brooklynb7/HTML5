jQuery.sap.require("util.Const");
jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("view.Home", {

	onInit : function() {
		var model = new sap.ui.model.json.JSONModel({
			mode : sap.m.ListMode.None,
			inEdit : false,
			inDelete : false,
			inBatch : false
		});
		this.getView().setModel(model, "local");
	},
	
	itemPress : function(evt) {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", {
			id : "Detail",
			data : {
				context : evt.getSource().getBindingContext()
			}
		});
	},
	
	listSelect : function(evt) {
		this.enableBatchButtons();
	},
	
	enableBatchButtons : function() {
		var view = this.getView();
		var selItems = view.list.getSelectedItems();
		var enabled = (selItems !== undefined && selItems.length > 0);
		view.batchDeleteButton.setEnabled(enabled);
		view.washButton.setEnabled(enabled);
	},
	
	editBatchButtonPress : function(evt) {
		var view = this.getView();
		var newMode = (sap.m.ListMode.MultiSelect === view.list.getMode()) ? sap.m.ListMode.None : sap.m.ListMode.MultiSelect;
		var inBatch = (sap.m.ListMode.MultiSelect === newMode);
		view.getModel("local").setData({
			mode : newMode,
			inEdit : inBatch,
			inDelete : false,
			inBatch : inBatch
		});
	},
	
	editQuickDelButtonPress : function(evt) {
		var view = this.getView();
		var newMode = (sap.m.ListMode.Delete === view.list.getMode()) ? sap.m.ListMode.None : sap.m.ListMode.Delete;
		var inDelete = (sap.m.ListMode.Delete === newMode);
		view.getModel("local").setData({
			mode : newMode,
			inEdit : inDelete,
			inDelete : inDelete,
			inBatch : false
		});
	},
	
	washButtonPress : function(evt) {
		
		var view = this.getView();
		
		// update model
		var selectedItems = view.list.getSelectedItems();
		var oModel = sap.ui.getCore().getModel();
		var fruits = oModel.getData().fruits;
		jQuery.each(selectedItems, function(i, item) {
			var context = item.getBindingContext();
			var id = context.getObject().id;
			for (var f = 0 ; f < fruits.length ; f++ ) {
				if (fruits[f].id === id) {
					fruits[f].state = util.Const.state.CLEAN;
				}
			}
		});
		oModel.setData({fruits : fruits });
		
		// update ui
		view.list.removeSelections();
		this.enableBatchButtons();
		sap.m.MessageToast.show("The fruits have been succesfully washed.");
	},
	
	createButtonPress : function(evt) {
		var view = this.getView();
		view.inputCreate.getController().setResultFruit(undefined);
		sap.ui.getCore().getEventBus().publish("nav", "virtual");
		view.createDialog.open();
	},
	
	createDialogCancel : function(evt) {
		var view = this.getView();
		view.createDialog.close();
		sap.ui.getCore().getEventBus().publish("nav", "back");
	},
	
	createDialogConfirm : function() {
		var view = this.getView();
		var valid = view.inputCreate.getController().validate();
		if (valid) {
			
			// update model
			var newFruit = view.inputCreate.getController().getResultFruit();
			var oModel = sap.ui.getCore().getModel();
			var oData = oModel.getData();
			var oDelta = {fruits : [] };
			oDelta.fruits[oData.fruits.length] = newFruit;
			oModel.setData(oDelta, true);
			
			// updateui
			view.createDialog.close();
			sap.ui.getCore().getEventBus().publish("nav", "back");
		}
	},
	
	listDelete : function(evt) {

		// nav virtual
		sap.ui.getCore().getEventBus().publish("nav", "virtual");
		
		// show confirmation dialog
		var listItem = evt.getParameter("listItem");
		var fruitId = listItem.getBindingContext().getObject().id;
		sap.m.MessageBox.show(
			"Do you really want to delete this fruit?",
			sap.m.MessageBox.Icon.QUESTION,
			"Confirmation",
			[sap.m.MessageBox.Action.CANCEL, sap.m.MessageBox.Action.DELETE],
			jQuery.proxy(function(oAction) {
				
				// remove virtual state if dialog not closed by history
				if (oAction) {
					sap.ui.getCore().getEventBus().publish("nav", "back");
				}
				
				if (sap.m.MessageBox.Action.DELETE === oAction) {
					
					// update model
					var view = this.getView();
					var oModel = sap.ui.getCore().getModel();
					var fruits = oModel.getData().fruits;
					var newFruits = jQuery.grep(fruits, function(n){
						return n.id != fruitId;
					});
					oModel.setData({fruits : newFruits });
				}
			}, this)
		);
	},
	
	batchDeleteButtonPress : function(evt) {
		
		// nav virtual
		sap.ui.getCore().getEventBus().publish("nav", "virtual");
		
		// show confirmation dialog
		sap.m.MessageBox.show(
			"Do you really want to delete these fruits?",
			sap.m.MessageBox.Icon.QUESTION,
			"Confirmation",
			[sap.m.MessageBox.Action.CANCEL, sap.m.MessageBox.Action.DELETE],
			jQuery.proxy(function(oAction) {
				
				// remove virtual state if dialog not closed by history
				if (oAction) {
					sap.ui.getCore().getEventBus().publish("nav", "back");
				}
				
				if (sap.m.MessageBox.Action.DELETE === oAction) {
					
					// update model
					var view = this.getView();
					var selectedItems = view.list.getSelectedItems();
					var oModel = sap.ui.getCore().getModel();
					var fruits = oModel.getData().fruits;
					jQuery.each(selectedItems, function(i, item) {
						var context = item.getBindingContext();
						var id = context.getObject().id;
						fruits = jQuery.grep(fruits, function(n){
							return n.id != id;
						});
					});
					oModel.setData({fruits : fruits });
					
					// update ui
					this.enableBatchButtons();
				}
			}, this)
		);
	}
});