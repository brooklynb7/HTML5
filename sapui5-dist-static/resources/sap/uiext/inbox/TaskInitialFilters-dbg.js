/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
// Provides a filter for list bindings
	jQuery.sap.declare("sap.uiext.inbox.TaskInitialFilters");
	
	jQuery.sap.require("sap.uiext.inbox.InboxUtils");	
	/**
	 * Constructor for TaskInitialFilters
	 *
	 * @class
	 * PreDefined Filters for Inbox
	 *
	 *
	 * @param {Array} aStatusFilters array of Status Filters to be applied
	 * @param {Array} aPriorityFilters array of Priority Filters to be applied
	 * @param {String} sDateTimeFilter DateTime Filter to be applied. Values : Today, Last_7_days, Last_15_days, Last_30_days
	 * @param {Array} aTaskTypeFilters array of TaskType Filters to be applied
	 * @param {String} sDueDateTimeFilter DueDate Filter to be applied. Values : Today, Next_7_days, Next_15_days, Next_30_days
	 * @public
	 */
	
	sap.ui.base.Object.extend("sap.uiext.inbox.TaskInitialFilters",{
			
			    constructor : function(aStatusFilters, aPriorityFilters, sDateTimeFilter, aTaskTypeFilters, sDueDateTimeFilter) {
			
			        sap.ui.base.Object.apply(this);
			
			        this.aStatusFilters = aStatusFilters ? aStatusFilters : [];
			  	    this.aPriorityFilters = aPriorityFilters ? aPriorityFilters : [];
			  	    this.sDateTimeFilter = sDateTimeFilter;
			  	    this.aTaskTypeFilters = aTaskTypeFilters ? aTaskTypeFilters : [];
			  	    this.sDueDateTimeFilter = sDueDateTimeFilter;
			  	    this.aFiltersTobeApplied = [];
			  	    this.inboxUtils = sap.uiext.inbox.InboxUtils;
			    }
			
		});
	
	
	sap.uiext.inbox.TaskInitialFilters.prototype.getFilterObjects = function(){
		var filtersToApplymap = sap.uiext.inbox.TaskInitialFilters.FILTERSTOAPPLYMAP;
		
		var oInitialFiltersAppliedMap = {};
		var aStatusFilterObjects = [], aPriorityFilterObjects = [], aTaskTypeFilterObjects = [], dateFilter, dueDateFilter;
		var filters = undefined, allFilters = [];
		for(var i=0;i<this.aStatusFilters.length;i++){
			var filterStatus = filtersToApplymap.filters.filterStatus;
			if(filterStatus[this.aStatusFilters[i]] !== undefined){
				var statFilter = this.inboxUtils._getStatusFilters(this.aStatusFilters[i]);
				oInitialFiltersAppliedMap[filterStatus[this.aStatusFilters[i]]] = statFilter;
				aStatusFilterObjects.push(statFilter);
			}
		}
		allFilters = allFilters.concat(aStatusFilterObjects);
		
		for(var i=0;i<this.aPriorityFilters.length;i++){
			var filterPrio = filtersToApplymap.filters.filterPriority;
			if(filterPrio[this.aPriorityFilters[i]]){
				var prioFilter = this.inboxUtils._getPriorityFilters(this.aPriorityFilters[i]);
				oInitialFiltersAppliedMap[filterPrio[this.aPriorityFilters[i]]] = prioFilter;
				aPriorityFilterObjects.push(prioFilter);
			}
		}
		
		allFilters = allFilters.concat(aPriorityFilterObjects);
		if(this.sDateTimeFilter !== null && this.sDateTimeFilter !== undefined){
			//logic for sDateTimeFilter
			var filterDateTime = filtersToApplymap.filters.filterDateTime;
			if(filterDateTime[this.sDateTimeFilter]){
				var dateFilter = this.inboxUtils._getDateTimeFilters(this.sDateTimeFilter);
				oInitialFiltersAppliedMap[filterDateTime[this.sDateTimeFilter]] = dateFilter;
			}
		}

		if(dateFilter !== undefined){
			allFilters.push(dateFilter);
		}

		for(var i=0;i<this.aTaskTypeFilters.length;i++){
			var taskTypeFilter = new sap.ui.model.Filter("TaskDefinitionID", sap.ui.model.FilterOperator.EQ, this.aTaskTypeFilters[i]);
			oInitialFiltersAppliedMap[this.aTaskTypeFilters[i]] = taskTypeFilter;
			aTaskTypeFilterObjects.push(taskTypeFilter);
		}
		
		allFilters = allFilters.concat(aTaskTypeFilterObjects);
		
		if(this.sDueDateTimeFilter !== null && this.sDueDateTimeFilter !== undefined){
			//logic for sDateTimeFilter
			var filterDueDateTime = filtersToApplymap.filters.filterDueDateTime;
			if(filterDueDateTime[this.sDueDateTimeFilter]){
				var dueDateFilter = this.inboxUtils._getDueDateFilters(this.sDueDateTimeFilter);
				oInitialFiltersAppliedMap[filterDueDateTime[this.sDueDateTimeFilter]] = dueDateFilter;
			}
		}

		if(dueDateFilter !== undefined){
			allFilters.push(dueDateFilter);
		}
		
		if(allFilters.length > 0 ){
			filters = {DueDate : dueDateFilter, TaskType : aTaskTypeFilterObjects, CreatedDate : dateFilter, Priority : aPriorityFilterObjects, Status : aStatusFilterObjects};
		}
		
		return { filterOperatorMap: filters, filtersAppliedMap : oInitialFiltersAppliedMap };
	};
	
	sap.uiext.inbox.TaskInitialFilters.prototype.getFilterUIKeys = function(){
		var filtermap = sap.uiext.inbox.TaskInitialFilters.FILTERMAP;
		var aStatusAttToSelect = [];
		var aPrioAttToSelect = [];
		var aDateAttToSelect = [];
		var aTaskTypeAttToSelect = [];
		var aDueDateAttToSelect = [];
	
		for(var i=0;i<this.aStatusFilters.length;i++){
			var filterStatus = filtermap.filters.filterStatus;
			if(filterStatus[this.aStatusFilters[i]])
				aStatusAttToSelect.push(filterStatus[this.aStatusFilters[i]]);
		}
	
		for(var i=0;i<this.aPriorityFilters.length;i++){
			var filterPrio = filtermap.filters.filterPriority;
			if(filterPrio[this.aPriorityFilters[i]])
				aPrioAttToSelect.push(filterPrio[this.aPriorityFilters[i]]);
		}
	
	
		if(this.sDateTimeFilter !== null && this.sDateTimeFilter !== undefined)
		{
			var filterDateTime = filtermap.filters.filterDateTime;
			if(filterDateTime[this.sDateTimeFilter])
				aDateAttToSelect.push(filterDateTime[this.sDateTimeFilter]);
		}

	
		for(var i=0;i<this.aTaskTypeFilters.length;i++){
			var taskTypeID = this.aTaskTypeFilters[i];
			if(taskTypeID){
				//TODO: TaskType IDs need to handle special characters
				taskTypeID = taskTypeID.replace(/-/g, "--");
				taskTypeID = taskTypeID.replace(/\s+/g, "-");
				if(!(/^([A-Za-z_][-A-Za-z0-9_.:]*)$/.test(taskTypeID)))
				{
					if( /^[^A-Za-z_]/.test(taskTypeID)){
						taskTypeID = taskTypeID.replace(/^[^A-Za-z_]/, "_");
					}
					taskTypeID.replace(/[^-\w_.:]/g, "_");
				}
				aTaskTypeAttToSelect.push(taskTypeID);
			}
		}
		
		if(this.sDueDateTimeFilter !== null && this.sDueDateTimeFilter !== undefined)
		{
			var filterDueDateTime = filtermap.filters.filterDueDateTime;
			if(filterDueDateTime[this.sDueDateTimeFilter])
				aDueDateAttToSelect.push(filterDueDateTime[this.sDueDateTimeFilter]);
		}

		return {Status : aStatusAttToSelect, Priority: aPrioAttToSelect, StartDate : aDateAttToSelect, TaskType : aTaskTypeAttToSelect, DueDate :aDueDateAttToSelect};
	};
	
	sap.uiext.inbox.TaskInitialFilters.FILTERMAP = {
			filters: { 
				filterStatus: {
					READY:"INBOX_FILTER_STATUS_READY",
					RESERVED:"INBOX_FILTER_STATUS_RESERVED",
					IN_PROGRESS:"INBOX_FILTER_STATUS_IN_PROGRESS"
				},
				filterPriority: {
					LOW:"INBOX_FILTER_PRIORITY_LOW",
					MEDIUM:"INBOX_FILTER_PRIORITY_MEDIUM",
					HIGH:"INBOX_FILTER_PRIORITY_HIGH",
					VERY_HIGH:"INBOX_FILTER_PRIORITY_VERY_HIGH"
				},
				filterDateTime: {
					Today:"INBOX_FILTER_DATETIME_TODAY",
					Last_7_days: "INBOX_FILTER_DATETIME_WEEK",
					Last_15_days: "INBOX_FILTER_DATETIME_15DAYS",
					Last_30_days: "INBOX_FILTER_DATETIME_MONTH"
				},
				filterDueDateTime: {
					Today:"INBOX_FILTER_DUE_DATETIME_TODAY",
					Next_7_days: "INBOX_FILTER_DUE_DATETIME_WEEK",
					Next_15_days: "INBOX_FILTER_DUE_DATETIME_15DAYS",
					Next_30_days: "INBOX_FILTER_DUE_DATETIME_MONTH"
				}
			}
	};
	
	sap.uiext.inbox.TaskInitialFilters.FILTERSTOAPPLYMAP = {
			filters: { 
				filterStatus: {
					READY:"readyStat",
					RESERVED:"resStat",
					IN_PROGRESS:"InProStat"
				},
				filterPriority: {
					LOW:"lowPrio",
					MEDIUM:"medPrio",
					HIGH:"hiPrio",
					VERY_HIGH:"veryhiPrio"
				},
				filterDateTime: {
					Today:"today",
					Last_7_days: "last7",
					Last_15_days: "last15",
					Last_30_days: "last30"
				},
				filterDueDateTime: {
					Today:"dueDateToday",
					Next_7_days: "dueDatenext7",
					Next_15_days: "dueDatenext15",
					Next_30_days: "dueDatenext30"
				}
			}
};
	
	
	
	