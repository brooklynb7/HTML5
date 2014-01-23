/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.model.ValidateException");jQuery.sap.require("sap.ui.base.Exception");
sap.ui.model.ValidateException=function(m,v){this.name="ValidateException";this.message=m;this.violatedConstraints=v};
sap.ui.model.ValidateException.prototype=jQuery.sap.newObject(sap.ui.base.Exception.prototype);
