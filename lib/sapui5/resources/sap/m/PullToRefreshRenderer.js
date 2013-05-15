/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.PullToRefreshRenderer");sap.m.PullToRefreshRenderer={};
sap.m.PullToRefreshRenderer.render=function(r,c){var s=c.getShowIcon();var C=c.getCustomIcon();r.write("<div");r.writeControlData(c);r.addClass("sapMPullDown");if(s&&!C){r.addClass("sapMPullDownLogo")}r.writeClasses();r.write(">");if(s&&C){var o=c.getCustomIconImage();if(o){r.write("<div class=\"sapMPullDownCI\">");r.renderControl(o);r.write("</div>")}}r.write("<span class=\"sapMPullDownIcon\"></span>");r.write("<span id="+c.getId()+"-T class=\"sapMPullDownText\">");r.writeEscaped(c.oRb.getText("PULL2REFRESH_PULLDOWN"));r.write("</span>");r.write("<span id="+c.getId()+"-I class=\"sapMPullDownInfo\">");r.writeEscaped(c.getDescription());r.write("</span>");r.write("</div>")};
