/*!
 * @copyright@
 */
jQuery.sap.declare("sap.uiext.inbox.qunit.mockServer.InboxMockServerData");

sap.uiext.inbox.qunit.mockServer.InboxMockServerData = function(){
};

sap.uiext.inbox.qunit.mockServer.InboxMockServerData.rootURLData = {
		"d" : {
			"EntitySets" : [
			"TaskCollection", "SubstitutionRuleCollection","SubstitutesRuleCollection", "CustomAttributeDefinitionCollection", "FilterOptionCollection", "TaskDescriptionCollection", "UIExecutionCollection", "CustomAttributeCollection", "TaskDefinitionCollection", "UserInfoCollection", "SubstitutedUsersCollection", "CommentsCollection"
			]
			}
			}

sap.uiext.inbox.qunit.mockServer.InboxMockServerData.metadata = function(){
		var metadata;
		var fileURL = "mockServer/metadata.xml";
		jQuery.ajax(fileURL, {
						dataType: 'text',
						async: false,	
						success: function (data) { metadata = data;	},
						error: function (data){alert("Error Loading Metadata")}	
						});
		return metadata;
}
					
sap.uiext.inbox.qunit.mockServer.InboxMockServerData.initialLoadData = 	{
		"d" : {
		"results" : [
		{
		"__metadata" : {
		"uri" : "http://10.66.177.136:50000/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/TaskCollection(InstanceID='bpm%3A%2F%2Fbpm.sap.com%2Ftask-instance%2F9851fd12da6311e280840000006379d2',SAP__Origin='LOCALHOST_C73_00')", "type" : "TASKPROCESSING.Task"
		}, "SAP__Origin" : "LOCALHOST_C73_00", "InstanceID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-instance%2F9851fd12da6311e280840000006379d2", "TaskModelID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-model%2Fe05ce2fc4376e09cd9ae11e2c3d90050569e29e4", "TaskDefinitionID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-definition%2F929158ed24d31c4f04ead08847fa55a3", "TaskDefinitionName" : "Leave Request Approval", "TaskTitle" : "Leave Request Approval for Check and Anyone", "Priority" : "MEDIUM", "Status" : "READY", "CreatedOn" : "\/Date(1371813206707)\/", "StartDeadline" : "", "CompletionDeadLine" : "", "ExpiryDate" : "", "LastChangedTime" : "\/Date(1371910544940)\/", "LastChangedBy" : "", "IsEscalated" : false, "SupportsClaim" : true, "SupportsRelease" : true, "SupportsForward" : true, "HasComments" : false, "HasAttachments" : false, "HasPotentialOwners" : false, "IsSubstituted" : false, "SubstitutedUser" : "", "SupportsComments" : true, "TaskDefinitionData" : {


		"__metadata" : {
		"uri" : "http://10.66.177.136:50000/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/TaskCollection(SAP__Origin='LOCALHOST_C73_00',TaskDefinitionID='bpm%3A%2F%2Fbpm.sap.com%2Ftask-definition%2F929158ed24d31c4f04ead08847fa55a3')", "type" : "TASKPROCESSING.Task"
		}, "SAP__Origin" : "LOCALHOST_C73_00", "TaskModelID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-model%2Fe05ce2fc4376e09cd9ae11e2c3d90050569e29e4", "TaskDefinitionID" : "bpm://bpm.sap.com/task-definition/929158ed24d31c4f04ead08847fa55a3", "TaskName" : "Leave Request Approval", "Category" : "TASK"
		}
		},  {
		"__metadata" : {
		"uri" : "http://10.66.177.136:50000/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/TaskCollection(InstanceID='bpm%3A%2F%2Fbpm.sap.com%2Ftask-instance%2F8c24fde4da4311e2ad120000006379d2',SAP__Origin='LOCALHOST_C73_00')", "type" : "TASKPROCESSING.Task"
		}, "SAP__Origin" : "LOCALHOST_C73_00", "InstanceID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-instance%2F8c24fde4da4311e2ad120000006379d2", "TaskModelID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-model%2Fe0a19489ee1247c2b14111e1c23a005056aa00d1", "TaskDefinitionID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-definition%2F2e266c6fe961e9bb83d2cae50a685faf", "TaskDefinitionName" : "Purchase Order Form", "TaskTitle" : "Purchase Order Form", "Priority" : "HIGH", "Status" : "READY", "CreatedOn" : "\/Date(1371799442377)\/", "StartDeadline" : "", "CompletionDeadLine" : "\/Date(1369207442320)\/", "ExpiryDate" : "", "LastChangedTime" : "\/Date(1371910544940)\/", "LastChangedBy" : "", "IsEscalated" : true, "SupportsClaim" : true, "SupportsRelease" : true, "SupportsForward" : true, "HasComments" : false, "HasAttachments" : false, "HasPotentialOwners" : false, "IsSubstituted" : false, "SubstitutedUser" : "", "TaskDefinitionData" : {

		"__metadata" : {
		"uri" : "http://10.66.177.136:50000/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/TaskCollection(SAP__Origin='LOCALHOST_C73_00',TaskDefinitionID='bpm%3A%2F%2Fbpm.sap.com%2Ftask-definition%2F2e266c6fe961e9bb83d2cae50a685faf')", "type" : "TASKPROCESSING.Task"
		}, "SAP__Origin" : "LOCALHOST_C73_00", "TaskModelID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-model%2Fe0a19489ee1247c2b14111e1c23a005056aa00d1", "TaskDefinitionID" : "bpm://bpm.sap.com/task-definition/2e266c6fe961e9bb83d2cae50a685faf", "TaskName" : "Purchase Order Form", "Category" : "Todo"
		}
		}, {
		"__metadata" : {
		"uri" : "http://10.66.177.136:50000/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/TaskCollection(InstanceID='bpm%3A%2F%2Fbpm.sap.com%2Ftask-instance%2F8bb84073da4311e2cddb0000006379d2',SAP__Origin='LOCALHOST_C73_00')", "type" : "TASKPROCESSING.Task"
		}, "SAP__Origin" : "LOCALHOST_C73_00", "InstanceID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-instance%2F8bb84073da4311e2cddb0000006379d2", "TaskModelID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-model%2Fe0faf6e82eece80fb14811e1a5a5005056aa00d1", "TaskDefinitionID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-definition%2Fd4938239d7d58e01267c256329fa6c7e", "TaskDefinitionName" : "Sales Order Approval", "TaskTitle" : "Sales Order Approval", "Priority" : "VERY_HIGH", "Status" : "READY", "CreatedOn" : "\/Date(1371799441677)\/", "StartDeadline" : "", "CompletionDeadLine" : "\/Date(1371713041600)\/", "ExpiryDate" : "", "LastChangedTime" : "\/Date(1371910544940)\/", "LastChangedBy" : "", "IsEscalated" : true, "SupportsClaim" : true, "SupportsRelease" : true, "SupportsForward" : true, "HasComments" : false, "HasAttachments" : false, "HasPotentialOwners" : false, "IsSubstituted" : false, "SubstitutedUser" : "", "TaskDefinitionData" : {

		"__metadata" : {
		"uri" : "http://10.66.177.136:50000/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/TaskCollection(SAP__Origin='LOCALHOST_C73_00',TaskDefinitionID='bpm%3A%2F%2Fbpm.sap.com%2Ftask-definition%2Fd4938239d7d58e01267c256329fa6c7e')", "type" : "TASKPROCESSING.Task"
		}, "SAP__Origin" : "LOCALHOST_C73_00", "TaskModelID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-model%2Fe0faf6e82eece80fb14811e1a5a5005056aa00d1", "TaskDefinitionID" : "bpm://bpm.sap.com/task-definition/d4938239d7d58e01267c256329fa6c7e", "TaskName" : "Sales Order Approval", "Category" : "Alert"
		}
		},{
		"__metadata" : {
		"uri" : "http://10.66.177.136:50000/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/TaskCollection(InstanceID='bpm%3A%2F%2Fbpm.sap.com%2Ftask-instance%2F8a90f79cda4311e28e010000006379d2',SAP__Origin='LOCALHOST_C73_00')", "type" : "TASKPROCESSING.Task"
		}, "SAP__Origin" : "LOCALHOST_C73_00", "InstanceID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-instance%2F8a90f79cda4311e28e010000006379d2", "TaskModelID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-model%2Fe0f44551a7cce7a7b14811e1b644005056aa00d1", "TaskDefinitionID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-definition%2F64d598f190c11e426f6fa0406459b52c", "TaskDefinitionName" : "Some Dummy Task", "TaskTitle" : "Some Dummy Task", "Priority" : "LOW", "Status" : "READY", "CreatedOn" : "\/Date(1371799439927)\/", "StartDeadline" : "", "CompletionDeadLine" : "\/Date(1372231439607)\/", "ExpiryDate" : "", "LastChangedTime" : "\/Date(1371910544940)\/", "LastChangedBy" : "", "IsEscalated" : false, "SupportsClaim" : true, "SupportsRelease" : true, "SupportsForward" : true, "HasComments" : false, "HasAttachments" : false, "HasPotentialOwners" : false, "IsSubstituted" : false, "SubstitutedUser" : "", "TaskDefinitionData" : {
			
		"__metadata" : {
		"uri" : "http://10.66.177.136:50000/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/TaskCollection(SAP__Origin='LOCALHOST_C73_00',TaskDefinitionID='bpm%3A%2F%2Fbpm.sap.com%2Ftask-definition%2F64d598f190c11e426f6fa0406459b52c')", "type" : "TASKPROCESSING.Task"
		}, "SAP__Origin" : "LOCALHOST_C73_00", "TaskModelID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-model%2Fe0f44551a7cce7a7b14811e1b644005056aa00d1", "TaskDefinitionID" : "bpm://bpm.sap.com/task-definition/64d598f190c11e426f6fa0406459b52c", "TaskName" : "Some Dummy Task", "Category" : "Notification"
		}
		}, {
		"__metadata" : {
		"uri" : "http://10.66.177.136:50000/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/TaskCollection(InstanceID='bpm%3A%2F%2Fbpm.sap.com%2Ftask-instance%2F8b4e35d5da4311e2aca00000006379d2',SAP__Origin='LOCALHOST_C73_00')", "type" : "TASKPROCESSING.Task"
		}, "SAP__Origin" : "LOCALHOST_C73_00", "InstanceID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-instance%2F8b4e35d5da4311e2aca00000006379d2", "TaskModelID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-model%2Fe098f47c713a0433b14711e1ac92005056aa00d1", "TaskDefinitionID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-definition%2Fa5257bd14f1fb45328782518b9687609", "TaskDefinitionName" : "Raise Purchase Request", "TaskTitle" : "Raise Purchase Request", "Priority" : "MEDIUM", "Status" : "READY", "CreatedOn" : "\/Date(1371799441030)\/", "StartDeadline" : "", "CompletionDeadLine" : "\/Date(1371799440900)\/", "ExpiryDate" : "", "LastChangedTime" : "\/Date(1371910544940)\/", "LastChangedBy" : "", "IsEscalated" : true, "SupportsClaim" : true, "SupportsRelease" : true, "SupportsForward" : true, "HasComments" : false, "HasAttachments" : false, "HasPotentialOwners" : false, "IsSubstituted" : false, "SubstitutedUser" : "", "TaskDefinitionData" : {

		"__metadata" : {
		"uri" : "http://10.66.177.136:50000/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/TaskCollection(SAP__Origin='LOCALHOST_C73_00',TaskDefinitionID='bpm%3A%2F%2Fbpm.sap.com%2Ftask-definition%2Fa5257bd14f1fb45328782518b9687609')", "type" : "TASKPROCESSING.Task"
		}, "SAP__Origin" : "LOCALHOST_C73_00", "TaskModelID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-model%2Fe098f47c713a0433b14711e1ac92005056aa00d1", "TaskDefinitionID" : "bpm://bpm.sap.com/task-definition/a5257bd14f1fb45328782518b9687609", "TaskName" : "Raise Purchase Request", "Category" : "XYZ"
		}
		}
		], "__count" : "5"
		}
		};

