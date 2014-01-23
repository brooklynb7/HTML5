///////////////
//Testing Part: File Upload
///////////////
module("File Upload");

jQuery.sap.registerModulePath( "fileupload", "fileupload" );

var oView = sap.ui.xmlview("FileUploadTest", "fileupload.FileUploadTest");
var oController = oView.getController();
var oFileUpload = oController.byId("fileupload");
oFileUpload.onAfterRendering = function() {};

var oHtml = new sap.ui.core.HTML(
{
    content : '<div id="contentHolder"></div><h1 id="qunit-header">Fiori Wave 2: Test Page for File Upload</h1><h2 id="qunit-banner"></h2><h2 id="qunit-userAgent"></h2><ol id="qunit-tests"></ol>',
    afterRendering : function() {
        oView.placeAt("contentHolder");
    }
});

var page = new sap.m.Page("myFirstPage", {
    title : "Fiori - File Upload",
    showNavButton : true,
    enableScrolling : true,
    content : oHtml
});

var app = new sap.m.App("myApp", {
    initPage : "myFirstPage"
});

app.addPage(page).placeAt("content");

test("Making Bindable Path", function() {
	equal( oFileUpload.makeBindablePath("test_path"), "{test_path}", "Checking bindable path: 'test_path'");
});

test("Setting Contributor",  function() {
	oFileUpload.setContributor("User1");
	equal( oFileUpload.getContributor(), "User1", "Setting initial contributor");
	oFileUpload.setContributor("User1");
	equal( oFileUpload.getContributor(), "User1", "Setting same contributor contributor");
	oFileUpload.setContributor("User3");
	equal( oFileUpload.getContributor(), "User3", "Setting new contributor");
});

