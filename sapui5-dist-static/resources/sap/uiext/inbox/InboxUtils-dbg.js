/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
// Utility functions for Inbox
jQuery.sap.declare("sap.uiext.inbox.InboxUtils");

jQuery.sap.require("sap.ui.model.odata.Filter");


sap.uiext.inbox.InboxUtils = function(){
	throw new Error();
};

sap.uiext.inbox.InboxUtils._getStatusFilters = function(sValue) {
	switch(sValue){
	case "READY":
		 return new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.EQ, "READY");
	case "RESERVED":
		return new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.EQ, "RESERVED");
	case "IN_PROGRESS":
		return new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.EQ, "IN_PROGRESS");
	}
};


sap.uiext.inbox.InboxUtils._getPriorityFilters = function(sValue) {
	switch(sValue){
		case "LOW":
			return new sap.ui.model.Filter("Priority", sap.ui.model.FilterOperator.EQ, "LOW");
		case "MEDIUM":
			return new sap.ui.model.Filter("Priority", sap.ui.model.FilterOperator.EQ, "MEDIUM");
		case "HIGH":
			return new sap.ui.model.Filter("Priority", sap.ui.model.FilterOperator.EQ, "HIGH");
		case "VERY_HIGH":
			return new sap.ui.model.Filter("Priority", sap.ui.model.FilterOperator.EQ, "VERY_HIGH");
	}
};


sap.uiext.inbox.InboxUtils._getDueDateFilters = function(sValue) {
		var fromDate = this._getFormattedDateTimeOff(0);
		var formD = undefined;
		switch(sValue){
			case "Today":
				formD = this._getFormattedDueDateTimeOff(1);
				break;
			case "Next_7_days":
				formD = this._getFormattedDueDateTimeOff(7);
				break;
			case "Next_15_days":
				formD = this._getFormattedDueDateTimeOff(15);
				break;
			case "Next_30_days":
				formD = this._getFormattedDueDateTimeOff(30);
				break;
		}
		return new sap.ui.model.odata.Filter("CompletionDeadLine", [{operator:sap.ui.model.FilterOperator.LE, value1: formD.toUTCString()},{operator:sap.ui.model.FilterOperator.GE, value1:fromDate.toUTCString()}], true);
};

sap.uiext.inbox.InboxUtils._getDateTimeFilters = function(sValue) {
	var formD = undefined;
	switch(sValue){
		case "Today":
			formD = this._getFormattedDateTimeOff(0, false);
			break;
		case "Last_7_days":
			formD = this._getFormattedDateTimeOff(7, false);
			break;
		case "Last_15_days":
			formD = this._getFormattedDateTimeOff(15, false);
			break;
		case "Last_30_days":
			formD = this._getFormattedDateTimeOff(30, false);
			break;
	}
	return new sap.ui.model.Filter("CreatedOn", sap.ui.model.FilterOperator.GE, formD.toUTCString());
};


//TODO: Inbox should use these utility methods.
sap.uiext.inbox.InboxUtils._getFormattedDueDateTimeOff = function(subT) {
  var myDate = new Date();
  myDate.setDate(myDate.getDate() + subT);
  myDate.setMinutes(0);
  myDate.setHours(0);
  myDate.setSeconds(0);
  return myDate;
};


sap.uiext.inbox.InboxUtils._getFormattedDateTimeOff = function(subT, isNow) {
	var myDate = new Date();
	myDate.setDate(myDate.getDate() - subT);
	if(!isNow){
		myDate.setMinutes(0);
		myDate.setHours(0);
		myDate.setSeconds(0);
	}
	return myDate;
};

sap.uiext.inbox.InboxUtils.inArray = function (key, mapArray){
	var index = -1;
	jQuery.each(mapArray, function(i, map) {
		if(map[key] === key){
			index = i; 
			return false;
		}
	});
	return index;
};

