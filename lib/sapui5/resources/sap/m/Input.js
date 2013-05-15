/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.Input");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.Input",{metadata:{library:"sap.m",properties:{"value":{type:"string",group:"Data",defaultValue:null,bindable:"bindable"},"type":{type:"sap.m.InputType",group:"Data",defaultValue:sap.m.InputType.Text},"width":{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:null},"enabled":{type:"boolean",group:"Behavior",defaultValue:true},"visible":{type:"boolean",group:"Appearance",defaultValue:true},"maxLength":{type:"int",group:"Behavior",defaultValue:0},"valueState":{type:"sap.ui.core.ValueState",group:"Data",defaultValue:sap.ui.core.ValueState.None},"name":{type:"string",group:"Misc",defaultValue:null},"placeholder":{type:"string",group:"Misc",defaultValue:null},"dateFormat":{type:"string",group:"Misc",defaultValue:'YYYY-MM-dd',deprecated:true}},events:{"change":{},"liveChange":{}}}});sap.m.Input.M_EVENTS={'change':'change','liveChange':'liveChange'};jQuery.sap.require("sap.ui.core.EnabledPropagator");sap.m.Input.prototype._showLabelAsPlaceholder=(function($){var u=($.sap.touchEventMode=="ON");if(u&&(($.os.ios&&$.os.fVersion>=6)||($.os.android&&$.browser.chrome))||($.os.blackberry&&$.os.fVersion>=10)){u=null}return u}(jQuery));
sap.m.Input.prototype.onBeforeRendering=function(){this._unbind()};
sap.m.Input.prototype.onAfterRendering=function(){this._$input=this.$().find('input');this._$input.bind("change.input input.input",jQuery.proxy(this._onChange,this));if(this._showLabelAsPlaceholder){this._$label=this.$().find('label');this._setLabelVisibility()}};
sap.m.Input.prototype.exit=function(){this._unbind();delete this._$input;delete this._$label};
sap.m.Input.prototype.getFocusDomRef=function(){return jQuery.sap.domById(this.getId()+'-inner')};
sap.m.Input.prototype.ontouchstart=function(e){e.originalEvent._sapui_handledByControl=true};
sap.m.Input.prototype.setValueState=function(v){var o=this.getValueState();if(v==o){return this}if(!(this._$input instanceof jQuery)){return this.setProperty("valueState",v)}this.setProperty("valueState",v,true);var $=this._$input,a=this.$();if(o&&o!="None"){a.removeClass("sapMInput"+o);$.removeClass("sapMInput"+o+"Inner")}if(v&&v!="None"){a.addClass("sapMInput"+v);$.addClass("sapMInput"+v+"Inner")}return this};
sap.m.Input.prototype._onChange=function(e){var v=this._$input.val();this.setProperty("value",v,true);this._setLabelVisibility();if(e.type=="input"){this.fireLiveChange({newValue:v})}else{this.fireChange({newValue:v})}};
sap.m.Input.prototype._setLabelVisibility=function(){if(this._showLabelAsPlaceholder){this._$label.css("display",this.getProperty("value")?"none":"inline")}};
sap.m.Input.prototype._unbind=function(){if(this._$input instanceof jQuery){this._$input.unbind(".input")}};
