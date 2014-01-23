///////////////
//Testing Part: QuantityFormat
///////////////

// require module to be tested
jQuery.sap.require("sap.ca.ui.model.format.QuantityFormat");
jQuery.sap.require("sap.ca.ui.model.format.FormatHelper");


// --------------------------------------------------------------------------------
module("QuantityFormat");

test("Invalid input", function () {
    var Formatter = sap.ca.ui.model.format.QuantityFormat.getInstance({style: "standard"});
    equal(Formatter.format("hello"), "", 'quantityFormat("hello") == ""');
    equal(Formatter.format(null), "", 'quantityFormat(null) == ""');
    equal(Formatter.format(), "", 'quantityFormat() == ""');
});

test("default values test", function () {
    var Formatter = sap.ca.ui.model.format.QuantityFormat.getInstance("", {style: "standard"}, "en");
    equal(Formatter.format(1), "1", "quantityFormat(" + 1 + ") == 1");
    equal(Formatter.format(1.23456789), "1.235", "quantityFormat(-" + 1.23456789 + ") ==  1.235");
});

test("test short", function () {
    var Formatter = sap.ca.ui.model.format.QuantityFormat.getInstance("", {style: "short"}, "en");
    equal(Formatter.format(123456789), "123M", "quantityFormat(" + 123456789 + ") == 123M");
});

test("test code", function () {
    var Formatter = sap.ca.ui.model.format.QuantityFormat.getInstance("PRM", {style: "standard"}, "en");
    var testValue = 1234;
    equal(Formatter.format(1234), "1,234.000", "quantityFormat(" + testValue + ") == " + "1,234.000");
});