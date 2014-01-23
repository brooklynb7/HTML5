/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.FileUploaderRenderer");
sap.ui.commons.FileUploaderRenderer=function(){};
sap.ui.commons.FileUploaderRenderer.render=function(r,f){var a=r;var b=sap.ui.getCore().getConfiguration().getAccessibility();if(!f.getVisible()){return}a.write('<div class="sapUiFup"');a.writeControlData(f);a.write('>');a.write('<form style="display:inline-block" encType="multipart/form-data" method="post"');a.writeAttribute('id',f.getId()+'-fu_form');a.writeAttributeEscaped('action',f.getUploadUrl());a.writeAttribute('target',f.getId()+'-frame');a.write('>');a.write('<div class="sapUiFupInp"');if(b){a.writeAttribute("role","textbox");a.writeAttribute("aria-readonly","true")}a.write('>');a.write('<div class="sapUiFupGroup" border="0" cellPadding="0" cellSpacing="0"><div><div>');a.renderControl(f.oFilePath);a.write('</div><div>');a.renderControl(f.oBrowse);a.write('</div></div></div>');var n=f.getName()||f.getId();a.write('<div class="sapUiFupInputMask">');a.write('<input type="hidden" name="_charset_">');a.write('<input type="hidden" id="'+f.getId()+'-fu_data"');a.writeAttributeEscaped('name',n+'-data');a.writeAttributeEscaped('value',f.getAdditionalData()||"");a.write('>');jQuery.each(f.getParameters(),function(i,p){a.write('<input type="hidden" ');a.writeAttributeEscaped('name',p.getName()||"");a.writeAttributeEscaped('value',p.getValue()||"");a.write('>')});a.write('</div>');a.write('</div>');a.write('</form>');a.write('</div>')};
