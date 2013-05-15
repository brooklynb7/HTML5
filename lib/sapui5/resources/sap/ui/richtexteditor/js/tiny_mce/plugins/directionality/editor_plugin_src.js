/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */
(function(){tinymce.create('tinymce.plugins.Directionality',{init:function(e,u){var t=this;t.editor=e;function s(d){var a=e.dom,c,b=e.selection.getSelectedBlocks();if(b.length){c=a.getAttrib(b[0],"dir");tinymce.each(b,function(f){if(!a.getParent(f.parentNode,"*[dir='"+d+"']",a.getRoot())){if(c!=d){a.setAttrib(f,"dir",d)}else{a.setAttrib(f,"dir",null)}}});e.nodeChanged()}}e.addCommand('mceDirectionLTR',function(){s("ltr")});e.addCommand('mceDirectionRTL',function(){s("rtl")});e.addButton('ltr',{title:'directionality.ltr_desc',cmd:'mceDirectionLTR'});e.addButton('rtl',{title:'directionality.rtl_desc',cmd:'mceDirectionRTL'});e.onNodeChange.add(t._nodeChange,t)},getInfo:function(){return{longname:'Directionality',author:'Moxiecode Systems AB',authorurl:'http://tinymce.moxiecode.com',infourl:'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/directionality',version:tinymce.majorVersion+"."+tinymce.minorVersion}},_nodeChange:function(e,c,n){var d=e.dom,a;n=d.getParent(n,d.isBlock);if(!n){c.setDisabled('ltr',1);c.setDisabled('rtl',1);return}a=d.getAttrib(n,'dir');c.setActive('ltr',a=="ltr");c.setDisabled('ltr',0);c.setActive('rtl',a=="rtl");c.setDisabled('rtl',0)}});tinymce.PluginManager.add('directionality',tinymce.plugins.Directionality)})();
