// Copyright (c) 2013 SAP AG, All Rights Reserved
(function () {
    "use strict";
    /*global jQuery, sap, window */
    /*jslint nomen: true */

    jQuery.sap.declare("sap.ushell.ui.launchpad.SearchResultAppsRenderer");
    jQuery.sap.require("sap.ui.core.Renderer");
    jQuery.sap.require("sap.m.TableRenderer");

    sap.ushell.ui.launchpad.SearchResultAppsRenderer = sap.ui.core.Renderer.extend(sap.m.TableRenderer);

    sap.ushell.ui.launchpad.SearchResultAppsRenderer.renderContainerAttributes = function (rm, oControl) {
        sap.m.TableRenderer.renderContainerAttributes(rm, oControl);
        rm.addClass("sapUshellSearchResultApps");
    };
}());