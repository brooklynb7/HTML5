jQuery.sap.declare("sap.ca.ui.message.message");
jQuery.sap.require("sap.ca.ui.dialog.factory");
jQuery.sap.require("sap.m.MessageToast");
jQuery.sap.require("sap.ca.ui.utils.resourcebundle");
jQuery.sap.require("sap.ui.core.library");

sap.ca.ui.message = (function() {
	var _oType = {
		ERROR : {
			title : sap.ca.ui.utils.resourcebundle.getText("messagetype.error"),
			valueState : sap.ui.core.ValueState.Error
		},
		WARNING : {
			title : sap.ca.ui.utils.resourcebundle.getText("messagetype.warning"),
			valueState : sap.ui.core.ValueState.Warning
		},
		SUCCESS : {
			title : sap.ca.ui.utils.resourcebundle.getText("messagetype.success"),
			valueState : sap.ui.core.ValueState.Success
		},
		INFO : {
			title : sap.ca.ui.utils.resourcebundle.getText("messagetype.info"),
			valueState : sap.ui.core.ValueState.None
		}
	};

	var _getString = function(value) {
		var result = (jQuery.type( value ) === "string") ? value : "";
		// trim string
		return jQuery.trim(result);
	};
	
	var _getState = function(value) {
		var result = (value) ? value : sap.ui.core.ValueState.None;
		return result;
	};
	
	var _getIcon = function(value) {
		var result = (value && value === _oType.INFO) ? "sap-icon://hint" : "";
		return result;
	};
	
	var _initAndOpen = function(oSettings, fnClose) {
		var _oSettings = {};
		if (oSettings) {
			if (oSettings.type) {
				_oSettings.title = _getString(oSettings.type.title);
				_oSettings.state = _getState(oSettings.type.valueState);
				_oSettings.icon = _getIcon(oSettings.type);
				_oSettings.message = _getString(oSettings.message);
				//get and set Details, and Details should be not the same text as Message
				var sDetails = _getString(oSettings.details);
				_oSettings.details = (sDetails && sDetails !== _oSettings.message) ? sDetails : "";
				_oSettings.showLink = (_oSettings.details) ? true : false;
				_oSettings.showDetails = false; //invisible as default
			}
		}
		sap.ca.ui.dialog.factory.showMessageBox(_oSettings, fnClose);
	};
	
	return {
		showMessageBox : function(oSettings, fnClose) {
			_initAndOpen(oSettings, fnClose);
		},
		
		showMessageToast : function(sMessage) {
			sap.m.MessageToast.show(sMessage);
		}, 
		
		Type : _oType
	}
}());