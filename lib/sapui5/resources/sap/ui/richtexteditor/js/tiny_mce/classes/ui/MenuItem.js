/**
 * MenuItem.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(a){var i=a.is,D=a.DOM,e=a.each,w=a.walk;a.create('tinymce.ui.MenuItem:tinymce.ui.Control',{MenuItem:function(b,s){this.parent(b,s);this.classPrefix='mceMenuItem'},setSelected:function(s){this.setState('Selected',s);this.setAriaProperty('checked',!!s);this.selected=s},isSelected:function(){return this.selected},postRender:function(){var t=this;t.parent();if(i(t.selected))t.setSelected(t.selected)}})})(tinymce);
