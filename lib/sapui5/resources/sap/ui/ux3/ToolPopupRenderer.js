/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.ToolPopupRenderer");sap.ui.ux3.ToolPopupRenderer={};
sap.ui.ux3.ToolPopupRenderer.render=function(r,c){var a=sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");var I=c.getId();r.write("<div");r.writeControlData(c);r.addClass("sapUiUx3TP");r.addClass("sapUiInverted-CTX");r.writeClasses();r.write(" aria-labelledby='",I,"-title ",I,"-acc' role='dialog'>");r.write("<div id='"+I+"-arrow' class='sapUiUx3TPArrow sapUiUx3TPArrowLeft'></div>");r.write("<span style='display:none;' id='",I,"-acc'>",a.getText("DIALOG_CLOSE_HELP"),"</span>");r.write('<span id="'+I+'-focusable'+'" tabindex="0" class="sapUiUxTPFocus">');var s=sap.ui.resource('sap.ui.core','themes/base/img/1x1.gif');r.write('<img src="'+s+'">');r.write('</span>');var t=c.getTitle();if(t&&(t.length>0)){r.write("<h1 id='"+I+"-title'>"+t+"</h1>");r.write("<hr/>")}else{var T=c.getTooltip_AsString();if(T){r.write("<h1 id='"+I+"-title' style='display:none;'>"+T+"</h1>")}}var C=c.getContent();for(var i=0;i<C.length;i++){r.renderControl(C[i])}C=c.getButtons();if(C.length>0){r.write("<hr/><div class='sapUiUx3TPBtnRow'>");for(var i=0;i<C.length;i++){r.renderControl(C[i].addStyleClass("sapUiUx3TPBtn"))}r.write("</div>")}r.write("</div>")};
