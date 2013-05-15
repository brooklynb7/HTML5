/*!
 * CVOM HTML5 charts
 * 
 * 	(c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.service.visualization.chart.LineRenderer");

/**
 * @class Line renderer. 
 * @static
 */
sap.service.visualization.chart.LineRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.service.visualization.chart.LineRenderer.render = function(oRenderManager, oControl){ 
    // convenience variable
	var rm = oRenderManager;
	
	// write the HTML into the render manager  
    rm.write("<DIV");
    rm.writeControlData(oControl);
    
    rm.writeAttribute("class","sapservicevisualizationchart-Line"); 
    
    rm.addStyle("width", oControl.getWidth());
	rm.addStyle("height", oControl.getHeight());
	rm.addStyle("position","relative");
	//rm.addStyle("left","0px");
	//rm.addStyle("top","0px");
	rm.writeStyles();
	
    rm.write(">"); 
    rm.write("</DIV>");
};
