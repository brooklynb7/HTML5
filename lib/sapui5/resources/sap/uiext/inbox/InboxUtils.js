/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.uiext.inbox.InboxUtils");
sap.uiext.inbox.InboxUtils=function(){throw new Error()};
sap.uiext.inbox.InboxUtils._getStatusFilters=function(v,p){switch(v){case"READY":return new sap.ui.model.Filter("Status",sap.ui.model.FilterOperator.EQ,"READY");case"RESERVED":return new sap.ui.model.Filter("Status",sap.ui.model.FilterOperator.EQ,"RESERVED");case"IN_PROGRESS":return new sap.ui.model.Filter("Status",sap.ui.model.FilterOperator.EQ,"IN_PROGRESS")}};
sap.uiext.inbox.InboxUtils._getPriorityFilters=function(v,p){switch(v){case"LOW":return new sap.ui.model.Filter("Priority",sap.ui.model.FilterOperator.EQ,"LOW");case"MEDIUM":return new sap.ui.model.Filter("Priority",sap.ui.model.FilterOperator.EQ,"MEDIUM");case"HIGH":return new sap.ui.model.Filter("Priority",sap.ui.model.FilterOperator.EQ,"HIGH");case"VERY_HIGH":return new sap.ui.model.Filter("Priority",sap.ui.model.FilterOperator.EQ,"VERY_HIGH")}};
sap.uiext.inbox.InboxUtils._getDueDateFilters=function(v,p){var f=this._getFormattedDateTimeOff(0);var a=undefined;switch(v){case"Today":a=this._getFormattedDueDateTimeOff(1);case"Next_7_days":a=this._getFormattedDueDateTimeOff(7);case"Next_15_days":a=this._getFormattedDueDateTimeOff(15);case"Next_30_days":a=this._getFormattedDueDateTimeOff(30)}return new sap.ui.model.Filter("CompletionDeadLine",[{operator:sap.ui.model.FilterOperator.LE,value1:a.toUTCString()},{operator:sap.ui.model.FilterOperator.GE,value1:f.toUTCString()}],true)};
sap.uiext.inbox.InboxUtils._getDateTimeFilters=function(v,p){var f=undefined;switch(v){case"Today":f=this._getFormattedDateTimeOff(0,false);case"Last_7_days":f=this._getFormattedDateTimeOff(7,false);case"Last_15_days":f=this._getFormattedDateTimeOff(15,false);case"Last_30_days":f=this._getFormattedDateTimeOff(30,false)}return new sap.ui.model.Filter("CreatedOn",sap.ui.model.FilterOperator.GE,f.toUTCString())};
sap.uiext.inbox.InboxUtils._getFormattedDueDateTimeOff=function(s){var m=new Date();m.setDate(m.getDate()+s);m.setMinutes(0);m.setHours(0);m.setSeconds(0);return m};
sap.uiext.inbox.InboxUtils._getFormattedDateTimeOff=function(s,i){var m=new Date();m.setDate(m.getDate()-s);if(!i){m.setMinutes(0);m.setHours(0);m.setSeconds(0)}return m};
sap.uiext.inbox.InboxUtils.inArray=function(k,m){var a=-1;jQuery.each(m,function(i,b){if(b[k]===k){a=i;return false}});return a};
sap.uiext.inbox.InboxUtils._dateFormat=function(d){if(d!=undefined&&typeof(d)=='string'&&d!=""){var a;if(d.indexOf('Date')!=-1){a=new Date();a.setTime(d.substring((d.indexOf("(")+1),d.indexOf(")")))}else{a=new Date(d.substring((d.indexOf("'")+1),d.length-1))}d=a}if(d!=undefined&&d!=""){var i=sap.ui.core.format.DateFormat.getDateInstance({style:"medium"});return i.format(d)}return""};
sap.uiext.inbox.InboxUtils.scrub=function(d){d=decodeURIComponent(d);d=d.replace(/[-:.\/]/g,"");d=d.replace(/-/g,"--");d=d.replace(/\s+/g,"-");if(!(/^([A-Za-z_][-A-Za-z0-9_.:]*)$/.test(d))){if(/^[^A-Za-z_]/.test(d)){d=d.replace(/^[^A-Za-z_]/,"_")}d.replace(/[^-\w_.:]/g,"_")}return d};
sap.uiext.inbox.InboxUtils.setCookieValue=function(c,v,e){document.cookie=c+"="+escape(v)};
sap.uiext.inbox.InboxUtils.getCookieValue=function(c){var i,x,y,C=document.cookie.split(";");for(i=0;i<C.length;i++){x=C[i].substr(0,C[i].indexOf("="));y=C[i].substr(C[i].indexOf("=")+1);x=x.replace(/^\s+|\s+$/g,"");if(x==(c)){return unescape(y)}}};
sap.uiext.inbox.InboxUtils.deleteCookie=function(c){var d=new Date();document.cookie=c+"="+";expires=Thu, 01-Jan-1970 00:00:01 GMT"};
