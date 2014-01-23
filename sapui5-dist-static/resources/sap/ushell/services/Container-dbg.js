// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The Unified Shell's container which manages renderers, services, and adapters.
 *
 * @version 1.16.4
 */
/**
 * @namespace Namespace for Unified Shell.
 *
 * @name sap.ushell
 * @see sap.ushell.adapters
 * @see sap.ushell.renderers
 * @see sap.ushell.services
 * @since 1.15.0
 * @public
 */
/**
 * @namespace Default namespace for Unified Shell adapters. Note that there should be subordinate
 * namespaces per platform, e.g. <code>sap.ushell.adapters.abap</code> or
 * <code>sap.ushell.adapters.demo</code>.
 *
 * @name sap.ushell.adapters
 * @see sap.ushell.adapters.abap
 * @see sap.ushell.adapters.demo
 * @since 1.15.0
 * @public
 */
/**
 * @namespace Default namespace for Unified Shell renderers. Note that there should be subordinate
 * namespaces per renderer, e.g. <code>sap.ushell.renderers.standard</code>.
 *
 * @name sap.ushell.renderers
 * @see sap.ushell.renderers.standard
 * @since 1.15.0
 * @public
 */
/**
 * @namespace Default namespace for Unified Shell services. They can usually be placed directly
 * into this namespace, e.g. <code>sap.ushell.services.Container</code>.
 *
 * @name sap.ushell.services
 * @see sap.ushell.services.Container
 * @since 1.15.0
 * @public
 */
