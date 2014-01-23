jQuery.sap.require("sap.m.MessageBox");
function createCombinationMSChart(id, title, model)
{
	// Chart
	var oChart = new sap.makit.CombinationChart({
		width : "100%",
		height : "80%",
		legendPosition : sap.makit.LegendPosition.Right,
		categoryAxis: new sap.makit.CategoryAxis({displayAll:true}),
		categoryRegions : [
			new sap.makit.Category({
				column : "yearCategory",
				displayName : "Year"
			}),
			new sap.makit.Category({
				column : "monthCategory",
				displayName : "Month"
			})],
		primaryColorPalette: redPalette,
		secondaryColorPalette: bluePalette,
		legendPosition: sap.makit.LegendPosition.Top,
		showRangeSelector: false,
		showTableValue: false,
	});
	
	oChart.attachEvent("tap",function(oEvent){
		var isRightMB;
		var e = oEvent.getParameter("eventObject");
		if ("which" in e)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
			isRightMB = e.which == 3; 
		else if ("button" in e)  // IE, Opera 
			isRightMB = e.button == 2; 

		if(isRightMB){
			var srcObj = oEvent.getSource();
			var srcElem = srcObj.getDomRef();
			var temp = document.oncontextmenu;
			document.oncontextmenu = function (e){
				document.oncontextmenu = temp; //reset back to its original state, so that other elements still have context menu
				return false;
			};
			var msg = oEvent.getSource().getSelectedCategory();
			sap.m.MessageBox.show( msg, sap.m.MessageBox.Icon.INFORMATION, "Chart Right Click  - Selected Category", [sap.m.MessageBox.Action.OK] );
		}
	});
	
	oChart.attachEvent("doubletap",function(oEvent){
		var msg = "Layer 1: " + oEvent.getSource().getLayers()[0].getSelectedSeries() + "\n" + 
					"Layer 2: " + oEvent.getSource().getLayers()[1].getSelectedSeries() + "\n" +
					"Layer 3: " + oEvent.getSource().getLayers()[2].getSelectedSeries();
		sap.m.MessageBox.show( msg, sap.m.MessageBox.Icon.INFORMATION, "Chart Doubletap - Selected Series", [sap.m.MessageBox.Action.OK] );
	});
	
	oChart.attachEvent("longpress",function(oEvent){
		var msg = "Layer 1: " + oEvent.getSource().getLayers()[0].getSelectedSeries() + "\n" + 
		"Layer 2: " + oEvent.getSource().getLayers()[1].getSelectedSeries() + "\n" +
		"Layer 3: " + oEvent.getSource().getLayers()[2].getSelectedSeries();
		sap.m.MessageBox.show( msg, sap.m.MessageBox.Icon.INFORMATION, "Chart Long Press - Selected Series", [sap.m.MessageBox.Action.OK] );
	});
	
	var layer1 = new sap.makit.Layer({
		type : sap.makit.ChartType.Column,
		series : new sap.makit.Series({ column : "productSeries", displayName : "Product", format: "currency" }),
		values : [new sap.makit.Value({
			expression : "revenueValue", format : "currency", displayName : "Revenue"
		})],
	});
	
	var layer2 = new sap.makit.Layer({
		type : sap.makit.ChartType.Line,
		drawOnSecondaryAxis : true,
		series : new sap.makit.Series({	column : "productSeries", displayName : "Product", format: "rounded2" }),
		values : [new sap.makit.Value({
			expression : "costValue",
			format : "currency",
			displayName : "Cost"
		})],
		lineThickness:3
	});
	
	var layer3 = new sap.makit.Layer({
		type : sap.makit.ChartType.Line,
		series : new sap.makit.Series({	column : "productSeries", displayName : "Product" }),
		values : [new sap.makit.Value({
			expression : "revenueValue - costValue",
			format : "currency",
			displayName : "Gross"
		})],
	});
	
	oChart.addLayer(layer1);
	oChart.addLayer(layer2);
	oChart.addLayer(layer3);
	
	layer1.addColumn(new sap.makit.Column({name:"yearCategory", value:"{year}"}));
	layer1.addColumn(new sap.makit.Column({name:"monthCategory", value:"{month}"}));
	layer1.addColumn(new sap.makit.Column({name:"productSeries", value:"{product}"}));
	layer1.addColumn(new sap.makit.Column({name:"revenueValue", value:"{revenue}", type:"number"}));
	
	layer2.addColumn(new sap.makit.Column({name:"yearCategory", value:"{year}"}));
	layer2.addColumn(new sap.makit.Column({name:"monthCategory", value:"{month}"}));
	layer2.addColumn(new sap.makit.Column({name:"productSeries", value:"{product}"}));
	layer2.addColumn(new sap.makit.Column({name:"costValue", value:"{cost}", type:"number"}));
	
	layer3.addColumn(new sap.makit.Column({name:"yearCategory", value:"{year}"}));
	layer3.addColumn(new sap.makit.Column({name:"monthCategory", value:"{month}"}));
	layer3.addColumn(new sap.makit.Column({name:"productSeries", value:"{product}"}));
	layer3.addColumn(new sap.makit.Column({name:"revenueValue", value:"{revenue}", type:"number"}));
	layer3.addColumn(new sap.makit.Column({name:"costValue", value:"{cost}", type:"number"}));
	
	layer1.setModel(model);
	layer2.setModel(model);
	layer3.setModel(model);
	
	layer1.bindRows("/mydata");
	layer2.bindRows("/mydata");
	layer3.bindRows("/mydata");
	
	var customPalette = [ 0x555555, 0xffbbff, 0x73c949, 0x19b609, 0x009c07, 0x077f20, 0x02672d, 0x014924 ];
	
	var oButton = generateCombiConfigPopover(oChart);
	var oBar = new sap.m.Bar({ 
		contentLeft: [new sap.m.Button({text: "Back", type:sap.m.ButtonType.Back, press: function(){navBack();}})],	
		contentMiddle: [new sap.m.Label({text: title})],
		contentRight: [oButton]
	});
	var oPage = new sap.m.Page(id, {
		title : title,
		customHeader : oBar 
	});

	oPage.addContent(oChart);
	
	return oPage;
};

