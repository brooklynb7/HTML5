// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview QUnit tests for
 *               sap.ushell.adapters.sandbox.PersonalizationAdapter
 */
(function() {
    "use strict";
    /*
     * global asyncTest, deepEqual, equal, expect, module, notDeepEqual,
     * notEqual, notStrictEqual, ok, raises, start, strictEqual, stop, test,
     * jQuery, sap
     */

    jQuery.sap.require("sap.ushell.adapters.sandbox.PersonalizationAdapter");

    var CONTAINERPREFIX = "sap.ushell.personalization#";
    var CONTAINER = "PersonalizationAdapter.Test";
    var ITEM = "TestItem";
    var VARIANT = "TestVariant";
    var oPersId = {
        container : CONTAINERPREFIX + CONTAINER,
        item : ITEM,
        variant : VARIANT
    }

    module(
            "sap.ushell.adapters.sandbox.PersonalizationAdapter",
            {
                setup : function() {
                    var oSystem = {};
                    var oAdapter = new sap.ushell.adapters.sandbox.PersonalizationAdapter(
                            oSystem);
                    var oPromiseDeleter = {};

                    oPromiseDeleter = oAdapter.delPersData(oPersId);
                    oPromiseDeleter
                            .fail(function() {

                                ok(false,
                                        " 'Error' Personalization data was _not_ deleted");
                            });
                    oAdapter.delPersData(oPersId);
                },
                /**
                 * This method is called after each test. Add every restauration
                 * code here.
                 */
                teardown : function() {
                    this.setup();
                }
            });

    asyncTest("Write + read JSON object", function() {
        var oSystem = {};
        var oAdapter = new sap.ushell.adapters.sandbox.PersonalizationAdapter(
                oSystem);
        var oOriginalValue = {};
        var oPromiseWriter = {};

        oOriginalValue = {
            value1 : "First value",
            value2 : 2
        };
        oPromiseWriter = oAdapter.writePersData(oPersId, oOriginalValue);
        oPromiseWriter.done(function() {
            var oPromiseReader = {};
            start();
            ok(true, "'Success' Personalization data was written");
            stop();
            oPromiseReader = oAdapter.readPersData(oPersId);
            oPromiseReader.done(function(oReadValue) {
                start();
                ok(true, "'Success' Personalization data was read");
                deepEqual(oReadValue, oOriginalValue,
                        "Read value is the written value");
            });
            oPromiseReader.fail(function() {
                start();
                ok(false, "'Error' fail function of reader was triggered");
            });
        });
        oPromiseWriter.fail(function() {
            start();
            ok(false, "'Error' fail function of writer was triggered");
        });
    });

    asyncTest("delete", function() {
        var oSystem = {};
        var oAdapter = new sap.ushell.adapters.sandbox.PersonalizationAdapter(
                oSystem);
        var oOriginalValue = {};
        var oPromiseWriter = {};
        var oPromiseDeleter = {};

        oOriginalValue = {
            value1 : "First value",
            value2 : 2
        };
        oPromiseWriter = oAdapter.writePersData(oPersId, oOriginalValue);
        oPromiseWriter.done(function() {
            start();
        });
        oPromiseWriter.fail(function() {
            start();
            ok(false, "'Error' Write error in deletion test");
        });
        stop();
        oPromiseDeleter = oAdapter.delPersData(oPersId);
        oPromiseDeleter.done(function() {
            start();
            ok(true, "Personalization data was deleted");
        });
        oPromiseDeleter.fail(function() {
            start();
            ok(fail, "'Error' Personalization data was not deleted");
        });
    });

    asyncTest("non-existant item", function() {
        var sNON_EXISTANT = "NoNeXiStAnT_ItEm";
        var oPersIdNonExistant = {
            container : CONTAINERPREFIX + CONTAINER,
            item : sNON_EXISTANT,
            variant : VARIANT
        }

        var oSystem = {};
        var oAdapter = new sap.ushell.adapters.sandbox.PersonalizationAdapter(
                oSystem);
        var oPromiseReader = {};
        var oPromiseDeleter = {};

        oPromiseReader = oAdapter.readPersData(oPersIdNonExistant);
        oPromiseReader.done(function(oValue) {
            start();
            equal(oValue, null, "Null is returend for a non-existing item");
        });
        oPromiseReader.fail(function() {
            start();
            ok(fail, "'Error' Personalization data could not be read");
        });
    });

}());
