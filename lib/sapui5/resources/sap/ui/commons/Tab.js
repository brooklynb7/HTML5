/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.Tab");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.commons.Panel");sap.ui.commons.Panel.extend("sap.ui.commons.Tab",{metadata:{library:"sap.ui.commons",properties:{"verticalScrolling":{type:"sap.ui.core.Scrolling",group:"Behavior",defaultValue:sap.ui.core.Scrolling.None},"horizontalScrolling":{type:"sap.ui.core.Scrolling",group:"Behavior",defaultValue:sap.ui.core.Scrolling.None},"closable":{type:"boolean",group:"Misc",defaultValue:false},"selected":{type:"boolean",group:"Behavior",defaultValue:false,deprecated:true}}}});
sap.ui.commons.Tab.prototype.init=function(){this.oScrollDomRef=null};
sap.ui.commons.Tab.prototype.rerender=function(){this.getParent().rerender()};
sap.ui.commons.Tab.prototype.onAfterRendering=function(){this.oScrollDomRef=jQuery.sap.domById(this.getId()+"-panel");if(this.oScrollDomRef){var s=this.getProperty("scrollTop");if(s>0){this.oScrollDomRef.scrollTop=s}var a=this.getProperty("scrollLeft");if(a>0){this.oScrollDomRef.scrollLeft=a}}};
sap.ui.commons.Tab.prototype.getScrollLeft=function(){var s=0;if(this.oScrollDomRef){s=this.oScrollDomRef.scrollLeft;this.setProperty("scrollLeft",s,true)}return s};
sap.ui.commons.Tab.prototype.setScrollLeft=function(p){this.setProperty("scrollLeft",p,true);if(this.oScrollDomRef){this.bIgnoreScrollEvent=true;this.oScrollDomRef.scrollLeft=p}return this};
sap.ui.commons.Tab.prototype.getScrollTop=function(){var s=0;if(this.oScrollDomRef){s=this.oScrollDomRef.scrollTop;this.setProperty("scrollTop",s,true)}return s};
sap.ui.commons.Tab.prototype.setScrollTop=function(p){this.setProperty("scrollTop",p,true);if(this.oScrollDomRef){this.bIgnoreScrollEvent=true;this.oScrollDomRef.scrollTop=p}return this};
sap.ui.commons.Tab.prototype.setEnabled=function(e){this.setProperty("enabled",e,true);jQuery(this.getDomRef()).toggleClass("sapUiTab",e).toggleClass("sapUiTabDsbl",!e).attr("aria-disabled",!e);return this};
sap.ui.commons.Tab.prototype.setWidth=function(w){this.setProperty("width",w,true);return this};
sap.ui.commons.Panel.prototype.setApplyContentPadding=function(p){this.setProperty("applyContentPadding",p,true);return this};
