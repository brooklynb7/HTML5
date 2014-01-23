/////////////////
//UI test page: SelectItem Dialog
////////////////
var DIALOG_SELECTITEM_ID = "CA_VIEW_SLTITEM--DLG_SLTITEM";
var DIALOG_SELECTITEM_LIST_ID = "CA_VIEW_SLTITEM--LST_ITEMS";
var DIALOG_SELECTITEM_BUTTONCANCEL_ID = "CA_VIEW_SLTITEM--BTN_CANCEL";
var DIALOG_SELECTITEM_NAME = "SelectItem Dialog";

var fnClose = function(oResult) {
	//set Dialog is closed
	qunithelper.bg_IsDialogClosed = true;
	if (oResult) {
		jQuery.sap.log.info("SelectItem Dialog - selectedIndex: " + oResult.selectedIndex);
		if (oResult.selectedItem) {
			jQuery.sap.log.info("SelectItem Dialog - selectedItem: " + oResult.selectedItem.itemContent);
		}
	}
};

var oBTNSelectItem = new sap.m.Button({
	text : "Select Item (with Default Selection)",
	press : function() {
		sap.ca.ui.dialog.selectItem.open({
			title: "Filter",
			items: [{icon: "", itemContent:"Gingerbread"},
			{icon: "", itemContent:"Honeycomb"}, 
			{icon: "", itemContent:"Ice Cream Sandwich"},
			{icon: "sap-icon://person-placeholder", itemContent:"Jelly Bean"},
			{icon: "", itemContent:"KitKat"}],
			defaultIndex : 1 //using javascript array index from 0
		}, fnClose);
	}
});

var oBTNSelectItem2 = new sap.m.Button({
	text : "Select Item",
	press : function() {
		sap.ca.ui.dialog.selectItem.open({
			title: "Filter",
			items: [{icon: "", itemContent:"Gingerbread"},
			{icon: "", itemContent:"Honeycomb"}, 
			{icon: "", itemContent:"Ice Cream Sandwich"},
			{icon: "sap-icon://person-placeholder", itemContent:"Jelly Bean"},
			{icon: "", itemContent:"KitKat"}],
			defaultIndex : -1 //no default selection
		}, fnClose);
	}
});

var setSelectItem = function(iSelected) {
	var lst = sap.ui.getCore().byId(DIALOG_SELECTITEM_LIST_ID);
	var oItem = lst.getItems();
	if (oItem && iSelected < oItem.length && iSelected>=0 ) {
		lst.setSelectedItem(oItem[iSelected], true);
		setTimeout(function(){
			equal(lst.getSelectedItem(), oItem[iSelected], "Item is selected");
			lst.fireSelectionChange({listItem:lst.getSelectedItem()});
			start();
		}, 1000);
	}
};
/////////////////
//Testing Part: Confirm Dialog
////////////////

module("Initial Check - SelectItem Dialog");
qunithelper.checkDialog_beforeInitialized(DIALOG_SELECTITEM_ID, DIALOG_SELECTITEM_NAME);

module("Open and Close SeletItem Dialog via calling sap.ca.ui.dialog.seletItem.open");

asyncTest("Open Dialog", function(){
	oBTNSelectItem.firePress();
	setTimeout(function(){
		qunithelper.checkDialog_isVisible(DIALOG_SELECTITEM_ID, "Filter", "350px");
		start();
	}, 1000);
});


qunithelper.closeDialog_andCheck(DIALOG_SELECTITEM_ID, DIALOG_SELECTITEM_BUTTONCANCEL_ID);
test("Test Callback", function () {
	equal(qunithelper.bg_IsDialogClosed, true, "Callback function is called");
});

module("Open and Close SeletItem Dialog without default selection");

asyncTest("Open Dialog", function(){
	oBTNSelectItem2.firePress();
	setTimeout(function(){
		qunithelper.checkDialog_isVisible(DIALOG_SELECTITEM_ID, "Filter", "350px");
		start();
	}, 1000);
});

asyncTest("Select Item", function(){
	setSelectItem(2);
});

test("Test Callback", function () {
	equal(qunithelper.bg_IsDialogClosed, true, "Callback function is called");
});