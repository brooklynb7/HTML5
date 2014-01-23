//////////
//Global Constants Definition
//////////
//Confirmation Dialog, used standalone and also in the forward process
var DIALOG_CONFIRM_ID = "CA_VIEW_CONFIRM--DLG_CONFIRM";
var DIALOG_CONFIRM_BUTTONCANCEL_ID = "CA_VIEW_CONFIRM--BTN_CANCEL";
var DIALOG_CONFIRM_BUTTONCONFIRM_ID = "CA_VIEW_CONFIRM--BTN_CONFIRM";
var DIALOG_CONFIRM_NOTEAREA_ID = "CA_VIEW_CONFIRM--TXA_NOTE";
var DIALOG_CONFIRM_NAME = "Confirm Dialog";
var DIALOG_CONFIRM_ADDINFO_LABLE1_ID = "CA_VIEW_CONFIRM--LBL_INFO1";

//Forward Dialog
var DIALOG_FORWARD_ID = "CA_VIEW_FORWARD--DLG_FORWARD";
var DIALOG_FORWARD_BUTTONCANCEL_ID = "CA_VIEW_FORWARD--BTN_CANCEL";
var DIALOG_FORWARD_NAME = "Forward Dialog";
var DIALOG_SEARCH_FIELD = "CA_VIEW_FORWARD--SFD_FORWARD";
var DIALOG_FORWARD_LIST = "CA_VIEW_FORWARD--LST_AGENTS";

//////////
//Global Variable Definition
//////////

//////////////////
var qunithelper = {
	dialogName : "Dialog",
	bg_IsDialogClosed : false,
	
	checkDialog_beforeInitialized : function(sDialogID, sDialogName) {
		if (sDialogName) { //set the Dialog name for current testing
			this.dialogName = sDialogName;
		}
		test("Initialization", function() {
			ok(!jQuery.sap.domById(sDialogID), this.dialogName + " is not rendered before it's ever opened.");
		});	
	},
	
	checkDialog_isVisible : function(sDialogID, sExpTitle, sExpContentWidth) {
		ok(jQuery.sap.domById(sDialogID), this.dialogName + " is rendered after it's opened");
		var oDialog = sap.ui.getCore().byId(sDialogID);
		ok(oDialog, this.dialogName + " exists in sap.ui.core");	
		var $dialog = jQuery.sap.byId(sDialogID);
		equal($dialog.css("visibility"), "visible", this.dialogName + " is visible");
		strictEqual(oDialog.getTitle(), sExpTitle, this.dialogName + " has the title '" + sExpTitle + "'");
		if (jQuery.device.is.phone === false) { //only check if it's not phone
			strictEqual(oDialog.getContentWidth(), sExpContentWidth, this.dialogName + " has a content width " + sExpContentWidth);
		}
		return oDialog;
	},
	
	check_Text_isVisible : function(sElementID, sExpText) {
		var sText = sap.ui.getCore().byId(sElementID);
		ok(sText, "Text " + sElementID + " exists in sap.ui.core");
		var $dialog = jQuery.sap.byId(sElementID);
		equal($dialog.css("visibility"), "visible", "Text " + sElementID +" is visible");
		if (sExpText) {
			strictEqual((sText.getText)?sText.getText():sText.getValue(), sExpText, sElementID + " hast the text: '" + sExpText + "'");
		}
	},
	
	check_Button_isEnabled : function(sElementID, bEnabled) {
		var oButton = sap.ui.getCore().byId(sElementID);
		ok(oButton, "Button " + sElementID + " exists in sap.ui.core");
		var $Button = jQuery.sap.byId(sElementID);
		equal($Button.css("visibility"), "visible", "Button " + sElementID +" is visible");
		equal(oButton.getEnabled(), bEnabled?true:false, "Button is " + bEnabled?"enabled.":"disabled.");
	},
	
	closeDialog_andCheck : function(sDialogID, sCloseButtonID) {
		var that = this;
		asyncTest("Close " + this.dialogName, function(){
			var oBtnOK = sap.ui.getCore().byId(sCloseButtonID);
			oBtnOK.firePress();
			setTimeout(function(){
				var $dialog = jQuery.sap.byId(sDialogID);
				equal($dialog.css("visibility"), "hidden", that.dialogName + " is closed and invisible");
				start();
			}, 500);
		});	
	}
};