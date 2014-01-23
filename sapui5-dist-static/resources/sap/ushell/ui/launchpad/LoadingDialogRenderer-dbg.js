// Copyright (c) 2013 SAP AG, All Rights Reserved
/*global jQuery, sap*/

(function () {
    "use strict";
    /*jslint nomen: true*/
    jQuery.sap.declare("sap.ushell.ui.launchpad.LoadingDialogRenderer");

    /**
     * @class sap.ushell.ui.launchpad.LoadingDialogRenderer
     * @static
     * @private
     */
    sap.ushell.ui.launchpad.LoadingDialogRenderer = {};


    /**
     * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
     *
     * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
     * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
     * @private
     */
    sap.ushell.ui.launchpad.LoadingDialogRenderer.render = function (oRm, oControl) {
        var sTooltip = oControl.getTooltip_AsString();
        // add custom class to label
        oControl._oLabel.addStyleClass("sapUshellLoadingDialogLabel");
        oRm.write("<div");
        oRm.writeControlData(oControl);
        oRm.addClass("sapUshellLoadingDialog sapMBusyDialog sapMCommonDialog");
        if (jQuery.device.is.iphone) {
            oRm.addClass("sapMDialogHidden");
        }
        if (!oControl._isPlatformDependent) {
            if (!oControl.getText() && !oControl.getTitle() && !oControl.getShowCancelButton()) {
                oRm.addClass("sapMBusyDialogSimple");
            }
        }
        oRm.writeClasses();
        if (sTooltip) {
            oRm.writeAttributeEscaped("title", sTooltip);
        }
        oRm.write(">");
        if (oControl.getTitle()) {
            oRm.write("<header class=\"sapMDialogTitle\">");
            oRm.writeEscaped(oControl.getTitle());
            oRm.write("</header>");
        }

        if (jQuery.os.ios || !oControl._isPlatformDependent) {
            this.renderAppInfo(oRm, oControl);
            this.renderFioriFlower(oRm, oControl);
        } else {
            this.renderFioriFlower(oRm, oControl);
            this.renderAppInfo(oRm, oControl);
        }

        if (oControl.getShowCancelButton()) {
            oRm.write("<footer class='sapMBusyDialogFooter sapMFooter-CTX'>");
            oRm.renderControl(oControl._oButton);
            oRm.write("</footer>");
        }
        oRm.write("</div>");
    };

    sap.ushell.ui.launchpad.LoadingDialogRenderer.renderAppInfo = function (oRm, oControl) {
        oRm.write("<div").addClass("sapUshellLoadingDialogAppData").writeClasses().write(">");
        if (oControl.getIconUri()) {
            oRm.renderControl(oControl.oIcon);
        }
        oRm.renderControl(oControl._oLabel);
        oRm.write("</div>");
    };

    sap.ushell.ui.launchpad.LoadingDialogRenderer.renderFioriFlower = function (oRm, oControl) {
        var i;
        // create either flowery code or busy indicator
        if (jQuery.support.cssAnimations) {
            oRm.write("<div id='fiori2-loader'>");

            oRm.write("<div class='fiori2-blossom'>");

            for (i = 1; i < 6; i = i + 1) {
                oRm.write("<div class='fiori2-leafContainer fiori2-leafContainer" + i + "'>");
                oRm.write("<div class='fiori2-leaf fiori2-leaf" + i + "'></div>");
                // end leafContainer
                oRm.write("</div>");
            }
            // end blossom
            oRm.write("</div>");

            // end fiori2-loader
            oRm.write("</div>");
        } else {
            oRm.renderControl(oControl._busyIndicator);
        }
    };

}());
