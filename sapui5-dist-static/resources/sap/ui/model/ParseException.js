/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.model.ParseException");jQuery.sap.require("sap.ui.base.Exception");
sap.ui.model.ParseException=function(m){this.name="ParseException";this.message=m};
sap.ui.model.ParseException.prototype=jQuery.sap.newObject(sap.ui.base.Exception.prototype);
