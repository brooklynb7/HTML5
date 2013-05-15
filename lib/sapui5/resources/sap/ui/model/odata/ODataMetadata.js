/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.model.odata.ODataMetadata");sap.ui.base.Object.extend("sap.ui.model.odata.ODataMetadata",{constructor:function(m){this.oMetadata=m},metadata:{publicMethods:["getServiceMetadata"]}});
sap.ui.model.odata.ODataMetadata.prototype.getServiceMetadata=function(){return this.oMetadata};
sap.ui.model.odata.ODataMetadata.prototype._getEntityTypeByPath=function(p){if(!p){return null}if(!this.oMetadata||jQuery.isEmptyObject(this.oMetadata)){return null}var c=p.replace(/^\/|\/$/g,""),P=c.split("/"),l=P.length,C,e,a,A,E,b,o,t=this;if(P[l-1].indexOf("(")!=-1){P[l-1]=P[l-1].substring(0,P[l-1].indexOf("("))}if(l>1){if(P[l-2].indexOf("(")!=-1){C=P[l-2].substring(0,P[l-2].indexOf("("));e=this._getEntityTypeByPath(C);if(e&&e.navigationProperty){jQuery.each(e.navigationProperty,function(i,n){if(n.name===P[l-1]){a=t._splitName(n.relationship);A=t._getObjectMetadata("association",a[0],a[1]);if(A){E=A.end[0];if(E.role!==n.toRole){E=A.end[1]}b=t._splitName(E.type);o=t._getObjectMetadata("entityType",b[0],b[1])}return false}})}}}else{b=this._splitName(this._getEntityTypeName(P[0]));o=this._getObjectMetadata("entityType",b[0],b[1])}return o};
sap.ui.model.odata.ODataMetadata.prototype._splitName=function(f){var p=[];if(f){var s=f.lastIndexOf(".");p[0]=f.substr(s+1);p[1]=f.substr(0,s)}return p};
sap.ui.model.odata.ODataMetadata.prototype._getEntityTypeName=function(c){var e;if(c){jQuery.each(this.oMetadata.dataServices.schema,function(i,s){if(s.entityContainer){jQuery.each(s.entityContainer,function(k,E){jQuery.each(E.entitySet,function(j,o){if(o.name===c){e=o.entityType;return false}})})}})}return e};
sap.ui.model.odata.ODataMetadata.prototype._getObjectMetadata=function(o,O,n){var a;if(O&&n){jQuery.each(this.oMetadata.dataServices.schema,function(i,s){if(s[o]&&s.namespace===n){jQuery.each(s[o],function(j,c){if(c.name===O){a=c;return false}});return!a}})}return a};
sap.ui.model.odata.ODataMetadata.prototype._getPropertyMetadata=function(e,p){var P;var a=p.split("/");jQuery.each(e.property,function(k,o){if(o.name===a[0]){P=o;return false}});if(P&&a.length>1&&!jQuery.sap.startsWith(P.type.toLowerCase(),"edm.")){var n=this._splitName(P.type);P=this._getPropertyMetadata(this._getObjectMetadata("complexType",n[0],n[1]),a[1])}return P};
