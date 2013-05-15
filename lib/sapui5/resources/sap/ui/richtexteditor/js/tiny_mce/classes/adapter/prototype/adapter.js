/**
 * adapter.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(){if(!window.Prototype)return alert("Load prototype first!");tinymce.extend(tinymce,{trim:function(s){return s?s.strip():''},inArray:function(a,v){return a&&a.indexOf?a.indexOf(v):-1}});var b={'tinymce.util.JSON':{}};tinymce.onCreate=function(t,c,p){tinymce.extend(p,b[c])}})();
