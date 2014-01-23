/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.me.OverlapCalendarRenderer");

/**
 * @class OverlapCalendar renderer.
 * @static
 */
sap.me.OverlapCalendarRenderer = {};

/**
 * Renders the HTML for the given control, using the provided
 * {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *            oRm the RenderManager that can be used for writing to the render
 *            output buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.me.OverlapCalendarRenderer.render = function(oRm, oControl) {
	if( oControl.getVisible()==false){
		return;
	}
	// write the HTML into the render manager
	oRm.write("<div");
	oRm.writeControlData(oControl);
	oRm.addClass("sapMeOverlapCalendar");  
	oRm.writeClasses();
	var w = oControl.getWidth();
    if( w != undefined ){
        oRm.addStyle("width", w);
        oRm.writeStyles();
    }
	oRm.write(">");
	oRm.write("<div");
	oRm.addClass("sapMeOverlapCalendarCalendar");
	oRm.writeClasses();
	oRm.write(">");
	oRm.renderControl(oControl.getCalendar());
	oRm.write("</div>");
	oRm.write("<div");
	oRm.addClass("sapMeOverlapCalendarOverlapIndicator");
	oRm.writeClasses();
	oRm.write(">");
	var iWeekDays = 7;// aWeekDays.length;
	var iWeeksPerRow = oControl.getCalendar().getWeeksPerRow();
	var iDaysInRow = iWeeksPerRow * iWeekDays;
	var date = new Date(oControl.getStartDate());
	var iDayWidth = (100 / iDaysInRow);
	for ( var i = 0; i < iDaysInRow; i++) {
		oRm.write("<div");
		oRm.writeAttribute("id","overlap-"+i);
		oRm.addClass("sapMeOverlapCalendarOverlap");
		oRm.writeClasses();
		oRm.addStyle("width", iDayWidth + "%");
		oRm.writeStyles();
		oRm.write("></div>");
		date.setDate(date.getDate()+1);
	}
	oRm.write("</div>");
	this._renderGrid(oRm, oControl);
	oRm.write("</div>");
};

sap.me.OverlapCalendarRenderer._renderGrid = function(oRm, oControl) {
	// var aWeekDays = oControl._WEEKDAYS;
	var iWeekDays = 7;// aWeekDays.length;
	var iWeeksPerRow = oControl.getCalendar().getWeeksPerRow();
	var iDaysInRow = iWeeksPerRow * iWeekDays;

	var rows =  oControl._aRows;
	if( rows ) {
		var iNumberOfRows = rows.length;

		oRm.write('<div'); // month div
		oRm.addClass("sapMeOverlapCalendarGrid");
		oRm.writeClasses();
		oRm.addStyle("width", "100%");
		oRm.writeStyles();
		oRm.write(">");
		for ( var i = 0; i < iNumberOfRows; i++) {
			if( rows[i] != undefined ) {
				this._renderRow(oRm, oControl, iDaysInRow, i, new Date(oControl.getStartDate()));
			}
		}
	}
	
	// GridDays div

	oRm.write('</div>'); // Grid div
};

sap.me.OverlapCalendarRenderer._renderRow = function(oRm, oControl, iDaysInRow, rowIndex, currentDate) {

	var iDayWidth = (100 / iDaysInRow);	
	var iDayHeight = oControl.getCalendar().getDayHeight();
	oRm.write('<div'); // MonthDays div
	oRm.writeAttribute("id",oControl.getId()+"-row-"+rowIndex);
	oRm.addClass("sapMeOverlapCalendarRow");
	oRm.writeClasses();
	oRm.addStyle("height", iDayHeight + "px");
	oRm.writeStyles();
	oRm.write(">");
	oRm.write('<div'); // Row labels div
	oRm.writeAttribute("id",oControl.getId()+"-row-"+rowIndex+"-lbls");
	oRm.addClass("sapMeOverlapCalendarRowLabels");
	oRm.writeClasses();
	oRm.write(">");
	oRm.renderControl(oControl._getLabelForRow(rowIndex));
	oRm.write('</div>');
	for ( var i = 0; i < iDaysInRow; i++) {
		this._renderDay(oRm, oControl, iDayWidth, iDayHeight, rowIndex, i);

		currentDate.setDate(currentDate.getDate() + 1);
	}
	oRm.write('</div>');
};

sap.me.OverlapCalendarRenderer._renderDay = function(oRm, oControl, iDayWidth, iDayHeight, iRowIndex, iDayIndex) {
	oRm.write("<div");
	oRm.writeAttribute("id", iRowIndex+"-"+iDayIndex);
	oRm.addClass("sapMeOverlapCalendarDay");
	oRm.writeClasses();
	oRm.addStyle("width", iDayWidth + "%");
	if (iDayHeight) {
		oRm.addStyle("height", iDayHeight + "px");
	}
	oRm.writeStyles();
	oRm.write("></div>");
};
