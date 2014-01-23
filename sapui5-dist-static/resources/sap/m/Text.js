/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.Text");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.Text",{metadata:{library:"sap.m",properties:{"text":{type:"string",group:"",defaultValue:'',bindable:"bindable"},"textDirection":{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:sap.ui.core.TextDirection.Inherit},"visible":{type:"boolean",group:"Appearance",defaultValue:true},"wrapping":{type:"boolean",group:"Appearance",defaultValue:true},"textAlign":{type:"sap.ui.core.TextAlign",group:"Appearance",defaultValue:sap.ui.core.TextAlign.Begin},"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"maxLines":{type:"int",group:"Appearance",defaultValue:null}}}});jQuery.sap.require("sap.ui.core.ResizeHandler");jQuery(window).load(function(){sap.m.Text._isFontLoaded=true});
sap.m.Text.prototype.setText=function(t){this.setProperty("text",t,true);var d=this.getDomRef();if(d){d.textContent=this.getText(true)}return this};
sap.m.Text.prototype.getText=function(n){var t=this.getProperty("text");if(n){return t.replace(/\r\n/g,"\n")}return t};
sap.m.Text.prototype.onBeforeRendering=function(){this._cleanupResize()};
sap.m.Text.prototype.onAfterRendering=function(){if(!this.getWrapping()||this.getMaxLines()<2){return}if(sap.m.Text.hasNativeLineClamp){jQuery.sap.delayedCall(0,this,function(){this.$().css("display","-webkit-inline-box")})}else{this._$text=this.$();if(sap.m.Text._isFontLoaded){this._clampText()}else{this._clampHeight()}this._registerResize()}};
sap.m.Text.prototype.exit=function(){this._cleanupResize()};
sap.m.Text.hasNativeLineClamp=(function(){var e=document.createElement("span");return(typeof e.style.webkitLineClamp!="undefined")})();sap.m.Text.prototype.ellipsis='…';
sap.m.Text.prototype._cleanupResize=function(){if(this.hasOwnProperty("_$text")){this._deregisterResize();delete this._fnResizeProxy;delete this._bMutex;delete this._$text}};
sap.m.Text.prototype._registerResize=function(){this._fnResizeProxy=this._fnResizeProxy||jQuery.proxy(this._clampText,this);this._sResizeListenerId=sap.ui.core.ResizeHandler.register(this._$text[0],this._fnResizeProxy)};
sap.m.Text.prototype._deregisterResize=function(){if(this._sResizeListenerId){sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);delete this._sResizeListenerId}};
sap.m.Text.prototype._clampText=function(e){if(!this._bMutex){this._bMutex=true;this._deregisterResize();var i=(!e||!jQuery.browser.msie)?0:50;jQuery.sap.delayedCall(i,this,function(){if(!this.getDomRef()){this._bMutex=false;return}var n,a=0,t=this._$text[0],T=this.getText(true),b=T.length,c=this.ellipsis.length,d=this._clampHeight();t.textContent=T;if(t.scrollHeight>d){while((b-a)>c){n=(a+b)>>1;t.textContent=T.slice(0,n-c)+this.ellipsis;if(t.scrollHeight>d){b=n}else{a=n}}if(t.scrollHeight>d&&a>0){t.textContent=T.slice(0,a-c)+this.ellipsis}}this._registerResize();this._bMutex=false})}};
sap.m.Text.prototype._clampHeight=function(){var l=parseFloat(this._$text.css("line-height")),l=l||parseFloat(this._$text.css("font-size"))*1.2,c=Math.floor(this.getMaxLines()*l);this._$text.css("max-height",c);return c};
