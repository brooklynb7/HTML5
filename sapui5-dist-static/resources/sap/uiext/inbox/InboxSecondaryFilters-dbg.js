/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
// Provides a filter for list bindings
	jQuery.sap.declare("sap.uiext.inbox.InboxSecondaryFilters");
	
	jQuery.sap.require("sap.uiext.inbox.InboxUtils");
	jQuery.sap.require("sap.uiext.inbox.TaskInitialFilters");
	jQuery.sap.require("sap.uiext.inbox.InboxSecondaryFilterPathEnum");	
	jQuery.sap.require("sap.uiext.inbox.InboxSecondaryFilterValuesEnum");	
	
	/**
	 * Constructor for InboxSecondaryFilters
	 *
	 * @class
	 * Secondary Filters for Inbox
	 * 
	 * 
	 * @public
	 * @name sap.uiext.inbox.InboxSecondaryFilters
	 */
	
	sap.ui.base.Object.extend("sap.uiext.inbox.InboxSecondaryFilters",{
			
			    constructor : function() {
			
			        sap.ui.base.Object.apply(this);
			        this.inboxUtils = sap.uiext.inbox.InboxUtils;
			        this.mFiltersToApplyMap = {};
			        this.mFilterObjects;
			        this.mSelectUIKeysMap = {};
			  	    this.filter = undefined;
			  	    this.aFilterObjects = undefined;
			  	    this.oPathEnum = sap.uiext.inbox.InboxSecondaryFilterPathEnum;
			  	    this.oValuesEnum = sap.uiext.inbox.InboxSecondaryFilterValuesEnum;
			    }
			
		});
	
	
	/**
	* Set Secondary Filters
	*
	* @name sap.uiext.inbox.InboxSecondaryFilters.prototype.setStandardFilters
	* @function
	* @param {Array} 
	*        aFilterObjects
	*         Array of secondary Filter Objects
	* eg. : {sPath : sap.uiext.inbox.InboxSecondaryFilterPathEnum.Priority, values : [sap.uiext.inbox.InboxSecondaryFilterValuesEnum.Status.LOW, sap.uiext.inbox.InboxSecondaryFilterValuesEnum.Status.HIGH]}
	* sPath : {sap.uiext.inbox.InboxSecondaryFilterPathEnum}
	* values : {Array} Array of SecondaryFilterValuesEnums  of {sap.uiext.inbox.InboxSecondaryFilterValuesEnum}
	* @public
	*/
	sap.uiext.inbox.InboxSecondaryFilters.prototype.setStandardFilters = function(aFilterObjects){
		if(aFilterObjects instanceof sap.uiext.inbox.TaskInitialFilters || aFilterObjects instanceof Array){
			this.aFilterObjects = aFilterObjects;
			this._parseFilterObjects(aFilterObjects);
		}
	};
	
	sap.uiext.inbox.InboxSecondaryFilters.prototype.getStandardFilters = function(aFilterObjects){
		return this.aFilterObjects;
	};
	
	sap.uiext.inbox.InboxSecondaryFilters.prototype._parseFilterObjects = function(aFilterObjects){
		if(aFilterObjects instanceof sap.uiext.inbox.TaskInitialFilters){
			this.filter = aFilterObjects; 
		}else{
			var oFilterObject;
			for(var i = 0; i < aFilterObjects.length; i++){
				oFilterObject = aFilterObjects[i];
				this._createFilters(oFilterObject);
			}
		}
	};
	
	
	sap.uiext.inbox.InboxSecondaryFilters.prototype._createFilters = function(oFilterObject){
		
		var sFilterPath = oFilterObject.sPath, sFilterPathKey = sFilterPath.key, aFilterValues = oFilterObject.values;
		
		if(sFilterPath && aFilterValues){
			var dateTimeFilterKeys = [this.oPathEnum.DUEDATE.key, this.oPathEnum.STARTDATE.key];
			aFilterValues = (jQuery.inArray(sFilterPathKey,dateTimeFilterKeys) === -1) ? aFilterValues : [aFilterValues[0]];
			
			
			var aFilterValuesLength = aFilterValues.length, i=0, aFilterAttributeUIKeys = [], aCoreFilterObjects = [];
			//TODO: If else , lot of repetitive code, needs to be refactored
			if(sFilterPath.key === "TaskType"){
				for(; i < aFilterValuesLength; i++){
					var oFilterValue = aFilterValues[i];
					if(oFilterValue){
						var oFilter = new sap.ui.model.Filter("TaskDefinitionID", sap.ui.model.FilterOperator.EQ, decodeURIComponent(aFilterValues[i]));
						aCoreFilterObjects.push(oFilter);
					
						aFilterAttributeUIKeys.push(encodeURIComponent(aFilterValues[i]));
					
						this.mFiltersToApplyMap[aFilterValues[i]] = oFilter;
					}
				}	
			}else{
				for(; i < aFilterValuesLength; i++){
					var oAllowedFilterValues = sFilterPath.allowedKeyValues;
					var oFilterValue = aFilterValues[i];
					if(oFilterValue && jQuery.inArray(oFilterValue.uiKey,oAllowedFilterValues) !== -1){
						var oFilterKey = oFilterValue.key; 
						var oFilter = this["_get"+sFilterPathKey+"Filter"](oFilterKey);
						aCoreFilterObjects.push(oFilter);
						
						aFilterAttributeUIKeys.push(oFilterValue.uiKey);
						
						this.mFiltersToApplyMap[oFilterValue.filterKey] = oFilter;
					}
				}
			}
			if(!this.mFilterObjects){
				this.mFilterObjects = {};
			}
			this.mSelectUIKeysMap[sFilterPathKey] = aFilterAttributeUIKeys;
			this.mFilterObjects[sFilterPathKey] = aCoreFilterObjects;
		}
	};
	
	sap.uiext.inbox.InboxSecondaryFilters.prototype._getStatusFilter = function(sFilterKey){
		return this.inboxUtils._getStatusFilters(sFilterKey);
	};
	
	sap.uiext.inbox.InboxSecondaryFilters.prototype._getPriorityFilter = function(sFilterKey){
		return this.inboxUtils._getPriorityFilters(sFilterKey);
	};
	
	sap.uiext.inbox.InboxSecondaryFilters.prototype._getDueDateFilter = function(sFilterKey){
		return this.inboxUtils._getDueDateFilters(sFilterKey);
	};
	
	sap.uiext.inbox.InboxSecondaryFilters.prototype._getStartDateFilter = function(sFilterKey){
		return this.inboxUtils._getDateTimeFilters(sFilterKey);
	};

	sap.uiext.inbox.InboxSecondaryFilters.prototype.getFilterObjects = function(){
		return {filterOperatorMap: this.mFilterObjects, filtersAppliedMap : this.mFiltersToApplyMap };
	};
	
	sap.uiext.inbox.InboxSecondaryFilters.prototype.getFilterUIKeys = function(){
		return this.mSelectUIKeysMap;
	};
	
	