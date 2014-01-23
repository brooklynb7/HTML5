/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.makit.CombinationChartRenderer");sap.makit.CombinationChartRenderer={};
sap.makit.CombinationChartRenderer.render=function(r,c){r.write("<div id=\"sap-ui-dummy-"+c.getId()+"\" style=\"display:none\">");r.write("<div");r.writeControlData(c);r.writeAttribute("data-sap-ui-preserve",c.getId());r.addClass("sapMakitChart");r.writeClasses();r.write(">");r.write("</div>");r.write("</div>")};
