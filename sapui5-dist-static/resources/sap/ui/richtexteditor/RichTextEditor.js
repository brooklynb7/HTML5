/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.richtexteditor.RichTextEditor");jQuery.sap.require("sap.ui.richtexteditor.library");jQuery.sap.require("sap.ui.core.Control");
/**
 * Constructor for a new RichTextEditor.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getValue value} : string (default: '')</li>
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection (default: sap.ui.core.TextDirection.Inherit)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEditorType editorType} : string (default: 'TinyMCE')</li>
 * <li>{@link #getEditorLocation editorLocation} : string (default: 'js/tiny_mce/tiny_mce_src.js')</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getShowGroupFontStyle showGroupFontStyle} : boolean (default: true)</li>
 * <li>{@link #getShowGroupTextAlign showGroupTextAlign} : boolean (default: true)</li>
 * <li>{@link #getShowGroupStructure showGroupStructure} : boolean (default: true)</li>
 * <li>{@link #getShowGroupFont showGroupFont} : boolean (default: false)</li>
 * <li>{@link #getShowGroupClipboard showGroupClipboard} : boolean (default: true)</li>
 * <li>{@link #getShowGroupInsert showGroupInsert} : boolean (default: false)</li>
 * <li>{@link #getShowGroupLink showGroupLink} : boolean (default: false)</li>
 * <li>{@link #getShowGroupUndo showGroupUndo} : boolean (default: false)</li>
 * <li>{@link #getWrapping wrapping} : boolean (default: true)</li>
 * <li>{@link #getRequired required} : boolean (default: false)</li>
 * <li>{@link #getSanitizeValue sanitizeValue} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.richtexteditor.RichTextEditor#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.richtexteditor.RichTextEditor#event:ready ready} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The RichTextEditor-Control is used to enter formatted text.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @disclaimer Since version 1.6.0. 
 * The RichTextEditor of SAPUI5 contains a third party component TinyMCE provided by Moxiecode Systems AB. The SAP license agreement does not cover development of own applications with RichTextEditor of SAPUI5. To develop own applications with RichTextEditor of SAPUI5 a customer/partner has to first obtain an appropriate license from Moxiecode Systems AB. To prevent accidental usage, the TinyMCE code cannot be used directly starting with SAPUI5 version 1.8.
 * @name sap.ui.richtexteditor.RichTextEditor
 */
