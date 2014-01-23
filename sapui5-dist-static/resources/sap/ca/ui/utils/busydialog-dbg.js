jQuery.sap.declare("sap.ca.ui.utils.busydialog");

jQuery.sap.require("sap.ca.ui.images.images");

sap.ca.ui.utils.BUSYDIALOG_TIMEOUT = 1500;

sap.ca.ui.utils.busydialog = (function() {
	var BUSIDIALOG_ID = "CA_BusyDialog";
	var _oBusyDialog = null;
	var _bIsOpen = false;
	var _iRequiredCount = 0;
	var _sTimerId = null;

	var _fnOpenBusyDialog = function(oSettings){
		if (!_oBusyDialog) {
			_oBusyDialog = new sap.m.BusyDialog(BUSIDIALOG_ID, { customIcon : sap.ca.ui.images.images.Flower });
		}
		if (oSettings && oSettings.text && typeof oSettings.text === "string") {
			_oBusyDialog.setText(oSettings.text);
		}
		if (!_bIsOpen){
			_oBusyDialog.open();
			_bIsOpen = true;
		}
	};

	var _removePreviousdCall = function(){
		if(_sTimerId){
			jQuery.sap.clearDelayedCall(_sTimerId)
			_sTimerId = null;
		}
	};

	var _fnUpdateDisplay = function(oSettings){
		if(_iRequiredCount > 0){
			_removePreviousdCall();
			_sTimerId = jQuery.sap.delayedCall(sap.ca.ui.utils.BUSYDIALOG_TIMEOUT, undefined, _fnOpenBusyDialog, [oSettings]);
		} else {
			_removePreviousdCall();
			if (_oBusyDialog) {
				_oBusyDialog.close();
				_bIsOpen = false;
				_oBusyDialog.setText("");
			}
		}
	}

	return {
		requireBusyDialog : function(oSettings){
			_iRequiredCount++;
			_fnUpdateDisplay(oSettings);
		},

		releaseBusyDialog : function(){
			_iRequiredCount--;
			if (_iRequiredCount < 0){
				jQuery.sap.log.error("busy dialog released more often than required");
				_iRequiredCount = 0;
			}
			_fnUpdateDisplay();
		},

		destroyBusyDialog : function(){
			if (_oBusyDialog) {
				_oBusyDialog.destroy();
				_oBusyDialog = null;
			}
		}
	}

}());
