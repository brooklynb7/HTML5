/**
 * Dispatcher.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
tinymce.create('tinymce.util.Dispatcher',{scope:null,listeners:null,inDispatch:false,Dispatcher:function(s){this.scope=s||this;this.listeners=[]},add:function(c,s){this.listeners.push({cb:c,scope:s||this.scope});return c},addToTop:function(c,s){var a=this,l={cb:c,scope:s||a.scope};if(a.inDispatch){a.listeners=[l].concat(a.listeners)}else{a.listeners.unshift(l)}return c},remove:function(c){var l=this.listeners,o=null;tinymce.each(l,function(a,i){if(c==a.cb){o=a;l.splice(i,1);return false}});return o},dispatch:function(){var s=this,r,a=arguments,i,l=s.listeners,b;s.inDispatch=true;for(i=0;i<l.length;i++){b=l[i];r=b.cb.apply(b.scope,a.length>0?a:[b.scope]);if(r===false)break}s.inDispatch=false;return r}});