sap.uiext.inbox.qunit.mockServer.InboxMockServerData.retrieveCommentsData = {
	"d" : {
	"results" : [
	{
	"__metadata" : {
	"uri" : "http://10.66.177.136:50000/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/CommentsCollection(ID='bpm%3A%2F%2Fbpm.sap.com%2Fnote%2F1e2da77513f0102535840000006379d2',InstanceID='bpm%3A%2F%2Fbpm.sap.com%2Ftask-instance%2F9851fd12da6311e280840000006379d2',SAP__Origin='LOCALHOST_C73_00')", "type" : "TASKPROCESSING.Comment"
	}, "SAP__Origin" : "LOCALHOST_C73_00", "InstanceID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-instance%2F9851fd12da6311e280840000006379d2", "ID" : "bpm%3A%2F%2Fbpm.sap.com%2Fnote%2F1e2da77513f0102535840000006379d2", "CreatedAt" : "\/Date(1371821677347)\/", "CreatedByName" : "Kumar, Abhishek", "CreatedBy" : "USER.PRIVATE_DATASOURCE.un:Abhishek", "Text" : "Super idea"
	}
	]
	}
	};

sap.uiext.inbox.qunit.mockServer.InboxMockServerData.addCommentData = {
		"d" : {
			"__metadata" : {
			"uri" : "http://10.66.177.136:50000/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/CommentsCollection(ID='bpm%3A%2F%2Fbpm.sap.com%2Fnote%2F1e2de78405481d0f3ec90000006379d2',InstanceID='bpm%3A%2F%2Fbpm.sap.com%2Ftask-instance%2F9851fd12da6311e280840000006379d2',SAP__Origin='LOCALHOST_C73_00')", "type" : "TASKPROCESSING.Comment"
			}, "SAP__Origin" : "LOCALHOST_C73_00", "InstanceID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-instance%2F9851fd12da6311e280840000006379d2", "ID" : "bpm%3A%2F%2Fbpm.sap.com%2Fnote%2F1e2de78405481d0f3ec90000006379d2", "CreatedAt" : "\/Date(1372261883107)\/", "CreatedByName" : "Kumar, Abhishek", "CreatedBy" : "USER.PRIVATE_DATASOURCE.un:Abhishek", "Text" : "Okay done"
			}
			};

