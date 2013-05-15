/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.SearchField");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.SearchField",{metadata:{library:"sap.m",properties:{"value":{type:"string",group:"Data",defaultValue:null,bindable:"bindable"},"width":{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:null},"enabled":{type:"boolean",group:"Behavior",defaultValue:true},"visible":{type:"boolean",group:"Appearance",defaultValue:true},"maxLength":{type:"int",group:"Behavior",defaultValue:0},"placeholder":{type:"string",group:"Misc",defaultValue:null},"showMagnifier":{type:"boolean",group:"Misc",defaultValue:true}},events:{"search":{},"liveChange":{}}}});sap.m.SearchField.M_EVENTS={'search':'search','liveChange':'liveChange'};jQuery.sap.require("sap.ui.core.EnabledPropagator");sap.ui.core.EnabledPropagator.apply(sap.m.SearchField.prototype,[true]);
sap.m.SearchField.prototype.init=function(){};
sap.m.SearchField.prototype.onBeforeRendering=function(){jQuery(this._inputElement).unbind("search",this.onSearch).unbind("change",this.onChange).unbind("input",this.onInput)};
sap.m.SearchField.prototype.onAfterRendering=function(){this._inputElement=jQuery.sap.domById(this.getId()+"-I");jQuery(this._inputElement).bind("search",jQuery.proxy(this.onSearch,this)).bind("change",jQuery.proxy(this.onChange,this)).bind("input",jQuery.proxy(this.onInput,this))};
sap.m.SearchField.prototype.ontouchstart=function(e){e.originalEvent._sapui_handledByControl=true;if(!this.getEnabled())return;var s=e.srcElement;if(s.id==this.getId()+"-reset"){var v="";this._inputElement.value=v;this.setProperty("value",v,true);this.fireLiveChange({newValue:v});this.fireSearch({query:v});e.preventDefault();e.stopPropagation();if(document.activeElement&&document.activeElement.tagName=="INPUT"){this._inputElement.focus()}}};
sap.m.SearchField.prototype.onSearch=function(e){var v=this._inputElement.value;this.setProperty("value",v,true);this.fireSearch({query:v})};
sap.m.SearchField.prototype.onChange=function(e){var v=this._inputElement.value;this.setProperty("value",v,true)};
sap.m.SearchField.prototype.onInput=function(e){var v=this._inputElement.value;this.setProperty("value",v,true);this.fireLiveChange({newValue:v})};
