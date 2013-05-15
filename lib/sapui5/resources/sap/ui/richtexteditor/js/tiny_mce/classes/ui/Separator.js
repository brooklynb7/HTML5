/**
 * Separator.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
tinymce.create('tinymce.ui.Separator:tinymce.ui.Control',{Separator:function(i,s){this.parent(i,s);this.classPrefix='mceSeparator';this.setDisabled(true)},renderHTML:function(){return tinymce.DOM.createHTML('span',{'class':this.classPrefix,role:'separator','aria-orientation':'vertical',tabindex:'-1'})}});
