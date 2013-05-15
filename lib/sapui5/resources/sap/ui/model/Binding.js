/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.model.Binding");jQuery.sap.require("sap.ui.base.EventProvider");sap.ui.base.EventProvider.extend("sap.ui.model.Binding",{constructor:function(m,p,c,P){sap.ui.base.EventProvider.apply(this);this.sPath=p;this.oContext=c;this.oModel=m;this.mParameters=P},metadata:{"abstract":true,publicMethods:["getPath","getContext","getModel","attachChange","detachChange"]}});
sap.ui.model.Binding.prototype.getPath=function(){return this.sPath};
sap.ui.model.Binding.prototype.getContext=function(){return this.oContext};
sap.ui.model.Binding.prototype.setContext=function(c){if(this.oContext!=c){this.oContext=c;this._fireChange()}};
sap.ui.model.Binding.prototype.getModel=function(){return this.oModel};
sap.ui.model.Binding.prototype.attachChange=function(f,l){if(!this.hasListeners("_change")){this.oModel.addBinding(this)}this.attachEvent("_change",f,l)};
sap.ui.model.Binding.prototype.detachChange=function(f,l){this.detachEvent("_change",f,l);if(!this.hasListeners("_change")){this.oModel.removeBinding(this)}};
sap.ui.model.Binding.prototype._fireChange=function(a){this.fireEvent("_change",a)};
sap.ui.model.Binding.prototype.updateRequired=function(m){return m&&this.getModel()===m};
