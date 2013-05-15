/**
 * LegacyInput.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
tinymce.onAddEditor.add(function(t,e){var f,a,d,s=e.settings;function r(n,b){t.each(b,function(v,g){if(v)d.setStyle(n,g,v)});d.rename(n,'span')};function c(b,p){d=b.dom;if(s.convert_fonts_to_spans){t.each(d.select('font,u,strike',p.node),function(n){f[n.nodeName.toLowerCase()](e.dom,n)})}};if(s.inline_styles){a=t.explode(s.font_size_legacy_values);f={font:function(d,n){r(n,{backgroundColor:n.style.backgroundColor,color:n.color,fontFamily:n.face,fontSize:a[parseInt(n.size,10)-1]})},u:function(d,n){r(n,{textDecoration:'underline'})},strike:function(d,n){r(n,{textDecoration:'line-through'})}};e.onPreProcess.add(c);e.onSetContent.add(c);e.onInit.add(function(){e.selection.onSetContent.add(c)})}});
