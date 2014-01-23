/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.model.FormatException");jQuery.sap.require("sap.ui.base.Exception");
sap.ui.model.FormatException=function(m){this.name="FormatException";this.message=m};
sap.ui.model.FormatException.prototype=jQuery.sap.newObject(sap.ui.base.Exception.prototype);
