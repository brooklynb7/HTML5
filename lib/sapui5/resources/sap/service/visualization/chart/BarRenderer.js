/*!
 * CVOM HTML5 charts
 * 
 * 	(c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.service.visualization.chart.BarRenderer");sap.service.visualization.chart.BarRenderer={};
sap.service.visualization.chart.BarRenderer.render=function(r,c){var a=r;a.write("<DIV");a.writeControlData(c);a.writeAttribute("class","sapservicevisualizationchart-Bar");a.addStyle("width",c.getWidth());a.addStyle("height",c.getHeight());a.addStyle("position","relative");a.writeStyles();a.write(">");a.write("</DIV>")};
