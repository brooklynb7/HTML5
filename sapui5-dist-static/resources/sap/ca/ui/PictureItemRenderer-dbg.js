jQuery.sap.declare("sap.ca.ui.PictureItemRenderer");

/**
 * @class PictureItem renderer.
 * @static
 */
sap.ca.ui.PictureItemRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ca.ui.PictureItemRenderer.render = function (oRm, oControl) {
    // write the HTML into the render manager
    
    oRm.write("<div");
    oRm.writeControlData(oControl);
    oRm.addClass("sapCaUiPictureItem");
    oRm.writeClasses();
    

    var _width = oControl._width || oControl.getWidth();
    var _height = oControl._height || oControl.getHeight();    
    oRm.addStyle("width", _width);
    oRm.addStyle("height", _height);    
    oRm.writeStyles();

    
    oRm.writeAttribute("tabindex", "0");
    oRm.write(">");

    oRm.renderControl(oControl._oImage);

    oRm.write("</div>");

};
