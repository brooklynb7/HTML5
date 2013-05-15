/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.PageRenderer");sap.m.PageRenderer={};
sap.m.PageRenderer.render=function(r,p){var h=null;if(p.getShowHeader()){h=p._getAnyHeader()}var s=p.getSubHeader();var f=p.getFooter();r.write("<div");r.writeControlData(p);r.addClass("sapMPage");if(f){r.addClass("sapMPageWithFooter")}r.writeClasses();r.write(">");if(h){r.renderControl(h)}if(s){s._context='header';r.renderControl(s.addStyleClass('sapMPageSubHeader'))}var S=p._hasScrolling();var b=p.getBackgroundDesign();var P=S?"":" class='sapMPageBg"+b+"'";var a=S?" sapMPageBg"+b:"";r.write("<section id='"+p.getId()+"-cont'"+P+">");if(S){r.write("<div id='"+p.getId()+"-scroll' class='sapMPageScroll"+a+"'>")}var c=p.getContent();var l=c.length;for(var i=0;i<l;i++){r.renderControl(c[i])}if(S){r.write("</div>")}r.write("</section>");if(f){f._context='footer';r.renderControl(f)}r.write("</div>")};
