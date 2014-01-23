jQuery.sap.declare("sap.ca.ui.InPlaceEditRenderer");

/**
 * @class InPlaceEdit renderer.
 * @static
 */
sap.ca.ui.InPlaceEditRenderer = {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oInPlaceEdit an object representation of the control that should be rendered
 */
sap.ca.ui.InPlaceEditRenderer.render = function(rm, oInPlaceEdit){

    var oContent = oInPlaceEdit.getContent();
    var sWidth;

    if (oContent) {
        if (oContent.getWidth) {
            sWidth = oContent.getWidth();
        }
        if (oContent.getVisible && !oContent.getVisible()) {
            // invisible -> render nothing
            return;
        }
    }else{
        // no content -> render nothing
        return;
    }

    // write the HTML into the render manager
    rm.write("<div");
    rm.writeControlData(oInPlaceEdit);
    rm.addClass("sapCaUiIpe");

    if (!oInPlaceEdit.getEditable()) {
        rm.addClass("sapCaUiIpeRo");
    }else if (!oInPlaceEdit._bEditMode) {
        // display mode
        rm.writeAttribute("tabindex", "-1"); //to have focus event on clicking on this DIV (ComboBox expander in display mode)
        if (!oInPlaceEdit._sOldTextAvailable) {
            if (oContent instanceof sap.m.Select) {
                rm.addClass("sapCaUiIpeCombo");
            }
        }
        if (oContent instanceof sap.m.Link) {
            rm.addClass("sapCaUiIpeLink");
        }
    }else{
        // edit mode
        rm.addClass("sapCaUiIpeEdit");
    }

    if (sWidth) {
        rm.addStyle("width", sWidth);
    }

    if (oInPlaceEdit.getUndoEnabled() && oInPlaceEdit._sOldTextAvailable &&
            ( !oInPlaceEdit._bEditMode || ( oInPlaceEdit._bEditMode && oInPlaceEdit._oEditControl.getValue() != oInPlaceEdit._sOldText))) {
        // there is an old text available - visualize Undo
        rm.addClass("sapCaUiIpeUndo");
    }

    switch (oInPlaceEdit.getValueState()) {
        case sap.ui.core.ValueState.Error:
            rm.addClass('sapCaUiIpeErr');
            break;
        case sap.ui.core.ValueState.Success:
            rm.addClass('sapCaUiIpeSucc');
            break;
        case sap.ui.core.ValueState.Warning:
            rm.addClass('sapCaUiIpeWarn');
            break;
        default:
            break;
    }


    rm.writeClasses();
    rm.writeStyles();
    rm.write(">"); // DIV

    if (oInPlaceEdit._sOldTextAvailable || oContent instanceof sap.m.Link) {
        // there is an old text available - put content in a extra DIV to position
        // for Link do it always to have the edit button next to the link, but have the defined width for the outer DIV
        rm.write("<div");
        rm.addClass("sapCaUiIpeCont");
        rm.addClass("sapCaUiIpeCont");
        if (oContent instanceof sap.m.Select) {
            rm.addClass("sapCaUiIpeCombo");
        }
        rm.writeClasses();
        rm.write(">"); // DIV

    }

    if (oInPlaceEdit._bEditMode) {
        this.renderEditContent(rm, oInPlaceEdit);
    }
    else{
        this.renderDisplayContent(rm, oInPlaceEdit);
    }
    if (oInPlaceEdit._sOldTextAvailable || oContent instanceof sap.m.Link) {
        rm.write("</div>");
        if (oInPlaceEdit.getUndoEnabled() && oInPlaceEdit._sOldTextAvailable) {
            // there is an old text available and undo enabled - render undo button
            rm.renderControl(oInPlaceEdit._oUndoButton);
        }
    }


    rm.write("</div>");
};

sap.ca.ui.InPlaceEditRenderer.renderDisplayContent = function(rm, oInPlaceEdit){

    if (oInPlaceEdit._oDisplayControl) {
        rm.renderControl(oInPlaceEdit._oDisplayControl);
        if (oInPlaceEdit.getEditable() && oInPlaceEdit._oDisplayControl instanceof sap.m.Link) {
            rm.renderControl(oInPlaceEdit._oEditButton);
        }
    }

};

sap.ca.ui.InPlaceEditRenderer.renderEditContent = function(rm, oInPlaceEdit){

    if (oInPlaceEdit._oEditControl) {
        rm.renderControl(oInPlaceEdit._oEditControl);
    }

};