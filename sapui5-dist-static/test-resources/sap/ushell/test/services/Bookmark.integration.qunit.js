// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview QUnit tests for sap.ushell.services.PageBuilding
 */
(function () {
    "use strict";
    /*global asyncTest, deepEqual, equal, expect, module, notDeepEqual,
    notEqual, notStrictEqual, ok, raises, start, strictEqual, stop, test,
    jQuery, sap, sinon */

    jQuery.sap.require("sap.ushell.services.Container"); // necessary for stand-alone tests
    // These contracts are used by CHIPs during the test
    jQuery.sap.require("sap.ui2.srvc.contracts.configuration");
    jQuery.sap.require("sap.ui2.srvc.contracts.configurationUi");
    jQuery.sap.require("sap.ui2.srvc.contracts.preview");
    jQuery.sap.require("sap.ui2.srvc.contracts.refresh");
    jQuery.sap.require("sap.ui2.srvc.contracts.search");

    var oPbs, oBookmarkservice, oPromise, oLaunchpageService;
    module("sap.ushell.services.Bookmark.integration", {
        setup: function () {
            oPromise = sap.ushell.bootstrap("abap");
            oPromise.done(function () {
                oPbs = sap.ushell.Container.getService("PageBuilding").getFactory()
                    .getPageBuildingService();
                oBookmarkservice = sap.ushell.Container.getService("Bookmark");
                oLaunchpageService = sap.ushell.Container.getService("LaunchPage");
            });
            oPromise.fail(sap.ui2.srvc.test.onError);
        },

        /**
         * This method is called after each test. Add every restauration code here.
         */
        teardown: function () {
            if (sap.ushell.Container) {
                delete sap.ushell.Container;
            }
        }
    });

    asyncTest("test add bookmark (static tile; groups already read)", function () {
        var oPageBuildingService;

        // prepare test
        oPromise.done(function () {
            oLaunchpageService.getDefaultGroup().done(function (oGroup) {
                var oTiles = oLaunchpageService.getGroupTiles(oGroup),
                    aIds = [],
                    i,
                    oBookmarkData = {
                        icon: "sap-icon://home",
                        info: "Static Applauncher",
                        subtitle: "INTEGRATION",
                        title: Date.now().toString(),
                        url: "#"
                    };
                function success() {
                    start();
                    ok(true, "successfully deleted tile");
                }

                for (i = 0; i < oTiles.length; i += 1) {
                    aIds.push(oLaunchpageService.getTileId(oTiles[i]));
                }
                oLaunchpageService.addBookmark(oBookmarkData).done(function () {
                    var oTiles2 = oLaunchpageService.getGroupTiles(oGroup), j;
                    strictEqual(oTiles2.length, oTiles.length + 1, "one additional tile added");
                    // check data
                    for (j = 0; j < oTiles2.length; j += 1) {
                        if (aIds.indexOf(oLaunchpageService.getTileId(oTiles2[j])) === -1) {
                            strictEqual(oTiles2[j].getTitle(), oBookmarkData.title, "title ok");
                            strictEqual(oTiles2[j].getChip().getId(),
                                "X-SAP-UI2-CHIP:/UI2/STATIC_APPLAUNCHER", "type ok");
                            oLaunchpageService.removeTile(oGroup, oTiles2[j]).done(success)
                                .fail(sap.ui2.srvc.test.onError);
                        }
                    }
                }).fail(sap.ui2.srvc.test.onError);
            }).fail(function (sMessage) {
                start();
                ok(false, "Failed with error: " + sMessage);
            });
        });
    });

    asyncTest("test add bookmark (dynamic tile; groups already read)", function () {
        var oPageBuildingService;

        // prepare test
        oPromise.done(function () {
            oLaunchpageService.getDefaultGroup().done(function (oGroup) {
                var oTiles = oLaunchpageService.getGroupTiles(oGroup),
                    aIds = [],
                    i,
                    oBookmarkData = {
                        icon: "sap-icon://sys-first-page",
                        info: "Dynamic Applauncher",
                        numberUnit: "USD",
                        serviceUrl: "/sap/opu/odata/UI2/PAGE_BUILDER_PERS/Pages/$count",
                        serviceRefreshInterval: 0,
                        subtitle: "INTEGRATION",
                        title: Date.now().toString(),
                        url: "#"
                    };
                function success() {
                    start();
                    ok(true, "successfully deleted tile");
                }

                for (i = 0; i < oTiles.length; i += 1) {
                    aIds.push(oLaunchpageService.getTileId(oTiles[i]));
                }
                oLaunchpageService.addBookmark(oBookmarkData).done(function () {
                    var oTiles2 = oLaunchpageService.getGroupTiles(oGroup), j;
                    start();
                    strictEqual(oTiles2.length, oTiles.length + 1, "one additional tile added");
                    // check data
                    for (j = 0; j < oTiles2.length; j += 1) {
                        if (aIds.indexOf(oLaunchpageService.getTileId(oTiles2[j])) === -1) {
                            strictEqual(oTiles2[j].getTitle(), oBookmarkData.title, "title ok");
                            strictEqual(oTiles2[j].getChip().getId(),
                                "X-SAP-UI2-CHIP:/UI2/DYNAMIC_APPLAUNCHER", "type ok");
                            oLaunchpageService.removeTile(oGroup, oTiles2[j]).done(success)
                                .fail(sap.ui2.srvc.test.onError);
                        }
                    }
                }).fail(sap.ui2.srvc.test.onError);
            }).fail(function (sMessage) {
                start();
                ok(false, "Failed with error: " + sMessage);
            });
        });
    });
}());
