jQuery.sap.require("sap.uiext.inbox.tcm.TCMModel");

var oTCMModel = new sap.uiext.inbox.tcm.TCMModel();

test("Load", 1, function() {
	ok(oTCMModel, "TCM Model is created");
});

test("GetFunctionImportHandler", 1, function() {
	ok(oTCMModel.getFunctionImportHandler(), "Function Import Handler is created");
});