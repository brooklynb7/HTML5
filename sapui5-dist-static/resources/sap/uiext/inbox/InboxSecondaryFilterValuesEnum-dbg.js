/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
	jQuery.sap.declare("sap.uiext.inbox.InboxSecondaryFilterValuesEnum");
	
	sap.uiext.inbox.InboxSecondaryFilterValuesEnum = function(){
		throw new Error();
	};
	
	
	/**
	 * 	@class
	 * 	Enumeration for Secondary Filter Values
	 *    
	 * 	@static
	 * 	@public
	 */
	sap.uiext.inbox.InboxSecondaryFilterValuesEnum = {
		/**
		 * Enum Values displayed by the Status Secondary Filter dropdown are
			 *<br><i> Ready </i>      :  sap.uiext.inbox.InboxSecondaryFilterValuesEnum.Status.READY </br>
			 *<br><i>Reserved </i>    :  sap.uiext.inbox.InboxSecondaryFilterValuesEnum.Status.RESERVED  </br>
			 *<br><i>InProgress </i>  :  sap.uiext.inbox.InboxSecondaryFilterValuesEnum.Status.INPROGRESS  </br>
		 * @public
		 */
		Status : {
			/**
			 * Enum Value for Ready Status Secondary Filter
			 * @public
			 */
			READY: {
						//TODO: change to use _getfilters from inboxUtils instead of creating here..
						key: "READY",
						uiKey: "INBOX_FILTER_STATUS_READY" ,
						filterKey: "readyStat"/*,
						filter: new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.EQ, "READY")*/
			},
			/**
			 * Enum Values for Reserved Status Secondary Filter
			 * @public
			 */
			RESERVED: {
						key: "RESERVED",
						uiKey: "INBOX_FILTER_STATUS_RESERVED" , 
						filterKey: "resStat"/*,
						filter: new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.EQ, "RESERVED")*/
			},
			/**
			 * Enum Values for In Progress Status Secondary Filter
			 * @public
			 */
			INPROGRESS: {
						key: "IN_PROGRESS",
						uiKey: "INBOX_FILTER_STATUS_IN_PROGRESS", 
						filterKey: "InProStat"/*,
						filter: new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.EQ, "IN_PROGRESS")*/
			}
		},
	
		/**
		 * 
		 *  Enum Values displayed by Priority Secondary Filter dropdown are
		 * <br> <i> Low </i>     : sap.uiext.inbox.InboxSecondaryFilterValuesEnum.Priority.LOW </br>
		 * <br> <i> Medium</i>   : sap.uiext.inbox.InboxSecondaryFilterValuesEnum.Priority.MEDIUM </br>
		 * <br> <i> High </i>    : sap.uiext.inbox.InboxSecondaryFilterValuesEnum.Priority.HIGH</br>
		 * <br> <i> Very High</i>: sap.uiext.inbox.InboxSecondaryFilterValuesEnum.Priority.VERYHIGH</br> 
		 * @public
		 */
		Priority : {
			/**
			 * Enum Values for Low Priority Secondary Filter
			 * @public
			 */
			LOW: {
						key: "LOW",
						uiKey: "INBOX_FILTER_PRIORITY_LOW" ,
						filterKey: "lowPrio"/*,
						filter: new sap.ui.model.Filter("Priority", sap.ui.model.FilterOperator.EQ, "LOW")*/
			},
			/**
			 * Enum Values for Medium Priority Secondary Filter
			 * @public
			 */
			MEDIUM: {
						key: "MEDIUM",
						uiKey: "INBOX_FILTER_PRIORITY_MEDIUM" ,
						filterKey: "medPrio"/*,
						filter: new sap.ui.model.Filter("Priority", sap.ui.model.FilterOperator.EQ, "MEDIUM")*/
			},
			/**
			 * Enum Values for High Priority Secondary Filter
			 * @public
			 */
			HIGH: {
						key: "HIGH",
						uiKey: "INBOX_FILTER_PRIORITY_HIGH" ,
						filterKey: "hiPrio"/*,
						filter: new sap.ui.model.Filter("Priority", sap.ui.model.FilterOperator.EQ, "HIGH")*/
			},
			/**
			 * Enum Values for Very High Priority Secondary Filter
			 * @public
			 */
			VERYHIGH: {
						key: "VERY_HIGH",
						uiKey: "INBOX_FILTER_PRIORITY_VERY_HIGH" ,
						filterKey: "veryhiPrio"/*,
						filter: new sap.ui.model.Filter("Priority", sap.ui.model.FilterOperator.EQ, "VERY_HIGH")*/
			}
		},
	
		/**
		 * 
		 * Enum Values displayed by the StartDate Secondary Filter are
		     * <br> <i> Today </i> :  sap.uiext.inbox.InboxSecondaryFilterValuesEnum.StartDate.TODAY  </br>
			 * <br> <i> Last7Days </i> :  sap.uiext.inbox.InboxSecondaryFilterValuesEnum.StartDate.LAST7DAYS </br>
			 * <br> <i>Last15Days </i> :  sap.uiext.inbox.InboxSecondaryFilterValuesEnum.StartDate.LAST15DAYS </br>
			 * <br> <i>Last30Days </i> :  sap.uiext.inbox.InboxSecondaryFilterValuesEnum.StartDate.LAST30DAYS </br>
		 * @public
		 * 
		 */
		StartDate : {
			/**
			 * Enum Values for Today StartDate Secondary Filter
			 * @public
			 */
			TODAY: {
						key: "Today",
						uiKey: "INBOX_FILTER_DATETIME_TODAY" ,
						filterKey: "today"/*,
						filter: new sap.ui.model.Filter("CreatedOn", sap.ui.model.FilterOperator.GE, "")*/
			},
			/**
			 * Enum Values for Last 7 Days StartDate Secondary Filter
			 * @public
			 */
			LAST7DAYS: {
						key: "Last_7_days",
						uiKey: "INBOX_FILTER_DATETIME_WEEK" ,
						filterKey: "last7"/*,
						filter: new sap.ui.model.Filter("CreatedOn", sap.ui.model.FilterOperator.GE, "")*/
			},
			/**
			 * Enum Values for Last 15 Days StartDate Secondary Filter
			 * @public
			 */
			LAST15DAYS: {
						key: "Last_15_days",
						uiKey: "INBOX_FILTER_DATETIME_15DAYS" ,
						filterKey: "last15"/*,
						filter: new sap.ui.model.Filter("CreatedOn", sap.ui.model.FilterOperator.GE, "")*/
			},
			/**
			 * Enum Values for Last 30 Days StartDate Secondary Filter
			 * @public
			 */
			LAST30DAYS: {
						key: "Last_30_days",
						uiKey: "INBOX_FILTER_DATETIME_MONTH" ,
						filterKey: "last30"/*,
						filter: new sap.ui.model.Filter("CreatedOn", sap.ui.model.FilterOperator.GE, "")*/
			}
		},
	
		/**
		 * Enum Values displayed by DueDate Secondary Filter dropdown are 
		 * <br><i> Today    </i> : sap.uiext.inbox.InboxSecondaryFilterValuesEnum.DueDate.TODAY </br>
		 * <br><i> Next7Days </i> :  sap.uiext.inbox.InboxSecondaryFilterValuesEnum.DueDate.NEXT7DAYS  </br>
		 * <br><i> Next15Days </i> :  sap.uiext.inbox.InboxSecondaryFilterValuesEnum.DueDate.NEXT15DAYS  </br>
		 * <br><i> Next30Days </i> :  sap.uiext.inbox.InboxSecondaryFilterValuesEnum.DueDate.NEXT30DAYS  </br>
		 * @public
		 * 
		 */
		DueDate : {
			/**
			 * Enum Values for Today Due Date Secondary Filter
			 * @public
			 */
			TODAY: {
				key: "Today",
				uiKey: "INBOX_FILTER_DUE_DATETIME_TODAY" ,
				filterKey: "dueDateToday"/*,
				filter: new sap.ui.model.Filter("Priority", sap.ui.model.FilterOperator.EQ, sap.uiext.inbox.InboxUtils._getFormattedDateTimeOff(0, false))*/
			},
			/**
			 * Enum Values for Next 7 Days Due Date Secondary Filter
			 * @public
			 */
			NEXT7DAYS: {
				key: "Next_7_days",
				uiKey: "INBOX_FILTER_DUE_DATETIME_WEEK" ,
				filterKey: "dueDatenext7"/*,
				filter: new sap.ui.model.Filter("Priority", sap.ui.model.FilterOperator.EQ, sap.uiext.inbox.InboxUtils._getFormattedDateTimeOff(0, false))*/
			},
			/**
			 * Enum Values for Next 15 Days Due Date Secondary Filter
			 * @public
			 */
			NEXT15DAYS: {
				key: "Next_15_days",
				uiKey: "INBOX_FILTER_DUE_DATETIME_15DAYS" ,
				filterKey: "dueDatenext15"/*,
				filter: new sap.ui.model.Filter("Priority", sap.ui.model.FilterOperator.EQ, sap.uiext.inbox.InboxUtils._getFormattedDateTimeOff(0, false))*/
			},
			/**
			 * Enum Values for Next 30 Days Due Date Secondary Filter
			 * @public
			 */
			NEXT30DAYS: {
				key: "Next_30_days",
				uiKey: "INBOX_FILTER_DUE_DATETIME_MONTH" ,
				filterKey: "dueDatenext30"/*,
				filter: new sap.ui.model.Filter("Priority", sap.ui.model.FilterOperator.EQ, sap.uiext.inbox.InboxUtils._getFormattedDateTimeOff(0, false))*/
			}
		}
};