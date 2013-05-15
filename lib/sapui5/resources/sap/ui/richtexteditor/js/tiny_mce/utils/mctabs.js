/**
 * mctabs.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */

function MCTabs(){this.settings=[];this.onChange=tinyMCEPopup.editor.windowManager.createInstance('tinymce.util.Dispatcher')}
;
MCTabs.prototype.init=function(s){this.settings=s};
MCTabs.prototype.getParam=function(n,d){var v=null;v=(typeof(this.settings[n])=="undefined")?d:this.settings[n];if(v=="true"||v=="false")return(v=="true");return v};
MCTabs.prototype.showTab=function(t){t.className='current';t.setAttribute("aria-selected",true);t.setAttribute("aria-expanded",true);t.tabIndex=0};
MCTabs.prototype.hideTab=function(a){var t=this;a.className='';a.setAttribute("aria-selected",false);a.setAttribute("aria-expanded",false);a.tabIndex=-1};
MCTabs.prototype.showPanel=function(p){p.className='current';p.setAttribute("aria-hidden",false)};
MCTabs.prototype.hidePanel=function(p){p.className='panel';p.setAttribute("aria-hidden",true)};
MCTabs.prototype.getPanelForTab=function(t){return tinyMCEPopup.dom.getAttrib(t,"aria-controls")};
MCTabs.prototype.displayTab=function(a,p,b){var c,d,e,f,s,n,i,t=this;e=document.getElementById(a);if(p===undefined){p=t.getPanelForTab(e)}c=document.getElementById(p);d=c?c.parentNode:null;f=e?e.parentNode:null;s=t.getParam('selection_class','current');if(e&&f){n=f.childNodes;for(i=0;i<n.length;i++){if(n[i].nodeName=="LI"){t.hideTab(n[i])}}t.showTab(e)}if(c&&d){n=d.childNodes;for(i=0;i<n.length;i++){if(n[i].nodeName=="DIV")t.hidePanel(n[i])}if(!b){e.focus()}t.showPanel(c)}};
MCTabs.prototype.getAnchor=function(){var p,u=document.location.href;if((p=u.lastIndexOf('#'))!=-1)return u.substring(p+1);return""};
var mcTabs=new MCTabs();tinyMCEPopup.onInit.add(function(){var t=tinyMCEPopup.getWin().tinymce,d=tinyMCEPopup.dom,e=t.each;e(d.select('div.tabs'),function(b){var k;d.setAttrib(b,"role","tablist");var i=tinyMCEPopup.dom.select('li',b);var c=function(a){mcTabs.displayTab(a,mcTabs.getPanelForTab(a));mcTabs.onChange.dispatch(a)};e(i,function(a){d.setAttrib(a,'role','tab');d.bind(a,'click',function(f){c(a.id)})});d.bind(d.getRoot(),'keydown',function(a){if(a.keyCode===9&&a.ctrlKey&&!a.altKey){k.moveFocus(a.shiftKey?-1:1);t.dom.Event.cancel(a)}});e(d.select('a',b),function(a){d.setAttrib(a,'tabindex','-1')});k=tinyMCEPopup.editor.windowManager.createInstance('tinymce.ui.KeyboardNavigation',{root:b,items:i,onAction:c,actOnFocus:true,enableLeftRight:true,enableUpDown:true},tinyMCEPopup.dom)})});
