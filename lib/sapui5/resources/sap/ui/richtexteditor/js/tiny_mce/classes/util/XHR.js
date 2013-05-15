/**
 * XHR.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
tinymce.create('static tinymce.util.XHR',{send:function(o){var x,t,w=window,c=0;function r(){if(!o.async||x.readyState==4||c++>10000){if(o.success&&c<10000&&x.status==200)o.success.call(o.success_scope,''+x.responseText,x,o);else if(o.error)o.error.call(o.error_scope,c>10000?'TIMED_OUT':'GENERAL',x,o);x=null}else w.setTimeout(r,10)};o.scope=o.scope||this;o.success_scope=o.success_scope||o.scope;o.error_scope=o.error_scope||o.scope;o.async=o.async===false?false:true;o.data=o.data||'';function g(s){x=0;try{x=new ActiveXObject(s)}catch(e){}return x};x=w.XMLHttpRequest?new XMLHttpRequest():g('Microsoft.XMLHTTP')||g('Msxml2.XMLHTTP');if(x){if(x.overrideMimeType)x.overrideMimeType(o.content_type);x.open(o.type||(o.data?'POST':'GET'),o.url,o.async);if(o.content_type)x.setRequestHeader('Content-Type',o.content_type);x.setRequestHeader('X-Requested-With','XMLHttpRequest');x.send(o.data);if(!o.async)return r();t=w.setTimeout(r,10)}}});
