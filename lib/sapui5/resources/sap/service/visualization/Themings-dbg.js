/*!
 * CVOM HTML5 charts
 * 
 * 	(c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.service.visualization.Themings.
jQuery.sap.declare("sap.service.visualization.Themings");
jQuery.sap.require("sap.service.visualization.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new Themings.
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
 * parse all the themings settings for all charts.
 * @extends sap.ui.core.Element
 *
 * @author sap visualization 
 * @version 1.10.0
 *
 * @constructor   
 * @public
 * @deprecated Since version 1.7.2. 
 * This library has been deprecated in favor of the new charting library sap.viz. Please migrate as soon as possible as this older library will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.service.visualization.Themings
 */
sap.ui.core.Element.extend("sap.service.visualization.Themings", { metadata : {

	// ---- object ----
	deprecated : true,

	// ---- control specific ----
	library : "sap.service.visualization"
}});


/**
 * Creates a new subclass of class sap.service.visualization.Themings with name <code>sClassName</code> 
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
 * @name sap.service.visualization.Themings.extend
 * @function
 */


// Start of sap/service/visualization/Themings.js
/*!
 * @copyright@
 */
sap.service.visualization.Themings.prototype.getCorrespondingThemings = function(chartType){

	var correspondingThemings = function(){};
	var chartTypeParam = "sap.service.visualization."+chartType+":";
	
	correspondingThemings.bgColor = sap.ui.core.theming.Parameters.get(chartTypeParam+"bgColor");
	var fontFamily = sap.ui.core.theming.Parameters.get(chartTypeParam+"fontFamily");
	
	//chart padding 
	
	var paddingArr = sap.ui.core.theming.Parameters.get(chartTypeParam+"chartPadding").split(',');
	var chartPadding= [];
	for(var i=0;i<paddingArr.length;i++){
			chartPadding[i] = parseInt(paddingArr[i]);
			
	};
	correspondingThemings.chartPadding =chartPadding;
	//legend properties			
	var legendTitleFontSize = sap.ui.core.theming.Parameters.get(chartTypeParam+"legendTitleFontSize");
	legendTitleFontSize = this.mapFontSize(legendTitleFontSize);
	correspondingThemings.legendTitleFont = "bold " + legendTitleFontSize + " " + fontFamily;
	correspondingThemings.legendTitleFontColor = sap.ui.core.theming.Parameters.get(chartTypeParam+"legendTitleFontColor");
	
	var legendFontSize = sap.ui.core.theming.Parameters.get(chartTypeParam+"legendFontSize");
	legendFontSize = this.mapFontSize(legendFontSize);
	correspondingThemings.legendFont = "normal " + legendFontSize + " " + fontFamily;
	correspondingThemings.legendColor = sap.ui.core.theming.Parameters.get(chartTypeParam+"legendColor");

    //main title properties
	var mainTitleFontSize = sap.ui.core.theming.Parameters.get(chartTypeParam+"mainTitleFontSize");
	mainTitleFontSize = this.mapFontSize(mainTitleFontSize);
	correspondingThemings.mainTitleFont = "normal " + mainTitleFontSize + " " + fontFamily;
	correspondingThemings.mainTitleColor = sap.ui.core.theming.Parameters.get(chartTypeParam+"mainTitleColor");
	//sub title properties
	var subTitleObjFontSize = sap.ui.core.theming.Parameters.get(chartTypeParam+"subTitleFontSize");
	subTitleObjFontSize = this.mapFontSize(subTitleObjFontSize);
	correspondingThemings.subTitleFont = "normal " + subTitleObjFontSize + " " + fontFamily;
	correspondingThemings.subTitleColor = sap.ui.core.theming.Parameters.get(chartTypeParam+"subTitleColor");
	//tool tip themes
	var toolTipMainValueFontSize = sap.ui.core.theming.Parameters.get(chartTypeParam+"toolTipMainValueFontSize");
	toolTipMainValueFontSize = this.mapFontSize(toolTipMainValueFontSize);
	correspondingThemings.toolTipMainValueFont = "normal " + toolTipMainValueFontSize + " " + fontFamily;
	correspondingThemings.toolTipMainValueColor = sap.ui.core.theming.Parameters.get(chartTypeParam+"toolTipMainValueColor");
	
	var toolTipSubValueFontSize = sap.ui.core.theming.Parameters.get(chartTypeParam+"toolTipSubValueFontSize");
	toolTipSubValueFontSize = this.mapFontSize(toolTipSubValueFontSize);
	correspondingThemings.toolTipSubValueFont = "normal " + toolTipSubValueFontSize + " " + fontFamily;
	correspondingThemings.toolTipSubValueColor = sap.ui.core.theming.Parameters.get(chartTypeParam+"toolTipSubValueColor");
	
	var toolTipTextFontSize = sap.ui.core.theming.Parameters.get(chartTypeParam+"toolTipTextFontSize");
	toolTipTextFontSize = this.mapFontSize(toolTipTextFontSize);
	correspondingThemings.toolTipTextFont = "normal " + toolTipTextFontSize + " " + fontFamily;
	correspondingThemings.toolTipTextColor = sap.ui.core.theming.Parameters.get(chartTypeParam+"toolTipTextColor");

    //axis 
	correspondingThemings.axisLineColor = sap.ui.core.theming.Parameters.get(chartTypeParam+"axisLineColor");
	correspondingThemings.axisLabelColor = sap.ui.core.theming.Parameters.get(chartTypeParam+"axisLabelColor");
	correspondingThemings.axisTitleColor = sap.ui.core.theming.Parameters.get(chartTypeParam+"axisTitleColor");
	correspondingThemings.axisGridLineColor = sap.ui.core.theming.Parameters.get(chartTypeParam+"axisGridLineColor");
	
	for( prop in correspondingThemings){
		if( prop.indexOf("Color") !=-1 || prop.indexOf('color') != -1){
			correspondingThemings[prop] = this.mapColor(correspondingThemings[prop]);
		}
	}
   
	return correspondingThemings;
};

