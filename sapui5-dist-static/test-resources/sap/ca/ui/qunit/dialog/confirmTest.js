/////////////////
//UI test page: Confirm Dialog
////////////////
var fnConfirmClose = function(oResult) {
	//set Dialog is closed
	qunithelper.bg_IsDialogClosed = true;
	if (oResult) {
		jQuery.sap.log.info("ConfirmDialog - isConfirmed: " + oResult.isConfirmed);
		if (oResult.sNote) {
			jQuery.sap.log.info("ConfirmDialog - Note: " + oResult.sNote);
		}
	}
};

var oBTNConfirm = new sap.m.Button({
	text : "Confirm (note optional)",
	press : function() {
		sap.ca.ui.dialog.confirmation.open({
			question : "Send your decision on the shopping card submitted by Henry Emerald?",
			showNote : true,
			title : "Send",
			confirmButtonLabel : "Send"
		}, fnConfirmClose);
	}
});

var oBTNConfirm2 = new sap.m.Button({
	text : "Confirm (without note)",
	press : function() {
		sap.ca.ui.dialog.confirmation.open({
			question : "Approve the shopping card submitted by Henry Emerald?",
			showNote : false,
			title : "Approve",
			confirmButtonLabel : "Approve"
		}, fnConfirmClose);
	}
});

var oBTNConfirm3 = new sap.m.Button({
	text : "Confirm (note required)",
	press : function() {
		sap.ca.ui.dialog.confirmation.open({
			question : 'You have selected "Reject", Submit?',
			showNote : true, //default value: true
			noteMandatory : true,//default value: false; if adding note is mandatory, the Conform button won't be accepted before the user adds the note.
			title : "Submit Decision", 
			confirmButtonLabel : "Submit"
		}, fnConfirmClose);
	}
});	

var oBTNConfirm4 = new sap.m.Button({
	text : "Reject (with additional info)",
	press : function() {
		sap.ca.ui.dialog.confirmation.open({
			question : 'Reject the leave request submitted by Frank Jones?',
			showNote : true, //default value: true
			additionalInformation: [{label: "Leave Type", text: "Vacation"},{label: "Between", text: "Jun 26, 2013"},{label: "To", text: "Jun 27, 2013"}, {label: "Comment", text: "Vacation conflict with Mary"}],
			title : "Reject", 
			confirmButtonLabel : "Reject"
		}, fnConfirmClose);
	}
});	

var oBTNConfirm5 = new sap.m.Button({
	text : "Approve (with additional info)",
	press : function() {
		sap.ca.ui.dialog.confirmation.open({
			question : 'Approve the leave request submitted by Frank Jones?',
			showNote : true, //default value: true
			additionalInformation: [{label: "Leave Type", text: "Vacation"},{label: "Requested", text: "Jun 26, 2013"}],
			title : "Approve", 
			confirmButtonLabel : "Approve"
		}, fnConfirmClose);
	}
});	

///////////
//Helpers
/////////////
var setNoteText = function(sText){
	var oTXANote = sap.ui.getCore().byId(DIALOG_CONFIRM_NOTEAREA_ID);
	oTXANote.setValue(sText);
	oTXANote.fireLiveChange({value: sText});
	oTXANote.rerender(); //refresh the text area to show the changes on UI
};

/////////////////
//Testing Part: Confirm Dialog
////////////////

module("Initial Check - Confirm Dialog");
qunithelper.checkDialog_beforeInitialized(DIALOG_CONFIRM_ID, DIALOG_CONFIRM_NAME);

module("Open and Close Confirm Dialog via calling sap.ca.ui.dialog.confirmation.open");

asyncTest("Open Dialog", function(){
	oBTNConfirm.firePress();
	setTimeout(function(){
		qunithelper.checkDialog_isVisible(DIALOG_CONFIRM_ID, "Send", "25em");
		start();
	}, 1000);
});

//confirmation button is Enabled
test("Confirm Button is Enabled", function () {
	qunithelper.check_Button_isEnabled(DIALOG_CONFIRM_BUTTONCONFIRM_ID, true);
});

qunithelper.closeDialog_andCheck(DIALOG_CONFIRM_ID, DIALOG_CONFIRM_BUTTONCANCEL_ID);
test("Test Callback", function () {
	equal(qunithelper.bg_IsDialogClosed, true, "Callback function is called");
});

module("Confirm Dialog without Note");

asyncTest("Open Dialog", function(){
	oBTNConfirm2.firePress();
	setTimeout(function(){
		qunithelper.checkDialog_isVisible(DIALOG_CONFIRM_ID, "Approve", "25em");
		start();
	}, 1000);
});

//confirmation button is Enabled
test("Confirm Button is Enabled", function () {
	qunithelper.check_Button_isEnabled(DIALOG_CONFIRM_BUTTONCONFIRM_ID, true);
});

qunithelper.closeDialog_andCheck(DIALOG_CONFIRM_ID, DIALOG_CONFIRM_BUTTONCANCEL_ID);
test("Test Callback", function () {
	equal(qunithelper.bg_IsDialogClosed, true, "Callback function is called");
});

module("Confirm Dialog (note mandatory/required)");

asyncTest("Open Dialog", function(){
	oBTNConfirm3.firePress();
	setTimeout(function(){
		qunithelper.checkDialog_isVisible(DIALOG_CONFIRM_ID, "Submit Decision", "25em");
		start();
	}, 1000);
});

//confirmation button is NOT Enabled
test("Confirm Button is NOT Enabled", function () {
	qunithelper.check_Button_isEnabled(DIALOG_CONFIRM_BUTTONCONFIRM_ID, false);
});

//set Note text and check Confirm Button
asyncTest("Confirm Button is Enabled", function(){
	setNoteText("a");
	setTimeout(function(){
		qunithelper.check_Button_isEnabled(DIALOG_CONFIRM_BUTTONCONFIRM_ID, true);
		start();
	}, 1000);
});

//set Note text and check Confirm Button
asyncTest("Confirm Button is Enabled", function(){
	setNoteText("   ");
	setTimeout(function(){
		qunithelper.check_Button_isEnabled(DIALOG_CONFIRM_BUTTONCONFIRM_ID, false);
		start();
	}, 1000);
});
qunithelper.closeDialog_andCheck(DIALOG_CONFIRM_ID, DIALOG_CONFIRM_BUTTONCANCEL_ID);
test("Test Callback", function () {
	equal(qunithelper.bg_IsDialogClosed, true, "Callback function is called");
});

module("Confirm Dialog (with additional information)");

asyncTest("Open Dialog", function(){
	oBTNConfirm4.firePress();
	setTimeout(function(){
		qunithelper.checkDialog_isVisible(DIALOG_CONFIRM_ID, "Reject", "25em");
		start();
	}, 1000);
});

//confirmation button is NOT Enabled
test("Confirm Button is Enabled", function () {
	qunithelper.check_Button_isEnabled(DIALOG_CONFIRM_BUTTONCONFIRM_ID, true);
});

//check additional information
test("Check additional information", function () {
	qunithelper.check_Text_isVisible(DIALOG_CONFIRM_ADDINFO_LABLE1_ID, "Leave Type");
});

qunithelper.closeDialog_andCheck(DIALOG_CONFIRM_ID, DIALOG_CONFIRM_BUTTONCANCEL_ID);
test("Test Callback", function () {
	equal(qunithelper.bg_IsDialogClosed, true, "Callback function is called");
});