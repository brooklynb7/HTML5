jQuery.sap.declare("sap.ca.ui.HierarchyItemRenderer");
jQuery.sap.require("sap.ui.layout.HorizontalLayout");
jQuery.sap.require("sap.m.Label");
jQuery.sap.require("sap.m.Link");

/**
 * @class HierarchyItem renderer.
 * @static
 */
sap.ca.ui.HierarchyItemRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ca.ui.HierarchyItemRenderer.render = function (oRm, oControl) {
    var iconURI = oControl.getProperty("icon");
    var sLevelType = oControl.getProperty("levelType");
    var sIdentifier = oControl.getProperty("identifier");
    var sTitle = oControl.getProperty("title");
    var sLink = oControl.getProperty("link");
    var bEmphasized = oControl.getProperty("emphasized");
    var bIsIconURINotEmpty = this.isNotEmpty(iconURI);
    var bIsLevelTypeNotEmpty = this.isNotEmpty(sLevelType);
    var bIsIdentifierNotEmpty = this.isNotEmpty(sIdentifier);
    var bIsTitleNotEmpty = this.isNotEmpty(sTitle);
    var bIsLinkNoEmpty = this.isNotEmpty(sLink);
    // write the HTML into the render manager
    oRm.write("<div");
    oRm.writeControlData(oControl);
    oRm.addClass("sapCaUiHierarchyItem");
    if (bEmphasized) {
        oRm.addClass("sapCaUiHierarchyItemEmphasized");
    }
    oRm.writeClasses();
    oRm.write(">");
    oRm.write("<div");
    oRm.writeControlData(oControl);
    oRm.addClass("sapCaUiHierarchyItemBlockContainer");
    oRm.writeClasses();
    oRm.write(">");
    if (bIsIconURINotEmpty || bIsLevelTypeNotEmpty || bIsIdentifierNotEmpty) {
        oRm.write("<div");
        oRm.writeControlData(oControl);
        oRm.addClass("sapCaUiHierarchyItemBlock");
        oRm.writeClasses();
        oRm.write(">");
        if (bIsIconURINotEmpty) {
            oRm.renderControl(oControl._getIconControl());
        }
        if (bIsLevelTypeNotEmpty) {
            oRm.renderControl(oControl._getLevelTypeLabel());
        }
        if (bIsIdentifierNotEmpty) {
            oRm.renderControl(oControl._getIdentifierLabel());
        }
        oRm.write("</div>");
    }
    if (bIsTitleNotEmpty || bIsLinkNoEmpty) {
        oRm.write("<div");
        oRm.writeControlData(oControl);
        oRm.addClass("sapCaUiHierarchyItemBlock");
        oRm.writeClasses();
        oRm.write(">");
        if (bIsTitleNotEmpty) {
            oRm.renderControl(oControl._getTitleLabel());
        }
        if (bIsLinkNoEmpty) {
            oRm.renderControl(oControl._getLinkControl());
        }
        oRm.write("</div>");
    }
    oRm.write("</div>");
    oRm.write("</div>");
};


sap.ca.ui.HierarchyItemRenderer.isNotEmpty = function (value) {
    return (value != undefined && value != "");
}