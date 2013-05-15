/**
 * Control.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(a){var D=a.DOM,i=a.is;a.create('tinymce.ui.Control',{Control:function(b,s,e){this.id=b;this.settings=s=s||{};this.rendered=false;this.onRender=new a.util.Dispatcher(this);this.classPrefix='';this.scope=s.scope||this;this.disabled=0;this.active=0;this.editor=e},setAriaProperty:function(p,v){var e=D.get(this.id+'_aria')||D.get(this.id);if(e){D.setAttrib(e,'aria-'+p,!!v)}},focus:function(){D.get(this.id).focus()},setDisabled:function(s){if(s!=this.disabled){this.setAriaProperty('disabled',s);this.setState('Disabled',s);this.setState('Enabled',!s);this.disabled=s}},isDisabled:function(){return this.disabled},setActive:function(s){if(s!=this.active){this.setState('Active',s);this.active=s;this.setAriaProperty('pressed',s)}},isActive:function(){return this.active},setState:function(c,s){var n=D.get(this.id);c=this.classPrefix+c;if(s)D.addClass(n,c);else D.removeClass(n,c)},isRendered:function(){return this.rendered},renderHTML:function(){},renderTo:function(n){D.setHTML(n,this.renderHTML())},postRender:function(){var t=this,b;if(i(t.disabled)){b=t.disabled;t.disabled=-1;t.setDisabled(b)}if(i(t.active)){b=t.active;t.active=-1;t.setActive(b)}},remove:function(){D.remove(this.id);this.destroy()},destroy:function(){a.dom.Event.clear(this.id)}})})(tinymce);
