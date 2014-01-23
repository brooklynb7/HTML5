/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
// Utility functions for Substitution Rules Manager
jQuery.sap.declare("sap.uiext.inbox.SubstitutionRulesManagerUtils");

sap.uiext.inbox.SubstitutionRulesManagerUtils = function() {
	throw new Error();
};

sap.uiext.inbox.SubstitutionRulesManagerUtils._getText = function(value, isSubstitutedUserRules, isActiveSubstRule,
		bIsRecieveTasks, beginDate, endDate) {

	var bIsOutDated = this._isOutDated(endDate);
	var bInCurrentDateRange = (!this._isFutureDate(beginDate) && !bIsOutDated);

	var _oBundle = sap.ui.getCore().getLibraryResourceBundle("sap.uiext.inbox");
	// Eliminate out dated tasks
	if (bIsOutDated) {
		return "";
	} else {
		if (isSubstitutedUserRules) { // For My substitute rules
			if (isActiveSubstRule) { // If the rule is enabled
				if (bInCurrentDateRange) {
					return value + " " + _oBundle.getText("SUBSTIUTION_RULE_CURRENTLY_RECEIVING_TASKS");
				} else {// End
					return value + " " + _oBundle.getText("SUBSTIUTION_RULE_WILL_RECEIVE_TASKS_FROM") + " "
							+ this._getFormattedDate(beginDate);
				}
			} else {
				if (bIsRecieveTasks) {
					if (bInCurrentDateRange) {
						return _oBundle.getText("SUBSTITUTION_RULE_ENABLE_FOR") + " " + value + " "
								+ _oBundle.getText("SUBSTITUTION_RULE_TO_RECIEVE_TASKS");
					} else {
						return _oBundle.getText("SUBSTITUTION_RULE_ENABLE_FOR") + " " + value + " "
								+ _oBundle.getText("SUBSTITUTION_RULE_TO_RECIEVE_TASKS") + " "
								+ _oBundle.getText("SUBSTITUTION_RULE_FROM_TXT") + " " + this._getFormattedDate(beginDate);
					}
				} else {
					return value + " " + _oBundle.getText("SUBSTIUTION_RULE_HAS_NOT_ACTIVATED_YOUR");
				}
			}
		} else {// For I am substituting rules
			if (isActiveSubstRule) {
				if (bInCurrentDateRange) {
					return _oBundle.getText("SUBSTIUTION_RULE_CURRENTLY_RECEIVING_TASKS_FROM") + " " + value;
				} else {
					return _oBundle.getText("SUBSTIUTION_RULE_YOU_WILL_RECEIVE_TASKS_FROM") + " " + value + " "
							+ _oBundle.getText("SUBSTITUTION_RULE_FROM_TXT") + " " + this._getFormattedDate(beginDate);
				}
			} else {
				if (bIsRecieveTasks) {
					if (bInCurrentDateRange) {
						return _oBundle.getText("SUBSTIUTION_RULE_TURN_ON_TO_RECEIVE_TASKS_FROM") + " " + value;
					} else {
						return _oBundle.getText("SUBSTIUTION_RULE_TURN_ON_TO_RECEIVE_TASKS_FROM") + " " + value + " "
								+ _oBundle.getText("SUBSTITUTION_RULE_FROM_TXT") + " " + this._getFormattedDate(beginDate);
					}
				} else {
					if(bInCurrentDateRange){
						return _oBundle.getText("SUBSTIUTION_RULE_IS_CURRENTLY_DISABLED_BY") + " " + value;
					}else{
						return _oBundle.getText("SUBSTIUTION_RULE_YOU_WILL_RECEIVE_TASKS_FROM") + " " + value + " "
								+ _oBundle.getText("SUBSTITUTION_RULE_FROM_TXT") + " " + this._getFormattedDate(beginDate);
					}
				}
			}
		}
	}
};

sap.uiext.inbox.SubstitutionRulesManagerUtils._isOutDated = function(date) {
	if (date !== null && date !== '') {
		if (this._getTimeDiff(date) < 0) {
			return true;
		}
	}
	return false;
};

sap.uiext.inbox.SubstitutionRulesManagerUtils._isFutureDate = function(oDate) {
	if (oDate !== null && oDate !== '') {
		if (this._getTimeDiff(oDate) > 0 && !this._isCurrentDate(oDate)) {
			return true;
		}
	}
	return false;
};

sap.uiext.inbox.SubstitutionRulesManagerUtils._isCurrentDate = function(oDate) {
	if (oDate !== null && oDate !== '') {
		var oCurrentDate = new Date();
		if ((oCurrentDate.getDate() == oDate.getDate()) && (oCurrentDate.getMonth() == oDate.getMonth())
				&& (oCurrentDate.getYear() == oDate.getYear())) {
			return true;
		}
	}
	return false;
};

