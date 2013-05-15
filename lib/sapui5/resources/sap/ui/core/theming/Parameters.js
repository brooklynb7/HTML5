/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.theming.Parameters");(function(){sap.ui.core.theming.Parameters={};var p=null;var r=function(){p=null};var g=function(){if(!p){var j=[];jQuery("link[id^=sap-ui-theme-]").each(function(){j.push(this.href.replace(/\/library([^\/.]*)\.(css|less)$/,"/library-parameters$1.json"))});p={};for(var i=0;i<j.length;i++){var u=j[i];var R=jQuery.sap.sjax({url:u,dataType:'json'});if(R.success){var o=(typeof R.data=="string")?jQuery.parseJSON(R.data):R.data;p=jQuery.extend(p,o)}else{jQuery.sap.log.warning("Could not load theme parameters from: "+u)}}}return p};sap.ui.core.theming.Parameters.get=function(n){if(arguments.length==1){return g()[n]}else if(arguments.length==0){var c={};return jQuery.extend(c,g())}else{return undefined}};sap.ui.core.theming.Parameters.reset=function(){r()}}());
