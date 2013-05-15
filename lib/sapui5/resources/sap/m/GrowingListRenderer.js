/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.GrowingListRenderer");jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.m.ListRenderer");sap.m.GrowingListRenderer=sap.ui.core.Renderer.extend(sap.m.ListRenderer);
sap.m.GrowingListRenderer.renderGrowingListContent=function(r,c){r.write("<ul");r.addClass("sapMListUl");if(c.getInset()){r.addClass("sapMListInset");if(c.getHeaderText()){r.addClass("sapMListInsetHdr")}if(c.getFooterText()){r.addClass("sapMListInsetFtr")}}r.writeClasses();r.write(">");var a=c._getTrigger((c.getId()+"-trigger"));r.renderControl(a);r.write("</ul>")};
