///////////////
//Testing Part: Add Picture - PictureItem
///////////////
var PICTURE_ITEM_ID = "CA_VIEW_PICITEM--PICITEM";
var myURI = "../../../sap/ca/ui/images/SAPUI_URI.png";
var myBase64 = "data:image/png;base64,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";
var myName = "SAPUI Image";


test("PictureItem - Test status property", function () {
    var oPictureItem = sap.ui.getCore().byId(PICTURE_ITEM_ID + '1');
    equal(oPictureItem.getStatus(), sap.ca.ui.PictureItem.STATUS.ADD, "Status should be set to 'Add'");
});

test("PictureItem - Test status property", function () {
    var oPictureItem = sap.ui.getCore().byId(PICTURE_ITEM_ID + '2');
    equal(oPictureItem.getStatus(), sap.ca.ui.PictureItem.STATUS.DELETE, "Status should be set to 'Delete'");
});

test("PictureItem - Test source property with uri", function () {
    var oPictureItem = sap.ui.getCore().byId(PICTURE_ITEM_ID + '1');
    equal(oPictureItem.getSource(), myURI, "Uri should be set to SAPUI_URI.png path");
});

test("PictureItem - Test source property with base64Content", function () {
    var oPictureItem = sap.ui.getCore().byId(PICTURE_ITEM_ID + '2');
    equal(oPictureItem.getSource(), myBase64, "The picture item should have the correct base64 content");
});

test("PictureItem - Test height and width property", function () {
    var oPictureItem = sap.ui.getCore().byId(PICTURE_ITEM_ID + '2');
    equal(oPictureItem.getWidth(), "150px" , "The picture item should have a correct 150px width");
    equal(oPictureItem.getHeight(), "62px" , "The picture item should have a correct 62px height");
});

test("PictureItem - Test name property", function () {
    var oPictureItem = sap.ui.getCore().byId(PICTURE_ITEM_ID + '1');
    equal(oPictureItem.getName(), myName, "Name should be set to '"+myName+"'");
});

test("PictureItem - Test default name property", function () {
    var oPictureItem = sap.ui.getCore().byId(PICTURE_ITEM_ID + '2');
    equal(oPictureItem.getName(), "", "Name should be set to default value (empty)");
});


test("PictureItem - Test properties with URL", function () {
    var oPictureItem = sap.ui.getCore().byId(PICTURE_ITEM_ID + '1');
    equal(oPictureItem.isSourceDataUri(), false, "Uri should be set to false");
    equal(oPictureItem.getMimeType(), "", "mimeType should be set to empty");
    equal(oPictureItem.getBase64Encoding(), "", "data should be set to empty");
});


test("PictureItem - Test getSourceInfo with base64Content", function () {
    var oPictureItem = sap.ui.getCore().byId(PICTURE_ITEM_ID + '2');
    equal(oPictureItem.isSourceDataUri(), true, "Uri should be set to true");
    equal(oPictureItem.getMimeType(), "image/png", "mimeType should be set to 'image/png'");
    equal(oPictureItem.getBase64Encoding(), myBase64.substr(myBase64.indexOf('base64') + 7), "Base64Encoding should be set to encoding");
});

test("PictureItem - Test getSourceInfo with new PictureItem", function () {
    var oPictureItem = new sap.ca.ui.PictureItem();
    equal(oPictureItem.isSourceDataUri(), false, "Uri should be set to false");
    equal(oPictureItem.getMimeType(), "", "mimeType should be set to empty");
    equal(oPictureItem.getBase64Encoding(), "", "data should be set to empty");
});

test("PictureItem - Test getSourceInfo with 'null' source", function () {
    var oPictureItem = new sap.ca.ui.PictureItem({source:null});
    equal(oPictureItem.isSourceDataUri(), false, "Uri should be set to false");
    equal(oPictureItem.getMimeType(), "", "mimeType should be set to empty");
    equal(oPictureItem.getBase64Encoding(), "", "data should be set to empty");
});

test("PictureItem - Test getSourceInfo with empty source", function () {
    var oPictureItem = new sap.ca.ui.PictureItem({source:""});
    equal(oPictureItem.isSourceDataUri(), false, "Uri should be set to false");
    equal(oPictureItem.getMimeType(), "", "mimeType should be set to empty");
    equal(oPictureItem.getBase64Encoding(), "", "data should be set to empty");
});