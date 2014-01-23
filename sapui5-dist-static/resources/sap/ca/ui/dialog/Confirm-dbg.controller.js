jQuery.sap.require("sap.ca.ui.utils.resourcebundle");
sap.ui.controller("sap.ca.ui.dialog.Confirm", {
	_CONFIRM_NOTE_ID: "TXA_NOTE",
	_CONFIRM_BUTTON_ID: "BTN_CONFIRM",
	_CONFIRM_DIALOG_ID: "DLG_CONFIRM",
	_CONFIRM_VERTICALLAYOUT_SM_ID: "VLT_ADDINFO",
	_CONFIRM_TEXT_EMPTYLINE: "TXT_EMPTYLINE",
	_bNoteMandatory: false,
	_sPreviousInput: "",
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf About
*/
	onInit: function() {
		if (jQuery.device.is.phone === false) {
			var oDlg = this.getView().byId(this._CONFIRM_DIALOG_ID);
			oDlg.setContentWidth("25em"); 
		}
		
		//set visible binding
		var oVerticalLayout = this.getView().byId(this._CONFIRM_VERTICALLAYOUT_SM_ID);
		oVerticalLayout.bindProperty("visible", {
			path:'/additionalInformation',
			formatter: function(oInfo) {
				return (oInfo && oInfo.length>0) ? true : false;
			}
		});
		var oEmptyText = this.getView().byId(this._CONFIRM_TEXT_EMPTYLINE);
		oEmptyText.bindProperty("visible", {
			path:'/additionalInformation',
			formatter: function(oInfo) {
				return (oInfo && oInfo.length>0) ? false : true;
			}
		});
	},
	
	onBeforeOpenDialog: function(){
		//remove previous note value
		var oTXANote = this.getView().byId(this._CONFIRM_NOTE_ID);
		oTXANote.setValue(""); 
		this._sPreviousInput = "";
		
		//get the noteMandatory property via model
		this._bNoteMandatory = false;
		var oDlgModel = this.getView().byId(this._CONFIRM_DIALOG_ID).getModel();
		if (oDlgModel) {
			this._bNoteMandatory = oDlgModel.getProperty("/noteMandatory");
			//set the confirm button correspondingly
			if (this._bNoteMandatory) { 
				this.enableConfirmButton(false);
				oTXANote.setPlaceholder(sap.ca.ui.utils.resourcebundle.getText("YMSG_TEXT_NOTE_MANDATORY"));
			} else {
				this.enableConfirmButton(true);
				oTXANote.setPlaceholder(sap.ca.ui.utils.resourcebundle.getText("YMSG_TEXT_NOTE"));
			}
			
			//set note visible or not
			if (this._bNoteMandatory) {
				oTXANote.setVisible(true);
			} else {
				if (oDlgModel.getProperty("/showNote")) {
					oTXANote.setVisible(true);
				} else {
					oTXANote.setVisible(false);
				}
			}
		}
	},
	
	onConfirmDialog: function(oEvent) {
		var oTXANote = this.getView().byId(this._CONFIRM_NOTE_ID);
		var oResult = {
				isConfirmed: true,
				sNote: oTXANote.getValue()
		};
		sap.ca.ui.dialog.factory.closeDialog(this._CONFIRM_DIALOG_ID, oResult);
	},
	
	onCancelDialog: function(oEvent) {
		var oResult = {
				isConfirmed: false
		};
		sap.ca.ui.dialog.factory.closeDialog(this._CONFIRM_DIALOG_ID, oResult);
	},
	
	onNoteInput: function(oEvent) {
		var sNewValue = oEvent.getParameters().value?oEvent.getParameters().value:oEvent.getParameters().newValue;
		sNewValue = jQuery.trim(sNewValue); //remove the starting and ending white spaces
		if (sNewValue && !this._sPreviousInput) {
			//set the confirm button enabled
			this.enableConfirmButton(true);
		} else {
			if (this._sPreviousInput && !sNewValue && this._bNoteMandatory) {
				//set the confirm button disabled
				this.enableConfirmButton(false);
			}
		}
		this._sPreviousInput = (sNewValue)?sNewValue:"";
	},
	
	enableConfirmButton: function(bEnabled) {
		var oBTNConfirm = this.getView().byId(this._CONFIRM_BUTTON_ID);
		if (oBTNConfirm.getEnabled() !== bEnabled) {
			oBTNConfirm.setEnabled(bEnabled);
//			if (!bEnabled) { //make the button in disabled/enabled style
//				oBTNConfirm.addStyleClass("sapMBtnDisabled");
//			} else {
//				oBTNConfirm.removeStyleClass("sapMBtnDisabled");
//			}
			oBTNConfirm.rerender(); //rerender to SHOW button in the dialog is enabled/disabled
		}
	},
	
	formatVisible: function(sText) {
		if (sText && sText.length>0) return true;
		return false;
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