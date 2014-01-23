/////////////////////////////////////////
//   Testing Part: GrowingTileContainer   //
/////////////////////////////////////////

module("GrowingTileContainer - Object Create");

test("Object Creation with Id", function () {

    var oTileContainer = new sap.ca.ui.GrowingTileContainer("id", {});
    strictEqual(oTileContainer.getId(), "id", "GrowingTileContainer has ID 'id'");
});

