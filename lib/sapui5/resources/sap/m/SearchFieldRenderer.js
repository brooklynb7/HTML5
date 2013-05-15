/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.SearchFieldRenderer");sap.m.SearchFieldRenderer={};
sap.m.SearchFieldRenderer.render=function(r,s){if(!s.getVisible()){return}var a=r;var S=s.getShowMagnifier();a.write("<div");a.writeControlData(s);a.addClass("sapMSF");if(S){a.addClass("sapMSFM")}if(jQuery.os.android&&!(jQuery.browser.chrome)){if(jQuery.os.fVersion<3){a.addClass("sapMSFA2")}else if(jQuery.os.fVersion<=4){a.addClass("sapMSFA4")}}a.writeClasses();a.write(">");if(S){a.write('<div class="sapMSFMG"></div>')}a.write('<input type="search" autocorrect="off"');a.writeAttribute("id",s.getId()+"-I");a.addClass("sapMSFI");if(jQuery.os.ios&&jQuery.os.fVersion>5){a.addClass("sapMSFIIos6")}if(!s.getEnabled()){a.addClass("sapMSFIDisabled")}a.writeClasses();if(!s.getEnabled()){a.writeAttribute("disabled","disabled")}if(S){a.writeAttribute("results",0)}if(s.getPlaceholder()){a.writeAttributeEscaped("placeholder",s.getPlaceholder())}if(s.getMaxLength()){a.writeAttribute("maxLength",s.getMaxLength())}if(s.getValue()){a.writeAttributeEscaped("value",s.getValue())}if(s.getWidth()){a.writeAttribute("style","width:"+s.getWidth()+";")}a.write(">");a.write("<div");a.writeAttribute("id",s.getId()+"-reset");a.addClass("sapMSFR");a.writeClasses();a.write("></div>");a.write("</div>")};
