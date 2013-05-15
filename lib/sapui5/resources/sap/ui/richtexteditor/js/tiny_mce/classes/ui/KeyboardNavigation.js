/**
 * KeyboardNavigation.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(a){var E=a.dom.Event,e=a.each;a.create('tinymce.ui.KeyboardNavigation',{KeyboardNavigation:function(s,d){var t=this,r=s.root,i=s.items,b=s.enableUpDown,c=s.enableLeftRight||!s.enableUpDown,f=s.excludeFromTabOrder,g,h,j,k,l;d=d||a.DOM;g=function(n){l=n.target.id};h=function(n){d.setAttrib(n.target.id,'tabindex','-1')};k=function(n){var o=d.get(l);d.setAttrib(o,'tabindex','0');o.focus()};t.focus=function(){d.get(l).focus()};t.destroy=function(){e(i,function(n){var o=d.get(n.id);d.unbind(o,'focus',g);d.unbind(o,'blur',h)});var m=d.get(r);d.unbind(m,'focus',k);d.unbind(m,'keydown',j);i=d=r=t.focus=g=h=j=k=null;t.destroy=function(){}};t.moveFocus=function(n,o){var p=-1,q=t.controls,u;if(!l)return;e(i,function(v,w){if(v.id===l){p=w;return false}});p+=n;if(p<0){p=i.length-1}else if(p>=i.length){p=0}u=i[p];d.setAttrib(l,'tabindex','-1');d.setAttrib(u.id,'tabindex','0');d.get(u.id).focus();if(s.actOnFocus){s.onAction(u.id)}if(o)E.cancel(o)};j=function(n){var D=37,o=39,p=38,q=40,u=27,v=14,w=13,x=32;switch(n.keyCode){case D:if(c)t.moveFocus(-1);break;case o:if(c)t.moveFocus(1);break;case p:if(b)t.moveFocus(-1);break;case q:if(b)t.moveFocus(1);break;case u:if(s.onCancel){s.onCancel();E.cancel(n)}break;case v:case w:case x:if(s.onAction){s.onAction(l);E.cancel(n)}break}};e(i,function(n,o){var p,q;if(!n.id){n.id=d.uniqueId('_mce_item_')}q=d.get(n.id);if(f){d.bind(q,'blur',h);p='-1'}else{p=(o===0?'0':'-1')}q.setAttribute('tabindex',p);d.bind(q,'focus',g)});if(i[0]){l=i[0].id}d.setAttrib(r,'tabindex','-1');var m=d.get(r);d.bind(m,'focus',k);d.bind(m,'keydown',j)}})})(tinymce);
