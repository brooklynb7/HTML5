/*!
 * @copyright@
 */
jQuery.sap.declare("sap.uiext.inbox.qunit.mockServer.InboxMockServer");
jQuery.sap.require("sap.ui.app.MockServer");
jQuery.sap.require("sap.uiext.inbox.qunit.mockServer.InboxMockServerData");

sap.uiext.inbox.qunit.mockServer.InboxMockServer = function(){
};

(function() {
	sap.uiext.inbox.qunit.mockServer.InboxMockServer._getInstance = function() {
		var serverData = sap.uiext.inbox.qunit.mockServer.InboxMockServerData;
		if (!this._oServer) {
			this._oServer = new sap.ui.app.MockServer({
				rootUri : "http://localhost/myservice", 
				requests : [
					{
						method : "GET",
						path : "/(.*)metadata",
						response : function(oXhr) {
							oXhr.respond(200, { "Content-Type": "application/xml" }, serverData.metadata());
						}
					},
					{
						method : "GET",
						//path : "TaskCollection\?(.*)skip=(.*)&(.*)top=(.*)&(.*)orderby=CreatedOn%20desc&(.*)filter=Status%20ne%20%27COMPLETED%27&(.*)expand=TaskDefinitionData&(.*)inlinecount=allpages",
						path : "/TaskCollection\?(.*)skip=(.*)&(.*)top=(.*)&(.*)orderby=CreatedOn%20desc&(.*)filter=Status%20ne%20%27COMPLETED%27&(.*)inlinecount=allpages",
						response : function(oXhr) {
							oXhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify(serverData.initialLoadData));
						}
					} ,
					{
						method : "GET",
						path : "/",
						response : function(oXhr, id) {
							oXhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify(serverData.rootURLData));
						}
					},
					{
						method : "GET",
						path : "/TaskCollection(.*)InstanceID='bpm%3A%2F%2Fbpm.sap.com%2Ftask-instance%2F9851fd12da6311e280840000006379d2',SAP__Origin='LOCALHOST_C73_00'(.*)/Comments",
						response : function(oXhr, id) {
							oXhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify(serverData.retrieveCommentsData));
						}
					},
					{
						//TODO: Add Comment call - Instance ID needs to be encoded.
						method : "POST",
						path : "/AddComment?(.*)InstanceID='bpm://bpm.sap.com/task-instance/9851fd12da6311e280840000006379d2'&SAP__Origin='LOCALHOST_C73_00'&Text='Okay%20done'&(.*)format=json",
						response : function(oXhr, id) {
							oXhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify(serverData.addCommentData));
						}
					},
					{
						//TODO: Add long Comment
						method : "POST",
						path : "/AddComment?(.*)InstanceID='bpm://bpm.sap.com/task-instance/9851fd12da6311e280840000006379d2'&SAP__Origin='LOCALHOST_C73_00'&Text='Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negredo%20Negr'&(.*)format=json",
						response : function(oXhr, id) {
							oXhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify(serverData.addLongCommentData));
						}
					},
					{
						method : "GET",
						path : "/SearchUsers?(.*)SAP__Origin='LOCALHOST_C73_00'&SearchPattern='adm'&MaxResults=(.*)",
						response : function(oXhr, id) {
							oXhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify(serverData.searchUsersData));
						}
					},
					{
						method : "GET",
						path : "/SearchUsers?(.*)SAP__Origin='LOCALHOST_C73_00'&SearchPattern='tes'&MaxResults=(.*)",
						response : function(oXhr, id) {
							oXhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify(serverData.searchUsersDataOne));
						}
					},
					{
						method : "GET",
						path : "/SearchUsers?(.*)SAP__Origin='LOCALHOST_C73_00'&SearchPattern='xyz'&MaxResults=(.*)",
						response : function(oXhr, id) {
							oXhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify(serverData.searchUsersDataNone));
						}
					},
					{
						method : "GET",
						path : "/SearchUsers?(.*)SAP__Origin='LOCALHOST_C73_00'&SearchPattern='fail'&MaxResults=(.*)",
						response : function(oXhr, id) {
							oXhr.respond(404);
						}
					},
					{
						method : "GET",
						path : "/SubstitutionRuleCollection?(.*)skip=(.*)&(.*)top=(.*)&(.*)filter=IsEnabled%20eq%20true&(.*)inlinecount=allpages",						
						response : function(oXhr, id) {
							oXhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify(serverData.myActiveSubtitutionRulesData()));
						}
					},
					{
						method : "GET",
						path : "/SubstitutionRuleCollection?(.*)skip=(.*)&(.*)top=(.*)&(.*)filter=IsEnabled%20eq%20false&(.*)inlinecount=allpages",						
						response : function(oXhr, id) {
							oXhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify(serverData.myInActiveSubtitutionRulesData()));
						}
					},
					{
						method : "GET",
						path : "/SubstitutesRuleCollection?(.*)skip=(.*)&(.*)top=(.*)&(.*)filter=IsEnabled%20eq%20true&(.*)inlinecount=allpages",						
						response : function(oXhr, id) {
							oXhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify(serverData.activeSubtitutingRulesData()));
						}
					},
					{
						method : "GET",
						path : "/SubstitutesRuleCollection?(.*)skip=(.*)&(.*)top=(.*)&(.*)filter=IsEnabled%20eq%20false&(.*)inlinecount=allpages",						
						response : function(oXhr, id) {
							oXhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify(serverData.inActiveSubtitutingRulesData()));
						}
					},
					{
						method : "POST",
						path : "/EnableSubstitutionRule?(.*)SubstitutionRuleID='bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution(.*)&Enabled=true&SAP__Origin='(.*)'&(.*)format=json",
						response : function(oXhr, id) {
							oXhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify(serverData.enableSubstitutionRule));
						}
					},
					{
						method : "POST",
						path : "/EnableSubstitutionRule?(.*)SubstitutionRuleID='bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution(.*)'&Enabled=false&SAP__Origin='(.*)'&(.*)format=json",
						response : function(oXhr, id) {
							oXhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify(serverData.disableSubstitutionRule));
						}
					},
					{
						method : "POST",
						path : "/DeleteSubstitutionRule?(.*)SubstitutionRuleID='bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution(.*)'&SAP__Origin='(.*)'&(.*)format=json",
						response : function(oXhr, id) {
							oXhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify(serverData.deleteSubstitutionRule));
						}
					}
				]
			});
		}
		return this._oServer;
	};
	
})();
