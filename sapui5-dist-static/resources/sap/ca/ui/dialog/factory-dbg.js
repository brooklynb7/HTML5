jQuery.sap.declare("sap.ca.ui.dialog.factory");
jQuery.sap.require("sap.ca.ui.dialog.Dialog");

sap.ca.ui.dialog.factory = (function() {
	var _oDlgCollection = {};
	
	var _openDialog = function(oDlgInfo, oSettings, fnClose) {
		var oDlg = _oDlgCollection[oDlgInfo.dlgId];
		
		if (jQuery.isEmptyObject(oDlg)){
			oDlg = new sap.ca.ui.dialog.Dialog(oDlgInfo.dlgId, oDlgInfo);
			var oTempCol = {};
			oTempCol[oDlgInfo.dlgId] = oDlg;
			jQuery.extend(_oDlgCollection, oTempCol);
		}
		oDlg.initAndOpen(oSettings, fnClose);
	};
	
	return {
		showAbout : function(oSettings, fnClose) {
//implementation is removed to Unified Shell
//			_openDialog({
//				dlgId: "DLG_ABOUT",
//				xmlViewId: "CA_VIEW_ABOUT",
//				xmlViewName: "sap.ca.ui.dialog.About",
//				bStretchOnlyOnPhone: true
//			}, jQuery.extend(oSettings, {useragent: navigator.userAgent}), fnClose);
		},
		
		confirm : function(oSettings, fnClose) {
			_openDialog({
				dlgId: "DLG_CONFIRM",
				xmlViewId: "CA_VIEW_CONFIRM",
				xmlViewName: "sap.ca.ui.dialog.Confirm",
				bWithPadding: true
			}, oSettings, fnClose);
		},
		
		forward : function(fnStartSearch, fnClose) {
			_openDialog({
				dlgId: "DLG_FORWARD",
				xmlViewId: "CA_VIEW_FORWARD",
				xmlViewName: "sap.ca.ui.dialog.Forward",
				bStretchOnlyOnPhone: true
			}, {startExternalSearch: fnStartSearch}, fnClose);
		},
		
		selectItem : function(oSettings, fnClose) {
			_openDialog({
				dlgId: "DLG_SLTITEM",
				xmlViewId: "CA_VIEW_SLTITEM",
				xmlViewName: "sap.ca.ui.dialog.SelectItem",
				bStretchOnlyOnPhone: true
			}, oSettings, fnClose);
		},
		
		showLoginDetails : function(oSettings, fnClose) {
//implementation is removed to Unified Shell
//			_openDialog({
//				dlgId: "DLG_LOGIN",
//				xmlViewId: "CA_VIEW_LOGIN",
//				xmlViewName: "sap.ca.ui.dialog.LoginDetails",
//				bStretchOnlyOnPhone: true
//			}, oSettings, fnClose);
		},
		
		showMessageBox : function(oSettings, fnClose) {
			_openDialog({
				dlgId: "DLG_MSGBOX",
				xmlViewId: "CA_VIEW_MSG",
				xmlViewName: "sap.ca.ui.message.MessageBox",
				bWithPadding: true
			}, oSettings, fnClose);
		},
		
		setDataProperty : function(sDlgId, sPath, oValue) {
			var oDlg = _oDlgCollection[sDlgId];
			if (oDlg) oDlg.setDataProperty(sPath, oValue);
		},
		
		closeDialog : function(sDlgId, oResult) {
			var oDlg = _oDlgCollection[sDlgId];
			if (oDlg) oDlg.close(oResult);
		}
	};
}());

sap.ca.ui.dialog.loginDetails = (function() {
	return {
		open : function(oSettings, fnClose) {
			sap.ca.ui.dialog.factory.showLoginDetails(oSettings, fnClose);
		}
	};
}());

sap.ca.ui.dialog.about = (function() {
	return {
		open : function(oSettings, fnClose) {
			sap.ca.ui.dialog.factory.showAbout(oSettings, fnClose);
		}
	};
}());

sap.ca.ui.dialog.confirmation = (function() {
	return {
		open : function(oSettings, fnClose) {
			sap.ca.ui.dialog.factory.confirm(oSettings, fnClose);
		}
	};
}());

sap.ca.ui.dialog.forwarding = (function() {
	return {
		start : function(fnStartSearch, fnClose) {
			sap.ca.ui.dialog.factory.forward(fnStartSearch, fnClose);
		},
		
		setFoundAgents : function(arrAgents) {
			sap.ca.ui.dialog.factory.setDataProperty("DLG_FORWARD", "/agents", arrAgents);
		}
	};
}());

sap.ca.ui.dialog.selectItem = (function() {
	return {
		open : function(oSettings, fnClose) {
			sap.ca.ui.dialog.factory.selectItem(oSettings, fnClose);
		}
	};
}());