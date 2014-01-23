// Copyright (c) 2012 SAP AG, All Rights Reserved
/**
 * @fileOverview QUnit tests for sap/ui2/srvc/utils.js
 */
(function () {
    "use strict";
    /*global asyncTest, deepEqual, equal, expect, module, notDeepEqual,
    notEqual, notStrictEqual, ok, raises, start, strictEqual, stop, test,
    jQuery, sap, sinon, setTimeout, window */

    jQuery.sap.require("sap.ushell.utils");

    // Create and structure your QUnit tests here
    // Documentation can be found at http://docs.jquery.com/QUnit
    module("sap/ui2/srvc/utils.js", {
        /**
         * This method is called after each test. Add every restauration code here.
         */
        teardown : function () {
            sap.ui2.srvc.test.restoreSpies();
        }
    });

    test("sap.ushell.utils.Error; create and expect tracing", function () {
        var oLogMock = sap.ui2.srvc.test.createLogMock()
                .error("UShell error created", null, "component"),
            unused = new sap.ushell.utils.Error("UShell error created", "component");
        oLogMock.verify();
        unused = !unused;
    });

    test("sap.ushell.utils.Error; check types", function () {
        var oError = new sap.ushell.utils.Error("UShell error created", "component");

        ok(oError instanceof Error, "expected instance of Error");
        ok(oError instanceof sap.ushell.utils.Error, "expected instance of sap.ushell.utils.Error");
    });

    test("sap.ushell.utils.Error: toString", function () {
        var oError = new sap.ushell.utils.Error("UShell error created", "component");

        strictEqual(oError.toString(), "sap.ushell.utils.Error: UShell error created", "toString");
    });

    test("sap.ushell.utils.Error: throw and catch", function () {
        var oError = new sap.ushell.utils.Error("UShell error created", "component");
        try {
            throw oError;
        } catch (e) {
            strictEqual(e, oError);
            strictEqual(e.message, "UShell error created");
        }
    });

    test("sap.ushell.utils.Map: basics", function () {
        var oMap = new sap.ushell.utils.Map();
        oMap.put("key", "value");
        strictEqual(oMap.containsKey("key"), true);
        strictEqual(oMap.containsKey("something"), false);
        strictEqual(oMap.get("key"), "value");
        strictEqual(oMap.get("something"), undefined);
        oMap.put("get", "oh");
        strictEqual(oMap.get("get"), "oh");
        oMap.put("hasOwnProperty", "oh");
        strictEqual(oMap.get("hasOwnProperty"), "oh");
        try {
            Object.prototype.foo = "bar";
            ok(!oMap.containsKey("foo"));
        } finally {
            delete Object.prototype.foo;
        }
    });

    test("sap.ushell.utils.Map: keys", function () {
        var oMap = new sap.ushell.utils.Map(),
            fnKeys = sinon.spy(Object, "keys"),
            aKeys;
        oMap.put("key", "value");
        aKeys = oMap.keys();
        deepEqual(aKeys, ["key"]);
        ok(fnKeys.calledOnce);
        ok(fnKeys.returned(aKeys));
    });

    test("sap.ushell.utils.Map: toString", function () {
        var oMap = new sap.ushell.utils.Map();
        strictEqual('sap.ushell.utils.Map({})', oMap.toString());

        oMap.put("key", "value");
        strictEqual('sap.ushell.utils.Map({"key":"value"})', oMap.toString());
    });

    test("sap.ushell.utils.Map: error handling", function () {
        var oMap = new sap.ushell.utils.Map();

        raises(function () {
            oMap.put({}, "foo");
        }, /Not a string key: \[object Object\]/);

        raises(function () {
            oMap.containsKey({});
        }, /Not a string key: \[object Object\]/);

        raises(function () {
            oMap.get({});
        }, /Not a string key: \[object Object\]/);
    });

    test("sap.ushell.utils.Map: put twice", function () {
        var oMap = new sap.ushell.utils.Map(),
            oPrevious;

        oPrevious = oMap.put("foo", window);
        strictEqual(oPrevious, undefined);

        oPrevious = oMap.put("foo", sinon);
        strictEqual(oPrevious, window);
    });
}());
