function generatePieConfigPopover(oChart) {
	var oConfigList = new sap.m.List({
		inset : true
	});
	
	generatePieConfigurationList(oConfigList, oChart);
	
	var oScrollContainer = new sap.m.ScrollContainer({
		horizontal: false,
		vertical: true,
		content: oConfigList
	});
	
	var oConfigPopOver = new sap.m.Popover({
		placement: sap.m.PlacementType.Bottom,
		showHeader: false,
		content: [
			oScrollContainer
		]
	});
	
	var oButton = new sap.m.Button({
		text: "Configure", icon: "img/settings.png",
		press : function() {
			oConfigPopOver.openBy(this);
		}
	});
	
	return oButton;
};

function generateConfigPopover(oChart) {
	var oChartConfigList = new sap.m.List({
		headerText: "Chart Property",
		inset : true
	});
	
	var oCategoryAxisConfigList = new sap.m.List({
		headerText: "Category Axis Property",
		inset : true
	});
	
	var oValuesAxisConfigList = new sap.m.List({
		headerText: "Values Axis Property",
		inset : true
	});
	
	var oValueBubbleAxisConfigList = new sap.m.List({
		headerText: "Values Bubble Property",
		inset : true
	});
	
	var oCategoryRegionConfigList = new sap.m.List({
		headerText: "Category Region Property",
		inset : true
	});
	
	generateChartConfigList(oChartConfigList, oChart);
	generateCategoryAxisConfigList(oCategoryAxisConfigList, oChart);
	generateValuesAxisConfigList(oValuesAxisConfigList, oChart);
	generateValueBubbleConfigList(oValueBubbleAxisConfigList, oChart);
	generateCategoryRegionConfigList(oCategoryRegionConfigList, oChart);
	
	var oScrollContainer = new sap.m.ScrollContainer({
		horizontal: false, vertical: true,
		height: "300px",
		content: [oChartConfigList, oCategoryAxisConfigList, oValuesAxisConfigList, oValueBubbleAxisConfigList, oCategoryRegionConfigList]
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


function generateChartConfigList(oList, oChart) {
	var oListItem = null;
	var oSwitch = null;

	//================================================================
	//ADD RANDOM DATA
	if(oChart.getSeries() && oChart.getModel() instanceof sap.ui.model.json.JSONModel){
		oListItem = new sap.m.CustomListItem();
		var dataButton = new sap.m.Button({
			buttonType : sap.m.ButtonType.Button,
			text : "Add Random Data",
			press : function() {
				var newProd1 = {
					year : MSTestData.mydata.length/2 + 2008,
					product : "Prod 1",
					revenue : Math.round(1000000 * Math.random()),
					cost : Math.round(800000 * Math.random()),
				};
				var newProd2 = {
					year : MSTestData.mydata.length/2 + 2008,
					product : "Prod 2",
					revenue : Math.round(900000 * Math.random()),
					cost : Math.round(760000 * Math.random()),
				};
				//oChart.getCategoryAxis().setDisplayLastLabel(true);
				MSTestData.mydata.push(newProd1);
				MSTestData.mydata.push(newProd2);
				oChart.getModel().checkUpdate();
			}
		});
		oListItem.addContent(dataButton);
		oList.addItem(oListItem);
	}
	

	//================================================================
	//CHART TYPE
	oListItem = new sap.m.InputListItem({label:"Chart Type"});
	var chartType = [sap.makit.ChartType.Column, sap.makit.ChartType.Bar, 
	                 sap.makit.ChartType.Line, sap.makit.ChartType.Bubble,
	                 sap.makit.ChartType.WaterfallColumn, sap.makit.ChartType.WaterfallBar];
	var oChartTypeSelect = new sap.m.Select({
		change: function(oControlEvent) {
			oChart.setType(oControlEvent.getParameter("selectedItem").getKey());
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

	//================================================================
	//Legend Position - only for multi series chart
	if(oChart.getSeries()){
		oListItem = new sap.m.InputListItem({label:"Legend Position"});
		var legendPos = [sap.makit.LegendPosition.Top,
		                 sap.makit.LegendPosition.Right,
		                 sap.makit.LegendPosition.Bottom,
		                 sap.makit.LegendPosition.Left,
		                 sap.makit.LegendPosition.None];
		var oLegendPosSelect = new sap.m.Select({
			change: function(oControlEvent) {
				oChart.setLegendPosition(oControlEvent.getParameter("selectedItem").getKey());
			}
		});
		var len = legendPos.length;
		for(var i = 0; i < len; i++) {
			oLegendPosSelect.addItem(new sap.ui.core.Item({
				key: legendPos[i], text: legendPos[i]
			}));
		}
		oListItem.addContent(oLegendPosSelect);
		oList.addItem(oListItem);
	}
	//================================================================
	//TABLE VIEW
	oListItem = new sap.m.InputListItem({label:"Table View"});
	oSwitch = new sap.m.Switch({
		state : oChart.getShowTableView(),
		change : function() {
			oChart.setShowTableView(!oChart.getShowTableView());
		}
	});

	oListItem.addContent(oSwitch);
	oList.addItem(oListItem);

	//================================================================
	//Range Selector
	oListItem = new sap.m.InputListItem({label:"Range Selector"});
	oSwitch = new sap.m.Switch({
		state : oChart.getShowRangeSelector(),
		change : function() {
			oChart.setShowRangeSelector(this.getState());
		}
	});
	oListItem.addContent(oSwitch);
	oList.addItem(oListItem);
	
	//================================================================
	//Show Total Value
	oListItem = new sap.m.InputListItem({label:"Show Total Value"});
	oSwitch = new sap.m.Switch({
		state : oChart.getShowTotalValue(),
		change : function() {
			oChart.setShowTotalValue(this.getState());
		}
	});
	oListItem.addContent(oSwitch);
	oList.addItem(oListItem);
	
	//================================================================
	//Value Locale
	oListItem = new sap.m.InputListItem({label:"Value Currency Locale"});
	var locales = ["en-US", "zh-CH", "de-DE", "en-GB"];
	var oLocaleSelect = new sap.m.Select({
		change: function(oControlEvent) {
			oChart.getValues()[0].setLocale(oControlEvent.getParameter("selectedItem").getKey());
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


function generateCategoryAxisConfigList(oList, oChart) {
	var oListItem = null;
	var oSwitch = null;

	//================================================================
	//SORT ORDER
	var oListItem = new sap.m.InputListItem({label:"Sort Order"});
	var formatType = [sap.makit.SortOrder.Ascending, sap.makit.SortOrder.Descending, sap.makit.SortOrder.Partial, sap.makit.SortOrder.None];
	var oSortOrderSelect = new sap.m.Select({
		change: function(oControlEvent) {
			var catAxisObj = oChart.getCategoryAxis();
			catAxisObj.setSortOrder(oControlEvent.getParameter("selectedItem").getKey());
		}
	});
	var len = formatType.length;
	for(var i = 0; i < len; i++) {
		oSortOrderSelect.addItem(new sap.ui.core.Item({
			key: formatType[i], text: formatType[i]
		}));
	}
	oListItem.addContent(oSortOrderSelect);
	oList.addItem(oListItem);

	//================================================================
	//CATEGORY AXIS LABEL
	oListItem = new sap.m.InputListItem({label:"Category Axis Label"});
	oSwitch = new sap.m.Switch({
		state : oChart.getCategoryAxis().getShowLabel(),
		change : function() {
			var ca = oChart.getCategoryAxis();
			ca.setShowLabel(this.getState());
		}
	});
	oListItem.addContent(oSwitch);
	oList.addItem(oListItem);

	//================================================================
	//CATEGORY AXIS PRIMARY LINE
	oListItem = new sap.m.InputListItem({label:"Category Primary Line"});
	oSwitch = new sap.m.Switch({
		state : oChart.getCategoryAxis().getShowPrimaryLine(),
		change : function() {
			var ca = oChart.getCategoryAxis();
			ca.setShowPrimaryLine(this.getState());
		}
	});
	oListItem.addContent(oSwitch);
	oList.addItem(oListItem);

	//================================================================
	//CATEGORY AXIS GRID
	oListItem = new sap.m.InputListItem({label:"Category Grid"});
	oSwitch = new sap.m.Switch({
		state : oChart.getCategoryAxis().getShowGrid(),
		change : function() {
			var ca = oChart.getCategoryAxis();
			ca.setShowGrid(this.getState());
		}
	});
	oListItem.addContent(oSwitch);
	oList.addItem(oListItem);

	//================================================================
	//CATEGORY AXIS THICKNESS
	oListItem = new sap.m.InputListItem({label:"Category Axis Thickness"});
	var oInput = new sap.m.Input({
		type: sap.m.InputType.Number,
		value : oChart.getCategoryAxis().getThickness(),
		change : function() {
			var ca = oChart.getCategoryAxis();
			ca.setThickness(parseFloat(this.getValue()));
		}
	});
	oListItem.addContent(oInput);
	oList.addItem(oListItem);

	//================================================================
	//CATEGORY AXIS COLOR
	oListItem = new sap.m.InputListItem({label:"Category Axis Color"});
	var oInput = new sap.m.Input({
		value : oChart.getCategoryAxis().getColor(),
		change : function() {
			var ca = oChart.getCategoryAxis();
			ca.setColor(this.getValue());
		}
	});
	oListItem.addContent(oInput);
	oList.addItem(oListItem);
	
	//================================================================
	//CATEGORY AXIS PRIMARY LINE
	oListItem = new sap.m.InputListItem({label:"Display Last Label"});
	oSwitch = new sap.m.Switch({
		state : oChart.getCategoryAxis().getDisplayLastLabel(),
		change : function() {
			var ca = oChart.getCategoryAxis();
			ca.setDisplayLastLabel(this.getState());
		}
	});
	oListItem.addContent(oSwitch);
	oList.addItem(oListItem);

	//================================================================
	//CATEGORY AXIS PRIMARY LINE
	if(oChart.getCategoryRegions().length > 1) {
		oListItem = new sap.m.InputListItem({label:"Display All Categories"});
		oSwitch = new sap.m.Switch({
			state : oChart.getCategoryAxis().getDisplayAll(),
			change : function() {
				var ca = oChart.getCategoryAxis();
				ca.setDisplayAll(this.getState());
			}
		});
		oListItem.addContent(oSwitch);
		oList.addItem(oListItem);
	}
};

function generateValuesAxisConfigList(oList, oChart) {
	var oListItem = null;
	var oSwitch = null;

	//================================================================
	//VALUE FORMAT
	var oListItem = new sap.m.InputListItem({label:"Value Format"});
	var formatType = ["currency", "rounded0", "rounded3", "percent"];
	var oValueFormatSelect = new sap.m.Select({
		change: function(oControlEvent) {
			var val = oChart.getValues()[0];
			val.setFormat(oControlEvent.getParameter("selectedItem").getKey());
		}
	});
	var len = formatType.length;
	for(var i = 0; i < len; i++) {
		oValueFormatSelect.addItem(new sap.ui.core.Item({
			key: formatType[i], text: formatType[i]
		}));
	}
	oListItem.addContent(oValueFormatSelect);
	oList.addItem(oListItem);

	//================================================================
	//VALUES AXIS LABEL
	oListItem = new sap.m.InputListItem({label:"Values Axis Label"});
	oSwitch = new sap.m.Switch({
		state : oChart.getValueAxis().getShowLabel(),
		change : function() {
			var va = oChart.getValueAxis();
			va.setShowLabel(this.getState());
		}
	});
	oListItem.addContent(oSwitch);
	oList.addItem(oListItem);
	
	//================================================================
	//VALUE AXIS PRIMARY LINE
	oListItem = new sap.m.InputListItem({label:"Value Primary Line"});
	oSwitch = new sap.m.Switch({
		state : oChart.getValueAxis().getShowPrimaryLine(),
		change : function() {
			var va = oChart.getValueAxis();
			va.setShowPrimaryLine(this.getState());
		}
	});
	oListItem.addContent(oSwitch);
	oList.addItem(oListItem);
	
	//================================================================
	//VALUES AXIS GRID
	oListItem = new sap.m.InputListItem({label:"Values Grid"});
	oSwitch = new sap.m.Switch({
		state : oChart.getValueAxis().getShowGrid(),
		change : function() {
			var va = oChart.getValueAxis();
			va.setShowGrid(this.getState());
		}
	});
	oListItem.addContent(oSwitch);
	oList.addItem(oListItem);
	
	//================================================================
	//VALUES AXIS THICKNESS
	oListItem = new sap.m.InputListItem({label:"Value Axis Thickness"});
	var oInput = new sap.m.Input({
		type: sap.m.InputType.Number,
		value : oChart.getValueAxis().getThickness(),
		change : function() {
			var va = oChart.getValueAxis();
			va.setThickness(parseFloat(this.getValue()));
		}
	});
	oListItem.addContent(oInput);
	oList.addItem(oListItem);
	
	//================================================================
	//VALUES AXIS COLOR
	oListItem = new sap.m.InputListItem({label:"Value Axis Color"});
	var oInput = new sap.m.Input({
		value : oChart.getValueAxis().getColor(),
		change : function() {
			var va = oChart.getValueAxis();
			va.setColor(this.getValue());
		}
	});
	oListItem.addContent(oInput);
	oList.addItem(oListItem);
};

function generateValueBubbleConfigList(oList, oChart) {
	var oListItem = null;
	var oSwitch = null;
	
	//================================================================
	//Value Bubble Visible
	oListItem = new sap.m.InputListItem({label:"Visible"});
	oSwitch = new sap.m.Switch({
		state : oChart.getValueBubble().getVisible(),
		change : function() {
			var vb = oChart.getValueBubble();
			vb.setVisible(this.getState());
		}
	});
	oListItem.addContent(oSwitch);
	oList.addItem(oListItem);
	
	//================================================================
	// Value Bubble Style
	var oListItem = new sap.m.InputListItem({label:"Style"});
	var vbStyle = [sap.makit.ValueBubbleStyle.FloatTop, sap.makit.ValueBubbleStyle.Top, sap.makit.ValueBubbleStyle.Float];
	var oSelect = new sap.m.Select({
		change: function(oControlEvent) {
			var vb = oChart.getValueBubble();
			vb.setStyle(oControlEvent.getParameter("selectedItem").getKey());
		}
	});
	var len = vbStyle.length;
	for(var i = 0; i < len; i++) {
		oSelect.addItem(new sap.ui.core.Item({
			key: vbStyle[i], text: vbStyle[i]
		}));
	}
	oListItem.addContent(oSelect);
	oList.addItem(oListItem);
	
	//================================================================
	//Value Bubble Show Category Text
	oListItem = new sap.m.InputListItem({label:"Category Text"});
	oSwitch = new sap.m.Switch({
		state : oChart.getValueBubble().getShowCategoryText(),
		change : function() {
			var vb = oChart.getValueBubble();
			vb.setShowCategoryText(this.getState());
		}
	});
	oListItem.addContent(oSwitch);
	oList.addItem(oListItem);
	
	//================================================================
	//Value Bubble Show Category Display Name
	oListItem = new sap.m.InputListItem({label:"Category Display Name"});
	oSwitch = new sap.m.Switch({
		state : oChart.getValueBubble().getShowCategoryDisplayName(),
		change : function() {
			var vb = oChart.getValueBubble();
			vb.setShowCategoryDisplayName(this.getState());
		}
	});
	oListItem.addContent(oSwitch);
	oList.addItem(oListItem);
	
	//================================================================
	//Value Bubble Show Value Display Name
	oListItem = new sap.m.InputListItem({label:"Value Display Name"});
	oSwitch = new sap.m.Switch({
		state : oChart.getValueBubble().getShowValueDisplayName(),
		change : function() {
			var vb = oChart.getValueBubble();
			vb.setShowValueDisplayName(this.getState());
		}
	});
	oListItem.addContent(oSwitch);
	oList.addItem(oListItem);
	
	//================================================================
	//Value Bubble Show Null Value
	oListItem = new sap.m.InputListItem({label:"Show Null Value"});
	oSwitch = new sap.m.Switch({
		state : oChart.getValueBubble().getShowNullValue(),
		change : function() {
			var vb = oChart.getValueBubble();
			vb.setShowNullValue(this.getState());
		}
	});
	oListItem.addContent(oSwitch);
	oList.addItem(oListItem);
	
};

function generateCategoryRegionConfigList(oList, oChart) {
	var oListItem = null;
	
	//================================================================
	// Category Display Name
	var oListItem = new sap.m.InputListItem({label:"Display Name"});
	var oInput = new sap.m.Input({
		value : oChart.getCategory().getDisplayName(),
		change : function() {
			var ca = oChart.getCategory();
			ca.setDisplayName(this.getValue());
		}
	});
	oListItem.addContent(oInput);
	oList.addItem(oListItem);
	
	//================================================================
	// Category Format
	var oListItem = new sap.m.InputListItem({label:"Format"});
	
	var legendPos = ["none", "number", "currency"];
	var oLegendPosSelect = new sap.m.Select({
		selectedKey : "none",
		change: function(oControlEvent) {
			var key = oControlEvent.getParameter("selectedItem").getKey()
			key = key == "none" ? "" : key;
			oChart.getCategory().setFormat(key);
		}
	});
	var len = legendPos.length;
	for(var i = 0; i < len; i++) {
		oLegendPosSelect.addItem(new sap.ui.core.Item({
			key: legendPos[i], text: legendPos[i]
		}));
	}
	oListItem.addContent(oLegendPosSelect);
	oList.addItem(oListItem);
};

function generatePieConfigurationList(oList, oChart) {
	
	var oListItem = null;
	
	//================================================================
	//Chart Type
	oListItem = new sap.m.InputListItem({label:"Type"});
	var chartTypes = [sap.makit.ChartType.Pie,
	                 sap.makit.ChartType.Donut];
	var oChartTypeSelect = new sap.m.Select({
		change: function(oControlEvent) {
			oChart.setType(oControlEvent.getParameter("selectedItem").getKey());
		}
	});
	var len = chartTypes.length;
	for(var i = 0; i < len; i++) {
		oChartTypeSelect.addItem(new sap.ui.core.Item({
			key: chartTypes[i], text: chartTypes[i]
		}));
	}
	oListItem.addContent(oChartTypeSelect);
	oList.addItem(oListItem);
	
	//================================================================
	//Legend Position
	oListItem = new sap.m.InputListItem({label:"Legend Position"});
	var legendPos = [sap.makit.LegendPosition.Top,
	                 sap.makit.LegendPosition.Right,
	                 sap.makit.LegendPosition.Bottom,
	                 sap.makit.LegendPosition.Left,
	                 sap.makit.LegendPosition.None];
	var oLegendPosSelect = new sap.m.Select({
		change: function(oControlEvent) {
			oChart.setLegendPosition(oControlEvent.getParameter("selectedItem").getKey());
		}
	});
	var len = legendPos.length;
	for(var i = 0; i < len; i++) {
		oLegendPosSelect.addItem(new sap.ui.core.Item({
			key: legendPos[i], text: legendPos[i]
		}));
	}
	oListItem.addContent(oLegendPosSelect);
	oList.addItem(oListItem);
	
	//================================================================
	//Value Bubble Position
	oListItem = new sap.m.InputListItem({label:"Value Bubble Position"});
	var valBubPos = [sap.makit.ValueBubblePosition.Top,
	                 sap.makit.ValueBubblePosition.Side];
	var oValBubPosSelect = new sap.m.Select({
		change: function(oControlEvent) {
			oChart.getValueBubble().setPosition(oControlEvent.getParameter("selectedItem").getKey());
		}
	});
	var len = valBubPos.length;
	for(var i = 0; i < len; i++) {
		oValBubPosSelect.addItem(new sap.ui.core.Item({
			key: valBubPos[i], text: valBubPos[i]
		}));
	}
	oListItem.addContent(oValBubPosSelect);
	oList.addItem(oListItem);
	
};