sap.uiext.inbox.SubstitutionRulesManagerUtils._getStatus = function(isSubstitutedUserRules, isActiveSubstRule,
		beginDate, endDate) {
	var bIsOutDated = this._isOutDated(endDate);
	var bInCurrentDateRange = (!this._isFutureDate(beginDate) && !bIsOutDated);

	var _oBundle = sap.ui.getCore().getLibraryResourceBundle("sap.uiext.inbox");

	// Eliminate out dated tasks
	if (bIsOutDated) {
		return _oBundle.getText("SUBSTITUTION_OUT_OF_DATE_RANGE");
	} else {
		if (isSubstitutedUserRules) { // For My substitute rules
			if (isActiveSubstRule) { // If the rule is enabled
				if (bInCurrentDateRange) {
					return _oBundle.getText("SUBSTITUTION_RULE_ACTIVE_FOR_LABEL") + " "
							+ this._getNoOfDays(isActiveSubstRule, beginDate, endDate);
				} else {// End
					return _oBundle.getText("SUBSTITUTION_RULE_ACTIVE_IN_LABEL") + " "
							+ this._getNoOfDays(isActiveSubstRule, beginDate, endDate);
				}
			} else {
				return _oBundle.getText("SUBSTITUTION_DISABLED_STATUS");
			}
			// TODO: Re-factor: Code duplication.
		} else {
			if (isActiveSubstRule) {
				if (bInCurrentDateRange) {
					return _oBundle.getText("SUBSTITUTION_RULE_ACTIVE_FOR_LABEL") + " "
							+ this._getNoOfDays(isActiveSubstRule, beginDate, endDate);
				} else {
					return _oBundle.getText("SUBSTITUTION_RULE_ACTIVE_IN_LABEL") + " "
							+ this._getNoOfDays(isActiveSubstRule, beginDate, endDate);
				}
			} else {
				return _oBundle.getText("SUBSTITUTION_DISABLED_STATUS");
			}
		}
	}
};

sap.uiext.inbox.SubstitutionRulesManagerUtils._getNoOfDays = function(isActiveSubstRule, startDate, endDate) {
	var _oBundle = sap.ui.getCore().getLibraryResourceBundle("sap.uiext.inbox");
	var timeInDaysTxt = ''; // TODO Use Service.
	if (isActiveSubstRule) {
		if (endDate !== null && endDate !== '') {
			var timeDiff = this._getTimeDiff(endDate) / (1000 * 60 * 60 * 24);
			if (timeDiff > 1) {
				var sNoOfDays = Math.floor(timeDiff);
				if (sNoOfDays === 1) {
					return sNoOfDays + " " + _oBundle.getText("SUBSTIUTION_RULE_IN_DAY");
				} else {
					return sNoOfDays + " " + _oBundle.getText("SUBSTIUTION_RULE_IN_MORE_DAYS");
				}
			} else if (timeDiff > 0) {
				return Math.ceil(timeDiff) + " " + _oBundle.getText("SUBSTIUTION_RULE_IN_DAY");
			}
		}
		return "";
	} else {
		if (startDate !== null && startDate !== '') {
			var timeDiff = this._getTimeDiff(startDate) / (1000 * 60 * 60 * 24);
			if (timeDiff > 1) {
				var sNoOfDays = Math.floor(timeDiff);
				if (sNoOfDays === 1) {
					return sNoOfDays + " " + _oBundle.getText("SUBSTIUTION_RULE_IN_DAY");
				} else {
					return sNoOfDays + " " + _oBundle.getText("SUBSTIUTION_RULE_IN_DAYS");
				}
			} else if (timeDiff > 0) {
				return Math.ceil(timeDiff) + " " + _oBundle.getText("SUBSTIUTION_RULE_IN_DAY");
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
	if (oDate.getMonth() < 9) {
		sToday = sToday + "0";
	}
	sToday = sToday + String(oDate.getMonth() + 1);
	if (oDate.getDate() < 9) {
		sToday = sToday + "0";
	}
	sToday = sToday + String(oDate.getDate());
	return sToday;
};

sap.uiext.inbox.SubstitutionRulesManagerUtils._getTimeDiff = function(endDate) {
	var today = new Date();
	var offset = today.getTimezoneOffset() * 60 * 1000;
	var deadline = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), 24, 00, 00);
	var diff = deadline.getTime() - (today.getTime());
	return diff;
};

sap.uiext.inbox.SubstitutionRulesManagerUtils._getTimeZoneOffset = function() {
	return undefined;
};
