// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview QUnit tests for sap.ushell.adapters.demo.ContainerAdapter
 */
(function () {
    "use strict";
    /*global asyncTest, deepEqual, equal, expect, module, notDeepEqual,
    notEqual, notStrictEqual, ok, raises, start, strictEqual, stop, test,
    jQuery, sap */

    jQuery.sap.require("sap.ushell.adapters.demo.ContainerAdapter");

    module("sap.ushell.adapters.demo.ContainerAdapter");

    asyncTest("create Adapter", function () {
        var oSystem = {},
            oAdapter = new sap.ushell.adapters.demo.ContainerAdapter(oSystem),
            oPromise;

        ok(typeof oAdapter.load === 'function', "adapter has load() function");
        strictEqual(oAdapter.getSystem(), oSystem, "getSystem()");
        oPromise = oAdapter.load();
        ok(typeof oPromise.done === "function", "load() returned a jQuery promise");
        strictEqual(oPromise.resolve, undefined,
            "load() does not return the jQuery deferred object itself");
        oPromise.done(function () {
            start();
            ok(true, "done function is called");
        });
    });

    asyncTest("logout()", function () {
        var oSystemAdapter = new sap.ushell.adapters.demo.ContainerAdapter(
                new sap.ushell.System({})
            ),
            oLogMock = sap.ui2.srvc.test.createLogMock()
                .info("Logout", null, "sap.ushell.adapters.demo.ContainerAdapter");

        //code under test
        oSystemAdapter.logout().done(function () {
            start();
            oLogMock.verify();
        });

    });
}());
