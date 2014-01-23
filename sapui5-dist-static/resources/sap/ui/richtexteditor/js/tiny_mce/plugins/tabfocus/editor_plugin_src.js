/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */
(function(){var D=tinymce.DOM,E=tinymce.dom.Event,a=tinymce.each,b=tinymce.explode;tinymce.create('tinymce.plugins.TabFocusPlugin',{init:function(c,u){function t(c,e){if(e.keyCode===9)return E.cancel(e)}function g(c,e){var x,i,f,h,v;function j(d){h=D.select(':input:enabled,*[tabindex]:not(iframe)');function k(e){return e.nodeName==="BODY"||(e.type!='hidden'&&!(e.style.display=="none")&&!(e.style.visibility=="hidden")&&k(e.parentNode))}function l(h){return h.attributes["tabIndex"].specified||h.nodeName=="INPUT"||h.nodeName=="TEXTAREA"}function m(){return tinymce.isIE6||tinymce.isIE7}function n(h){return((!m()||l(h)))&&h.getAttribute("tabindex")!='-1'&&k(h)}a(h,function(e,i){if(e.id==c.id){x=i;return false}});if(d>0){for(i=x+1;i<h.length;i++){if(n(h[i]))return h[i]}}else{for(i=x-1;i>=0;i--){if(n(h[i]))return h[i]}}return null}if(e.keyCode===9){v=b(c.getParam('tab_focus',c.getParam('tabfocus_elements',':prev,:next')));if(v.length==1){v[1]=v[0];v[0]=':prev'}if(e.shiftKey){if(v[0]==':prev')h=j(-1);else h=D.get(v[0])}else{if(v[1]==':next')h=j(1);else h=D.get(v[1])}if(h){if(h.id&&(c=tinymce.get(h.id||h.name)))c.focus();else window.setTimeout(function(){if(!tinymce.isWebKit)window.focus();h.focus()},10);return E.cancel(e)}}}c.onKeyUp.add(t);if(tinymce.isGecko){c.onKeyPress.add(g);c.onKeyDown.add(t)}else c.onKeyDown.add(g)},getInfo:function(){return{longname:'Tabfocus',author:'Moxiecode Systems AB',authorurl:'http://tinymce.moxiecode.com',infourl:'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/tabfocus',version:tinymce.majorVersion+"."+tinymce.minorVersion}}});tinymce.PluginManager.add('tabfocus',tinymce.plugins.TabFocusPlugin)})();
