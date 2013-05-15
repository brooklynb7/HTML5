/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.RichTooltipRenderer");jQuery.sap.require("sap.ui.core.ValueStateSupport");sap.ui.commons.RichTooltipRenderer={};
sap.ui.commons.RichTooltipRenderer.render=function(r,R){var a=r;var t=R.getText();a.write("<div ");a.writeControlData(R);a.addClass("sapUiRtt");a.writeClasses();a.write(" ><div><div>");a.write("<div class='sapUiRttTopL'></div><div class='sapUiRttTopR'></div>");a.write("<div class='sapUiRttCL'>");a.write("<div class='sapUiRttCR'>");a.write("<div class='sapUiRttContent'");var i=R.getImageSrc();if(i&&t){a.write(" style=\"min-width:355px \"")}a.write(" >");var T=R.getTitle();if(T){a.write("<div id='"+R.getId()+"-title' role='tooltip' class='sapUiRttTitle'>");a.writeEscaped(T);a.write("</div>");a.write("<div class='sapUiRttSep'></div>")}if(i){a.write("<img class='sapUiRttImage' src='");a.writeEscaped(i);a.write("'/>")}a.write("<div id='"+R.getId()+"-txt' role='tooltip' class='sapUiRttText'>");a.writeEscaped(t,true);var v=sap.ui.core.ValueStateSupport.getAdditionalText(R.getParent());if(v){a.write("<br> <br>");a.writeEscaped(v)}a.write("</div>");a.write("</div></div></div>");a.write("<div class='sapUiRttBotL'></div>");a.write("<div class='sapUiRttBotR'></div>");a.write("</div></div></div>")};
