/**
 * ScriptLoader.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(a){a.dom.ScriptLoader=function(s){var Q=0,L=1,b=2,c={},q=[],d={},e=[],l=0,u;function f(g,h){var t=this,i=a.DOM,j,k,m,n;function o(){i.remove(n);if(j)j.onreadystatechange=j.onload=j=null;h()};function p(){if(typeof(console)!=="undefined"&&console.log)console.log("Failed to load: "+g)};n=i.uniqueId();if(a.isIE6){k=new a.util.URI(g);m=location;if(k.host==m.hostname&&k.port==m.port&&(k.protocol+':')==m.protocol&&k.protocol.toLowerCase()!='file'){a.util.XHR.send({url:a._addVer(k.getURI()),success:function(r){var v=i.create('script',{type:'text/javascript'});v.text=r;document.getElementsByTagName('head')[0].appendChild(v);i.remove(v);o()},error:p});return}}j=document.createElement('script');j.id=n;j.type='text/javascript';j.src=a._addVer(g);if(!a.isIE)j.onload=o;j.onerror=p;if(!a.isOpera){j.onreadystatechange=function(){var r=j.readyState;if(r=='complete'||r=='loaded')o()}}(document.getElementsByTagName('head')[0]||document.body).appendChild(j)};this.isDone=function(g){return c[g]==b};this.markDone=function(g){c[g]=b};this.add=this.load=function(g,h,i){var j,k=c[g];if(k==u){q.push(g);c[g]=Q}if(h){if(!d[g])d[g]=[];d[g].push({func:h,scope:i||this})}};this.loadQueue=function(g,h){this.loadScripts(q,g,h)};this.loadScripts=function(g,h,i){var j;function k(m){a.each(d[m],function(h){h.func.call(h.scope)});d[m]=u};e.push({func:h,scope:i||this});j=function(){var m=a.grep(g);g.length=0;a.each(m,function(n){if(c[n]==b){k(n);return}if(c[n]!=L){c[n]=L;l++;f(n,function(){c[n]=b;l--;k(n);j()})}});if(!l){a.each(e,function(h){h.func.call(h.scope)});e.length=0}};j()}};a.ScriptLoader=new a.dom.ScriptLoader()})(tinymce);
