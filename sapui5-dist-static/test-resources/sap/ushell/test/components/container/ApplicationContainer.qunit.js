//Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview QUnit tests for components/container/ApplicationContainer.js
 */
(function () {
    "use strict";
    /*global asyncTest, deepEqual, equal, expect, module, notDeepEqual,
    notEqual, notStrictEqual, ok, raises, start, strictEqual, stop, test,
    document, jQuery, sap, sinon, some */

    var sCONTAINER = "sap.ushell.components.container.ApplicationContainer",
        sTESTURL = "http://www.sap.com/";

    /**
     * Creates an object which can be used for the ApplicationContainer's application property.
     * @param {string} [oProperties.text]
     *   the return value for getText()
     * @param {string} [oProperties.type]
     *   the return value for getType()
     * @param {string} [oProperties.url]
     *   the return value for getUrl()
     * @param {boolean} [oProperties.resolvable]
     *   the return value for isResolvable(). If <code>true</code>, the object's function
     *   <code>resolve()</code> must be stubbed.
     * @returns the application object
     */
    function getApplication(oProperties) {
        oProperties = oProperties || {};
        return {
            getText: function () { return oProperties.text; },
            getType: function () { return oProperties.type; },
            getUrl: function () { return oProperties.url; },
            isFolder: function () { return false; },
            isResolvable: function () { return oProperties.resolvable; },
            resolve: function () { throw new Error("resolve must be stubbed"); },
            getMenu: function () {
                return {
                    getDefaultErrorHandler: function () {
                        return oProperties.errorHandler;
                    }
                };
            }
        };
    }

    /**
     * Renders the container and expects that the internal render() is called with the given
     * arguments.
     * @param {sap.ushell.components.container.ApplicationContainer] oContainer
     *   the container
     * @param {sap.ushell.components.container.ApplicationType} oApplicationType
     *   the expected applicationType
     * @param {string} sUrl
     *   the expected URL
     * @param {string} sAdditionalInformation
     *   the expected additional information
     */
    function renderAndExpect(oContainer, oApplicationType, sUrl, sAdditionalInformation) {
        var oRenderManager = new sap.ui.core.RenderManager();

        sinon.stub(sap.ushell.components.container, "render");

        oRenderManager.render(oContainer, document.createElement("DIV"));

        ok(sap.ushell.components.container.render.calledWith(
            oRenderManager.getRendererInterface(),
            oContainer,
            oApplicationType,
            sUrl,
            sAdditionalInformation
        ));
    }

    /**
     * Call the render() function and check that an IFrame is rendered for the given URL.
     * @param {sap.ushell.components.container.ApplicationContainer] oContainer
     *   the container
     * @param {sap.ushell.components.container.ApplicationType} oApplicationType
     *   the application type
     * @param {string} sUrl
     *   the application URL
     */
    function renderInternallyAndExpectIFrame(oContainer, sApplicationType, sUrl) {
        var oRenderManager = new sap.ui.core.RenderManager(),
            oTargetNode = document.createElement("DIV"),
            oIframe,
            fnGetFrameSource = sinon.stub(oContainer, "getFrameSource")
                .returns("http://localhost/foo");

        oContainer.addStyleClass("myClass1");
        sinon.spy(oRenderManager, "writeAccessibilityState");
        sap.ushell.components.container.render(oRenderManager.getRendererInterface(),
            oContainer, sApplicationType, sUrl, "additionalInfo");
        oRenderManager.flush(oTargetNode);

        strictEqual(oTargetNode.childNodes.length, 1);
        oIframe = oTargetNode.childNodes[0];
        strictEqual(oIframe.nodeName, "IFRAME");
        strictEqual(oIframe.className, "myClass1 sapUShellApplicationContainer");
        strictEqual(oIframe.getAttribute("data-sap-ui"), oContainer.getId());
        strictEqual(oIframe.id, oContainer.getId());
        strictEqual(oIframe.getAttribute("sandbox"), 'allow-forms allow-same-origin allow-scripts');
        strictEqual(oIframe.src, "http://localhost/foo");
        strictEqual(oIframe.style.height, oContainer.getHeight());
        strictEqual(oIframe.style.width, oContainer.getWidth());
        ok(oRenderManager.writeAccessibilityState.calledOnce);

        ok(fnGetFrameSource.calledOnce);
        ok(fnGetFrameSource.calledWith(sApplicationType, sUrl, "additionalInfo"));
    }

    /**
     * Calls <code>sap.ushell.components.container.createUi5View</code> for the given container
     * and tests that it fails with the given technical error message.
     *
     * @param {sap.ushell.components.container.ApplicationContainer} oContainer
     *   the container
     * @param {string} sMessage
     *   technical error message
     */
    function testFailingCreateUi5View(oContainer, sMessage) {
        var fnCreateView = sinon.spy(sap.ui, "view"),
            oLogMock = sap.ui2.srvc.test.createLogMock()
                .filterComponent(sCONTAINER)
                .error(sMessage, oContainer.getAdditionalInformation(), sCONTAINER);

        sinon.stub(sap.ushell.components.container, "createErrorControl");

        sap.ushell.components.container.createUi5View(oContainer, oContainer.getUrl(),
            oContainer.getAdditionalInformation());

        ok(!fnCreateView.called);
        ok(sap.ushell.components.container.createErrorControl.calledOnce);
        oLogMock.verify();
    }

    // a test component
    jQuery.sap.declare("some.random.path.Component");
    sap.ui.core.UIComponent.extend("some.random.path.Component", {
        createContent: function () {return new sap.ui.core.Icon(); }
    });

    //---------------------------------------------------------------------------------------------

    // Documentation can be found at http://docs.jquery.com/QUnit
    module("components/container/ApplicationContainer.js", {
        /**
         * This method is called after each test. Add every restauration code here.
         */
        teardown: function () {
            sap.ui2.srvc.test.restoreSpies(
                jQuery.sap.assert,
                jQuery.sap.registerModulePath,
                jQuery.sap.require,
                sap.ui.component,
                sap.ui.core.Component.activateCustomizing,
                sap.ui.core.Component.deactivateCustomizing,
                sap.ui.view,
                sap.ushell.components.container.createErrorControl,
                sap.ushell.components.container.createUi5Component,
                sap.ushell.components.container.createUi5View,
                sap.ushell.components.container.destroyChild,
                sap.ushell.components.container.render,
                sap.ushell.components.container.renderControlInDiv,
                sap.m.InstanceManager.hasOpenPopover,
                sap.m.InstanceManager.closeAllPopovers,
                sap.m.InstanceManager.hasOpenDialog,
                sap.m.InstanceManager.closeAllDialogs
            );
        }
    });

    test("translation", function () {
        //TODO this (of course) depends on translatable texts!
        strictEqual(
            sap.ushell.components.container.getTranslatedText("an_error_has_occured"),
            "Error occurred"
        );
        strictEqual(
            sap.ushell.components.container.getTranslatedText("loading", ["foo bar"]),
            "Loading foo bar..."
        );
    });

    test("renderControlInDiv w/o child", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer({
                width: "11%",
                height: "180px"
            }),
            oDiv,
            oRenderManager = new sap.ui.core.RenderManager(),
            oTargetNode = document.createElement("DIV");

        oContainer.addStyleClass("myClass1");
        sinon.spy(oRenderManager, "writeAccessibilityState");

        sap.ushell.components.container.renderControlInDiv(
            oRenderManager.getRendererInterface(),
            oContainer
        );

        oRenderManager.flush(oTargetNode);
        strictEqual(oTargetNode.childNodes.length, 1);
        oDiv = oTargetNode.childNodes[0];
        strictEqual(oDiv.nodeName, "DIV");
        strictEqual(oDiv.className, "myClass1 sapUShellApplicationContainer");
        strictEqual(oDiv.getAttribute("data-sap-ui"), oContainer.getId());
        strictEqual(oDiv.id, oContainer.getId());
        strictEqual(oDiv.style.height, oContainer.getHeight());
        strictEqual(oDiv.style.width, oContainer.getWidth());
        ok(oRenderManager.writeAccessibilityState.calledOnce);
    });

    test("renderControlInDiv w/ child", function () {
        var oChild = new sap.ui.core.Icon(),
            oContainer = new sap.ushell.components.container.ApplicationContainer({
                width: "11%",
                height: "180px"
            }),
            oDiv,
            oRenderManager = new sap.ui.core.RenderManager(),
            oTargetNode = document.createElement("DIV");

        oContainer.addStyleClass("myClass1");
        sinon.spy(oRenderManager, "writeAccessibilityState");
        sinon.spy(oRenderManager, "renderControl");

        sap.ushell.components.container.renderControlInDiv(
            oRenderManager.getRendererInterface(),
            oContainer,
            oChild
        );

        oRenderManager.flush(oTargetNode);
        strictEqual(oTargetNode.childNodes.length, 1);
        oDiv = oTargetNode.childNodes[0];
        strictEqual(oDiv.nodeName, "DIV");
        strictEqual(oDiv.className, "myClass1 sapUShellApplicationContainer");
        strictEqual(oDiv.getAttribute("data-sap-ui"), oContainer.getId());
        strictEqual(oDiv.id, oContainer.getId());
        strictEqual(oDiv.style.height, oContainer.getHeight());
        strictEqual(oDiv.style.width, oContainer.getWidth());
        ok(oRenderManager.writeAccessibilityState.calledOnce);
        ok(oRenderManager.renderControl.calledOnce);
        ok(oRenderManager.renderControl.calledWith(oChild));
    });

    test("createErrorControl", function () {
        var oResult = sap.ushell.components.container.createErrorControl();

        ok(oResult instanceof sap.ui.core.Control, "public contract");
        ok(oResult instanceof sap.ui.core.Icon, "implementation details");
        strictEqual(oResult.getSize(), "2rem");
        strictEqual(oResult.getSrc(), "sap-icon://error");
        //TODO this depends on a translatable text!
        strictEqual(oResult.getTooltip(), "Error occurred");
    });

    test("sap.ushell.components.container.ApplicationContainer control", function () {
        var oContainer;

        strictEqual(typeof sap.ushell.components.container.ApplicationContainer, "function");

        oContainer = new sap.ushell.components.container.ApplicationContainer();
        ok(oContainer instanceof sap.ui.core.Control);
        strictEqual(oContainer.getAdditionalInformation(), "",
            "default for 'additionalInformation' property");
        strictEqual(oContainer.getApplicationType(), "URL",
            "default for 'applicationType' property");
        strictEqual(oContainer.getHeight(), "100%", "default for 'height' property");
        strictEqual(oContainer.getUrl(), "", "default for 'url' property");
        strictEqual(oContainer.getVisible(), true, "default for 'visible' property");
        strictEqual(oContainer.getWidth(), "100%", "default for 'width' property");
        strictEqual(oContainer.getApplication(), undefined, "default for 'application' property");
        strictEqual(oContainer.getChild, undefined, "'child' hidden");

        oContainer = new sap.ushell.components.container.ApplicationContainer({
            applicationType: "WDA"
        });
        strictEqual(oContainer.getApplicationType(), "WDA");

        raises(function () {
            oContainer = new sap.ushell.components.container.ApplicationContainer({
                applicationType: "foo"
            });
        });

        oContainer = new sap.ushell.components.container.ApplicationContainer({
            url: sTESTURL
        });
        strictEqual(oContainer.getUrl(), sTESTURL);

        oContainer = new sap.ushell.components.container.ApplicationContainer({
            visible: false
        });
        strictEqual(oContainer.getVisible(), false);

        oContainer = new sap.ushell.components.container.ApplicationContainer({
            height: "200px"
        });
        strictEqual(oContainer.getHeight(), "200px");

        raises(function () {
            oContainer = new sap.ushell.components.container.ApplicationContainer({
                height: "200foo"
            });
        });

        oContainer = new sap.ushell.components.container.ApplicationContainer({
            width: "100px"
        });
        strictEqual(oContainer.getWidth(), "100px");

        raises(function () {
            oContainer = new sap.ushell.components.container.ApplicationContainer({
                width: "100foo"
            });
        });

        oContainer = new sap.ushell.components.container.ApplicationContainer({
            additionalInformation: "SAPUI5="
        });
        strictEqual(oContainer.getAdditionalInformation(), "SAPUI5=");
    });

    test("sap.ushell.components.container.ApplicationContainer renderer exists", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer(),
            oRenderManager = new sap.ui.core.RenderManager(),
            oContainerRenderer = oRenderManager.getRenderer(oContainer);

        strictEqual(typeof oContainerRenderer, "object", oContainerRenderer);
    });

    test("sap.ushell.components.container.render URL", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer({
            height: "20%",
            width: "10%"
        });
        renderInternallyAndExpectIFrame(oContainer,
            sap.ushell.components.container.ApplicationType.URL, sTESTURL);
    });

    test("sap.ushell.components.container.render WDA", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer({
            height: "20%",
            width: "10%"
        });
        renderInternallyAndExpectIFrame(oContainer,
            sap.ushell.components.container.ApplicationType.WDA,
            'http://anyhost:1234/sap/bc/webdynpro/sap/test_navigation_parameter');
    });

    test("getFrameSource", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer();

        strictEqual(oContainer.getFrameSource(
            sap.ushell.components.container.ApplicationType.URL,
            sTESTURL,
            ""
        ), sTESTURL);
    });

    test("getFrameSource invalid type", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer();

        raises(function () {
            oContainer.getFrameSource("FOO", sTESTURL, "");
        }, /Illegal application type: FOO/);
    });

    test("sap.ushell.components.container.render invalid type", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer(),
            oRenderManager = new sap.ui.core.RenderManager(),
            sType = "FOO",
            sTechnicalErrorMsg = "Illegal application type: " + sType,
            oLogMock = sap.ui2.srvc.test.createLogMock()
                .filterComponent(sCONTAINER)
                .error(sTechnicalErrorMsg, null, sCONTAINER);

        sinon.spy(sap.ushell.components.container, "createErrorControl");

        sap.ushell.components.container.render(oRenderManager.getRendererInterface(),
            oContainer, sType, sTESTURL, "");

        ok(sap.ushell.components.container.createErrorControl.calledOnce);
        oLogMock.verify();
    });

    test("getFrameSource throw new Error", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer(),
            oRenderManager = new sap.ui.core.RenderManager(),
            sTechnicalErrorMsg = "Some error message",
            oLogMock = sap.ui2.srvc.test.createLogMock()
                .filterComponent(sCONTAINER)
                .error(sTechnicalErrorMsg, null, sCONTAINER);

        sinon.spy(sap.ushell.components.container, "createErrorControl");

        oContainer.getFrameSource = function () {
            throw new Error(sTechnicalErrorMsg);
        };
        sap.ushell.components.container.render(oRenderManager.getRendererInterface(),
            oContainer, "n/a", sTESTURL, "");

        ok(sap.ushell.components.container.createErrorControl.calledOnce);
        oLogMock.verify();
    });

    test("sap.ushell.components.container.render invalid type w/ custom getFrameSource",
        function () {
            var oContainer = new sap.ushell.components.container.ApplicationContainer({
                height: "20%",
                width: "10%"
            });

            oContainer.getFrameSource = function (sApplicationType, sUrl, sAdditionalInformation) {
                // Note: no error thrown!
                return sUrl;
            };

            renderInternallyAndExpectIFrame(oContainer, "TRA", sTESTURL);
        });

    test("sap.ushell.components.container.render UI5 (SAPUI5=)", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer(),
            oRenderManager = new sap.ui.core.RenderManager(),
            oIcon = new sap.ui.core.Icon();

        // return a button instead of a view, so that we have a control with the necessary
        // properties, but don't have to supply another file for the view definition
        sinon.stub(sap.ushell.components.container, "createUi5View").returns(oIcon);
        sinon.stub(sap.ushell.components.container, "renderControlInDiv");

        sap.ushell.components.container.render(oRenderManager.getRendererInterface(),
            oContainer, sap.ushell.components.container.ApplicationType.URL, sTESTURL,
            "SAPUI5=some.random.path.Viewname.view.xml");
        ok(sap.ushell.components.container.createUi5View.calledOnce);
        ok(sap.ushell.components.container.createUi5View.calledWith(oContainer,
            sTESTURL, "SAPUI5=some.random.path.Viewname.view.xml"));
        ok(sap.ushell.components.container.renderControlInDiv.calledWith(
            oRenderManager.getRendererInterface(),
            oContainer,
            oIcon
        ));
    });

    test("sap.ushell.components.container.ApplicationContainer invisible", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer({
                visible: false
            }),
            oRenderManager = new sap.ui.core.RenderManager();

        sinon.stub(sap.ushell.components.container, "render");
        sinon.stub(sap.ushell.components.container, "renderControlInDiv");

        oRenderManager.render(oContainer, document.createElement("DIV"));

        ok(sap.ushell.components.container.render.notCalled);
        ok(sap.ushell.components.container.renderControlInDiv.calledWith(
            oRenderManager.getRendererInterface(),
            oContainer
        ));
    });

    test("sap.ushell.components.container.ApplicationContainer rendering", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer({
                applicationType: sap.ushell.components.container.ApplicationType.URL,
                url: 'http://anyhost:1234/sap/public/bc/ui2/staging/test',
                additionalInformation: 'SAPUI5=will.be.ignored.view.xml'
            });

        renderAndExpect(oContainer, oContainer.getApplicationType(), oContainer.getUrl(),
                oContainer.getAdditionalInformation());
    });

    test("createUi5View", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer({
                applicationType: sap.ushell.components.container.ApplicationType.URL,
                url: 'http://anyhost:1234/sap/public/bc/ui2/staging/test',
                // explicitely use ".view." in the view's path to check that this is no problem
                additionalInformation: 'SAPUI5=some.random.view.path.Viewname.view.xml',
                width: "11%",
                height: "180px"
            }),
            oView,
            oIcon = new sap.ui.core.Icon(),
            fnRegisterModulePath = sinon.spy(jQuery.sap, "registerModulePath"),
            // return a button instead of a view, so that we have a control with the necessary
            //  properties, but don't have to supply another file for the view definition
            fnCreateView = sinon.stub(sap.ui, "view").returns(oIcon),
            fnAssert = sinon.spy(jQuery.sap, "assert");

        sinon.spy(sap.ushell.components.container, "destroyChild");

        oView = sap.ushell.components.container.createUi5View(oContainer, oContainer.getUrl(),
                oContainer.getAdditionalInformation());

        strictEqual(oView, oIcon, "createView returns our button");
        ok(fnRegisterModulePath.calledOnce, "registerModulePath called");
        strictEqual(fnRegisterModulePath.firstCall.args[0], "some.random.view.path");
        strictEqual(fnRegisterModulePath.firstCall.args[1],
            "http://anyhost:1234/sap/public/bc/ui2/staging/test/some/random/view/path");
        ok(fnCreateView.calledOnce, "createView called");
        ok(sap.ushell.components.container.destroyChild.calledBefore(fnCreateView),
            "child destroyed before creating the view");
        ok(fnCreateView.calledWith({
            id: oContainer.getId() + "-content",
            type: "XML",
            viewData: {},
            viewName: "some.random.view.path.Viewname"
        }), "createView args");
        strictEqual(oIcon.getWidth(), "11%");
        strictEqual(oIcon.getHeight(), "180px");
        ok(oIcon.hasStyleClass("sapUShellApplicationContainer"),
            "style sapUShellApplicationContainer applied");
        strictEqual(oIcon.getParent(), oContainer, "view's parent is the container");
        ok(fnAssert.neverCalledWith(sinon.match.falsy), "no failed asserts");
    });

    test("createUi5View view in subfolder", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer({
                applicationType: sap.ushell.components.container.ApplicationType.URL,
                url: 'http://anyhost:1234/',
                additionalInformation: 'SAPUI5=some.random.path/view.Viewname.view.js'
            }),
            fnRegisterModulePath = sinon.spy(jQuery.sap, "registerModulePath"),
            fnCreateView = sinon.stub(sap.ui, "view").returns(new sap.ui.core.Icon()),
            fnAssert = sinon.spy(jQuery.sap, "assert");

        sap.ushell.components.container.createUi5View(oContainer, oContainer.getUrl(),
            oContainer.getAdditionalInformation());

        ok(fnRegisterModulePath.calledOnce, "registerModulePath called");
        strictEqual(fnRegisterModulePath.firstCall.args[0], "some.random.path");
        strictEqual(fnRegisterModulePath.firstCall.args[1], "http://anyhost:1234/some/random/path");
        ok(fnCreateView.calledOnce, "createView called");
        strictEqual(fnCreateView.firstCall.args[0].type, "JS");
        strictEqual(fnCreateView.firstCall.args[0].viewName, "some.random.path.view.Viewname");
        ok(fnAssert.neverCalledWith(sinon.match.falsy), "no failed asserts");
    });

    test("createUi5View with view data", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer({
                applicationType: sap.ushell.components.container.ApplicationType.URL,
                url: 'http://anyhost:1234/sap/public/bc/ui2/staging/test?foo=bar&foo=baz&bar=baz',
                // explicitely use ".view." in the view's path to check that this is no problem
                additionalInformation: 'SAPUI5=some.random.view.path.Viewname.view.xml'
            }),
            oView,
            oIcon = new sap.ui.core.Icon(),
            fnRegisterModulePath = sinon.spy(jQuery.sap, "registerModulePath"),
            // return a button instead of a view, so that we have a control with the necessary
            //  properties, but don't have to supply another file for the view definition
            fnCreateView = sinon.stub(sap.ui, "view").returns(oIcon),
            fnAssert = sinon.spy(jQuery.sap, "assert");

        oView = sap.ushell.components.container.createUi5View(oContainer, oContainer.getUrl(),
                oContainer.getAdditionalInformation());
        strictEqual(oView, oIcon, "createView returns our button");

        ok(fnRegisterModulePath.calledOnce, "registerModulePath called");
        ok(fnRegisterModulePath.calledWith("some.random.view.path",
            "http://anyhost:1234/sap/public/bc/ui2/staging/test/some/random/view/path"),
            "registerModulePath args");
        ok(fnCreateView.calledOnce, "createView called");
        ok(fnCreateView.calledWith({
            id: oContainer.getId() + "-content",
            type: "XML",
            viewData: {foo: ["bar", "baz"], bar: ["baz"]},
            viewName: "some.random.view.path.Viewname"
        }), "createView args");
        ok(fnAssert.neverCalledWith(sinon.match.falsy), "no failed asserts");
    });

    test("createUi5View: invalid view type", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer({
                applicationType: sap.ushell.components.container.ApplicationType.URL,
                url: 'http://anyhost:1234/sap/public/bc/ui2/staging/test',
                additionalInformation: 'SAPUI5=path.Viewname.view.foo'
            }),
            fnCreateView = sinon.spy(sap.ui, "view");

        //TODO does this appear in log or on UI?
        raises(function () {
            sap.ushell.components.container.createUi5View(oContainer, oContainer.getUrl(),
                    oContainer.getAdditionalInformation());
        });
        ok(fnCreateView.calledWith({
            id: oContainer.getId() + "-content",
            type: "FOO",
            viewData: {},
            viewName: "path.Viewname"
        }), "createView args");
    });

    function createComponentViaSapui5(sQueryString, oExpectedComponentData) {
        var oContainer = new sap.ushell.components.container.ApplicationContainer({
                applicationType: sap.ushell.components.container.ApplicationType.URL,
                url: 'http://anyhost:1234/sap/public/bc/ui2/staging/test' + sQueryString,
                additionalInformation: 'SAPUI5=some.random.path',
                width: "11%",
                height: "180px"
            }),
            oControl;

        sinon.spy(jQuery.sap, "registerModulePath");
        sinon.spy(jQuery.sap, "assert");
        sinon.spy(sap.ui.core.Component, "activateCustomizing");
        sinon.spy(sap.ui, "component");

        oControl = sap.ushell.components.container.createUi5View(oContainer,
                oContainer.getUrl(), oContainer.getAdditionalInformation());

        ok(sap.ui.core.Component.activateCustomizing.calledWith("some.random.path"),
            "activated customizing");
        ok(sap.ui.core.Component.activateCustomizing.calledBefore(sap.ui.component),
            "activated customizing before creating the component");

        ok(jQuery.sap.registerModulePath.calledOnce, "registerModulePath called once");
        ok(jQuery.sap.registerModulePath.calledWithExactly("some.random.path",
            "http://anyhost:1234/sap/public/bc/ui2/staging/test/some/random/path"),
            "registered the component correctly");
        strictEqual(oControl.getId(), oContainer.getId() + "-content", "component container ID");
        ok(oControl.getComponentInstance() instanceof some.random.path.Component,
            "created the correct component");
        strictEqual(oControl.getComponentInstance().getId(), oContainer.getId() + "-component",
            "component ID");
        deepEqual(oControl.getComponentInstance().getComponentData(), oExpectedComponentData,
            "passed the component data correctly");
        strictEqual(oControl.getWidth(), "11%");
        strictEqual(oControl.getHeight(), "180px");
        ok(oControl.hasStyleClass("sapUShellApplicationContainer"),
            "style sapUShellApplicationContainer applied");
        strictEqual(oControl.getParent(), oContainer, "control's parent is the container");
        ok(jQuery.sap.assert.neverCalledWith(sinon.match.falsy), "no failed asserts");
    }

    test("createUi5View: component w/o componentData", function () {
        createComponentViaSapui5('', {});
    });

    test("createUi5View: component w/ componentData", function () {
        createComponentViaSapui5('?foo=bar&foo=baz&bar=baz',
            {startupParameters: {foo: ['bar', 'baz'], bar: ['baz']}});
    });

    test("createUi5View: missing namespace", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer({
                applicationType: sap.ushell.components.container.ApplicationType.URL,
                url: 'http://anyhost:1234/',
                additionalInformation: 'SAPUI5=Viewname.view.js'
            });

        testFailingCreateUi5View(oContainer, "Missing namespace");
    });

    test("createUi5View: illegal namespace", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer({
                applicationType: sap.ushell.components.container.ApplicationType.URL,
                url: 'http://anyhost:1234/',
                additionalInformation: 'SAPUI5=foo/bar/view.Viewname.view.js'
            });

        testFailingCreateUi5View(oContainer, "Invalid SAPUI5 URL");
    });

    test("createUi5View: missing view name", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer({
                applicationType: sap.ushell.components.container.ApplicationType.URL,
                url: 'http://anyhost:1234/',
                additionalInformation: 'SAPUI5=.view.js'
            });

        testFailingCreateUi5View(oContainer, "Invalid SAPUI5 URL");
    });

    test("destroyChild() w/o child", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer();

        sinon.spy(oContainer, "destroyAggregation");

        sap.ushell.components.container.destroyChild(oContainer);

        ok(oContainer.destroyAggregation.calledWith("child"), "child destroyed");
    });

    test("destroyChild() w/ component", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer();

        sap.ushell.components.container.createUi5Component(oContainer,
                oContainer.getUrl(), 'some.random.path');

        sinon.spy(oContainer, "destroyAggregation");
        sinon.spy(sap.ui.core.Component, "deactivateCustomizing");

        sap.ushell.components.container.destroyChild(oContainer);

        ok(oContainer.destroyAggregation.calledWith("child"), "child destroyed");
        ok(sap.ui.core.Component.deactivateCustomizing.calledWith("some.random.path"),
            "deactivated customizing");
        ok(sap.ui.core.Component.deactivateCustomizing.calledAfter(oContainer.destroyAggregation),
            "deactivated customizing after destroying the child");
    });

    test("destroyChild() closes popovers", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer();

        sap.ushell.components.container.createUi5Component(oContainer,
                oContainer.getUrl(), 'some.random.path');

        sinon.stub(sap.m.InstanceManager, "hasOpenPopover").returns(true);
        sinon.spy(sap.m.InstanceManager, "closeAllPopovers");

        sap.ushell.components.container.destroyChild(oContainer);

        ok(sap.m.InstanceManager.closeAllPopovers.called, "popovers closed");
    });

    test("destroyChild() closes dialogs", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer();

        sap.ushell.components.container.createUi5Component(oContainer,
                oContainer.getUrl(), 'some.random.path');

        sinon.stub(sap.m.InstanceManager, "hasOpenDialog").returns(true);
        sinon.spy(sap.m.InstanceManager, "closeAllDialogs");

        sap.ushell.components.container.destroyChild(oContainer);

        ok(sap.m.InstanceManager.closeAllDialogs.called, "dialogs closed");
    });

    test("exit", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer();

        sinon.spy(sap.ushell.components.container, "destroyChild");

        oContainer.exit();

        ok(sap.ushell.components.container.destroyChild.calledWith(oContainer),
            "destroyChild called");
    });

    // TODO get rid of "SAPUI5.Component=" and this test
    test("sap.ushell.components.container.render UI5 (SAPUI5.component=)", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer(),
            oControl = new sap.ui.core.Icon(), // any control with width and height is sufficient
            oRenderManager = new sap.ui.core.RenderManager();

        sinon.stub(sap.ushell.components.container, "createUi5Component")
            .returns(oControl);
        sinon.stub(sap.ushell.components.container, "renderControlInDiv");

        sap.ushell.components.container.render(oRenderManager.getRendererInterface(),
            oContainer, sap.ushell.components.container.ApplicationType.URL, sTESTURL,
            "SAPUI5.Component=some.random.path");
        ok(sap.ushell.components.container.createUi5Component.calledOnce);
        ok(sap.ushell.components.container.createUi5Component.calledWith(oContainer,
            sTESTURL, "some.random.path"));
        ok(sap.ushell.components.container.renderControlInDiv.calledWith(
            oRenderManager.getRendererInterface(),
            oContainer,
            oControl
        ));
    });

    // TODO get rid of "SAPUI5.Component=" and this test
    test("createUi5Component", function () {
        var oContainer = new sap.ushell.components.container.ApplicationContainer({
                applicationType: sap.ushell.components.container.ApplicationType.URL,
                url: 'http://anyhost:1234/sap/public/bc/ui2/staging/test?foo=bar&foo=baz&bar=baz',
                additionalInformation: 'SAPUI5.Component=some.random.path',
                width: "11%",
                height: "180px"
            }),
            oControl;

        sinon.spy(jQuery.sap, "registerModulePath");
        sinon.spy(jQuery.sap, "require");
        sinon.spy(jQuery.sap, "assert");
        sinon.spy(sap.ushell.components.container, "destroyChild");
        sinon.spy(sap.ui.core.Component, "activateCustomizing");
        sinon.spy(sap.ui, "component");

        oControl = sap.ushell.components.container.createUi5Component(oContainer,
                oContainer.getUrl(), 'some.random.path');

        ok(sap.ui.core.Component.activateCustomizing.calledWith("some.random.path"),
            "activated customizing");
        ok(sap.ui.core.Component.activateCustomizing.calledBefore(sap.ui.component),
            "activated customizing before creating the component");

        ok(sap.ushell.components.container.destroyChild.calledBefore(sap.ui.component),
            "child destroyed before creating the component");
        ok(jQuery.sap.registerModulePath.calledWithExactly("some.random.path",
            "http://anyhost:1234/sap/public/bc/ui2/staging/test/"),
            "registered the component correctly");
        ok(!jQuery.sap.registerModulePath.calledWith("sap.ca"), "did not register sap.ca");
        ok(jQuery.sap.require.calledWithExactly("sap.ushell.services.CrossApplicationNavigation"));

        strictEqual(oControl.getId(), oContainer.getId() + "-content", "component container ID");
        ok(oControl.getComponentInstance() instanceof some.random.path.Component,
            "created the correct component");
        strictEqual(oControl.getComponentInstance().getId(), oContainer.getId() + "-component",
            "component ID");
        deepEqual(oControl.getComponentInstance().getComponentData(),
                {startupParameters: {foo: ["bar", "baz"], bar: ["baz"]}},
                "passed the component data correctly");
        strictEqual(oControl.getWidth(), "11%");
        strictEqual(oControl.getHeight(), "180px");
        ok(oControl.hasStyleClass("sapUShellApplicationContainer"),
            "style sapUShellApplicationContainer applied");
        strictEqual(oControl.getParent(), oContainer, "control's parent is the container");
        ok(jQuery.sap.assert.neverCalledWith(sinon.match.falsy), "no failed asserts");
    });

    test("sap.ushell.components.container.ApplicationContainer invisible with Application", function () {
        var oApplication = getApplication(),
            oContainer = new sap.ushell.components.container.ApplicationContainer({
                application: oApplication,
                visible: false
            }),
            oRenderManager = new sap.ui.core.RenderManager();

        sinon.stub(sap.ushell.components.container, "render");
        oRenderManager.render(oContainer, document.createElement("DIV"));

        ok(sap.ushell.components.container.render.notCalled);
    });

    test("sap.ushell.components.container.ApplicationContainer Application rendering", function () {
        var oApplication = getApplication({
                type: sap.ushell.components.container.ApplicationType.URL,
                url: sTESTURL
            }),
            oContainer = new sap.ushell.components.container.ApplicationContainer({
                applicationType: sap.ushell.components.container.ApplicationType.WDA,
                application: oApplication,
                url: "/should/not/be/used",
                additionalInformation: "SAPUI5=should.not.be.used.view.xml"
            });

        renderAndExpect(oContainer, oApplication.getType(), oApplication.getUrl(), "");
    });

    asyncTest("sap.ushell.components.container.ApplicationContainer Application with resolve", function () {
        var oApplication = getApplication({
                text: "test application",
                url: "/should/not/be/used",
                resolvable: true
            }),
            oContainer = new sap.ushell.components.container.ApplicationContainer({
                application: oApplication,
                applicationType: sap.ushell.components.container.ApplicationType.WDA,
                url: "/should/not/be/used/either",
                additionalInformation: "SAPUI5=should.not.be.used.view.xml"
            }),
            oLaunchpadData = {
                applicationType: "URL",
                applicationData: "SAPUI5=some.random.view.xml",
                Absolute: {
                    url: sTESTURL + "?"
                }
            },
            oLogMock = sap.ui2.srvc.test.createLogMock()
                .filterComponent(sCONTAINER)
                .debug("Resolving " + oApplication.getUrl(), null, sCONTAINER)
                .debug("Resolved " + oApplication.getUrl(), JSON.stringify(oLaunchpadData),
                    sCONTAINER),
            oRenderManager = new sap.ui.core.RenderManager(),
            oLoadingIndicator;

        sinon.stub(oApplication, "resolve", function (fnSuccess, fnError) {
            // simulate the resolve: call success handler with (necessary) launchpad data
            sap.ui2.srvc.call(function () {
                fnSuccess(oLaunchpadData);
                // verify
                start();
                ok(oContainer.getAggregation("child") === null,
                    "Loading indicator has been deleted again");

                // As a consequence of the invalidate UI5 would render again; simulate this
                renderAndExpect(oContainer, "URL", sTESTURL, "SAPUI5=some.random.view.xml");

                oLogMock.verify();
            }, fnError, true);
        });

        sinon.stub(sap.ushell.components.container, "renderControlInDiv");

        oRenderManager.render(oContainer, document.createElement("DIV"));

        oLoadingIndicator = oContainer.getAggregation("child");
        ok(sap.ushell.components.container.renderControlInDiv.calledWith(
            oRenderManager.getRendererInterface(),
            oContainer,
            oLoadingIndicator
        ));
        ok(oLoadingIndicator.getText().indexOf(oApplication.getText()) >= 0,
            "Loading indicator text ok");
    });

    [undefined, sinon.spy()].forEach(function (fnApplicationErrorHandler) {
        var sResolveFailed = "resolve failed";
        asyncTest("sap.ushell.components.container.ApplicationContainer Application resolve error w/"
             + (fnApplicationErrorHandler ? "" : "o") + " error handler",
             function () {
                var oApplication = getApplication({
                    resolvable: true,
                    errorHandler: fnApplicationErrorHandler
                }),
                    oContainer = new sap.ushell.components.container.ApplicationContainer({
                        application: oApplication
                    }),
                    oDiv = document.createElement("DIV"),
                    oRenderManager = new sap.ui.core.RenderManager();

                sinon.spy(sap.ushell.components.container, "createErrorControl");
                sinon.stub(sap.ushell.components.container, "renderControlInDiv");
                sinon.stub(oApplication, "resolve", function (fnSuccess, fnError) {
                    sap.ui2.srvc.call(function () {
                        // simulate the resolve: call error handler (asynchronously)
                        fnError(sResolveFailed);

                        // verify
                        ok(sap.ushell.components.container.createErrorControl.notCalled);
                        if (fnApplicationErrorHandler) {
                            ok(fnApplicationErrorHandler.calledOnce);
                            ok(fnApplicationErrorHandler.calledWith(sResolveFailed));
                        }

                        // simulate SAPUI5's automatic re-rendering
                        oRenderManager.render(oContainer, oDiv);

                        // verify
                        start();
                        ok(sap.ushell.components.container.createErrorControl.calledOnce);
                        ok(sap.ushell.components.container.renderControlInDiv.calledWith(
                            oRenderManager.getRendererInterface(),
                            oContainer,
                            sap.ushell.components.container.createErrorControl.returnValues[0]
                        ));
                    }, sap.ui2.srvc.test.onError, true);
                });

                oRenderManager.render(oContainer, oDiv);
            });
    });

    //TODO test 2nd rendering should not recreate view
    //TODO add new HTML5 property seamless?!
}());
