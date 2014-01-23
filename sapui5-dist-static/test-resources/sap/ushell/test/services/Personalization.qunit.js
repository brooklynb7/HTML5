// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview QUnit tests for sap.ushell.services.Personalization
 */
(function() {
    "use strict";
    /*
     * global asyncTest, deepEqual, equal, expect, module, notDeepEqual,
     * notEqual, notStrictEqual, ok, raises, start, strictEqual, stop, test,
     * jQuery, sap
     */

    jQuery.sap.require("sap.ushell.services.Personalization");
    jQuery.sap.require("sap.ushell.adapters.sandbox.PersonalizationAdapter");

    // var KEY = "sap.ushell.services.Personalization.TestKey";
    var CONTAINER = "sap.ushell.test.personalization";
    var ITEM = "serviceTest";
    var oPersId = {
        container : CONTAINER,
        item : ITEM,
    }

    module(
            "sap.ushell.services.Personalization",
            {
                setup : function() {
                    var oSystem = {};
                    var oAdapter = new sap.ushell.adapters.sandbox.PersonalizationAdapter(
                            oSystem); // we use the sandbox adapter in this
                    // test
                    var oPersonalizer = new sap.ushell.services.Personalization(
                            oAdapter).getPersonalizer(oPersId);
                    var oPromiseDeleter = {};
                    oPromiseDeleter = oPersonalizer.delPersData();
                    oPromiseDeleter
                            .fail(function() {
                                ok(false,
                                        " 'Error' Personalization data was _not_ deleted");
                            });
                },
                /**
                 * This method is called after each test. Add every restauration
                 * code here.
                 */
                teardown : function() {
                    this.setup();
                }
            });

    asyncTest("set + get JSON object", function() {
        var oSystem = {};
        var oOriginalValue = {};
        var oPromiseSetter = {};
        var oAdapter = new sap.ushell.adapters.sandbox.PersonalizationAdapter(
                oSystem); // we use the sandbox adapter in this test
        var oPersonalizer = new sap.ushell.services.Personalization(oAdapter).getPersonalizer(oPersId);

        oOriginalValue = {
            value1 : "First value",
            value2 : 2
        };
        oPromiseSetter = oPersonalizer.setPersData(oOriginalValue);
        oPromiseSetter.done(function() {
            var oPromiseGetter = {};
            start();
            ok(true, "Personalization data was set");
            stop();
            oPromiseGetter = oPersonalizer.getPersData();
            oPromiseGetter.done(function(oReadValue) {
                start();
                ok(true, "Personalization data was gotten");
                deepEqual(oReadValue, oOriginalValue,
                        "Read value is the written value");
            });
            oPromiseGetter.fail(function() {
                start();
                ok(false, "'Error' fail function of getter was triggered");
            });
        });
        oPromiseSetter.fail(function() {
            start();
            ok(false, "'Error' fail function of setter was triggered");
        });
    });

    asyncTest("set + delete", function() {
        var oSystem = {};
        var oAdapter = new sap.ushell.adapters.sandbox.PersonalizationAdapter(
                oSystem); // we use the sandbox adapter in this test
        var oPersonalizer = new sap.ushell.services.Personalization(oAdapter).getPersonalizer(oPersId);
        var oOriginalValue = {};
        var oPromiseSetter = {};
        var oPromiseDeleter = {};

        oOriginalValue = {
            value1 : "First value",
            value2 : 2
        };
        oPromiseSetter = oPersonalizer.setPersData(oOriginalValue);
        oPromiseSetter.done(function() {
            start();
            ok(true, "Personalization data was set");
        });
        oPromiseSetter.fail(function() {
            start();
            ok(false, "'Error' fail function of setter was triggered");
        });
        stop();
        oPromiseDeleter = oPersonalizer.delPersData();
        oPromiseDeleter.done(function() {
            start();
            ok(true, "Personalization data was deleted");
        });
        oPromiseDeleter.fail(function() {
            start();
            ok(false, " 'Error' Personalization data was _not_ deleted");
        });
    });
}());