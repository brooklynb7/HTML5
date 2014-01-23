//Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The UI integration's SAPUI5 control which supports application embedding.
 * @version 1.16.4
 */
(function () {
    "use strict";
    /*global jQuery, sap */

    var sPREFIX = "sap.ushell.components.container.",
        sCOMPONENT = sPREFIX + "ApplicationContainer",
        oResourceBundle;

    // Do not use the variables so that UI5 optimizers recognize this declaration
    jQuery.sap.declare("sap.ushell.components.container.ApplicationContainer");

    jQuery.sap.require("sap.ushell.utils");
    jQuery.sap.require("sap.ushell.library");
    jQuery.sap.require("sap.ui.core.UIComponent");
    // is only required for closing open dialogs;
    // TODO: dependency to sap.m should be removed when core has improved the
    // dialog life cycle handling
    jQuery.sap.require("sap.m.InstanceManager");

    /**
     * @namespace The application types supported by the embedding container.
     *
     * @since 1.15.0
     * @private
     */
    sap.ushell.components.container.ApplicationType = {
//          UI5: "UI5", // SAP UI development toolkit for HTML5
        /**
         * This type represents web applications identified by any uniform resource locator. They
         * will be embedded into an <code>IFRAME</code>.
         *
         * @constant
         * @default "URL"
         * @name sap.ushell.components.container.ApplicationType.URL
         * @since 1.15.0
         * @type string
         */
        URL: "URL",
        /**
         * This type represents applications built with Web Dynpro for ABAP. The embedding
         * container knows how to embed such applications in a smart way.
         *
         * @constant
         * @default "WDA"
         * @name sap.ushell.components.container.ApplicationType.WDA
         * @since 1.15.0
         * @type string
         */
        WDA: "WDA"
    };

    /**
     * Returns a map of all search parameters present in the search string of the given URL.
     *
     * @param {string} sUrl
     *   the URL
     * @returns {object}
     *   a <code>map&lt;string, string[]></code> from key to array of values
     * @private
     */
    sap.ushell.utils.testPublishAt(sap.ushell.components.container);
    function getParameterMap(sUrl) {
        // TODO use published API
        // discussed with Frank to request a function all() or get() without parameter
        return jQuery.sap.getUriParameters(sUrl).mParams;
    }

    /**
     * Returns a translated text from the resource bundle.
     *
     * @param {string} sKey
     *   the key in the resource bundle
     * @param {string[]} [aArgs]
     *   arguments to replace {0}..{9}
     * @returns {string}
     *   the translated text
     */
    sap.ushell.utils.testPublishAt(sap.ushell.components.container);
    function getTranslatedText(sKey, aArgs) {
        if (!oResourceBundle) {
            oResourceBundle = jQuery.sap.resources({
                url: jQuery.sap.getModulePath(sPREFIX) + "/resources/resources.properties",
                language: sap.ui.getCore().getConfiguration().getLanguage()
            });
        }
        return oResourceBundle.getText(sKey, aArgs);
    }

    /**
     * Creates some SAPUI5 control telling the user that an error has occured.
     *
     * @returns {sap.ui.core.Control}
     */
    sap.ushell.utils.testPublishAt(sap.ushell.components.container);
    function createErrorControl() {
        return new sap.ui.core.Icon({
            size: "2rem",
            src: "sap-icon://error",
            tooltip: getTranslatedText("an_error_has_occured")
        });
    }

    /**
     * Destroys the child aggregation. Takes care to deactivate the component's customizing in case
     * a component is embedded.
     */
    sap.ushell.utils.testPublishAt(sap.ushell.components.container);
    function destroyChild(oContainer) {
        var oChild = oContainer.getAggregation("child"),
            sComponentName;

        if (oChild instanceof sap.ui.core.ComponentContainer) {
            // name contains .Component - must be trimmed
            sComponentName = oChild.getComponentInstance().getMetadata().getName()
                .replace(/\.Component$/, "");
            jQuery.sap.log.debug("unloading component " + sComponentName, null, sCOMPONENT);
        }
        oContainer.destroyAggregation("child");
        if (sComponentName) {
            sap.ui.core.Component.deactivateCustomizing(sComponentName);
        }

        // in UI5 1.16, dialogs are not automatically closed and destroyed when
        // the component is destroyed
        // therefore, we close all open dialogs centrally here;
        // TODO: handling should be improved by ui5 core
        // see internal CSN 0003688065 2013
        if (sap.m.InstanceManager.hasOpenPopover()) {
            sap.m.InstanceManager.closeAllPopovers();
        }
        if (sap.m.InstanceManager.hasOpenDialog()) {
            // log a warning, because dialog instances are still present and
            // could lead to memory leaks or duplicate-id errors
            jQuery.sap.log
                    .warning(
                            "Found open dialogs after destruction of component '"
                                    + sComponentName
                                    + "'. Dialogs must be destroyed in component exit handler.",
                            null, sCOMPONENT);
            sap.m.InstanceManager.closeAllDialogs();
        }
    }

    /**
     * Creates a new SAPUI5 view or component for the given container and makes it a child. A view
     * is created if the name ends with ".view.(viewType)".
     * @param {sap.ushell.components.container.ApplicationContainer} oContainer
     *   the container
     * @param {string} sUrl
     *   the base URL
     * @param {string} sAdditionalInformation
     *   the additional information in the form "SAPUI5=<view_or_component_name>"
     * @returns {sap.ui.core.mvc.View|sap.ui.core.Control}
     *   the view, or some "error" control
     */
    sap.ushell.utils.testPublishAt(sap.ushell.components.container);
    function createUi5View(oContainer, sUrl, sAdditionalInformation) {
        /*jslint regexp: true */
        var oComponent,
            oControl,
            iIndex,
            iLast,
            aMatches,
            sNamespace,
            oViewData,
            sViewName,
            sViewType;

        iIndex = sUrl.indexOf("?");
        if (iIndex >= 0) {
            // pass GET parameters of URL via view data
            oViewData = getParameterMap(sUrl);
            sUrl = sUrl.slice(0, iIndex);
        }

        if (sUrl.slice(-1) !== '/') {
            sUrl += '/'; // ensure URL ends with a slash
        }

        if (/\.view\.(\w+)$/i.test(sAdditionalInformation)) {
            // ends with ".view.(viewType)": a view description
            // /SAPUI5=(namespace)/(viewName).view.(viewType)/
            aMatches = /^SAPUI5=(?:([^\/]+)\/)?([^\/]+)\.view\.(\w+)$/i.exec(sAdditionalInformation);
            if (!aMatches) {
                jQuery.sap.log.error("Invalid SAPUI5 URL", sAdditionalInformation, sCOMPONENT);
                return createErrorControl();
            }
            // determine namespace, view name, and view type
            sNamespace = aMatches[1];
            sViewName = aMatches[2];
            sViewType = aMatches[3].toUpperCase(); // @see sap.ui.core.mvc.ViewType

            if (sNamespace) {
                // prefix view name with namespace
                sViewName = sNamespace + "." + sViewName;
            } else {
                // derive namespace from view name's "package"
                iLast = sViewName.lastIndexOf(".");
                if (iLast < 1) {
                    jQuery.sap.log.error("Missing namespace", sAdditionalInformation, sCOMPONENT);
                    return createErrorControl();
                }
                sNamespace = sViewName.slice(0, iLast);
            }
        } else {
            // a component
            sNamespace = sAdditionalInformation.replace(/^SAPUI5=/, "");
        }

        jQuery.sap.registerModulePath(sNamespace, sUrl + sNamespace.replace(/\./g, '/'));

        // destroy the child control before creating a new control with the same ID
        destroyChild(oContainer);
        if (sViewName) {
            oControl = sap.ui.view({
                id: oContainer.getId() + "-content",
                type: sViewType,
                viewData: oViewData || {},
                viewName: sViewName
            });
        } else {
            jQuery.sap.log.debug("loading component " + sNamespace, null, sCOMPONENT);

            // activate the customizing for the new component before creation
            sap.ui.core.Component.activateCustomizing(sNamespace);

            oComponent = sap.ui.component({
                id: oContainer.getId() + "-component",
                componentData: oViewData ? {startupParameters: oViewData} : {},
                name: sNamespace
            });
            oControl = new sap.ui.core.ComponentContainer({
                id: oContainer.getId() + "-content",
                component: oComponent
            });
        }
        oControl.setWidth(oContainer.getWidth());
        oControl.setHeight(oContainer.getHeight());
        oControl.addStyleClass("sapUShellApplicationContainer");
        // Note: As a composite control, we need to aggregate our children (at least internally)!
        oContainer.setAggregation("child", oControl, true);
        return oControl;
    }

    /**
     * Creates a new SAPUI5 component for the given container and makes it a child.
     * @param {sap.ushell.components.container.ApplicationContainer} oContainer
     *   the container
     * @param {string} sUrl
     *   the base URL
     * @param {string} sAdditionalInformation
     *   the additional information in the form "SAPUI5.Component=&lt;component-name&gt;"
     * @returns {sap.ui.core.ComponentContainer|sap.ui.core.Control}
     *   a componentContainer for the component or or some "error" control
     */
    sap.ushell.utils.testPublishAt(sap.ushell.components.container);
    function createUi5Component(oContainer, sUrl, sComponentName) {
        /*jslint regexp: true */
        var iIndex,
            aMatches,
            oComponent,
            oComponentContainer,
            oComponentData = {};

        iIndex = sUrl.indexOf("?");
        if (iIndex >= 0) {
            // pass GET parameters of URL via component data as member startupParameters (to allow
            // blending with other oComponentData usage, e.g. extensibility use case)
            oComponentData = { startupParameters : getParameterMap(sUrl) };
            sUrl = sUrl.slice(0, iIndex);
        }

        if (sUrl.slice(-1) !== '/') {
            sUrl += '/'; // ensure URL ends with a slash
        }
        // the root component's name is also the namespace for all component-internal modules; so
        // we register the URL (which must point to the component's folder) as module path;
        // TODO: clarify if there are requirements for additional path components
        jQuery.sap.registerModulePath(sComponentName, sUrl);

        // applications require these but should not load it, to degrade carefully
        // when running outside of the shell, so we must require this
        jQuery.sap.require("sap.ushell.services.CrossApplicationNavigation");

        // destroy the child control before creating a new control with the same ID
        destroyChild(oContainer);

        jQuery.sap.log.debug("loading component " + sComponentName, null, sCOMPONENT);

        // activate the customizing for the new component before creation
        sap.ui.core.Component.activateCustomizing(sComponentName);

        oComponent = sap.ui.component({
            id: oContainer.getId() + "-component",
            name: sComponentName,
            componentData: oComponentData
        });

        oComponentContainer = new sap.ui.core.ComponentContainer({
            id: oContainer.getId() + "-content",
            component: oComponent
        });
        oComponentContainer.setHeight(oContainer.getHeight());
        oComponentContainer.setWidth(oContainer.getWidth());
        oComponentContainer.addStyleClass("sapUShellApplicationContainer");

        // Note: As a composite control, we need to aggregate our children (at least internally)!
        oContainer.setAggregation("child", oComponentContainer, true);

        return oComponentContainer;
    }

    /**
     * Renders the given child control inside a DIV representing the given container.
     *
     * @param {sap.ui.core.RenderManager} oRenderManager
     * @param {sap.ushell.components.container.ApplicationContainer} oContainer
     *     the application container which is "replaced" by the error control
     * @param {sap.ui.core.Control} [oChild]
     */
    sap.ushell.utils.testPublishAt(sap.ushell.components.container);
    function renderControlInDiv(oRenderManager, oContainer, oChild) {
        oRenderManager
            .write("<div")
            .writeControlData(oContainer)
            .writeAccessibilityState(oContainer)
            .addClass("sapUShellApplicationContainer")
            .writeClasses(oContainer)
            .addStyle("height", oContainer.getHeight())
            .addStyle("width", oContainer.getWidth())
            .writeStyles()
            .write(">")
            .renderControl(oChild);
        oRenderManager
            .write("</div>");
    }

    /**
     * Renders the given container control with the help of the given render manager using the given
     * attributes.
     *
     * @param {sap.ui.core.RenderManager} oRenderManager
     * @param {sap.ushell.components.container.ApplicationContainer} oContainer
     * @param {sap.ushell.components.container.ApplicationType} sApplicationType
     *   the application type
     * @param {string} sUrl
     *   the base URL
     * @param {string} sAdditionalInformation
     *   the additional information in the form "SAPUI5=&lt;view name&gt;"
     */
    sap.ushell.utils.testPublishAt(sap.ushell.components.container);
    function render(oRenderManager, oContainer, sApplicationType, sUrl, sAdditionalInformation) {

        // render as SAPUI5 component if specified in additionalInformation
        if (sAdditionalInformation
                && sAdditionalInformation.indexOf("SAPUI5.Component=") === 0
                && sApplicationType === sap.ushell.components.container.ApplicationType.URL) {
            renderControlInDiv(oRenderManager, oContainer,
                createUi5Component(oContainer, sUrl,
                    sAdditionalInformation.replace(/^SAPUI5\.Component=/, "")));
            return;
        }

        // render as SAPUI5 view if specified in additionalInformation
        if (sAdditionalInformation
                && sAdditionalInformation.indexOf("SAPUI5=") === 0
                && sApplicationType === sap.ushell.components.container.ApplicationType.URL) {
            renderControlInDiv(oRenderManager, oContainer,
                createUi5View(oContainer, sUrl, sAdditionalInformation));
            return;
        }
        jQuery.sap.log.debug("Not resolved as \"SAPUI5.Component=\" or \"SAPUI5=\" , " +
            "will attempt to load into iframe " + sAdditionalInformation);

        try {
            sUrl = oContainer.getFrameSource(sApplicationType, sUrl, sAdditionalInformation);
        } catch (ex) {
            jQuery.sap.log.error(ex.message || ex, null, sCOMPONENT);
            oRenderManager.renderControl(createErrorControl());
            return;
        }

        // embed URL via <IFRAME>
        oRenderManager
            .write("<iframe")
            .writeControlData(oContainer)
            .writeAccessibilityState(oContainer)
            // Note: While this does not help against malicious scripts, it should protect against
            // accidental top-level navigation.
            .writeAttribute("sandbox", "allow-forms allow-same-origin allow-scripts")
            .writeAttributeEscaped("src", sUrl)
            .addClass("sapUShellApplicationContainer")
            .writeClasses(oContainer)
            .addStyle("height", oContainer.getHeight())
            .addStyle("width", oContainer.getWidth())
            .writeStyles()
            .write("></iframe>");
    }

    /**
     * Creates a new container control embedding the application with the given URL. The default
     * application type is "URL" and allows to embed web applications into an <code>IFRAME</code>.
     * By default, the container is visible and occupies the whole width and height of its parent.
     *
     * @class A container control capable of embedding a variety of application types.
     * <p>
     * <strong>Experimental API: This container is still under construction, so some
     * implementation details can be changed in future.</strong>
     * </p><p>
     * <b>Note:</b> The browser does not allow to move an <code>IFRAME</code> around in the DOM
     * while keeping its state. Thus every rerendering of this control necessarily resets the
     * embedded web application to its initial state!
     * </p><p>
     * <b>Note:</b> You <b>must</b> <code>exit</code> the control when you no longer need it.
     *
     * </p><p>
     * <b>Embedding SAPUI5 Components:</b>
     * </p><p>
     * The container is able to embed an SAPUI5 component. It is embedded directly into the page,
     * no <code>IFRAME</code> is used.
     * </p><p>
     * SAPUI5 components are described with <code>applicationType</code> "URL", a base URL and the
     * component name in <code>additionalInformation</code>. The format is
     * <code>SAPUI5=<i>componentNamespace</i></code>. The application container will register a
     * module path for the URL with the component's namespace.
     * </p><p>
     * The query parameters from the URL will be passed into the component. They can be retrieved
     * using the method <code>getComponentData()</code>. Query parameters are always passed as
     * arrays (see example 2 below).
     * </p><p>
     * <b>Example 1:</b> Let <code>url</code> be "http://anyhost:1234/path/to/app" and
     * <code>additionalInformation</code> be "SAPUI5=some.random.package". Then the
     * container registers the path "http://anyhost:1234/path/to/app/some/random/package" for the
     * namespace "some.random.package", loads and creates "some.random.package.Component".
     * </p><p>
     * <b>Example 2:</b> Let <code>url</code> be "http://anyhost:1234/?foo=bar&foo=baz&bar=baz".
     * Then the <code>componentData</code> object will be
     * <code>{foo: ["bar", "baz"], bar: ["baz"]}</code>.
     * </p><p>
     * <b>Warning:</b> The container control embeds a <i>component</i> only. This can only work if
     * this component is fully encapsulated and properly declares all dependencies in its metadata
     * object. If you want to support that your component can be embedded into a shell using this
     * container, you have to prepare it accordingly:
     * <ul>
     * <li>The container control can only embed components that originate on the same server as the
     * shell due to the browser's same origin policy. Consider using an SAP Web Dispatcher if this
     * is not the case.
     * <li>If your component relies on some additional Javascript, declare the dependencies to
     * libraries or other components in the component's metadata object.
     * <li>Do <i>not</i> use <code>jQuery.sap.registerModulePath()</code> with a relative URL. The
     * base for this relative URL is the web page. And this page is the shell when embedding the
     * component via the container, not the page you used when developing the component.
     * <li>If your component needs additional styles, declare them using the <code>includes</code>
     * property of the component metadata object.
     * <li> Consider calling <code>jQuery.sap.getModulePath(&lt;componentName&gt;)</code> to
     * determine the root path of your component.
     * <li>If any of these requirements is not met, it is still possible to embed this view with
     * its own page using <code>applicationType="URL"</code>, no <code>additionalInformation</code>
     * and the URL of the web page in <code>url</code>. Then of course it is embedded using an
     * <code>IFRAME</code>. This has many limitations, especially the resource-based navigation
     * using hash changes will not be supported.
     * </ul>
     *
     * </p><p>
     * <b>Embedding SAPUI5 Views</b>
     * <p>
     * Embedding views is <strong>deprecated</strong> and might not be supported in future versions.
     * </p>
     * <p>
     * It is also possible to embed a SAPUI5 view. It is embedded directly into the page, no
     * <code>IFRAME</code> is used.
     * </p><p>
     * SAPUI5 views are described with <code>applicationType</code> "URL", a base URL and the view
     * description in <code>additionalInformation</code>. The format is
     * <code>SAPUI5=<i>namespace</i>.<i>viewName</i>.view.<i>viewType</i></code>. From
     * this information the module path and the view URL is determined. Request parameters present
     * in the URL will be passed to the created view and can be accessed via
     * <code>sap.ui.core.mvc.View#getViewData()</code>. The object passed to the view data is the
     * same as describe for the component data above.
     * </p><p>
     * <b>Warning:</b> The container control embeds a <i>view</i> only. So similar restrictions
     * as for components apply. Since the view has no metadata object to describe dependencies you
     * will have to use <code>jQuery.sap.require()</code> to load needed modules and
     * <code>jQuery.sap.includeStyleSheet()</code> to load additional styles.
     *
     * @extends sap.ui.core.Control
     * @name sap.ushell.components.container.ApplicationContainer
     * @since 1.15.0
     *
     * @property {string} [additionalInformation=""]
     *   Additional information about the application. Currently this is used to describe a SAPUI5
     *   component or a view in a SAPUI5 application.
     * @property {object} [application]
     *   The application descriptor as received from the start-up service. If an application is
     *   given the properties <code>url</code>, <code>applicationType</code> and
     *   <code>additionalInformation</code> are taken from the application and <i>not</i> from the
     *   control properties.
     * @property {sap.ushell.components.container.ApplicationType} [applicationType="URL"]
     *   The type of the embedded application.
     * @property {sap.ui.core.CSSSize} [height="100%"]
     *   The container's height as a CSS size. This attribute is provided to the browser "as is"!
     *   <b>Note:</b> The HTML 4.01 specification allows pixels and percentages,
     *   but the HTML 5 specification allows pixels only!
     * @property {string} url
     *   The URL to the embedded application.
     * @property {boolean} [visible="true"]
     *   Whether the container control is visible at all. <b>Note:</b> An invisible container does
     *   not render any DOM content. Changing the visibility leads to rerendering!
     * @property {sap.ui.core.CSSSize} [width="100%"]
     *   The container's width as a CSS size. This attribute is provided to the browser "as is"!
     *   <b>Note:</b> The HTML 4.01 specification allows pixels and percentages,
     *   but the HTML 5 specification allows pixels only!
     */
    sap.ui.core.Control.extend(sCOMPONENT, {
        metadata: {
            properties: {
                additionalInformation: {defaultValue: "", type: "string"},
                application: {type: "object"},
                applicationType: {defaultValue: "URL", type: sPREFIX + "ApplicationType"},
                height: {defaultValue: "100%", type: "sap.ui.core.CSSSize"},
                url: {defaultValue: "", type: "string"},
                visible: {defaultValue: true, type: "boolean"},
                width: {defaultValue: "100%", type: "sap.ui.core.CSSSize"}
            },
            aggregations: {
                child: {multiple: false, type: "sap.ui.core.Control", visibility: "hidden"}
            },
            library: "sap.ushell"
        },

        exit: function () {
            destroyChild(this);
            // just to be sure in case it will be added some time
            if (sap.ui.core.Control.exit) {
                sap.ui.core.Control.exit.apply(this);
            }
        },

        /**
         * Renders the given container control with the help of the given render manager.
         *
         * @param {sap.ui.core.RenderManager} oRenderManager
         * @param {sap.ushell.components.container.ApplicationContainer} oContainer
         *
         * @private
         */
        renderer: function (oRenderManager, oContainer) {
            // Note: "this" refers to the renderer instance, which does not matter here!
            var oApplication = oContainer.getApplication(),
                oLaunchpadData = oContainer.launchpadData,
                oLoadingIndicator;

            if (!oContainer.getVisible()) {
                // Note: even invisible controls need to render their ID for later re-rendering
                renderControlInDiv(oRenderManager, oContainer);
                return;
            }

            if (oContainer.error) {
                delete oContainer.error;
                renderControlInDiv(oRenderManager, oContainer, createErrorControl());
            } else if (!oApplication) {
                // the standard properties
                render(oRenderManager, oContainer, oContainer.getApplicationType(),
                    oContainer.getUrl(), oContainer.getAdditionalInformation());
            } else if (!oApplication.isResolvable()) {
                // the standard application data
                render(oRenderManager, oContainer, oApplication.getType(),
                    oApplication.getUrl(), "");
            } else if (oLaunchpadData) {
                // the application, already resolved
                // Note that ResolveLink appends a "?" to the URL if additionalData (aka
                // additionalInformation) is supplied.
                render(oRenderManager, oContainer, oLaunchpadData.applicationType,
                    oLaunchpadData.Absolute.url.replace(/\?$/, ""),
                    oLaunchpadData.applicationData);
            } else {
                jQuery.sap.log.debug("Resolving " + oApplication.getUrl(), null,
                    sCOMPONENT);

                oApplication.resolve(function (oResolved) {
                    jQuery.sap.log.debug("Resolved " + oApplication.getUrl(),
                        JSON.stringify(oResolved),
                        sCOMPONENT);
                    // TODO where to keep the internal property launchpadData? At the Application!
                    oContainer.launchpadData = oResolved;
                    destroyChild(oContainer);
                }, function (sError) {
                    var fnApplicationErrorHandler = oApplication.getMenu().getDefaultErrorHandler();
                    if (fnApplicationErrorHandler) {
                        fnApplicationErrorHandler(sError);
                    }
                    destroyChild(oContainer);
                    oContainer.error = sError;
                });
                oLoadingIndicator = new sap.m.Text({
                    text: getTranslatedText("loading", [oApplication.getText()])
                });
                destroyChild(oContainer);
                oContainer.setAggregation("child", oLoadingIndicator);
                renderControlInDiv(oRenderManager, oContainer, oLoadingIndicator);
            }
        }
    });

    /**
     * Returns the resulting source URL for the (internal) frame used to embed the given application.
     * This hook method may be overridden; we recommend to replace it per object, not at the
     * prototype.
     * <p>
     * The default implementation returns the URL "as is", but checks that the given application
     * type is one of <code>sap.ushell.components.container.ApplicationType</code> and throws
     * an error in case it is not. It ignores the additional information.
     * <p>
     * You may want to end your implementation with
     * <code>return
     * sap.ushell.components.container.ApplicationContainer.prototype.getFrameSource.call(this,
     * sApplicationType, sUrl, sAdditionalInformation);</code> in order to reuse the default
     * behavior. To override the error checks, simply replace any additional application types you
     * wish to support with <code>sap.ushell.components.container.ApplicationType.URL</code>.
     *
     * @param {sap.ushell.components.container.ApplicationType} sApplicationType
     *   the application type
     * @param {string} sUrl
     *   the base URL
     * @param {string} sAdditionalInformation
     *   the additional information
     * @returns {string}
     * @since 1.15.0
     */
    sap.ushell.components.container.ApplicationContainer.prototype.getFrameSource
        = function (sApplicationType, sUrl, sAdditionalInformation) {
            if (!Object.prototype.hasOwnProperty.call(
                    sap.ushell.components.container.ApplicationType,
                    sApplicationType
                )) {
                // Note: do not use sap.ushell.utils.Error here as the exception is already caught
                // and logged in render()
                throw new Error("Illegal application type: " + sApplicationType);
            }
            return sUrl;
        };
}());
