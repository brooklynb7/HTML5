var MESSAGEBOX_ID = "CA_VIEW_MSG--DLG_MSGBOX";
var MESSAGEBOX_MESSAGE = "CA_VIEW_MSG--TXT_MSG";
var MESSAGEBOX_LNK_SHOWDETAILS = "CA_VIEW_MSG--LINK_DETAILS";
var MESSAGEBOX_TXA_DETAILS = "CA_VIEW_MSG--TXA_DETAILS";
var MESSAGEBOX_BTN_OK = "CA_VIEW_MSG--BTN_OK";
var MESSAGEBOX_NAME = "Message Box";

module("Initial Check");

qunithelper.checkDialog_beforeInitialized(MESSAGEBOX_ID, MESSAGEBOX_NAME);

module("Test Message Type");

var _testMsgType = function(oTypeToCheck, sExpTitle, oExpValueState) {
	strictEqual(oTypeToCheck.title, sExpTitle, "MessageType " + sExpTitle + ": title is ok");
	strictEqual(oTypeToCheck.valueState, oExpValueState, "MessageType " + sExpTitle + ": value state is ok");
};

test("Test Message Type", function () {
	_testMsgType(sap.ca.ui.message.Type.ERROR, "Error", sap.ui.core.ValueState.Error);
	_testMsgType(sap.ca.ui.message.Type.WARNING, "Warning", sap.ui.core.ValueState.Warning);
	_testMsgType(sap.ca.ui.message.Type.SUCCESS, "Success", sap.ui.core.ValueState.Success);
	_testMsgType(sap.ca.ui.message.Type.INFO, "Information", sap.ui.core.ValueState.None);
});

module("Show Message Toast");

asyncTest("Show Message Toast", function(){
	oButton.firePress(); 
	setTimeout(function(){
		//the message box is keeping showing 3 sec.
		var $MessageToast0 = jQuery(".sapMMessageToast").eq(0);
		ok($MessageToast0, "Got sapMMessageToast");
		if ($MessageToast0) {
			strictEqual($MessageToast0.text(), "It's a great success!", "It's a great success!");
		}
		start();
	}, 1000);
});

var msgBox, msgText, msgLink;
var _init = function() {
	var msgBox = null;
	var msgText = null;
	var msgLink = null;
};

var _closeMsgBox_andCheck = function(bCallbackIsCalled) {
	qunithelper.closeDialog_andCheck(MESSAGEBOX_ID, MESSAGEBOX_BTN_OK);
	if (bCallbackIsCalled) {
		test("Test Callback", function () {
			equal(isMsgBoxClosed, true, "Callback function is called");
		});
	}
};

var _check_MsgBox_ShowElement = function(sElementID, bInDOM) {
	var oElement = sap.ui.getCore().byId(sElementID);
	ok(oElement, "Message Link exists in sap.ui.core");
	
	if (bInDOM) {
		ok(jQuery.sap.domById(sElementID), "Element '" + sElementID + "' exists in DOM");
	} else {
		ok(!jQuery.sap.domById(sElementID), "Element '" + sElementID + "' should NOT exist in DOM");
	}
};

var _check_MsgBox_ValueState = function(oExpValueState) {
	strictEqual(msgBox.getState(), oExpValueState, "MessageBox has the state " + oExpValueState);
};

var _check_MsgBox_Icon = function(sExpIcon) {
	strictEqual(msgBox.getIcon(), sExpIcon, (sExpIcon)? "Dialog has icon: " + sExpIcon : "Dialog has no extra icon");
};

var _check_MsgBox_isShown = function(oExpectedValue) {
	msgBox = qunithelper.checkDialog_isVisible(MESSAGEBOX_ID, oExpectedValue.title, "25em");
	
	qunithelper.check_Text_isVisible(MESSAGEBOX_MESSAGE, oExpectedValue.message);
	if (oExpectedValue.showDetailsText) {
		qunithelper.check_Text_isVisible(MESSAGEBOX_TXA_DETAILS, oExpectedValue.details);
	}

	_check_MsgBox_ShowElement(MESSAGEBOX_LNK_SHOWDETAILS, oExpectedValue.showDetailsLink);
	_check_MsgBox_ShowElement(MESSAGEBOX_TXA_DETAILS, oExpectedValue.showDetailsText);

	_check_MsgBox_ValueState(oExpectedValue.valueState);
	_check_MsgBox_Icon(oExpectedValue.icon);
};

module("Show Message Box - Type ERROR");

_init();
asyncTest("Show Message Box - Type ERROR", function(){
	oButton1.firePress();
	setTimeout(function(){
		_check_MsgBox_isShown({
			title: "Error", 
			valueState: sap.ui.core.ValueState.Error, 
			icon: "",
			showDetailsLink: true,
			showDetailsText: false
		});	
		start();
	}, 2000);
});

asyncTest("Click on 'Show Details' Link", function(){
	sap.ui.getCore().byId(MESSAGEBOX_LNK_SHOWDETAILS).firePress();
	setTimeout(function(){
		_check_MsgBox_isShown({
			title: "Error", 
			valueState: sap.ui.core.ValueState.Error, 
			icon: "",
			showDetailsLink: false,
			showDetailsText: true
		});		
		start();
	}, 2000);
});
		
_closeMsgBox_andCheck(true); //callback function is provided
		
module("Show Message Box - Type INFO");
		
_init();
asyncTest("Show Message Box - Type INFO", function(){
	oButton2.firePress();
	setTimeout(function(){
		_check_MsgBox_isShown({
			title: "Information", 
			valueState: sap.ui.core.ValueState.None, 
			icon: "sap-icon://hint",
			showDetailsLink: true,
			showDetailsText: false
		});
		start();
	}, 2000);
});

asyncTest("Click on 'Show Details' Link", function(){
	sap.ui.getCore().byId(MESSAGEBOX_LNK_SHOWDETAILS).firePress();
	setTimeout(function(){
		_check_MsgBox_isShown({
			title: "Information", 
			valueState: sap.ui.core.ValueState.None, 
			icon: "sap-icon://hint",
			showDetailsLink: false,
			showDetailsText: true,
			details: "message1:1\nmessage2:2\nmessage3:3"
		});		
		start();
	}, 2000);
});

_closeMsgBox_andCheck();
		
module("Show Message Box - Type WARNING");
		
_init();
asyncTest("Show Message Box - Type WARNING", function(){
	oButton3.firePress();
	setTimeout(function(){
		_check_MsgBox_isShown({
			title: "Warning", 
			valueState: sap.ui.core.ValueState.Warning, 
			icon: "",
			showDetailsLink: false,
			showDetailsText: false
		});
		start();
	}, 2000);
});
		
_closeMsgBox_andCheck();
		
module("Show Message Box - Type SUCCESS");

_init();
asyncTest("Show Message Box - Type SUCCESS", function(){
	oButton4.firePress();
	setTimeout(function(){
		_check_MsgBox_isShown({
			title: "Success", 
			valueState: sap.ui.core.ValueState.Success, 
			icon: "",
			message: "You may need to use Message Toast",
			showDetailsLink: false,
			showDetailsText: false
		});
		start();
	}, 2000);
});
		
_closeMsgBox_andCheck();