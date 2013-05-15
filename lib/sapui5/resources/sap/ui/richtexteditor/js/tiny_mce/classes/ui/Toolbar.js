/**
 * Toolbar.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(a){var d=a.DOM,e=a.each;a.create('tinymce.ui.Toolbar:tinymce.ui.Container',{renderHTML:function(){var t=this,h='',c,b,s=t.settings,i,p,n,f;f=t.controls;for(i=0;i<f.length;i++){b=f[i];p=f[i-1];n=f[i+1];if(i===0){c='mceToolbarStart';if(b.Button)c+=' mceToolbarStartButton';else if(b.SplitButton)c+=' mceToolbarStartSplitButton';else if(b.ListBox)c+=' mceToolbarStartListBox';h+=d.createHTML('td',{'class':c},d.createHTML('span',null,'<!-- IE -->'))}if(p&&b.ListBox){if(p.Button||p.SplitButton)h+=d.createHTML('td',{'class':'mceToolbarEnd'},d.createHTML('span',null,'<!-- IE -->'))}if(d.stdMode)h+='<td style="position: relative">'+b.renderHTML()+'</td>';else h+='<td>'+b.renderHTML()+'</td>';if(n&&b.ListBox){if(n.Button||n.SplitButton)h+=d.createHTML('td',{'class':'mceToolbarStart'},d.createHTML('span',null,'<!-- IE -->'))}}c='mceToolbarEnd';if(b.Button)c+=' mceToolbarEndButton';else if(b.SplitButton)c+=' mceToolbarEndSplitButton';else if(b.ListBox)c+=' mceToolbarEndListBox';h+=d.createHTML('td',{'class':c},d.createHTML('span',null,'<!-- IE -->'));return d.createHTML('table',{id:t.id,'class':'mceToolbar'+(s['class']?' '+s['class']:''),cellpadding:'0',cellspacing:'0',align:t.settings.align||'',role:'presentation',tabindex:'-1'},'<tbody><tr>'+h+'</tr></tbody>')}})})(tinymce);