sap.uiext.inbox.qunit.mockServer.InboxMockServerData.addLongCommentData = {
		"d" : {
			"__metadata" : {
			"uri" : "http://10.66.177.136:50000/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/CommentsCollection(ID='bpm%3A%2F%2Fbpm.sap.com%2Fnote%2F1e2de78405481d0f3ec90000006379d2',InstanceID='bpm%3A%2F%2Fbpm.sap.com%2Ftask-instance%2F9851fd12da6311e280840000006379d2',SAP__Origin='LOCALHOST_C73_00')", "type" : "TASKPROCESSING.Comment"
			}, "SAP__Origin" : "LOCALHOST_C73_00", "InstanceID" : "bpm%3A%2F%2Fbpm.sap.com%2Ftask-instance%2F9851fd12da6311e280840000006379d2", "ID" : "bpm%3A%2F%2Fbpm.sap.com%2Fnote%2F1e2de78405481d0f3ec90000006379d2", "CreatedAt" : "\/Date(1372261883107)\/", "CreatedByName" : "Kumar, Abhishek", "CreatedBy" : "USER.PRIVATE_DATASOURCE.un:Abhishek", "Text" : "Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negredo Negr"
			}
			};

sap.uiext.inbox.qunit.mockServer.InboxMockServerData.searchUsersData = {
		"d" : {
			"results" : [
			{
			"__metadata" : {
			"uri" : "http://10.66.191.76:50000/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/UserInfoCollection(SAP__Origin='LOCALHOST_C73_00',UniqueName='admin')", "type" : "TASKPROCESSING.UserInfo"
			}, "SAP__Origin" : "LOCALHOST_C73_00", "DisplayName" : "admin", "UniqueName" : "admin", "SubstitutedUsers" : "", "SearchPattern" : "", "FirstName" : "", "LastName" : "admin", "Email" : "", "WorkPhone" : "", "MobilePhone" : "", "HomePhone" : "", "mime_type" : ""
			}, {
			"__metadata" : {
			"uri" : "http://10.66.191.76:50000/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/UserInfoCollection(SAP__Origin='LOCALHOST_C73_00',UniqueName='Administrator')", "type" : "TASKPROCESSING.UserInfo"
			}, "SAP__Origin" : "LOCALHOST_C73_00", "DisplayName" : "Administrator", "UniqueName" : "Administrator", "SubstitutedUsers" : "", "SearchPattern" : "", "FirstName" : "", "LastName" : "Administrator", "Email" : "", "WorkPhone" : "", "MobilePhone" : "", "HomePhone" : "", "mime_type" : ""
			}
			]
			}
			};

