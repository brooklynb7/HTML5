/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.model.xml.XMLPropertyBinding");jQuery.sap.require("sap.ui.model.PropertyBinding");sap.ui.model.PropertyBinding.extend("sap.ui.model.xml.XMLPropertyBinding",{constructor:function(m,p,c){sap.ui.model.PropertyBinding.apply(this,arguments);this.oValue=this._getValue()}});
sap.ui.model.xml.XMLPropertyBinding.prototype.getValue=function(){return this.oValue};
sap.ui.model.xml.XMLPropertyBinding.prototype._getValue=function(){var p=this.sPath.substr(this.sPath.lastIndexOf("/")+1);if(p=="__name__"){var P=this.oContext.split("/");return P[P.length-1]}return this.oModel.getProperty(this.sPath,this.oContext)};
sap.ui.model.xml.XMLPropertyBinding.prototype.setValue=function(v){if(this.oValue!=v){this.oModel.setProperty(this.sPath,v,this.oContext)}};
sap.ui.model.xml.XMLPropertyBinding.prototype.setContext=function(c){this.oContext=c;this.checkUpdate()};
sap.ui.model.xml.XMLPropertyBinding.prototype.checkUpdate=function(f){var v=this._getValue();if(v!==this.oValue||f){this.oValue=v;this._fireChange()}};
