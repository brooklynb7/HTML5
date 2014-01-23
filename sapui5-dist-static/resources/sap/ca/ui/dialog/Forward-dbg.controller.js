jQuery.sap.require("sap.ca.ui.utils.resourcebundle");
sap.ui.controller("sap.ca.ui.dialog.Forward", {
	_FORWARD_DIALOG_ID: "DLG_FORWARD",
	_SEARCH_FIELD_ID: "SFD_FORWARD",
	_FORWARDER_LIST_ID: "LST_AGENTS",
	_FORWARDER_ITEM_ID: "ITM_AGENT",
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf About
*/
	onInit: function() {
		var agentlist = this.getView().byId(this._FORWARDER_LIST_ID);
		agentlist.bindProperty("showNoData", {
			path:'/agents',
			formatter: function(arrFoundAgents) {
				return (arrFoundAgents === undefined) ? false : true;
			}
		});
		
		var agentItem = this.getView().byId(this._FORWARDER_ITEM_ID);
		agentItem.bindProperty("icon", {
			path:'ImageURL',
			formatter: function(sURL) {
				return (sURL) ? sURL : "sap-icon://person-placeholder";
			}
		});
	},
	
	onBeforeOpenDialog: function() {
		//NOTE: the Forward Dialog is currently only opened by APPs, there is NO internal navigation back to this Dialog.
		//e.g. from Forward Confirmation Dialog back to this dialog. 
		//For the internal navigation, need to check if the state of the dialog should be kept.
		
		//remove previous search value
		var fldSearch = this.getView().byId(this._SEARCH_FIELD_ID);
		fldSearch.setValue("");
		fldSearch.focus();
		
		//remove the previous startExernalSearch function and set it from Dialog model
		this.startExternalSearch = undefined;
		var oDlgModel = this.getView().byId(this._FORWARD_DIALOG_ID).getModel();
		if (oDlgModel) {
			this.startExternalSearch = oDlgModel.getProperty("/startExternalSearch");
		}
		
		this._oSelectedAgent = null;
	},
	
	onStartSearch: function(oEvent) {
		var sSearchTerm = oEvent.getParameters().query;
		if (sSearchTerm) {//search term is NOT empty
			if (this.startExternalSearch) {
				this.startExternalSearch(sSearchTerm);
			} else { //Special Case: if there is NO external search provided, handle it as there is no result is found
				this.setAgents(null); 
			}
		} else { //search term is EMPTY
			//set the dialog back to initial state
			this.setAgents(undefined); 
		}
	},
	
	onSelectAgent: function(oEvent) {
		var oSelectedItem = oEvent.getParameters().listItem;
		if (oSelectedItem && oSelectedItem.getBindingContext()) {
			//1. close the current dialog at first
			this.getView().byId(this._FORWARD_DIALOG_ID).close();
			//2. open the confirmation dialog
			var oSelectedAgent = oSelectedItem.getBindingContext().getObject();
			sap.ca.ui.dialog.confirmation.open({
				question : sap.ca.ui.utils.resourcebundle.getText("forward.question", oSelectedAgent.FullName),
				showNote : true,
				title : sap.ca.ui.utils.resourcebundle.getText("forward.title"),
				confirmButtonLabel : sap.ca.ui.utils.resourcebundle.getText("dialog.ok"),
				agent : oSelectedAgent //further property for the confirmation dialog
			}, this.forwardConfirmClose);
		}
	},
	
	onCancelDialog: function() {
		var oResult = {
				bConfirmed: false
		};
		sap.ca.ui.dialog.factory.closeDialog("DLG_FORWARD", oResult);
	},
	
	setAgents: function(arr) {
		this.getView().byId(this._FORWARD_DIALOG_ID).getModel().setProperty("/agents", arr);//set new agents value
		this.getView().byId(this._FORWARDER_LIST_ID).rerender();
	},
	
	forwardConfirmClose: function(oResult) {
		var oNewResult = {};
		//call the APP forward close function
		if (oResult && oResult.isConfirmed) {
			oNewResult = {
					bConfirmed: true,
					sNote: oResult.sNote,
					oAgentToBeForwarded: this.agent //this is the confirmation dialog object
			}
		} else {
			oNewResult = {
					bConfirmed: false
			};
		}
		sap.ca.ui.dialog.factory.closeDialog("DLG_FORWARD", oNewResult);
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