function createSSChart(id, title, model)
{
	// Chart
	var oChart = new sap.makit.Chart({
		width : "100%",
		height : "70%",
		type : sap.makit.ChartType.Column,
		showRangeSelector : true,
		showTableView : false,
		showTotalValue : true,
		lineThickness : 2,
		categoryAxis: new sap.makit.CategoryAxis({displayLastLabel:true}),
		category : new sap.makit.Category({
			column : "yearCategory",
			displayName : "Year"
		}),
		values : [new sap.makit.Value({
			expression : "revenueValue",
			format : "currency",
			displayName : "Revenue"
		})]
	});
	
	oChart.addColumn(new sap.makit.Column({name:"yearCategory", value:"{year}"}));
	oChart.addColumn(new sap.makit.Column({name:"country", value:"{country}"}));
	oChart.addColumn(new sap.makit.Column({name:"revenueValue", value:"{revenue}", type:"number"}));
	oChart.addColumn(new sap.makit.Column({name:"costValue", value:"{cost}", type:"number"}));
	
	var row = new sap.makit.Row();
	row.addCell(new sap.makit.Column({name:"yearCategory", value:"{year}"}));
	row.addCell(new sap.makit.Column({name:"country", value:"{country}"}));
	row.addCell(new sap.makit.Column({name:"revenueValue", value:"{revenue}", type:"number"}));
	row.addCell(new sap.makit.Column({name:"costValue", value:"{cost}", type:"number"}));
	
	oChart.attachEvent("tap",function(oEvent){
		var isRightMB;
		var e = oEvent.getParameter("eventObject");
		if ("which" in e)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
			isRightMB = e.which == 3; 
		else if ("button" in e)  // IE, Opera 
			isRightMB = e.button == 2; 

		if(isRightMB){
			var srcObj = oEvent.getSource();
			var srcElem = srcObj.getDomRef();
			var temp = document.oncontextmenu;
			document.oncontextmenu = function (e){
				document.oncontextmenu = temp; //reset back to its original state, so that other elements still have context menu
				return false;
			};
			var msg = oEvent.getSource().getSelectedCategory();
			sap.m.MessageBox.show( msg, sap.m.MessageBox.Icon.INFORMATION, "Chart Right Click  - Selected Category", [sap.m.MessageBox.Action.OK] );
		}
	});
	
	oChart.attachEvent("doubletap",function(oEvent){
		var msg = oEvent.getSource().getSelectedCategory();
		sap.m.MessageBox.show( msg, sap.m.MessageBox.Icon.INFORMATION, "Chart Double Tap - Selected Category", [sap.m.MessageBox.Action.OK] );
	});
	
	oChart.attachEvent("longpress",function(oEvent){
		var msg = oEvent.getSource().getSelectedCategory();
		sap.m.MessageBox.show( msg, sap.m.MessageBox.Icon.INFORMATION, "Chart Long Press - Selected Category", [sap.m.MessageBox.Action.OK] );
	});
	oChart.setModel(model);
	oChart.bindRows("/mydata");

	var oButton = generateConfigPopover(oChart);
	var oBar = new sap.m.Bar({ 
		contentLeft: [new sap.m.Button({text: "Back", type:sap.m.ButtonType.Back, press: function(){navBack();}})],	
		contentMiddle: [new sap.m.Label({text: title})],
		contentRight: [oButton]
	});
	
	var oPage = new sap.m.Page(id, { title : title, customHeader : oBar });
	
	var revenueValueBtn = new sap.m.Button(id + "_revenueValueBtn", {text: "Revenue"});
	var costValueBtn = new sap.m.Button(id + "_costValueBtn", {text: "Cost"});
	var netProfValueBtn = new sap.m.Button(id + "_netProfValueBtn", {text: "Net Profit"});
	
	var oSegmentedBtn = new sap.m.SegmentedButton({
		selectedButton: revenueValueBtn,
		select: function(oEvent) {
			var targetId = oEvent.getParameter('id');
			var expression = "revenueValue";
			if(targetId === id + "_revenueValueBtn") {
				expression = "revenueValue";
			} else if(targetId === id + "_costValueBtn") {
				expression = "costValue";
			} else if(targetId === id + "_netProfValueBtn"){
				expression = "revenueValue - costValue";
			}
			var va = oChart.getValues()[0];
			va.setExpression(expression);
			}
	});
	
	oSegmentedBtn.addButton(revenueValueBtn);
	oSegmentedBtn.addButton(costValueBtn);
	oSegmentedBtn.addButton(netProfValueBtn);
	
	var oSegmentedButtonBar = new sap.m.Bar({ 
		contentMiddle: [oSegmentedBtn]
	});
	
	oPage.setSubHeader(oSegmentedButtonBar);
	oPage.addContent(oChart);
	
	return oPage;
};

