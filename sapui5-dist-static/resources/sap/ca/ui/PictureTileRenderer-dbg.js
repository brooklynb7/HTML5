jQuery.sap.declare("sap.ca.ui.PictureTileRenderer");
jQuery.sap.require("sap.m.CustomTileRenderer");

/**
 * @class PictureTile renderer. 
 * @static
 */

sap.ca.ui.PictureTileRenderer = sap.ui.core.Renderer.extend(sap.m.CustomTileRenderer);

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */

 sap.ca.ui.PictureTileRenderer.render = function(oRm, oControl) {

	jQuery.sap.log.debug("PictureTileRenderer :: begin rendering");
	
	oRm.write("<div ");
	oRm.writeControlData(oControl);

	oRm.addClass("sapCaUiPictureTile");
	oRm.writeClasses();

	oRm.write(">");
	
	
	oRm.write("<div");
	oRm.addClass("sapCaUiPictureTileContent");
	oRm.writeClasses();
	oRm.write(">");

	oRm.write("<div id='"+oControl.getId()+"-wrapper'>");
	
	oRm.renderControl(oControl._oDeletePictureButton);
	
	this._renderContent(oRm, oControl);
	oRm.write("</div>");
	
	oRm.write("</div></div>");
};

sap.ca.ui.PictureTileRenderer._renderContent = function(rm, oTile) {
	rm.renderControl(oTile.getContent());
};
