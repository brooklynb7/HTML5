/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.model.json.JSONPropertyBinding");jQuery.sap.require("sap.ui.model.PropertyBinding");sap.ui.model.PropertyBinding.extend("sap.ui.model.json.JSONPropertyBinding",{constructor:function(m,p,c){sap.ui.model.PropertyBinding.apply(this,arguments);this.oValue=this._getValue()}});
sap.ui.model.json.JSONPropertyBinding.prototype.getValue=function(){return this.oValue};
sap.ui.model.json.JSONPropertyBinding.prototype._getValue=function(){var p=this.sPath.substr(this.sPath.lastIndexOf("/")+1);if(p=="__name__"){var P=this.oContext.split("/");return P[P.length-1]}return this.oModel._getObject(this.sPath,this.oContext)};
sap.ui.model.json.JSONPropertyBinding.prototype.setValue=function(v){if(!jQuery.sap.equal(this.oValue,v)){this.oModel.setProperty(this.sPath,v,this.oContext)}};
sap.ui.model.json.JSONPropertyBinding.prototype.setContext=function(c){this.oContext=c;this.checkUpdate()};
sap.ui.model.json.JSONPropertyBinding.prototype.checkUpdate=function(f){var v=this._getValue();if(!jQuery.sap.equal(v,this.oValue)||f){this.oValue=v;this._fireChange()}};
