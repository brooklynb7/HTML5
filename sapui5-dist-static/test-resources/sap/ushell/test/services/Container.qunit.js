// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview QUnit tests for sap.ushell.services.Container
 */
(function () {
    "use strict";
    /*global asyncTest, deepEqual, equal, expect, module, notDeepEqual,
    notEqual, notStrictEqual, ok, raises, start, strictEqual, stop, test,
    acme, jQuery, sap, setTimeout, sinon, window */

    jQuery.sap.require("sap.ushell.services.Container");
    jQuery.sap.require("sap.ushell.System");

    // needed so that we can spy on the constructor
    jQuery.sap.require("sap.ushell.adapters.demo.ContainerAdapter");
    jQuery.sap.require("sap.ushell.renderers.fiori2.Renderer");

    module("sap.ushell.services.Container", {
        /**
         * This method is called after each test. Add every restauration code here.
         */
        teardown: function () {
            sap.ui2.srvc.test.restoreSpies(
                jQuery.sap.require,
                sap.ushell.adapters.demo.ContainerAdapter,
                sap.ushell.renderers.fiori2.Renderer.prototype.createContent,
                sap.ushell.services.Foo,
                setTimeout
            );
            delete sap.ushell.Container;
            window.onhashchange = null;
        }
    });

    test("check that utils are available", function () {
        strictEqual(typeof sap.ushell.utils.Error, "function");
        strictEqual(typeof sap.ushell.utils.Map, "function");
        strictEqual(typeof sap.ushell.utils.testPublishAt, "function", "test #1000");
    });

    asyncTest("initialize Container", function () {
        var oSystem = new sap.ushell.System({}),
            oAdapter = new sap.ushell.adapters.demo.ContainerAdapter(oSystem),
            fnRequire = sinon.spy(jQuery.sap, "require"),
            oPromise;

        // stub the constructor and return our own object, so that we can stub its load()
        sinon.stub(sap.ushell.adapters.demo, "ContainerAdapter").returns(oAdapter);
        sinon.stub(oAdapter, "load", function () {
            var oDeferred = new jQuery.Deferred();
            sap.ui2.srvc.call(function () {
                oDeferred.resolve();
            }, function (sMessage) {
                oDeferred.reject(sMessage);
            }, true); // call load() asynchronously
            return oDeferred.promise();
        });

        // initial tests
        strictEqual(sap.ushell.Container, undefined, "Container not defined initially");

        // Code under test
        oPromise = sap.ushell.bootstrap("demo");
        raises(function () {
            sap.ushell.bootstrap("demo");
        }, /Cannot initialize twice/, "parameter check");

        // tests
        ok(typeof oPromise.done === "function", "initialize returned a jQuery promise");
        ok(fnRequire.calledWithExactly("sap.ushell.adapters.demo.ContainerAdapter"),
                "required the adapter");
        ok(sap.ushell.adapters.demo.ContainerAdapter.calledOnce, "adapter created");
        ok(oAdapter.load.calledOnce, "adapter.load() called");
        oPromise.done(function () {
            start();
            ok(typeof sap.ushell.Container === "object", "Container created");
        });
    });

    asyncTest("sap.ushell.bootstrap.callback", function () {
        window["sap.ushell.bootstrap.callback"] = function () {/*NOP*/};

        sinon.spy(window, "setTimeout");

        sap.ushell.bootstrap("demo").done(function () {
            start();

            ok(setTimeout.calledWith(window["sap.ushell.bootstrap.callback"]));
        });
    });

    asyncTest("createRenderer", function () {
        var oRenderer, fnRequire = sinon.spy(jQuery.sap, "require");

        sap.ushell.bootstrap("demo").done(function () {
            start();

            raises(function () {
                sap.ushell.Container.createRenderer();
            }, /Missing renderer name/);

            // make sure that renderer does not create real content etc.
            sinon.stub(sap.ushell.renderers.fiori2.Renderer.prototype, "createContent");

            oRenderer = sap.ushell.Container.createRenderer("fiori2");
            ok(fnRequire.calledWithExactly("sap.ushell.renderers.fiori2.Renderer"));
            ok(oRenderer instanceof sap.ui.core.Control);
            // components are automatically wrapped into a control
            ok(oRenderer instanceof sap.ui.core.ComponentContainer);
            strictEqual(oRenderer.getHeight(), "100%");
            strictEqual(oRenderer.getWidth(), "100%");
            ok(oRenderer.getComponentInstance() instanceof sap.ushell.renderers.fiori2.Renderer);

            ok(oRenderer !== sap.ushell.Container.createRenderer("fiori2"));
        });
    });

    asyncTest("createRenderer custom control", function () {
        var fnRequire = sinon.spy(jQuery.sap, "require"),
            oRenderer;

        jQuery.sap.declare("acme.foo.bar.MyControl");
        sap.ui.core.Control.extend("acme.foo.bar.MyControl");

        sap.ushell.bootstrap("demo").done(function () {
            start();

            oRenderer = sap.ushell.Container.createRenderer("acme.foo.bar.MyControl");
            ok(fnRequire.calledWithExactly("acme.foo.bar.MyControl"));
            ok(oRenderer instanceof sap.ui.core.Control);
            ok(oRenderer instanceof acme.foo.bar.MyControl);
            ok(oRenderer !== sap.ushell.Container.createRenderer("acme.foo.bar.MyControl"));
        });
    });

    asyncTest("createRenderer wrong type", function () {
        var fnRequire = sinon.spy(jQuery.sap, "require");

        jQuery.sap.declare("acme.foo.bar.MyThingy");
        acme.foo.bar.MyThingy = sinon.spy();

        sap.ushell.bootstrap("demo").done(function () {
            start();

            raises(function () {
                sap.ushell.Container.createRenderer("acme.foo.bar.MyThingy");
            }, /Unsupported renderer type for name acme\.foo\.bar\.MyThingy/);

            // object was required nevertheless, even created...
            ok(fnRequire.calledWithExactly("acme.foo.bar.MyThingy"));
            ok(acme.foo.bar.MyThingy.calledOnce);
        });
    });

    asyncTest("Missing service name", function () {
        sap.ushell.bootstrap("demo").done(function () {
            start();

            raises(function () {
                sap.ushell.Container.getService();
            }, /Missing service name/, "getService complains when no service name given");
        });
    });

    test("getService", function () {
        stop(2);

        sap.ushell.bootstrap("demo").done(function () {
            var oBarService,
                fnRequire = sinon.spy(jQuery.sap, "require");

            // use virtual Bar service for testing service creation with adapter
            sap.ushell.adapters.demo.BarAdapter = function (oSystem, sParameter) {
                start();
                // simple check if the given system is the logon system
                strictEqual(oSystem.getPlatform(), "demo");
                strictEqual(oSystem.getAlias(), "");
                strictEqual(sParameter, undefined);
            };
            jQuery.sap.declare("sap.ushell.adapters.demo.BarAdapter");

            sap.ushell.services.Bar = function (oServiceAdapter, oContainerInterface, sParameter) {
                start();
                ok(oServiceAdapter instanceof sap.ushell.adapters.demo.BarAdapter);
                strictEqual(typeof oContainerInterface.createAdapter, "function");
                strictEqual(sParameter, undefined);
            };
            jQuery.sap.declare("sap.ushell.services.Bar");

            // code under test
            oBarService = sap.ushell.Container.getService("Bar", undefined);

            // assertions
            ok(oBarService instanceof sap.ushell.services.Bar,
                "getService returned the created service");

            ok(fnRequire.calledWithExactly("sap.ushell.services.Bar"),
                "required the Bar service");
            ok(fnRequire.calledWithExactly("sap.ushell.adapters.demo.BarAdapter"),
                "required the Bar adapter for demo platform");

            delete sap.ushell.services.Bar; // must not be called again
            strictEqual(sap.ushell.Container.getService("Bar"), oBarService,
                "second call delivers the same instance");
        });
    });

    asyncTest("getService without adapter, but with parameter", function () {
        sap.ushell.bootstrap("demo").done(function () {
            var oFooService,
                fnRequire = sinon.spy(jQuery.sap, "require");

            // use virtual Foo service for testing service creation without adapter
            sap.ushell.services.Foo = function (oContainerInterface, sParameter) {
                start();
                strictEqual(typeof oContainerInterface.createAdapter, "undefined");
                strictEqual(sParameter, "bar");
            };
            sap.ushell.services.Foo.hasNoAdapter = true;
            jQuery.sap.declare("sap.ushell.services.Foo");

            // code under test
            oFooService = sap.ushell.Container.getService("Foo", "bar");

            // assertions
            ok(oFooService instanceof sap.ushell.services.Foo,
                "getService returned the created service");

            ok(fnRequire.calledWithExactly("sap.ushell.services.Foo"),
                "required the Foo service");
            ok(fnRequire.neverCalledWith("sap.ushell.adapters.demo.FooAdapter"),
                "did NOT require the Foo adapter for demo platform");
        });
    });

    test("getService with parameter", function () {
        stop(4);

        sap.ushell.bootstrap("demo").done(function () {
            var oBarService,
                fnRequire = sinon.spy(jQuery.sap, "require");

            // use virtual Bar service for testing service creation with adapter
            sap.ushell.adapters.demo.BarAdapter = function (oSystem, sParameter) {
                start();
                // simple check if the given system is the logon system
                strictEqual(oSystem.getPlatform(), "demo");
                strictEqual(oSystem.getAlias(), "");
                strictEqual(sParameter, "parameter");
            };
            jQuery.sap.declare("sap.ushell.adapters.demo.BarAdapter");

            sap.ushell.services.Bar = function (oServiceAdapter, oContainerInterface, sParameter) {
                start();
                ok(oServiceAdapter instanceof sap.ushell.adapters.demo.BarAdapter);
                strictEqual(typeof oContainerInterface.createAdapter, "function");
                strictEqual(sParameter, "parameter");
            };
            jQuery.sap.declare("sap.ushell.services.Bar");

            // ***** code under test
            oBarService = sap.ushell.Container.getService("Bar", "parameter");

            // assertions
            ok(oBarService instanceof sap.ushell.services.Bar,
                "getService returned the created service");

            ok(fnRequire.calledWithExactly("sap.ushell.services.Bar"),
                "required the Bar service");
            ok(fnRequire.calledWithExactly("sap.ushell.adapters.demo.BarAdapter"),
                "required the Bar adapter for demo platform");

            // ***** create it again
            delete sap.ushell.services.Bar; // must not be called again
            strictEqual(sap.ushell.Container.getService("Bar", "parameter"), oBarService,
                "second call delivers the same instance");

            // ***** create another one
            sap.ushell.adapters.demo.BarAdapter = function (oSystem, sParameter) {
                start();
                // simple check if the given system is the logon system
                strictEqual(oSystem.getPlatform(), "demo");
                strictEqual(oSystem.getAlias(), "");
                strictEqual(sParameter, undefined);
            };
            sap.ushell.services.Bar = function (oServiceAdapter, oContainerInterface, sParameter) {
                start();
                ok(oServiceAdapter instanceof sap.ushell.adapters.demo.BarAdapter);
                strictEqual(typeof oContainerInterface.createAdapter, "function");
                strictEqual(sParameter, undefined);
            };
            notStrictEqual(sap.ushell.Container.getService("Bar", undefined), oBarService,
                "new instance for different parameter");
        });
    });

    asyncTest("getService with custom name", function () {
        sap.ushell.bootstrap("demo").done(function () {
            start();

            raises(function () {
                sap.ushell.Container.getService("acme.foo.bar.MyService");
            }, /Unsupported service name/);
        });
    });

    test("createAdapter (for remote system)", function () {
        stop(3);

        sap.ushell.bootstrap("demo").done(function () {
            var oFooSystem = new sap.ushell.System({platform: "foo"}),
                fnRequire = sinon.spy(jQuery.sap, "require");

            // use virtual Bar service for testing service creation with remote adapter
            sap.ushell.adapters.demo.BarAdapter = function (oSystem, sParameter) {
                start();
                // simple check if the given system is the logon system
                strictEqual(oSystem.getPlatform(), "demo");
                strictEqual(oSystem.getAlias(), "");
                strictEqual(sParameter, "parameter");
            };
            jQuery.sap.declare("sap.ushell.adapters.demo.BarAdapter");

            sap.ushell.adapters.foo = sap.ushell.adapters.foo || {};
            sap.ushell.adapters.foo.BarAdapter = function (oSystem, sParameter) {
                start();
                strictEqual(oSystem, oFooSystem);
                strictEqual(sParameter, "parameter");
            };
            jQuery.sap.declare("sap.ushell.adapters.foo.BarAdapter");

            sap.ushell.services.Bar = function (oServiceAdapter, oContainerInterface, sParameter) {
                var oPromise;

                // code under test
                raises(function () {
                    oContainerInterface.createAdapter();
                }, /Missing system/);
                oPromise = oContainerInterface.createAdapter(oFooSystem);

                strictEqual(typeof oPromise.done, "function",
                    "createAdapter() returned a jQuery promise");
                strictEqual(oPromise.resolve, undefined,
                    "createAdapter() does not return the jQuery deferred object itself");

                oPromise.done(function (oAdapter) {
                    start();

                    ok(fnRequire.calledWithExactly("sap.ushell.adapters.foo.BarAdapter"),
                        "required the Bar adapter for foo platform");
                });
            };
            jQuery.sap.declare("sap.ushell.services.Bar");

            sap.ushell.Container.getService("Bar", "parameter");
        });
    });

    test("getLogonSystem()", function () {
        var oSystem = new sap.ushell.System({alias: "", platform: "demo"}),
            oSystemAfterBootstrap;

        sap.ushell.bootstrap(oSystem.getPlatform()).done(function () {
            oSystemAfterBootstrap = sap.ushell.Container.getLogonSystem();
            ok(oSystemAfterBootstrap instanceof sap.ushell.System);
            strictEqual(oSystem.getAlias(), oSystemAfterBootstrap.getAlias());
            strictEqual(oSystem.getBaseUrl(), oSystemAfterBootstrap.getBaseUrl());
            strictEqual(oSystem.getClient(), oSystemAfterBootstrap.getClient());
            strictEqual(oSystem.getName(), oSystemAfterBootstrap.getName());
            strictEqual(oSystem.getPlatform(), oSystemAfterBootstrap.getPlatform());
        });
    });

    test("getUser()", function () {
        var oSystem = new sap.ushell.System({alias: "", platform: "demo"}),
            oUser;

        sap.ushell.bootstrap(oSystem.getPlatform()).done(function () {
            oUser = sap.ushell.Container.getUser();
            ok(oUser instanceof sap.ushell.User);
            //TODO how to mock request providing user data?
        });
    });

    asyncTest("addRemoteSystem()", function () {
        sap.ushell.bootstrap("demo").done(function () {
            var oSystem = new sap.ushell.System({
                    alias: "test",
                    platform: "dummy",
                    baseUrl: "/baseUrl"
                }),
                oLogMock = sap.ui2.srvc.test.createLogMock()
                    .filterComponent("sap.ushell.Container")
                    .debug("Added " + JSON.stringify(oSystem), null, "sap.ushell.Container")
                    .debug("Remote system " + JSON.stringify(oSystem) + "already added!", null,
                        "sap.ushell.Container");

            start();
            sap.ushell.Container.addRemoteSystem(new sap.ushell.System({
                alias: "test",
                platform: "dummy",
                baseUrl: "/baseUrl"
            }));
            sap.ushell.Container.addRemoteSystem(new sap.ushell.System({
                alias: "test",
                platform: "dummy",
                baseUrl: "/baseUrl"
            }));
            oLogMock.verify();
        });
    });

    asyncTest("logout(): simple case", function () {
        sinon.spy(sap.ushell.adapters.demo, "ContainerAdapter");
        sap.ushell.bootstrap("demo").done(function () {
            var oContainerAdapter = sap.ushell.adapters.demo.ContainerAdapter.thisValues[0];

            sinon.spy(oContainerAdapter, "logout");
            sap.ushell.Container.logout().done(function () {
                start();
                ok(oContainerAdapter.logout.calledOnce);
                ok(oContainerAdapter.logout.calledWithExactly(true));
            });
        });
    });
    // TODO test logout with remote systems

    test("System.adjustUrl", function () {

        function testFail(sUrl) {
            raises(function () {
                new sap.ushell.System().adjustUrl(sUrl);
            }, /Invalid URL:/, sUrl);
        }

        function testAdjust(sUrl, sAlias, sBase, sExpected) {
            var oSystem = new sap.ushell.System({alias: sAlias, baseUrl: sBase, platform: "demo"});

            strictEqual(oSystem.adjustUrl(sUrl), sExpected, sExpected);
        }

        testFail("../foo");
        testFail("/");
        testFail("http://www.sap.com");
        testAdjust("/sap/my/url", undefined, undefined, "/sap/my/url");
//        testAdjust("/sap", "foo", undefined, "/sap;s=foo");
//        testAdjust("/sap/my/url", "foo", undefined, "/sap;s=foo/my/url");
        testAdjust("/sap/my/url", undefined, "/bar", "/bar/sap/my/url");
        testAdjust("/sap/my/url", undefined, "/bar/", "/bar/sap/my/url");
        testAdjust("/sap/my/url", undefined, "http://some.other.host:4711/",
            "http://some.other.host:4711/sap/my/url");
        testAdjust("/sap/my/url", "foo", "/bar/", "/bar/sap/my/url");
    });
}());
