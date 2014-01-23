// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview QUnit tests for sap.ushell.services.UserInfo
 */
(function () {
    "use strict";
    /*global asyncTest, deepEqual, equal, expect, module, notDeepEqual,
    notEqual, notStrictEqual, ok, raises, start, strictEqual, stop, test,
    jQuery, sap, sinon */

    // require early so that we can spy on them (and esp. try to restore the spies in teardown)
    jQuery.sap.require("sap.ushell.services.Container"); // necessary for stand-alone tests
    jQuery.sap.require("sap.ushell.services.UserInfo");

    module("sap.ushell.services.UserInfo", {
        setup: function () {
            sap.ushell.bootstrap("demo");
        },
        /**
         * This method is called after each test. Add every restauration code here.
         */
        teardown: function () {
            delete sap.ushell.Container;
        }
    });

    test("getService", function () {
        // code under test
        var oUserInfoService = sap.ushell.Container.getService("UserInfo");

        // test
        ok(oUserInfoService instanceof sap.ushell.services.UserInfo);
        strictEqual(typeof oUserInfoService.getId, "function");
    });

    test("delegation to Container", function () {
        var oUserInfoService = sap.ushell.Container.getService("UserInfo");

        // prepare test
        sinon.stub(sap.ushell.Container, "getUser", function () {
            return new sap.ushell.User({id : "id"});
        });

        // test
        strictEqual(oUserInfoService.getId(), "id");
        ok(sap.ushell.Container.getUser.calledOnce);
    });
}());
