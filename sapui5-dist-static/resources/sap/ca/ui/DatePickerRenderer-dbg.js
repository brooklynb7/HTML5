jQuery.sap.declare("sap.ca.ui.DatePickerRenderer");
jQuery.sap.require("sap.m.InputBaseRenderer");
jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class DatePicker renderer. 
 * @static
 */
sap.ca.ui.DatePickerRenderer = sap.ui.core.Renderer.extend(sap.m.InputBaseRenderer);



/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */

sap.ca.ui.DatePickerRenderer.writeInnerContent = function(r, c) {

        r.write('<div class="sapMInputValHelp">');
        r.renderControl(c._getCalendarIcon());
        r.write('</div>');
    
};

sap.ca.ui.DatePickerRenderer.addInnerClasses = function(oRm, oControl) {
        oRm.addClass("sapMInputInnerVH");
};
