/**
 * Container.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
tinymce.create('tinymce.ui.Container:tinymce.ui.Control',{Container:function(i,s,e){this.parent(i,s,e);this.controls=[];this.lookup={}},add:function(c){this.lookup[c.id]=c;this.controls.push(c);return c},get:function(n){return this.lookup[n]}});