sap.uiext.inbox.qunit.mockServer.InboxMockServerData.searchUsersDataOne = {
		"d" : {
			"results" : [
			{
			"__metadata" : {
			"uri" : "http://10.66.191.76:50000/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/UserInfoCollection(SAP__Origin='LOCALHOST_C73_00',UniqueName='TestUser')", "type" : "TASKPROCESSING.UserInfo"
			}, "SAP__Origin" : "LOCALHOST_C73_00", "DisplayName" : "TestUser", "UniqueName" : "TestUser", "SubstitutedUsers" : "", "SearchPattern" : "", "FirstName" : "", "LastName" : "TestUser", "Email" : "", "WorkPhone" : "", "MobilePhone" : "", "HomePhone" : "", "mime_type" : ""
			}
			]
			}
			};

sap.uiext.inbox.qunit.mockServer.InboxMockServerData.searchUsersDataNone = {
		"d" : {
			"results" : [
			]
			}
			};

sap.uiext.inbox.qunit.mockServer.InboxMockServerData.myActiveSubtitutionRulesData = function (){
	
	var presentDate = new Date().getTime();
	var futureDate1 = presentDate + 888888888;
	var futureDate2 = presentDate + 9999999999;
	var pastDate = presentDate - 77777777777;
		
	var activeSubstitutionData = {
			
			"d" : {
				"results" : [
				{
					"__metadata" : {
						"uri" : "http://localhost:8080/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/SubstitutionRuleCollection(SAP__Origin='VMLOCALHOSTXX_YNW_00',SubstitutionRuleID='bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000516621')", "type" : "TASKPROCESSING.SubstitutionRule"
					}, "SAP__Origin" : "VMLOCALHOSTXX_YNW_00", "SubstitutionRuleID" : "bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e00000056621", "EndDate" : "\/Date("+futureDate1+")\/", "BeginDate" : "\/Date("+presentDate+")\/", "User" : "USER.PRIVATE_DATASOURCE.un:i035985", "FullName" : "Manjusha Anand", "IsEnabled" : true, "SupportsEnableSubstitutionRule" : true, "SupportsDeleteSubstitutionRule": true
				}, {
					"__metadata" : {
						"uri" : "http://localhost:8080/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/SubstitutionRuleCollection(SAP__Origin='VMLOCALHOSTXX_YNW_00',SubstitutionRuleID='bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000510143')", "type" : "TASKPROCESSING.SubstitutionRule"
					}, "SAP__Origin" : "VMLOCALHOSTXX_YNW_00", "SubstitutionRuleID" : "bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000510143", "EndDate" : "\/Date("+futureDate2+")\/", "BeginDate" : "\/Date("+pastDate+")\/", "User" : "USER.PRIVATE_DATASOURCE.un:i047314", "FullName" : "Sharan Kumar Bojja", "IsEnabled" : true, "SupportsEnableSubstitutionRule" : false, "SupportsDeleteSubstitutionRule" :false
				},{
					"__metadata" : {
						"uri" : "http://localhost:8080/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/SubstitutionRuleCollection(SAP__Origin='VMLOCALHOSTXX_YNW_00',SubstitutionRuleID='bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000510003')", "type" : "TASKPROCESSING.SubstitutionRule"
					}, "SAP__Origin" : "VMLOCALHOSTXX_YNW_00", "SubstitutionRuleID" : "bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000510003", "EndDate" : "\/Date("+futureDate2+")\/", "BeginDate" : "\/Date("+presentDate+")\/", "User" : "USER.PRIVATE_DATASOURCE.un:i047312", "FullName" : "Madarapu Prashanth", "IsEnabled" : true, "SupportsEnableSubstitutionRule" : true, "SupportsDeleteSubstitutionRule" :false
				}, {
					"__metadata" : {
						"uri" : "http://localhost:8080/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/SubstitutionRuleCollection(SAP__Origin='VMLOCALHOSTXX_YNW_00',SubstitutionRuleID='bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000510001')", "type" : "TASKPROCESSING.SubstitutionRule"
					}, "SAP__Origin" : "VMLOCALHOSTXX_YNW_00", "SubstitutionRuleID" : "bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000510001", "EndDate" : "\/Date("+presentDate+")\/", "BeginDate" : "\/Date("+presentDate+")\/", "User" : "USER.PRIVATE_DATASOURCE.un:i047007", "FullName" : "James Bond", "IsEnabled" : true, "SupportsEnableSubstitutionRule" : false, "SupportsDeleteSubstitutionRule" :true
				}
				], "__count" : "4"
			}
		}

return activeSubstitutionData;
};

