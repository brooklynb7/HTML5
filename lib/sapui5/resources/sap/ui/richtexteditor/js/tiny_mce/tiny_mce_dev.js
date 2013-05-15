/**
 * tiny_mce_dev.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 *
 * This file should only be used while developing TinyMCE 
 * tiny_mce.js or tiny_mce_src.js should be used in a production environment.
 * This file loads the js files from classes instead of a merged copy.
 */
(function(){var i,n=document.getElementsByTagName('script'),b,s,p,l,q='',a,c=[];if(window.tinyMCEPreInit){b=tinyMCEPreInit.base;q=tinyMCEPreInit.query||''}else{for(i=0;i<n.length;i++){s=n[i].src;if(s&&s.indexOf("tiny_mce_dev.js")!=-1){b=s.substring(0,s.lastIndexOf('/'));if((p=s.indexOf('?'))!=-1)q=s.substring(p+1)}}}l=q.split('&');q={};for(i=0;i<l.length;i++){a=l[i].split('=');q[unescape(a[0])]=unescape(a[1])}n=null;function d(u){c.push(b+'/classes/'+u)};function e(){var i,h='';for(i=0;i<c.length;i++)h+='<script type="text/javascript" src="'+c[i]+'"></script>\n';document.write(h)};if(q.debug&&!("console"in window)){d('firebug/firebug-lite.js')}if(q.coverage){b=b+'/../../tmp/jscoverage';window.tinyMCEPreInit={base:b,suffix:'_src',query:''}}d('tinymce.js');if(q.api)d('adapter/'+q.api+'/adapter.js');d('util/Dispatcher.js');d('util/URI.js');d('util/Cookie.js');d('util/JSON.js');d('util/JSONP.js');d('util/XHR.js');d('util/JSONRequest.js');d('util/VK.js');d('util/Quirks.js');d('html/Entities.js');d('html/Styles.js');d('html/Schema.js');d('html/SaxParser.js');d('html/Node.js');d('html/DomParser.js');d('html/Serializer.js');d('html/Writer.js');d('dom/EventUtils.js');d('dom/TreeWalker.js');d('dom/DOMUtils.js');d('dom/Range.js');d('dom/TridentSelection.js');d('dom/Sizzle.js');d('dom/Element.js');d('dom/Selection.js');d('dom/Serializer.js');d('dom/ScriptLoader.js');d('dom/RangeUtils.js');d('ui/KeyboardNavigation.js');d('ui/Control.js');d('ui/Container.js');d('ui/Separator.js');d('ui/MenuItem.js');d('ui/Menu.js');d('ui/DropMenu.js');d('ui/Button.js');d('ui/ListBox.js');d('ui/NativeListBox.js');d('ui/MenuButton.js');d('ui/SplitButton.js');d('ui/ColorSplitButton.js');d('ui/ToolbarGroup.js');d('ui/Toolbar.js');d('AddOnManager.js');d('EditorManager.js');d('Editor.js');d('Editor.Events.js');d('EditorCommands.js');d('UndoManager.js');d('ForceBlocks.js');d('ControlManager.js');d('WindowManager.js');d('Formatter.js');d('LegacyInput.js');d('EnterKey.js');e()}());
