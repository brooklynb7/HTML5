/**
 * Writer.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
tinymce.html.Writer=
function(s){var h=[],a,b,c,e,d;s=s||{};a=s.indent;b=tinymce.makeMap(s.indent_before||'');c=tinymce.makeMap(s.indent_after||'');e=tinymce.html.Entities.getEncodeFunc(s.entity_encoding||'raw',s.entities);d=s.element_format=="html";return{start:function(n,f,g){var i,l,j,v;if(a&&b[n]&&h.length>0){v=h[h.length-1];if(v.length>0&&v!=='\n')h.push('\n')}h.push('<',n);if(f){for(i=0,l=f.length;i<l;i++){j=f[i];h.push(' ',j.name,'="',e(j.value,true),'"')}}if(!g||d)h[h.length]='>';else h[h.length]=' />';if(g&&a&&c[n]&&h.length>0){v=h[h.length-1];if(v.length>0&&v!=='\n')h.push('\n')}},end:function(n){var v;h.push('</',n,'>');if(a&&c[n]&&h.length>0){v=h[h.length-1];if(v.length>0&&v!=='\n')h.push('\n')}},text:function(t,r){if(t.length>0)h[h.length]=r?t:e(t)},cdata:function(t){h.push('<![CDATA[',t,']]>')},comment:function(t){h.push('<!--',t,'-->')},pi:function(n,t){if(t)h.push('<?',n,' ',t,'?>');else h.push('<?',n,'?>');if(a)h.push('\n')},doctype:function(t){h.push('<!DOCTYPE',t,'>',a?'\n':'')},reset:function(){h.length=0},getContent:function(){return h.join('').replace(/\n$/,'')}}}
;
