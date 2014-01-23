/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.base.Interface");
sap.ui.base.Interface=function(o,m){if(!o){return o}function c(o,M){return function(){var t=o[M].apply(o,arguments);return(t instanceof sap.ui.base.Object)?t.getInterface():t}}if(!m){return{}}var M;for(var i=0,a=m.length;i<a;i++){M=m[i];this[M]=c(o,M)}};
