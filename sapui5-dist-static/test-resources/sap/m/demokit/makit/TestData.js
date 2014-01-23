var MSTestData = {};
var SSTestData = {};

function getCombinationChartMSDataModel() {
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
	for(i = currentYear - 3; i <= currentYear; i++) {
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

function getMultiSeriesJSONDataModel() {
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
	for(i = currentYear - 3; i <= currentYear; i++) {
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

function getSingleSeriesJSONDataModel() {
	var testdata = [];
	var date = new Date();
	var currentYear = date.getFullYear();
	var i;
	for(i = currentYear - 10; i < currentYear; i++) {
		var rev = 500000 + (Math.random() * 200000);
		testdata.push({
			year : i,
			revenue: rev,
			cost: 500000 - (Math.random() * 110000),
		});
	}
	
	SSTestData = {mydata : testdata};

	var model = new sap.ui.model.json.JSONModel();
	model.setData(SSTestData);
	model.setSizeLimit(10000);

	return model;
}

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
}