sap.uiext.inbox.InboxUtils._dateFormat = function(dateValue) {
	if (dateValue != undefined && typeof (dateValue) == 'string' && dateValue != "") {
		var date;
		if (dateValue.indexOf('Date') != -1) {
			date = new Date();
			date.setTime(dateValue.substring((dateValue.indexOf("(") + 1), dateValue.indexOf(")")));
		} else {
			date = new Date(dateValue.substring((dateValue.indexOf("'") + 1), dateValue.length - 1));
		}
		dateValue = date;
	}

	if (dateValue != undefined && dateValue != "") {
		var ins = sap.ui.core.format.DateFormat.getDateInstance({
			style : "medium"
		});
		return ins.format(dateValue);
	}
		//FOR Time Zone Support, do not forget to add timeoffset property in inbox control.
		/*var utc = Date.UTC(dateValue.getUTCFullYear(),dateValue.getUTCMonth(),dateValue.getUTCDate(),dateValue.getUTCHours(),dateValue.getUTCMinutes(),dateValue.getUTCSeconds(),dateValue.getUTCMilliseconds())
		var inboxInstance = this;
		while(inboxInstance != undefined && !(inboxInstance instanceof sap.uiext.inbox.Inbox))
		{
			inboxInstance = inboxInstance.getParent();
		}
		var localTime =  utc + inboxInstance.getTimezoneOffset() + (new Date().getTimezoneOffset()*60*1000);
		var ins = sap.ui.core.format.DateFormat.getDateTimeInstance({
			style : "medium"
		});
		return ins.format(new Date(localTime));*/
	return "";
};


sap.uiext.inbox.InboxUtils.scrub = function(data) {
	data = decodeURIComponent(data);
	data = data.replace(/[-:.\/]/g, "");
	data = data.replace(/-/g, "--");
	data = data.replace(/\s+/g, "-");
	if(!(/^([A-Za-z_][-A-Za-z0-9_.:]*)$/.test(data)))
	{
		if( /^[^A-Za-z_]/.test(data)){
			data = data.replace(/^[^A-Za-z_]/, "_");
		}
		data.replace(/[^-\w_.:]/g, "_");
	}
	return data;
};

sap.uiext.inbox.InboxUtils.setCookieValue = function(cookieName, value, exDays) {
    document.cookie = cookieName + "=" + escape(value);// c_value;
};

sap.uiext.inbox.InboxUtils.getCookieValue = function(cookieName) {
    var i, x, y, aCookies = document.cookie.split(";");
    for (i = 0; i < aCookies.length; i++) {
                    x = aCookies[i].substr(0, aCookies[i].indexOf("="));
                    y = aCookies[i].substr(aCookies[i].indexOf("=") + 1);
                    x = x.replace(/^\s+|\s+$/g, "");
                    if (x == (cookieName)) {
                                    return unescape(y);
                    }
    }
};

sap.uiext.inbox.InboxUtils.deleteCookie = function(cookieName) {
    var d = new Date();
    document.cookie = cookieName + "=" + ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
};

sap.uiext.inbox.InboxUtils.reselectRowsinTable = function(reselectIndices,tableElement){
	var iMin = reselectIndices[0];
	for ( var i = 0; i < reselectIndices.length; i++) {
		tableElement.addSelectionInterval(reselectIndices[i],reselectIndices[i]);
		iMin = Math.min(reselectIndices[i], iMin);
	}
	if(iMin){
		var iFocusRow = Math.floor(iMin/10) * 10;
		tableElement.setFirstVisibleRow(iFocusRow);
	}
};

sap.uiext.inbox.InboxUtils.deSelectOtherActionButtonsinStreamView = function(oToggleButtonElem){
	var oToggleButtonParentRow = oToggleButtonElem.getParent().getParent();
	if(oToggleButtonParentRow){
		var oParentRowCells = oToggleButtonParentRow.getCells();
		var iNumberOfCells = oParentRowCells.length;
		 for(var i=0; i < iNumberOfCells; i++){
			 var oActionToggleButton = oParentRowCells[i].getContent()[0];
			 if(oActionToggleButton && oActionToggleButton !== oToggleButtonElem && oActionToggleButton instanceof sap.ui.commons.ToggleButton){
				 if(oActionToggleButton.getVisible()){
					 oActionToggleButton.setPressed(false);
					 oActionToggleButton.firePress(false);
				 }
			 }
		 }
	}
};