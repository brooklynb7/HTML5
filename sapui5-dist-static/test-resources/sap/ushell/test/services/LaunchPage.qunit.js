// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview QUnit tests for sap.ushell.services.LaunchPage
 */
(function () {
    "use strict";
    /*global asyncTest, deepEqual, equal, expect, module, notDeepEqual,
    notEqual, notStrictEqual, ok, raises, start, strictEqual, stop, test,
    jQuery, sap, sinon */

    // require early so that we can spy on them (and esp. try to restore the spies in teardown)
    jQuery.sap.require("sap.ushell.services.Container"); // necessary for stand-alone tests
    jQuery.sap.require("sap.ushell.adapters.demo.LaunchPageAdapter");
    jQuery.sap.require("sap.ushell.services.LaunchPage");


    module("sap.ushell.services.LaunchPage", {
        setup: function () {
            sap.ushell.bootstrap("demo");
        },
        /**
         * This method is called after each test. Add every restauration code here.
         */
        teardown: function () {
            sap.ui2.srvc.test.restoreSpies(
                sap.ushell.adapters.demo.LaunchPageAdapter
            );
            delete sap.ushell.Container;
        }
    });

    test("getService", function () {
        // code under test
        var oLaunchPageService = sap.ushell.Container.getService("LaunchPage");

        // test
        ok(oLaunchPageService instanceof sap.ushell.services.LaunchPage);
        strictEqual(typeof oLaunchPageService.addBookmark, "function");
    });

    test("test addBookmark", function () {
        var oLaunchPageService;

        // prepare test
        oLaunchPageService = sap.ushell.Container.getService("LaunchPage");

        // code under test and tests
        raises(function () {
            oLaunchPageService.addBookmark();
        });
        raises(function () {
            oLaunchPageService.addBookmark("Test");
        });
        raises(function () {
            oLaunchPageService.addBookmark({});
        }, /Title missing in bookmark configuration/);
        raises(function () {
            oLaunchPageService.addBookmark({title: ""});
        }, /Title missing in bookmark configuration/);
        raises(function () {
            oLaunchPageService.addBookmark({title: "MyTitle"});
        }, /URL missing in bookmark configuration/);
    });

    test("delegation to launchpad adapter", function () {
        var oActualPromise,
            oBookmarkConfig = { title: "MyTitle", url: "MyUrl" },
            oExpectedPromise = (new jQuery.Deferred()).promise(),
            oLaunchPageAdapter =  {
                addBookmark: sinon.stub().returns(oExpectedPromise)
            },
            oLaunchPageService;

        // prepare test
        sinon.stub(sap.ushell.adapters.demo, "LaunchPageAdapter").returns(oLaunchPageAdapter);

        oLaunchPageService = sap.ushell.Container.getService("LaunchPage");

        // code under test
        oActualPromise = oLaunchPageService.addBookmark(oBookmarkConfig);

        // test
        ok(oLaunchPageAdapter.addBookmark.calledOnce);
        ok(oLaunchPageAdapter.addBookmark.calledWith(oBookmarkConfig));
        strictEqual(oActualPromise, oExpectedPromise);
    });

}());
