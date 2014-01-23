/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
	jQuery.sap.declare("sap.uiext.inbox.InboxPrimaryFilterEnum");
	
	/**
	 *  @class
	 * 	Enumeration for Primary Filters
	 *  This value will be applied for the DropDown Filter in Inbox
	 *  
	 * @static
	 * @public
	 */
	sap.uiext.inbox.InboxPrimaryFilterEnum = {
			/**
			 * Primary Filter for Open Tasks
			 * @public
			 */
			OPEN: {key: "li_openTasks", value: "open"},
			/**
			 * Primary Filter for Completed Tasks
			 * @public
			 */
			COMPLETED: {key: "li_completedTasks" ,value : "completed"},
			/**
			 * Primary Filter for Escalated Tasks
			 * @public
			 */
			ESCALATED: {key: "li_escalatedTasks" , value : "escalated"},
			/**
			 * Primary Filter for Overdue Tasks
			 * @public
			 */
			OVERDUE: {key: "li_overdueTasks" , value: "overdue"}
	};