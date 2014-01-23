jQuery.sap.declare("sap.ca.ui.FileUploadRenderer");
jQuery.sap.require("sap.m.ListRenderer");
//temporary workaround needed for the jQuery plugins to work
//proper fix to be implemented
define = undefined;
jQuery.sap.require("sap.ca.ui.JS.jquery-ui-widget");
jQuery.sap.require("sap.ca.ui.JS.jquery-iframe-transport");
jQuery.sap.require("sap.ca.ui.JS.jquery-fileupload");

/**
 * @class FileUpload renderer.
 * @static
 */
sap.ca.ui.FileUploadRenderer = {};

/**
 * Renders the HTML for the given control, using the provided
 * {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager}
    *            oRm the RenderManager that can be used for writing to the render
 *            output buffer
 * @param {sap.ui.core.Control}
    *            oControl an object representation of the control that should be
 *            rendered
 */
sap.ca.ui.FileUploadRenderer.render = function(oRm, oControl) {
    // write the HTML into the render manager

    oRm.write("<div");
    oRm.writeControlData(oControl);
    oRm.addClass("sapCaUiFU");
    if (oControl.getEditMode()){
        oRm.addClass("sapCaUiFUEdit");
    }
    oRm.writeClasses();
    oRm.write(">");
    oRm.renderControl(oControl.getAggregation("attachmentNumberLabel"));

    oRm.write("<div ");
    oRm.addClass("sapCaUiFUHeader");
    oRm.writeClasses();
    oRm.write(">");

    oRm.renderControl(oControl.getAggregation("toolBar"));

    if(oControl.getUploadEnabled()) {
        oRm.write("<input type='file' name='files[]' tabindex='-1' ");
        oRm.writeAttributeEscaped("id", oControl.getId() + "-upload");

        //this is required for ios in order to allow camera capture
        //otherwise, it will only allow selecting from albums
        if(jQuery.device.is.ipad || jQuery.device.is.iphone) {
            oRm.write(" capture='camera' ");
        } else {
            oRm.write(" multiple ");
        }
        oRm.write("></input>");
    }

    oRm.write("<div ");
    oRm.addClass("sapCaUiFUProgressHeader");
    oRm.writeClasses();
    oRm.write(">");

    oRm.renderControl(oControl.getAggregation("uploadProgressLabel"));
    oRm.write("</div>");

    oRm.write("</div>");

    oRm.renderControl(oControl.getAggregation("fileList"));
    oRm.write("</div>");
};


