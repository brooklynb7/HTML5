//Copyright (c) 2013 SAP AG, All Rights Reserved
(function () {
    "use strict";
    /*global jQuery, sap, location, window, clearTimeout, setTimeout */

    jQuery.sap.require("sap.ushell.renderers.fiori2.launchpad.DashboardManager");

    //add touch support for mobile devices
    jQuery.sap.require("sap.ushell.touchSupport");

    sap.ui.jsview("sap.ushell.renderers.fiori2.Shell", {

     /**
     * Most of the following code acts just as placeholder for new Unified Shell Control.
     *
     * @param oController
     * @returns {sap.ui.unified.Shell}
     * @public
     */
        createContent: function (oController) {
            var fnPaneButtonTooltip = function (bState, sShowTooltip, sHideTooltip) {
                    return bState ? sHideTooltip : sShowTooltip;
                },
                fnShellUpdateAggItem = function (sId, oContext) {
                    return sap.ui.getCore().byId(oContext.getObject());
                },
                fnSetCurtainPaneCSS = function (bShow, aCurtainContent) {
                    if (aCurtainContent) {
                        jQuery.each(aCurtainContent, function (i, v) {
                            sap.ui.getCore().byId(v).toggleStyleClass("sapUICurtainPaneVisible", !!bShow);
                        });
                    }
                    return !!bShow;
                },
                oConfigButton = new sap.ui.unified.ShellHeadItem({
                    id: "configBtn",
                    tooltip: {
                        parts: ["/currentState/showPane",
                                "i18n>showGrpsBtn_tooltip",
                                "i18n>hideGrpsBtn_tooltip"],
                        formatter: fnPaneButtonTooltip
                    },
                    icon: sap.ui.core.IconPool.getIconURI("menu2"),
                    selected: {path: "/currentState/showPane"},
                    press: [oController.togglePane, oController]
                }),
                oHomeButton = new sap.ui.unified.ShellHeadItem({
                    id: "homeBtn",
                    title: "{i18n>homeBtn_tooltip}",
                    tooltip: "{i18n>homeBtn_tooltip}",
                    icon: sap.ui.core.IconPool.getIconURI("home"),
                    press: [oController.navigateToHome, oController]
                }),
                oBackButton = new sap.ui.unified.ShellHeadItem({
                    id: "backBtn",
                    title: "{i18n>backBtn_tooltip}",
                    tooltip: "{i18n>backBtn_tooltip}",
                    icon: sap.ui.core.IconPool.getIconURI("nav-back"),
                    press: [oController.navigateToHome, oController]
                }),
                oLogoutBtn = new sap.ushell.ui.footerbar.LogoutButton("logoutBtn", {
                    iconFirst: false
                }).addStyleClass("sapUshellLogoutButton"),
                oUnifiedShell = new sap.ui.unified.Shell({
                    id: "shell",
                    fullHeightContent: true,
                    showPane: {path: "/currentState/showPane"},
                    headItems: {path: "/currentState/headItems", factory: fnShellUpdateAggItem},
                    headEndItems: {path: "/currentState/headEndItems", factory: fnShellUpdateAggItem},
                    paneContent: {path: "/currentState/paneContent", factory: fnShellUpdateAggItem},
                    headerHiding: {path: "/currentState/headerHiding"}
                }),
                oSearchField = new sap.m.SearchField("sf", {
                    width: "100%",
                    placeholder: "{i18n>search}",
                    showMagnifier: false,
                    visible: {path: "/searchAvailable"},
                    value: {path: "/searchTerm"}
                }),
                oSearchFieldOverlay = new sap.m.SearchField("sfOverlay", {
                    width: "100%",
                    placeholder: "{i18n>search}",
                    showMagnifier: false,
                    visible: {path: "/searchAvailable"},
                    value: {path: "/searchTerm"}
                }),
                oShellOverlay = new sap.ui.unified.ShellOverlay("shellOverlay", {
                    search: oSearchFieldOverlay,
                    content: {path: "/currentState/curtainContent", factory: fnShellUpdateAggItem},
                    shell: oUnifiedShell,
                    closed: [oController.onCurtainClose, oController]
                }),
                oHistoryScreen = sap.ui.view({
                    id : "searchHistoryScreen",
                    viewName : "sap.ushell.renderers.fiori2.search.HistoryScreen",
                    type : sap.ui.core.mvc.ViewType.JS
                }),
                oSearchResults = sap.ui.view({
                    id : "searchResultsView",
                    viewName : "sap.ushell.renderers.fiori2.search.SearchResults",
                    type : sap.ui.core.mvc.ViewType.JS
                }),
                oSearchSuggestions = sap.ui.view({
                    id : "searchSuggestionsView",
                    viewName : "sap.ushell.renderers.fiori2.search.SearchSuggestions",
                    type : sap.ui.core.mvc.ViewType.JS
                }),
//                oSearchFilter = sap.ui.view({
//                    id : "searchFilterView",
//                    viewName : "sap.ushell.renderers.fiori2.search.SearchFilter",
//                    type : sap.ui.core.mvc.ViewType.JS
//                }),
//                oResultFilterInfo = sap.ui.view({
//                    id : "resultFilterInfoView",
//                    viewName : "sap.ushell.renderers.fiori2.search.ResultFilterInfo",
//                    type : sap.ui.core.mvc.ViewType.JS
//                }),
                oSearchResultPage = new sap.m.Page({
                    id : "searchResultPage",
                    showHeader: false,
                    //customHeader: new sap.m.Bar({contentMiddle: [oResultFilterInfo]}),
                    content : [oSearchSuggestions.clone(), oSearchResults]
                }),
                oDashboardManager = new sap.ushell.renderers.fiori2.launchpad.DashboardManager("dashboardMgr", {
                    model : oController.getModel()
                }),
                oDashboardPage = this.pageFactory("dashboardPage", oDashboardManager.getDashboardView(), !jQuery.device.is.desktop),
                oGroupListPage = this.pageFactory("groupListPage", oDashboardManager.getGroupListView(), !jQuery.device.is.desktop),
                oShellPage = this.pageFactory("shellPage", oUnifiedShell);

            this.lastSearchTerm = "";
            this.initNavContainer(oController);
            this.pageFactory("searchHistoryPage", [oSearchSuggestions, oHistoryScreen]);
            this.pageFactory("searchFilterPage", []);

            oSearchField.addEventDelegate({
                onfocusin: function (oEvent) {
                    if (!oShellOverlay.isActive()) {
                        var fnOnFocusIn = jQuery.proxy(function () {
                            if (oSearchField.getValue().length === 0 || this.lastSearchTerm.length === 0) {
                                sap.ui.getCore().getEventBus().publish("openHistoryScreen");
                                jQuery.proxy(oController.switchViewState("historyScreen", true), oController);
                            } else {
                                jQuery.proxy(oController.switchViewState("searchResults", true), oController);
                            }
                        }, this);

                        if (sap.ui.Device.browser.internet_explorer) {
                            setTimeout(fnOnFocusIn, 0); //made focus handling work in IE
                        } else {
                            fnOnFocusIn();
                        }
                    }
                }
            }, this);

            oSearchFieldOverlay.addEventDelegate({
                onfocusin: function (oEvent) {
                    // set focus at the end
                    var pos = oSearchFieldOverlay.getValue().length,
                        elem = oSearchFieldOverlay.$().find("input")[0],
                        range;

                    if (elem.setSelectionRange) {
                        elem.setSelectionRange(pos, pos);
                    } else if (elem.createTextRange) {
                        range = elem.createTextRange();
                        range.collapse(true);
                        range.moveEnd('character', pos);
                        range.moveStart('character', pos);
                        range.select();
                    }
                }
            });

            oSearchFieldOverlay.attachSearch(function (oEvent) {
                this.lastSearchTerm = oEvent.getParameter("query");
                if (oEvent.getParameter("query").length > 0) {
                    clearTimeout(this.liveSearchTimeout);
                    jQuery.proxy(oController.switchViewState("searchResults"), oController);

                    var oEventBus = sap.ui.getCore().getEventBus();
                    oEventBus.publish("search", {
                        searchTerm: oEvent.getParameter("query"),
                        dataSource: oEvent.getParameter("dataSource"),
                        categorySuggested: oEvent.getParameter("categorySuggested")
                    });
                }
            }, this);

            oSearchFieldOverlay.attachLiveChange(function (oEvent) {
                var searchTerm = oEvent.getParameter("newValue");

                if (oSearchField.getValue().length === 0) {
                    sap.ui.getCore().getEventBus().publish("openHistoryScreen");
                    if (!oShellOverlay.isActive()) {
                        jQuery.proxy(oController.switchViewState("historyScreen", true), oController);
                    } else {
                        jQuery.proxy(oController.switchViewState("historyScreen"), oController);
                    }
                }

                clearTimeout(this.liveSearchTimeout);
                this.liveSearchTimeout = setTimeout(jQuery.proxy(function () {
                    this.liveSearchTimeout = null;

                    var oEventBus = sap.ui.getCore().getEventBus();
                    oEventBus.publish("searchSuggest", {searchTerm: searchTerm, activeViews: oController.getActiveViews()});
                }, this), 400);
            }, this);

            this.setDisplayBlock(true);

            if (!jQuery.device.is.desktop) {
                oShellPage.setEnableScrolling(false);
            } else {
                oGroupListPage.addStyleClass("sapUshellGroupListDesktopScrollbar");
            }

            oUnifiedShell.updateAggregation = this.updateShellAggregation;
            oShellOverlay.updateAggregation = this.updateShellAggregation;

            return new sap.m.App({
                pages: oShellPage
            });
        },

        initNavContainer: function (oController) {
            var oDashboardPage = sap.ui.getCore().byId("dashboardPage"),
                oNavContainer = new sap.m.NavContainer({
                    id: "navContainer",
                    pages: [oDashboardPage],
                    initialPage: oDashboardPage,
                    afterNavigate: jQuery.proxy(oController.onAfterNavigate, oController)
                });

            oNavContainer.addCustomTransition(
                "slideBack",
                sap.m.NavContainer.transitions.slide.back,
                sap.m.NavContainer.transitions.slide.back
            );

            return oNavContainer;
        },

        updateShellAggregation: function (sName) {
            /*jslint nomen: true */
            var oBindingInfo = this.mBindingInfos[sName],
                oAggregationInfo = this.getMetadata().getJSONKeys()[sName],
                oClone;

            jQuery.each(this[oAggregationInfo._sGetter](), jQuery.proxy(function (i, v) {
                this[oAggregationInfo._sRemoveMutator](v);
            }, this));
            jQuery.each(oBindingInfo.binding.getContexts(), jQuery.proxy(function (i, v) {
                oClone = oBindingInfo.factory(this.getId() + "-" + i, v).setBindingContext(v, oBindingInfo.model);
                this[oAggregationInfo._sMutator](oClone);
            }, this));
        },

        // Disable bouncing outside of the boundaries
        disableBouncing: function (oPage) {
            /*jslint nomen: true */
            oPage.onBeforeRendering = function () {
                sap.m.Page.prototype.onBeforeRendering.apply(oPage);

                var oScroller = this._oScroller,
                    oOriginalAfterRendering = oScroller.onAfterRendering;

                oScroller.onAfterRendering = function () {
                    oOriginalAfterRendering.apply(oScroller);

                    oScroller._scroller.options.bounce = false;
                };
            };

            return oPage;
        },

        getControllerName: function () {
            return "sap.ushell.renderers.fiori2.Shell";
        },

        pageFactory: function (sId, oControl, bDisableBouncing) {
            var oPage = new sap.m.Page({
                    id: sId,
                    showHeader: false,
                    showFooter: false,
                    content: oControl
                }),
                aEvents = ["onAfterHide", "onAfterShow", "onBeforeFirstShow", "onBeforeHide", "onBeforeShow"],
                oDelegates = {};

            // Pass navigation container events to children.
            jQuery.each(aEvents, function (iIndex, sEvent) {
                oDelegates[sEvent] = jQuery.proxy(function (evt) {
                    jQuery.each(this.getContent(), function (iIndex, oControl) {
                        /*jslint nomen: true */
                        oControl._handleEvent(evt);
                    });
                }, oPage);
            });

            oPage.addEventDelegate(oDelegates);

            if (bDisableBouncing) {
                this.disableBouncing(oPage);
            }

            return oPage;
        },

        onAfterRendering: function () {
            if (window.f2p) {//If performance is enabled we initialize the monitor UI so that CTRL + ALT +  L will open it.
                jQuery.sap.require("sap.ushell.components.perf.monitor");
                window.f2pMonitor.init(sap.ui.getCore().byId("navContainer"));
            }
        }

    });
}());
