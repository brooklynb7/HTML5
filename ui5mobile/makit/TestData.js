var MSTestData = {};
var SSTestData = {};
function getMultiSeriesJSONDataModel() {
	MSTestData = {
			charttype : "column",
			mydata : [ {
				year : 2008,
				product : "Prod 2",
				revenue : 900000,
				cost: 870000
			}, {
				year : 2008,
				product : "Prod 1",
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
	model.setData(MSTestData);

	return model;
}

function getSingleSeriesJSONDataModel() {
	SSTestData = {
			charttype : "column",
			mydata : [ {
				year : 2008,
				revenue : 910000,
				cost: 800000
			}, {
				year : 2009,
				revenue : 700000,
				cost: 450000
			}, {
				year : 2010,
				revenue : 1000000,
				cost: 790000
			}, {
				year : 2011,
				revenue : 900000,
				cost: 750000
			}, {
				year : 2012,
				revenue : 1100000,
				cost: 750000
			}, {
				year : 2013,
				revenue : 1200000,
				cost: 800000
			} ]};

	var model = new sap.ui.model.json.JSONModel();
	model.setData(SSTestData);

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
