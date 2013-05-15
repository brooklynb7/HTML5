/**
 * Menu.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(a){var i=a.is,D=a.DOM,e=a.each,w=a.walk;a.create('tinymce.ui.Menu:tinymce.ui.MenuItem',{Menu:function(b,s){var t=this;t.parent(b,s);t.items={};t.collapsed=false;t.menuCount=0;t.onAddItem=new a.util.Dispatcher(this)},expand:function(d){var t=this;if(d){w(t,function(o){if(o.expand)o.expand()},'items',t)}t.collapsed=false},collapse:function(d){var t=this;if(d){w(t,function(o){if(o.collapse)o.collapse()},'items',t)}t.collapsed=true},isCollapsed:function(){return this.collapsed},add:function(o){if(!o.settings)o=new a.ui.MenuItem(o.id||D.uniqueId(),o);this.onAddItem.dispatch(this,o);return this.items[o.id]=o},addSeparator:function(){return this.add({separator:true})},addMenu:function(o){if(!o.collapse)o=this.createMenu(o);this.menuCount++;return this.add(o)},hasMenus:function(){return this.menuCount!==0},remove:function(o){delete this.items[o.id]},removeAll:function(){var t=this;w(t,function(o){if(o.removeAll)o.removeAll();else o.remove();o.destroy()},'items',t);t.items={}},createMenu:function(o){var m=new a.ui.Menu(o.id||D.uniqueId(),o);m.onAddItem.add(this.onAddItem.dispatch,this.onAddItem);return m}})})(tinymce);
