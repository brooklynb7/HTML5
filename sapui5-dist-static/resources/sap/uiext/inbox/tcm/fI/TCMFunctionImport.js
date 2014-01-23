/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.uiext.inbox.tcm.fI.TCMFunctionImport");jQuery.sap.require("sap.uiext.inbox.tcm.fI.TCMFunctionImportMetaData");sap.ui.base.Object.extend("sap.uiext.inbox.tcm.fI.TCMFunctionImport",{constructor:function(){sap.ui.base.Object.apply(this);this.sTcmServiceURL=undefined;this.oHeaders={};this.ofIMetadata=sap.uiext.inbox.tcm.fI.TCMFunctionImportMetaData}});
sap.uiext.inbox.tcm.fI.TCMFunctionImport.prototype.setHeaders=function(h){this.oHeaders=h};
sap.uiext.inbox.tcm.fI.TCMFunctionImport.prototype.getHeaders=function(){return this.oHeaders};
sap.uiext.inbox.tcm.fI.TCMFunctionImport.prototype.setServiceURL=function(s){this.sTcmServiceURL=s};
sap.uiext.inbox.tcm.fI.TCMFunctionImport.prototype.getServiceURL=function(){return this.sTcmServiceURL};
sap.uiext.inbox.tcm.fI.TCMFunctionImport.prototype.callSearchUsers=function(p,s,e){var S=this.ofIMetadata.SEARCHUSERS;var u=this._createURLParamsArray(p,S);var r=this._createRequest(S.name,u,false,S.httpMethod);return OData.request(r,s,e)};
sap.uiext.inbox.tcm.fI.TCMFunctionImport.prototype._createURLParamsArray=function(p,f){var t=this;var F=f.params,u=[],U;var s,a,P;jQuery.each(F,function(i,o){s=o.name;a=o.type;P=p[s];if(P){U=s+"="+t._formatParamValue(P,a);u.push(U)}else{if(o.nullable){jQuery.sap.log.warning('No parameter Value provided for a non nullable input paramater for function Import:'+f.name)}}});return u};
sap.uiext.inbox.tcm.fI.TCMFunctionImport.prototype._createRequest=function(p,u,a,h){var U=this.sTcmServiceURL;if(p){if(!jQuery.sap.startsWith(p,"/")){U+="/"}U+=p}if(u&&u.length>0){U+="?"+u.join("&")}return{requestUri:U,headers:this.oHeaders,method:h,async:a,user:this.sUser,password:this.sPassword}};
sap.uiext.inbox.tcm.fI.TCMFunctionImport.prototype._formatParamValue=function(p,f){if(!this.oDateTimeFormat){this.oDateTimeFormat=sap.ui.core.format.DateFormat.getDateInstance({pattern:"'datetime'''yyyy-MM-dd'T'HH:mm:ss''"});this.oDateTimeOffsetFormat=sap.ui.core.format.DateFormat.getDateInstance({pattern:"'datetimeoffset'''yyyy-MM-dd'T'HH:mm:ss'Z'''"});this.oTimeFormat=sap.ui.core.format.DateFormat.getTimeInstance({pattern:"'time'''HH:mm:ss''"})}var F;switch(f){case"Edm.String":F="'"+String(p).replace(/'/g,"''")+"'";break;case"Edm.Time":F="time'"+p+"'";break;case"Edm.DateTime":F=this.oDateTimeFormat.format(new Date(p),true);break;case"Edm.DateTimeOffset":F=this.oDateTimeOffsetFormat.format(new Date(p),true);break;case"Edm.Guid":F="guid'"+p+"'";break;case"Edm.Decimal":F=p+"M";break;case"Edm.Int64":F=p+"L";break;case"Edm.Single":F=p+"f";break;case"Edm.Binary":F="binary'"+p+"'";break;default:F=new String(p);break}return F};