function createMSChart(id, title, model)
{
	// Chart
	var oChart = new sap.makit.Chart({
		width : "100%",
		height : "80%",
		type : sap.makit.ChartType.Column,
		
		showRangeSelector : true,
		showTableView : false,
		valueAxis : new sap.makit.ValueAxis({
		}),
		categoryAxis : new sap.makit.CategoryAxis({
			displayLastLabel: true
		}),
		categoryRegions : [
		                new sap.makit.Category({ column : "yearCategory", displayName : "Year" }),
		                new sap.makit.Category({ column : "monthCategory", displayName : "Month" }),
		],
		series : new sap.makit.Series({
			column : "productSeries",
			displayName : "Product"
		}),
		values : [new sap.makit.Value({
			expression : "revenueValue",
			format : "currency",
			displayName : "Revenue"
		})],
		valueBubble : new sap.makit.ValueBubble({
			style: sap.makit.ValueBubbleStyle.FloatTop,
			showCategoryText: true
		}),
	});
	oChart.addColumn(new sap.makit.Column({name:"yearCategory", value:"{year}"}));
	oChart.addColumn(new sap.makit.Column({name:"monthCategory", value:"{month}"}));
	oChart.addColumn(new sap.makit.Column({name:"productSeries", value:"{product}"}));
	oChart.addColumn(new sap.makit.Column({name:"revenueValue", value:"{revenue}", type:"number"}));
	oChart.addColumn(new sap.makit.Column({name:"costValue", value:"{cost}", type:"number"}));
	oChart.setModel(model);
	oChart.bindRows("/mydata");
	
	oChart.attachEvent("tap",function(oEvent){
		var isRightMB;
		var e = oEvent.getParameter("eventObject");
		if ("which" in e)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
			isRightMB = e.which == 3; 
		else if ("button" in e)  // IE, Opera 
			isRightMB = e.button == 2; 

		if(isRightMB){
			var srcObj = oEvent.getSource();
			var srcElem = srcObj.getDomRef();
			var temp = document.oncontextmenu;
			document.oncontextmenu = function (e){
				document.oncontextmenu = temp; //reset back to its original state, so that other elements still have context menu
				return false;
			};
			var msg = oEvent.getSource().getSelectedCategory();
			sap.m.MessageBox.show( msg, sap.m.MessageBox.Icon.INFORMATION, "Chart Right Click  - Selected Category", [sap.m.MessageBox.Action.OK] );
		}
	});
	
	oChart.attachEvent("doubletap",function(oEvent){
		var chartObj = oEvent.getSource();
		var msg = oEvent.getSource().getSelectedCategory();
		sap.m.MessageBox.show( msg, sap.m.MessageBox.Icon.INFORMATION, "Chart Double Tap - Selected Category", [sap.m.MessageBox.Action.OK] );
	});
	
	var oButton = generateConfigPopover(oChart);
	var oBar = new sap.m.Bar({ 
		contentLeft: [new sap.m.Button({text: "Back", type:sap.m.ButtonType.Back, press: function(){navBack();}})],	
		contentMiddle: [new sap.m.Label({text: title})],
		contentRight: [oButton]
	});
	var oPage = new sap.m.Page(id, {
		title : title,
		customHeader : oBar 
	});
	
	var revenueValueBtn = new sap.m.Button(id + "_revenueValueBtn", {text: "Revenue"})
	var costValueBtn = new sap.m.Button(id + "_costValueBtn", {text: "Cost"});
	var netProfValueBtn = new sap.m.Button(id + "_netProfValueBtn", {text: "Net Profit"});	
	var oSegmentedBtn = new sap.m.SegmentedButton({
		selectedButton: revenueValueBtn,
		select: function(oEvent) {
			var targetId = oEvent.getParameter('id');
			var expression = "revenueValue";
			if(targetId === id + "_revenueValueBtn") {
				expression = "revenueValue";
			} else if(targetId === id + "_costValueBtn") {
				expression = "costValue";
			} else if(targetId === id + "_netProfValueBtn"){
				expression = "revenueValue - costValue";
			}
			var va = oChart.getValues()[0];
			va.setExpression(expression);
			}
	});
	
	oSegmentedBtn.addButton(revenueValueBtn);
	oSegmentedBtn.addButton(costValueBtn);
	oSegmentedBtn.addButton(netProfValueBtn);
	
	var oSegmentedButtonBar = new sap.m.Bar({ 
		contentMiddle: [oSegmentedBtn]
	});
	
	oPage.setSubHeader(oSegmentedButtonBar);
	oPage.addContent(oChart);
	
	return oPage;
};