sap.uiext.inbox.qunit.mockServer.InboxMockServerData.myInActiveSubtitutionRulesData = function(){

var presentDate = new Date().getTime();
var futureDate = presentDate + 888888888;
var pastDate = presentDate - 77777777777;

var inActiveSubstitutionRule = {
		"d" : {
			"results" : [
			             {
			            	 "__metadata" : {
			            		 "uri" : "http://localhost:8080/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/SubstitutionRuleCollection(SAP__Origin='VMLOCALHOSTXX_YNW_00',SubstitutionRuleID='bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000416621')", "type" : "TASKPROCESSING.SubstitutionRule"
			            	 }, "SAP__Origin" : "VMLOCALHOSTXX_YNW_00", "SubstitutionRuleID" : "bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000416621", "EndDate" : "\/Date("+pastDate+")\/", "BeginDate" : "\/Date("+pastDate+")\/", "User" : "USER.PRIVATE_DATASOURCE.un:i0100001", "FullName" : "Ranbir Kapoor", "IsEnabled" : false, "SupportsEnableSubstitutionRule" : true, "SupportsDeleteSubstitutionRule": false
			             }, {
			            	 "__metadata" : {
			            		 "uri" : "http://localhost:8080/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/SubstitutionRuleCollection(SAP__Origin='VMLOCALHOSTXX_YNW_00',SubstitutionRuleID='bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000510144')", "type" : "TASKPROCESSING.SubstitutionRule"
			            	 }, "SAP__Origin" : "VMLOCALHOSTXX_YNW_00", "SubstitutionRuleID" : "bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000510144", "EndDate" : "\/Date("+futureDate+")\/", "BeginDate" : "\/Date("+futureDate+")\/", "User" : "USER.PRIVATE_DATASOURCE.un:i0100002", "FullName" : "Karishma Kapoor", "IsEnabled" : false, "SupportsEnableSubstitutionRule" : false, "SupportsDeleteSubstitutionRule" :true
			             },{
			            	 "__metadata" : {
			            		 "uri" : "http://localhost:8080/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/SubstitutionRuleCollection(SAP__Origin='VMLOCALHOSTXX_YNW_00',SubstitutionRuleID='bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e1000000510013')", "type" : "TASKPROCESSING.SubstitutionRule"
			            	 }, "SAP__Origin" : "VMLOCALHOSTXX_YNW_00", "SubstitutionRuleID" : "bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e1000000510013", "EndDate" : "\/Date("+presentDate+")\/", "BeginDate" : "\/Date("+pastDate+")\/", "User" : "USER.PRIVATE_DATASOURCE.un:i0100003", "FullName" : "Sonam Kapoor", "IsEnabled" : false, "SupportsEnableSubstitutionRule" : true, "SupportsDeleteSubstitutionRule" :true
			             }, {
			            	 "__metadata" : {
			            		 "uri" : "http://localhost:8080/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/SubstitutionRuleCollection(SAP__Origin='VMLOCALHOSTXX_YNW_00',SubstitutionRuleID='bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458f000000510011')", "type" : "TASKPROCESSING.SubstitutionRule"
			            	 }, "SAP__Origin" : "VMLOCALHOSTXX_YNW_00", "SubstitutionRuleID" : "bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458f000000510011", "EndDate" : "\/Date("+futureDate+")\/", "BeginDate" : "\/Date("+pastDate+")\/", "User" : "USER.PRIVATE_DATASOURCE.un:i010007", "FullName" : "James Kapoor", "IsEnabled" : false, "SupportsEnableSubstitutionRule" : false, "SupportsDeleteSubstitutionRule" :false
			             }
			             ], "__count" : "4"
		}
	}
	return inActiveSubstitutionRule
};

