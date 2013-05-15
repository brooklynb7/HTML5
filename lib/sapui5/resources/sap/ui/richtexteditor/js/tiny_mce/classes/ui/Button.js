/**
 * Button.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(a){var D=a.DOM;a.create('tinymce.ui.Button:tinymce.ui.Control',{Button:function(i,s,e){this.parent(i,s,e);this.classPrefix='mceButton'},renderHTML:function(){var c=this.classPrefix,s=this.settings,h,l;l=D.encode(s.label||'');h='<a role="button" id="'+this.id+'" href="javascript:;" class="'+c+' '+c+'Enabled '+s['class']+(l?' '+c+'Labeled':'')+'" onmousedown="return false;" onclick="return false;" aria-labelledby="'+this.id+'_voice" title="'+D.encode(s.title)+'">';if(s.image&&!(this.editor&&this.editor.forcedHighContrastMode))h+='<span class="mceIcon '+s['class']+'"><img class="mceIcon" src="'+s.image+'" alt="'+D.encode(s.title)+'" /></span>'+(l?'<span class="'+c+'Label">'+l+'</span>':'');else h+='<span class="mceIcon '+s['class']+'"></span>'+(l?'<span class="'+c+'Label">'+l+'</span>':'');h+='<span class="mceVoiceLabel mceIconOnly" style="display: none;" id="'+this.id+'_voice">'+s.title+'</span>';h+='</a>';return h},postRender:function(){var t=this,s=t.settings,i;if(a.isIE&&t.editor){a.dom.Event.add(t.id,'mousedown',function(e){var n=t.editor.selection.getNode().nodeName;i=n==='IMG'?t.editor.selection.getBookmark():null})}a.dom.Event.add(t.id,'click',function(e){if(!t.isDisabled()){if(a.isIE&&t.editor&&i!==null){t.editor.selection.moveToBookmark(i)}return s.onclick.call(s.scope,e)}});a.dom.Event.add(t.id,'keyup',function(e){if(!t.isDisabled()&&e.keyCode==a.VK.SPACEBAR)return s.onclick.call(s.scope,e)})}})})(tinymce);