function createPieChart(id, title, model) {
	// Pie Chart
	var oChart = new sap.makit.Chart({
		width : "100%",
		height: "80%",
		type : sap.makit.ChartType.Pie,
		
		valueAxis: new sap.makit.ValueAxis({}),
		maxSliceCount: 3,
		categoryAxis: new sap.makit.CategoryAxis({}),
		category : new sap.makit.Category({
			column : "product",
		}),
		values : [new sap.makit.Value({
			expression : "revenue",
			format : "currency",
		})],
	});
	oChart.addColumn(new sap.makit.Column({name:"product", value:"{product}"}));
	oChart.addColumn(new sap.makit.Column({name:"revenue", value:"{revenue}", type:"number"}));
	oChart.setModel(model);
	oChart.bindRows("/");
	
	//Now create the page and headers
	var oButton = generatePieConfigPopover(oChart);
	var oBar = new sap.m.Bar({ 
		contentLeft: [new sap.m.Button({text: "Back", type:sap.m.ButtonType.Back, press: function(){navBack();}})],	
		contentMiddle: [new sap.m.Label({text: title})],
		contentRight: [oButton]
	});
	
	var oPage = new sap.m.Page(id, {
		title : title,
		customHeader : oBar 
	});
	oPage.addContent(oChart);
	
	return oPage;
};