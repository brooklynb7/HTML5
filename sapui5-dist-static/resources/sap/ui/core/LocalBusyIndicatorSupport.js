/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.LocalBusyIndicatorSupport");
sap.ui.core.LocalBusyIndicatorSupport=function(){if(this===sap.ui.core.Control.prototype){this.setDelay=function(d){this.setBusyIndicatorDelay(d)}}else{jQuery.sap.log.error("Only controls can use the LocalBusyIndicator",this)}};
jQuery.sap.require("sap.ui.core.Element");
