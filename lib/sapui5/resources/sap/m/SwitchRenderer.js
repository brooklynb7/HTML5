/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.SwitchRenderer");sap.m.SwitchRenderer={};
sap.m.SwitchRenderer.render=function(r,s){var S=s.getState(),a=S?s._sOn:s._sOff,e=s.getEnabled();if(!s.getVisible()){return}r.write('<div');r.addClass("sapMSwtCont");if(!e){r.addClass("sapMSwtContDisabled")}r.writeClasses();r.writeControlData(s);r.write(">");r.write("<div");r.addClass("sapMSwt");S?r.addClass("sapMSwtOn"):r.addClass("sapMSwtOff");if(!e){r.addClass("sapMSwtDisabled")}r.writeClasses();r.write('>');if(jQuery.os.ios){r.write('<div class="sapMSwtTextOn">');r.write("<span>");r.writeEscaped(s._sOn);r.write("</span>");r.write("</div>");r.write('<div class="sapMSwtTextOff">');r.write("<span>");r.writeEscaped(s._sOff);r.write("</span>");r.write("</div>")}r.write('<input type="checkbox"');if(s.getName()!==""){r.writeAttributeEscaped("name",s.getName())}r.writeAttribute("id",s.getId()+"-input");if(S){r.writeAttribute("checked","checked")}if(!e){r.writeAttribute("disabled","disabled")}r.writeAttribute("value",a);r.write("/>");r.write('<div class="sapMSwtBtn"');if(sap.m.Switch._bAndroidStyle){r.writeAttribute("data-sap-ui-swt",a)}r.write("></div>");r.write("</div>");r.write("</div>")};
