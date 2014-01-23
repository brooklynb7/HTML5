///////////////
//Testing Part: Add Picture
///////////////
var DATEPICKER_ID = "CA_VIEW_DATEPICKER--DATEPICKER";

module("DatePicker - defaults test");

asyncTest("Object Creation and Destroy with Id", function () {

    var testID = "DP1", 
        oDatePicker = new sap.ca.ui.DatePicker(testID, {}),
        oDatePicker2;

    strictEqual(oDatePicker.getId(), testID, "DatePicker has ID: " + testID);
    oDatePicker.placeAt("contentHolder");


    setTimeout(function() {

        // find just created object byId
        oDatePicker2 = new sap.ui.getCore().byId(testID);
        ok( !!oDatePicker2, "Object created and found byId" );
        ok( oDatePicker2.$().size() > 0, "DOM has some content")

        // Destroy object
        oDatePicker2.destroy();

        ok( oDatePicker2.$().size() == 0, "DOM content destroyed")

        // try to find destroyed object
        setTimeout(function() {

            var oDatePicker3 = new sap.ca.ui.DatePicker(testID);
            ok(oDatePicker3, "UI5 Object still can be found");
            ok(oDatePicker3.$().size() == 0, "But DOM content is still destroyed")

            start();
        }, 0);
    }, 0);


});

test("DatePicker - empty input by default ", function () {
    var oDatePicker = sap.ui.getCore().byId("DATEPICKER");
    equal(oDatePicker.getValue(), "", "Default value for DatePicker should be empty string");
});

asyncTest("Open Calendar", function () {
    expect(1);

    core = sap.ui.getCore();
    ci = core.byId("DATEPICKER__ci");

    // Open Calendar
    ci.firePress();

    // asserts in 300ms
    setTimeout(function() {
        ok( true, "Passed and ready to resume!" );

        // Press on Cancel button
        core.byId("__button0").firePress();

        start();
      }, 300);

});


test("DatePicker - empty input by default ", function () {
    var oDatePicker = sap.ui.getCore().byId("DATEPICKER");
    equal(oDatePicker.getValue(), "", "Default value for DatePicker should be empty string");
});
