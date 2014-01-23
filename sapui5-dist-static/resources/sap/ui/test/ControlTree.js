/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.test.ControlTree");jQuery.sap.require("jquery.sap.strings");jQuery.sap.require("sap.ui.core.Element");
sap.ui.test.ControlTree=function(c,w){this.oWindow=w;this.oCore=c;this.oCore.attachUIUpdated(this.renderDelayed,this);this.renderDelayed()};
sap.ui.test.ControlTree.prototype.renderDelayed=function(){if(this.oTimer){this.oWindow.jQuery.sap.clearDelayedCall(this.oTimer)}this.oTimer=this.oWindow.jQuery.sap.delayedCall(500,this,"initDT");restoreLockState(this);supplySelectedTheme(this.oCore.getConfiguration().getTheme())};
sap.ui.test.ControlTree.prototype.initDT=function(){restoreTreeCallback();var u=null,U=this.oCore.mUIAreas;for(var i in U){var u=U[i],d=this.createTreeNodeDT(u.getId(),0,"UIArea");var r=u.getContent();for(var i=0,l=r.length;i<l;i++){this.renderNodeDT(r[i],0)}}};
sap.ui.test.ControlTree.prototype.createTreeNodeDT=function(i,l,t){callback(i,l,t)};
sap.ui.test.ControlTree.prototype.createAssocTreeNodeDT=function(i,l,t,s,a){callback(i,l,t,s,a)};
sap.ui.test.ControlTree.prototype.renderNodeDT=function(c,l){if(!c){return}var M=c.getMetadata();var d=this.createTreeNodeDT(c.getId(),l+1,M.getName());var p=M.getAllProperties();for(var P in p){var a=c["get"+P];var N=P;if(!a){N=jQuery.sap.charToUpperCase(N,0)}var v=c["get"+N]();addProperty(c.getId(),P,p[P].type,v!=null?v:"")}var A=M.getAllAggregations();for(var n in A){var b=c.getAggregation(A[n].name);if(b&&b.length){for(var i=0;i<b.length;i++){var o=b[i];if(o instanceof sap.ui.core.Element){this.renderNodeDT(b[i],l+1)}}}else if(b instanceof sap.ui.core.Element){this.renderNodeDT(b,l+1)}}var e=M.getAllAssociations();for(var m in e){var f=c.getAssociation(e[m].name);if(null!=f){var g=e[m].name+f;this.createAssocTreeNodeDT(g,l+2,"Association",c.getId(),f);addProperty(g,e[m].name,"assoc_type",f);addProperty(g,"Name","string",e[m].name)}}};