sap.uiext.inbox.qunit.mockServer.InboxMockServerData.activeSubtitutingRulesData = function(){

var presentDate = new Date().getTime();
var futureDate1 = presentDate + 888888888;
var futureDate2 = presentDate + 9999999999;
var pastDate = presentDate - 77777777777;

var activeSubstituteRule = {
		
		"d" : {
			"results" : [
			             {
			            	 "__metadata" : {
			            		 "uri" : "http://localhost:8080/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/SubstitutesRuleCollection(SAP__Origin='VMLOCALHOSTXX_YNW_00',SubstitutionRuleID='bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000416629')", "type" : "TASKPROCESSING.SubstitutionRule"
			            	 }, "SAP__Origin" : "VMLOCALHOSTXX_YNW_00", "SubstitutionRuleID" : "bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000416629", "EndDate" : "\/Date("+futureDate1+")\/", "BeginDate" : "\/Date("+pastDate+")\/", "User" : "USER.PRIVATE_DATASOURCE.un:i010005", "FullName" : "Amir Khan", "IsEnabled" : true, "SupportsEnableSubstitutionRule" : true, "SupportsDeleteSubstitutionRule": true
			             }, {
			            	 "__metadata" : {
			            		 "uri" : "http://localhost:8080/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/SubstitutesRuleCollection(SAP__Origin='VMLOCALHOSTXX_YNW_00',SubstitutionRuleID='bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000510194')", "type" : "TASKPROCESSING.SubstitutionRule"
			            	 }, "SAP__Origin" : "VMLOCALHOSTXX_YNW_00", "SubstitutionRuleID" : "bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000510194", "EndDate" : "\/Date("+presentDate+")\/", "BeginDate" : "\/Date("+presentDate+")\/", "User" : "USER.PRIVATE_DATASOURCE.un:i00004", "FullName" : "Salman Khan", "IsEnabled" : true, "SupportsEnableSubstitutionRule" : false, "SupportsDeleteSubstitutionRule" :true
			             },{
			            	 "__metadata" : {
			            		 "uri" : "http://localhost:8080/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/SubstitutesRuleCollection(SAP__Origin='VMLOCALHOSTXX_YNW_00',SubstitutionRuleID='bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000510019')", "type" : "TASKPROCESSING.SubstitutionRule"
			            	 }, "SAP__Origin" : "VMLOCALHOSTXX_YNW_00", "SubstitutionRuleID" : "bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000510019", "EndDate" : "\/Date("+futureDate2+")\/", "BeginDate" : "\/Date("+presentDate+")\/", "User" : "USER.PRIVATE_DATASOURCE.un:i000002", "FullName" : "Shah Rukh Khan", "IsEnabled" : true, "SupportsEnableSubstitutionRule" : false, "SupportsDeleteSubstitutionRule" :false
			             }, {
			            	 "__metadata" : {
			            		 "uri" : "http://localhost:8080/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/SubstitutesRuleCollection(SAP__Origin='VMLOCALHOSTXX_YNW_00',SubstitutionRuleID='bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000510091')", "type" : "TASKPROCESSING.SubstitutionRule"
			            	 }, "SAP__Origin" : "VMLOCALHOSTXX_YNW_00", "SubstitutionRuleID" : "bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000510091", "EndDate" : "\/Date("+futureDate1+")\/", "BeginDate" : "\/Date("+presentDate+")\/", "User" : "USER.PRIVATE_DATASOURCE.un:i000007", "FullName" : "James Bond Khan", "IsEnabled" : true, "SupportsEnableSubstitutionRule" : true, "SupportsDeleteSubstitutionRule" :false
			             }
			             ], "__count" : "4"
			}
	}
return activeSubstituteRule;
};

