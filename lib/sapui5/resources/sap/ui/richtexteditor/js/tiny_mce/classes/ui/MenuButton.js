/**
 * MenuButton.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(a){var D=a.DOM,E=a.dom.Event,b=a.each;a.create('tinymce.ui.MenuButton:tinymce.ui.Button',{MenuButton:function(i,s,e){this.parent(i,s,e);this.onRenderMenu=new a.util.Dispatcher(this);s.menu_container=s.menu_container||D.doc.body},showMenu:function(){var t=this,p,c,e=D.get(t.id),m;if(t.isDisabled())return;if(!t.isMenuRendered){t.renderMenu();t.isMenuRendered=true}if(t.isMenuVisible)return t.hideMenu();p=D.getPos(t.settings.menu_container);c=D.getPos(e);m=t.menu;m.settings.offset_x=c.x;m.settings.offset_y=c.y;m.settings.vp_offset_x=c.x;m.settings.vp_offset_y=c.y;m.settings.keyboard_focus=t._focused;m.showMenu(0,e.firstChild.clientHeight);E.add(D.doc,'mousedown',t.hideMenu,t);t.setState('Selected',1);t.isMenuVisible=1},renderMenu:function(){var t=this,m;m=t.settings.control_manager.createDropMenu(t.id+'_menu',{menu_line:1,'class':this.classPrefix+'Menu',icons:t.settings.icons});m.onHideMenu.add(function(){t.hideMenu();t.focus()});t.onRenderMenu.dispatch(t,m);t.menu=m},hideMenu:function(e){var t=this;if(e&&e.type=="mousedown"&&D.getParent(e.target,function(e){return e.id===t.id||e.id===t.id+'_open'}))return;if(!e||!D.getParent(e.target,'.mceMenu')){t.setState('Selected',0);E.remove(D.doc,'mousedown',t.hideMenu,t);if(t.menu)t.menu.hideMenu()}t.isMenuVisible=0},postRender:function(){var t=this,s=t.settings;E.add(t.id,'click',function(){if(!t.isDisabled()){if(s.onclick)s.onclick(t.value);t.showMenu()}})}})})(tinymce);
