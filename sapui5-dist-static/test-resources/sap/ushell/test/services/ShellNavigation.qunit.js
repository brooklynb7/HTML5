// Copyright (c) 2013 SAP AG, All Rights Reserved


/**
 * @fileOverview QUnit tests for sap.ushell.services.ShellNavigation
 */
(function () {
    "use strict";
    /*global asyncTest, deepEqual, equal, expect, module, notDeepEqual,
    notEqual, notStrictEqual, ok, raises, start, strictEqual, stop, test,
    jQuery, sap, sinon */

    jQuery.sap.require("sap.ushell.services.Container");
    jQuery.sap.require("sap.ushell.services.ShellNavigation");

    module("sap.ushell.services.ShellNavigation", {
        setup: function () {
            sap.ushell.bootstrap("demo");

            // TODO: SH: very implicit dependency to Nav.qunit which deletes sap.ushell.services.ShellNavigation; would prefer to have this test running independently
            if (!sap.ushell.services.ShellNavigation && sap.ushell.testOrigShellNavigation) {
                sap.ushell.services.ShellNavigation = sap.ushell.testOrigShellNavigation;
            }
        },
        /**
         * This method is called after each test. Add every restoration code here.
         */
        teardown: function () {
            delete sap.ushell.Container;
        }
    });

    // Shell navigation services
    // registration of hasher events for onhashchange
    // forwarding to callbacks of application

    test("hrefForExternalWithSoActionTargetAndParams", function () {
        var sShellHash = sap.ushell.services.ShellNavigation.hrefForExternal({target : {semanticObject: "SO", action: "ABC" }, params : { A : "A1" }});
        deepEqual(sShellHash, "#SO-ABC?A=A1");
    });

    // currently we double encode url parameters
    test("hrefForExternalWithSoActionTargetAndParams_DoubleEncode", function () {
        var sx = ("this&that is Space");
        deepEqual(encodeURIComponent(sx), "this%26that%20is%20Space");
        var sShellHashHref = sap.ushell.services.ShellNavigation.hrefForExternal({target : {semanticObject: "SO", action: "ABC" }, params : { A : [ sx , 1] }});
        deepEqual(sShellHashHref, "#SO-ABC?A=this%2526that%2520is%2520Space&A=1");
    });

    test("hrefForExternalWithShellHashTarget", function () {
        var sShellHash = sap.ushell.services.ShellNavigation.hrefForExternal({target : {shellHash: "SO-Action" }});
        deepEqual(sShellHash, "#SO-Action");
    });

    test("hrefForExternalWithShellHashTarget_DoubleEncode", function () {
        var encodedParam = encodeURIComponent("needs%& encoding");
        var sShellHash = sap.ushell.services.ShellNavigation.hrefForExternal({target : {shellHash: "S O-Action?p=v%&p2=" + encodedParam }});
        deepEqual(sShellHash, "#S%20O-Action?p=v%25&p2=needs%2525%2526%2520encoding");
    });


}());
