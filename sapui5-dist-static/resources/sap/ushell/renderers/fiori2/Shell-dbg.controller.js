// Copyright (c) 2013 SAP AG, All Rights Reserved
(function () {
    "use strict";
    /*global jQuery, sap, console, location, window, f2p, document, setTimeout*/

    jQuery.sap.require("sap.ui.core.IconPool");
    jQuery.sap.require("sap.m.MessageToast");
    jQuery.sap.require("sap.m.MessageBox");
    setTimeout(function () {
        jQuery.sap.require("sap.ui.thirdparty.datajs");
        jQuery.sap.require("sap.ushell.renderers.fiori2.launchpad.DashboardManager");
    }, 10);

    /* dont delay these cause they are needed for direct bookmarks */
    jQuery.sap.require("sap.m.Shell");
    jQuery.sap.require("sap.ushell.components.container.ApplicationContainer");
    jQuery.sap.require("sap.ushell.services.Message");
    jQuery.sap.require("sap.ushell.services.ShellNavigation");
    jQuery.sap.require("sap.ushell.services.AppConfiguration");
    jQuery.sap.require("sap.ushell.renderers.fiori2.History");
    jQuery.sap.require("sap.ushell.ui.launchpad.LoadingDialog");

    // create global model and add some demo data
    var oModel = new sap.ui.model.json.JSONModel({
        groups : [],
        title : "My demo title",
        searchAvailable: false,
        searchTerm: "",
        states : {
            "home" : {
                "showCurtain" : false,
                "headerHiding" : false,
                "showCatalog" : false,
                "showPane" : false,
                "headItems" : ["configBtn"],
                "search" : "sf",
                "paneContent" : ["groupListPage", "logoutBtn"]
            },
            "app" : {
                "showCurtain" : false,
                "headerHiding" : true,
                "showCatalog" : false,
                "showPane" : false,
                "search" : "sf",
                "headItems" : ["homeBtn"]
            },
            "historyScreen" : {
                "showCurtain" : true,
                "headerHiding" : false,
                "showCatalog" : false,
                "search" : "sf",
                "curtainContent" : ["searchHistoryPage"],
                "paneCurtainContent" : ["searchFilterPage"]
            },
            "searchResults" : {
                "showCurtain" : true,
                "headerHiding" : false,
                "showCatalog" : false,
                "search" : "sf",
                "curtainContent" : ["searchResultPage"],
                "paneCurtainContent" : ["searchFilterPage"]
            },
            "catalog" : {
                "showCurtain" : false,
                "headerHiding" : false,
                "showCatalog" : true,
                "showPane" : false,
                "search" : "sf",
                "headItems" : ["backBtn"]
            }
        }
    }),
        bCloseOverlayByFunction = false;

    sap.ushell.renderers.fiori2.CONST = {
        CATALOG : {
            ID : "ShellCatalog",
            SEMANTICOBJECT : "shell",
            ACTION : "catalog"
        },
        //OBSOLETE FOR NOW: search is not part of the navigation
        SEARCH : {
            ID : "ShellSearch",
            SEMANTICOBJECT : "shell",
            ACTION : "search"
        }
    };

    oModel.setSizeLimit(10000); // override default of 100 UI elements on list bindings

    /**
     * @name sap.ushell.renderers.fiori2.Shell
     * @extends sap.ui.core.mvc.Controller
     * @public
     */
    sap.ui.controller("sap.ushell.renderers.fiori2.Shell", {

        /**
         * SAPUI5 lifecycle hook.
         * @public
         */
        onInit: function () {
            // Add global model to view
            this.getView().setModel(oModel);
            sap.ui.getCore().byId("shellOverlay").setModel(oModel);
            // Bind the translation model to this view
            this.getView().setModel(sap.ushell.resources.i18nModel, "i18n");
            sap.ui.getCore().byId("shellOverlay").setModel(sap.ushell.resources.i18nModel, "i18n");

            sap.ui.getCore().getEventBus().subscribe("externalSearch", this.externalSearchTriggered, this);
            sap.ui.getCore().getEventBus().subscribe("openCatalog", this.openCatalogByHash, this);
            sap.ui.getCore().getEventBus().subscribe("showCatalog", this.showCatalog, this);
            sap.ui.getCore().getEventBus().subscribe("openApp", this.openApp, this);

            this.history = new sap.ushell.renderers.fiori2.History();
            this.oNavContainer = sap.ui.getCore().byId("navContainer");

            this.oLoadingDialog = new sap.ushell.ui.launchpad.LoadingDialog({
                title: null,
                text: "",   // in order to calculate dimension before first call
                showCancelButton: false
            });

            sap.ushell.Container.getService("NavTargetResolution").registerCustomResolver({
                name : "Shell Internal Navigation",
                isApplicable : jQuery.proxy(this.navTargetIsApplicableForShell, this),
                resolveHashFragment : jQuery.proxy(this.resolveHashFragmentForShell, this)
            });
            // must be after event registration (for synchronous navtarget resolver calls)
            sap.ushell.services.ShellNavigation.init(jQuery.proxy(this.doHashChange, this));

            sap.ushell.services.Message.init(jQuery.proxy(this.doShowMessage, this));

            // check if search is available
            try {
                sap.ushell.Container.getService("Search")
                    .isSearchAvailable()
                    .done(jQuery.proxy(this.toggleSearch, this));
            } catch (ex) {
                // disable search on any error
                jQuery.sap.log.error(ex.name, ex.message, "sap.ushell.renderers.fiori2.Shell");
                jQuery.sap.log.warning("Disabling Search due to errors", "", "sap.ushell.renderers.fiori2.Shell");
                this.toggleSearch(false);
            }
        },

        onExit: function () {
            sap.ui.getCore().getEventBus().unsubscribe("externalSearch", this.externalSearchTriggered, this);
            sap.ui.getCore().getEventBus().unsubscribe("openCatalog", this.openCatalogByHash, this);
            sap.ui.getCore().getEventBus().unsubscribe("showCatalog", this.showCatalog, this);
            sap.ui.getCore().getEventBus().unsubscribe("openApp", this.openApp, this);
        },

        // temporary, should not be exposed
        getModel: function () {
            return oModel;
        },

        openCatalogByHash : function (sChannelId, sEventId, oData) {
            window.location = "#" + sap.ushell.Container.getService("URLParsing").constructShellHash({
                target : {
                    semanticObject : sap.ushell.renderers.fiori2.CONST.CATALOG.SEMANTICOBJECT,
                    action : sap.ushell.renderers.fiori2.CONST.CATALOG.ACTION
                },
                params : {
                    targetGroup : [(oData && oData.groupContext && oData.groupContext.sPath) || "/groups/0"]
                }
            });
        },

        showCatalog : function (sChannelId, sEventId, oData) {
            if (!sap.ui.getCore().byId("catalogPage")) {
                this.oNavContainer.addPage(sap.ui.view({
                    id : "catalogPage",
                    viewName : "sap.ushell.renderers.fiori2.launchpad.catalog.Catalog",
                    viewData : {
                        groupContext : oData.groupContext
                    },
                    type : sap.ui.core.mvc.ViewType.JS
                }));
            }

            this.switchViewState("catalog");
            this.oNavContainer.to("catalogPage", "slide");
            this.oLoadingDialog.closeLoadingScreen();
        },

        openShellOverlay : function (oData) {
            var oShellOverlay = sap.ui.getCore().byId("shellOverlay");
            oShellOverlay.open();
        },

        closeShellOverlay : function () {
            var oShellOverlay = sap.ui.getCore().byId("shellOverlay");
            if (oShellOverlay.isActive()) {
                bCloseOverlayByFunction = true;
                oShellOverlay.close();
            }
        },

        onCurtainClose : function (oEvent) {
            jQuery.sap.log.warning("Closing Curtain", oEvent);
            var oSearchField = sap.ui.getCore().byId("sf");
            oSearchField.$().find("input").blur();
            sap.ui.getCore().getEventBus().publish("closeCurtain");
            if (!bCloseOverlayByFunction) {
                this.switchViewState("/lastState");
            }
            bCloseOverlayByFunction = false;
        },

        /**
         * Callback registered with Message service. Triggered on message show request.
         *
         * @private
         */
        doShowMessage: function (iType, sMessage, oParameters) {
            if (iType === sap.ushell.services.Message.Type.ERROR) {
                sap.m.MessageBox.show(sMessage, sap.m.MessageBox.Icon.ERROR,
                        oParameters.title || sap.ushell.resources.i18n.getText("error"));
            } else if (iType === sap.ushell.services.Message.Type.CONFIRM) {
                if (oParameters.actions) {
                    sap.m.MessageBox.show(sMessage, sap.m.MessageBox.Icon.QUESTION, oParameters.title, oParameters.actions, oParameters.callback);
                } else {
                    sap.m.MessageBox.confirm(sMessage, oParameters.callback, oParameters.title);
                }
            } else {
                sap.m.MessageToast.show(sMessage, { duration: oParameters.duration || 3000 });
            }
        },

        /**
         * Callback registered with NavService. Triggered on navigation requests
         *
         * Set application container based on information in URL hash.
         * @public
         */
        doHashChange : function (sShellHash, sAppPart, sOldShellHash) {
            if (!sShellHash) {
                sShellHash = '#';
            }
            if (sShellHash.charAt(0) !== '#') {
                sShellHash = '#' + sShellHash;
            }

            this.history.hashChange(sShellHash, sOldShellHash);

            // only show loading indicator if this loaded page is not the first
            // - for this case, the startup loading page is used.
            if (this.history.getHistoryLength() > 1) {
                this.oLoadingDialog.setText("");
                this.oLoadingDialog.openLoadingScreen();
            }

            sap.ushell.Container.getService("NavTargetResolution")
                .resolveHashFragment(sShellHash)
                .done(jQuery.proxy(this.openSomething, this, sShellHash, sOldShellHash))
                .fail(jQuery.proxy(function () {
                    this.oLoadingDialog.closeLoadingScreen();
                    sap.ushell.services.Message.error(sap.ushell.resources.i18n.getText("fail_to_start_app"));
                }, this));

        },

        /**
         *  open either an app or the dashboard
         * @public
         */
        openSomething : function (sShellHash, sOldShellHash, oApplication) {
            var oApplicationInformation,
                sPath;

            if (!this.oNavContainer.getParent() && (!oApplication || oApplication.applicationType !== "NWBC")) {
                sap.ui.getCore().byId("shell").addContent(this.oNavContainer);
            }

            if (oApplication) {
                // application opened
                try {
                    oApplicationInformation = sap.ushell.Container.getService("URLParsing")
                        .parseShellHash(sShellHash);
                } catch (e) {
                    // this happens when trying to parse hashes from fiori wave one
                    oApplicationInformation = undefined;
                }

                if (oApplicationInformation === undefined) {
                    // This will happen, when a custom app is opened, like Wikipedia
                    jQuery.sap.log.warning("Could not parse shell hash: " + sShellHash);
                    oApplicationInformation = {};
                }
                oApplicationInformation.sShellHash = sShellHash;
                oApplicationInformation.sOldShellHash = sOldShellHash;
                oApplicationInformation.oApplication = oApplication;

                if (oApplication.applicationType === sap.ushell.renderers.fiori2.CONST.CATALOG.ID) {
                    sPath = (oApplication.targetGroup && oApplication.targetGroup.length && oApplication.targetGroup[0]) || "/groups/0";
                    oApplicationInformation.groupContext = oModel.getContext(sPath);

                    sap.ui.getCore().getEventBus()
                        .publish("showCatalog", oApplicationInformation);
                } else {
                    sap.ui.getCore().getEventBus()
                        .publish("openApp", oApplicationInformation);
                }
            } else {
                this.openDashboard();
            }
        },

        /**
        *  opens the dashboard
        * @public
        */
        openDashboard : function () {
            // close if necessary
            this.oLoadingDialog.closeLoadingScreen();
            this.switchViewState("home");
            this.oNavContainer.backToTop();
            sap.ushell.services.AppConfiguration.setCurrentApplication(null);
            this.setAppIcons(null);
        },

        /**
         *
         * @param sChannelId
         * @param sEventId
         * @param {Object} oApplication
         * @public
         */
        openApp : function (sChannelId, sEventId, oData) {
            jQuery.sap.log.warning("Triggering navigation to ", oData);
            var oAppContainer,
                oApplication = oData.oApplication,
                oInnerControl = null,
                appid = oData.sShellHash.replace(/\W/g, "-"),
                aOldPages,
                sAppTitle,
                sAppIcon;

            if (oApplication) {
                try {
                    // WebGUI Application Integration
                    if (oApplication.applicationType === "NWBC") {
                        window.history.back(1);
                        if (!jQuery.device.is.desktop) {
                            sap.ushell.services.Message.error(sap.ushell.resources.i18n.getText("notAvailableMsg"));
                            return;
                        }
                        if (this.history.getHashIndex(oData.sShellHash) === 0) {
                            window.location = oApplication.url;
                        } else {
                            window.open(oApplication.url);
                        }
                        this.oLoadingDialog.closeLoadingScreen();
                        return;
                    }

                    if (!this.oNavContainer.getPage("application" + appid) && !this.oNavContainer.getPage("shellPage" + appid)) {
                        oAppContainer = new sap.ushell.components.container.ApplicationContainer("application" + appid, oApplication);
                        sap.ushell.services.AppConfiguration.setCurrentApplication(oApplication);
                        sAppTitle = sap.ushell.services.AppConfiguration.getMetadata(oApplication).title || "";
                        sAppIcon = sap.ushell.services.AppConfiguration.getMetadata(oApplication).icon || null;
                        // TODO: insert localized strings like "Loading..." etc. from sap.ushell.resources.i18n.getText("...")
                        this.oLoadingDialog.showAppInfo(sAppTitle, sAppIcon);
                        if (!sap.ushell.services.AppConfiguration.getMetadata(oApplication).fullWidth) {
                            oInnerControl = new sap.m.Shell("shellPage" + appid, {
                                title : sAppTitle,
                                showLogout : false,
                                app : oAppContainer
                            }).addStyleClass("sapUshellApplicationPage");
                            if (!sAppTitle) {
                                oInnerControl.addStyleClass("sapUshellApplicationPageNoHdr");
                            }
                        } else {
                            oInnerControl = oAppContainer;
                        }
                        this.oNavContainer.addPage(oInnerControl);
                    }

                    this.setAppIcons(sap.ushell.services.AppConfiguration.getMetadata(oApplication));

                    this.switchViewState("app");

                    if (this.history.backwards && this.oNavContainer.getInitialPage() !== this.oNavContainer.getCurrentPage().getId()) {
                        this.oNavContainer.to(oInnerControl, "slideBack");
                    } else {
                        this.oNavContainer.to(oInnerControl, this.oNavContainer.getInitialPage() ? "slide" : "show");
                    }
                } catch (e) {
                    // create a new navContainer because old one is in a irreparable state
                    // save all other pages besides the page which causes the error
                    jQuery.sap.log.error(e.name, e.message, (oApplication && sap.ushell.services.AppConfiguration.getMetadata(oApplication).title) || null);
                    this.oNavContainer.removePage(this.oNavContainer.getCurrentPage()).destroy();
                    aOldPages = this.oNavContainer.removeAllPages();

                    this.oNavContainer.destroy();
                    this.oNavContainer = this.getView().initNavContainer(this);

                    jQuery.each(aOldPages, jQuery.proxy(function (i, v) {
                        if (!this.oNavContainer.getPage(v.getId())) {
                            this.oNavContainer.addPage(v);
                        }
                        if (v.getId() === this.oNavContainer.getInitialPage()) {
                            v.removeStyleClass("sapMNavItemHidden"); // still there because of old navContainer
                        }
                    }, this));
                    this.navigateToHome();
                    this.oLoadingDialog.closeLoadingScreen();
                    sap.ushell.services.Message.error(sap.ushell.resources.i18n.getText("fail_to_start_app"));
                }
            }
            // close if we are on first position (no app has be launched before)
            if (this.history.getHistoryLength() < 1) {
                this.oLoadingDialog.closeLoadingScreen();
            }
        },

        setAppIcons: function (oMetadataConfig) {
            // TODO Implement adjustment of relative paths:
            // Should be relative to Component.js, not to HTML file!
            var oLaunchIconPhone = (oMetadataConfig && oMetadataConfig.homeScreenIconPhone) ||
                    '../../resources/sap/ushell/themes/base/img/launchicons/57_iPhone_Desktop_Launch.png',
                oLaunchIconPhone2 = (oMetadataConfig && oMetadataConfig["homeScreenIconPhone@2"]) ||
                    '../../resources/sap/ushell/themes/base/img/launchicons/114_iPhone-Retina_Web_Clip.png',
                oLaunchIconTablet = (oMetadataConfig && oMetadataConfig.homeScreenIconTablet) ||
                    '../../resources/sap/ushell/themes/base/img/launchicons/72_iPad_Desktop_Launch.png',
                oLaunchIconTablet2 = (oMetadataConfig && oMetadataConfig["homeScreenIconTablet@2"]) ||
                    '../../resources/sap/ushell/themes/base/img/launchicons/144_iPad_Retina_Web_Clip.png',
                oFavIcon = (oMetadataConfig && oMetadataConfig.favIcon) ||
                    '../../resources/sap/ushell/themes/base/img/launchpad_favicon.ico',
                sTitle = (oMetadataConfig && oMetadataConfig.title) ||
                    //TODO define proper localization tag for default window title
                    sap.ushell.resources.i18n.getText("homeBtn_tooltip");

            jQuery.sap.setIcons({
                'phone': oLaunchIconPhone,
                'phone@2': oLaunchIconPhone2,
                'tablet': oLaunchIconTablet,
                'tablet@2': oLaunchIconTablet2,
                'favicon': oFavIcon,
                'precomposed': true
            });

            window.document.title = sTitle;
        },

        externalSearchTriggered: function (sChannelId, sEventId, oData) {
            oModel.setProperty("/searchTerm", oData.searchTerm);
            oData.query = oData.searchTerm;
            sap.ui.getCore().byId("sfOverlay").fireSearch(oData);
        },

        onAfterNavigate: function (oEvent) {
            var sHome = this.oNavContainer.getInitialPage(),
                sFrom = oEvent.getParameter("fromId");

            if (sFrom !== sHome && sFrom !== "catalogPage" && sFrom !== "f2p_overview") {
                this.oNavContainer.removeAggregation("pages", sFrom, true);
                sap.ui.getCore().byId(sFrom).destroy();
            }
            this.oLoadingDialog.closeLoadingScreen();
        },

        onAfterRendering: function () {
            if (window.f2p) {
                f2p.add(f2p.m.endHomePage);
            }
        },

        navigateToHome: function (oEvent) {
            //(oEvent && oEvent.getParameter("id") === 'backBtn') || 
            if (location.hash === '') {
                this.openDashboard();
            } else {
                location.hash = '';
            }
        },

        toggleSearch : function (bIsAvailable) {
            oModel.setProperty("/searchAvailable", bIsAvailable);
        },

        togglePane : function (oEvent) {
            var oSource = oEvent.getSource(),
                bState = oSource.getSelected();

            if (oEvent.getParameter("id") === "categoriesBtn") {
                oSource.getModel().setProperty("/currentState/showCurtainPane", !bState);
            } else {
                oSource.getModel().setProperty("/currentState/showPane", !bState);
            }
        },

        getActiveViews: function () {
            var aCurtainContent = this.getModel().getProperty("/currentState/curtainContent"),
                oPage = sap.ui.getCore().byId(aCurtainContent[0]),
                aActiveViews = [];

            // the two search suggestion controller need to know
            // which is currently active to not trigger request twice
            jQuery.each(oPage.getContent(), function (i, v) {
                aActiveViews.push(v.getId());
            });

            return aActiveViews;
        },

        switchViewState: function (sState, bSaveLastState) {
            var sPath = sState[0] === "/" ? sState : "/states/" + sState,
                oState = oModel.getProperty(sPath),
                /** @type sap.ui.unified.Shell */
                oShell = sap.ui.getCore().byId("shell"),
                oCurrentState = oModel.getProperty("/currentState") || {};

            if (!oShell.getSearch() || oState.search !== oShell.getSearch().getId()) {
                oShell.setSearch(sap.ui.getCore().byId(oState.search));
            }

            if (!!bSaveLastState) {
                oModel.setProperty("/lastState", oCurrentState);
            }

            oState = jQuery.extend({}, oCurrentState, oState);
            oModel.setProperty("/currentState", oState);

            if (!!oState.showCurtain) {
                this.openShellOverlay();
            } else {
                this.closeShellOverlay();
            }
        },

        /* Make catalog part of the navigation */
        navTargetIsApplicableForShell : function (sHashFragment) {
            var oAppInfo = sap.ushell.Container.getService("URLParsing").parseShellHash(sHashFragment.substring(1));

            return oAppInfo &&
                (oAppInfo.semanticObject === sap.ushell.renderers.fiori2.CONST.CATALOG.SEMANTICOBJECT
                        && oAppInfo.action === sap.ushell.renderers.fiori2.CONST.CATALOG.ACTION);
        },

        resolveHashFragmentForShell : function (sHashFragment) {
            var oAppInfo = sap.ushell.Container.getService("URLParsing").parseShellHash(sHashFragment.substring(1)),
                oDeferred = new jQuery.Deferred(),
                res;
            if (oAppInfo.action === sap.ushell.renderers.fiori2.CONST.CATALOG.ACTION) {
                res = {
                    applicationType: sap.ushell.renderers.fiori2.CONST.CATALOG.ID,
                    catalogSelector : oAppInfo.params.catalogSelector,
                    tileFilter : oAppInfo.params.tileFilter,
                    targetGroup : oAppInfo.params.targetGroup
                };
            }
            oDeferred.resolve(res);
            return oDeferred.promise();
        }
    });
}());
