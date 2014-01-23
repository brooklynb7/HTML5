// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview QUnit tests for sap.ushell.services.PageBuilding
 */
(function () {
    "use strict";
    /*global asyncTest, deepEqual, equal, expect, module, notDeepEqual,
    notEqual, notStrictEqual, ok, raises, start, strictEqual, stop, test,
    jQuery, sap, sinon */

    // require early so that we can spy on them (and esp. try to restore the spies in teardown)
    jQuery.sap.require("sap.ui2.srvc.chip");
    jQuery.sap.require("sap.ui2.srvc.chipinstance");

    jQuery.sap.require("sap.ushell.services.Container"); // necessary for stand-alone tests
    jQuery.sap.require("sap.ushell.services.PageBuilding");
    jQuery.sap.require("sap.ushell.adapters.hana.PageBuildingAdapter");

    var sBASE_URL = '/remote_hana',
        sSYSTEM_ID = 'hana',
        sREMOTE_ID = 'REMOTE_FOO',
        oRAW_REMOTE_CATALOG_BASE = {
            id: sREMOTE_ID,
            title: 'Catalog with baseUrl',
            remoteId: 'FOO',
            type: 'H',
            // ensure that there is a trailing '/' that has to be cut off again
            baseUrl: sBASE_URL + '/',
            // ABAP sends Chips even for type 'H'
            Chips: {results: []}
        },
        oRAW_REMOTE_CATALOG_SYS = {
            id: sREMOTE_ID,
            title: 'Catalog with systemId',
            remoteId: 'FOO',
            type: 'H',
            systemId: sSYSTEM_ID,
            // ABAP sends Chips even for type 'H'
            Chips: {results: []}
        },
        oRAW_REMOTE_CHIP = {
            id: 'REMOTE_CHIP',
            title: 'My first HANA CHIP',
            url: '/path/in/hana/chip.xml'
        },
        oRAW_RESOLVED_CATALOG = {
            id: sREMOTE_ID,
            title: 'My Remote Catalog',
            type: 'P',
            Chips: {results: [oRAW_REMOTE_CHIP]}
        };

    function sendAsync(fnSuccess, oData) {
        // ensure that a copy is sent, the recipient might modify the result
        sap.ui2.srvc.call(fnSuccess.bind(null, JSON.parse(JSON.stringify(oData))),
            sap.ui2.srvc.test.onError, true);
    }

    module("sap.ushell.services.PageBuilding #7", {
        setup: function () {
            var fnGetParameterMap = sap.ui2.srvc.getParameterMap;

            // do not let test be influenced by actual URL parameters!
            // Note: sap-locale and sap-theme need to be present to avoid call to start_up!
            sinon.stub(sap.ui2.srvc, "getParameterMap").returns(
                fnGetParameterMap("?sap-locale=en&sap-theme=sap_bluecrystal")
            );
            //TODO unit tests should not use the ABAP platform; testing the service should e.g.
            // stub the adapters and treat them as black boxes
            //TODO sap.ushell.bootstrap("...").done(!!!);
        },
        /**
         * This method is called after each test. Add every restauration code here.
         */
        teardown: function () {
            sap.ui2.srvc.test.restoreSpies(
                jQuery.sap.registerModulePath,
                sap.ui2.srvc.absoluteUrl,
                sap.ui2.srvc.Chip,
                sap.ui2.srvc.createPageBuildingService,
                sap.ui2.srvc.get,
                sap.ui2.srvc.getParameterMap,
                sap.ui.view,
                sap.ushell.adapters.hana.PageBuildingAdapter
            );
            delete sap.ushell.Container;
        }
    });

    test("getService", function () {
        var oFactory,
            oPageBuildingService;

        // prepare test
        sap.ushell.bootstrap("abap");

        // code under test
        oPageBuildingService = sap.ushell.Container.getService("PageBuilding");
        oFactory = oPageBuildingService.getFactory();

        // test
        ok(oFactory instanceof sap.ui2.srvc.Factory);
    });

    test("getPage", function () {
        var oPageBuildingService,
            oFactory;

        // prepare test
        sap.ushell.bootstrap("abap");
        oPageBuildingService = sap.ushell.Container.getService("PageBuilding");
        oFactory = oPageBuildingService.getFactory();
        sinon.stub(oFactory, "createPage"); //temporary object, we do not need to restore later

        // code under test
        oPageBuildingService.getPage("ZUI2SERVICES");

        // test
        ok(oFactory.createPage.calledOnce);
        ok(oFactory.createPage.calledWith("ZUI2SERVICES"));
    });

    asyncTest("read standard catalog", function () {
        var oCatalog,
            oFactory,
            oPageBuildingService,
            oPbs;

        jQuery.sap.require("sap.ui2.srvc.catalog");

        // prepare test
        sap.ushell.bootstrap("abap");
        oPageBuildingService = sap.ushell.Container.getService("PageBuilding");
        oFactory = oPageBuildingService.getFactory();
        oPbs = oFactory.getPageBuildingService();
        sinon.stub(oPbs, "readCatalog", function (sId, fnSuccess) {
            sendAsync(fnSuccess, oRAW_RESOLVED_CATALOG);
        });
        sinon.spy(sap.ui2.srvc, "Chip");

        // code under test
        oCatalog = oFactory.createCatalog("/UI2/CATALOG_ALL");
        oCatalog.load(function () {
            start();

            // test
            ok(oPbs.readCatalog.calledOnce, "read a catalog");
            ok(oPbs.readCatalog.calledWith("/UI2/CATALOG_ALL"), "read the expected catalog");
            strictEqual(oCatalog.getId(), "/UI2/CATALOG_ALL", "ID correct");
            strictEqual(oCatalog.getTitle(), oRAW_RESOLVED_CATALOG.title, "title correct");
            strictEqual(oCatalog.getChips().length, 1, "resulting catalog contains 1 chip");
            ok(sap.ui2.srvc.Chip.calledWith(oRAW_REMOTE_CHIP), "the chip was created correctly");
        }, sap.ui2.srvc.test.onError);
    });

    [oRAW_REMOTE_CATALOG_BASE, oRAW_REMOTE_CATALOG_SYS].forEach(function (oRawRemoteCatalog) {
        asyncTest("read remote catalog chips: " + oRawRemoteCatalog.title, function () {
            var oCatalog,
                oFactory,
                oPageBuildingService,
                oPbs;

            // prepare test
            sap.ushell.bootstrap("abap");
            sinon.spy(sap.ushell.adapters.hana, "PageBuildingAdapter");
            oPageBuildingService = sap.ushell.Container.getService("PageBuilding");
            oFactory = oPageBuildingService.getFactory();
            sinon.spy(oFactory, "readCatalogData");
            oPbs = new sap.ui2.srvc.PageBuildingService("/~/");
            sinon.stub(sap.ui2.srvc, "createPageBuildingService").returns(oPbs);
            sinon.stub(oPbs, "readCatalog", function (sId, fnSuccess) {
                sendAsync(fnSuccess, oRAW_RESOLVED_CATALOG);
            });
            sinon.spy(sap.ui2.srvc, "Chip");

            // create a remote catalog to test with
            jQuery.sap.require("sap.ui2.srvc.catalog");
            oCatalog = oFactory.createCatalog(oRawRemoteCatalog);

            // code under test
            ok(oCatalog.isStub(), "remote catalog is a stub");
            oCatalog.load(function () {
                start();

                // test
                ok(oFactory.readCatalogData.calledOnce, "the factory's readCatalogData was called");
                strictEqual(oFactory.readCatalogData.args[0][0], oRawRemoteCatalog,
                    "the correct catalog was requested");
                ok(sap.ushell.adapters.hana.PageBuildingAdapter.calledOnce, "HANA adapter created");
                strictEqual(sap.ushell.adapters.hana.PageBuildingAdapter.args[0][0].getAlias(),
                        oRawRemoteCatalog.systemId, "alias for HANA adapter correct");
                strictEqual(sap.ushell.adapters.hana.PageBuildingAdapter.args[0][0].getBaseUrl(),
                        oRawRemoteCatalog.baseUrl, "base URL for HANA adapter correct");
                ok(oPbs.readCatalog.calledOnce, "remote PBS called");
                ok(oPbs.readCatalog.calledWith(oRawRemoteCatalog.remoteId),
                    "remote PBS called correctly");
                strictEqual(oCatalog.getId(), oRawRemoteCatalog.id, "id unchanged");
                ok(!oCatalog.isStub(), "catalog not a stub any more");
                strictEqual(oCatalog.getTitle(), oRawRemoteCatalog.title, "catalog title");
                strictEqual(oCatalog.getChips().length, 1, "resulting catalog contains 1 chip");
                ok(sap.ui2.srvc.Chip.calledWith({
                    id: oRAW_REMOTE_CHIP.id,
                    remoteCatalogId: oRawRemoteCatalog.id,
                    title: oRAW_REMOTE_CHIP.title,
                    url: oRAW_REMOTE_CHIP.url
                }), "the remote chip was created correctly");
            }, sap.ui2.srvc.test.onError);
        });
    });

    asyncTest("error handling", function () {
        var oCatalog,
            oFactory,
            oPageBuildingService,
            oLogMock = sap.ui2.srvc.test.createLogMock()
                .sloppy()
                .error(/Invalid input for readCatalogData: undefined/, null,
                       "sap.ushell.services.PageBuilding")
                .error(/Invalid input for readCatalogData: \[object Object\]/, null,
                       "sap.ushell.services.PageBuilding")
                .error(/Could not load catalog 'foo', type '?'/, null, "sap.ui2.srvc.Catalog");

        // prepare test
        sap.ushell.bootstrap("abap");
        oPageBuildingService = sap.ushell.Container.getService("PageBuilding");
        oFactory = oPageBuildingService.getFactory();
        sinon.stub(oFactory.getPageBuildingService(), "readCatalog", function (sId, fnSuccess) {
            sap.ui2.srvc.call(function () {
                fnSuccess({id: "foo", type: '?'});
            }, sap.ui2.srvc.test.onError, true);
        });

        raises(function () {
            oFactory.readCatalogData();
        }, /Invalid input for readCatalogData/);
        raises(function () {
            oFactory.readCatalogData({});
        }, /Invalid input for readCatalogData/);

        // create an invalid catalog (no chips)
        jQuery.sap.require("sap.ui2.srvc.catalog");
        oCatalog = oFactory.createCatalog("foo");

        // code under test
        oCatalog.load(function () {
            start();

            // test
            ok(!oCatalog.isStub(), "loading succeeded");
            oLogMock.verify();
        }, sap.ui2.srvc.test.onError);
    });

    [oRAW_REMOTE_CATALOG_BASE, oRAW_REMOTE_CATALOG_SYS].forEach(function (oRawRemoteCatalog) {
        asyncTest("read remote catalog from ID: " + oRawRemoteCatalog.title, function () {
            var oCatalog,
                oFactory,
                oPageBuildingService,
                oPbs;

            // prepare test
            sap.ushell.bootstrap("abap");
            sinon.spy(sap.ushell.adapters.hana, "PageBuildingAdapter");
            oPageBuildingService = sap.ushell.Container.getService("PageBuilding");
            oFactory = oPageBuildingService.getFactory();
            sinon.spy(oFactory, "readCatalogData");
            sinon.stub(oFactory.getPageBuildingService(), "readCatalog", function (sId, fnSuccess) {
                sendAsync(fnSuccess, oRawRemoteCatalog);
            });
            oPbs = new sap.ui2.srvc.PageBuildingService("/~/");
            sinon.stub(sap.ui2.srvc, "createPageBuildingService").returns(oPbs);
            sinon.stub(oPbs, "readCatalog", function (sId, fnSuccess) {
                sendAsync(fnSuccess, oRAW_RESOLVED_CATALOG);
            });

            // create a remote catalog to test with
            jQuery.sap.require("sap.ui2.srvc.catalog");
            oCatalog = oFactory.createCatalog(oRawRemoteCatalog.id);

            // code under test
            ok(oCatalog.isStub(), "remote catalog is a stub");
            oCatalog.load(function () {
                start();

                // test
                ok(oFactory.readCatalogData.calledOnce, "the factory's readCatalogData was called");
                strictEqual(oFactory.readCatalogData.args[0][0].id, oRawRemoteCatalog.id,
                    "the correct catalog was requested");
                ok(sap.ushell.adapters.hana.PageBuildingAdapter.calledOnce, "HANA adapter created");
                strictEqual(sap.ushell.adapters.hana.PageBuildingAdapter.args[0][0].getBaseUrl(),
                    oRawRemoteCatalog.baseUrl, "base URL for HANA adapter correct");
                ok(oPbs.readCatalog.calledOnce, "remote PBS called");
                ok(oPbs.readCatalog.calledWith(oRawRemoteCatalog.remoteId),
                    "remote PBS called correctly");
            }, sap.ui2.srvc.test.onError);
        });
    });

    [oRAW_REMOTE_CATALOG_BASE, oRAW_REMOTE_CATALOG_SYS].forEach(function (oRawRemoteCatalog) {
        asyncTest("allCatalogs with remote catalog: " + oRawRemoteCatalog.title, function () {
            var oAllCatalogs,
                oCatalog,
                oFactory,
                oPageBuildingService;

            // prepare test
            sap.ushell.bootstrap("abap");
            oPageBuildingService = sap.ushell.Container.getService("PageBuilding");
            oFactory = oPageBuildingService.getFactory();
            sinon.stub(oFactory.getPageBuildingService(), "readAllCatalogs",
                function (sId, fnSuccess) {
                    sendAsync(fnSuccess, {results: [oRawRemoteCatalog]});
                });
            sinon.stub(oFactory, "readCatalogData", function (oAlterEgo, fnSuccess) {
                sendAsync(fnSuccess, oRAW_RESOLVED_CATALOG);
            });
            jQuery.sap.require("sap.ui2.srvc.allcatalogs");

            // code under test
            oAllCatalogs = new sap.ui2.srvc.AllCatalogs(oFactory, "FOO");
            oAllCatalogs.load(function () {
                start();

                // test
                oCatalog = oAllCatalogs.getCatalogs()[0];
                strictEqual(oCatalog.getId(), oRawRemoteCatalog.id, "got the correct catalog");
                ok(!oCatalog.isStub(), "catalog is not a stub anymore");
                ok(oFactory.readCatalog.calledOnce, "remote catalog requested");
                ok(oFactory.readCatalog.calledWith(oRawRemoteCatalog));
            });
        });
    });

    [oRAW_REMOTE_CATALOG_BASE, oRAW_REMOTE_CATALOG_SYS].forEach(function (oRawRemoteCatalog) {
        asyncTest("add remote chip to page: " + oRawRemoteCatalog.title, function () {
            var oChip,
                oPbs,
                oPage,
                oPageBuildingService;

            // prepare test
            sap.ushell.bootstrap("demo");
            oPageBuildingService = sap.ushell.Container.getService("PageBuilding");
            oPbs = oPageBuildingService.getFactory().getPageBuildingService();
            oPage = oPageBuildingService.getPage("FOO");
            oChip = oPageBuildingService.getFactory().createChip({
                id: oRAW_REMOTE_CHIP.id,
                remoteCatalogId: oRawRemoteCatalog.id,
                title: oRAW_REMOTE_CHIP.title,
                url: sBASE_URL + oRAW_REMOTE_CHIP.url
            });
            sinon.spy(oPbs, "createPageChipInstanceFromRawData");
            sinon.spy(sap.ui2.srvc, "absoluteUrl");

            oPage.load(function () {
                // code under test
                oPage.addChipInstance(oChip, function (oChipInstance) {
                    var oRawChipInstance;

                    start();

                    //test
                    ok(oPbs.createPageChipInstanceFromRawData.calledOnce, "one chip instance created");
                    oRawChipInstance = oPbs.createPageChipInstanceFromRawData.args[0][0];
                    strictEqual(oRawChipInstance.pageId, 'FOO', "page id");
                    strictEqual(oRawChipInstance.chipId, oRAW_REMOTE_CHIP.id, "chip id");
                    strictEqual(oRawChipInstance.remoteCatalogId, oRawRemoteCatalog.id, "catalog id");
                    strictEqual(oChipInstance.getChip(), oChip, "chip at chip instance");
                    strictEqual(oChip.getRemoteCatalog().getId(), oRawRemoteCatalog.id,
                        "chip's catalog id");
                    sap.ui2.srvc.absoluteUrl.reset();
                    oChip.toAbsoluteUrl("");
                    ok(sap.ui2.srvc.absoluteUrl.calledWith("", sBASE_URL + oRAW_REMOTE_CHIP.url),
                        "chip's URL");
                    strictEqual(oChip.getRemoteCatalog().getId(), oRawRemoteCatalog.id);
                }, sap.ui2.srvc.test.onError, /*partially=*/true);
            }, sap.ui2.srvc.test.onError);
        });
    });

    ["REMOTE_CATALOG", "REMOTE_CATALOG_SYS"].forEach(function (sRemoteCatalogId) {
        asyncTest("load remote chip: " + sRemoteCatalogId, function () {
            var oChip,
                oFactory,
                oPageBuildingService,
                oPbs,
                oRawChip = {
                    id: "toString",
                    remoteCatalogId: sRemoteCatalogId
                },
                fnGet = sap.ui2.srvc.get;

            // prepare test
            sap.ushell.bootstrap("demo");
            oPageBuildingService = sap.ushell.Container.getService("PageBuilding");
            oFactory = oPageBuildingService.getFactory();
            // this is the chip we test with
            oChip = oFactory.createChip(oRawChip);
            // replace the HANA PBS by another instance of our test/demo PBS
            oPbs = new sap.ui2.srvc.test.PageBuildingService("/~/");
            sinon.stub(sap.ui2.srvc, "createPageBuildingService").returns(oPbs);
            sinon.spy(oPbs, "readCatalog");
            sinon.spy(oChip, "update");
            sinon.stub(sap.ui2.srvc, "get", function (sUrl, bXml, fnSuccess, fnFailure, oXHR, bCache) {
                fnGet(sUrl.replace(/^\/remote_hana\//, "/").replace(";s=hana", ""),
                    bXml, fnSuccess, fnFailure, oXHR, bCache);
            });

            // code under test
            oChip.load(function () {
                start();

                // test
                ok(oPbs.readCatalog.calledOnce, 'HANA catalog loaded');
                ok(oPbs.readCatalog.calledWith("/UI2/CATALOG_ALL"), 'HANA catalog loaded correctly');
                ok(oChip.update.calledWith({
                    id: "toString",
                    title: "toString",
                    remoteCatalogId: oRawChip.remoteCatalogId,
                    url: "/sap/public/bc/ui2/services/test/fixtures/toString.xml"
                }), "chip updated correctly");

                ok(sap.ui2.srvc.get.calledWith(
                    "/sap/public/bc/ui2/services/test/fixtures/toString.xml"
                ), "XML requested correctly");
                sinon.spy(jQuery.sap, "registerModulePath");
                sinon.stub(sap.ui, "view").returns(sinon); // Note: any object will do
                oChip.getImplementationAsSapui5({});
                ok(jQuery.sap.registerModulePath.calledWith("sap.ui2.samples",
                    "/sap/public/bc/ui2/services/test/fixtures/sap/ui2/samples"),
                    "module path correct");

            }, sap.ui2.srvc.test.onError);
        });
    });

    asyncTest("missing remote chip", function () {

        // prepare test
        sap.ushell.bootstrap("demo").fail(sap.ui2.srvc.test.onError).done(function () {
            var oChip,
                oFactory,
                oPageBuildingService,
                oPbs,
                oRawChip = {
                    id: "toString",
                    remoteCatalogId: "HANA_LIKE_CATALOG" // an empty catalog in test PBS
                },
                oLogMock = sap.ui2.srvc.test.createLogMock()
                    .sloppy()
                    .error("Remote catalog did not deliver CHIP 'toString'", null,
                        "sap.ui2.srvc.Chip");

            oPageBuildingService = sap.ushell.Container.getService("PageBuilding");
            oFactory = oPageBuildingService.getFactory();
            // this is the chip we test with
            oChip = oFactory.createChip(oRawChip);
            // replace the HANA PBS by another instance of our test PBS
            oPbs = new sap.ui2.srvc.test.PageBuildingService("/~/");
            sinon.stub(sap.ui2.srvc, "createPageBuildingService").returns(oPbs);

            // code under test
            oChip.load(function () {
                start();
                ok(false, "unexpected success");
            }, function (sMessage) {
                start();
                strictEqual(sMessage, "Remote catalog did not deliver CHIP 'toString'",
                    "reports missing chip");
                oLogMock.verify();
            });
        });
    });

    asyncTest("page set", function () {
        var oPageBuildingService;

        // prepare test
        sap.ushell.bootstrap("demo");
        oPageBuildingService = sap.ushell.Container.getService("PageBuilding");

        raises(function () {
            oPageBuildingService.getPageSet();
        }, /Missing page set ID/, "no ID");
        oPageBuildingService.getPageSet("/UI2/Fiori2LaunchpadHome")
            .fail(sap.ui2.srvc.test.onError)
            .done(function (oPageSet) {
                var aPages;
                start();
                aPages = oPageSet.getPages();
                strictEqual(aPages[0].getId(), "PAGE_SET_PAGE_USER_CREATED", "ID of 1st page");
                strictEqual(aPages[1].getId(), "/UI2/Fiori2LaunchpadHome", "ID of 2nd page");
                ok(!aPages[0].isStub());
                ok(!aPages[1].isStub());
            });
    });

    asyncTest("readCatalogChips: local catalog", function () {
        // prepare test
        sap.ushell.bootstrap("demo").fail(sap.ui2.srvc.test.onError).done(function () {
            var oPageBuildingService = sap.ushell.Container.getService("PageBuilding"),
                oFactory = oPageBuildingService.getFactory(),
                oCatalog = oFactory.createCatalog("/UI2/CATALOG_ALL");

            sinon.spy(oFactory, "createChip");
            oCatalog.load(function () {
                oCatalog.readChips(["anonymous", "bag"], function () {
                    start();
                    strictEqual(oFactory.createChip.firstCall.args[0].id, "anonymous");
                    strictEqual(oFactory.createChip.secondCall.args[0].id, "bag");
                }, sap.ui2.srvc.test.onError);
            }, sap.ui2.srvc.test.onError);
        });
    });

    asyncTest("readCatalogChips: remote catalog (with raw data)", function () {
        // prepare test
        sap.ushell.bootstrap("demo").fail(sap.ui2.srvc.test.onError).done(function () {
            var oPageBuildingService = sap.ushell.Container.getService("PageBuilding"),
                oFactory = oPageBuildingService.getFactory(),
                oCatalog = oFactory.createCatalog("REMOTE_CATALOG"),
                oHanaPbs = new sap.ui2.srvc.test.PageBuildingService("/~/");

            oCatalog.load(function () {
                sinon.spy(sap.ushell.adapters.hana, "PageBuildingAdapter");
                sinon.stub(sap.ui2.srvc, "createPageBuildingService").returns(oHanaPbs);
                sinon.spy(oFactory, "readCatalogChips");
                sinon.spy(oFactory, "createChip");
                sinon.spy(oHanaPbs, "readCatalogChips");
                oCatalog.readChips(["anonymous", "bag"], function () {
                    start();
                    ok(oFactory.readCatalogChips.called, "passed to PageBuilding");
                    ok(sap.ushell.adapters.hana.PageBuildingAdapter.calledOnce);
                    ok(oHanaPbs.readCatalogChips.calledOnce);
                    ok(oFactory.createChip.calledTwice);
                    strictEqual(oFactory.createChip.firstCall.args[0].id, "anonymous");
                    strictEqual(oFactory.createChip.firstCall.args[0].remoteCatalogId,
                        "REMOTE_CATALOG");
                    strictEqual(oFactory.createChip.secondCall.args[0].id, "bag");
                    strictEqual(oFactory.createChip.secondCall.args[0].remoteCatalogId,
                        "REMOTE_CATALOG");
                }, sap.ui2.srvc.test.onError);
            }, sap.ui2.srvc.test.onError);
        });
    });

    test("readCatalogChips: remote catalog (with chip id)", function () {
        // prepare test
        sap.ushell.bootstrap("demo").fail(sap.ui2.srvc.test.onError).done(function () {
            var oPageBuildingService = sap.ushell.Container.getService("PageBuilding"),
                oFactory = oPageBuildingService.getFactory(),
                oCatalog = oFactory.createCatalog("REMOTE_CATALOG");

            raises(function () {
                oCatalog.readChips(["anonymous", "bag"], function () {}, function () {});
            }, /Unknown catalog type/);
        });
    });
}());
