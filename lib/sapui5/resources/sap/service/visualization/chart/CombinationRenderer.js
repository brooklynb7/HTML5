/*!
 * CVOM HTML5 charts
 * 
 * 	(c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.service.visualization.chart.CombinationRenderer");sap.service.visualization.chart.CombinationRenderer={};
sap.service.visualization.chart.CombinationRenderer.render=function(r,c){var a=r;a.write("<DIV");a.writeControlData(c);a.writeAttribute("class","sapservicevisualizationchart-Combination");a.addStyle("width",c.getWidth());a.addStyle("height",c.getHeight());a.addStyle("position","relative");a.writeStyles();a.write(">");a.write("</DIV>")};
