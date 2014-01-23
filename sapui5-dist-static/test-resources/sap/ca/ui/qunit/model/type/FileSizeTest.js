///////////////
//Testing Part: FileSize type
///////////////

// require module to be tested
jQuery.sap.require("sap.ca.ui.model.type.FileSize");

// Alias
var FileSize = new sap.ca.ui.model.type.FileSize();


// --------------------------------------------------------------------------------
module("FileSizeType");

test("formatValue to string", function () {
    equal(FileSize.formatValue("340", "string"), "340\u00A0Bytes", 'formatValue("340", "string") == "340 Bytes"');
});

test("formatValue to int", function () {
    equal(FileSize.formatValue(340, "int"), 340, 'formatValue("340", "int") == "340"');
});

test("formatValue to float", function () {
    equal(FileSize.formatValue(40, "float"), 40, 'formatValue("40", "float") == "40"');
});


test("parseValue from string", function () {
    equal(FileSize.parseValue("340", "string"), "340", 'parseValue("340") == "340"');
});


test("validateValue Good", function () {
    equal(FileSize.validateValue(340), undefined, 'validateValue(340) == undefined');
});