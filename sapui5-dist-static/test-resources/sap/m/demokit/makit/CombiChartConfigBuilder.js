var redPalette = [ 0xF7A6AF, 0xF05662, 0xC03C53, 0x84082C ];
var bluePalette = [ 0x67DFFF, 0x0A74F8, 0x0100FD, 0x030979 ];
var greenPalette = [ 0xC5D900, 0x7FB905, 0x008600, 0x006A00 ];
var orangePalette = [ 0xFFCD2E, 0xFF9C00, 0xFF7701, 0xE24800 ];
var purplePalette = [ 0xe6b8ec, 0xe696ef, 0xe964f5, 0xdb32e1, 0xbe0098, 0x970a82, 0x770766, 0x5b045c ];
var greyPalette = [ 0xdfdfdf, 0xd1d1d1, 0xb7b7b7, 0x9a9a9a, 0x797979, 0x626262, 0x525252, 0x3e3e3e ];
var nonePalette = null;
	
function generateCombiConfigPopover(oChart) {
	var oChartConfigList = new sap.m.List({
		headerText: "Chart Property",
		inset : true
	});
	
	var oCategoryAxisConfigList = new sap.m.List({
		headerText: "Category Axis Property",
		inset : true
	});
	
	var oPrimaryValuesAxisConfigList = new sap.m.List({
		headerText: "Primary Values Axis Property",
		inset : true
	});
	
	var oSecondaryValuesAxisConfigList = new sap.m.List({
		headerText: "Secondary Values Axis Property",
		inset : true
	});
	
	var oValueBubbleAxisConfigList = new sap.m.List({
		headerText: "Values Bubble Property",
		inset : true
	});
	
	generateCombiChartConfigList(oChartConfigList, oChart);
	generateCategoryAxisConfigList(oCategoryAxisConfigList, oChart);
	generateCombiValuesAxisConfigList(oPrimaryValuesAxisConfigList, oChart, false);
	generateCombiValuesAxisConfigList(oSecondaryValuesAxisConfigList, oChart, true);
	generateValueBubbleConfigList(oValueBubbleAxisConfigList, oChart);
	
	var oScrollContainer = new sap.m.ScrollContainer({
		horizontal: false, vertical: true,
		height: "300px",
		content: [oChartConfigList, oCategoryAxisConfigList, oPrimaryValuesAxisConfigList, oSecondaryValuesAxisConfigList, oValueBubbleAxisConfigList]
	});
	
	var oConfigPopOver = new sap.m.Popover({
		placement: sap.m.PlacementType.Bottom,
		showHeader: false,
		content: [ oScrollContainer	]
	});
	
	var oButton = new sap.m.Button({
		text: "Configure", icon: "img/settings.png",
		press : function() {
			oConfigPopOver.openBy(this);
		}
	});
	
	return oButton;
};


