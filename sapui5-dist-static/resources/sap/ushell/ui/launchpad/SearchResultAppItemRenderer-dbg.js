// Copyright (c) 2013 SAP AG, All Rights Reserved
/*global jQuery, sap*/

(function () {
    "use strict";
    /*global jQuery, sap, window */
    jQuery.sap.declare("sap.ushell.ui.launchpad.SearchResultAppItemRenderer");
    jQuery.sap.require("sap.ui.core.Renderer");
    jQuery.sap.require("sap.m.ButtonRenderer");

    sap.ushell.ui.launchpad.SearchResultAppItemRenderer = sap.ui.core.Renderer.extend(sap.m.ButtonRenderer);

    /**
     * Searches for occurrences of a given search term and substitutes substrings wrapped in HTML bold tag
     *
     * @param {string} sHighlightTerm an array of strings that will be detected and replaced
     * @param {string} sText contains the text to be highlighted
     * @returns {string} the text with all occurrences wrapped
     * 
     * @private
     */
    sap.ushell.ui.launchpad.SearchResultAppItemRenderer.highlight = function (sHighlightTerm, sText) {
        var regExpHighlight;
        if (sHighlightTerm) {
            // build regular expression with escaped highlight term (case insensitive + greedy)
            regExpHighlight = new RegExp("(" + sHighlightTerm.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, "\\$1") + ")", "gi");
            // regexp replace occurrence with wrapped self
            sText = sText.replace(regExpHighlight, "<b>$1</b>");
        }
        return sText;
    };
}());