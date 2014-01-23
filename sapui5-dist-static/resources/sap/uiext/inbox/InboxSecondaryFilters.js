/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.uiext.inbox.InboxSecondaryFilters");jQuery.sap.require("sap.uiext.inbox.InboxUtils");jQuery.sap.require("sap.uiext.inbox.TaskInitialFilters");jQuery.sap.require("sap.uiext.inbox.InboxSecondaryFilterPathEnum");jQuery.sap.require("sap.uiext.inbox.InboxSecondaryFilterValuesEnum");sap.ui.base.Object.extend("sap.uiext.inbox.InboxSecondaryFilters",{constructor:function(){sap.ui.base.Object.apply(this);this.inboxUtils=sap.uiext.inbox.InboxUtils;this.mFiltersToApplyMap={};this.mFilterObjects;this.mSelectUIKeysMap={};this.filter=undefined;this.aFilterObjects=undefined;this.oPathEnum=sap.uiext.inbox.InboxSecondaryFilterPathEnum;this.oValuesEnum=sap.uiext.inbox.InboxSecondaryFilterValuesEnum}});
sap.uiext.inbox.InboxSecondaryFilters.prototype.setStandardFilters=function(f){if(f instanceof sap.uiext.inbox.TaskInitialFilters||f instanceof Array){this.aFilterObjects=f;this._parseFilterObjects(f)}};
sap.uiext.inbox.InboxSecondaryFilters.prototype.getStandardFilters=function(f){return this.aFilterObjects};
sap.uiext.inbox.InboxSecondaryFilters.prototype._parseFilterObjects=function(f){if(f instanceof sap.uiext.inbox.TaskInitialFilters){this.filter=f}else{var F;for(var i=0;i<f.length;i++){F=f[i];this._createFilters(F)}}};
sap.uiext.inbox.InboxSecondaryFilters.prototype._createFilters=function(f){var F=f.sPath,s=F.key,a=f.values;if(F&&a){var d=[this.oPathEnum.DUEDATE.key,this.oPathEnum.STARTDATE.key];a=(jQuery.inArray(s,d)===-1)?a:[a[0]];var b=a.length,i=0,c=[],C=[];if(F.key==="TaskType"){for(;i<b;i++){var o=a[i];if(o){var e=new sap.ui.model.Filter("TaskDefinitionID",sap.ui.model.FilterOperator.EQ,decodeURIComponent(a[i]));C.push(e);c.push(encodeURIComponent(a[i]));this.mFiltersToApplyMap[a[i]]=e}}}else{for(;i<b;i++){var A=F.allowedKeyValues;var o=a[i];if(o&&jQuery.inArray(o.uiKey,A)!==-1){var g=o.key;var e=this["_get"+s+"Filter"](g);C.push(e);c.push(o.uiKey);this.mFiltersToApplyMap[o.filterKey]=e}}}if(!this.mFilterObjects){this.mFilterObjects={}}this.mSelectUIKeysMap[s]=c;this.mFilterObjects[s]=C}};
sap.uiext.inbox.InboxSecondaryFilters.prototype._getStatusFilter=function(f){return this.inboxUtils._getStatusFilters(f)};
sap.uiext.inbox.InboxSecondaryFilters.prototype._getPriorityFilter=function(f){return this.inboxUtils._getPriorityFilters(f)};
sap.uiext.inbox.InboxSecondaryFilters.prototype._getDueDateFilter=function(f){return this.inboxUtils._getDueDateFilters(f)};
sap.uiext.inbox.InboxSecondaryFilters.prototype._getStartDateFilter=function(f){return this.inboxUtils._getDateTimeFilters(f)};
sap.uiext.inbox.InboxSecondaryFilters.prototype.getFilterObjects=function(){return{filterOperatorMap:this.mFilterObjects,filtersAppliedMap:this.mFiltersToApplyMap}};
sap.uiext.inbox.InboxSecondaryFilters.prototype.getFilterUIKeys=function(){return this.mSelectUIKeysMap};
