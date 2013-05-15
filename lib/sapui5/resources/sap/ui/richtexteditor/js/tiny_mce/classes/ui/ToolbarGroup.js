/**
 * ToolbarGroup.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(a){var d=a.DOM,e=a.each,E=a.dom.Event;a.create('tinymce.ui.ToolbarGroup:tinymce.ui.Container',{renderHTML:function(){var t=this,h=[],c=t.controls,e=a.each,s=t.settings;h.push('<div id="'+t.id+'" role="group" aria-labelledby="'+t.id+'_voice">');h.push("<span role='application'>");h.push('<span id="'+t.id+'_voice" class="mceVoiceLabel" style="display:none;">'+d.encode(s.name)+'</span>');e(c,function(b){h.push(b.renderHTML())});h.push("</span>");h.push('</div>');return h.join('')},focus:function(){var t=this;d.get(t.id).focus()},postRender:function(){var t=this,i=[];e(t.controls,function(b){e(b.controls,function(c){if(c.id){i.push(c)}})});t.keyNav=new a.ui.KeyboardNavigation({root:t.id,items:i,onCancel:function(){if(a.isWebKit){d.get(t.editor.id+"_ifr").focus()}t.editor.focus()},excludeFromTabOrder:!t.settings.tab_focus_toolbar})},destroy:function(){var s=this;s.parent();s.keyNav.destroy();E.clear(s.id)}})})(tinymce);
