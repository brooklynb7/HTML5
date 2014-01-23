//Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview QUnit tests for sap.ushell.services.LogonSystem
 */
(function () {
    "use strict";
    /*global asyncTest, deepEqual, equal, expect, module, notDeepEqual,
    notEqual, notStrictEqual, ok, raises, start, strictEqual, stop, test,
    jQuery, sap, sinon, testResultData, testAnnoUrl, testMetaData */
//    jQuery.sap.registerModulePath("sap.ushell.components.factsheet", "/ushell/resources/sap/ushell/components/factsheet/annotation/Mapping.js");
    jQuery.sap.require("sap.ushell.components.factsheet.annotation.Mapping");
    jQuery.sap.registerModulePath("data", "/ushell/test-resources/sap/ushell/test/components/factsheet/annotation/data");
    jQuery.sap.require("data.MappingData");

    module("sap.ushell.components.factsheet.annotation.Mapping", {
        /**
         * This method is called after each test. Add every restoration code here.
         */
        teardown: function () {
            if (jQuery.sap.require.restore) {
                jQuery.sap.require.restore();
            }
            //     if (sap.ushell.adapters.demo.LogonSystemAdapter.restore) {
            //sap.ushell.adapters.demo.LogonSystemAdapter.restore();
//          }
            delete sap.ushell.URLParsing;
        }
    });

    test("parse", function () {
        var oMapping, oResult;
        oMapping = sap.ushell.components.factsheet.annotation.Mapping;

        ok(oMapping !== undefined);

        // extract hash from url 

        oResult = sap.ushell.components.factsheet.annotation.Mapping.parse(testMetaData, testAnnoUrl);

        deepEqual(JSON.stringify(oResult, function () { }), JSON.stringify(testResultData, function () { }), "Parse delivered the expected result!");
    });
}());
