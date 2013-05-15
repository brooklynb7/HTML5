/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.LabelRenderer");jQuery.sap.require("sap.ui.core.Renderer");sap.m.LabelRenderer={};
sap.m.LabelRenderer.render=function(a,l){if(!l.getVisible()){return}var r=sap.m.LabelRenderer;var m="";a.write("<label");a.writeControlData(l);a.addClass("sapMLabel");if(l.getDesign()==sap.m.LabelDesign.Bold){a.addClass("sapMLabelBold")}if(l.getLabelFor()){var f=sap.ui.getCore().byId(l.getLabelFor());a.write(" for=\"");if(f&&f.getIdForLabel){a.write(f.getIdForLabel())}else{a.write(l.getLabelFor())}a.write("\"")}var t=l.getTextDirection();if(t){a.writeAttribute("dir",t)}var w=l.getWidth();if(w){m+="width:"+w+";"}var T=l.getTextAlign();if(T){m+="text-align:"+r.getTextAlign(T,t)+";"}a.writeAttribute("style",m);a.writeClasses();a.write(">");if(l.getText()){a.writeEscaped(l.getText())}a.write("</label>")};
sap.m.LabelRenderer.getTextAlign=sap.ui.core.Renderer.getTextAlign;
