/**
 * WindowManager.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(g){var D=g.util.Dispatcher,h=g.each,i=g.isIE,j=g.isOpera;g.create('tinymce.WindowManager',{WindowManager:function(e){var t=this;t.editor=e;t.onOpen=new D(t);t.onClose=new D(t);t.params={};t.features={}},open:function(s,p){var t=this,f='',x,y,m=t.editor.settings.dialog_type=='modal',w,a,b,c=g.DOM.getViewPort(),u;s=s||{};p=p||{};a=j?c.w:screen.width;b=j?c.h:screen.height;s.name=s.name||'mc_'+new Date().getTime();s.width=parseInt(s.width||320);s.height=parseInt(s.height||240);s.resizable=true;s.left=s.left||parseInt(a/2.0)-(s.width/2.0);s.top=s.top||parseInt(b/2.0)-(s.height/2.0);p.inline=false;p.mce_width=s.width;p.mce_height=s.height;p.mce_auto_focus=s.auto_focus;if(m){if(i){s.center=true;s.help=false;s.dialogWidth=s.width+'px';s.dialogHeight=s.height+'px';s.scroll=s.scrollbars||false}}h(s,function(v,k){if(g.is(v,'boolean'))v=v?'yes':'no';if(!/^(name|url)$/.test(k)){if(i&&m)f+=(f?';':'')+k+':'+v;else f+=(f?',':'')+k+'='+v}});t.features=s;t.params=p;t.onOpen.dispatch(t,s,p);u=s.url||s.file;u=g._addVer(u);try{if(i&&m){w=1;window.showModalDialog(u,window,f)}else w=window.open(u,s.name,f)}catch(e){}if(!w)alert(t.editor.getLang('popup_blocked'))},close:function(w){w.close();this.onClose.dispatch(this)},createInstance:function(k,a,b,c,d,e){var f=g.resolve(k);return new f(a,b,c,d,e)},confirm:function(t,c,s,w){w=w||window;c.call(s||this,w.confirm(this._decode(this.editor.getLang(t,t))))},alert:function(a,c,s,w){var t=this;w=w||window;w.alert(t._decode(t.editor.getLang(a,a)));if(c)c.call(s||t)},resizeBy:function(d,a,w){w.resizeBy(d,a)},_decode:function(s){return g.DOM.decode(s).replace(/\\n/g,'\n')}})}(tinymce));
