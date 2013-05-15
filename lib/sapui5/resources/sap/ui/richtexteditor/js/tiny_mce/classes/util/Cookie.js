/**
 * Cookie.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(){var a=tinymce.each;tinymce.create('static tinymce.util.Cookie',{getHash:function(n){var v=this.get(n),h;if(v){a(v.split('&'),function(v){v=v.split('=');h=h||{};h[unescape(v[0])]=unescape(v[1])})}return h},setHash:function(n,v,e,p,d,s){var o='';a(v,function(v,k){o+=(!o?'':'&')+escape(k)+'='+escape(v)});this.set(n,o,e,p,d,s)},get:function(n){var c=document.cookie,e,p=n+"=",b;if(!c)return;b=c.indexOf("; "+p);if(b==-1){b=c.indexOf(p);if(b!==0)return null}else b+=2;e=c.indexOf(";",b);if(e==-1)e=c.length;return unescape(c.substring(b+p.length,e))},set:function(n,v,e,p,d,s){document.cookie=n+"="+escape(v)+((e)?"; expires="+e.toGMTString():"")+((p)?"; path="+escape(p):"")+((d)?"; domain="+d:"")+((s)?"; secure":"")},remove:function(n,p,d){var b=new Date();b.setTime(b.getTime()-1000);this.set(n,'',b,p,d)}})})();
