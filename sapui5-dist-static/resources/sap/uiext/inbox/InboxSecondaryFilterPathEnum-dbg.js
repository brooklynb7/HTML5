/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
	jQuery.sap.declare("sap.uiext.inbox.InboxSecondaryFilterPathEnum");
	
	jQuery.sap.require("sap.uiext.inbox.InboxSecondaryFilterValuesEnum");
	
	/**
	 * 	@class
	 * 	Enumeration for Secondary Filter Paths
	 *    
	 * 	@static
	 * 	@public
	 */
	sap.uiext.inbox.InboxSecondaryFilterPathEnum = {
			/**
			 * Path for Status Secondary Filter 
			 * @public
			 */
			STATUS: {
						key:"Status", 
						allowedKeyValues : ["INBOX_FILTER_STATUS_READY", "INBOX_FILTER_STATUS_RESERVED", "INBOX_FILTER_STATUS_IN_PROGRESS"]
					},
			/**
			 * Path for Priority Secondary Filter
			 * @public
			 */
			PRIORITY:{
						key: "Priority",
						allowedKeyValues : ["INBOX_FILTER_PRIORITY_LOW", "INBOX_FILTER_PRIORITY_MEDIUM", "INBOX_FILTER_PRIORITY_HIGH","INBOX_FILTER_PRIORITY_VERY_HIGH"]
					},			
			/**
			 * Path for DueDate Secondary Filter
			 * @public
			 */
			DUEDATE: {
						key: "DueDate",
						allowedKeyValues : ["INBOX_FILTER_DUE_DATETIME_TODAY", "INBOX_FILTER_DUE_DATETIME_MONTH", "INBOX_FILTER_DUE_DATETIME_WEEK", "INBOX_FILTER_DUE_DATETIME_15DAYS"]
					},
			/**
			 * Path for StartDate Secondary Filter
			 * @public
			 */
			STARTDATE: {
						key: "StartDate",
						allowedKeyValues : ["INBOX_FILTER_DATETIME_TODAY", "INBOX_FILTER_DATETIME_MONTH", "INBOX_FILTER_DATETIME_WEEK","INBOX_FILTER_DATETIME_15DAYS"]
					},
			/**
			 * Path for TaskType Secondary Filter
			 * @public
			 */
			TASKTYPE: {
						key: "TaskType",
						allowedKeyValues : []
				}
	};