//Testing Part: Forward dialog
////////////////

////////////
//API call and put a Forward Button on the Test Page
///////////

//provide the fnStartSearch function for the forward dialog API
var fnStartSearch = function(sQeury){
	//do the backend request based on the sQuery text       
	//...

	//get the results from backend
	var arrAgents =  [{
		UserId: "alan",
		FullName: "Alberto Andersen 1",
		Department: "Manager, Finance Department",
		ImageURL:""
	},{
        UserId: "jagi",
        FullName: "Japie Gierhuizen 2",
        Department: "Manager, Finance Department",
        ImageURL:""
    },{
        UserId: "jagil",
        FullName: "Xavier Zap 3",
        Department: "Senior Manager, Finance Department",
        ImageURL:""
    },{
        UserId: "jagip",
        FullName: "Alberto Andersen 4"
    },{
        UserId: "jagio",
        FullName: "Japie Gierhuizen 5",
        Department: "Manager, Finance Department",
        ImageURL: ""
    },{
        UserId: "jagii",
        FullName: "Xavier Zap 6",
        Department: "Senior Manager, Finance Department"
    },{
        UserId: "jagiu",
        FullName: "Alberto Andersen 7",
        Department: "Manager, Finance Department"
    }];

	//set the results back to the forward dialog
	sap.ca.ui.dialog.forwarding.setFoundAgents(arrAgents);
};

//provide close function to get informed after the forward dialog has been closed 
var bForwardConfirmed = null;
var oSelectedAgent = null;
var fnForwardClose = function (oResult) {
	qunithelper.bg_IsDialogClosed = true;
	bForwardConfirmed = oResult.bConfirmed;
	if (oResult.bConfirmed) {
		oSelectedAgent = oResult.oAgentToBeForwarded;
		jQuery.sap.log.info(oResult.oAgentToBeForwarded.UserId + " " + oResult.sNote);
		//trigger confirmed forwarding process based on the result parameters          
		//...
		//...
	}
};

var oBTNForward = new sap.m.Button({
	text : "Open Forward Dialog",
	press : function() {
		sap.ca.ui.dialog.forwarding.start(fnStartSearch, fnForwardClose);
	}
});	
///////////
//Helpers
/////////////
var setSearchTerm = function(sQuery){
	var fld_Search = sap.ui.getCore().byId(DIALOG_SEARCH_FIELD);
	fld_Search.setValue(sQuery);
	fld_Search.rerender(); //refresh the search field
	fld_Search.fireSearch({query:sQuery});
};

var getSearchTerm = function(){
	var fld_Search = sap.ui.getCore().byId(DIALOG_SEARCH_FIELD);
	return fld_Search.getValue();
};

var testSetSearchTerm = function(sQuery, iForwardsLength) {
	setSearchTerm(sQuery);
	setTimeout(function(){
		equal(getSearchTerm(), sQuery, "Search Term is set");
		testForwardList(sQuery?true:false, iForwardsLength);
		start();
	}, 1000);
};

var testForwardList = function(bShowNoData, iForwardsLength) {
	var lstForwarders = sap.ui.getCore().byId(DIALOG_FORWARD_LIST);
	equal(lstForwarders.getShowNoData(), bShowNoData, "ShowNoData is set");
	equal(lstForwarders.getItems().length, iForwardsLength, "Forward Agents is " + (iForwardsLength>0)?"available":"NOT available");
	if (bShowNoData === true && iForwardsLength === 0) {
		equal(lstForwarders.getNoDataText(), sap.ca.ui.utils.resourcebundle.getText("forward.noRecipients"), "NoDataText is set correctly");
	}
};

var setSelect = function(iSelected) {
	var lstForwarders = sap.ui.getCore().byId(DIALOG_FORWARD_LIST);
	var oForwarders = lstForwarders.getItems();
	if (oForwarders && iSelected <= oForwarders.length && iSelected>0 ) {
		lstForwarders.setSelectedItem(oForwarders[iSelected-1], true);
		setTimeout(function(){
			equal(lstForwarders.getSelectedItem(), oForwarders[iSelected-1], "Forwarder is selected");
			lstForwarders.fireSelectionChange({listItem:lstForwarders.getSelectedItem()});
			start();
		}, 1000);
	}
};

