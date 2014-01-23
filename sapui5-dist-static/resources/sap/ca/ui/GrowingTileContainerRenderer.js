/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.m.ScrollContainerRenderer");jQuery.sap.require("sap.ui.layout.GridRenderer");jQuery.sap.declare("sap.ca.ui.GrowingTileContainerRenderer");sap.ca.ui.GrowingTileContainerRenderer=sap.ui.core.Renderer.extend(sap.m.ScrollContainerRenderer);
sap.ca.ui.GrowingTileContainerRenderer.render=function(r,c){var t=this;if(!c.getVisible()){return}r.write("<div");r.writeControlData(c);var w=c.getWidth(),h=c.getHeight();if(w){r.addStyle("width",w)}if(h){r.addStyle("height",h)}r.writeStyles();r.addClass("sapCaUiGTCBScroll");if(c.getVertical()){if(!c.getHorizontal()){r.addClass("sapMScrollContV")}else{r.addClass("sapMScrollContVH")}}else if(c.getHorizontal()){r.addClass("sapMScrollContH")}r.addClass("sapMScrollCont");r.writeClasses();var T=c.getTooltip_AsString();if(T){r.writeAttributeEscaped("title",T)}r.write("><div id='"+c.getId()+"-scroll' class='sapMScrollContScroll'>");var C=c.getContent(),l=C.length;var L=c._getGridLayout();for(var i=0;i<l;i++){L.addContent(C[i])}r.renderControl(L);r.write("</div></div>")};
