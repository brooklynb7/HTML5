/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
// Utility functions for Substitution Rules Manager
jQuery.sap.declare("sap.uiext.inbox.SubstitutionRulesManagerUtils");


sap.uiext.inbox.SubstitutionRulesManagerUtils = function(){
	throw new Error();
};



sap.uiext.inbox.SubstitutionRulesManagerUtils._getText = function(value, isSubstitutedUserRules, isActiveSubstRule, enabled, mode, beginDate, endDate) {
	var _oBundle = sap.ui.getCore().getLibraryResourceBundle("sap.uiext.inbox");
	//Eliminate out dated tasks
	if(this._isOutDated(endDate)){
		return "";
	}else{
		if(isSubstitutedUserRules){ // For My substitute rules
			if(enabled){ //If the rule is enabled
				if(isActiveSubstRule){ //START: If the rule is active (To be active, 1. rule (mode==RECEIVE_TASKS) has to be enabled and in current date or future date range. 2.rule (mode==FILL_IN_FOR_ME) has to be enabled and in current date or future date range and takenOver set to true.  
					return value +" "+ _oBundle.getText("SUBSTIUTION_RULE_CURRENTLY_RECEIVING_TASKS"); 
				}else{//End
					return value +" "+ _oBundle.getText("SUBSTIUTION_RULE_WILL_RECEIVE_TASKS_FROM")+" "+ this._getFormattedDate(beginDate); 
				}
			}else{
				if(mode === 'RECEIVE_TASKS'){
					return _oBundle.getText("SUBSTIUTION_RULE_IS_CURRENTLY_DISABLED_BY_YOU");
				}else{
					return value +" "+_oBundle.getText("SUBSTIUTION_RULE_HAS_NOT_ACTIVATED_YOUR"); 
				}
			}
		}else{//For I am substituting rules
			if(enabled){
				if(isActiveSubstRule){
					return _oBundle.getText("SUBSTIUTION_RULE_CURRENTLY_RECEIVING_TASKS_FROM")+" "+ value;
				}else{
					return _oBundle.getText("SUBSTIUTION_RULE_YOU_WILL_RECEIVE_TASKS_FROM")+" "+ value;
				}
			}else{
				if(mode === 'RECEIVE_TASKS'){
					return _oBundle.getText("SUBSTIUTION_RULE_IS_CURRENTLY_DISABLED_BY")+" "+value;
				}else{
					return _oBundle.getText("SUBSTIUTION_RULE_TURN_ON_TO_RECEIVE_TASKS_FROM")+" "+ value;
				}
			}
		}
	}
};

sap.uiext.inbox.SubstitutionRulesManagerUtils._isOutDated = function(endDate){
	if(endDate !== null && endDate !== ''){
		if(this._getTimeDiff(endDate) < 0){
			return true;
		}
	}
	return false;
};

sap.uiext.inbox.SubstitutionRulesManagerUtils._isFutureDate = function(endDate){
	if(endDate !== null && endDate !== ''){
		if(this._getTimeDiff(endDate) > 0){
			return true;
		}
	}
	return false;
};

sap.uiext.inbox.SubstitutionRulesManagerUtils._getStatus = function(isSubstitutedUserRules, isActiveSubstRule, enabled, mode, beginDate, endDate) {
	//Eliminate out dated tasks
	var _oBundle = sap.ui.getCore().getLibraryResourceBundle("sap.uiext.inbox");
	if(this._isOutDated(endDate)){
		return _oBundle.getText("SUBSTITUTION_OUT_OF_DATE_RANGE");
	}else{
		if(isSubstitutedUserRules){ // For My substitute rules
			if(enabled){ //If the rule is enabled
				if(isActiveSubstRule){ //START: If the rule is active (To be active, 1. rule (mode==RECEIVE_TASKS) has to be enabled and in current date or future date range. 2.rule (mode==FILL_IN_FOR_ME) has to be enabled and in current date or future date range and takenOver set to true.  
					return _oBundle.getText("SUBSTITUTION_RULE_ACTIVE_FOR_LABEL")+" "+ this._getNoOfDays(isActiveSubstRule,beginDate, endDate); //TODO: Externalize
				}else{//End
					return _oBundle.getText("SUBSTITUTION_RULE_ACTIVE_IN_LABEL")+" "+this._getNoOfDays(isActiveSubstRule,beginDate, endDate);//TODO: Externalize
				}
			}else{
				return _oBundle.getText("SUBSTITUTION_DISABLED_STATUS");//TODO: Externalize
			}
		}else{
			if(enabled){
				if(isActiveSubstRule){
					return _oBundle.getText("SUBSTITUTION_RULE_ACTIVE_FOR_LABEL")+" "+ this._getNoOfDays(isActiveSubstRule,beginDate, endDate);//TODO: Externalize
				}else{
					return _oBundle.getText("SUBSTITUTION_RULE_ACTIVE_IN_LABEL")+" "+this._getNoOfDays(isActiveSubstRule,beginDate, endDate);//TODO: Externalize
				}
			}else{
				return _oBundle.getText("SUBSTITUTION_DISABLED_STATUS");//TODO: Externalize
			}
		}
	}
};

