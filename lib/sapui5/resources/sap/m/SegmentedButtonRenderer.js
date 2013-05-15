/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.SegmentedButtonRenderer");sap.m.SegmentedButtonRenderer={};
sap.m.SegmentedButtonRenderer.render=function(r,c){if(!c.getVisible()){return}var I=c.getButtons(),a=I.length;if(!c.getVisible()){return}r.write("<ul");r.addClass("sapMSegB");r.writeClasses();if(c.getWidth()&&c.getWidth()!==''){r.addStyle('width',c.getWidth())}r.writeStyles();r.writeControlData(c);r.write(">");for(var i=0;i<a;i++){var o=I[i];r.write("<li");r.writeControlData(o);r.addClass("sapMSegBBtn");if(c.getSelectedButton()===o.getId()){r.addClass("sapMSegBBtnSel")}if(!o.getEnabled()){r.addClass("sapMSegBBtnDis")}r.writeClasses();var t=o.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t)}r.write('>');if(o.getIcon()===''&&o.getText()!==''){r.writeEscaped(o.getText(),false)}else if(o.getIcon()!==''&&o.getText()===''){var b=o._getImage((o.getId()+"-img"),o.getIcon());b.mProperties.height="1.5em";b.mProperties.width="1.5em";r.renderControl(b)}else{jQuery.sap.log.error("SEGMENTED: "+o.getId()+": Icon and Label is not allowed")}r.write("</li>")}r.write("</ul>")};