function generateCombiChartConfigList(oList, oChart) {
	var oListItem = null;
	var oSwitch = null;
	
	//CHART TYPE
	oListItem = new sap.m.InputListItem({label:"Layer 1 Type"});
	var chartType = [sap.makit.ChartType.Column, sap.makit.ChartType.Bar, 
	                 sap.makit.ChartType.StackedColumn, sap.makit.ChartType.HundredPercentStackedColumn, 
	                 sap.makit.ChartType.Line];
	var oChartTypeSelect = new sap.m.Select({
		selectedKey : oChart.getLayers()[0].getType(),
		change: function(oControlEvent) {
			oChart.getLayers()[0].setType(oControlEvent.getParameter("selectedItem").getKey());
		}
	});
	var len = chartType.length;
	for(var i = 0; i < len; i++) {
		oChartTypeSelect.addItem(new sap.ui.core.Item({
			key: chartType[i], text: chartType[i]
		}));
	}
	oListItem.addContent(oChartTypeSelect);
	oList.addItem(oListItem);
	
	//CHART TYPE
	oListItem = new sap.m.InputListItem({label:"Layer 2 Type"});
	var oChartTypeSelect = new sap.m.Select({
		selectedKey : oChart.getLayers()[1].getType(),
		change: function(oControlEvent) {
			oChart.getLayers()[1].setType(oControlEvent.getParameter("selectedItem").getKey());
		}
	});
	for(var i = 0; i < len; i++) {
		oChartTypeSelect.addItem(new sap.ui.core.Item({
			key: chartType[i], text: chartType[i]
		}));
	}
	oListItem.addContent(oChartTypeSelect);
	oList.addItem(oListItem);
	
	//CHART TYPE
	oListItem = new sap.m.InputListItem({label:"Layer 3 Type"});
	var oChartTypeSelect = new sap.m.Select({
		selectedKey : oChart.getLayers()[2].getType(),
		change: function(oControlEvent) {
			oChart.getLayers()[2].setType(oControlEvent.getParameter("selectedItem").getKey());
		}
	});
	for(var i = 0; i < len; i++) {
		oChartTypeSelect.addItem(new sap.ui.core.Item({
			key: chartType[i], text: chartType[i]
		}));
	}
	oListItem.addContent(oChartTypeSelect);
	oList.addItem(oListItem);
	
	//CHART TYPE
	oListItem = new sap.m.InputListItem({label:"Primary Palette"});
	var chartType = ["none", "red", "blue", "green", "orange", "purple", "gray"];
	var oChartTypeSelect = new sap.m.Select({
		selectedKey: "red",
		change: function(oControlEvent) {
			if (oControlEvent.getParameter("selectedItem").getKey() == "none") {
				oChart.setPrimaryColorPalette(null);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "red") {
				oChart.setPrimaryColorPalette(redPalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "blue") {
				oChart.setPrimaryColorPalette(bluePalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "green") {
				oChart.setPrimaryColorPalette(greenPalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "orange") {
				oChart.setPrimaryColorPalette(orangePalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "purple") {
				oChart.setPrimaryColorPalette(purplePalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "gray") {
				oChart.setPrimaryColorPalette(greyPalette);	
			}
			
		}
	});
	var len = chartType.length;
	for(var i = 0; i < len; i++) {
		oChartTypeSelect.addItem(new sap.ui.core.Item({
			key: chartType[i], text: chartType[i]
		}));
	}
	oListItem.addContent(oChartTypeSelect);
	oList.addItem(oListItem);
	
	//CHART TYPE
	oListItem = new sap.m.InputListItem({label:"Secondary Palette"});
	var chartType = ["none", "red", "blue", "green", "orange", "purple", "gray"];
	var oChartTypeSelect = new sap.m.Select({
		selectedKey: "blue",
		change: function(oControlEvent) {
			if (oControlEvent.getParameter("selectedItem").getKey() == "none") {
				oChart.setSecondaryColorPalette(null);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "red") {
				oChart.setSecondaryColorPalette(redPalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "blue") {
				oChart.setSecondaryColorPalette(bluePalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "green") {
				oChart.setSecondaryColorPalette(greenPalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "orange") {
				oChart.setSecondaryColorPalette(orangePalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "purple") {
				oChart.setSecondaryColorPalette(purplePalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "gray") {
				oChart.setSecondaryColorPalette(greyPalette);	
			}
			
		}
	});
	var len = chartType.length;
	for(var i = 0; i < len; i++) {
		oChartTypeSelect.addItem(new sap.ui.core.Item({
			key: chartType[i], text: chartType[i]
		}));
	}
	oListItem.addContent(oChartTypeSelect);
	oList.addItem(oListItem);
	
	//CHART TYPE
	oListItem = new sap.m.InputListItem({label:"Layer 1 Palette"});
	var chartType = ["none", "red", "blue", "green", "orange", "purple", "gray"];
	var oChartTypeSelect = new sap.m.Select({
		change: function(oControlEvent) {
			if (oControlEvent.getParameter("selectedItem").getKey() == "none") {
				oChart.getLayers()[0].setPrimaryColorPalette(null);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "red") {
				oChart.getLayers()[0].setPrimaryColorPalette(redPalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "blue") {
				oChart.getLayers()[0].setPrimaryColorPalette(bluePalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "green") {
				oChart.getLayers()[0].setPrimaryColorPalette(greenPalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "orange") {
				oChart.getLayers()[0].setPrimaryColorPalette(orangePalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "purple") {
				oChart.getLayers()[0].setPrimaryColorPalette(purplePalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "gray") {
				oChart.getLayers()[0].setPrimaryColorPalette(greyPalette);	
			}
			
		}
	});
	var len = chartType.length;
	for(var i = 0; i < len; i++) {
		oChartTypeSelect.addItem(new sap.ui.core.Item({
			key: chartType[i], text: chartType[i]
		}));
	}
	oListItem.addContent(oChartTypeSelect);
	oList.addItem(oListItem);
	
	//CHART TYPE
	oListItem = new sap.m.InputListItem({label:"Layer 2 Palette"});
	var chartType = ["none", "red", "blue", "green", "orange", "purple", "gray"];
	var oChartTypeSelect = new sap.m.Select({
		change: function(oControlEvent) {
			if (oControlEvent.getParameter("selectedItem").getKey() == "none") {
				oChart.getLayers()[1].setPrimaryColorPalette(null);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "red") {
				oChart.getLayers()[1].setPrimaryColorPalette(redPalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "blue") {
				oChart.getLayers()[1].setPrimaryColorPalette(bluePalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "green") {
				oChart.getLayers()[1].setPrimaryColorPalette(greenPalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "orange") {
				oChart.getLayers()[1].setPrimaryColorPalette(orangePalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "purple") {
				oChart.getLayers()[1].setPrimaryColorPalette(purplePalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "gray") {
				oChart.getLayers()[1].setPrimaryColorPalette(greyPalette);	
			}
			
		}
	});
	var len = chartType.length;
	for(var i = 0; i < len; i++) {
		oChartTypeSelect.addItem(new sap.ui.core.Item({
			key: chartType[i], text: chartType[i]
		}));
	}
	oListItem.addContent(oChartTypeSelect);
	oList.addItem(oListItem);
	
	//CHART TYPE
	oListItem = new sap.m.InputListItem({label:"Layer 3 Palette"});
	var chartType = ["none", "red", "blue", "green", "orange", "purple", "gray"];
	var oChartTypeSelect = new sap.m.Select({
		change: function(oControlEvent) {
			if (oControlEvent.getParameter("selectedItem").getKey() == "none") {
				oChart.getLayers()[2].setPrimaryColorPalette(null);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "red") {
				oChart.getLayers()[2].setPrimaryColorPalette(redPalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "blue") {
				oChart.getLayers()[2].setPrimaryColorPalette(bluePalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "green") {
				oChart.getLayers()[2].setPrimaryColorPalette(greenPalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "orange") {
				oChart.getLayers()[2].setPrimaryColorPalette(orangePalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "purple") {
				oChart.getLayers()[2].setPrimaryColorPalette(purplePalette);	
			}
			else if (oControlEvent.getParameter("selectedItem").getKey() == "gray") {
				oChart.getLayers()[2].setPrimaryColorPalette(greyPalette);	
			}
			
		}
	});
	var len = chartType.length;
	for(var i = 0; i < len; i++) {
		oChartTypeSelect.addItem(new sap.ui.core.Item({
			key: chartType[i], text: chartType[i]
		}));
	}
	oListItem.addContent(oChartTypeSelect);
	oList.addItem(oListItem);
	
	
	//RANGE SELECTOR
	oListItem = new sap.m.InputListItem({label:"Range Selector"});
	oSwitch = new sap.m.Switch({
		state : oChart.getShowRangeSelector(),
		change : function() {
			oChart.setShowRangeSelector(this.getState());
		}
	});
	oListItem.addContent(oSwitch);
	oList.addItem(oListItem);
	
	//VALUE LOCALE
	oListItem = new sap.m.InputListItem({label:"Value Currency Locale"});
	var locales = ["en-US, zh-CH, de-DE",
	                 "zh-CH, default, de-DE",
	                 "zh-CH, de, ja",
	                 "de-DE, zh, ru"];
	var oLocaleSelect = new sap.m.Select({
		change: function(oControlEvent) {
			oChart.getLayers()[0].getValues()[0].setLocale(oControlEvent.getParameter("selectedItem").getKey());
		}
	});
	var len = locales.length;
	for(var i = 0; i < len; i++) {
		oLocaleSelect.addItem(new sap.ui.core.Item({
			key: locales[i], text: locales[i]
		}));
	}
	oListItem.addContent(oLocaleSelect);
	oList.addItem(oListItem);
};

function generateCombiValuesAxisConfigList(oList, oChart, secondaryAxis) {
	var oListItem = null;
	var oSwitch = null;
	
	var valueAxis = secondaryAxis ? oChart.getSecondaryValueAxis() : oChart.getPrimaryValueAxis();
	
	oListItem = new sap.m.InputListItem({label:"Values Axis Label"});
	oSwitch = new sap.m.Switch({
		state : valueAxis.getShowLabel(),
		change : function() {
			var va = valueAxis;
			va.setShowLabel(this.getState());
		}
	});
	oListItem.addContent(oSwitch);
	oList.addItem(oListItem);
	
	//VALUE AXIS PRIMARY LINE
	oListItem = new sap.m.InputListItem({label:"Value Primary Line"});
	oSwitch = new sap.m.Switch({
		state : valueAxis.getShowPrimaryLine(),
		change : function() {
			var va = valueAxis;
			va.setShowPrimaryLine(this.getState());
		}
	});
	oListItem.addContent(oSwitch);
	oList.addItem(oListItem);
	
	//VALUES AXIS GRID
	oListItem = new sap.m.InputListItem({label:"Values Grid"});
	oSwitch = new sap.m.Switch({
		state : valueAxis.getShowGrid(),
		change : function() {
			var va = valueAxis;
			va.setShowGrid(this.getState());
		}
	});
	oListItem.addContent(oSwitch);
	oList.addItem(oListItem);
	
	//VALUES AXIS THICKNESS
	oListItem = new sap.m.InputListItem({label:"Value Axis Thickness"});
	var oInput = new sap.m.Input({
		type: sap.m.InputType.Number,
		value : valueAxis.getThickness(),
		change : function() {
			var va = valueAxis;
			va.setThickness(parseFloat(this.getValue()));
		}
	});
	oListItem.addContent(oInput);
	oList.addItem(oListItem);
	
	//VALUES AXIS COLOR
	oListItem = new sap.m.InputListItem({label:"Value Axis Color"});
	var oInput = new sap.m.Input({
		value : valueAxis.getColor(),
		change : function() {
			var va = valueAxis;
			va.setColor(this.getValue());
		}
	});
	oListItem.addContent(oInput);
	oList.addItem(oListItem);
};
