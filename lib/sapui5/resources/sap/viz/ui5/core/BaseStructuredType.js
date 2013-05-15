/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.core.BaseStructuredType");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.viz.ui5.core.BaseStructuredType",{metadata:{"abstract":true,library:"sap.viz"}});
sap.viz.ui5.core.BaseStructuredType.prototype._getOrCreate=function(n){var o=this.getAggregation(n);if(!o){var a=this.getMetadata().getAggregations()[n];jQuery.sap.require(a.type);var F=jQuery.sap.getObject(a.type);o=new F();this.setAggregation(n,o)}return o};
sap.viz.ui5.core.BaseStructuredType.prototype._getOptions=function(){var m=this.getMetadata(),o={},p,d,a,n,v;function t(n){return n==='toolTip'?'tooltip':n}m.getJSONKeys();var p=m.getAllProperties();var d=m.getPropertyDefaults();for(n in p){if(p[n]._oParent===m){v=this.getProperty(n);if(v!==d[n]){o[t(n)]=v}}}var a=m.getAllAggregations();for(n in a){if(a[n]._oParent==m){v=this.getAggregation(n,null);if(v!==null){o[t(n)]=v._getOptions()}}}return o};
