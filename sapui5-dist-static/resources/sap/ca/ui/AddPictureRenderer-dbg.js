jQuery.sap.declare("sap.ca.ui.AddPictureRenderer");

//temporary workaround needed for the jQuery plugins to work
//proper fix to be implemented
define = undefined;
jQuery.sap.require("sap.ca.ui.JS.jquery-ui-widget");
jQuery.sap.require("sap.ca.ui.JS.jquery-iframe-transport");
jQuery.sap.require("sap.ca.ui.JS.jquery-fileupload");

/**
 * @class AddPicture renderer.
 * @static
 */
sap.ca.ui.AddPictureRenderer = {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ca.ui.AddPictureRenderer.render = function(oRm, oControl){
	 // write the HTML into the render manager

    // check the rendering mode option
    var bEditable = oControl.getEditable();
    var oButtonPageType = oControl.getButtonPageType();
    var aPictures = oControl.getPictures();
    var iPicturesLength = aPictures.length;
    var maxNumber = oControl.getMaxPictureNumber();

	oRm.write("<div");
	oRm.writeControlData(oControl);
    oRm.addClass("sapCaUiAddPicture");
    oRm.addClass("sapUiHLayout");
    oRm.addClass("sapUiHLayoutNoWrap");
    oRm.writeClasses();

    var width = oControl.getWidth();
    var alignment = oControl.getPictureAlign();
    var itemStyle = (alignment==sap.ui.core.TextAlign.Right) ? "sapCaUiPictureItemAlignRight" : "sapCaUiPictureItemAlignLeft";

    if (width) {
        oRm.addStyle("width", width);
        oRm.addStyle("text-align", alignment);
    }
    oRm.writeStyles();

	oRm.write(">");

    if (bEditable){
        oRm.write("<div");
        oRm.addClass("sapCaAPAddButton");
        oRm.writeClasses();
        oRm.write(">");
        oRm.renderControl(oControl._getButton());

        if (iPicturesLength < maxNumber) {
            oRm.write("<input type='file' accept='image/*' class='sapCaAPInputFile' ");
            if (jQuery.device.is.desktop){
            	oRm.writeAttribute("tabindex", "-1");
            }
            oRm.writeAttributeEscaped("id", oControl.getId() + "-capture");
            oRm.write(" />");
        }

        if (iPicturesLength >0 && oButtonPageType == sap.ca.ui.AddPicture.BUTTON_PAGE_TYPE.TAB){
            oRm.write("<hr");
            oRm.addClass("sapCaUiHorizontalRuler");
            oRm.writeClasses();
            oRm.write("></hr>");
        }
        oRm.write("</div>")
    }

    oRm.write("<div ");
    oRm.writeAttributeEscaped("id", oControl.getId() + "-imageContainer");
    oRm.addClass("sapCaUiAddPictureHLayout");
    oRm.writeClasses();
    oRm.write(">");

    if (aPictures){
        for (var i=0;i<iPicturesLength;i++) {
            aPictures[i]._addPictureId = oControl.getId();
            aPictures[i].addStyleClass(itemStyle);
            if(!oControl.hasListeners("show")){
                aPictures[i].addStyleClass("sapCaUiPictureItemNoPress");
            }
            var size = isNaN(parseInt(oControl.getItemSize())) ? 60 : parseInt(oControl.getItemSize());
            aPictures[i]._width = size +"px";
            aPictures[i]._height = size + "px";
            oRm.renderControl(aPictures[i]);

            
        }
    }
    oRm.write("</div>");

    oRm.write("</div>");
};
