// Copyright (c) 2013 SAP AG, All Rights Reserved
(function () {
    "use strict";
    /*global jQuery, sap, window */
    jQuery.sap.declare("sap.ushell.ui.launchpad.SearchSuggestionListItemRenderer");
    jQuery.sap.require("sap.ui.core.Renderer");
    jQuery.sap.require("sap.m.ListItemBaseRenderer");

    sap.ushell.ui.launchpad.SearchSuggestionListItemRenderer = sap.ui.core.Renderer.extend(sap.m.ListItemBaseRenderer);

    sap.ushell.ui.launchpad.SearchSuggestionListItemRenderer.renderLIAttributes = function (rm, oLI) {
        rm.addClass("sapUshellSearchSuggestionListItem");
        if (oLI.getIsGroupFooter()) {
            rm.addClass("sapUshellSearchSuggestionListItemGroupFooter");
        }
        if (oLI.getIsGroupHeader()) {
            rm.addClass("sapMGHLI sapMGHLIUpperCase sapMLIBTypeInactive sapMListHdr");
        }
    };

    sap.ushell.ui.launchpad.SearchSuggestionListItemRenderer.renderLIContent = function (rm, oLI) {
        var aCategories = oLI.getCategories();

        if (oLI.getIsGroupHeader()) {
            this.renderLIGroupHeader(rm, oLI);
        } else if (oLI.getIsGroupFooter()) {
            this.renderLIGroupFooter(rm, oLI);
        } else if (oLI.getText()) {
            if (oLI.getIcon()) {
                this.renderLIIcon(rm, oLI);
            }
            this.renderLIText(rm, oLI);
        }

        if (aCategories.length > 0) {
            this.renderLICategories(rm, oLI, aCategories);
        }
    };

    sap.ushell.ui.launchpad.SearchSuggestionListItemRenderer.renderLIIcon = function (rm, oLI) {
        rm.write("<div");
        rm.addClass("sapUshellSearchSuggestionListItemIcon");
        rm.writeClasses();
        rm.write(">");
        rm.renderControl(new sap.ui.core.Icon({src: oLI.getIcon()}));
        rm.write('</div>');
    };

    sap.ushell.ui.launchpad.SearchSuggestionListItemRenderer.renderLIGroupHeader = function (rm, oLI) {
        rm.write("<label");
        rm.addClass("sapMGHLITitle");
        rm.writeClasses();
        rm.write(">");
        rm.writeEscaped(oLI.getText());
        rm.write('</label>');
    };

    sap.ushell.ui.launchpad.SearchSuggestionListItemRenderer.renderLIGroupFooter = function (rm, oLI) {
        rm.write("<span>");
        rm.writeEscaped(oLI.getText());
        rm.write('</span>');
    };

    sap.ushell.ui.launchpad.SearchSuggestionListItemRenderer.renderLIText = function (rm, oLI) {
        rm.write("<div");
        rm.addClass("sapUshellSearchSuggestionListItemText");
        rm.writeClasses();
        rm.write(">");

        rm.write("<a");
        rm.addClass("sapUshellSearchSuggestionListItemNavItem");
        rm.writeClasses();
        rm.write("style='display: inline-block;' tabindex='0'>");

        rm.write(oLI.getText());

        rm.write('</a>');
        rm.write('</div>');
    };

    sap.ushell.ui.launchpad.SearchSuggestionListItemRenderer.renderLICategories = function (rm, oLI, aCategories) {
        var iMaxCatToDisplay = oLI.getMaxCategories(),
            iCatToDisplay = aCategories.length < iMaxCatToDisplay ? aCategories.length : iMaxCatToDisplay,
            i;

        rm.write("<div");
        rm.addClass("sapUshellSearchSuggestionListItemCategory");
        rm.writeClasses();
        rm.write(">");

        this.renderLICategoryFirstSeperator(rm, oLI);
        for (i = 0; i < iCatToDisplay; i = i + 1) {
            rm.renderControl(aCategories[i].addStyleClass("sapUshellSearchSuggestionListItemNavItem"));
            if ((i + 1) < iCatToDisplay) {
                this.renderLICategorySeperator(rm, oLI);
            }
        }

        rm.write('</div>');
    };

    sap.ushell.ui.launchpad.SearchSuggestionListItemRenderer.renderLICategoryFirstSeperator = function (rm, oLI) {
        rm.write("<div");
        rm.addClass("sapUshellSearchSuggestionListItemCategoryFirstSeperator");
        rm.writeClasses();
        rm.write(">");
        rm.writeEscaped(oLI.getCategoryFirstSeperator());
        rm.write('</div>');
    };

    sap.ushell.ui.launchpad.SearchSuggestionListItemRenderer.renderLICategorySeperator = function (rm, oLI) {
        rm.write("<div");
        rm.addClass("sapUshellSearchSuggestionListItemCategorySeperator");
        rm.writeClasses();
        rm.write(">");
        rm.writeEscaped(oLI.getCategorySeperator());
        rm.write('</div>');
    };
}());