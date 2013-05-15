tinyMCEPopup.requireLangPack();tinyMCEPopup.onInit.add(onLoadInit);
function saveContent(){tinyMCEPopup.editor.setContent(document.getElementById('htmlSource').value,{source_view:true});tinyMCEPopup.close()}
function onLoadInit(){tinyMCEPopup.resizeToInnerSize();if(tinymce.isGecko)document.body.spellcheck=tinyMCEPopup.editor.getParam("gecko_spellcheck");document.getElementById('htmlSource').value=tinyMCEPopup.editor.getContent({source_view:true});if(tinyMCEPopup.editor.getParam("theme_advanced_source_editor_wrap",true)){turnWrapOn();document.getElementById('wraped').checked=true}resizeInputs()}
function setWrap(a){var v,n,s=document.getElementById('htmlSource');s.wrap=a;if(!tinymce.isIE){v=s.value;n=s.cloneNode(false);n.setAttribute("wrap",a);s.parentNode.replaceChild(n,s);n.value=v}}
function setWhiteSpaceCss(v){var e=document.getElementById('htmlSource');tinymce.DOM.setStyle(e,'white-space',v)}
function turnWrapOff(){if(tinymce.isWebKit){setWhiteSpaceCss('pre')}else{setWrap('off')}}
function turnWrapOn(){if(tinymce.isWebKit){setWhiteSpaceCss('pre-wrap')}else{setWrap('soft')}}
function toggleWordWrap(e){if(e.checked){turnWrapOn()}else{turnWrapOff()}}
function resizeInputs(){var v=tinyMCEPopup.dom.getViewPort(window),e;e=document.getElementById('htmlSource');if(e){e.style.width=(v.w-20)+'px';e.style.height=(v.h-65)+'px'}}
