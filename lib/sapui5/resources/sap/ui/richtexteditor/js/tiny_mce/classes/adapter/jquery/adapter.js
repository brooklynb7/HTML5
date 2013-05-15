/**
 * adapter.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function($,b){var d=b.is,e=/^(href|src|style)$/i,u;if(!$&&window.console){return console.log("Load jQuery first!")}b.$=$;b.adapter={patchEditor:function(a){var f=$.fn;function c(n,v){var s=this;if(v)s.removeAttr('data-mce-style');return f.css.apply(s,arguments)};function h(n,v){var s=this;if(e.test(n)){if(v!==u){s.each(function(i,j){a.dom.setAttrib(j,n,v)});return s}else return s.attr('data-mce-'+n)}return f.attr.apply(s,arguments)};function p(j){if(j.css!==c){j.css=c;j.attr=h;j.tinymce=a;j.pushStack=function(){return p(f.pushStack.apply(this,arguments))}}return j};a.$=function(s,i){var j=a.getDoc();return p($(s||j,j||i))}}};b.extend=$.extend;b.extend(b,{map:$.map,grep:function(a,f){return $.grep(a,f||function(){return 1})},inArray:function(a,v){return $.inArray(v,a||[])}});var g={'tinymce.dom.DOMUtils':{select:function(p,s){var t=this;return $.find(p,t.get(s)||t.get(t.settings.root_element)||t.doc,[])},is:function(n,p){return $(this.get(n)).is(p)}}};b.onCreate=function(t,c,p){b.extend(p,g[c])}})(window.jQuery,tinymce);
