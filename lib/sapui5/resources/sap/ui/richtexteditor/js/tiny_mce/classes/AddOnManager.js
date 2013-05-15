/**
 * AddOnManager.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(a){var D=a.util.Dispatcher,e=a.each;a.create('tinymce.AddOnManager',{AddOnManager:function(){var s=this;s.items=[];s.urls={};s.lookup={};s.onAdd=new D(s)},get:function(n){if(this.lookup[n]){return this.lookup[n].instance}else{return undefined}},dependencies:function(n){var r;if(this.lookup[n]){r=this.lookup[n].dependencies}return r||[]},requireLangPack:function(n){var s=a.settings;if(s&&s.language&&s.language_load!==false)a.ScriptLoader.add(this.urls[n]+'/langs/'+s.language+'.js')},add:function(i,o,d){this.items.push(o);this.lookup[i]={instance:o,dependencies:d};this.onAdd.dispatch(this,i,o);return o},createUrl:function(b,d){if(typeof d==="object"){return d}else{return{prefix:b.prefix,resource:d,suffix:b.suffix}}},addComponents:function(p,s){var b=this.urls[p];a.each(s,function(c){a.ScriptLoader.add(b+"/"+c)})},load:function(n,u,c,s){var t=this,b=u;function l(){var d=t.dependencies(n);a.each(d,function(f){var g=t.createUrl(u,f);t.load(g.resource,g,undefined,undefined)});if(c){if(s){c.call(s)}else{c.call(a.ScriptLoader)}}}if(t.urls[n])return;if(typeof u==="object")b=u.prefix+u.resource+u.suffix;if(b.indexOf('/')!==0&&b.indexOf('://')==-1)b=a.baseURL+'/'+b;t.urls[n]=b.substring(0,b.lastIndexOf('/'));if(t.lookup[n]){l()}else{a.ScriptLoader.add(b,l,s)}}});a.PluginManager=new a.AddOnManager();a.ThemeManager=new a.AddOnManager()}(tinymce));
