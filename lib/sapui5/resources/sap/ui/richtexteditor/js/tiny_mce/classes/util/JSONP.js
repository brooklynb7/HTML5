/**
 * JSONP.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
tinymce.create('static tinymce.util.JSONP',{callbacks:{},count:0,send:function(o){var t=this,d=tinymce.DOM,c=o.count!==undefined?o.count:t.count,i='tinymce_jsonp_'+c;t.callbacks[c]=function(j){d.remove(i);delete t.callbacks[c];o.callback(j)};d.add(d.doc.body,'script',{id:i,src:o.url,type:'text/javascript'});t.count++}});
