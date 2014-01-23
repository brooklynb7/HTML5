// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview QUnit tests for sap.ushell.services.Bookmark
 */
(function () {
    "use strict";
    /*global asyncTest, deepEqual, equal, expect, module, notDeepEqual,
    notEqual, notStrictEqual, ok, raises, start, strictEqual, stop, test,
    jQuery, sap, sinon, window */

    // require early so that we can spy on them (and esp. try to restore the spies in teardown)
    jQuery.sap.require("sap.ushell.services.Container"); // necessary for stand-alone tests
    jQuery.sap.require("sap.ushell.services.CrossApplicationNavigation");

    module("sap.ushell.services.CrossApplicationNavigation", {
        setup: function () {
        },
        /**
         * This method is called after each test. Add every restauration code here.
         */
        teardown: function () {
            sap.ui2.srvc.test.restoreSpies(
            );
            delete sap.ushell.Container;
            if( sap.ushell.services.ShellNavigation ) {
                sap.ushell.testOrigShellNavigation = sap.ushell.services.ShellNavigation;  
                delete sap.ushell.services.ShellNavigation; 
            }
        }
    });

    test("getService", function () {
        var oCrossApplicationNavigationService;

        // prepare test
        sap.ushell.bootstrap("demo");

        // code under test
        oCrossApplicationNavigationService = sap.ushell.Container.getService("CrossApplicationNavigation");

        // test
        ok(oCrossApplicationNavigationService instanceof sap.ushell.services.CrossApplicationNavigation);
        strictEqual(typeof oCrossApplicationNavigationService.hrefForExternal, "function");
        strictEqual(typeof oCrossApplicationNavigationService.toExternal, "function");
        // TODO test parameters
    });
}());
