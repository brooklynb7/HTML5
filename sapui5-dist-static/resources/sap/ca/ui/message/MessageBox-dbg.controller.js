sap.ui.controller("sap.ca.ui.message.MessageBox", {
	_MSGBOX_ID : "DLG_MSGBOX",
	_MSGBOX_DETAILS_ID : "TXA_DETAILS",
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sap.ca.common.uilib.dialog.MessageBox
*/
//	onInit: function() {
//
//	},

	onCloseDialog: function() {
		sap.ca.ui.dialog.factory.closeDialog(this._MSGBOX_ID);
	},
	
	onShowDetails: function(oEvent) {
		var oLink = oEvent.getSource();
		if (oLink) {
			oLink.setVisible(false);
		}
		
		var oDetails = this.getView().byId(this._MSGBOX_DETAILS_ID);
		if (oDetails) {
			oDetails.setVisible(true);
		}
		
		this.getView().byId(this._MSGBOX_ID).rerender();
	}
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sap.ca.common.uilib.dialog.MessageBox
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sap.ca.common.uilib.dialog.MessageBox
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sap.ca.common.uilib.dialog.MessageBox
*/
//	onExit: function() {
//
//	}

});