///////////
//Tests
/////////////

module("Initial Check - Forward Dialog");
qunithelper.checkDialog_beforeInitialized(DIALOG_FORWARD_ID, DIALOG_FORWARD_NAME);

module("Open and Close Forward Dialog: search function is NOT provided");
asyncTest("Open Dialog", function(){
	sap.ca.ui.dialog.forwarding.start();
	setTimeout(function(){
		qunithelper.bg_IsDialogClosed = false;
		qunithelper.checkDialog_isVisible(DIALOG_FORWARD_ID, "Forward", "480px");
		testForwardList(false, false);
		start();
	}, 1000);
});

asyncTest("Set Search Term", function(){
	testSetSearchTerm("abc", 0);
});

asyncTest("Remove Search Term", function(){
	testSetSearchTerm("", 0);
});

asyncTest("Set Search Term", function(){
	testSetSearchTerm("123", 0);
});


qunithelper.closeDialog_andCheck(DIALOG_FORWARD_ID, DIALOG_FORWARD_BUTTONCANCEL_ID);
test("Test Callback", function () {
	equal(qunithelper.bg_IsDialogClosed, false, "Callback function is not provided, CLOSE signal is not changed");
});

module("Open->Search->Show List->Select->Show Confirmation Dialog->Confirm");

asyncTest("Open Dialog", function(){
	oBTNForward.firePress();
	setTimeout(function(){
		qunithelper.bg_IsDialogClosed = false;
		qunithelper.checkDialog_isVisible(DIALOG_FORWARD_ID, "Forward", "480px");
		equal(getSearchTerm(), "", "Search field should be empty initially");
		start();
	}, 1000);
});

asyncTest("Set Search Term", function(){
	testSetSearchTerm("ie", 7);
});

asyncTest("Select Forwarder", function(){
	setSelect(7);
});

asyncTest("Forward Confirmation Dialog", function(){
	setTimeout(function(){
		qunithelper.checkDialog_isVisible(DIALOG_CONFIRM_ID, "Forward", "25em");
		start();
	}, 1000);
});

qunithelper.closeDialog_andCheck(DIALOG_CONFIRM_ID, DIALOG_CONFIRM_BUTTONCONFIRM_ID);
test("Test Callback", function () {
	equal(qunithelper.bg_IsDialogClosed, true, "Dialog is closed");
	equal(bForwardConfirmed, true, "Forward is confirmed");
	equal(oSelectedAgent.FullName, "Alberto Andersen 7", "Forwarder:Alberto Andersen 7 is selected ");
});

module("Open->Search->Show List->Select->Show Confirmation Dialog->Cancel");
asyncTest("Open Dialog", function(){
	oBTNForward.firePress();
	setTimeout(function(){
		qunithelper.checkDialog_isVisible(DIALOG_FORWARD_ID, "Forward", "480px");
		equal(getSearchTerm(), "", "Search field should be empty initially");
		start();
	}, 1000);
});

qunithelper.bg_IsDialogClosed = false;

asyncTest("Set Search Term", function(){
	testSetSearchTerm("Manager", 7);
});

asyncTest("Select Forwarder", function(){
	setSelect(3);
});

asyncTest("Forward Confirmation Dialog", function(){
	setTimeout(function(){
		qunithelper.checkDialog_isVisible(DIALOG_CONFIRM_ID, "Forward", "25em");
		start();
	}, 1000);
});

qunithelper.closeDialog_andCheck(DIALOG_CONFIRM_ID, DIALOG_CONFIRM_BUTTONCANCEL_ID);
test("Test Callback", function () {
	equal(qunithelper.bg_IsDialogClosed, true, "Dialog is closed");
	equal(bForwardConfirmed, false, "Forward is cancelled");
});
