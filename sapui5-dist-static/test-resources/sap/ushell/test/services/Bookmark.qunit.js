// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview QUnit tests for sap.ushell.services.Bookmark
 */
(function () {
    "use strict";
    /*global asyncTest, deepEqual, equal, expect, module, notDeepEqual,
    notEqual, notStrictEqual, ok, raises, start, strictEqual, stop, test,
    jQuery, sap, sinon */

    // require early so that we can spy on them (and esp. try to restore the spies in teardown)
    jQuery.sap.require("sap.ushell.services.Container"); // necessary for stand-alone tests
    jQuery.sap.require("sap.ushell.services.Bookmark");
    jQuery.sap.require("sap.ushell.services.LaunchPage");

    module("sap.ushell.services.Bookmark", {
        setup: function () {
            sap.ushell.bootstrap("demo");
        },
        /**
         * This method is called after each test. Add every restauration code here.
         */
        teardown: function () {
            sap.ui2.srvc.test.restoreSpies(
                sap.ushell.services.LaunchPage
            );
            delete sap.ushell.Container;
        }
    });

    test("getService", function () {
        // code under test
        var oBookmarkService = sap.ushell.Container.getService("Bookmark");

        // test
        ok(oBookmarkService instanceof sap.ushell.services.Bookmark);
        strictEqual(typeof oBookmarkService.addBookmark, "function");
    });

    test("delegation to launch page service", function () {
        var oBookmarkService,
            oLaunchPageService =  {addBookmark: sinon.spy()},
            oBookmarkConfig = { title: "MyTitle", url: "MyUrl" };

        // prepare test
        sinon.stub(sap.ushell.services, "LaunchPage").returns(oLaunchPageService);

        oBookmarkService = sap.ushell.Container.getService("Bookmark");

        // code under test
        oBookmarkService.addBookmark(oBookmarkConfig);

        // test
        ok(oLaunchPageService.addBookmark.calledOnce);
        ok(oLaunchPageService.addBookmark.calledWith(oBookmarkConfig));
    });
}());
