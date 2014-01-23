jQuery.sap.declare("sap.uiext.inbox.qunit.tcm.InboxTCMFunctionImportQUnit");
jQuery.sap.require("sap.uiext.inbox.tcm.fI.TCMFunctionImport");

var oTCMFunctionImport = new sap.uiext.inbox.tcm.fI.TCMFunctionImport();
var sServiceURL = "http://localhost/myservice";
var mHeaders = {
        "Accept" : "application/json",
        "x-csrf-token" : "some-GUID"
	}

var aUrlParams;

oTCMFunctionImport.setServiceURL(sServiceURL);
oTCMFunctionImport.setHeaders(mHeaders);

test("Load", 1, function() {
	ok(oTCMFunctionImport, "TCM Function Import is created");
});

test("GetServiceURL", 1, function() {
	equals(oTCMFunctionImport.getServiceURL(), sServiceURL, "Service URL set is ok");
});

test("GetHeaders", 1, function() {
	equals(oTCMFunctionImport.getHeaders(), mHeaders, "Headers set is ok");
});

test("_createURLParamsArray", function() {
	aUrlParams = oTCMFunctionImport._createURLParamsArray(
								{SearchPattern: "adm", MaxResults: 10, SAP__Origin: "LOCALHOST_C73_00"},
								sap.uiext.inbox.tcm.fI.TCMFunctionImportMetaData.SEARCHUSERS
								);
	ok(aUrlParams, "URL Params are created");
	equal(aUrlParams.length, 3, "Number of URL Parms created is ok");
	//Can be extended to include more Edm types
	equal(aUrlParams[0], "SAP__Origin='LOCALHOST_C73_00'", "URL Param is right for SAP__Origin of type Edm.String");
	equal(aUrlParams[1], "SearchPattern='adm'", "URL Param is right for SearchPattern of type Edm.String");
	equal(aUrlParams[2], "MaxResults=10", "URL Param is right for MaxResults of type Edm.Integer");
});

test("_createRequest", function() {
	var oRequest = oTCMFunctionImport._createRequest("SearchUsers", aUrlParams, false, "GET");
	ok(oRequest, "Request is created");
	equal(oRequest.requestUri, "http://localhost/myservice/SearchUsers?SAP__Origin='LOCALHOST_C73_00'&SearchPattern='adm'&MaxResults=10");
	equal(oRequest.method, "GET", "Request method is ok");
	equal(oRequest.headers, mHeaders, "Request headers is ok");
	equal(oRequest.async, false, "Request async is ok");
});