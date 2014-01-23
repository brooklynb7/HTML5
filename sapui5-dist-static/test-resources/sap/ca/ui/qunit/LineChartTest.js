
/* 
 * Some tests for the line chart control
 */
var chartID = "__chart0";	

module('Line Chart');

/*
 * Test that the line chart has been created
 */
test("Line Chart Creation with Id", function () {
    strictEqual(oLineChart.getId(), chartID, "line chart ID is not" +chartID);
});

/*
 * Test that the line chart can be created then destroyed
 */
test("Line Chart Destroy", function () {	
	var oLineChart = new sap.ca.ui.charts.LineChart();
	oLineChart.placeAt("contentHolder");
	
    ok( !!oLineChart, "Bubble Chart created" );
    ok( sap.ui.getCore().byId(oLineChart.getId()), "Line Chart Found");

    // Destroy object
    oLineChart.destroy();

    ok( !sap.ui.getCore().byId(oBubbleChart2.getId()), "Bubble Chart destroyed");     
})
