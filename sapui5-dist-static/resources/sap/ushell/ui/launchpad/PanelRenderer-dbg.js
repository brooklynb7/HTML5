// Copyright (c) 2013 SAP AG, All Rights Reserved
jQuery.sap.declare("sap.ushell.ui.launchpad.PanelRenderer");

/**
 * @class Panel renderer. 
 * @static
 * 
 * @private
 */
sap.ushell.ui.launchpad.PanelRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ushell.ui.launchpad.PanelRenderer.render =  function(oRm, oControl) {
    // Return immediately if control is invisible
    if (!oControl.getVisible()) {
        return;
    }

    oRm.write("<section");
    oRm.writeControlData(oControl);
    oRm.addClass("sapMPanel");
    oRm.addClass("sapUshellPanel");
    if (!oControl.getTranslucent()) {
        oRm.addClass("sapMPanelBG");
    }
    oRm.addStyle("width", oControl.getWidth());
    oRm.addStyle("height", oControl.getHeight());
    oRm.writeClasses();
    oRm.writeStyles();
    oRm.write(">");
    var aHeaderChildren = oControl.getHeaderContent();
    var jLength = aHeaderChildren.length;
    if(oControl.getHeaderText() || jLength > 0 || oControl.getHeaderBar()) {
        oRm.write("<header");
        oRm.addClass("sapMPanelHdr");
        oRm.writeClasses();
        oRm.write(">");
        if(oControl.getHeaderText() || jLength > 0) {
            oRm.write("<");
            oRm.write(oControl.getHeaderLevel().toLowerCase());
            oRm.write(">");
            if (oControl.getHeaderText()) {
                oRm.writeEscaped(oControl.getHeaderText());
            }
            for (var j = 0; j < jLength; j++) {
                oRm.renderControl(aHeaderChildren[j]);
            }
            oRm.write("</");
            oRm.write(oControl.getHeaderLevel().toLowerCase());
            oRm.write(">");
        }
        if (oControl.getHeaderBar()) {
/*            oRm.addClass("sapUshellPanelHdrBar");*/
            oRm.renderControl(oControl.getHeaderBar());
        }
        oRm.write("</header>");
    }
    oRm.write("<div");
    oRm.addClass("sapMPanelContent");
    oRm.writeClasses();
    oRm.write(">");
    var aChildren = oControl.getContent();
    var iLength = aChildren.length;
    for (var i = 0; i < iLength; i++) {
        oRm.renderControl(aChildren[i]);
    }
    oRm.write("</div>");
    oRm.write("</section>");
};
