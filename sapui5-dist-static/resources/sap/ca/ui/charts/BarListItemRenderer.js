/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.charts.BarListItemRenderer");jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.m.ListItemBaseRenderer");sap.ca.ui.charts.BarListItemRenderer=sap.ui.core.Renderer.extend(sap.m.ListItemBaseRenderer);
sap.ca.ui.charts.BarListItemRenderer.renderLIAttributes=function(r,l){r.addClass("sapMBLI")};
sap.ca.ui.charts.BarListItemRenderer.renderLIContent=function(r,l){var i=l.getAxis();if(i){r.write("<p for='"+l.getId()+"-axis' class='sapMBLIAxis'>");r.writeEscaped(l.getAxis());r.write("</p>")}var a=l.getGroup();if(a){r.write("<label for='"+l.getId()+"-value' class='sapMBLIGroup'>");r.writeEscaped(l.getGroup());r.write("</label>")}var b=l.getValue();if(b){r.write("<div id='"+l.getId()+"-value' class='sapMBLIValue'>");r.writeEscaped(l.getValue());r.write("</div>")}};
