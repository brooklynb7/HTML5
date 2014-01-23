var performanceTimes = {};
var MSTestdata = {};
var SSTestdata = {};

function getMultiSeriesJSONDataModel() {
	MSTestdata = {
			mydata : [ {
				year : 2008,
				product : "Prod 1",
				revenue : 500000,
				cost: 400000
			}, {
				year : 2008,
				product : "Prod 2",
				revenue : 700000,
				cost: 450000
			}, {
				year : 2009,
				product : "Prod 1",
				revenue : 1000000,
				cost: 790000
			}, {
				year : 2009,
				product : "Prod 2",
				revenue : 900000,
				cost: 750000
			}, {
				year : 2010,
				product : "Prod 1",
				revenue : 1100000,
				cost: 750000
			}, {
				year : 2010,
				product : "Prod 2",
				revenue : 1200000,
				cost: 800000
			} ]};

	var model = new sap.ui.model.json.JSONModel();
	model.setData(MSTestdata);

	return model;
};

function getSingleSeriesJSONDataModel() {
	SSTestdata = {
			charttype : "column",
			mydata : [ {
				year : 2008,
				revenue : 8500000,
				cost: 7400000
			}, {
				year : 2009,
				revenue : 10000000,
				cost: 7990000
			}, {
				year : 2010,
				revenue : 11000000,
				cost: 9750000
			} ]};

	var model = new sap.ui.model.json.JSONModel();
	model.setData(SSTestdata);

	return model;
};

function getPieRevenueDataModel() {
	var data = [ {
				product : "Prod 1",
				revenue : 500000,
			}, {
				product : "Prod 2",
				revenue : 700000,
			}, {
				product : "Prod 3",
				revenue : 1000000,
			}, {
				product : "Prod 4",
				revenue : 900000,
			}, {
				product : "Prod 5",
				revenue : 1200000,
			}, {
				product : "Prod 6",
				revenue : 800000,
			}, {
				product : "Prod 7",
				revenue : 1300000,
			}, {
				product : "Prod 8",
				revenue : 1600000,
			} ];

	var model = new sap.ui.model.json.JSONModel();
	model.setData(data);

	return model;
};


function getCombiChartMSDataModel() {
	var testdata = [];
	var date = new Date();
	var currentYear = date.getFullYear();
	var i, j, k;
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var prods = ['Prod 1', 'Prod 2', 'Prod 3'];
	var prodMinVal = [500000, 600000, 400000];
	var prodVal = [200000, 200000, 500000];
	var prodCost = [110000, 90000, 200000];
	var monthLen = months.length;
	for(i = currentYear - 10; i <= currentYear; i++) {
		for(j = 0; j < monthLen; j++) {
			for(k = 0; k < prods.length; k++) {
				testdata.push({
					year : i,
					month : months[j],
					product: prods[k],
					revenue: prodMinVal[k] + (Math.random() * prodVal[k]),
					cost: prodMinVal[k] - (Math.random() * prodCost[k]),
				});
			}
		}
	}
	
	MSTestData = {mydata : testdata};

	var model = new sap.ui.model.json.JSONModel();
	model.setData(MSTestData);
	model.setSizeLimit(10000);

	return model;
}



function displayLog(eventObj) {
	var now = new Date();
	performanceTimes[eventObj.sId] = now.getTime();
};

function displayPerformance(eventObj) {
	var now = new Date();
	performanceTimes[eventObj.sId] = now.getTime();
	console.log("updateRows : " + (performanceTimes["_endUpdateRows"] - performanceTimes["_startUpdateRows"]));
	console.log("createRows : " + (performanceTimes["_endCreateRows"] - performanceTimes["_startCreateRows"]));
	console.log("prepareColumn : " + (performanceTimes["_endColumn"] - performanceTimes["_startCreateRows"]));
	console.log("destroyRows : " + (performanceTimes["_endDestroyRows"] - performanceTimes["_endColumn"]));
	console.log("prepareRows : " + (performanceTimes["_endPrepareRows"] - performanceTimes["_endDestroyRows"]));
	console.log("createRows : " + (performanceTimes["_endCreateRows"] - performanceTimes["_endPrepareRows"]));
	
};

function beforeSetDataTable(eventObj) {
	displayLog(eventObj);
	var chartObj = eventObj.getSource();
	chartObj.attachEvent("_makitBeforeRender", displayLog);
	chartObj.attachEvent("_makitRenderStart ", displayLog);
	chartObj.attachEvent("_makitRenderEnd", displayLog);
	chartObj.attachEvent("_makitAnimationEnd", displayLog);
};

/*
	oChart.attachEvent("_beforeRendering", displayLog);
	oChart.attachEvent("_afterRendering", displayLog);
	oChart.attachEvent("_createMAKitObject", displayLog);
	oChart.attachEvent("_restoreMAKitObject", displayLog);
	oChart.attachEvent("_createDataTable", displayLog);
	oChart.attachEvent("_beforeSetDataTable", displayLog);
	oChart.attachEvent("_makitBeforeRender", displayLog);
	oChart.attachEvent("_makitRenderStart ", displayLog);
	oChart.attachEvent("_makitRenderEnd", displayLog);
	oChart.attachEvent("_makitAnimationEnd", displayLog);
	
 */