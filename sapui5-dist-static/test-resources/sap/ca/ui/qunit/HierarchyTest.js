///////////////
//Testing Part: Hierarchy
///////////////
var HIERARCHY_ID = "hierarchy";

module("Hierarchy - Object Create");

test("Object Creation with Id", function () {
    strictEqual(oHierarchy.getId(), HIERARCHY_ID, "Hierarchy has ID " + HIERARCHY_ID);
});

test("Items aggregation", function () {
    strictEqual(oHierarchy.getItems().length, oData.items.length, "Nb of items is not matching");
});




