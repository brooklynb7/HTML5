/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.CheckBoxRenderer");sap.m.CheckBoxRenderer={};
sap.m.CheckBoxRenderer.render=function(r,c){if(!c.getVisible()){return}var e=c.getEnabled();var m=0;r.write("<div");r.addClass("sapMCb");r.writeControlData(c);r.writeClasses();r.write(">");r.write("<div");r.addClass("sapMCbBg");if(!e){r.addClass("sapMCbBgDis");m=-1}if(!c.getActiveHandling()){r.addClass("sapMCbActiveStateOff")}r.writeClasses();r.writeAttribute("tabIndex",m);r.write(">");r.write("<input type='CheckBox' tabindex='-1' id='");r.write(c.getId()+"-CB'");r.write(" class='sapMCbMark");if(c.getSelected()){r.write(" sapMCbMarkChecked'");r.writeAttribute("checked","checked")}else{r.write("' ")}if(c.getName()){r.writeAttributeEscaped('name',c.getName())}if(!e){r.write(" disabled='disabled'")}r.write(" /></div>");r.renderControl(c._oLabel);r.write("</div>")};
