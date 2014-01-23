/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.model.format.DateFormat");jQuery.sap.require("sap.ui.core.format.DateFormat");jQuery.sap.require("sap.ca.ui.utils.resourcebundle");
sap.ca.ui.model.format.DateFormat=function(){throw new Error()};
sap.ca.ui.model.format.DateFormat.getInstance=function(f,l){return this.getDateInstance(f,l)};
sap.ca.ui.model.format.DateFormat.getDateInstance=function(f,l){return this.createInstance(f,l,"Date")};
sap.ca.ui.model.format.DateFormat.getDateTimeInstance=function(f,l){return this.createInstance(f,l,"DateTime")};
sap.ca.ui.model.format.DateFormat.getTimeInstance=function(f,l){return this.createInstance(f,l,"Time")};
sap.ca.ui.model.format.DateFormat.createInstance=function(f,l,t){var F=jQuery.sap.newObject(this.prototype);switch(t){case"Date":if(!(f instanceof sap.ui.core.Locale)&&f){if(f.style&&f.style==="daysAgo"){f.style="medium";F.daysAgo=true}}F.innerFormat=sap.ui.core.format.DateFormat.getDateInstance(f,l);break;case"DateTime":F.innerFormat=sap.ui.core.format.DateFormat.getDateTimeInstance(f,l);break;case"Time":F.innerFormat=sap.ui.core.format.DateFormat.getTimeInstance(f,l);break}return F};
sap.ca.ui.model.format.DateFormat.prototype.format=function(d,u){d=this.convertToDate(d);if(this.daysAgo&&this.daysAgo===true){return this.formatDaysAgo(d,u)}else{return this.innerFormat.format(d,u)}};
sap.ca.ui.model.format.DateFormat.prototype.parse=function(v){return this.innerFormat.parse(v)};
sap.ca.ui.model.format.DateFormat.prototype.formatDaysAgo=function(d,u){var r;var a=0,t,T=new Date();var b=u?T.getUTCFullYear():T.getFullYear();var c=u?T.getUTCMonth():T.getMonth();var e=u?T.getUTCDate():T.getDate();var f=u?d.getUTCFullYear():d.getFullYear();var g=u?d.getUTCMonth():d.getMonth();var h=u?d.getUTCDate():d.getDate();var i=Date.UTC(b,c,e);var j=Date.UTC(f,g,h);t=i.valueOf()-j.valueOf();a=Math.floor(t/(24*60*60*1000));if(a==0){r=sap.ca.ui.utils.resourcebundle.getText("DateFormatter.Today")}else if(a==1){r=sap.ca.ui.utils.resourcebundle.getText("DateFormatter.Yesterday")}else if(a>1&&a<=6){r=sap.ca.ui.utils.resourcebundle.getText("DateFormatter.DaysAgo",[a])}else{r=this.innerFormat.format(d,u)}return r};
sap.ca.ui.model.format.DateFormat.prototype.convertToDate=function(d){var D=d;if(typeof d==="string"){if(d.indexOf("Date")!=-1){d=d.substring(d.indexOf("(")+1,d.indexOf(")"));d=new Number(d)}D=new Date(d)}return D};