(function () {
    "use strict";
    /*global jQuery, sap, setTimeout, window */
    jQuery.sap.declare("sap.ushell.services.Container");

    jQuery.sap.require("sap.ushell.utils");
    jQuery.sap.require("sap.ushell.System");

    /**
     * Creates an adapter. Loads the adapter module if necessary. The resulting module name is
     * <code>"sap.ushell.adapters." + oSystem.platform + "." + sName + "Adapter"</code>.
     *
     * @param {string} sName
     *     the adapter name
     * @param {sap.ushell.System} [oSystem]
     *     the target system, if <code>undefined</code> the logon system is used
     * @param {string} [sParameter]
     *     a parameter which is passed to the constructor (since 1.15.0)
     * @returns {object}
     *     the adapter
     * @public
     */
    function createAdapter(sName, oSystem, sParameter) {
        var sAdapterName
            = "sap.ushell.adapters." + oSystem.getPlatform() + "." + sName + "Adapter";
        jQuery.sap.require(sAdapterName);
        return new (jQuery.sap.getObject(sAdapterName))(oSystem, sParameter);
    }

    /**
     * @class The Unified Shell's container which manages renderers, services, and adapters.
     *
     * @name sap.ushell.services.Container
     * @see sap.ushell.bootstrap
     * @since 1.15.0
     * @public
     */
    /**
     * Constructs a new Unified Shell container for the given container adapter.
     *
     * @param {object} oAdapter
     *     the platform-specific adapter corresponding to this service
     *
     * @private
     * @since 1.15.0
     */
    function Container(oAdapter) {
        var mServicesByName = new sap.ushell.utils.Map(),
            mRemoteSystems = {};

        /**
         * Creates a new renderer instance for the given renderer name.
         * <p>
         * Names without a dot are interpreted as package names within the default naming convention
         * and will be expanded to
         * <code>"sap.ushell.renderers." + sRendererName + ".Renderer"</code>.
         * Names containing a dot are used "as is".
         * <p>
         * The resulting name must point to a SAPUI5 object which is first required and then
         * created (constructor call without arguments).
         * The object must be either a control (i.e. extend <code>sap.ui.core.Control</code>) or a
         * UI component (i.e. extend <code>sap.ui.core.UIComponent</code>), which is then
         * automatically wrapped into a <code>sap.ui.core.ComponentContainer</code> control by this
         * method! This <code>sap.ui.core.ComponentContainer</code> is created with
         * <code>height</code> and <code>width</code> set to "100%" to accommodate the complete
         * available space.
         * <p>
         * The returned renderer is supposed to be added to a direct child (e.g. <code>DIV</code>)
         * of the <code>BODY</code> of the page and there should be no other parts of the page
         * consuming space outside the renderer.
         * Use CSS class <code>sapUShellFullHeight</code> at <code>HTML</code>, <code>BODY</code>
         * and at the element to which the renderer is added to allow the renderer to use 100%
         * height.
         *
         * @param {string} sRendererName
         *     the renderer name, e.g. "standard" or "acme.foo.bar.MyRenderer"
         * @returns {sap.ui.core.Control}
         *     the renderer
         *
         * @methodOf sap.ushell.services.Container#
         * @name createRenderer
         * @since 1.15.0
         * @public
         */
        this.createRenderer = function (sRendererName) {
            var sComponentName, oRenderer;

            if (!sRendererName) {
                throw new Error("Missing renderer name");
            }
            sComponentName = sRendererName.indexOf(".") < 0
                ? "sap.ushell.renderers." + sRendererName + ".Renderer"
                : sRendererName;
            jQuery.sap.require(sComponentName);
            oRenderer = new (jQuery.sap.getObject(sComponentName))();
            if (oRenderer instanceof sap.ui.core.UIComponent) {
                oRenderer = new sap.ui.core.ComponentContainer(
                    {component: oRenderer, height: "100%", width: "100%"}
                );
            }
            if (!(oRenderer instanceof sap.ui.core.Control)) {
                throw new Error("Unsupported renderer type for name " + sRendererName);
            }
            return oRenderer;
        };

        /**
         * Returns the logon system.
         *
         * @returns {sap.ushell.System}
         *     object providing information about the system where the container is logged in.
         *     since 1.15.0 the return value is of type <code>sap.ushell.System</code>
         *
         * @since 1.15.0
         * @private
         */
        this.getLogonSystem = function () {
            return oAdapter.getSystem();
        };

        /**
         * Returns the logged-in user.
         *
         * @returns {sap.ushell.User}
         *      object providing information about the logged-in user
         *
         * @since 1.15.0
         * @private
         */
        this.getUser = function () {
            return oAdapter.getUser();
        };

        /**
         * Gets the service with the given name, creating it if necessary. Services are singleton
         * objects identified by their (resulting) name.
         * <p>
         * Names without a dot are interpreted as service names within the default naming convention
         * and will be expanded to <code>"sap.ushell.services." + sServiceName</code>.
         * Names containing a dot are not yet supported!
         * The resulting name must point to a constructor function which is first required as a
         * SAPUI5 module and then called to create a service instance. The service will be passed a
         * corresponding service adapter for the current logon system as well as a callback
         * interface (of virtual type <code>sap.ushell.services.ContainerInterface</code>) to the
         * container providing a method <code>createAdapter(oSystem)</code> to create further
         * adapters for the same service but connected to remote systems.
         *
         * @param {string} sServiceName
         *     the service name, e.g. "Menu"
         * @param {string} [sParameter]
         *     a parameter which is passed to the service constructor and every adapter
         *     constructor. (since 1.15.0)
         * @returns {object}
         *     the service
         *
         * @methodOf sap.ushell.services.Container#
         * @name getService
         * @see sap.ushell.services.ContainerInterface
         * @since 1.15.0
         * @public
         */
        this.getService = function (sServiceName, sParameter) {
            /**
             * @class This is a virtual type for the callback interface passed by
             * {@link sap.ui.Container.getService()} to any newly created service.
             * @name sap.ushell.services.ContainerInterface
             * @see sap.ushell.services.Container#getService
             * @since 1.15.0
             * @public
             */
            var oContainerInterface = {},
                sModuleName = "sap.ushell.services." + sServiceName,
                sKey = sModuleName + "/" + (sParameter || ""),
                Service, // Service constructor function
                oService,
                oServiceAdapter;

            /**
             * Creates a new adapter for the given remote system, corresponding to the service
             * this container interface was passed to at construction time.
             *
             * @param {sap.ushell.System} oSystem
             *     information about the remote system to which the resulting adapter should
             *     connect
             * @returns {jQuery.Deferred}
             *     a <code>jQuery.Deferred</code> object's promise receiving the remote adapter
             *
             * @name createAdapter
             * @methodOf sap.ushell.services.ContainerInterface#
             * @since 1.15.0
             * @public
             */
            function createRemoteAdapter(oSystem) {
                var oDeferred = new jQuery.Deferred();
                if (!oSystem) {
                    throw new Error("Missing system");
                }
                // Note: this might become really asynchronous once the remote adapter is loaded
                // from the remote system itself
                oDeferred.resolve(createAdapter(sServiceName, oSystem, sParameter));
                sap.ushell.Container.addRemoteSystem(oSystem);
                return oDeferred.promise();
            }

            if (!sServiceName) {
                throw new Error("Missing service name");
            }
            if (sServiceName.indexOf(".") >= 0) {
                //TODO support this once we have some configuration and can thus find adapters
                throw new Error("Unsupported service name");
            }
            if (!mServicesByName.containsKey(sKey)) {
                jQuery.sap.require(sModuleName);
                Service = jQuery.sap.getObject(sModuleName);

                if (Service.hasNoAdapter === true) {
                    // has no adapter: pass container interface and parameter
                    oService = new Service(oContainerInterface, sParameter);
                } else {
                    // pass adapter for logon system as well as container interface and parameter
                    oServiceAdapter
                        = createAdapter(sServiceName, oAdapter.getSystem(), sParameter);
                    oContainerInterface.createAdapter = createRemoteAdapter;
                    oService = new Service(oServiceAdapter, oContainerInterface, sParameter);
                }

                mServicesByName.put(sKey, oService);
                return oService;
            }
            return mServicesByName.get(sKey);
        };

        /**
         * Adds a system to the list of involved remote systems. When calling logout()
         * this list is processed to do the logout for via its specific adapter.
         *
         * @param  {sap.ushell.System} oRemoteSystem
         *
         * @since 1.15.0
         * @public
         */
        this.addRemoteSystem = function (oRemoteSystem) {
            //TODO: check equality by (alias,baseUrl,platform?)
            if (Object.prototype.hasOwnProperty.call(mRemoteSystems, oRemoteSystem.getAlias())) {
                jQuery.sap.log.debug("Remote system " + JSON.stringify(oRemoteSystem)
                    + "already added!", null, "sap.ushell.Container");
                return;
            }

            mRemoteSystems[oRemoteSystem.getAlias()] = oRemoteSystem;
            jQuery.sap.log.debug("Added " + JSON.stringify(oRemoteSystem), null,
                "sap.ushell.Container");
        };

        /**
         * Logs out the current user from all relevant backend systems, especially from the logon
         * system itself.
         * @returns {jQuery.Deferred}
         *          a <code>jQuery.Deferred</code> object's promise to be resolved when logout is
         *          finished, even when it failed
         * @since 1.15.0
         * @public
         */
        this.logout = function () {
            var oDeferred = new jQuery.Deferred(),
                aRemoteLogoutPromises = [];

            function addRemoteSystems(oContainerInterface) {
                var oDeferredReadCatalogs = new jQuery.Deferred(),
                    oPbs;

                oPbs = oContainerInterface.getService("PageBuilding").getFactory().
                    getPageBuildingService();

                oPbs.readAllCatalogsForUser("type eq 'H'",
                    function (oData) { //success handler
                        var aCatalogs = oData.results;
                        if (aCatalogs) {
                            aCatalogs.forEach(function (oCatalog) {
                                oContainerInterface.addRemoteSystem(new sap.ushell.System({
                                    alias : oCatalog.systemId,
                                    platform: "hana"
                                }));
                            });
                        }
                        oDeferredReadCatalogs.resolve();
                    },
                    function (sError) {//error handler
                        jQuery.sap.log.error("Reading HANA catalogs failed: " + sError, null,
                            "sap.ushell.Container");
                        oDeferredReadCatalogs.reject();
                    });
                return oDeferredReadCatalogs.promise();
            }

            // do the logout for each remote system
            addRemoteSystems(this).always(function () {
                Object.keys(mRemoteSystems).forEach(function (sAlias) {
                    aRemoteLogoutPromises.push(
                        createAdapter("Container", mRemoteSystems[sAlias]).logout(false)
                    );
                });

                // wait for all remote logouts to be finished
                jQuery.when.apply(jQuery, aRemoteLogoutPromises).done(function () {
                    // do the logout for the logon system
                    oAdapter.logout(true);
                    mRemoteSystems = {};
                    oDeferred.resolve();
                });
            });
            return oDeferred.promise();
        };
    }

    /**
     * Initializes the Unified Shell container for the given platform. This method must be called
     * exactly once in the very beginning by platform-specific code in order to bootstrap the
     * container. As soon as the returned promise has been resolved, the container will be available
     * as a singleton object <code>sap.ushell.Container</code>.
     * <p>
     * For convenience, platform-specific bootstrap code is available and can be easily included
     * (<b>before</b> the SAPUI5 bootstrap) by a corporate shell as follows:
     * <pre>
     * &lt;script src="/sap/public/bc/ui5_ui5/resources/sap/ushell_abap/bootstrap/abap.js"&gt;&lt;/script&gt;
     * &lt;script id="sap-ui-bootstrap" src=".../sap-ui-core.js"&gt;&lt;/script&gt;
     * </pre>
     * This bootstrap code will automatically defer the initialization of SAPUI5 until the
     * container is available. This is the preferred way of bootstrapping the Unified Shell!
     * <p>
     * Note: For SAPUI5 application projects the recommended way is to add a dependency to the
     * "sap.ushell_abap" library (<code>&lt;groupId&gt;com.sap.ushell&lt;/groupId&gt;
     * &lt;artifactId&gt;ushell_abap&lt;/artifactId&gt;</code>) and load the bootstrap code via the
     * application's resources folder:
     * <pre>
     * &lt;script src=".../resources/sap/ushell_abap/bootstrap/abap.js"&gt;&lt;/script&gt;
     * &lt;script id="sap-ui-bootstrap" src=".../sap-ui-core.js"&gt;&lt;/script&gt;
     * </pre>
     * <p>
     * Since 1.15.0 you can provide a function named
     * <code>window['sap.ushell.bootstrap.callback']</code> to be called back from this method
     * in an asynchronous fashion. SAPUI5's bootstrap is ongoing then (same restrictions apply
     * like for <code>window['sap-ui-config']['xx-bootTask']</code>) and the Unified Shell
     * container has not yet finished its bootstrap! You cannot delay the bootstrap of SAPUI5 or
     * the Unified Shell container and any errors will be ignored! This callback is useful in
     * order to send asynchronous backend requests at the earliest opportunity without delaying
     * the core bootstrap of SAPUI5 and Unified Shell container.
     *
     * @param {string} sPlatform
     *     the target platform, e.g. "abap" or "demo" (Note: there is no fixed enumeration of
     *     possible platforms!)
     * @returns {jQuery.Promise}
     *     a promise that is resolved once the container is available
     *
     * @see sap.ushell.Container
     * @since 1.15.0
     * @public
     */
    sap.ushell.bootstrap = function (sPlatform) {
        var oAdapter;

        if (sap.ushell.Container !== undefined) {
            throw new Error("Cannot initialize twice");
        }
        sap.ushell.Container = null; // "loading..."

        if (typeof window["sap.ushell.bootstrap.callback"] === "function") {
            setTimeout(window["sap.ushell.bootstrap.callback"]);
        }

        oAdapter = createAdapter("Container", new sap.ushell.System({
            // this is the initial logon system object
            alias: "",
            platform: sPlatform
        }));

        return oAdapter.load().done(function () {
            /**
             * The Unified Shell container as a singleton object. This object will only be
             * available after <code>sap.ushell.bootstrap()</code> has finished.
             *
             * @since 1.15.0
             * @type sap.ushell.services.Container
             * @see sap.ushell.bootstrap
             * @public
             */
            sap.ushell.Container = new Container(oAdapter);
        });
    };
}());
