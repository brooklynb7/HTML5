/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.model.json.JSONModel");jQuery.sap.require("sap.ui.model.Model");jQuery.sap.require("sap.ui.model.json.JSONPropertyBinding");jQuery.sap.require("sap.ui.model.json.JSONListBinding");jQuery.sap.require("sap.ui.model.json.JSONTreeBinding");sap.ui.model.Model.extend("sap.ui.model.json.JSONModel",{constructor:function(d){sap.ui.model.Model.apply(this,arguments);this.bCache=true;if(typeof d=="string"){this.loadData(d)}else if(d&&typeof d=="object"){this.setData(d)}},metadata:{publicMethods:["loadData","setData","getData","setJSON","getJSON","setProperty","forceNoCache"]}});
sap.ui.model.json.JSONModel.prototype.setData=function(d,m){if(m){this.oData=jQuery.extend(true,{},this.oData,d)}else{this.oData=d}this.checkUpdate()};
sap.ui.model.json.JSONModel.prototype.getData=function(){return this.oData};
sap.ui.model.json.JSONModel.prototype.setJSON=function(j,m){var J;try{J=jQuery.parseJSON(j);this.setData(J,m)}catch(e){jQuery.sap.log.fatal("The following problem occurred: JSON parse Error: "+e);this.fireParseError({url:"",errorCode:-1,reason:"",srcText:e,line:-1,linepos:-1,filepos:-1})}};
sap.ui.model.json.JSONModel.prototype.getJSON=function(){return JSON.stringify(this.oData)};
sap.ui.model.json.JSONModel.prototype.loadData=function(u,p,a,t,m,c,h){var b=this;if(a!==false){a=true}if(!t){t="GET"}if(c===undefined){c=this.bCache}this.fireRequestSent({url:u,type:t,async:a,headers:h,info:"cache="+c+";bMerge="+m});jQuery.ajax({url:u,async:a,dataType:'json',cache:c,data:p,headers:h,type:t,success:function(d){if(!d){jQuery.sap.log.fatal("The following problem occurred: No data was retrieved by service: "+u)}b.setData(d,m);b.fireRequestCompleted({url:u,type:t,async:a,headers:h,info:"cache=false;bMerge="+m})},error:function(X,d,e){jQuery.sap.log.fatal("The following problem occurred: "+d,X.responseText+","+X.status+","+X.statusText);b.fireRequestCompleted({url:u,type:t,async:a,headers:h,info:"cache=false;bMerge="+m});b.fireRequestFailed({message:d,statusCode:X.status,statusText:X.statusText,responseText:X.responseText})}})};
sap.ui.model.json.JSONModel.prototype.checkUpdate=function(f){var b=this.aBindings.slice(0);jQuery.each(b,function(i,B){B.checkUpdate(f)})};
sap.ui.model.json.JSONModel.prototype.bindProperty=function(p,c,P){var b=new sap.ui.model.json.JSONPropertyBinding(this,p,c,P);return b};
sap.ui.model.json.JSONModel.prototype.bindList=function(p,c,s,f,P){var b=new sap.ui.model.json.JSONListBinding(this,p,c,s,f,P);return b};
sap.ui.model.json.JSONModel.prototype.bindTree=function(p,c,f,P){var b=new sap.ui.model.json.JSONTreeBinding(this,p,c,f,P);return b};
sap.ui.model.json.JSONModel.prototype.createBindingContext=function(p,c,P,C){if(typeof c=="function"){C=c;c=null}if(typeof P=="function"){C=P;P=null}var s=this.resolve(p,c),n=s?this.getContext(s):undefined;C(n)};
sap.ui.model.json.JSONModel.prototype.destroyBindingContext=function(c){};
sap.ui.model.json.JSONModel.prototype.setProperty=function(p,v,c){var o=p.substring(0,p.lastIndexOf("/")),P=p.substr(p.lastIndexOf("/")+1);if(!o&&!c){c=this.oData}var O=this._getObject(o,c);O[P]=v;this.checkUpdate()};
sap.ui.model.json.JSONModel.prototype.getProperty=function(p,c){return this._getObject(p,c)};
sap.ui.model.json.JSONModel.prototype._getObject=function(p,c){var n=this.isLegacySyntax()?this.oData:null;if(c instanceof sap.ui.model.Context){n=this._getObject(c.getPath())}else if(c){n=c}if(!p){return n}var P=p.split("/"),i=0;if(!P[0]){n=this.oData;i++}while(n&&P[i]){n=n[P[i]];i++}return n};
sap.ui.model.json.JSONModel.prototype.updateBindings=function(f){this.checkUpdate(f)};
sap.ui.model.json.JSONModel.prototype.forceNoCache=function(f){this.bCache=!f};
