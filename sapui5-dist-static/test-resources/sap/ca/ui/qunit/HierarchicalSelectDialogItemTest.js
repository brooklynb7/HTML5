///////////////
//Testing Part: HierarchyItem
///////////////
var HIERARCHICAL_SELECT_DIALOG_ITEM_ID = "CA_VIEW_HIERARCHICALSELECTDIALOGITEM--HIERARCHICALSELECTDIALOGITEM";

module("HierarchySelectDialogItem - Object Creation");

test("Object Creation with Id", function () {
    var oHierarchicalSelectDialogItem = new sap.ca.ui.HierarchicalSelectDialogItem("id", {});
    strictEqual(oHierarchicalSelectDialogItem.getId(), "id", "HierarchicalSelectDialogItem has ID 'id'");
});

test("Object Creation from dom", function () {
    var oHierarchicalSelectDialogItem = sap.ui.getCore().byId(HIERARCHICAL_SELECT_DIALOG_ITEM_ID);
    strictEqual(oHierarchicalSelectDialogItem.getId(), HIERARCHICAL_SELECT_DIALOG_ITEM_ID, "HierarchicalSelectDialogItem has ID " + HIERARCHICAL_SELECT_DIALOG_ITEM_ID);
    strictEqual(oHierarchicalSelectDialogItem.getEntityName(), "myEntity", "HierarchicalSelectDialogItem should have 'myEntity' as entity name");
    strictEqual(oHierarchicalSelectDialogItem.getTitle(), "myTitle", "HierarchicalSelectDialogItem should have 'myTitle' as title");
});
