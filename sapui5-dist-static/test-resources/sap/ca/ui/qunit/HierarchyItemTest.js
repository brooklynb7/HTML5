///////////////
//Testing Part: HierarchyItem
///////////////
var HIERARCHYITEM_ID = "CA_VIEW_HIERARCHYITEM--HIERARCHYITEM";

module("HierarchyItem - Object Create");

test("Object Creation with Id", function () {
    var oHierarchyItem = new sap.ca.ui.HierarchyItem("id", {});
    strictEqual(oHierarchyItem.getId(), "id", "HierarchyItem has ID 'id'");
});

test("Press HierarchyItem", function () {
    var msg = "";
    oHierarchyItem.attachLinkPress(function(){
       msg = "pressed";
    });
    oHierarchyItem.fireLinkPress();
    ok(msg == "pressed","Fire LinkPress event is ok","Fire Link Press event not thrown")
});