sap.uiext.inbox.qunit.mockServer.InboxMockServerData.inActiveSubtitutingRulesData = function(){
	
	var presentDate = new Date().getTime();
	var futureDate = presentDate + 888888888;
	var pastDate = presentDate - 77777777777;

	var inActiveSubstituteRuleData = {
		
		"d" : {
			"results" : [
			             {
			            	 "__metadata" : {
			            		 "uri" : "http://localhost:8080/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/SubstitutesRuleCollection(SAP__Origin='VMLOCALHOSTXX_YNW_00',SubstitutionRuleID='bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000416699')", "type" : "TASKPROCESSING.SubstitutionRule"
			            	 }, "SAP__Origin" : "VMLOCALHOSTXX_YNW_00", "SubstitutionRuleID" : "bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000416699", "EndDate" : "\/Date("+presentDate+")\/", "BeginDate" : "\/Date("+presentDate+")\/", "User" : "USER.PRIVATE_DATASOURCE.un:i12385", "FullName" : "Manjusha Roy", "IsEnabled" : false, "SupportsEnableSubstitutionRule" : false, "SupportsDeleteSubstitutionRule": true
			             }, {
			            	 "__metadata" : {
			            		 "uri" : "http://localhost:8080/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/SubstitutesRuleCollection(SAP__Origin='VMLOCALHOSTXX_YNW_00',SubstitutionRuleID='bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000510198')", "type" : "TASKPROCESSING.SubstitutionRule"
			            	 }, "SAP__Origin" : "VMLOCALHOSTXX_YNW_00", "SubstitutionRuleID" : "bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000510198", "EndDate" : "\/Date("+futureDate+")\/", "BeginDate" : "\/Date("+presentDate+")\/", "User" : "USER.PRIVATE_DATASOURCE.un:i0765334", "FullName" : "Sharan Roy", "IsEnabled" : false, "SupportsEnableSubstitutionRule" : true, "SupportsDeleteSubstitutionRule" :true
			             },{
			            	 "__metadata" : {
			            		 "uri" : "http://localhost:8080/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/SubstitutesRuleCollection(SAP__Origin='VMLOCALHOSTXX_YNW_00',SubstitutionRuleID='bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000510097')", "type" : "TASKPROCESSING.SubstitutionRule"
			            	 }, "SAP__Origin" : "VMLOCALHOSTXX_YNW_00", "SubstitutionRuleID" : "bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000510097", "EndDate" : "\/Date("+futureDate+")\/", "BeginDate" : "\/Date("+futureDate+")\/", "User" : "USER.PRIVATE_DATASOURCE.un:i541122", "FullName" : "Roy Prashanth", "IsEnabled" : false, "SupportsEnableSubstitutionRule" : true, "SupportsDeleteSubstitutionRule" :false
			             }, {
			            	 "__metadata" : {
			            		 "uri" : "http://localhost:8080/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/SubstitutesRuleCollection(SAP__Origin='VMLOCALHOSTXX_YNW_00',SubstitutionRuleID='bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000510096')", "type" : "TASKPROCESSING.SubstitutionRule"
			            	 }, "SAP__Origin" : "VMLOCALHOSTXX_YNW_00", "SubstitutionRuleID" : "bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e000000510096", "EndDate" : "\/Date("+pastDate+")\/", "BeginDate" : "\/Date("+pastDate+")\/", "User" : "USER.PRIVATE_DATASOURCE.un:i047007", "FullName" : "James Roy", "IsEnabled" : false, "SupportsEnableSubstitutionRule" : false, "SupportsDeleteSubstitutionRule" :false
			             }
			             ], "__count" : "4"
			}
	}
return inActiveSubstituteRuleData;
};

