function createSSChart(id, title, model, nextPageId)
{
	// Chart
	var oChart = new sap.makit.Chart({
		width : "100%",
		height : "80%",
		type : sap.makit.ChartType.Column,
		showRangeSelector : true,
		showTableView : false,
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
	oChart.addColumn(new sap.makit.Column({name:"revenueValue", value:"{revenue}", type:"number"}));
	oChart.addColumn(new sap.makit.Column({name:"costValue", value:"{cost}", type:"number"}));
	oChart.setModel(model);
	oChart.bindRows("/mydata");
	oChart.attachEvent("doubletap",function(eventObj){
		var chartObj = eventObj.oSource;
		alert(chartObj.getSelectedCategory());
		alert(chartObj.getSelectedSeries());
	});
	
	var oButton = generateConfigPopover(oChart);
	
	var oPage = new sap.m.Page(id, { 
		title : title,
		showNavButton: true,
		navButtonTap: navBack,
		headerContent: oButton
	});
	
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

function createMSChart(id, title, model, nextPageId)
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
		category : new sap.makit.Category({
			column : "yearCategory",
			displayName : "The Year"
		}),
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
	oChart.addColumn(new sap.makit.Column({name:"productSeries", value:"{product}"}));
	oChart.addColumn(new sap.makit.Column({name:"revenueValue", value:"{revenue}", type:"number"}));
	oChart.addColumn(new sap.makit.Column({name:"costValue", value:"{cost}", type:"number"}));
	oChart.setModel(model);
	oChart.bindRows("/mydata");
	oChart.attachEvent("doubletap",function(eventObj){
		var chartObj = eventObj.oSource;
		alert(chartObj.getSelectedCategory());
		alert(chartObj.getSelectedSeries());
	});
	
	var oButton = generateConfigPopover(oChart);
	var oPage = new sap.m.Page(id, {
		title : title,
		showNavButton: true,
		navButtonTap: navBack,
		headerContent: oButton
	});
	
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

function createPieChart(id, title, model, nextPageId) {
	// Pie Chart
	var oChart = new sap.makit.Chart({
		width : "100%",
		height: "80%",
		type : sap.makit.ChartType.Pie,
		legendPosition : sap.makit.LegendPosition.Top,
		valueAxis: new sap.makit.ValueAxis({}),
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
	
	var oPage = new sap.m.Page(id, {
		title : title,
		showNavButton: true,
		navButtonTap: navBack,
		headerContent: oButton
	});
	oPage.addContent(oChart);
	
	return oPage;
};