jQuery.sap.require("sap.ca.ui.utils.resourcebundle");
sap.ui.controller("sap.ca.ui.dialog.SelectItem", {
	_SELECTITEM_DIALOG_ID: "DLG_SLTITEM",
	_SELECTITEM_LIST_ID: "LST_ITEMS",
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf About
*/
//	onInit: function() {
//		
//	},
	
	onBeforeOpenDialog: function() {
		//set default selection
		var oDlgModel = this.getView().byId(this._SELECTITEM_DIALOG_ID).getModel();
		if (oDlgModel) {
			var iDefaultIndex = oDlgModel.getProperty("/defaultIndex");
			//set the default selection
			var lstItems = this.getView().byId(this._SELECTITEM_LIST_ID);
			var arrItems = lstItems.getItems();
			if (arrItems && iDefaultIndex >= 0 && iDefaultIndex < arrItems.length) {
				lstItems.setSelectedItem(arrItems[iDefaultIndex], true); //mark the selection on UI
			}
		}
	},
	
	onSelectionChange: function(oEvent) {
		var oSelectedItem = oEvent.getParameters().listItem;
		if (oSelectedItem && oSelectedItem.getBindingContext()) {
			//1. close the current dialog at first
			this.getView().byId(this._SELECTITEM_DIALOG_ID).close();
			//2. open the confirmation dialog
			var oSelectedObject = oSelectedItem.getBindingContext().getObject();
			var oResult = {
					selectedIndex: oEvent.getParameters().listItem.getParent().indexOfItem(oSelectedItem),
					selectedItem: oSelectedObject
			};
			sap.ca.ui.dialog.factory.closeDialog(this._SELECTITEM_DIALOG_ID, oResult);
		}
	},
	
	onCancelDialog: function() {
		var oResult = {
				selectedIndex: -1,
				selectedItem: null
		};
		sap.ca.ui.dialog.factory.closeDialog(this._SELECTITEM_DIALOG_ID, oResult);
	}
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf About
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf About
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf About
*/
//	onExit: function() {
//
//	}

});