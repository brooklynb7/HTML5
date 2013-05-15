/*!
 * CVOM HTML5 charts
 * 
 * 	(c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.service.visualization.ChartOption.
jQuery.sap.declare("sap.service.visualization.ChartOption");
jQuery.sap.require("sap.service.visualization.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new ChartOption.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * parse all the ChartOptions for charts.
 * @extends sap.ui.core.Element
 *
 * @author sap visualization 
 * @version 1.10.0
 *
 * @constructor   
 * @public
 * @deprecated Since version 1.7.2. 
 * This library has been deprecated in favor of the new charting library sap.viz. Please migrate as soon as possible as this older library will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.service.visualization.ChartOption
 */
sap.ui.core.Element.extend("sap.service.visualization.ChartOption", { metadata : {

	// ---- object ----
	deprecated : true,

	// ---- control specific ----
	library : "sap.service.visualization"
}});


/**
 * Creates a new subclass of class sap.service.visualization.ChartOption with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.service.visualization.ChartOption.extend
 * @function
 */


// Start of sap/service/visualization/ChartOption.js
/*!
 * @copyright@
 */
sap.service.visualization.ChartOption.prototype.getXYChartOption = function(control, chartType){
	
	var legendDirection = control.getLegendDirection();
	var legendVerticalOffset = control.getLegendVerticalOffset();
	var legendHorizontalOffset = control.getLegendHorizontalOffset();
	var legendFirst = control.getLegendFirst();
	var showLegend = control.getShowLegend();
	var measures = control.getMeasures();
	var title = control.getTitle();
	var titleHorizontalAlign = control.getTitleHorizontalAlign();
	var subTitle = control.getSubTitle();
	var subTitleHorizontalAlign = control.getSubTitleHorizontalAlign();
	var showTitle = control.getShowTitle();
	var legendFormatString = control.getLegendFormatString();
	var titleFormatString = control.getTitleFormatString();
	var subTitleFormatString = control.getSubTitleFormatString();
	var yAxis = control.getYAxis();
	var xAxis = control.getXAxis();
	//enable selection for xy 
	var deselectEnabled = control.getDeselectEnabled();
 	var defaultSelectedItems = control.getDefaultSelectedItems();
 	var selectionMode = control.getSelectionMode();
	 	
	var lineMarkerAndThickness;
	var barMarker;
	
//	if(measure==null){
//		measure=undefined;
//	}
//	if(measures==null){
//		measures=undefined;
//	}
	switch(chartType){
	 case 'Bar': control.bar=null;
	 	 barMarker = control.getBarMarker();
	 	 if(barMarker==null){
	 		 barMarker=undefined;
	 	 };
	 break;
	 case 'Line': control.line=null;
	 	 lineMarkerAndThickness = control.getLineMarkerAndThickness();
	 	 if(lineMarkerAndThickness==null){
	 		 lineMarkerAndThickness=undefined;
	 	 };
	 break;
	 case 'Column': control.column=null;
	 	 barMarker = control.getBarMarker();
	 	 if(barMarker==null){
	 		 barMarker=undefined;
	 	 };
	 break;  
	 case 'Combination': control.combination=null;
	 	 lineMarkerAndThickness = control.getLineMarkerAndThickness();
	 	 
	 	 barMarker = control.getBarMarker();
	 	  if(barMarker==null){
	 		 barMarker=undefined;
	 	 };
	 	 if(lineMarkerAndThickness==null){
	 	 	lineMarkerAndThickness=undefined;
	 	 }
	 break;
	}
	


	
	
	//integrate themes and props
    var themes = new sap.service.visualization.Themings().getCorrespondingThemings(chartType);

	var isNumber = function(value) {
		var patt = /^(0|-?[1-9]\d*)$|^(0|-?[1-9]\d*)\.(\d+)$/;
		return patt.exec(value);
	};
	var chartPadding = themes.chartPadding;
	//lay out
	var layoutObj = {};
	layoutObj.legendFirst= legendFirst;
	layoutObj.chartPadding = chartPadding;
	//bg color
	var backgroundObj = {};
	backgroundObj.color = themes.bgColor;
	// legend properties
	var legendObj = {};
	legendObj.visible = showLegend;
	legendObj.position = legendDirection;
	legendObj.verticalOffset = legendVerticalOffset;
	legendObj.horizontalOffset = legendHorizontalOffset;
	legendObj.formatString = legendFormatString;
	var legendTitleFont = themes.legendTitleFont;
	legendObj.titleFont = legendTitleFont;
	legendObj.titleColor = themes.legendTitleFontColor;
	var legendFont = themes.legendFont;
	legendObj.labelFont = legendFont;
	legendObj.labelColor = themes.legendColor;

	// main title
	var mainTitle = {};
	mainTitle.text = title;
	mainTitle.visible = showTitle;
	mainTitle.font =  themes.mainTitleFont;
	mainTitle.color = themes.mainTitleColor;
	mainTitle.horizontalAlign = titleHorizontalAlign;
	mainTitle.formatString = titleFormatString;
	
	// sub title properties
	var subTitleObj = {};
	subTitleObj.text = subTitle;
	subTitleObj.visible = showTitle;
	subTitleObj.font = themes.subTitleFont;
	subTitleObj.color = themes.subTitleColor;
	subTitleObj.horizontalAlign = subTitleHorizontalAlign;
	subTitleObj.formatString = subTitleFormatString;
	
	//title properties
	var titleObj = {};
	titleObj.main=mainTitle;
	titleObj.sub=subTitleObj;

	// tool tip themes
	var toolTipObj = {};
	toolTipObj.mainValue={};
	toolTipObj.mainValue.font = themes.toolTipMainValueFont;
	toolTipObj.mainValue.color = themes.toolTipMainValueColor;
	//toolTipObj.mainValue.formatString = tooltipFormatString;
	toolTipObj.subValue={};
	toolTipObj.subValue.font = themes.toolTipSubValueFont;
	toolTipObj.subValue.color = themes.toolTipSubValueColor;
	//toolTipObj.subValue.formatString = tooltipFormatString;
	toolTipObj.text={};
	toolTipObj.text.font = themes.toolTipTextFont;
	toolTipObj.text.color = themes.toolTipTextColor;
	//toolTipObj.text.formatString = tooltipFormatString;
	
	// axis
	var axisLineColor = themes.axisLineColor;
	var axisLabelColor = themes.axisLabelColor;
	var axisTitleColor = themes.axisTitleColor;
	var axisGridLineColor = themes.axisGridLineColor;

	if(typeof xAxis=='undefined'){
		xAxis=[{}];
	}
	for(var i=0;i<xAxis.length;i++){
		xAxis[i].lineColor = axisLineColor;
		xAxis[i].labelColor = axisLabelColor;
		xAxis[i].titleColor = axisTitleColor;
		if(typeof xAxis[i].gridLine!=='undefined'){
			xAxis[i].gridLine.majorColor = axisGridLineColor;
			xAxis[i].gridLine.minorColor = axisGridLineColor;
			xAxis[i].gridLine.subColor = axisGridLineColor;
		}
	};
	if(typeof yAxis=='undefined'){
		yAxis=[{}];
	}
	for(var i=0;i<yAxis.length;i++){
		yAxis[i].lineColor = axisLineColor;
		yAxis[i].labelColor = axisLabelColor;
		yAxis[i].titleColor = axisTitleColor;
		if(typeof yAxis[i].gridLine!=='undefined'){
			yAxis[i].gridLine.majorColor = axisGridLineColor;
			yAxis[i].gridLine.minorColor = axisGridLineColor;
			yAxis[i].gridLine.subColor = axisGridLineColor;
		}
	};
	
	var chartOption = {
			layout : layoutObj,
			background : backgroundObj ,
			legend :legendObj,
			title : titleObj,
		//	measure :measure,
			measures : measures,
			xAxis : xAxis,
			yAxis : yAxis,
			line : lineMarkerAndThickness,
			bar : barMarker,
			selectability : {
				mode : selectionMode,
				deSelectable : deselectEnabled,
				defaultSelectedItems : defaultSelectedItems
			}
		};
	return chartOption;
};