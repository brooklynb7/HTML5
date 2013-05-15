/*
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.Component");jQuery.sap.require("sap.ui.base.ManagedObject");jQuery.sap.require("sap.ui.core.ComponentMetadata");sap.ui.base.ManagedObject.extend("sap.ui.core.Component",{constructor:function(i,s){sap.ui.base.ManagedObject.apply(this,arguments)},metadata:{version:"1.0",dependencies:{css:[],js:[],libs:[],components:[],ui5version:"1.8",modules:[]},"abstract":true,publicMethods:["wire","setUIArea"],library:"sap.ui.core",autoDestroy:false,initOnBeforeRender:true}},sap.ui.core.ComponentMetadata);jQuery.sap.require("sap.ui.core.Core");
sap.ui.core.Component.prototype.init=function(){this.loadDependencies();var t=this;sap.ui.base.ManagedObject.runWithPreprocessors(function(){t.oRootControl=t.getControl()},{id:function(i){return t.createId(i)},settings:function(s){if(s.component){s.component=t.createId(s.component)}return s}})};
sap.ui.core.Component.prototype.byId=function(i){return sap.ui.getCore().byId(this.createId(i))};
sap.ui.core.Component.prototype.createId=function(i){return this.getId()+"--"+i};
sap.ui.core.Component.prototype.loadDependencies=function(){var d=this.getMetadata().getDependencies();if(d){this.loadLibs(d);this.loadCss(d);this.loadComponents(d)}};
sap.ui.core.Component.prototype.loadLibs=function(d){var l=d.libs;if(l&&l.length>0){jQuery.each(l,function(i,L){jQuery.sap.log.info("Loading Library: "+L);sap.ui.getCore().loadLibrary(L)})}};
sap.ui.core.Component.prototype.loadCss=function(d){var u=d.css;if(u&&u.length>0){var l=this.getMetadata().getLibraryName();jQuery.each(u,function(i,U){var c=sap.ui.resource(l,U);jQuery.sap.log.info("Loading CSS from: "+c);jQuery.sap.includeStyleSheet(c)})}};
sap.ui.core.Component.prototype.loadComponents=function(d){var c=d.components;if(c){jQuery.each(c,function(i,C){jQuery.sap.log.info(C);jQuery.sap.require(C)})}};
sap.ui.core.Component.prototype.exit=function(){};
sap.ui.core.Component.prototype.setUIArea=function(u){u.setRootControl(this.oRootControl)};
