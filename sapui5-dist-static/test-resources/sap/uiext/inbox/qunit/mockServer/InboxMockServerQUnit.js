jQuery.sap.require("sap.uiext.inbox.qunit.mockServer.InboxMockServer");

var oMockServer;

QUnit.begin(function() {
	oMockServer = sap.uiext.inbox.qunit.mockServer.InboxMockServer._getInstance();
	oMockServer.start();
	
	var inx = new sap.uiext.inbox.Inbox("inbox").placeAt("uiArea1");
	var oModel = new sap.ui.model.odata.ODataModel("http://localhost/myservice",true);
	oModel.setCountSupported(false);

	//Enabling all features
	//inx.isSubstitutionEnabled = false;
    inx.isCustomAttributesEnabled = true;
    inx.isCustomActionsEnabled = true;
    inx.showTaskDescription = true;
    inx.showTaskCategory = true;//TODO: Make it false and later handle in Inbox
    //inx.isBatchOperationSupported = true;
    inx.isForwardActionEnabled = true;
    inx.isCommentsEnabled = true;
    //inx.openTaskExecutionUIOpenInNewTab = false;
		
	inx.setModel(oModel);
	inx.setSubstitutionEnabled(true);
	inx.bindTasks("/TaskCollection"); 
});

QUnit.done(function( details ) {
	oMockServer.destroy();  
	//console.log( "Total: ", details.total, " Failed: ", details.failed, " Passed: ", details.passed, " Runtime: ", details.runtime );
});
			
test("InboxMockServerStarted", 2, function() {
	ok(oMockServer, "Mock server is created");
	oMockServer.start();
	ok(oMockServer.isStarted(), "Mock server is started");
});