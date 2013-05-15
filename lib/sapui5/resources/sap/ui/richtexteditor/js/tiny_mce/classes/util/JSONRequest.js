/**
 * JSONRequest.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(){var e=tinymce.extend,J=tinymce.util.JSON,X=tinymce.util.XHR;tinymce.create('tinymce.util.JSONRequest',{JSONRequest:function(s){this.settings=e({},s);this.count=0},send:function(o){var a=o.error,s=o.success;o=e(this.settings,o);o.success=function(c,x){c=J.parse(c);if(typeof(c)=='undefined'){c={error:'JSON Parse error.'}}if(c.error)a.call(o.error_scope||o.scope,c.error,x);else s.call(o.success_scope||o.scope,c.result)};o.error=function(t,x){if(a)a.call(o.error_scope||o.scope,t,x)};o.data=J.serialize({id:o.id||'c'+(this.count++),method:o.method,params:o.params});o.content_type='application/json';X.send(o)},'static':{sendRPC:function(o){return new tinymce.util.JSONRequest().send(o)}}})}());