sap.service.visualization.Themings.prototype.mapFontSize = function(fontSize){

	var fsp = /(x{1,2}-)?(small|medium|large)/i;
	var sizeMap ={
		"xx-small" : '9px',
        "x-small" : '10px',
        "small" : '13px',
        "medium" : '16px',
        "large" : '18px',
        "x-large" : '24px',
        "xx-large" : '32px'
    };
    var m = fsp.exec(fontSize);
    if (m==null) {
    	return fontSize;
    }else{
    	return fontSize = sizeMap[m[0].toLowerCase()];
    }
};

sap.service.visualization.Themings.prototype.mapColor = function(hexColor){

	var fsp = /(aqua|black|blue|fuchsia|gray|grey|green|lime|maroon|navy|olive|purple|red|silver|teal|white|yellow)/i;
	var colorMap ={
		"aqua" : '#00FFFF',
        "black" : '#000000',
        "blue" : '#0000FF',
        "fuchsia" : '#FF00FF',
        "gray" : '#808080',
        "grey" : '#808080',
        "green" : '#008000',
        "lime" : '#00FF00',
        "maroon" : '#800000',
        "navy" : '#000080',
        "olive" : '#808000',
        "purple" : '#800080',
        "red" : '#FF0000',
        "silver" : '#C0C0C0',
        "teal" : '#008080',
        "white" : '#FFFFFF',
        "yellow" : '#FFFF00',
        "transparent" : 'rgba(0,0,0,0)'
    };
    var m = fsp.exec(hexColor);
    if (m==null) {
    	return hexColor;
    }else{
    	return hexColor = colorMap[m[0].toLowerCase()];
    }
};


sap.service.visualization.Themings.prototype.applyCurrentThemeToXYChart = function(control, chartType){
		var themes = new sap.service.visualization.Themings().getCorrespondingThemings(chartType);
		var chartPadding = themes.chartPadding;
		var bgColor = themes.bgColor;
		//tool tip
		var toolTipMainValueFont = themes.toolTipMainValueFont;
		var toolTipMainValueColor = themes.toolTipMainValueColor;
		var toolTipSubValueFont = themes.toolTipSubValueFont;
		var toolTipSubValueColor = themes.toolTipSubValueColor;
		var toolTipTextFont = themes.toolTipTextFont;
		var toolTipTextColor = themes.toolTipTextColor;
		
		//legend
		var legendFont = themes.legendFont;
		var legendColor = themes.legendColor;
		var legendTitleFont = themes.legendTitleFont;
		var legendTitleFontColor = themes.legendTitleFontColor;
		
		//title
		var mainTitleColor = themes.mainTitleColor;
		var mainTitleFont = themes.mainTitleFont;
		var subTitleObjColor = themes.subTitleColor;
		var subTitleObjFont = themes.subTitleFont;
		
		// axis
		var axisLineColor = themes.axisLineColor;
		var axisLabelColor = themes.axisLabelColor;
		var axisTitleColor = themes.axisTitleColor;
		var axisGridLineColor = themes.axisGridLineColor;
		
		var xAxis = control.getXAxis();
		var yAxis = control.getYAxis();
		
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
			layout : {
				chartPadding : chartPadding
			},
			background : {
				color : bgColor
			},
			tooltip : {
				text : {
					font : toolTipTextFont,
					color : toolTipTextColor
				},
				mainValue : {
					font : toolTipMainValueFont,
					color : toolTipMainValueColor
				},
				subValue : {
					font : toolTipSubValueFont,
					color : toolTipSubValueColor
				}
			},
			legend : {
				labelFont : legendFont,
				labelColor : legendColor,
				titleFont : legendTitleFont,
				titleFontColor : legendTitleFontColor
			},
			xAxis : xAxis,
			yAxis : yAxis,
			title : {
				main : {
					color : mainTitleColor,
					font : mainTitleFont
				},
				sub : {
					color : subTitleObjColor,
					font : subTitleObjFont
				}
			}
		};
		var xy;
		switch(chartType){
		 case 'Bar': xy = control.bar;
		 break;
		 case 'Line': xy = control.line;
		 break;
		 case 'Column': xy = control.column;
		 break;  
		 case 'Combination': xy = control.combination;
		 break;
		}
		xy.updateProperties(chartOption);
};