jQuery.sap.registerModulePath("sap.uiext.inbox.qunit.mockServer", "mockServer/");

jQuery.sap.require("sap.uiext.inbox.qunit.tcm.InboxTCMFunctionImportQUnit");
jQuery.sap.require("sap.uiext.inbox.qunit.mockServer.InboxMockServerQUnit");

test("callSearchUsers", 1, function() {
	
	var params = {SearchPattern: "adm", MaxResults: 10, SAP__Origin: "LOCALHOST_C73_00"};
	var sResponseStatus = "";
	var fnSuccess = function(oData, response){
						sResponseStatus = "OK";
					};
	var fnError = function(oData, response){
						sResponseStatus = "Not OK";
					};
		
	var oRequest = oTCMFunctionImport.callSearchUsers (params, fnSuccess, fnError);
	equal(sResponseStatus, "OK", "Response is ok");
});