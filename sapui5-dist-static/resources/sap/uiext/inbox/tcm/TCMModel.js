/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.uiext.inbox.tcm.TCMModel");jQuery.sap.require("sap.uiext.inbox.tcm.fI.TCMFunctionImport");sap.ui.base.Object.extend("sap.uiext.inbox.tcm.TCMModel",{constructor:function(){sap.ui.base.Object.apply(this);this.oFunctionImport=undefined}});
sap.uiext.inbox.tcm.TCMModel.prototype.getFunctionImportHandler=function(){if(!this.oFunctionImport){this.oFunctionImport=new sap.uiext.inbox.tcm.fI.TCMFunctionImport()}return this.oFunctionImport};
