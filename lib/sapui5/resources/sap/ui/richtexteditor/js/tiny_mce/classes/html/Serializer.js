/**
 * Serializer.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(t){t.html.Serializer=function(s,a){var b=this,w=new t.html.Writer(s);s=s||{};s.validate="validate"in s?s.validate:true;b.schema=a=a||new t.html.Schema();b.writer=w;b.serialize=function(n){var h,v;v=s.validate;h={3:function(n,r){w.text(n.value,n.raw)},8:function(n){w.comment(n.value)},7:function(n){w.pi(n.name,n.value)},10:function(n){w.doctype(n.value)},4:function(n){w.cdata(n.value)},11:function(n){if((n=n.firstChild)){do{c(n)}while(n=n.next)}}};w.reset();function c(n){var d=h[n.type],e,f,g,j,k,m,i,l,o;if(!d){e=n.name;f=n.shortEnded;g=n.attributes;if(v&&g&&g.length>1){m=[];m.map={};o=a.getElementRule(n.name);for(i=0,l=o.attributesOrder.length;i<l;i++){j=o.attributesOrder[i];if(j in g.map){k=g.map[j];m.map[j]=k;m.push({name:j,value:k})}}for(i=0,l=g.length;i<l;i++){j=g[i].name;if(!(j in m.map)){k=g.map[j];m.map[j]=k;m.push({name:j,value:k})}}g=m}w.start(n.name,g,f);if(!f){if((n=n.firstChild)){do{c(n)}while(n=n.next)}w.end(e)}}else d(n)}if(n.type==1&&!s.inner)c(n);else h[11](n);return w.getContent()}}})(tinymce);
