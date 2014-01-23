jQuery.sap.declare("sap.ca.ui.HierarchyRenderer");

/**
 * @class Hierarchy renderer.
 * @static
 */
sap.ca.ui.HierarchyRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ca.ui.HierarchyRenderer.render = function (oRm, oControl) {
    // write the HTML into the render manager
    oRm.write("<div");
    oRm.writeControlData(oControl);
    oRm.addClass("sapCaUiHierarchy");
    oRm.writeClasses();
    oRm.write(">");
    var sIconHtml = '<div class="sapCaUiHierarchyIcon"><div class="sapCaUiHierarchyIconVertRec"></div><div class="sapCaUiHierarchyIconHorizRec"></div><div class="sapCaUiHierarchyIconTriangle"></div></div>';
    var aItems = oControl.getItems();
    var iNbOfItems = aItems.length;
    var bNeedsExpand = oControl.getHideOptionalLevels();
    var oBtnParent;
    // Render the lines
    for (var i = 0; i < iNbOfItems; i++) {
        var oItem = aItems[i];
        oItem.removeStyleClass("sapCaUiHierarchyHidden");
        var bIsOptional = oItem.getOptional();
        oRm.write("<div");
        if (bIsOptional && bNeedsExpand && oBtnParent) {
            oRm.addClass("sapCaUiHierarchyHidden");
        }
        oRm.addClass("sapCaUiHierarchyItemLine");
        oRm.writeClasses();
        oRm.write(">");
        if (i > 0) {
            oRm.write("<div class='sapCaUiHierarchyIconContainer'>" + sIconHtml + "</div>");
        }
        if (bIsOptional && bNeedsExpand && !oBtnParent) {
            oBtnParent = oControl._getExpandButton().addStyleClass("sapCaUiHierarchyItemLineContent");
            oRm.renderControl(oBtnParent);
            oItem.addStyleClass("sapCaUiHierarchyHidden");
        } else if( (!bIsOptional) && bNeedsExpand && oBtnParent){
            oBtnParent = null;
        }
        oItem.addStyleClass("sapCaUiHierarchyItemLineContent");
        oRm.renderControl(oItem);
        oRm.write("</div>");
    }
    oRm.write("</div>");
};
