jQuery.sap.declare("sap.ca.ui.dialog.Dialog");

sap.ca.ui.dialog.Dialog = function(sId, oSettings){
	this.setId(sId);
	if (oSettings) {
		this.setXMLView(oSettings.xmlViewId, 
						oSettings.xmlViewName, 
						oSettings.bStretchOnlyOnPhone, 
						oSettings.bWithPadding);
	}
};

sap.ca.ui.dialog.Dialog.prototype.initAndOpen = function(oSettings, fnClose) {
	//merge oSettings and fnClose function
	var oViewSettings = jQuery.extend({}, oSettings, {
		fnClose : (jQuery.isFunction(fnClose))? fnClose : null
	});
	
	//set model to view
	var oModel = new sap.ui.model.json.JSONModel(oViewSettings);
	this.getDialog().setModel(oModel);
	
	//open the dialog
	this.getDialog().open();
};

sap.ca.ui.dialog.Dialog.prototype.setId = function(sId) {
	this._sId = "";
	if (jQuery.type(sId) === "string") {
		this._sId = sId;
	}
};

sap.ca.ui.dialog.Dialog.prototype.getId = function() {
	return this._sId;
};

sap.ca.ui.dialog.Dialog.prototype.setXMLView = function(sXMLViewId, sXMLViewName, bStretchOnlyOnPhone, bWithPadding) {
	this._sXMLView = null;
	this._oDlg = null;
	if (jQuery.type(sXMLViewId) === "string" && jQuery.type(sXMLViewName) === "string") {
		this._sXMLView = new sap.ui.view({
			id : sXMLViewId, 
			viewName : sXMLViewName, 
			type : sap.ui.core.mvc.ViewType.XML
		});
		if (this._sXMLView) {
			this._oDlg = this._sXMLView.byId(this.getId());
			if (bStretchOnlyOnPhone && jQuery.device.is.phone) {
				this._oDlg.setStretch(true);
			}
			if (bWithPadding) {
				this._oDlg.addStyleClass("sapUiPopupWithPadding");
			}
		}
	}
};

sap.ca.ui.dialog.Dialog.prototype.setDataProperty = function(sPath, oValue) {
	if (this._oDlg) {
		this._oDlg.getModel().setProperty(sPath, oValue);
		this._oDlg.rerender();
	}
};

sap.ca.ui.dialog.Dialog.prototype.getXMLView = function() {
	return this._sXMLView;
};

sap.ca.ui.dialog.Dialog.prototype.getDialog = function() {
	return this._oDlg;
};

sap.ca.ui.dialog.Dialog.prototype.close = function(oResult) {
	if (this._oDlg) {
		if (this._oDlg.isOpen()) {
			this._oDlg.close();
		}
		//get callback function from Model
		var oModel = this._oDlg.getModel();
		if (oModel && oModel.getData()) { 
			if (oModel.getData().fnClose && typeof oModel.getData().fnClose === "function") {
				oModel.getData().fnClose(oResult);
			}
		}
	}
};