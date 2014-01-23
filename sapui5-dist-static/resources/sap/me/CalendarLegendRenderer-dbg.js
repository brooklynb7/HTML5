
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.me.CalendarLegendRenderer");

/**
 * @class CalendarLegend renderer. 
 * @static
 */
sap.me.CalendarLegendRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.me.CalendarLegendRenderer.render = function(oRm, oControl){ 
	 // write the HTML into the render manager
 	var labelsArr = oControl.getAggregation("labels");
	if(oControl.getVisible() && labelsArr && labelsArr.length >0){
	var myStyles = "";
	// Style for width
	var sWidth = oControl.getWidth();
	if(sWidth) {
		myStyles += "width:" + sWidth + ";";
	}
	 oRm.write("<div"); // outer container	
	 oRm.writeControlData(oControl);
	 oRm.addClass("sapUIMeLegendOuterContainer");
	 oRm.writeAttribute("style", myStyles);
	 oRm.writeClasses();
	 oRm.write(">");
	 oRm.write("<div");
	 oRm.addClass("sapMeCalendarLegend");
	 oRm.addClass("sapMeCalendarLegend"+oControl.getDesign());
	 oRm.writeClasses();
	 oRm.write(">"); // div element
	 oRm.write("<div  id='" + oControl.getId() + "-arrow'"); //legend header
	 oRm.addClass("sapUIMeLegend");
	 oRm.writeClasses();
	 oRm.write(">");
	 if(oControl.getExpandable()){
		 oRm.renderControl(oControl.getAggregation("icon"));
	 }
	 oRm.write("<div id='" + oControl.getId() + "-LegendMenuContainer'"); //legend menu container
	 oRm.addClass("sapUIMeLegendMenuContainer");
	 oRm.writeClasses();
	 oRm.write(">");
		 oRm.write("<div id='" + oControl.getId() + "-LegendMenu'"); //legend menu container
		 oRm.addClass("sapUIMeLegendMenu");
		 if(!oControl.getExpanded()){
			 oRm.write("style = 'display:none'");
		 }
		 oRm.writeClasses();
		 oRm.write(">");
		 var w = oControl.getLegendWidth();
		for ( var i = 0; i < labelsArr.length; i++) {
				oRm.write("<div "); //legend line
				oRm.addClass("sapUIMeLegendLine");
				oRm.writeClasses();
				/*
				oRm.addStyle("min-width",w);
				oRm.writeStyles();
				*/	
				oRm.write(">");
				oRm.write("<div "); //legend color
				oRm.addClass("sapUIMeLegendColor");
				oRm.addClass(oControl._getColorBoxStyle(labelsArr[i].getId()));
				oRm.writeClasses();	
				oRm.write("></div>"); // legend color
				oRm.renderControl(labelsArr[i]);
				oRm.write("</div>");//legend line
		}
		oRm.write("</div>");//legend menu 
		oRm.write("</div>");//legend menu container
	 oRm.write("</div>");//legend header
	 oRm.write("</div>");
	 oRm.write("</div>");// outer container

	}
};
