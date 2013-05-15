/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.Control");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.ui.core.Control",{metadata:{"abstract":true,publicMethods:["placeAt","attachBrowserEvent","detachBrowserEvent"],library:"sap.ui.core",properties:{},aggregations:{},associations:{},events:{}},constructor:function(i,s){this.bAllowTextSelection=true;sap.ui.core.Element.apply(this,arguments);this.bOutput=this.getDomRef()!=null},renderer:null});
sap.ui.core.Control.prototype.clone=function(){var c=sap.ui.core.Element.prototype.clone.apply(this,arguments);if(this.aBindParameters){for(var i=0,l=this.aBindParameters.length;i<l;i++){var p=this.aBindParameters[i];c.attachBrowserEvent(p.sEventType,p.fnHandler,p.oListener!==this?p.oListener:undefined)}}c.bAllowTextSelection=this.bAllowTextSelection;return c};
jQuery.sap.require("sap.ui.core.CustomStyleClassSupport");sap.ui.core.CustomStyleClassSupport.apply(sap.ui.core.Control.prototype);
sap.ui.core.Control.prototype.isActive=function(){return jQuery.sap.domById(this.sId)!=null};
sap.ui.core.Control.prototype.invalidate=function(o){var u;if(this.bOutput&&(u=this.getUIArea())){u.addInvalidatedControl(this)}else{var p=this.getParent();if(p&&(this.bOutput||!(this.getVisible&&this.getVisible()===false))){p.invalidate(this)}}};
sap.ui.core.Control.prototype.rerender=function(){sap.ui.core.UIArea.rerenderControl(this)};
sap.ui.core.Control.prototype.allowTextSelection=function(a){this.bAllowTextSelection=a;return this};
sap.ui.core.Control.prototype.attachBrowserEvent=function(e,h,l){if(e&&(typeof(e)==="string")){if(h&&typeof(h)==="function"){if(!this.aBindParameters){this.aBindParameters=[]}l=l||this;var p=function(){h.apply(l,arguments)};this.aBindParameters.push({sEventType:e,fnHandler:h,oListener:l,fnProxy:p});this.$().bind(e,p)}}return this};
sap.ui.core.Control.prototype.detachBrowserEvent=function(e,h,l){if(e&&(typeof(e)==="string")){if(h&&typeof(h)==="function"){var $=this.$(),i,p;l=l||this;if(this.aBindParameters){for(i=this.aBindParameters.length-1;i>=0;i--){p=this.aBindParameters[i];if(p.sEventType===e&&p.fnHandler===h&&p.oListener===l){this.aBindParameters.splice(i,1);$.unbind(e,p.fnProxy)}}}}}return this};
sap.ui.core.Control.prototype.getRenderer=function(){return sap.ui.core.RenderManager.getRenderer(this)};
sap.ui.core.Control.prototype.placeAt=function(r,p){var c=sap.ui.getCore();if(c.isInitialized()){var C=r;if(typeof C==="string"){C=c.byId(r)}var i=false;if(!(C instanceof sap.ui.core.Element)){C=c.createUIArea(r);i=true}if(!C){return}if(!i){var o=C.getMetadata().getAllAggregations()["content"];var b=true;if(o){if(!o.multiple||o.type!="sap.ui.core.Control"){b=false}}else{if(!C.addContent||!C.insertContent||!C.removeAllContent){b=false}}if(!b){jQuery.sap.log.warning("placeAt cannot be processed because container "+C+" does not have an aggregation 'content'.");return}}if(typeof p==="number"){C.insertContent(this,p)}else{p=p||"last";switch(p){case"last":C.addContent(this);break;case"first":C.insertContent(this,0);break;case"only":C.removeAllContent();C.addContent(this);break;default:jQuery.sap.log.warning("Position "+p+" is not supported for function placeAt.")}}}else{var t=this;c.attachInitEvent(function(){t.placeAt(r,p)})}return this};
sap.ui.core.Control.prototype.onselectstart=function(b){if(!this.bAllowTextSelection){b.preventDefault();b.stopPropagation()}};
sap.ui.core.Control.prototype.getIdForLabel=function(){return this.getId()};
