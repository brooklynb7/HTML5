/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.TextAreaRenderer");sap.m.TextAreaRenderer={};
sap.m.TextAreaRenderer.render=function(r,t){var R="sapMInput";if(!t.getVisible()){return}r.write("<div ");r.writeControlData(t);!t.getEnabled()&&r.addClass(R+"Disabled");t.getValueState()!="None"&&r.addClass(R+t.getValueState());t.getWidth()&&r.addStyle("width",t.getWidth())&&r.writeStyles();r.addClass(R+" sapMTextArea");r.writeClasses();r.write(">");r.write("<textarea id="+t.getId()+"-inner");r.writeAttribute("rows",t.getRows());r.writeAttribute("cols",t.getCols());!t.getEnabled()&&r.writeAttribute("disabled",true);t.getMaxLength()>0&&r.writeAttribute("maxlength",t.getMaxLength());t.getPlaceholder()&&r.writeAttributeEscaped("placeholder",t.getPlaceholder());t.getWrapping()&&t.getWrapping()!="None"&&r.writeAttribute("wrap",t.getWrapping());r.addClass(R+"Inner sapMTextAreaInner");t.getValueState()!="None"&&r.addClass(R+t.getValueState()+"Inner");t.getHeight()&&r.addStyle("height",t.getHeight());t.getWidth()&&r.addStyle("width","100%");r.writeClasses();r.writeStyles();r.write(">");r.writeEscaped(t.getValue());r.write("</textarea></div>")};
