///////////////
//Testing Part: Hierarchy
///////////////
var CHART_ID = "combinedChart";

module("Hierarchy - Object Create");

test("Object Creation with Id", function () {
    $ = jQuery;
    strictEqual(oCombined.getId(), CHART_ID, "Chart has ID " + CHART_ID);
});




