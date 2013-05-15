/**
 * editable_selects.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */
var TinyMCE_EditableSelects={editSelectElm:null,init:function(){var n=document.getElementsByTagName("select"),i,d=document,o;for(i=0;i<n.length;i++){if(n[i].className.indexOf('mceEditableSelect')!=-1){o=new Option(tinyMCEPopup.editor.translate('value'),'__mce_add_custom__');o.className='mceAddSelectValue';n[i].options[n[i].options.length]=o;n[i].onchange=TinyMCE_EditableSelects.onChangeEditableSelect}}},onChangeEditableSelect:function(e){var d=document,n,s=window.event?window.event.srcElement:e.target;if(s.options[s.selectedIndex].value=='__mce_add_custom__'){n=d.createElement("input");n.id=s.id+"_custom";n.name=s.name+"_custom";n.type="text";n.style.width=s.offsetWidth+'px';s.parentNode.insertBefore(n,s);s.style.display='none';n.focus();n.onblur=TinyMCE_EditableSelects.onBlurEditableSelectInput;n.onkeydown=TinyMCE_EditableSelects.onKeyDown;TinyMCE_EditableSelects.editSelectElm=s}},onBlurEditableSelectInput:function(){var s=TinyMCE_EditableSelects.editSelectElm;if(s){if(s.previousSibling.value!=''){addSelectValue(document.forms[0],s.id,s.previousSibling.value,s.previousSibling.value);selectByValue(document.forms[0],s.id,s.previousSibling.value)}else selectByValue(document.forms[0],s.id,'');s.style.display='inline';s.parentNode.removeChild(s.previousSibling);TinyMCE_EditableSelects.editSelectElm=null}},onKeyDown:function(e){e=e||window.event;if(e.keyCode==13)TinyMCE_EditableSelects.onBlurEditableSelectInput()}};
