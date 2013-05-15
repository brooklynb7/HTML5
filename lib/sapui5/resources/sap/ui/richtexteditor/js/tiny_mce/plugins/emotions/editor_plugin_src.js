/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */
(function(t){t.create('tinymce.plugins.EmotionsPlugin',{init:function(e,u){e.addCommand('mceEmotion',function(){e.windowManager.open({file:u+'/emotions.htm',width:250+parseInt(e.getLang('emotions.delta_width',0)),height:160+parseInt(e.getLang('emotions.delta_height',0)),inline:1},{plugin_url:u})});e.addButton('emotions',{title:'emotions.emotions_desc',cmd:'mceEmotion'})},getInfo:function(){return{longname:'Emotions',author:'Moxiecode Systems AB',authorurl:'http://tinymce.moxiecode.com',infourl:'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/emotions',version:t.majorVersion+"."+t.minorVersion}}});t.PluginManager.add('emotions',t.plugins.EmotionsPlugin)})(tinymce);
