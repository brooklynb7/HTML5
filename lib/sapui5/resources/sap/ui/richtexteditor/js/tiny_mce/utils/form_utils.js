/**
 * form_utils.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */
var themeBaseURL=tinyMCEPopup.editor.baseURI.toAbsolute('themes/'+tinyMCEPopup.getParam("theme"));
function getColorPickerHTML(i,t){var h="",d=tinyMCEPopup.dom;if(label=d.select('label[for='+t+']')[0]){label.id=label.id||d.uniqueId()}h+='<a role="button" aria-labelledby="'+i+'_label" id="'+i+'_link" href="javascript:;" onclick="tinyMCEPopup.pickColor(event,\''+t+'\');" onmousedown="return false;" class="pickcolor">';h+='<span id="'+i+'" title="'+tinyMCEPopup.getLang('browse')+'">&nbsp;<span id="'+i+'_label" class="mceVoiceLabel mceIconOnly" style="display:none;">'+tinyMCEPopup.getLang('browse')+'</span></span></a>';return h}
function updateColor(i,f){document.getElementById(i).style.backgroundColor=document.forms[0].elements[f].value}
function setBrowserDisabled(i,s){var a=document.getElementById(i);var l=document.getElementById(i+"_link");if(l){if(s){l.setAttribute("realhref",l.getAttribute("href"));l.removeAttribute("href");tinyMCEPopup.dom.addClass(a,'disabled')}else{if(l.getAttribute("realhref"))l.setAttribute("href",l.getAttribute("realhref"));tinyMCEPopup.dom.removeClass(a,'disabled')}}}
function getBrowserHTML(i,t,a,p){var o=p+"_"+a+"_browser_callback",c,h;c=tinyMCEPopup.getParam(o,tinyMCEPopup.getParam("file_browser_callback"));if(!c)return"";h="";h+='<a id="'+i+'_link" href="javascript:openBrowser(\''+i+'\',\''+t+'\', \''+a+'\',\''+o+'\');" onmousedown="return false;" class="browse">';h+='<span id="'+i+'" title="'+tinyMCEPopup.getLang('browse')+'">&nbsp;</span></a>';return h}
function openBrowser(i,t,a,o){var b=document.getElementById(i);if(b.className!="mceButtonDisabled")tinyMCEPopup.openBrowser(t,a,o)}
function selectByValue(f,a,v,b,c){if(!f||!f.elements[a])return;if(!v)v="";var s=f.elements[a];var d=false;for(var i=0;i<s.options.length;i++){var o=s.options[i];if(o.value==v||(c&&o.value.toLowerCase()==v.toLowerCase())){o.selected=true;d=true}else o.selected=false}if(!d&&b&&v!=''){var o=new Option(v,v);o.selected=true;s.options[s.options.length]=o;s.selectedIndex=s.options.length-1}return d}
function getSelectValue(f,a){var e=f.elements[a];if(e==null||e.options==null||e.selectedIndex===-1)return"";return e.options[e.selectedIndex].value}
function addSelectValue(f,a,n,v){var s=f.elements[a];var o=new Option(n,v);s.options[s.options.length]=o}
function addClassesToList(l,s){var a=document.getElementById(l);var b=tinyMCEPopup.getParam('theme_advanced_styles',false);b=tinyMCEPopup.getParam(s,b);if(b){var c=b.split(';');for(var i=0;i<c.length;i++){if(c!=""){var k,v;k=c[i].split('=')[0];v=c[i].split('=')[1];a.options[a.length]=new Option(k,v)}}}else{tinymce.each(tinyMCEPopup.editor.dom.getClasses(),function(o){a.options[a.length]=new Option(o.title||o['class'],o['class'])})}}
function isVisible(e){var a=document.getElementById(e);return a&&a.style.display!="none"}
function convertRGBToHex(c){var a=new RegExp("rgb\\s*\\(\\s*([0-9]+).*,\\s*([0-9]+).*,\\s*([0-9]+).*\\)","gi");var d=c.replace(a,"$1,$2,$3").split(',');if(d.length==3){r=parseInt(d[0]).toString(16);g=parseInt(d[1]).toString(16);b=parseInt(d[2]).toString(16);r=r.length==1?'0'+r:r;g=g.length==1?'0'+g:g;b=b.length==1?'0'+b:b;return"#"+r+g+b}return c}
function convertHexToRGB(c){if(c.indexOf('#')!=-1){c=c.replace(new RegExp('[^0-9A-F]','gi'),'');r=parseInt(c.substring(0,2),16);g=parseInt(c.substring(2,4),16);b=parseInt(c.substring(4,6),16);return"rgb("+r+","+g+","+b+")"}return c}
function trimSize(s){return s.replace(/([0-9\.]+)(px|%|in|cm|mm|em|ex|pt|pc)/i,'$1$2')}
function getCSSSize(s){s=trimSize(s);if(s=="")return"";if(/^[0-9]+$/.test(s))s+='px';else if(!(/^[0-9\.]+(px|%|in|cm|mm|em|ex|pt|pc)$/i.test(s)))return"";return s}
function getStyle(e,a,s){var v=tinyMCEPopup.dom.getAttrib(e,a);if(v!='')return''+v;if(typeof(s)=='undefined')s=a;return tinyMCEPopup.dom.getStyle(e,s)}
