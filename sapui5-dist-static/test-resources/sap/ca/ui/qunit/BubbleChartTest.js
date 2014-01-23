/* 
 * Some tests for the Bubble Chart control
 */
var chartID = "BUBBLECHART";

module('Bubble');

/*
 * Test that the Bubble Chart has been created
 */
test("Bubble Chart Creation with Id", function () {
    var aBubble = sap.ui.getCore().byId(chartID);
    equal(aBubble.getId(), chartID, "Bubble chart ID is not" + chartID);
});


/*
 *  Test Create and Delete
 */
test("Bubble Chart create and delete test", function () {	

    $ = jQuery;
	var oBubbleChart2 = new sap.ca.ui.charts.BubbleChart();
	oBubbleChart2.placeAt("content");
	
    ok( !!oBubbleChart2, "Bubble Chart created" );
    ok( sap.ui.getCore().byId(oBubbleChart2.getId()), "Bubble Chart Found");

    // Destroy object
    oBubbleChart2.destroy();

    ok( !sap.ui.getCore().byId(oBubbleChart2.getId()), "Bubble Chart destroyed");     
});