sap.uiext.inbox.qunit.mockServer.InboxMockServerData.enableSubstitutionRule = {
		
			"d" : {
				"results" : [
				{
					"__metadata" : {
						"uri" : "http://localhost:8080/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/SubstitutionRuleCollection(SAP__Origin='VMLOCALHOSTXX_YNW_00',SubstitutionRuleID='bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e001230516621')", "type" : "TASKPROCESSING.SubstitutionRule"
					}, "SAP__Origin" : "VMLOCALHOSTXX_YNW_00", "SubstitutionRuleID" : "bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e001230516621", "EndDate" : "\/Date(1378726242542)\/", "BeginDate" : "\/Date(1378726242542)\/", "User" : "USER.PRIVATE_DATASOURCE.un:i035985", "FullName" : "James Enabled", "IsEnabled" : true, "SupportsEnableSubstitutionRule" : true, "SupportsDeleteSubstitutionRule": true
				}
				], "__count" : "1"
			}
};

sap.uiext.inbox.qunit.mockServer.InboxMockServerData.disableSubstitutionRule = {
		
		"d" : {
			"results" : [
			             {
			            	 "__metadata" : {
			            		 "uri" : "http://localhost:8080/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/SubstitutionRuleCollection(SAP__Origin='VMLOCALHOSTXX_YNW_00',SubstitutionRuleID='bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e001230516621')", "type" : "TASKPROCESSING.SubstitutionRule"
			            	 }, "SAP__Origin" : "VMLOCALHOSTXX_YNW_00", "SubstitutionRuleID" : "bpm%3A%2F%2Fbpm.sap.com%2Fsubstitution%2F1e30a27185cc1166458e001230516621", "EndDate" : "\/Date(1378726242542)\/", "BeginDate" : "\/Date(1378726242542)\/", "User" : "USER.PRIVATE_DATASOURCE.un:i035985", "FullName" : "James Disabled", "IsEnabled" : false, "SupportsEnableSubstitutionRule" : true, "SupportsDeleteSubstitutionRule": true
			             }
			             ], "__count" : "1"
		}
};

sap.uiext.inbox.qunit.mockServer.InboxMockServerData.deleteSubstitutionRule = {
		"d" : {
				"Deleted": "true"
		}
};

