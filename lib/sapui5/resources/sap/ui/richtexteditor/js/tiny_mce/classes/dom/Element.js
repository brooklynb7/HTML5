/**
 * Element.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(c){c.dom.Element=function(d,e){var t=this,g,j;t.settings=e=e||{};t.id=d;t.dom=g=e.dom||c.DOM;if(!c.isIE)j=g.get(t.id);c.each(('getPos,getRect,getParent,add,setStyle,getStyle,setStyles,'+'setAttrib,setAttribs,getAttrib,addClass,removeClass,'+'hasClass,getOuterHTML,setOuterHTML,remove,show,hide,'+'isHidden,setHTML,get').split(/,/),function(k){t[k]=function(){var a=[d],i;for(i=0;i<arguments.length;i++)a.push(arguments[i]);a=g[k].apply(g,a);t.update(k);return a}});c.extend(t,{on:function(n,f,s){return c.dom.Event.add(t.id,n,f,s)},getXY:function(){return{x:parseInt(t.getStyle('left')),y:parseInt(t.getStyle('top'))}},getSize:function(){var n=g.get(t.id);return{w:parseInt(t.getStyle('width')||n.clientWidth),h:parseInt(t.getStyle('height')||n.clientHeight)}},moveTo:function(x,y){t.setStyles({left:x,top:y})},moveBy:function(x,y){var p=t.getXY();t.moveTo(p.x+x,p.y+y)},resizeTo:function(w,h){t.setStyles({width:w,height:h})},resizeBy:function(w,h){var s=t.getSize();t.resizeTo(s.w+w,s.h+h)},update:function(k){var b;if(c.isIE6&&e.blocker){k=k||'';if(k.indexOf('get')===0||k.indexOf('has')===0||k.indexOf('is')===0)return;if(k=='remove'){g.remove(t.blocker);return}if(!t.blocker){t.blocker=g.uniqueId();b=g.add(e.container||g.getRoot(),'iframe',{id:t.blocker,style:'position:absolute;',frameBorder:0,src:'javascript:""'});g.setStyle(b,'opacity',0)}else b=g.get(t.blocker);g.setStyles(b,{left:t.getStyle('left',1),top:t.getStyle('top',1),width:t.getStyle('width',1),height:t.getStyle('height',1),display:t.getStyle('display',1),zIndex:parseInt(t.getStyle('zIndex',1)||0)-1})}}})}})(tinymce);
