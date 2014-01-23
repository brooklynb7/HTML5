jQuery.sap.declare("sap.ca.ui.NotesRenderer");
jQuery.sap.require("sap.m.ListRenderer");

/**
 * @class Notes renderer.
 * @static
 */
sap.ca.ui.NotesRenderer = {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ca.ui.NotesRenderer.render = function(oRm, oControl){
    if (!oControl.getVisible())
        return;
    oRm.write("<div");
    oRm.writeControlData(oControl);
    oRm.addClass("sapCaUiNotes");
    oRm.writeClasses();
    oRm.write(">");
    if (oControl.getShowNoteInput()){
       oRm.write("<div ");
       oRm.writeAttributeEscaped("id", oControl.getId() + "-noteInput");
       oRm.addClass("sapCaUiNoteInput");
       oRm.writeClasses();
       oRm.write(">");


        if (!jQuery.device.is.phone) {
            oRm.renderControl(oControl._oButton);
            oRm.renderControl(oControl._oTextArea);
        } else {
            oRm.renderControl(oControl._oTextArea);
            oRm.renderControl(oControl._oButton);
        }

       oRm.write("</div>");
    }
    sap.m.ListRenderer.render(oRm, oControl);
    oRm.write("</div>");
};