sap.ui.core.Control.extend("sap.ui.richtexteditor.RichTextEditor",{metadata:{publicMethods:["getNativeApi"],library:"sap.ui.richtexteditor",properties:{"value":{type:"string",group:"Data",defaultValue:''},"textDirection":{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:sap.ui.core.TextDirection.Inherit},"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"height":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"editorType":{type:"string",group:"Misc",defaultValue:'TinyMCE'},"editorLocation":{type:"string",group:"Misc",defaultValue:'js/tiny_mce/tiny_mce_src.js'},"editable":{type:"boolean",group:"Misc",defaultValue:true},"showGroupFontStyle":{type:"boolean",group:"Misc",defaultValue:true},"showGroupTextAlign":{type:"boolean",group:"Misc",defaultValue:true},"showGroupStructure":{type:"boolean",group:"Misc",defaultValue:true},"showGroupFont":{type:"boolean",group:"Misc",defaultValue:false},"showGroupClipboard":{type:"boolean",group:"Misc",defaultValue:true},"showGroupInsert":{type:"boolean",group:"Misc",defaultValue:false},"showGroupLink":{type:"boolean",group:"Misc",defaultValue:false},"showGroupUndo":{type:"boolean",group:"Misc",defaultValue:false},"wrapping":{type:"boolean",group:"Appearance",defaultValue:true},"required":{type:"boolean",group:"Misc",defaultValue:false},"sanitizeValue":{type:"boolean",group:"Misc",defaultValue:true}},events:{"change":{},"ready":{}}}});sap.ui.richtexteditor.RichTextEditor.M_EVENTS={'change':'change','ready':'ready'};
sap.ui.richtexteditor.RichTextEditor.prototype.init=function(){this._bEditorCreated=false;this._callEditorSpecific("init")};
sap.ui.richtexteditor.RichTextEditor.prototype.onBeforeRendering=function(){this._callEditorSpecific("onBeforeRendering")};
sap.ui.richtexteditor.RichTextEditor.prototype.onAfterRendering=function(){this._callEditorSpecific("onAfterRendering")};
sap.ui.richtexteditor.RichTextEditor.prototype.reinitialize=function(){this._callEditorSpecific("reinitialize")};
sap.ui.richtexteditor.RichTextEditor.prototype.getNativeApi=function(){return this._callEditorSpecific("getNativeApi")};
sap.ui.richtexteditor.RichTextEditor.prototype.exit=function(){this._callEditorSpecific("exit")};
sap.ui.richtexteditor.RichTextEditor.prototype.setValue=function(v){if(this.getSanitizeValue()){v=jQuery.sap._sanitizeHTML(v)}if(v===this.getValue()){return this}this.setProperty("value",v,true);var m="setValue"+this.getEditorType();if(this[m]&&typeof(this[m])=="function"){this[m].call(this,v)}else{this.reinitialize()}return this};
sap.ui.richtexteditor.RichTextEditor.prototype._callEditorSpecific=function(p){var m=p+this.getEditorType();if(this[m]&&typeof(this[m])=="function"){return this[m].call(this)}};
sap.ui.richtexteditor.RichTextEditor.prototype.setEditable=function(e){this.setProperty("editable",e,true);this.reinitialize();return this};
sap.ui.richtexteditor.RichTextEditor.prototype.setWrapping=function(w){this.setProperty("wrapping",w,true);this.reinitialize();return this};
sap.ui.richtexteditor.RichTextEditor.prototype.setRequired=function(r){this.setProperty("required",r,true);this.reinitialize();return this};
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupFontStyle=function(s){this.setProperty("showGroupFontStyle",s,true);this.reinitialize();return this};
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupTextAlign=function(s){this.setProperty("showGroupTextAlign",s,true);this.reinitialize();return this};
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupStructure=function(s){this.setProperty("showGroupStructure",s,true);this.reinitialize();return this};
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupFont=function(s){this.setProperty("showGroupFont",s,true);this.reinitialize();return this};
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupClipboard=function(s){this.setProperty("showGroupClipboard",s,true);this.reinitialize();return this};
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupInsert=function(s){this.setProperty("showGroupInsert",s,true);this.reinitialize();return this};
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupLink=function(s){this.setProperty("showGroupLink",s,true);this.reinitialize();return this};
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupUndo=function(s){this.setProperty("showGroupUndo",s,true);this.reinitialize();return this};
sap.ui.richtexteditor.RichTextEditor.prototype.setEditorType=function(e){if(!this._bEditorCreated){this.setProperty("editorType",e)}return this};
sap.ui.richtexteditor.RichTextEditor.prototype.setEditorLocation=function(e){if(!this._bEditorCreated){this.setProperty("editorLocation",e)}return this};
//License Key for TinyMCE which must be set by the application: see JSDoc!

sap.ui.richtexteditor.TinyMCELicense=sap.ui.richtexteditor.TinyMCELicense||"";
sap.ui.richtexteditor.RichTextEditor.initTinyMCEStatic=function(){sap.ui.richtexteditor.RichTextEditor.TinyMCE={};sap.ui.richtexteditor.RichTextEditor.TinyMCE.GroupFontStyle="bold,italic,underline,strikethrough";sap.ui.richtexteditor.RichTextEditor.TinyMCE.GroupTextAlign="justifyleft,justifycenter,justifyright,justifyfull";sap.ui.richtexteditor.RichTextEditor.TinyMCE.GroupStructure="bullist,numlist,outdent,indent";sap.ui.richtexteditor.RichTextEditor.TinyMCE.GroupFont="fontselect,fontsizeselect,forecolor,backcolor";sap.ui.richtexteditor.RichTextEditor.TinyMCE.GroupClipboard="cut,copy,paste";sap.ui.richtexteditor.RichTextEditor.TinyMCE.GroupEmail="";sap.ui.richtexteditor.RichTextEditor.TinyMCE.GroupInsert="image,emotions";sap.ui.richtexteditor.RichTextEditor.TinyMCE.GroupLink="link,unlink";sap.ui.richtexteditor.RichTextEditor.TinyMCE.GroupUndo="undo,redo";sap.ui.richtexteditor.RichTextEditor.TinyMCEInitialized=true};
sap.ui.richtexteditor.RichTextEditor.prototype.initTinyMCE=function(){this.textAreaId=this.getId()+"-textarea"};
sap.ui.richtexteditor.RichTextEditor.prototype.onBeforeRenderingTinyMCE=function(){};
sap.ui.richtexteditor.RichTextEditor.prototype.onAfterRenderingTinyMCE=function(){if(!this._bEditorCreated){if(!sap.ui.richtexteditor.RichTextEditorRenderer.bTinyMCELicenseMissing){this.initTinyMCEAfterFirstRendering()}var $=this.$();setTimeout(function(){var a=$.closest("[data-sap-ui-popup]");var i=a.attr("data-sap-ui-popup");if(i){var d=new window.tinyMCE.util.Dispatcher();window.tinyMCE.activeEditor.windowManager.onOpen=d;d.add(function(t,f,p){if(p){var o={id:p.mce_window_id+"_ifr"};var e="sap.ui.core.Popup.addFocusableContent-"+i;sap.ui.getCore().getEventBus().publish("sap.ui",e,o)}})}},0)}else{this.setContentTinyMCE();if(window.tinymce){tinymce.execCommand('mceAddControl',false,this.textAreaId)}}};
sap.ui.richtexteditor.RichTextEditor.prototype.initTinyMCEAfterFirstRendering=function(){if(!sap.ui.richtexteditor.RichTextEditor.TinyMCEInitialized){sap.ui.richtexteditor.RichTextEditor.initTinyMCEStatic()}if(!window.tinymce){jQuery.sap.delayedCall(10,this,"initTinyMCEAfterFirstRendering");return}this._bEditorCreated=true;var g=this.getShowGroupFontStyle()?sap.ui.richtexteditor.RichTextEditor.TinyMCE.GroupFontStyle:"";var a=this.getShowGroupTextAlign()?sap.ui.richtexteditor.RichTextEditor.TinyMCE.GroupTextAlign:"";var b=this.getShowGroupFont()?sap.ui.richtexteditor.RichTextEditor.TinyMCE.GroupFont:"";var c=this.getShowGroupClipboard()?sap.ui.richtexteditor.RichTextEditor.TinyMCE.GroupClipboard:"";var d=this.getShowGroupStructure()?sap.ui.richtexteditor.RichTextEditor.TinyMCE.GroupStructure:"";var e=this.getShowGroupInsert()?sap.ui.richtexteditor.RichTextEditor.TinyMCE.GroupInsert:"";var f=this.getShowGroupLink()?sap.ui.richtexteditor.RichTextEditor.TinyMCE.GroupLink:"";var h=this.getShowGroupUndo()?sap.ui.richtexteditor.RichTextEditor.TinyMCE.GroupUndo:"";var i=g+",|,"+a+",|,"+b;i=i.replace(/,(,)+/g,",").replace(/\|(,\|)+/g,"|").replace(/^,?\|,/,"").replace(/,\|,?$/,"");var j=c+",|,"+d+",|,"+h+",|,"+e+",|,"+f;j=j.replace(/,(,)+/g,",").replace(/\|(,\|)+/g,"|").replace(/^,?\|,/,"").replace(/,\|,?$/,"");if(!i||i==""){i=j;j=null}var t=this;var D=(sap.ui.getCore().getConfiguration().getRTL()?"rtl":"ltr");var l=new sap.ui.core.Locale(sap.ui.getCore().getConfiguration().getLanguage()),L=l.getLanguage();if(L=="zh"){L+="-"+l.getRegion().toLowerCase()}if(L=="sh"){L="sr"}var C={mode:"exact",directionality:D,elements:this.getId()+'-textarea',theme:"advanced",language:L,plugins:"emotions,directionality,inlinepopups,tabfocus",theme_advanced_buttons1:i,theme_advanced_buttons2:j,theme_advanced_buttons3:null,theme_advanced_buttons4:null,theme_advanced_toolbar_location:"top",theme_advanced_toolbar_align:"left",theme_advanced_statusbar_location:"none",onchange_callback:function(o){var I=o.editorId.substr(0,o.editorId.lastIndexOf("-"));var r=sap.ui.getCore().byId(I);if(r){r.onTinyMCEChange(o)}else{jQuery.sap.log.error("RichtTextEditor change called for unknown instance: "+I)}}};C.readonly=(this.getEditable()?0:1);C.nowrap=!this.getWrapping();tinymce.init(C);this.setContentTinyMCE();this.initWhenTinyMCEReady();this._tinyMCEPreserveHandler=function(s,E,o){if((t.getDomRef()&&window.tinymce&&jQuery(o.domNode).find(jQuery.sap.byId(t.textAreaId)).length>0)||(jQuery.sap.byId(t.textAreaId).length==0)){var k=t.getNativeApiTinyMCE();if(k){t.setProperty("value",k.getContent(),true)}tinymce.execCommand('mceRemoveControl',false,t.textAreaId)}};sap.ui.getCore().getEventBus().subscribe("sap.ui","__preserveContent",this._tinyMCEPreserveHandler);sap.ui.getCore().getEventBus().subscribe("sap.ui","__beforePopupClose",this._tinyMCEPreserveHandler)};
sap.ui.richtexteditor.RichTextEditor.prototype.initWhenTinyMCEReady=function(){if(!this.tinyMCEReady()){jQuery.sap.delayedCall(100,this,"initWhenTinyMCEReady");return}var i=this.getNativeApiTinyMCE();if(this.getTooltip()&&this.getTooltip().length>0){var t=jQuery.sap.escapeHTML(this.getTooltip_Text());i.getBody().title=t;jQuery.sap.byId(this.textAreaId+"_ifr").attr("title",t)}var a=this.textAreaId+"_tbl";var e=jQuery.sap.byId(a);this.$focusables=e.find(":sapFocusable");e.bind('keydown',jQuery.proxy(this,"_tinyMCEKeyboardHandler"));jQuery.sap.byId(this.getId()+"-textarea_fontselect").attr("title","Font");jQuery.sap.byId(this.getId()+"-textarea_fontsizeselect").attr("title","Font Size");this.fireReady()};
sap.ui.richtexteditor.RichTextEditor.prototype._tinyMCEKeyboardHandler=function(e){var k=e['keyCode'];switch(k){case jQuery.sap.KeyCodes.TAB:if(!this.$focusables.index(jQuery(e.target))==0){var i=this.$focusables.size()-1;this.$focusables.get(i).focus()}break;case jQuery.sap.KeyCodes.ARROW_LEFT:case jQuery.sap.KeyCodes.ARROW_UP:var n=this.$focusables.index(jQuery(e.target))-1;if(n==0)n=this.$focusables.size()-2;this.$focusables.get(n).focus();break;case jQuery.sap.KeyCodes.ARROW_RIGHT:case jQuery.sap.KeyCodes.ARROW_DOWN:var n=this.$focusables.index(jQuery(e.target))+1;if(n==this.$focusables.size()-1)n=1;this.$focusables.get(n).focus();break}};
sap.ui.richtexteditor.RichTextEditor.prototype.tinyMCEReady=function(){var i=this.getId()+"-textarea_ifr";var a=jQuery.sap.domById(i);return(a!=null&&a!=undefined)};
sap.ui.richtexteditor.RichTextEditor.prototype.setValueTinyMCE=function(v){if(v||v==""){if(this._bEditorCreated){jQuery.sap.byId(this.textAreaId).text(v);this.setContentTinyMCE()}else{this.setProperty("value",v,true);if(this.getDomRef()){jQuery.sap.byId(this.textAreaId).val(v)}}}};
sap.ui.richtexteditor.RichTextEditor.prototype.onTinyMCEChange=function(c){var o=this.getValue(),n=c.getContent();if((o!=n)&&!this.bExiting){this.setProperty("value",n,true);this.fireChange({oldValue:o,newValue:n})}};
sap.ui.richtexteditor.RichTextEditor.prototype.reinitializeTinyMCE=function(){if(this._bEditorCreated){this._bEditorCreated=false;this.rerender();this.setContentTinyMCE()}};
sap.ui.richtexteditor.RichTextEditor.prototype.exitTinyMCE=function(){this.bExiting=true;if(tinymce){tinymce.execCommand('mceRemoveControl',false,this.textAreaId)}sap.ui.getCore().getEventBus().unsubscribe("sap.ui","__preserveContent",this._tinyMCEPreserveHandler);sap.ui.getCore().getEventBus().unsubscribe("sap.ui","__beforePopupClose",this._tinyMCEPreserveHandler)};
sap.ui.richtexteditor.RichTextEditor.prototype.getNativeApiTinyMCE=function(){var i=tinymce.getInstanceById(this.textAreaId);return i};
sap.ui.richtexteditor.RichTextEditor.prototype.setContentTinyMCE=function(){var i=this.getNativeApiTinyMCE(),v;if(i){v=this.getValue();if(v!=null){i.setContent(v)}}};