sap.uiext.inbox.SubstitutionRulesManagerUtils._getNoOfDays = function(isActiveSubstRule, startDate, endDate) {
var _oBundle = sap.ui.getCore().getLibraryResourceBundle("sap.uiext.inbox");
var timeInDaysTxt = ''; //TODO Use Service. 
if(isActiveSubstRule){
		if(endDate !== null && endDate !== ''){
			var timeDiff = this._getTimeDiff(endDate)/(1000*60*60*24);
			if(timeDiff > 1) {
				var sNoOfDays = Math.floor(timeDiff);
				if(sNoOfDays === 1) {
					return sNoOfDays+" "+_oBundle.getText("SUBSTIUTION_RULE_IN_DAY");//TODO: Externalize
				}else{
					return sNoOfDays+" "+_oBundle.getText("SUBSTIUTION_RULE_IN_MORE_DAYS");//TODO: Externalize
				}
			} else if (timeDiff > 0){
				return Math.ceil(timeDiff)+" "+_oBundle.getText("SUBSTIUTION_RULE_IN_DAY");	
			}
		}
		return ""; 
}else{
		if(startDate !== null && startDate !== ''){
			var timeDiff = this._getTimeDiff(startDate)/(1000*60*60*24);
			if(timeDiff > 1) {
				var sNoOfDays = Math.floor(timeDiff);
				if(sNoOfDays === 1) {
					return sNoOfDays+" "+_oBundle.getText("SUBSTIUTION_RULE_IN_DAY");//TODO: Externalize
				}else{
					return sNoOfDays+" "+_oBundle.getText("SUBSTIUTION_RULE_IN_DAYS");//TODO: Externalize
				}
			} else if (timeDiff > 0){
				return Math.ceil(timeDiff)+" "+_oBundle.getText("SUBSTIUTION_RULE_IN_DAY");	
			}
		}
		return "";
}
};

sap.uiext.inbox.SubstitutionRulesManagerUtils._getFormattedDate = function(dateValue) {
	var ins = sap.ui.core.format.DateFormat.getDateInstance({
		style : "medium"
	});
	if (dateValue != undefined && dateValue != "") {
	return ins.format(dateValue);
	}
};

sap.uiext.inbox.SubstitutionRulesManagerUtils._getTodaysDateinYYYYMMDD = function() {
	var oDate = new Date();
    var sToday = String(oDate.getFullYear());
    if(oDate.getMonth()<9){
    	sToday = sToday+"0";
    }
    sToday = sToday+String(oDate.getMonth()+1);
    if(oDate.getDate()<9){
    	sToday = sToday+"0";
    }
    sToday = sToday+String(oDate.getDate());
    return sToday;
};

sap.uiext.inbox.SubstitutionRulesManagerUtils._getTimeDiff = function(endDate){
		var today = new Date();
		var offset = today.getTimezoneOffset() * 60 * 1000;
		var deadline = new Date(endDate.getFullYear(),endDate.getMonth(),endDate.getDate(),24,00,00);
		var diff =  deadline.getTime() - (today.getTime());
		return diff;
};


sap.uiext.inbox.SubstitutionRulesManagerUtils._getTimeZoneOffset = function(){
	return undefined;
};

