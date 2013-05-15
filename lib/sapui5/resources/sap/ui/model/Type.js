/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.model.Type");jQuery.sap.require("sap.ui.base.Object");sap.ui.base.Object.extend("sap.ui.model.Type",{constructor:function(){sap.ui.base.Object.apply(this,arguments);this.sName="Type"},metadata:{"abstract":true,publicMethods:["getName"]}});
sap.ui.model.Type.prototype.getName=function(){return this.sName};
