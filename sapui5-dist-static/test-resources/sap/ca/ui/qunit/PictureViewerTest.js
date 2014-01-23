///////////////
//Testing Part: Add Picture - PictureViewerItem
///////////////
var PICTURE_VIEWER_ITEM_ID = "CA_VIEW_PICTILE--PICTILE";
var myURIBase = "../../../sap/ca/ui/images/IMG_009.png";


test("PictureViewer - Test addItem function", function () {
    var oPictureViewer = sap.ui.getCore().byId(PICTURE_VIEWER_ITEM_ID + '1');
    var oPictureViewerItem = new sap.ca.ui.PictureViewerItem({
        src: myURIBase + '2'
    });

    oPictureViewer.addItem(oPictureViewerItem);
    equal(oPictureViewer.getItems().length, 1, "1 image was added");
});

test("PictureViewer - Test insertItem function", function () {
    var oPictureViewer = sap.ui.getCore().byId(PICTURE_VIEWER_ITEM_ID + '1');
    var nbPictures = oPictureViewer.getItems().length;
    var oPictureViewerItem = new sap.ca.ui.PictureViewerItem({
        src: myURIBase + '2'
    });

    oPictureViewer.insertItem(oPictureViewerItem,0);
    equal(oPictureViewer.getItems().length - nbPictures, 1, "1 image was added");
});

test("PictureViewer - Test deletePicture function", function () {
    var oPictureViewer = sap.ui.getCore().byId(PICTURE_VIEWER_ITEM_ID + '1');

    var oPictureViewerItem = new sap.ca.ui.PictureViewerItem({
        src: myURIBase + '2'
    });

    oPictureViewer.insertItem(oPictureViewerItem,0);
    var nbPictures = oPictureViewer.getItems().length;
    oPictureViewer.deletePicture(oPictureViewerItem,0);

    equal(nbPictures - oPictureViewer.getItems().length, 1, "1 image was deleted");
});

test("PictureViewer - Test getCurrentPictureIndex function", function () {
    var oPictureViewer = sap.ui.getCore().byId(PICTURE_VIEWER_ITEM_ID + '2');

    var currentPictureIndex = oPictureViewer.getCurrentPictureIndex();
    equal(currentPictureIndex, 0, "image 0 is selected");
});